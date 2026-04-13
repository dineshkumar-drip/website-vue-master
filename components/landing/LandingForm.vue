<template>
  <div class="application-form en-landing-form">
    <form @submit.prevent="onSubmit" v-if="!success" novalidate>
      <input type="hidden" id="gclid_field" name="gclid_field" value="" />
      <slot name="form-title">
        <h2 class="text-primary card-title landing-form-title">
          {{ title }}
        </h2>
      </slot>
      <b-form-group>
        <label class="material-label" :class="{ empty: form.name === '' }">
          <span>{{ $t('common.form.placeholders.name') }}*</span>
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
          <span>{{ $t('common.form.placeholders.phone') }}*</span>
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
        <label class="material-label" :class="{ empty: form.iec_code === '' }">
          <span>{{ $t('common.form.placeholders.iec') }}</span>
          <b-form-input
            id="partner-fieo-iec_code"
            name="user[iec_code]"
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
      <b-button
        v-track-click
        id="apply-form-submit"
        type="submit"
        variant="primary"
        :disabled="loading"
      >
        <font-awesome-icon :icon="'spinner'" spin v-if="loading" />
        {{ loading ? $t('common.form.applying') : $t('common.form.applyNow') }}
      </b-button>
    </form>
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import AnimatedCheckMark from '~/components/common/AnimatedCheckMark'
import { required, email, helpers } from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate'
import { invalidPhone } from '~/modules/helper'
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
    return {
      form
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    isGoTrade: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      loading: false,
      phoneRegex: new RegExp('^.{10,15}$'),
      invalidPhone: false,
      form: {
        name: '',
        email: '',
        phone: '',
        company: '',
        iec_code: '',
        utype: 'exporter_lead',
        stage: '-1',
        last_visited_page_url: '',
        id: null
      },
      success: false
    }
  },
  mounted() {
    this.getPublicToken()
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
    changePhone() {
      this.invalidPhone = false
    },
    getPublicToken() {
      return this.axios({
        url: process.env.apiUrl + '/v1/access/token'
      })
        .then((response) => {
          this.publicToken = response.data.token
        })
        .catch((err) => {
          console.log(err)
        })
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
      if (this.isGoTrade) {
        return this.axios({
          url: `${process.env.DRIP_GOTRADE_API}/lead-capture`,
          method: 'post',
          data: { ...this.form, referrer: this.referrer }
        })
          .then((res) => {
            this.$nuxt.$router.push(this.redirectURL)
          })
          .catch((err) => {
            console.log(err)
            this.loading = false
            this.$nuxt.$router.push(this.redirectURL)
          })
      }
      return this.axios({
        url: `${process.env.apiUrl}/business/pipeline/create_or_update`,
        method: 'post',
        headers: {
          Authorization: `Token ${this.publicToken}`
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
          const location = res.data.location
          this.$ma.setUserProperties({
            userId: location.split('/')[location.split('/').length - 1],
            uid: location.split('/')[location.split('/').length - 1],
            applicant_name: this.form.name,
            exporter_email: this.form.email
          })
          this.$ma.trackEvent({
            category: 'landing',
            action: 'Form Submit Success',
            label: 'trade_finance'
          })
          this.$nuxt.$router.push(this.redirectURL)
        })
        .catch((err) => {
          console.log(err)
          this.loading = false
          this.$nuxt.$router.push(this.redirectURL)
        })
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
    isEn() {
      return this.$i18n.locale == 'en'
    },
    isIn() {
      return this.$i18n.locale.indexOf('in') > -1
    },
    getStates() {
      return this.isEn
        ? this.$store.state.indianStates
        : this.$store.state.mexicanStates
    },
    redirectURL() {
      if (this.isGoTrade) {
        return this.localePath('trade-thank-you')
      }
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
    AnimatedCheckMark,
    FontAwesomeIcon
  }
}
</script>
