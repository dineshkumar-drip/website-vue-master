<template>
  <div>
    <!--<banner />-->
    <div class="position-relative">
      <div v-if="loading" class="spinner-container">
        <b-spinner variant="success" label="Spinning"></b-spinner>
      </div>
      <nuxt v-else></nuxt>
      <whatsapp-logo
        v-if="showWhatsappConnect && (isCurrentGlobal || isIn || isMx || isUs)"
      />

      <consent-banner
        v-if="!loading"
        @triggerLocalCookie="triggerLocalCookie"
      />
    </div>
  </div>
</template>

<script>
import WhatsappLogo from '@/components/whatsappLogo'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import ConsentBanner from '~/components/ConsentBanner'

const hideLogoAtArr = [
  '/es-mx/landing/financiamiento-a-proveedores',
  '/en-in/landing/trade-finance',
  '/en-us/landing/buyer-finance'
]

export default {
  data() {
    return {
      loading: true,
      geoCookie: '',
      cookieLocale: '',
      country: '',
      mappings: {
        IN: 'en-in',
        US: 'en-us',
        MX: 'es-mx'
      },
      hideWhatsappForUrls: [
        '/es-mx/landing/financiamiento-a-proveedores',
        '/en-in/landing/trade-finance',
        '/en-us/landing/buyer-finance'
      ],
      showWhatsappConnect: false
    }
  },
  head() {
    const script = [
      {
        hid: 'ldjson-organization',
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          '@id': 'https://www.dripcapital.com/#organization',
          name: 'Drip Capital',
          url: 'https://www.dripcapital.com',
          logo: 'https://assets.dripcapital.com/_nuxt/img/drip-logo.6e560f5.svg',
          sameAs: [
            'https://www.linkedin.com/company/dripcapital',
            'https://twitter.com/dripcapital_inc',
            'https://www.facebook.com/dripcapital'
          ]
        })
      },
      {
        hid: 'ldjson-website',
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          '@id': 'https://www.dripcapital.com/#website',
          url: 'https://www.dripcapital.com',
          name: 'Drip Capital',
          publisher: {
            '@id': 'https://www.dripcapital.com/#organization'
          }
        })
      }
    ]
    return {
      script,
      __dangerouslyDisableSanitizersByTagID: {
        'ldjson-organization': ['innerHTML'],
        'ldjson-website': ['innerHTML']
      }
    }
  },
  async mounted() {
    const actualCountry = await this.loadGeo()
    this.$cookies.set('i18n_locale', this.mappings[actualCountry], {
      path: '/',
      maxAge: 60 * 60 * 24 * 7
    })
    if (this.isCurrentGlobal) {
      if (
        !this.pathExists([
          'importers-finance',
          'inventory-finance',
          'payable-finance',
          'evs-tradex',
          'health'
        ])
      ) {
        if (
          ['en-in', 'en-us', 'es-mx'].includes(this.mappings[actualCountry])
        ) {
          this.$router.replace(
            this.switchLocalePath(this.mappings[actualCountry])
          )
        } else {
          // Other countries
          this.$router.replace(this.switchLocalePath('en-us'))
        }
      }
    }
    const path = window.location.pathname + window.location.search
    if (
      window.location.search.includes('utm_campaign') ||
      window.location.search.includes('utm_source') ||
      window.location.search.includes('utm_token')
    ) {
      if (!window.sessionStorage.getItem('utm_param')) {
        window.sessionStorage.setItem('utm_param', path)
        document.vueReferrer = path
      } else if (window.sessionStorage.getItem('utm_param') !== path) {
        window.sessionStorage.setItem('utm_param', path)
        document.vueReferrer = path
      }
    }
    this.showWhatsappConnect = this.hideWhatsappForUrls.includes(
      this.$route.path
    )
      ? false
      : true
    if (process.browser) {
      if (
        [
          '/bank-details/',
          '/bank-details-leumi/',
          '/bank-details-india/',
          '/importers/',
          '/importer-credit-program/',
          '/investors/',
          '/advance-against-po'
        ].includes(this.$route.path)
      )
        return (this.cookieLocale = this.$cookies.get('i18n_locale'))
      this.geoCookie = this.$cookies.get('geo')
      const ignoreModal = this.$cookies.get('ignoreLocaleModal')
      const firstVisited = this.$cookies.get('firstVisited')
      if (!firstVisited) {
        this.setCookieValue('firstVisited', window.location.href)
      }

      if (this.isCurrentGlobal) {
        // is global
        if (this.isCookieNotSet || this.isGeoCookieNotSet) {
          return this.loadGeo().then((country) => {
            // set cookie and redirect
            if (this.mappings[country]) {
              this.cookieLocale = this.mappings[country]
              this.setCookieValue('i18n_locale', this.cookieLocale)
              // this.$router.replace(this.switchLocalePath(this.cookieLocale))
              // show header
            } else {
              // is not in supported geos. so stay on global.
              this.setCookieValue('i18n_locale', 'en')
            }
          })
        } else {
          // redirect to cookie locale
          // this.$router.replace(this.switchLocalePath(this.cookieLocale))
        }
      } else {
        // is not global
        if (this.isCookieNotSet || this.isGeoCookieNotSet) {
          const currentCountry = await this.fetchCountry()
          this.setCookieValue('i18n_locale', this.$i18n.locale)
          this.setCookieValue('currentCountry', currentCountry)
          return this.loadGeo().then((country) => {
            // set cookie to current locale
            // country  = y , locale  = x
            // if country != locale, show header
          })
        } else {
          // set cookie to current locale
          this.setCookieValue('i18n_locale', this.$i18n.locale)
        }
      }
    }
  },
  watch: {
    '$route.path'() {
      if (this.hideWhatsappForUrls.includes(this.$route.path)) {
        this.showWhatsappConnect = false
      } else {
        this.showWhatsappConnect = true
      }
    }
  },
  methods: {
    async triggerLocalCookie() {
      let currentCountry = await this.fetchCountry()
      this.setCookieValue('firstVisited', window.location.href)
      this.setCookieValue('i18n_locale', this.cookieLocale)
      this.setCookieValue('currentCountry', currentCountry)
      if (this.$i18n.locale === 'en-in') {
        this.$loadScript('https://jscloud.net/x/25934/inlinks.js', null, true)
      }
      if (this.$i18n.locale === 'en-us') {
        this.$loadScript('https://jscloud.net/x/25933/inlinks.js', null, true)
        this.$loadScript('https://js.chilipiper.com/marketing.js', null, true)
      }
      this.loadGeo()
    },
    pathExists(data) {
      return data.some((path) => this.$route.path.includes(path))
    },
    loadGeo() {
      return this.getGeo()
        .then((geo) => {
          if (geo && geo.ip) {
            delete geo.ip
          }
          this.country = geo ? geo.country : ''
          this.setCookieValue('geo', geo)
          return this.country
        })
        .catch((e) => {
          console.error(e)
        })
        .finally(() => {
          setTimeout(() => {
            this.loading = false
          }, 500)
        })
    },
    loadPublicToken() {
      return this.axios({
        url: process.env.apiUrl + '/v1/access/token'
      }).then((result) => {
        return result.data.token
      })
    },
    getGeo() {
      return this.loadPublicToken()
        .then((token) => {
          return this.axios({
            headers: {
              Authorization: `Token ${token}`
            },
            url: process.env.apiUrl + '/v1/access/geo'
          })
        })
        .then((result) => {
          return result.data
        })
    },
    setCookieValue(name, value) {
      if (this.$consentManager.getConsentValue('preference') === 'AcceptAll') {
        this.$cookies.set(name, value, {
          path: '/',
          maxAge: 60 * 60 * 24 * 7
        })
      } else {
        console.error('Cookie not set -', name)
      }
    },
    fetchCountry() {
      return this.axios({
        url: 'http://ip-api.com/json'
      }).then((result) => {
        return result.data.country
      })
    }
  },
  computed: {
    isCurrentGlobal() {
      return 'en' === this.$i18n.locale
    },
    isCookieNotSet() {
      return this.cookieLocale === undefined || this.cookieLocale.length === 0
    },
    isGeoCookieNotSet() {
      return (
        !this.geoCookie === undefined ||
        (this.geoCookie && this.geoCookie.length === 0)
      )
    },
    isIn() {
      return 'en-in' === this.$i18n.locale
    },
    isMx() {
      return this.$i18n.locale === 'es-mx'
    },
    isUs() {
      return 'en-us' === this.$i18n.locale
    }
  },
  components: {
    WhatsappLogo,
    FontAwesomeIcon,
    ConsentBanner
  }
}
</script>
<style>
.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(
    255,
    255,
    255,
    0.8
  ); /* Optional: semi-transparent background */
  z-index: 1000; /* Ensure the spinner is above other content */
}
</style>
