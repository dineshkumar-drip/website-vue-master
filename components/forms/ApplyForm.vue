<template>
  <div class="application-form" id="application-form">
    <b-card
      id="application-message"
      class="card-cta"
      :style="{ border: border }"
    >
      <slot name="form-title">
        <h4 class="card-title">
          {{ $t('common.form.title') }}
        </h4>
      </slot>
      <form @submit.prevent="onSubmit" novalidate>
        <input type="hidden" id="gclid_field" name="gclid_field" value="" />
        <b-form-group>
          <label class="material-label" :class="{ empty: form.name === '' }">
            <span>{{ $t('common.form.placeholders.name') }}</span>
            <b-form-input
              id="partner-fieo-name"
              name="user[name]"
              block
              type="text"
              :state="validateState('name')"
              v-model="$v.form.name.$model"
              required
            />
            <b-form-invalid-feedback
              >This is a required field and requires a valid
              name.</b-form-invalid-feedback
            >
          </label>
        </b-form-group>
        <b-form-group>
          <label class="material-label" :class="{ empty: form.email === '' }">
            <span>{{ $t('common.form.placeholders.email') }}</span>
            <b-form-input
              id="partner-fieo-email"
              name="user[email]"
              block
              type="email"
              :state="validateState('email')"
              v-model="$v.form.email.$model"
              required
            />
            <b-form-invalid-feedback
              >This is a required field and requires a valid email
              address</b-form-invalid-feedback
            >
          </label>
        </b-form-group>
        <b-form-group>
          <label class="material-label" :class="{ empty: form.phone === '' }">
            <span>{{ $t('common.form.placeholders.phone') }}</span>
            <b-form-input
              id="partner-fieo-phone"
              name="user[phone]"
              block
              type="tel"
              :state="validateState('phone')"
              v-model="$v.form.phone.$model"
              required
            />
            <b-form-invalid-feedback
              >This is a required field and requires a valid phone
              number</b-form-invalid-feedback
            >
          </label>
        </b-form-group>
        <b-form-group>
          <label class="material-label" :class="{ empty: form.company === '' }">
            <span>{{ $t('common.form.placeholders.company') }}</span>
            <b-form-input
              id="partner-fieo-company"
              name="user[company]"
              block
              type="text"
              :state="validateState('company')"
              v-model="$v.form.company.$model"
              required
            />
            <b-form-invalid-feedback
              >This is a required field and requires a valid company
              name.</b-form-invalid-feedback
            >
          </label>
        </b-form-group>
        <b-form-group v-if="isIn">
          <label
            class="material-label"
            :class="{ empty: form.iec_code === '' }"
          >
            <span>{{ $t('common.form.placeholders.iec') }}</span>
            <b-form-input
              id="partner-fieo-iec_code"
              block
              type="text"
              :state="validateState('iec_code')"
              v-model="$v.form.iec_code.$model"
            />
            <b-form-invalid-feedback
              >This is a required field and requires a valid IEC
              number.</b-form-invalid-feedback
            >
          </label>
        </b-form-group>
        <b-form-group v-if="isMx">
          <label
            class="material-label select-label custom-label"
            :class="{ empty: form.category === '' }"
          >
            <span>{{
              $t('pages.landing.tradeFinance.jumbotron.form.interest')
            }}</span>
            <b-form-select
              id="category-input"
              name="category"
              block
              :options="categories"
              :state="validateState('category')"
              v-model="$v.form.category.$model"
              required
            />
            <b-form-invalid-feedback
              >This is a required field and requires a valid
              category.</b-form-invalid-feedback
            >
          </label>
        </b-form-group>
        <div class="d-flex justify-content-center">
          <b-button
            v-track-click
            id="apply-form-submit"
            type="submit"
            class="btn-cta"
            margin-left="35"
            :class="isMx ? 'text-transform-none' : 'text-capitalize'"
            variant="primary"
            :disabled="loading"
          >
            <font-awesome-icon :icon="'spinner'" spin v-if="loading" />
            {{
              loading
                ? $t('common.form.applying')
                : $t('pages.landing.tradeFinance.jumbotron.form.cta')
            }}
          </b-button>
        </div>
      </form>
    </b-card>
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import { required, email, helpers } from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate'
import { invalidPhone } from '~/modules/helper'
import apiService from '~/modules/restAPIService'
import { safeText, safeEmail, safeIec } from '../../store/validations'

export default {
  mixins: [validationMixin],
  validations() {
    const form = {
      name: {
        required,
        safeText
      },
      email: {
        required,
        email,
        safeEmail
      },
      phone: {
        required,
        invalidPhone
      },
      company: {
        required,
        safeText
      }
    }
    if (this.isIn) {
      form.iec_code = { safeIec }
    }
    if (this.isMx) {
      form.category = {
        required,
        safeText
      }
    }
    return {
      form
    }
  },
  data() {
    return {
      loading: false,
      form: {
        products: '',
        name: '',
        email: '',
        phone: '',
        company: '',
        iec_code: '',
        category: '',
        utype: 'exporter_lead',
        stage: '-1',
        state: '',
        city: '',
        last_visited_page_url: '',
        id: null
      },
      categories: this.$t(
        'pages.landing.tradeFinance.jumbotron.form.categories'
      ),
      routeParams: [
        'name',
        'email',
        'phone',
        'company',
        'iec_code',
        'products',
        'id'
      ]
    }
  },
  mounted() {
    this.getPublicToken()
    this.setDefaults()
    this.getLandingPageUrl()
    this.loadGclid()
  },
  methods: {
    loadGclid() {
      if (typeof addGclid === 'function') {
        addGclid()
        return
      }
      this.$loadScript('/scripts/gclid.js')
        .then(() => {
          // Code to execute after the script loads successfully
          console.debug('Script is ready!')
          if (typeof addGclid === 'function') {
            addGclid()
          }
        })
        .catch((error) => {
          console.debug('Failed to load script:', error)
        })
    },
    validateState(name) {
      if (name) {
        const { $dirty, $error } = this.$v.form[name]
        return $dirty ? !$error : null
      }
      return null
    },
    setDefaults() {
      return this.routeParams.forEach((param) => {
        this.form[param] = this.$route.query[param] || ''
      })
    },
    getPublicToken() {
      this.axios({
        url: process.env.apiUrl + '/v1/access/token'
      })
        .then((response) => {
          this.publicToken = response.data.token
        })
        .catch((err) => {})
    },
    async onSubmit() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }
      this.loading = true
      if (this.$ma) {
        this.$ma.setAlias(this.form.email)
      }
      const geoCookie = this.$cookies.get('geo') || {}
      const country = geoCookie.country || this.$t('country')
      const promises = []
      promises.push(
        this.axios({
          url: process.env.apiUrl + '/business/pipeline/create_or_update',
          method: 'post',
          headers: {
            Authorization: 'Token ' + this.publicToken
          },
          data: {
            user: {
              ...this.form,
              country: this.$t('country'),
              referrer: this.referrer
            },
            application: {
              ...this.form,
              country: this.$t('country'),
              referrer: this.referrer
            }
          }
        })
      )

      const localeSpecificZap = {
        'en-us': '', // ZAPIER_EN_US_PRODUCT_HOOK_TOKEN
        'en-ec': '', // ECUADOR_WEBSITE_ZAP,
        'es-ec': '' // ECUADOR_WEBSITE_ZAP
      }
      const ZAP_TOKEN = localeSpecificZap[this.$i18n.locale]

      const { name, email, phone, company, category, utype } = this.form
      let dataToSend = {
        name,
        company,
        email,
        phone,
        country: this.$cookies.get('currentCountry') || country,
        referrer: process.browser ? window.location.href : this.referrer,
        firstVisited: this.$cookies.get('firstVisited'),
        geo: geoCookie ? geoCookie.city : '',
        category,
        utype,
        geo_country: geoCookie.country,
        geo_city: geoCookie.city,
        geo_state: geoCookie.state,
        geo_ip: geoCookie.ip,
        geo_loc: geoCookie.loc
      }
      if (ZAP_TOKEN) {
        // New zapier api
        const data = {
          zap_name: ZAP_TOKEN,
          zap_payload: JSON.stringify(body)
        }
        promises.push(apiService.callZapierHook(data))
      }

      let zapToken = ''
      switch (this.$i18n.locale) {
        case 'en':
        case 'en-in':
          zapToken = 'INDIA_WEBSITE_ZAP'
          break
        case 'en-us':
          zapToken = 'SCF_WS_TO_FS_CAMPAIGN_SEM_PAGE'
          break
        case 'es-mx':
          zapToken = 'MX_WEBSITE_LEADS_TO_HS'
          break
        default:
          zapToken = ''
          break
      }

      if (zapToken) {
        // New zapier api
        const data = {
          zap_name: zapToken,
          zap_payload: JSON.stringify(dataToSend)
        }
        promises.push(apiService.callZapierHook(data))
      }

      try {
        const resps = await Promise.all(promises)
        let location = resps[0] && resps[0].data ? resps[0].data.location : null
        if (this.$ma) {
          this.$ma.setUserProperties({
            userId: location.split('/')[location.split('/').length - 1],
            uid: location.split('/')[location.split('/').length - 1],
            applicant_name: this.form.name,
            exporter_email: this.form.email
          })
        }

        if (this.$i18n.locale == 'en-us') {
          ChiliPiper.submit(
            this.$t('chilipiper.cpTenantDomain'),
            this.$t('chilipiper.cpRouterName'),
            { map: true, lead: dataToSend }
          )
        } else {
          this.$nuxt.$router.push(this.redirectURL)
        }
        this.loading = false
      } catch (error) {
        this.loading = false
        this.$nuxt.$router.push(this.redirectURL)
      }
    },
    getLandingPageUrl() {
      this.form.last_visited_page_url = document.vueReferrer
      setTimeout(() => {
        Object.keys(localStorage).map((i) => {
          if (i.indexOf('mixpanel') > 0) {
            let mixpanelObj = JSON.parse(localStorage[i])
            const prop = 'Landing Page URL'
            if (mixpanelObj.hasOwnProperty(prop)) {
              this.form.last_visited_page_url = mixpanelObj[prop]
            }
          }
        })
      }, 1000)
    }
  },
  computed: {
    isIn() {
      return this.$i18n.locale.indexOf('en-in') > -1
    },
    isMx() {
      return this.$i18n.locale.indexOf('mx') > -1
    },
    redirectURL() {
      switch (this.$i18n.locale) {
        case 'en':
        case 'en-in':
        case 'es-mx':
          return this.localePath('exporters-thank-you')
        case 'en-us':
          return this.localePath('importers-thank-you')
        default:
          return this.localePath('exporters-thank-you')
      }
    },
    referrer() {
      if (process.client) {
        return window.localStorage.getItem('landingPageURL')
      }
    }
  },
  components: {
    FontAwesomeIcon
  },
  props: ['border']
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables';
.card-title {
  font-size: 1.75rem;
  color: $dark-blue;
}
</style>
