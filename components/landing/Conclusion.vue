<template>
  <section class="section-conclusion">
    <b-container fluid>
      <b-row>
        <b-col :lg="3" offset-lg="1">
          <h3 class="section-title">
            {{ $t('landing.peloton.getInTouch.title') }}
          </h3>
          <div class="text-center">
            <b-img-lazy
              :src="require(`~/assets/images/common/california.svg`)"
              alt=""
              :width="260"
              class="d-block mx-auto"
            />
            <strong class="text-uppercase d-block">
              {{ $t('landing.peloton.getInTouch.location') }}
            </strong>
            <a href="tel:+1-844-804-4822" class="btn btn-ghost-secondary">
              +1-844-804-4822
            </a>
          </div>
          <div class="text-center">
            <b-img-lazy
              :src="require(`~/assets/images/common/email.svg`)"
              alt=""
              :width="140"
              class="d-block mx-auto"
            />
            <strong class="text-uppercase d-block">
              {{ $t('landing.peloton.getInTouch.email') }}
            </strong>
            <a
              href="mailto:specials@dripcapital.com"
              class="btn btn-ghost-secondary"
            >
              specials@dripcapital.com
            </a>
          </div>
        </b-col>
        <b-col :lg="5" offset-lg="2">
          <b-card class="card-cta" id="apply" v-if="!thanks">
            <h3 class="text-secondary card-title">
              {{ $t('landing.peloton.contact.title') }}
            </h3>
            <form @submit.prevent="onSubmit" novalidate>
              <input
                type="hidden"
                id="gclid_field"
                name="gclid_field"
                value=""
              />
              <b-form-group>
                <label
                  class="material-label"
                  :class="{ empty: form.name === '' }"
                >
                  <span>{{
                    $t('landing.peloton.contact.placeholders.name')
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
              <b-form-group>
                <label
                  class="material-label"
                  :class="{ empty: form.email === '' }"
                >
                  <span>{{
                    $t('landing.peloton.contact.placeholders.email')
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
              <b-form-group>
                <label
                  class="material-label"
                  :class="{ empty: form.phone === '' }"
                >
                  <span>{{
                    $t('landing.peloton.contact.placeholders.phone')
                  }}</span>
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
                <label
                  class="material-label select-label"
                  :class="{ empty: form.proposed_investment_amount === '' }"
                >
                  <span>{{
                    $t('landing.peloton.contact.placeholders.amount')
                  }}</span>
                  <b-form-select
                    id="proposed_investment_amount-input"
                    name="proposed_investment_amount"
                    block
                    :options="investment_options"
                    :state="validateState('proposed_investment_amount')"
                    v-model="$v.form.proposed_investment_amount.$model"
                  />
                  <b-form-invalid-feedback
                    >This is a required field.</b-form-invalid-feedback
                  >
                </label>
              </b-form-group>
              <b-button
                type="submit"
                variant="primary"
                size="lg"
                :disabled="loading"
              >
                <font-awesome-icon :icon="'spinner'" spin v-if="loading" />
                {{
                  loading
                    ? $t('landing.peloton.contact.submitting')
                    : $t('landing.peloton.contact.submit')
                }}
              </b-button>
              <p class="below-disclaimer">
                Please read important disclosures and FAQs Drip will email you
                after signing up.
              </p>
            </form>
          </b-card>
          <b-card class="card-cta" id="apply" v-if="thanks">
            <h3 class="text-secondary card-title">
              {{ $t('landing.peloton.contact.success.title') }}
            </h3>
            <p v-html="$t('landing.peloton.contact.success.description')"></p>
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
      phone: {
        required,
        invalidPhone
      },
      proposed_investment_amount: {}
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
        proposed_investment_amount: '',
        utype: 'investor',
        campaign: 'july-specials'
      },
      investment_options: [
        { value: '100000', text: '$100k for 1 Year' },
        { value: '50000', text: '$50k for 2 Years' },
        { value: '35000', text: '$35k for 3 Years' }
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
          this.thanks = true
        })
        .catch((err) => {
          this.loading = false
        })
    }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>
