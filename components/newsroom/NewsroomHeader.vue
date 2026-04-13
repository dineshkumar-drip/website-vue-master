<template>
  <b-navbar
    toggleable="xl"
    type="dark"
    :class="[
      'main-navbar',
      'bg-primary',
      downOrUp,
      shadow,
      page !== 'newsroom' ? 'big-navbar' : ''
    ]"
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
        :src="require(`~/assets/images/exporters/drip-logo-white.svg`)"
        :width="110"
        class="brand-img"
      />
    </b-navbar-brand>
    <b-collapse
      is-nav
      id="nav-collapse"
      :class="showCollapse ? 'is-shown' : ''"
      v-if="page !== 'mediaKitInside'"
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
      </div>
      <b-navbar-nav>
        <!--        !isImportersPrimary && localePath('index') === $route.path ? localePath('index') : localePath('exporters')-->
        <b-nav-item
          v-for="item in navItems"
          :key="item.id"
          :href="item.path"
          :class="activeClass(item.path)"
          class="title-underline pl-0"
          v-smooth-scroll="{ offset: -85 }"
          >{{ item.text }}</b-nav-item
        >
      </b-navbar-nav>
      <hr class="bg-light-gray separator d-lg-none" />
      <b-navbar-nav class="ml-lg-auto ml-sm-0">
        <div>
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

        <div>
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

        <country-selector :page="page" :lightHeader="false" />
        <b-btn
          v-track-click
          id="header-cta"
          href="#page-form"
          v-smooth-scroll="{ offset: -85 }"
          variant="light"
          class="btn-lg btn-cta"
          :class="isMx ? 'text-transform-none' : 'text-capitalize'"
        >
          {{ $t('pages.newsroom.header.signUp') }}</b-btn
        >
        <b-btn
          v-track-click
          id="header-mobile-cta"
          :href="portalUrl"
          variant="secondary"
          class="btn-sm btn-cta d-lg-none btn-mobile"
          :class="isMx ? 'text-transform-none' : 'text-capitalize'"
          >{{ $t('pages.newsroom.header.signUp') }}</b-btn
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

export default {
  data() {
    return {
      showCollapse: false,
      scrollPosition: 0,
      currentActive: 0,
      portalUrl: process.env.portalUrl,
      navItems: this.$t('pages.newsroom.header.navItems'),
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
    getFlag(path) {
      let flag
      if (path === 'exporters') {
        flag = !this.isImportersPrimary
      } else if (path === 'importers') {
        flag = this.isImportersPrimary
      }
      return flag
    },
    activeClass(path) {
      const fullPath = this.$route.path + this.$route.hash
      const splitted = fullPath.split('/')
      const pathWithHash = splitted[splitted.length - 1]
      const currentPath =
        pathWithHash === path ||
        (pathWithHash === 'newsroom' && path === 'newsroom#press-releases')
      return [
        {
          active: currentPath
        }
      ]
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
  },
  props: {
    page: {
      type: String,
      default: 'newsroom'
    }
  },
  components: {
    CountrySelector,
    NavItemText,
    Heading,
    FontAwesomeIcon
  }
}
</script>

<style lang="scss" scoped>
@import '~bootstrap/scss/mixins';
@import '../../assets/scss/_variables.scss';

.navbar-light .navbar-nav .nav-link {
  color: $dark-blue !important;
}
.title-underline {
  position: relative;
  .nav-link {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  &.active {
    font-weight: bold;
    ::after {
      content: '';
      width: 100%;
      height: 3px;
      background: $white;
      position: absolute;
      bottom: 0;
      left: 0;
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

.big-navbar {
  .brand-img {
    padding: 1rem 0 1rem 1rem;
  }
}
</style>
