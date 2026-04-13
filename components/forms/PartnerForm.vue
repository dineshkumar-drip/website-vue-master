<template>
  <div text-align:center class="contact-form-container" id="partner-form">
    <b-card :class="['card-box', type]" id="apply" v-if="!thanks">
      <h4 class="card-title">
        {{ $t('pages.channelPartner.contactForm.title') }}
      </h4>
      <form @submit.stop.prevent="onSubmit" novalidate>
        <input type="hidden" id="gclid_field" name="gclid_field" value="" />
        <b-row>
          <b-col>
            <b-form-group>
              <label
                class="material-label"
                :class="{ empty: form.name === '' }"
              >
                <span>{{ $t('common.form.placeholders.name') }}</span>
                <b-form-input
                  id="name-input"
                  name="user[name]"
                  block
                  type="text"
                  v-model="$v.form.name.$model"
                  :state="validateState('name')"
                  required
                ></b-form-input>
                <b-form-invalid-feedback
                  >This is a required field and requires a valid
                  name.</b-form-invalid-feedback
                >
              </label>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group>
              <label
                class="material-label"
                :class="{ empty: form.email === '' }"
              >
                <span>{{ $t('common.form.placeholders.email') }}</span>
                <b-form-input
                  id="email-input"
                  name="user[email]"
                  block
                  type="email"
                  v-model="$v.form.email.$model"
                  :state="validateState('email')"
                  required
                ></b-form-input>
                <b-form-invalid-feedback
                  >This is a required field and requires a valid email
                  address</b-form-invalid-feedback
                >
              </label>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-form-group>
              <label
                class="material-label"
                :class="{ empty: form.phone === '' }"
              >
                <span>{{ $t('common.form.placeholders.phone') }}</span>
                <b-form-input
                  id="phone-input"
                  name="user[phone]"
                  block
                  type="text"
                  v-model="$v.form.phone.$model"
                  :state="validateState('phone')"
                  required
                ></b-form-input>
                <b-form-invalid-feedback
                  >This is a required field and requires a valid phone
                  number</b-form-invalid-feedback
                >
              </label>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-form-group>
              <label
                class="material-label"
                :class="{ empty: form.company === '' }"
              >
                <span>{{ $t('common.form.placeholders.company') }}</span>
                <b-form-input
                  id="company-input"
                  name="user[company]"
                  block
                  type="text"
                  v-model="$v.form.company.$model"
                  :state="validateState('company')"
                  required
                ></b-form-input>
                <b-form-invalid-feedback
                  >This is a required field and requires a valid company
                  name.</b-form-invalid-feedback
                >
              </label>
            </b-form-group>
          </b-col>
        </b-row>
        <div class="d-flex justify-content-center">
          <b-button
            type="submit"
            variant="primary"
            size="md"
            :disabled="loading"
            v-track-click
            id="partners-submit"
          >
            <font-awesome-icon center :icon="'spinner'" spin v-if="loading" />
            {{
              loading ? $t('common.form.submitting') : $t('common.form.submit')
            }}
          </b-button>
        </div>
      </form>
    </b-card>
    <b-card class="card-cta" id="apply" v-if="thanks">
      <h3 class="text-secondary card-title">
        {{ $t('pages.channelPartner.conclusion.form.success.title') }}
      </h3>
      {{ $t('pages.channelPartner.conclusion.form.success.desc') }}
      <a :href="`mailto:${$t('region.email')}`">{{ $t('region.email') }}</a>
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
        utype: 'broker_sa',
        company: '',
        city: '',
        state: '',
        stage: '-6',
        last_visited_page_url: ''
      },
      userType: '',
      userTypes: this.$t('pages.channelPartner.conclusion.form.userTypes')
    }
  },
  props: {
    type: {
      type: String,
      default: 'floating'
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
    async onSubmit() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }
      try {
        this.loading = true
        const geoCookie = this.$cookies.get('geo') || {}
        let zapToken = ''
        const promises = []
        switch (this.$i18n.locale) {
          case 'en':
            zapToken = 'GLOBAL_PARTNERS'
            break
          case 'en-in':
            zapToken = 'INDIA_PARTNERS'
            break
          case 'en-us':
            zapToken = 'US_PARTNERS'
            break
          case 'es-mx':
            zapToken = 'MX_PARTNERS'
            break
          default:
            zapToken = ''
            break
        }

        const country = geoCookie.country || this.$t('country')

        const dataToSend = {
          ...this.form,
          phone: this.form.phone.trim(),
          company: this.form.company !== '' ? this.form.company : 'N/A',
          email: this.form.email !== '' ? this.form.email : 'N/A@gmail.com',
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

        promises.push(
          this.axios({
            url: process.env.apiUrl + '/business/pipeline/create_or_update',
            method: 'post',
            headers: {
              Authorization: 'Token ' + this.publicToken
            },
            data: {
              user: {
                ...this.form,
                company: this.form.company !== '' ? this.form.company : 'N/A',
                email:
                  this.form.email !== '' ? this.form.email : 'N/A@gmail.com',
                country: this.$t('country'),
                referrer: this.referrer
              },
              application: {
                ...this.form,
                company: this.form.company !== '' ? this.form.company : 'N/A',
                email:
                  this.form.email !== '' ? this.form.email : 'N/A@gmail.com',
                country: this.$t('country'),
                referrer: this.referrer
              }
            }
          })
        )

        if (zapToken) {
          // New zapier api
          const data = {
            zap_name: zapToken,
            zap_payload: JSON.stringify(dataToSend)
          }
          promises.push(apiService.callZapierHook(data))
        }

        const resps = await Promise.all(promises)

        if (this.$ma) {
          let location =
            resps[0] && resps[0].data ? resps[0].data.location : null
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
      } catch (error) {
        console.log(error)
        this.loading = false
        this.$nuxt.$router.push(this.redirectURL)
      }
    }
  },
  computed: {
    isEsMx() {
      return this.$i18n.locale.indexOf('es-mx') > -1
    },
    isMx() {
      return this.$i18n.locale.indexOf('mx') > -1
    },
    states() {
      return this.isMx
        ? this.$store.state.mexicanStates
        : this.$store.state.indianStates
    },
    userCategories() {
      return this.isEsMx
        ? this.$store.state.partnerTypesMexico
        : this.$store.state.partnerTypes
    },
    redirectURL() {
      return this.localePath('partners-thank-you')
      // switch(this.$i18n.locale) {
      //   case 'en':
      //   case 'en-in':
      //   case 'es-mx':
      //   case 'en-us':
      //     return this.localePath('importers-thank-you')
      //   default:
      //     return this.localePath('partners-thank-you')
      // }
    },
    referrer() {
      if (process.client) {
        return window.localStorage.getItem('landingPageURL')
      }
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
  // position: absolute;
  text-align: center;
  z-index: 1;
  top: -18rem;
  .card-title {
    color: $dark-blue;
    font-size: 1.75rem;
  }
}
.btn {
  text-transform: none;
}

.contact-form-container {
  width: 100%;
  // text-align: center;
}
.card-box {
  margin-top: 50px;

  padding: 30px 20px;
  .card-title {
    margin-bottom: 30px;
    text-align: center;
    width: 100%;
  }
  .material-label {
    margin-bottom: 20px;
  }
}
.floating {
  width: 90%;
  position: absolute;
  z-index: 1;
  top: -20rem;
  right: 0;
  .card-title {
    color: $dark-blue;
    font-size: 1.75rem;
  }
}
.still {
  &.card {
    margin-top: 0px;
    margin-bottom: 2rem;
  }
  .card-title {
    color: $dark-blue;
    font-size: 1.75rem;
  }
}

@include media-breakpoint-down(sm) {
  .card-cta {
    position: relative;
    // margin-top: 20%;
    top: 0;
    padding-bottom: 0rem;
    // margin-top: -100px;
  }
  .still {
    &.card {
      margin-top: 20px;
    }
  }
}
@include media-breakpoint-down(md) {
  .floating {
    width: 100%;
    position: relative;
    top: 0;
    margin-top: 0;
  }
  .card-cta,
  .floating,
  .still {
    .card-title {
      font-size: 1.25rem;
    }
  }
}
</style>
