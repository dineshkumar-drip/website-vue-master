<template>
  <div id="contact-form" class="contact-form">
    <b-card class="card-cta" id="page-form" v-if="!thanks">
      <h4 class="text-secondary card-title">
        {{ $t('pages.contact.jumbotron.contactForm.title') }}
      </h4>
      <form @submit.prevent="onSubmit" novalidate>
        <input type="hidden" id="gclid_field" name="gclid_field" value="" />
        <b-form-group>
          <label class="material-label" :class="{ empty: form.name === '' }">
            <span>{{
              $t('pages.contact.jumbotron.contactForm.placeholders.name')
            }}</span>
            <b-form-input
              id="name-input"
              name="message[name]"
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
              $t('pages.contact.jumbotron.contactForm.placeholders.email')
            }}</span>
            <b-form-input
              id="message_email"
              name="message[email]"
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
              $t('pages.contact.jumbotron.contactForm.placeholders.phone')
            }}</span>
            <b-form-input
              id="message_phone"
              name="message[phone]"
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
            <span>{{
              $t('pages.contact.jumbotron.contactForm.placeholders.company')
            }}</span>
            <b-form-input
              id="message_phone"
              name="message[company]"
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
        <b-form-group>
          <label class="material-label" :class="{ empty: form.message === '' }">
            <span>{{
              $t('pages.contact.jumbotron.contactForm.placeholders.message')
            }}</span>
            <b-form-textarea
              id="message_message"
              name="message[message]"
              block
              :rows="3"
              :max-rows="6"
              :state="validateState('message')"
              v-model="$v.form.message.$model"
            />
          </label>
        </b-form-group>
        <div class="d-flex justify-content-center">
          <b-button
            v-track-click
            id="contact-submit"
            type="submit"
            variant="primary"
            size="lg"
            :disabled="loading"
          >
            <font-awesome-icon :icon="'spinner'" spin v-if="loading" />
            {{
              loading
                ? $t('pages.contact.jumbotron.contactForm.sendingMessage')
                : $t('pages.contact.jumbotron.contactForm.sendMessage')
            }}
          </b-button>
        </div>
      </form>
    </b-card>
    <b-card class="card-cta applied" id="message-thanks" v-if="thanks">
      <h3 class="text-secondary card-title">
        {{ $t('pages.contact.jumbotron.contactForm.success.title') }}
      </h3>
      <p>
        {{ $t('pages.contact.jumbotron.contactForm.success.description') }}
        <a :href="'mailto:' + $t('region.email')">{{ $t('region.email') }}</a>
      </p>
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
      },
      message: { safeText }
    }
  },
  data() {
    return {
      loading: false,
      thanks: false,
      form: {
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
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
      try {
        this.loading = true
        const geoCookieData = this.$cookies.get('geo') || {}
        const country = geoCookieData.country || this.$t('country')
        let body = {
          ...this.form,
          country: this.$cookies.get('currentCountry') || country,
          referrer: window.location.href,
          firstVisited: this.$cookies.get('firstVisited'),
          geo_country: geoCookieData.country,
          geo_city: geoCookieData.city,
          geo_state: geoCookieData.state,
          geo_ip: geoCookieData.ip,
          geo_loc: geoCookieData.loc
        }

        const promises = [
          this.axios({
            url: process.env.apiUrl + '/business/messages',
            method: 'post',
            headers: {
              Authorization: 'Token ' + this.publicToken
            },
            data: {
              message: { ...this.form, referrer: document.vueReferrer }
            }
          })
        ]

        let zapToken = ''
        switch (this.$i18n.locale) {
          case 'en-in':
            zapToken = 'INDIA_WEBSITE_ZAP'
            break
          case 'en':
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
            zap_payload: JSON.stringify(body)
          }
          promises.push(apiService.callZapierHook(data))
        }

        await Promise.all(promises)

        if (this.$i18n.locale == 'en-us') {
          ChiliPiper.submit(
            this.$t('chilipiper.cpTenantDomain'),
            this.$t('chilipiper.cpRouterName'),
            { map: true, lead: body }
          )
        } else {
          this.$nuxt.$router.push(this.redirectURL)
        }
        this.loading = false
      } catch (err) {
        console.log('error', err)
        this.loading = false
        this.$nuxt.$router.push(this.redirectURL)
      }
    }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>
