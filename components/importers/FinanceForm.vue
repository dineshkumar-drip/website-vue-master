<template>
  <div id="importers-finance-form" class="contact-form">
    <b-card class="card-cta w-md-75" id="page-form" v-if="!thanks">
      <h4 class="card-title">
        {{ $t('pages.landing.buyerFinance.jumbotron.form.title') }}
      </h4>
      <form @submit.prevent="onSubmit" novalidate>
        <input type="hidden" id="gclid_field" name="gclid_field" value="" />
        <b-form-group>
          <label class="material-label" :class="{ empty: form.name === '' }">
            <span>{{
              $t('pages.importers.jumbotron.contactForm.placeholders.name')
            }}</span>
            <b-form-input
              id="us-buyer-name"
              name="us_buyer[name]"
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
            <span>{{
              $t('pages.importers.jumbotron.contactForm.placeholders.email')
            }}</span>
            <b-form-input
              id="us-buyer-email"
              name="us_buyer[email]"
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
            <span>{{
              $t('pages.importers.jumbotron.contactForm.placeholders.phone')
            }}</span>
            <b-form-input
              id="us-buyer-phone"
              name="us_buyer[phone]"
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
          <label
            class="material-label"
            :class="{ empty: form.organization === '' }"
          >
            <span>{{
              $t(
                'pages.importers.jumbotron.contactForm.placeholders.organization'
              )
            }}</span>
            <b-form-input
              id="us-buyer-organization"
              name="us_buyer[organization]"
              block
              type="text"
              :state="validateState('organization')"
              v-model="$v.form.organization.$model"
              required
            />
            <b-form-invalid-feedback
              >This is a required field and requires a valid company
              name.</b-form-invalid-feedback
            >
          </label>
        </b-form-group>
        <div class="color-noble-blue-500">
          <div class="small color-noble-blue-500">
            By clicking on the box below, I expressly consent by electronic
            signature to Drip Capital, Inc, directly or by third-parties acting
            on its behalf, to send marketing/promotional messages, including
            texts and calls made using an automatic telephone dialling system or
            pre-recorded and/or artificial voice messages or emails related to
            the product or service which I am inquiring about to the number
            provided above by me. Provision of this consent is not required to
            obtain any good or service. You may revoke this consent at any time
            through this
            <a
              href="#hubspotform"
              data-title="link of the Artificial/Pre-Recorded Communications"
            >
              Opt-Out Form
            </a>
          </div>
          <b-form-group class="radio-container">
            <b-form-radio
              v-model="form.selected"
              name="consent-radios"
              value="Yes"
              class="mr-2"
            >
              Yes
            </b-form-radio>
            <b-form-radio
              v-model="form.selected"
              name="consent-radios"
              value="No"
            >
              No
            </b-form-radio>
            <b-form-invalid-feedback
              v-if="$v.form['selected'].$dirty && form.selected === ''"
            >
              This field is mandatory
            </b-form-invalid-feedback>
          </b-form-group>
        </div>
        <div class="d-flex justify-content-center">
          <b-button
            v-track-click
            id="importers-submit"
            type="submit"
            variant="primary"
            size="lg"
            :disabled="loading"
            class="btn-cta"
            :class="isMx ? 'text-transform-none' : 'text-capitalize'"
          >
            <font-awesome-icon :icon="'spinner'" spin v-if="loading" />
            {{
              loading
                ? $t('pages.importers.jumbotron.contactForm.sendingMessage')
                : $t('pages.landing.buyerFinance.jumbotron.form.cta')
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
      organization: {
        required,
        safeText
      },
      selected: {
        required
      }
    }
  },
  data() {
    return {
      loading: false,
      thanks: false,
      form: {
        name: '',
        email: '',
        organization: '',
        address: '',
        phone: '',
        message: '',
        selected: '',
        utype: 'us_buyer'
      }
    }
  },
  mounted() {
    this.getPublicToken()
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
      const promises = []
      try {
        const geoCookie = this.$cookies.get('geo') || {}
        const country = geoCookie.country || this.$t('country')
        promises.push(
          this.axios({
            url: process.env.apiUrl + '/business/us_buyers/create_or_update',
            method: 'post',
            headers: {
              Authorization: 'Token ' + this.publicToken
            },
            data: {
              us_buyer: {
                ...this.form,
                country: this.$t('country'),
                referrer: document.vueReferrer
              }
            }
          })
        )
        if (this.$ma) {
          this.$ma.setUserProperties({
            applicant_name: this.form.name,
            exporter_email: this.form.email
          })
        }

        const {
          name,
          email,
          phone,
          organization,
          selected: consent
        } = this.form

        let dataToSend = {
          name,
          email,
          phone,
          country: this.$cookies.get('currentCountry') || country,
          geo: geoCookie ? geoCookie.city : '',
          company: organization,
          referrer: process.browser
            ? window.location.href
            : process.env.DRIP_WEB_HOST + this.$route.path,
          firstVisited: this.$cookies.get('firstVisited'),
          geo_country: geoCookie.country,
          geo_city: geoCookie.city,
          geo_state: geoCookie.state,
          geo_ip: geoCookie.ip,
          geo_loc: geoCookie.loc,
          consent: consent == 'Yes' ? 'true' : 'false'
        }
        if (this.isUs) {
          let zapToken
          switch (this.$route.path) {
            case '/en-us/importers/apply':
            case '/en-us/importers/apply/':
              zapToken = '' // ZAPIER_EN_US_IMPORTER_APPLY_HOOK_TOKEN
              break
            case '/en-us/landing/buyer-finance':
            case '/en-us/landing/buyer-finance/':
              zapToken = 'SCF_WS_TO_FS_CAMPAIGN_SEM_PAGE'
              break
            default:
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

        await Promise.all(promises)

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
    }
  },
  computed: {
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
    isUs() {
      return this.$i18n.locale.indexOf('us') > -1
    },
    isMx() {
      return this.$i18n.locale.indexOf('mx') > -1
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
  margin-left: 5rem;
  @include media-breakpoint-down(xl) {
    margin-left: 0rem;
  }
}
.card-title {
  font-size: 28px;
  color: $dark-blue;
}
@include media-breakpoint-down(md) {
  .card-cta {
    margin-left: 0;
  }
}
</style>

<style lang="scss">
.radio-container {
  div {
    display: flex;
    flex-wrap: wrap;
    margin: 8px 0;
  }
}
</style>
