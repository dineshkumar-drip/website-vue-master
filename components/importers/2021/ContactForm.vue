<template>
  <div id="importers-2021" class="contact-form">
    <b-card :class="isHero ? 'is-hero card-cta' : 'card-cta'" id="page-form">
      <h4
        :class="isHero ? 'is-hero-title text-center' : 'card-title text-center'"
        v-if="changeTitle"
      >
        {{ $t('pages.newLanding.jumbotron.form.subtitle') }}
      </h4>
      <h4
        :class="isHero ? 'is-hero-title text-center' : 'card-title text-center'"
        v-else-if="isHero"
      >
        {{ $t('pages.newLanding.jumbotron.form.title') }}
      </h4>
      <h4 class="card-title text-center" v-else>
        {{ $t('pages.importers.jumbotron.contactForm.title') }}
      </h4>
      <p v-if="isHero" class="subtitle">
        {{ $t('pages.newLanding.jumbotron.form.subtitle') }}
      </p>
      <form @submit.stop.prevent="onSubmit" novalidate>
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
              :state="validateState('email')"
              block
              type="email"
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
          <label
            class="material-label"
            :class="{
              empty: form.phone === '',
              invalid: Boolean(!validateState('phone'))
            }"
          >
            <span>{{
              $t('pages.importers.jumbotron.contactForm.placeholders.phone')
            }}</span>
            <b-form-input
              id="us-buyer-phone"
              name="us_buyer[phone]"
              block
              type="text"
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
            <b-form-invalid-feedback>
              This is a required field and requires a valid company name.
            </b-form-invalid-feedback>
          </label>
        </b-form-group>
        <!-- <b-form-group v-if="isAe || isUs">
          <label class="material-label" :class="{'empty' : form.address === ''}">
            <span>{{ $t('pages.importers.jumbotron.contactForm.placeholders.address') }}</span>
            <b-form-input id="us-buyer-address"
                          name="us_buyer[address]"
                          block
                          type="text"
                          v-model="form.address" required />
          </label>
        </b-form-group> -->
        <div>
          <div class="small">
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
              href="https://cwe7e.share.hsforms.com/2T93PVfFCR62PwD-AlPUcBw"
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
        <div class="d-flex justify-content-center justify-content-md-start">
          <b-button
            v-track-click
            id="importers-submit"
            type="submit"
            variant="primary"
            class="cta-button"
            :class="isMx ? 'text-transform-none' : 'text-capitalize'"
            :disabled="loading"
          >
            <font-awesome-icon :icon="'spinner'" spin v-if="loading" />
            {{
              loading
                ? $t('pages.importers.jumbotron.contactForm.sendingMessage')
                : $t('pages.importers.jumbotron.contactForm.sendMessage')
            }}
            <font-awesome-icon
              :icon="['fas', 'chevron-right']"
              class="icon alt ml-2"
            />
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
import { safeText, safeEmail } from '../../../store/validations'

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
  props: {
    isHero: {
      type: Boolean,
      default: false
    },
    isLandingPage: {
      type: Boolean,
      default: false
    },
    changeTitle: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      loading: false,
      form: {
        name: '',
        email: '',
        organization: '',
        // address: '',
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
      const geoCookie = this.$cookies.get('geo') || {}
      const country = geoCookie.country || this.$t('country')
      const promises = []

      // if (!this.isEc) {
      //   /**
      //    * * 1.If not Ecuador we will make the normal API call to backend
      //    * * 2.In case of Ecuador, we will hit Zapier hook URL
      //    */
      //   promises.push(
      //     this.axios({
      //       url: process.env.apiUrl + '/business/us_buyers/create_or_update',
      //       method: 'post',
      //       headers: {
      //         Authorization: 'Token ' + this.publicToken
      //       },
      //       data: {
      //         us_buyer: { ...this.form, country: this.$t('country'), referrer: document.vueReferrer }
      //       }
      //     })
      //   )
      // }

      let ZAP_TOKEN = ''
      const isUSHomePage =
        this.isUs &&
        (this.$route.path === '/en-us' || this.$route.path === '/en-us/')

      if (isUSHomePage) {
        ZAP_TOKEN = 'SCF_WS_TO_FS_PAID_ORGANIC'
      } else {
        const localeSpecificZap = {
          'en-us': '', // ZAPIER_EN_US_PRODUCT_HOOK_TOKEN
          'en-ec': '', // ECUADOR_WEBSITE_ZAP,
          'es-ec': '' // ECUADOR_WEBSITE_ZAP
        }
        ZAP_TOKEN = localeSpecificZap[this.$i18n.locale]
      }

      const {
        name,
        email,
        phone,
        organization,
        category,
        utype,
        selected: consent
      } = this.form

      let dataToSend = {
        name,
        email,
        phone: phone.trim(),
        country: this.$cookies.get('currentCountry') || country,
        geo: geoCookie ? geoCookie.city : '',
        geo_country: geoCookie.country || country,
        geo_city: geoCookie.city,
        geo_state: geoCookie.state,
        geo_ip: geoCookie.ip,
        geo_loc: geoCookie.loc,
        company: organization,
        category,
        utype,
        referrer: document.vueReferrer,
        firstVisited: this.$cookies.get('firstVisited'),
        consent: consent == 'Yes' ? 'true' : 'false'
      }
      if (ZAP_TOKEN) {
        // New zapier api
        const data = {
          zap_name: ZAP_TOKEN,
          zap_payload: JSON.stringify(dataToSend)
        }
        promises.push(apiService.callZapierHook(data))
      }

      let zapToken = ''
      switch (this.$i18n.locale) {
        case 'en':
          zapToken = 'GLOBAL_EXPORTER_IMPORTER_ZAP'
          break
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
        await Promise.all(promises)
        if (this.$ma) {
          this.$ma.setUserProperties({
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
        } else if (this.isLandingPage || this.isHero) {
          this.$nuxt.$router.push('/en-us/importers/thank-you')
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
      return this.localePath('importers-thank-you')
      // switch(this.$i18n.locale) {
      //   case 'en':
      //   case 'en-in':
      //   case 'es-mx':
      //     return this.localePath('exporters-thank-you')
      //   case 'en-us':
      //   default:
      //     return this.localePath('exporters-thank-you')
      // }
    },
    isAe() {
      return this.$i18n.locale.indexOf('ae') > -1
    },
    isUs() {
      return this.$i18n.locale.indexOf('us') > -1
    },
    isEc() {
      return this.$i18n.locale.indexOf('ec') > -1
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

.card-cta.is-hero {
  top: 0 !important;
  position: static !important;
}

.card-cta {
  position: absolute;
  z-index: 1;
  top: -18rem;
  @include media-breakpoint-down(lg) {
    top: -25rem;
  }
  box-shadow: 0px 6px 12px 0px #0a2e5733;
  border-radius: 24px;
  .card-title {
    color: $dark-blue;
    font-size: 1.75rem;
  }
  .is-hero-title {
    color: $dark-blue;
    font-size: 1.75rem;
  }

  .subtitle {
    font-size: 16px;
    font-weight: 400;
    line-height: 21.82px;
    text-align: center;
    color: #000000;
  }
}

@include media-breakpoint-down(md) {
  .card-cta {
    position: relative;
    top: 0;
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
