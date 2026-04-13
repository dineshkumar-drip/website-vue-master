<template>
  <div class="application-form en-landing-form">
    <form @submit.prevent="onSubmit" v-if="!success" novalidate>
      <input type="hidden" id="gclid_field" name="gclid_field" value="" />
      <slot name="form-title">
        <h2 class="text-primary card-title landing-form-title">
          {{ $t('landing.common.form.title') }}
        </h2>
      </slot>
      <b-form-group>
        <label class="material-label" :class="{ empty: form.name === '' }">
          <span>{{ $t('landing.peloton.contact.placeholders.name') }}</span>
          <b-form-input
            id="name-input"
            name="name"
            block
            type="text"
            :state="validateState('name')"
            v-model="$v.form.name.$model"
            required
          />
          <b-form-invalid-feedback
            >This is a required field.</b-form-invalid-feedback
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
          <span>{{ $t('landing.peloton.contact.placeholders.phone') }}</span>
          <b-form-input
            id="phone-input"
            name="phone"
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
        <label class="material-label" :class="{ empty: form.company === '' }">
          <span>{{ $t('landing.peloton.contact.placeholders.company') }}</span>
          <b-form-input
            id="partner-fieo-companyPurpose"
            name="user[companyPurpose]"
            block
            type="text"
            :state="validateState('company')"
            v-model="$v.form.company.$model"
            required
          />
          <b-form-invalid-feedback
            >This is a required field.</b-form-invalid-feedback
          >
        </label>
      </b-form-group>
      <b-form-group>
        <label
          class="material-label select-label"
          :class="{ empty: form.state === '' }"
        >
          <span>{{ $t('landing.peloton.contact.placeholders.state') }}</span>
          <b-form-select
            id="state-input"
            name="state"
            block
            required
            :options="states"
            :state="validateState('state')"
            v-model="$v.form.state.$model"
          />
        </label>
      </b-form-group>
      <b-form-group>
        <label class="landing-form-label">
          {{ $t('landing.peloton.contact.placeholders.exporters') }}</label
        >
        <b-form-radio-group
          class="text-secondary"
          id="user-type-input"
          name="exporter"
          :state="validateState('exporter')"
          v-model="$v.form.exporter.$model"
          :options="exporterOptions"
          required
        >
          <b-form-invalid-feedback
            >This is a required field.</b-form-invalid-feedback
          >
        </b-form-radio-group>
      </b-form-group>
      <b-form-group
        v-if="
          exporter ===
          $t('landing.peloton.contact.placeholders.exportersData')[0].value
        "
      >
        <label
          class="material-label select-label"
          :class="{ empty: form.product_category === '' }"
        >
          <span>{{
            $t('landing.peloton.contact.placeholders.productCategory')
          }}</span>
          <b-form-select
            id="product_category-input"
            name="product_category"
            block
            required
            :options="productCategories"
            :state="validateState('product_category')"
            v-model="$v.form.product_category.$model"
          />
          <b-form-invalid-feedback
            >This is a required field.</b-form-invalid-feedback
          >
        </label>
      </b-form-group>
      <b-button type="submit" variant="primary" size="lg" :disabled="loading">
        <font-awesome-icon :icon="'spinner'" spin v-if="loading" />
        {{
          loading
            ? $t('landing.peloton.contact.submitting')
            : $t('landing.peloton.contact.submit')
        }}
      </b-button>
    </form>
  </div>
</template>
<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import { required, email } from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate'
import { invalidPhone } from '~/modules/helper'

export default {
  mixins: [validationMixin],
  validations() {
    const form = {
      name: {
        required
      },
      email: {
        required,
        email
      },
      phone: {
        required,
        invalidPhone
      },
      company: {
        required
      },
      state: {},
      exporter: {
        required
      }
    }
    if (
      this.exporter ===
      this.$t('landing.peloton.contact.placeholders.exportersData')[0].value
    ) {
      form.product_category = {
        required
      }
    }
    return {
      form
    }
  },
  data() {
    return {
      productCategories: this.$store.state.mexicanProductCategory,
      states: this.$store.state.mexicanStates,
      success: false,
      loading: false,
      form: {
        utype: 'exporter_lead',
        name: '',
        email: '',
        phone: '',
        product_category: '',
        company: '',
        state: '',
        country: 'Mexico',
        last_visited_page_url: ''
      },
      exporter: '',
      exporterOptions: this.$t(
        'landing.peloton.contact.placeholders.exportersData'
      ),
      publicToken: ''
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
    getPublicToken() {
      return this.axios({
        url: process.env.apiUrl + '/v1/access/token'
      })
        .then((response) => {
          return (this.publicToken = response.data.token)
        })
        .catch((err) => {
          console.log(err)
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
    },
    onSubmit() {
      this.loading = true
      const geoCookie = this.$cookies.get('geo') || {}
      const country = geoCookie.country || this.$t('country')
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
            referrer: this.referrer,
            exporter: this.exporter
          }
        }
      })
        .then((res) => {
          this.loading = false
          this.$nuxt.$router.push(this.redirectURL)
        })
        .catch((err) => {
          this.loading = false
          this.$nuxt.$router.push(this.redirectURL)
        })
    }
  },
  computed: {
    redirectURL() {
      return this.localePath('landing-thank-you')
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
  watch: {
    exporter() {
      this.form.product_category = ''
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';
.landing-form-label {
  color: $secondary;
  font-weight: 700;
  font-size: 1em;
  line-height: 1.8em;
}
</style>
