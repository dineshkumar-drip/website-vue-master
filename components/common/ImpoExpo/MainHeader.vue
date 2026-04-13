<template>
  <b-navbar
    toggleable="xl"
    :type="page === 'channelPartner' && !lightHeader ? 'dark' : 'light'"
    :variant="
      upHeader || isContactPage || page == 'newsroom' || page === 'importers'
        ? 'white'
        : 'transparent'
    "
    :fixed="lightHeader ? 'top' : null"
    :class="['main-navbar', downOrUp, shadow, boxShadow]"
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
        :alt="$t('header.home')"
        title="Drip"
        :src="
          page === 'channelPartner' && !lightHeader
            ? require(`~/assets/images/exporters/drip-logo-white.svg`)
            : require(`~/assets/images/exporters/drip-logo.svg`)
        "
        :width="110"
      />
    </b-navbar-brand>
    <b-collapse
      is-nav
      id="nav-collapse"
      :class="showCollapse ? 'is-shown' : ''"
    >
      <div class="d-flex">
        <a
          href="#"
          class="close-nav d-xl-none"
          @click.prevent="clickToggle"
          v-track-click
          id="header-menu-close"
        >
          Close
        </a>
        <nuxt-link :to="localePath('index')">
          <b-img
            class="logo-nav d-xl-none"
            :alt="$t('header.home')"
            title="Drip"
            :src="require(`~/assets/images/exporters/drip-logo-mobile.png`)"
            :width="30"
            :height="30"
          />
        </nuxt-link>
      </div>

      <b-navbar-nav class="align-items-center hover-nav">
        <!-- Dropdown Items -->
        <template v-for="item in navItems">
          <div
            :key="item.text + '-dropdown'"
            v-if="item.subNav"
            class="nav-dropdown-container title-underline"
            :class="activeClass(item.subNav)"
            @mouseenter="showDropdown($event)"
            @mouseleave="hideDropdown($event)"
          >
            <a class="nav-link title-underline d-flex align-items-center">
              {{ item.text }}
              <b-icon-chevron-down class="ml-1" scale="0.8" />
            </a>

            <div class="custom-dropdown-menu">
              <b-link
                v-for="subItem in item.subNav"
                :key="subItem.text"
                :to="localePath(subItem.path)"
                :class="`custom-dropdown-item font-weight-400 ${
                  $route.path.includes(subItem.path) ? 'font-weight-700' : ''
                }`"
              >
                {{ subItem.text }}
              </b-link>
            </div>
          </div>
          <b-nav-item
            v-else
            :key="item.text + '-link'"
            :to="redirectTo(item.path)"
            class="title-underline pl-0"
            :class="activeClass(item.path)"
          >
            {{ item.text }}
          </b-nav-item>
        </template>
      </b-navbar-nav>
      <hr class="bg-light-gray separator d-lg-none" />
      <b-navbar-nav class="ml-lg-auto ml-sm-0">
        <div v-if="page !== 'channelPartner'">
          <b-nav-item-dropdown
            no-caret
            class="mr-1 header d-none d-lg-block"
            :class="page"
          >
            <template slot="button-content">
              <nav-item-text
                :text="$t('footer.company.title')"
                :lightHeader="lightHeader"
                :page="page"
              />
            </template>
            <b-dropdown-item
              v-for="company in companyNavIn"
              :key="company.id"
              :to="localePath(company.link)"
              >{{ company.text }}</b-dropdown-item
            >
            <b-dropdown-item
              v-for="company in companyNavOut"
              :key="company.id"
              :href="`${company.link}`"
              >{{ company.text }}</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </div>
        <b-nav-item
          v-track-click
          class="d-lg-none"
          id="exporter-header-company"
          @click="visibleCompany = !visibleCompany"
        >
          {{ $t('footer.company.title') }}
          <font-awesome-icon
            :icon="['fas', 'chevron-down']"
            class="icon alt ml-2"
            v-show="!visibleCompany"
          />
          <font-awesome-icon
            :icon="['fas', 'chevron-up']"
            class="icon alt ml-2"
            v-show="visibleCompany"
          />
        </b-nav-item>
        <b-collapse id="collapse-1" v-model="visibleCompany" class="d-lg-none">
          <div
            class="link mb-3 mt-2 ml-2"
            v-for="company in companyNavIn"
            :key="company.id"
          >
            <nuxt-link :to="localePath(company.link)">
              {{ company.text }}</nuxt-link
            >
          </div>
          <div
            class="link mb-3 mt-2 ml-2"
            v-for="company in companyNavOut"
            :key="company.id"
          >
            <a :href="`${company.link}`">{{ company.text }}</a>
          </div>
        </b-collapse>

        <div v-if="page !== 'channelPartner'">
          <b-nav-item-dropdown class="mr-1 header d-none d-lg-block" no-caret>
            <template slot="button-content">
              <nav-item-text
                :text="$t('footer.company.resources')"
                :lightHeader="lightHeader"
                :page="page"
              />
            </template>
            <b-dropdown-item
              v-for="(resource, i) in resources"
              :key="i"
              :href="redirectTo(resource.link, true)"
            >
              {{ resource.text }}
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </div>

        <b-nav-item
          v-track-click
          class="d-lg-none"
          id="exporter-header-resources"
          @click="visibleResources = !visibleResources"
        >
          {{ $t('footer.company.resources') }}
          <font-awesome-icon
            :icon="['fas', 'chevron-down']"
            class="icon alt ml-2"
            v-show="!visibleResources"
          />
          <font-awesome-icon
            :icon="['fas', 'chevron-up']"
            class="icon alt ml-2"
            v-show="visibleResources"
          />
        </b-nav-item>
        <b-collapse
          id="collapse-2"
          v-model="visibleResources"
          class="d-lg-none"
        >
          <div
            class="link mb-3 mt-2 ml-2"
            v-for="(resource, i) in resources"
            :key="i"
          >
            <a :href="`${resource.link}`">{{ resource.text }}</a>
          </div>
        </b-collapse>

        <country-selector :page="page" :lightHeader="lightHeader" />
        <div v-if="page !== 'channelPartner'">
          <b-btn
            v-track-click
            id="header-login-cta"
            :href="portalUrl"
            :variant="
              page === 'channelPartner' && !lightHeader
                ? 'primary'
                : 'outline-primary'
            "
            class="btn-sm btn-cta d-lg-block d-none mr-3"
            :class="isMx ? 'text-transform-none' : 'text-capitalize'"
            >{{ $t('header.signIn') }}</b-btn
          >
        </div>
        <b-btn
          v-track-click
          id="header-cta"
          v-if="isUs && page === 'channelPartner'"
          v-smooth-scroll="{ offset: -85 }"
          variant="primary"
          class="btn-lg btn-cta"
          :class="isMx ? 'text-transform-none' : 'text-capitalize'"
          :href="'tel:' + '+1 (650) 437 7438'"
        >
          {{ '+1 (650) 437 7438' }}</b-btn
        >
        <b-btn
          v-track-click
          id="header-cta"
          v-else-if="isUs"
          v-smooth-scroll="{ offset: -85 }"
          variant="primary"
          class="btn-lg btn-cta"
          :class="isMx ? 'text-transform-none' : 'text-capitalize'"
          :href="'tel:' + '+1 (650) 437 0150'"
        >
          {{ '+1 (650) 437 0150' }}</b-btn
        >
        <b-btn
          v-track-click
          id="header-cta"
          v-else-if="isAboutPage || isContactPage"
          @click="applyNow"
          v-smooth-scroll="{ offset: -85 }"
          variant="primary"
          class="btn-lg btn-cta"
          :class="isMx ? 'text-transform-none' : 'text-capitalize'"
        >
          {{
            lightHeader ? $t('header.startApplication') : $t('header.applyNow')
          }}</b-btn
        >
        <b-btn
          v-track-click
          v-else
          id="header-cta"
          href="#page-form"
          v-smooth-scroll="{ offset: -85 }"
          variant="primary"
          class="btn-lg btn-cta"
          :class="isMx ? 'text-transform-none' : 'text-capitalize'"
        >
          {{
            lightHeader ? $t('header.startApplication') : $t('header.applyNow')
          }}</b-btn
        >
        <b-btn
          v-track-click
          id="header-mobile-cta"
          :href="portalUrl"
          variant="secondary"
          class="btn-sm btn-cta d-lg-none btn-mobile"
          :class="isMx ? 'text-transform-none' : 'text-capitalize'"
          >{{ $t('header.signIn') }}</b-btn
        >
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import CountrySelector from '~/components/common/ImpoExpo/CountrySelector'
import Heading from '~/components/common/ImpoExpo/Heading'
import NavItemText from '~/components/common/ImpoExpo/NavItemText'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import { BIconChevronDown } from 'bootstrap-vue'

export default {
  data() {
    return {
      showCollapse: false,
      scrollPosition: 0,
      currentActive: 0,
      portalUrl: process.env.portalUrl,
      navItems: this.$t('header.mainHeader.navItems'),
      companyNavIn: this.$t('header.mainHeader.companyNavIn'),
      companyNavOut: this.$t('header.mainHeader.companyNavOut'),
      resources: this.$t('header.mainHeader.resources'),
      visibleResources: false,
      visibleCompany: true
    }
  },
  computed: {
    lightHeader() {
      return this.scrollPosition > 100
    },
    downOrUp() {
      return this.downHeader ? 'down' : this.upHeader ? 'up' : ''
    },
    downHeader() {
      return this.scrollPosition > 400
    },
    shadow() {
      return this.scrollPosition < 40 ? 'shadow-none' : ''
    },
    boxShadow() {
      return this.page === 'importers' ? 'nav-shadow' : ''
    },
    upHeader() {
      return this.scrollPosition > 300
    },
    isUs() {
      return this.$i18n.locale.indexOf('us') > -1
    },
    isImportersPrimary() {
      return this.$i18n.locale === 'en-us' || this.$i18n.locale === 'en'
    },
    isMx() {
      return this.$i18n.locale.indexOf('mx') > -1
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
      const path =
        this.$i18n.locale === 'en-us' ? 'importers-apply' : 'exporters-apply'
      this.$router.push(this.localePath(path))
    },
    getFlag(path) {
      let flag
      if (path === 'exporters') {
        flag = !this.isImportersPrimary
      } else if (path === 'importers') {
        flag = this.isImportersPrimary
      }
      return flag
    },
    showDropdown(event) {
      // Optional: Can add custom logic here
      event.currentTarget
        .querySelector('.custom-dropdown-menu')
        .classList.add('open')
    },
    hideDropdown(event) {
      // Optional: Can add delay here
      event.currentTarget
        .querySelector('.custom-dropdown-menu')
        .classList.remove('open')
    },

    activeClass(pathOrSubNav) {
      const currentPath = this.$route.path
      const isHomePath = this.localePath('index') === currentPath

      // Handle case when dropdown item (array of subNav)
      if (Array.isArray(pathOrSubNav)) {
        const isActive = pathOrSubNav.some(
          (subItem) => this.localePath(subItem.path) === currentPath
        )
        return [{ active: isActive }, flag ? 'order-0' : 'order-1']
      }

      // Handle normal link item
      const flag = this.getFlag(pathOrSubNav)
      const isActive =
        (flag && isHomePath) || this.localePath(pathOrSubNav) === currentPath

      return [{ active: isActive }, flag ? 'order-0' : 'order-1']
    },
    redirectTo(path, justRedirect = false) {
      if (justRedirect) {
        const resourcesPath =
          path.startsWith('/resources') || path.startsWith('/recursos')
        const hasLocaleRoute = this.localePath(path).includes(path)
        if (resourcesPath && !hasLocaleRoute) {
          const loadedLocale = this.$i18n.locale !== 'en' && this.$i18n.locale
          const localeRedirect = [{ from: 'en-mx', to: 'es-mx' }].find(
            ({ from }) => from === loadedLocale
          )
          if (localeRedirect) {
            return `/${localeRedirect.to}${path}`
          }
          const restricted = ['en-ae'].includes(loadedLocale)
          return loadedLocale && !restricted ? `/${loadedLocale}${path}` : path
        }
        return path
      }
      const flag = this.getFlag(path)
      return flag ? this.localePath('index') : this.localePath(path)
    }
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
  },
  props: {
    isNewNavbar: {
      type: Boolean,
      default: false
    },
    defaultLightHeader: {
      type: Boolean,
      default: false
    },
    isExporters: {
      type: Boolean,
      default: false
    },
    isAboutPage: {
      type: Boolean,
      default: false
    },
    isContactPage: {
      type: Boolean,
      default: false
    },
    page: {
      type: String,
      default: 'importers'
    }
  },
  components: {
    CountrySelector,
    NavItemText,
    Heading,
    FontAwesomeIcon,
    BIconChevronDown
  }
}
</script>

<style lang="scss">
.dropdown-menu {
  outline: none;
  top: 60px !important;
}
</style>
<style lang="scss" scoped>
@import '~bootstrap/scss/mixins';
@import '../../../assets/scss/_variables.scss';

.navbar-light .navbar-nav .nav-link {
  color: $dark-blue !important;
}

.custom-nav-padding {
  padding-left: 0rem !important;
  padding-right: 0rem !important;
  padding-top: 0rem !important;
  padding-bottom: 0rem !important;
}
.nav-shadow {
  box-shadow: 0px 4px 17px -11px black !important;
}

// .subNav{
//   top: 4px;
//   z-index: 100;
// }

.title-underline {
  position: relative;

  .nav-link {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  &.active:not(.show) {
    // only show underline when not open
    font-weight: bold;

    &::after {
      content: '';
      width: 100%;
      height: 4px;
      background: $primary;
      position: absolute;
      bottom: -12px;
      border-radius: 8px 9px 0 0;
      left: 0;
    }
  }

  @media (max-width: 991.98px) {
    &.active:not(.show)::after {
      background: transparent; // removes the underline pseudo-element
    }
  }
}

.fixed-top {
  .title-underline {
    &.active {
      ::after {
        bottom: -0.9rem;
      }
    }
  }
}

.link a {
  color: white;
  font-size: 0.875rem;
  text-transform: capitalize;
  font-weight: 500;
}

@include media-breakpoint-down(md) {
  .navbar-light .navbar-nav .nav-link {
    color: white !important;
  }

  .navbar-collapse {
    background: $dark-blue;

    .navbar-nav {
      padding-bottom: 0;
    }

    .btn {
      background: $primary;
    }

    .btn-mobile {
      background: $dark-blue;
      border-color: white;
    }
  }

  .separator {
    width: 14rem;
  }

  .title-underline {
    &.active {
      ::after {
        background: $dark-blue;
      }
    }
  }

  .logo-nav {
    margin: 45px 0 10px 160px;
    display: block;
    overflow: hidden;
    position: relative;
  }
}

.hover-nav {
  position: relative;
  display: flex;
  gap: 1rem;
}

/* Dropdown Container */
.nav-dropdown-container {
  position: relative;
  padding: 0rem;
  cursor: pointer;
}

/* Custom Dropdown Menu */
.custom-dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 200px;
  background: white;
  border: 1px solid #eee;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.25s ease;
  z-index: 1000;
  padding: 0.5rem 0;
}

/* Dropdown Items */
.custom-dropdown-item {
  display: block;
  padding: 0.5rem 1rem;
  color: #0a2e57;
  text-decoration: none;
  transition: background 0.2s;
  font-weight: 400;
}

.custom-dropdown-item:hover {
  background: #f8f9fa;
}

/* Show dropdown on hover */
.nav-dropdown-container:hover .custom-dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

/* Nav link styling */
.nav-link {
  color: inherit;
  text-decoration: none;
  padding: 0.5rem 0;
}
</style>
