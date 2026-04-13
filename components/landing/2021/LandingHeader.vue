<template>
  <b-navbar
    :type="upHeader || isLandingPage ? 'light' : 'dark'"
    :variant="upHeader || isLandingPage ? 'white' : 'transparent'"
    :fixed="lightHeader ? 'top' : null"
    :class="['main-navbar', downOrUp, shadow]"
  >
    <b-navbar-brand
      :to="localePath('index')"
      v-track-click
      id="header-logo"
      :class="isLandingPage ? 'logo-pointer' : ''"
    >
      <b-img
        v-if="isLandingPage"
        :alt="$t('header.home')"
        title="Drip"
        :src="require(`~/assets/images/exporters/drip-logo.svg`)"
        :width="110"
      />
      <div v-else>
        <b-img
          v-show="lightHeader && !isLandingPage"
          :alt="$t('header.home')"
          title="Drip"
          :src="require(`~/assets/images/exporters/drip-logo.svg`)"
          :width="110"
        />
        <b-img
          v-show="!lightHeader && !isLandingPage"
          :alt="$t('header.home')"
          title="Drip"
          :src="require(`~/assets/images/landing/common/landing-drip-logo.png`)"
          :width="110"
        />
      </div>
    </b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <b-btn
        v-track-click
        id="header-cta"
        variant="primary"
        :class="[
          isLandingPage
            ? 'btn-lg btn-cta d-lg-block'
            : 'btn-lg btn-cta d-lg-block d-none',
          isMx ? 'text-transform-none' : 'text-capitalize'
        ]"
        :href="'tel:' + $t('pages.landing.tradeFinance.phone')"
        v-if="page === 'payableFinance' || page === 'inventoryFinance'"
      >
        <font-awesome-icon class="mr-1 phone-navbar" :icon="['fas', 'phone']" />
        {{ $t('pages.landing.tradeFinance.payableFinancePhone') }}</b-btn
      >
      <b-btn
        v-track-click
        id="header-cta"
        variant="primary"
        :class="[
          isLandingPage
            ? 'btn-lg btn-cta d-lg-block'
            : 'btn-lg btn-cta d-lg-block d-none',
          isMx ? 'text-transform-none' : 'text-capitalize'
        ]"
        :href="'tel:' + $t('pages.landing.tradeFinance.phone')"
        v-else
      >
        <font-awesome-icon class="mr-1 phone-navbar" :icon="['fas', 'phone']" />
        {{ $t('pages.landing.tradeFinance.phone') }}</b-btn
      >
    </b-navbar-nav>
  </b-navbar>
</template>
<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  data() {
    return {
      scrollPosition: 0
    }
  },
  props: {
    hideCta: Boolean,
    usPhone: String,
    defaultLightHeader: Boolean,
    isLandingPage: Boolean,
    page: String
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
    downOrUp() {
      return this.downHeader ? 'down' : this.upHeader ? 'up' : ''
    },
    shadow() {
      return this.scrollPosition < 40 ? 'shadow-none' : ''
    },
    isMx() {
      return this.$i18n.locale.indexOf('mx') > -1
    }
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    }
  },
  components: {
    FontAwesomeIcon
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
    
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

<style lang="scss" scoped>
.logo-pointer {
  pointer-events: none;
}

.phone-navbar {
  transform: scaleX(-1);
}

@media (max-width: 468px) {
  .impo-expo .btn-cta {
    font-size: 12px;
  }
}
</style>
