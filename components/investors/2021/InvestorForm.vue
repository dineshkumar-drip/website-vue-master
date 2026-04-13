<template>
  <div id="investors-2021-form" class="investors-apply-form">
    <b-card class="card-cta shadow border-0 mt-0 mt-xl-5" v-if="!thanks">
      <slot name="form-title">
        <h4 class="card-title">
          {{ dictionary.title }}
        </h4>
      </slot>
      <form @submit.prevent="onSubmit" id="investors-apply" novalidate>
        <input type="hidden" id="gclid_field" name="gclid_field" value="" />
        <b-form-group class="custom-form">
          <label class="material-label" :class="{ empty: form.name === '' }">
            <span>{{ dictionary.placeholders.name }}</span>
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
              >This is a required field and requires a valid
              name.</b-form-invalid-feedback
            >
          </label>
        </b-form-group>
        <b-form-group class="custom-form">
          <label class="material-label" :class="{ empty: form.email === '' }">
            <span>{{ dictionary.placeholders.email }}</span>
            <b-form-input
              id="email-input"
              name="email"
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
        <b-form-group class="custom-form">
          <label class="material-label" :class="{ empty: form.company === '' }">
            <span>{{ dictionary.placeholders.company }}</span>
            <b-form-input
              id="company-input"
              name="company"
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
        <b-form-group class="custom-form">
          <label class="material-label" :class="{ empty: form.phone === '' }">
            <span>{{ dictionary.placeholders.phone }}</span>
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
        <b-form-group class="custom-form">
          <label
            class="material-label select-label custom-label"
            :class="{ empty: form.category === '' }"
          >
            <span>{{ dictionary.placeholders.category }}</span>
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
              >This is a required field.</b-form-invalid-feedback
            >
          </label>
        </b-form-group>
        <div class="d-flex justify-content-center">
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
            {{ loading ? dictionary.submitting : dictionary.submit }}
          </b-button>
        </div>
      </form>
    </b-card>
    <b-card class="card-cta" v-if="thanks">
      <h3 class="text-secondary card-title">
        {{ dictionary.success.title }}
      </h3>
      <p v-html="dictionary.success.title"></p>
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
      company: {
        required,
        safeText
      },
      category: {
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
        phone: '',
        utype: 'investor',
        category: '',
        company: ''
      },
      categories: [
        { value: 'Institutional Investor', text: 'Institutional Investor' },
        {
          value: 'Accredited / Qualified Investor',
          text: 'Accredited / Qualified Investor'
        },
        { value: '(Multi) Family Office', text: '(Multi) Family Office' },
        { value: 'Advisor', text: 'Advisor' },
        { value: 'Other', text: 'Other' }
      ],
      dictionary: this.$t('pages.investors.growth.contact')
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
        .catch((err) => {
          console.log(err)
        })
    },
    async onSubmit() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }
      this.loading = true
      const geoCookie = this.$cookies.get('geo') || {}
      const promises = []
      const country = geoCookie.country || this.$t('country')
      promises.push(
        this.axios({
          url: process.env.apiUrl + '/business/investors/create_or_update',
          method: 'post',
          headers: {
            Authorization: 'Token ' + this.publicToken
          },
          data: {
            user: {
              ...this.form,
              country: this.$t('country'),
              referrer: document.vueReferrer
            }
          }
        })
      )
      const dataToSend = {
        ...this.form,
        country,
        geo: geoCookie ? geoCookie.city : '',
        referrer: process.browser ? window.location.href : this.referrer,
        firstVisited: this.$cookies.get('firstVisited'),
        geo_country: geoCookie.country,
        geo_city: geoCookie.city,
        geo_state: geoCookie.state,
        geo_ip: geoCookie.ip,
        geo_loc: geoCookie.loc
      }
      const data = {
        zap_name: 'IR_WS_TO_HS',
        zap_payload: JSON.stringify(dataToSend)
      }
      promises.push(apiService.callZapierHook(data))

      try {
        await Promise.all(promises)
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
    }
  },
  computed: {
    redirectURL() {
      return this.localePath('investors-thank-you')
      // switch(this.$i18n.locale) {
      //   case 'en':
      //   case 'en-in':
      //   case 'es-mx':
      //   case 'en-us':
      //     return this.localePath('importers-thank-you')
      //   default:
      //     return this.localePath('investors-thank-you')
      // }
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
  top: -22rem;
  min-width: 85%;

  .card-title {
    color: $dark-blue;
    font-size: 1.75rem;
    text-align: center;
  }
}

@include media-breakpoint-down(md) {
  .card-cta {
    position: relative;
    top: 0;
    .card-title {
      font-size: 1.25rem;
    }
  }
}
</style>
