<template>
  <b-navbar
    id="main-header"
    toggleable="xl"
    :type="upHeader || isNewNavbar ? 'light' : 'dark'"
    :variant="upHeader || isNewNavbar ? 'white' : 'transparent'"
    :fixed="lightHeader ? 'top' : null"
    :class="[isNewNavbar ? 'new-navbar' : 'main-navbar', downOrUp, shadow]"
    :sticky="isNewNavbar ? true : false"
  >
    <button
      class="navbar-toggler"
      type="button"
      @click="clickToggle"
      v-track-click
      id="header-menu-togggle"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <b-navbar-brand :to="localePath('index')" v-track-click id="header-logo">
      <b-img
        v-if="page === 'voyagerBankDetails'"
        :alt="$t('header.home')"
        title="Drip"
        :src="require(`~/static/images/voyager-logo.svg`)"
        :width="164"
        :height="82"
      />
      <b-img
        v-else-if="lightHeader || isNewNavbar"
        :alt="$t('header.home')"
        title="Drip"
        :src="require(`~/static/images/drip-logo.svg`)"
        :width="164"
      />
      <b-img
        v-else-if="!lightHeader && !isNewNavbar"
        :alt="$t('header.home')"
        title="Drip"
        :src="require(`~/static/images/drip-logo-white.svg`)"
        :width="164"
      />

      <div class="d-none d-lg-inline" v-if="isNewNavbar">
        <b-img
          alt="Path"
          title="Path"
          :src="require(`~/static/images/path.png`)"
          width="2"
          height="28"
        />
        <span v-if="isProductPage" class="ml-4 pt-2 product-header">{{
          $t('footer.products.title')
        }}</span>
        <span v-if="isAboutPage" class="ml-4 pt-2 product-header">{{
          $t('footer.company.about')
        }}</span>
      </div>
    </b-navbar-brand>
    <b-navbar-nav class="d-xl-none">
      <b-nav-item
        v-if="isEn && isGoTrade"
        class="phone navbar-phone d-none d-sm-block"
        v-track-click
        :href="'tel:' + $t('pages.gotrade.phone')"
        id="header-phone"
      >
        <b-img
          class="header-phone-icon"
          :src="require(`~/assets/images/call-icon.svg`)"
          :alt="$t('pages.gotrade.contact')"
        />
      </b-nav-item>
      <b-nav-item
        v-if="isAe"
        v-b-modal.contact-modal
        class="phone navbar-phone d-none d-sm-block"
        v-track-click
        id="header-phone"
      >
        <b-img
          class="header-phone-icon"
          :src="require(`~/assets/images/call-icon.svg`)"
          :alt="$t('pages.contact.title')"
        />
      </b-nav-item>
    </b-navbar-nav>
    <b-collapse
      is-nav
      id="nav-collapse"
      :class="showCollapse ? 'is-shown' : ''"
    >
      <a
        href="#"
        class="close-nav d-xl-none"
        @click.prevent="clickToggle"
        v-track-click
        id="header-menu-close"
      >
        Close
      </a>
      <b-navbar-nav class="ml-auto">
        <li class="nav-item" v-if="false">
          <nuxt-link
            class="nav-link"
            v-if="isIn"
            :to="$t('urls.howItWorks')"
            v-smooth-scroll="{ offset: -80 }"
            v-track-click
            id="header-how-it-works"
            >{{ $t('footer.help.howItWorks') }}
          </nuxt-link>
        </li>

        <b-nav-item
          v-if="isEn && isGoTrade"
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

        <b-nav-item
          v-track-click
          id="header-investors"
          v-if="isIn || (isUs && page !== 'bankDetails')"
          :to="localePath('investors')"
        >
          {{ $t('footer.explore.investors') }}
        </b-nav-item>

        <!-- <b-nav-item
          v-if="isAe"
          class="phone navbar-phone d-none d-xl-inline-block"
          :href="'tel:' + $t('region.phone')">
          <b-img
            class="header-phone-icon"
            :src="require(`~/assets/images/call-icon.svg`)"
            :alt="$t('pages.contact.title')" />
          UAE Toll Free: {{ $t('region.phone') }}
        </b-nav-item> -->

        <b-nav-item
          v-if="!isUs"
          v-track-click
          id="header-channel-partners"
          :to="localePath('partners')"
        >
          {{ $t('footer.explore.partner') }}
        </b-nav-item>

        <b-nav-item
          v-track-click
          id="header-contact"
          :to="localePath('contact')"
        >
          {{ $t('footer.company.contact') }}
        </b-nav-item>

        <b-nav-item
          v-track-click
          id="header-blog"
          :href="$t('urls.links.blog')"
          v-if="!hideCta && !isUs"
        >
          {{ $t('resources.list.blog') }}
        </b-nav-item>

        <b-nav-item
          v-track-click
          id="header-sign-in"
          :href="portalUrl"
          v-if="!hideCta && isIn"
        >
          {{ $t('header.signIn') }}
        </b-nav-item>

        <b-nav-item
          v-track-click
          id="header-cta"
          @click="applyNow"
          class="nav-item btn btn-primary"
          v-show="!hideCta"
        >
          {{
            lightHeader ? $t('header.startApplication') : $t('header.applyNow')
          }}
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  data() {
    return {
      showCollapse: false,
      scrollPosition: 0,
      portalUrl: process.env.portalUrl
    }
  },
  props: [
    'hideCta',
    'usPhone',
    'defaultLightHeader',
    'isProductPage',
    'isAboutPage',
    'isNewNavbar',
    'isGoTrade',
    'isMxDomestic',
    'page'
  ],
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
    isEn() {
      return this.$i18n.locale === 'en'
    },
    isIn() {
      return this.$i18n.locale.indexOf('in') > -1 || this.$i18n.locale === 'en'
    },
    isMx() {
      return this.$i18n.locale.indexOf('mx') > -1
    },
    isAe() {
      return this.$i18n.locale.indexOf('ae') > -1
    },
    isUs() {
      return this.$i18n.locale.indexOf('us') > -1
    },
    downOrUp() {
      return this.downHeader ? 'down' : this.upHeader ? 'up' : ''
    },
    shadow() {
      return this.scrollPosition < 40 ? 'shadow-none' : ''
    }
  },
  methods: {
    clickToggle() {
      this.showCollapse = !this.showCollapse
    },
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
    applyNow() {
      const path = this.isUs ? 'importers-apply' : 'exporters-apply'
      if (this.isMxDomestic) {
        window.location.href = this.$t('urls.cuenta')
      } else {
        this.$router.push(this.localePath(path))
      }
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
