<template>
  <b-navbar
    toggleable="xl"
    :type="upHeader ? 'light' : 'dark'"
    :variant="upHeader ? 'white' : 'transparent'"
    :fixed="lightHeader ? 'top' : false"
    class="main-navbar"
    :class="downHeader ? 'down' : upHeader ? 'up' : ''"
  >
    <b-navbar-brand
      v-track-click
      id="landing-header-logo"
      :href="homeUrl"
      target="_blank"
    >
      <b-img-lazy
        v-if="isLandingPage"
        alt="Home"
        title="Drip"
        :src="require(`~/assets/images/landing/evstradex/evs-header-logo.png`)"
        :width="164"
        :height="88"
        style="object-fit: contain"
      />
      <b-img-lazy
        v-else-if="lightHeader"
        alt="Home"
        title="Drip"
        :src="require(`~/static/images/drip-logo.svg`)"
        :width="164"
      />
      <b-img-lazy
        v-else
        alt="Home"
        title="Drip"
        :src="require(`~/static/images/drip-logo-white.svg`)"
        :width="164"
      />
    </b-navbar-brand>
    <b-navbar-nav class="ml-auto" v-if="!hidePhone">
      <b-nav-item
        v-if="!isUs"
        v-track-click
        id="landing-header-phone"
        class="phone navbar-phone d-xl-none"
        v-b-modal.contact-modal
      >
        <b-img
          class="header-phone-icon"
          :src="require(`~/assets/images/call-icon.svg`)"
          :alt="$t('pages.contact.title')"
        />
      </b-nav-item>
      <b-nav-item
        v-if="!isUs"
        v-track-click
        id="landing-header-phone"
        class="phone navbar-phone d-none d-xl-inline-block"
        v-b-modal.contact-modal
      >
        <b-img
          :src="require(`~/assets/images/call-icon.svg`)"
          :alt="$t('pages.contact.title')"
        />
        {{ phoneNumber }}
      </b-nav-item>
      <b-nav-item
        v-if="isUs"
        class="phone navbar-phone d-none d-xl-inline-block"
        :href="'tel:' + $t('pages.gotrade.phone')"
      >
        <b-img
          class="header-phone-icon"
          :src="require(`~/assets/images/call-icon.svg`)"
          :alt="$t('pages.contact.title')"
        />
        Toll Free: {{ $t('pages.gotrade.phone') }}
      </b-nav-item>
      <slot name="menu-items" />
    </b-navbar-nav>
  </b-navbar>
</template>
<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  data() {
    return {
      scrollPosition: 0,
      publicToken: '',
      phoneNumber: '+1-844-804-4822',
      phoneNumbers: {
        IN: '+91-9987-779-334',
        MX: '+52-55-4161-1579'
      }
    }
  },
  props: {
    homeUrl: {
      type: String,
      default: '/'
    },
    hidePhone: {
      type: Boolean,
      default: false
    },
    defaultLightHeader: {
      type: Boolean,
      default: false
    },
    isLandingPage: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    lightHeader() {
      return this.defaultLightHeader ? true : this.scrollPosition > 100
    },
    upHeader() {
      return this.defaultLightHeader ? true : this.scrollPosition > 300
    },
    downHeader() {
      return this.defaultLightHeader ? true : this.scrollPosition > 400
    },
    isUs() {
      return this.$i18n.locale.indexOf('us') > -1
    }
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
    initialize() {
      // todo: move to nuxt for global token thing. also. reuse the getpublictoken method maybe.
      return this.axios({
        url: process.env.apiUrl + '/v1/access/token'
      })
        .then((response) => {
          this.publicToken = response.data.token
          return this.axios({
            headers: {
              Authorization: 'Token ' + this.publicToken
            },
            url: process.env.apiUrl + '/v1/access/geo'
          })
        })
        .then((response) => {
          if (
            response.data.country &&
            typeof this.phoneNumbers[response.data.country] !== 'undefined'
          ) {
            this.phoneNumber = this.phoneNumbers[response.data.country]
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  components: {
    FontAwesomeIcon
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
    this.initialize()
    
    // Cleanup phone numbers after component loads
    this.$nextTick(() => {
      setTimeout(() => {
        if (typeof this.$cleanupPhoneNumbers === 'function') {
          this.$cleanupPhoneNumbers()
        }
      }, 100)
    })
  }
}
</script>
