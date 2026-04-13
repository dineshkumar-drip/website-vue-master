<template>
  <section class="section-conclusion pt-0" id="apply">
    <b-container fluid>
      <b-row align-h="center">
        <b-col :lg="5" :xl="4" :md="6">
          <div class="d-none d-md-block mt-md-5">
            <b-img-lazy
              :src="require(`~/assets/images/investors/form-image.png`)"
              class="w-100"
            />
          </div>
        </b-col>
        <b-col :lg="6" :md="10" :xl="5">
          <h3 class="form-title text-lg-left text-center mt-5">
            {{ $t('pages.investors.contact.title') }}
          </h3>
          <b-card class="card-cta" v-if="!thanks">
            <form @submit.prevent="onSubmit" novalidate>
              <input
                type="hidden"
                id="gclid_field"
                name="gclid_field"
                value=""
              />
              <b-form-group class="custom-form">
                <label
                  class="material-label"
                  :class="{ empty: form.name === '' }"
                >
                  <span>{{
                    $t('pages.investors.contact.placeholders.name')
                  }}</span>
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
              <b-form-group class="custom-form">
                <label
                  class="material-label"
                  :class="{ empty: form.email === '' }"
                >
                  <span>{{
                    $t('pages.investors.contact.placeholders.email')
                  }}</span>
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
                <label
                  class="material-label"
                  :class="{ empty: form.company === '' }"
                >
                  <span>{{
                    $t('pages.investors.contact.placeholders.company')
                  }}</span>
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
                    >This is a required field.</b-form-invalid-feedback
                  >
                </label>
              </b-form-group>
              <b-form-group class="custom-form">
                <label
                  class="material-label"
                  :class="{ empty: form.phone === '' }"
                >
                  <span>{{
                    $t('pages.investors.contact.placeholders.phone')
                  }}</span>
                  <b-form-input
                    id="phone-input"
                    name="phone"
                    block
                    type="text"
                    :state="validateState('phone')"
                    v-model="$v.form.phone.$model"
                  />
                </label>
              </b-form-group>
              <b-form-group class="custom-form">
                <label
                  class="material-label select-label custom-label"
                  :class="{ empty: form.category === '' }"
                >
                  <span>{{
                    $t('pages.investors.contact.placeholders.category')
                  }}</span>
                  <b-form-select
                    id="category-input"
                    name="category"
                    block
                    :options="categories"
                    :state="validateState('category')"
                    v-model="$v.form.category.$model"
                  />
                </label>
              </b-form-group>
              <b-button
                type="submit"
                size="lg"
                :disabled="loading"
                class="btn btn-lg py-3 px-5 form-cta d-block mx-auto"
              >
                <font-awesome-icon :icon="'spinner'" spin v-if="loading" />
                {{
                  loading
                    ? $t('pages.investors.contact.submitting')
                    : $t('pages.investors.contact.submit')
                }}
              </b-button>
            </form>
          </b-card>
          <b-card class="card-cta" id="apply" v-if="thanks">
            <h3 class="text-secondary card-title">
              {{ $t('pages.investors.contact.success.title') }}
            </h3>
            <p v-html="$t('pages.investors.contact.success.description')"></p>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import { required, email } from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate'
import { invalidPhone } from '~/modules/helper'

export default {
  mixins: [validationMixin],
  validations: {
    form: {
      name: {
        required
      },
      email: {
        required,
        email
      },
      company: {
        required
      },
      phone: {
        invalidPhone
      },
      category: {}
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
      ]
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
    onSubmit() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }
      this.loading = true
      this.axios({
        url: process.env.apiUrl + '/business/investors/create_or_update',
        method: 'post',
        headers: {
          Authorization: 'Token ' + this.publicToken
        },
        data: {
          user: this.form
        }
      })
        .then((res) => {
          this.$ma.setUserProperties({
            applicant_name: this.form.name,
            exporter_email: this.form.email
          })
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
  components: {
    FontAwesomeIcon
  }
}
</script>
