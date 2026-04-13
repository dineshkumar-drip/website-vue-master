<template>
  <page-section section-class="partner-events-section">
    <b-container fluid>
      <b-row class="justify-content-center">
        <b-col :xl="10" :cols="12">
          <h3 class="mb-5 section-title">
            {{ $t('landing.partners.fieo.events.title') }}
          </h3>
          <b-row>
            <b-col
              md="6"
              lg="4"
              sm="12"
              v-for="(event, index) in $t(
                'landing.partners.fieo.events.upcoming'
              )"
              :key="index"
            >
              <div class="content-section shadow-sm">
                <b-card
                  :title="`${event.city},${event.state}`"
                  :sub-title="event.date"
                  :img-src="
                    require(`@/assets/images/partners/${event.img}.jpg`)
                  "
                  img-alt="Image"
                  img-top
                  tag="article"
                  class="mb-2"
                >
                  <p class="card-text">
                    {{ event.desc }}
                  </p>
                  <b-btn
                    variant="primary"
                    class="w-100"
                    v-b-modal.eventsModal
                    @click="onClickRegister(event.city)"
                    >{{ $t('landing.partners.fieo.events.reg') }}</b-btn
                  >
                </b-card>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    <b-modal
      id="eventsModal"
      size="md"
      hide-footer
      :title="'Register for ' + currentEvent + ' Event'"
      class="events-modal"
    >
      <b-form
        @submit.prevent="onSubmit"
        class="job-opening-form"
        v-if="!registered"
      >
        <b-row>
          <b-col cols="12">
            <b-form-group>
              <label
                class="material-label"
                :class="{ empty: form.name === '' }"
              >
                <span>{{ $t('common.form.placeholders.name') }}</span>
                <b-form-input
                  id="er-name"
                  type="text"
                  name="applicant[name]"
                  v-model="form.name"
                  required
                />
              </label>
            </b-form-group>
          </b-col>
        </b-row>
        <b-form-group>
          <label class="material-label" :class="{ empty: form.email === '' }">
            <span>{{ $t('common.form.placeholders.email') }}</span>
            <b-form-input
              id="er-email"
              type="email"
              name="applicant[email]"
              v-model="form.email"
              required
            />
          </label>
        </b-form-group>
        <b-form-group>
          <label class="material-label" :class="{ empty: form.phone === '' }">
            <span>{{ $t('common.form.placeholders.phone') }}</span>
            <b-form-input
              id="er-phone"
              type="text"
              name="applicant[phone]"
              v-model="form.phone"
              required
            />
          </label>
        </b-form-group>
        <b-form-group>
          <label class="material-label" :class="{ empty: form.company === '' }">
            <span>{{ $t('common.form.placeholders.company') }}</span>
            <b-form-input
              id="er-company"
              type="text"
              name="applicant[company]"
              v-model="form.company"
              required
            />
          </label>
        </b-form-group>
        <b-form-group>
          <label
            class="material-label"
            :class="{ empty: form.iec_code === '' }"
          >
            <span>{{ $t('common.form.placeholders.iec') }}</span>
            <b-form-input
              id="er-iec"
              type="text"
              name="applicant[iec_code]"
              v-model="form.iec_code"
              required
            />
          </label>
        </b-form-group>
        <b-button type="submit" variant="primary" :disabled="loading">
          <font-awesome-icon :icon="'spinner'" spin v-if="loading" />
          {{ loading ? 'Registering...' : 'Register!' }}
        </b-button>
      </b-form>
      <div class="text-center" v-else>
        <font-awesome-icon
          :icon="'check-circle'"
          class="job-opening-success-icon"
        />
        <b-row class="justify-content-center">
          <b-col :cols="12" :sm="8">
            <p class="job-opening-success-text">
              {{ $t('landing.partners.fieo.events.regSuccess') }}
            </p>
          </b-col>
        </b-row>
      </div>
    </b-modal>
  </page-section>
</template>

<script>
import PageSection from '~/components/PageSection'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  data() {
    return {
      currentEvent: '',
      registered: false,
      loading: false,
      form: {
        name: this.$route.query.name || '',
        email: this.$route.query.email || '',
        phone: this.$route.query.phone || '',
        company: this.$route.query.company || '',
        iec_code: this.$route.query.iec_code || '',
        campaign: 'fieo',
        utype: 'exporter_lead',
        referrer: ''
      }
    }
  },
  mounted() {
    this.getPublicToken()
    this.getLandingPageUrl()
  },
  methods: {
    getPublicToken() {
      this.axios({
        url: process.env.apiUrl + '/v1/access/token'
      })
        .then((response) => {
          this.publicToken = response.data.token
        })
        .catch((err) => {})
    },
    onClickRegister(location) {
      this.registered = false
      this.currentEvent = location
    },
    onSubmit() {
      this.loading = true
      this.axios({
        url: process.env.apiUrl + '/business/applicants',
        method: 'post',
        headers: {
          Authorization: 'Token ' + this.publicToken
        },
        data: {
          applicant: {
            ...this.form,
            event: this.currentEvent,
            channel: 'brokers_fieo'
          }
        }
      })
        .then((res) => {
          this.$ma.setUserProperties({
            applicant_name: this.form.name,
            exporter_email: this.form.email
          })
          this.loading = false
          this.registered = true
        })
        .catch((err) => {
          this.loading = false
        })
    },
    getLandingPageUrl() {
      this.form.referrer = document.vueReferrer
      setTimeout(() => {
        Object.keys(localStorage).map((i) => {
          if (i.indexOf('mixpanel') > 0) {
            let mixpanelObj = JSON.parse(localStorage[i])
            const prop = 'Landing Page URL'
            if (mixpanelObj.hasOwnProperty(prop)) {
              this.form.referrer = mixpanelObj[prop]
            }
          }
        })
      }, 1000)
    }
  },
  components: {
    PageSection,
    FontAwesomeIcon
  }
}
</script>
