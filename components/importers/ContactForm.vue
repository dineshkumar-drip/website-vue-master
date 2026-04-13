<template>
  <div id="importers-contact-form" class="contact-form">
    <b-card class="card-cta" id="page-form" v-if="!thanks">
      <h4 class="text-secondary card-title">
        {{ $t('pages.importers.jumbotron.contactForm.title') }}
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
          <label class="material-label" :class="{ empty: form.address === '' }">
            <span>{{
              $t('pages.importers.jumbotron.contactForm.placeholders.address')
            }}</span>
            <b-form-input
              id="us-buyer-address"
              name="us_buyer[address]"
              block
              type="text"
              :state="validateState('address')"
              v-model="$v.form.address.$model"
              required
            />
            <b-form-invalid-feedback
              >This is a required field and requires a valid
              address.</b-form-invalid-feedback
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
        <div class="d-flex justify-content-center">
          <b-button
            v-track-click
            id="importers-submit"
            type="submit"
            variant="primary"
            size="lg"
            :disabled="loading"
          >
            <font-awesome-icon :icon="'spinner'" spin v-if="loading" />
            {{
              loading
                ? $t('pages.importers.jumbotron.contactForm.sendingMessage')
                : $t('pages.importers.jumbotron.contactForm.sendMessage')
            }}
          </b-button>
        </div>
      </form>
    </b-card>
    <b-card class="card-cta applied" id="message-thanks" v-if="thanks">
      <h3 class="text-secondary card-title">
        {{ $t('pages.importers.jumbotron.contactForm.success.title') }}
      </h3>
      <p>
        {{ $t('pages.importers.jumbotron.contactForm.success.description') }}
        <a :href="'mailto:' + $t('pages.importers.emailId')">{{
          $t('pages.importers.emailId')
        }}</a>
        {{ $t('pages.importers.jumbotron.contactForm.success.desc2') }}
        <a :href="'tel:' + $t('pages.importers.phoneNumber')">{{
          $t('pages.importers.phoneNumber')
        }}</a
        >.
      </p>
    </b-card>
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import { required, email, helpers } from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate'
import { invalidPhone } from '~/modules/helper'
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
      address: {
        required,
        safeText
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
    onSubmit() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }
      this.loading = true
      const geoCookie = this.$cookies.get('geo') || {}
      const country = geoCookie.country || this.$t('country')
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
        .then((res) => {
          this.$ma.setUserProperties({
            applicant_name: this.form.name,
            exporter_email: this.form.email
          })
          this.loading = false
          this.thanks = true
        })
        .catch((err) => {
          this.loading = false
        })

      if (this.$i18n.locale == 'en-us') {
        ChiliPiper.submit(
          this.$t('chilipiper.cpTenantDomain'),
          this.$t('chilipiper.cpRouterName'),
          {
            map: true,
            lead: {
              ...this.form,
              country:
                this.$cookies.get('currentCountry') || this.$t('country'),
              referrer: document.vueReferrer
            }
          }
        )
      } else {
        this.$nuxt.$router.push(this.redirectURL)
      }
    }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>
