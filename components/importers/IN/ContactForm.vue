<template>
  <div id="importers-in-contact-form" class="contact-form">
    <b-card class="card-cta" id="page-form">
      <h4 class="drip-h2 text-center">A few details to get you started</h4>
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
        <b-form-group>
          <label class="material-label" :class="{ empty: form.imports === '' }">
            <span>{{
              $t('pages.importers.jumbotron.contactForm.placeholders.import')
            }}</span>
            <b-form-input
              id="us-buyer-imports"
              name="us_buyer[imports]"
              block
              type="text"
              :state="validateState('imports')"
              v-model="$v.form.imports.$model"
              required
            />
            <b-form-invalid-feedback
              >This is a required field and requires valid
              imports.</b-form-invalid-feedback
            >
          </label>
        </b-form-group>
        <b-form-group>
          <label class="material-label" :class="{ empty: form.iec === '' }">
            <span>{{
              $t('pages.importers.jumbotron.contactForm.placeholders.iec')
            }}</span>
            <b-form-input
              id="us-buyer-iec"
              name="us_buyer[iec]"
              block
              type="text"
              :state="validateState('iec')"
              v-model="$v.form.iec.$model"
              required
            />
            <b-form-invalid-feedback
              >This is a required field and requires a valid IEC
              number.</b-form-invalid-feedback
            >
          </label>
        </b-form-group>
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
import { safeText, safeEmail, safeIec } from '../../../store/validations'

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
        invalidPhone
      },
      organization: {
        required,
        safeText
      },
      imports: {
        required,
        safeText
      },
      iec: {
        required,
        safeIec
      }
    }
  },
  data() {
    return {
      loading: false,
      form: {
        name: '',
        email: '',
        organization: '',
        phone: '',
        message: '',
        imports: '',
        iec: '',
        utype: 'us_buyer'
      }
    }
  },
  mounted() {
    this.getPublicToken()
    // addGclid()
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

      const {
        name,
        email,
        phone,
        organization,
        iec,
        imports,
        category,
        utype
      } = this.form
      let dataToSend = {
        name,
        email,
        phone,
        iec,
        imports,
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
        firstVisited: this.$cookies.get('firstVisited')
      }

      // New zapier api
      const data = {
        zap_name: 'SCF_INDIA_WEBSITE_ZAP',
        zap_payload: JSON.stringify(dataToSend)
      }
      promises.push(apiService.callZapierHook(data))

      try {
        await Promise.all(promises)
        if (this.$ma) {
          this.$ma.setUserProperties({
            applicant_name: this.form.name,
            exporter_email: this.form.email
          })
        }

        this.$nuxt.$router.push(this.redirectURL)

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

.card-cta {
  position: absolute;
  z-index: 1;
  top: -18rem;
  box-shadow: 0px 6px 12px 0px #0a2e5733;
  border-radius: 24px;
  .card-title {
    color: $dark-blue;
    font-size: 1.75rem;
  }
}

@include media-breakpoint-down(md) {
  .card-cta {
    position: relative;
    top: 0;
  }
}
</style>
