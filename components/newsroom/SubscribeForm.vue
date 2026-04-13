<template>
  <div class="application-form">
    <b-card id="application-message" class="card-cta shadow border-0">
      <slot name="form-title">
        <h4 class="card-title">
          {{ $t('pages.newsroom.subscribe.title') }}
        </h4>
      </slot>
      <form @submit.prevent="onSubmit" novalidate>
        <input type="hidden" id="gclid_field" name="gclid_field" value="" />
        <b-form-group>
          <label class="material-label" :class="{ empty: form.name === '' }">
            <span>{{ $t('pages.newsroom.subscribe.name') }}</span>
            <b-form-input
              id="exporter-name"
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
            <span>{{ $t('pages.newsroom.subscribe.email') }}</span>
            <b-form-input
              id="exporter-email"
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
            <span>{{ $t('pages.newsroom.subscribe.phone') }}</span>
            <b-form-input
              id="exporter-phone"
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
            <span>{{ $t('pages.newsroom.subscribe.company') }}</span>
            <b-form-input
              id="exporter-company"
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
        <b-button
          v-track-click
          id="apply-form-submit"
          type="submit"
          variant="primary"
          class="btn-cta"
          :class="isMx ? 'text-transform-none' : 'text-capitalize'"
          :disabled="loading"
        >
          <font-awesome-icon :icon="'spinner'" spin v-if="loading" />
          {{
            loading
              ? $t('pages.newsroom.subscribe.subscribeBtnLoading')
              : $t('pages.newsroom.subscribe.subscribeBtn')
          }}
        </b-button>
        <div class="consent">
          <p>{{ $t('pages.newsroom.subscribe.consent') }}</p>
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
import { safeText, safeEmail } from '../../store/validations'

export default {
  mixins: [validationMixin],
  validations: {
    form: {
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
  },
  data() {
    return {
      loading: false,
      form: {
        name: '',
        email: '',
        phone: '',
        company: '',
        utype: 'exporter_lead',
        stage: '-1',
        state: '',
        city: '',
        last_visited_page_url: '',
        id: null,
        category: ''
      },
      routeParams: ['name', 'email', 'phone', 'company', 'id'],
      categories: this.$t(
        'pages.landing.tradeFinance.jumbotron.form.categories'
      )
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
    onSubmit() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }
      this.loading = true
      this.$ma.setAlias(this.form.email)
      const geoCookie = this.$cookies.get('geo') || {}
      const country = geoCookie.country || this.$t('country')
      if (!this.isEc) {
        /**
         * * 1.If not Ecuador we will make the normal API call to backend
         * * 2.In case of Ecuador, we will hit Zapier hook URL
         */
        return this.axios({
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
          .then((res) => {
            let location = res.data.location
            this.$ma.setUserProperties({
              userId: location.split('/')[location.split('/').length - 1],
              uid: location.split('/')[location.split('/').length - 1],
              applicant_name: this.form.name,
              exporter_email: this.form.email
            })
            this.$nuxt.$router.push(this.redirectURL)
          })
          .catch((err) => {
            this.loading = false
            this.$nuxt.$router.push(this.redirectURL)
          })
      } else {
        const { name, email, phone, company, category, utype } = this.form

        let dataToSend = {
          name,
          company,
          email,
          phone,
          country,
          referrer: process.browser ? window.location.href : this.referrer,
          firstVisited: this.$cookies.get('firstVisited'),
          geo: geoCookie ? geoCookie.city : '',
          category,
          utype
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

        const data = {
          zap_name: '', // ECUADOR_WEBSITE_ZAP,
          zap_payload: JSON.stringify(dataToSend)
        }
        return apiService
          .callZapierHook(data)
          .then((res) => {
            this.$nuxt.$router.push(this.redirectURL)
          })
          .catch((err) => {
            this.loading = false
            this.$nuxt.$router.push(this.redirectURL)
          })
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
    isUs() {
      return this.$i18n.locale.indexOf('us') > -1
    },
    isAe() {
      return this.$i18n.locale.indexOf('ae') > -1
    },
    isEc() {
      return this.$i18n.locale.indexOf('ec') > -1
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
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables';
@import '~bootstrap/scss/mixins';

.card-cta {
  position: absolute;
  z-index: 1;
  top: -18rem;
  .card-title {
    color: $dark-blue;
    font-size: 1.75rem;
  }
}

.consent {
  color: $dark-blue;
  margin-top: 1.5rem;
  margin-bottom: 0;
}

@include media-breakpoint-down(sm) {
  .card-cta {
    position: relative;
    top: 0;
  }
}
</style>
