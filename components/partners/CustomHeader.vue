<template>
  <b-navbar
    toggleable="xl"
    :type="upHeader ? 'light' : 'dark'"
    :variant="upHeader ? 'white' : 'transparent'"
    :fixed="lightHeader ? 'top' : false"
    class="main-navbar"
    :class="downHeader ? 'down' : upHeader ? 'up' : ''"
  >
    <b-navbar-brand href="/" v-if="lightHeader" class="partnership-img">
      <b-img-lazy
        :alt="$t('header.home')"
        title="FIEO + Drip Capital"
        :src="require(`~/assets/images/partners/partnership.png`)"
        :width="280"
      />
    </b-navbar-brand>
    <b-navbar-brand href="/" v-else>
      <b-img-lazy
        :alt="$t('header.home')"
        title="Drip"
        :src="require(`~/static/images/drip-logo-white.svg`)"
        :width="164"
      />
    </b-navbar-brand>
    <b-collapse is-nav id="nav-collapse" v-if="lightHeader">
      <b-navbar-nav class="ml-auto">
        <!-- <b-nav-item class="phone navbar-phone d-none d-xl-inline-block" :href="'tel:' + $t(usPhone ? 'us.phone' : 'region.phone')">
          <font-awesome-icon :icon="'phone'" class="header-phone-icon" />
          {{ $t(usPhone ? 'us.phone' : 'region.phone') }}
        </b-nav-item> -->
        <li class="nav-item btn btn-primary">
          <a href="#" data-mxp-event="Click Apply Now" class="nav-link">
            {{ $t('header.applyNow') }}
          </a>
        </li>
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
      scrollPosition: 0
    }
  },
  props: ['hideCta', 'usPhone', 'defaultLightHeader'],
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
    is_en() {
      return this.$i18n.locale == 'en'
    }
  },
  methods: {
    clickToggle() {
      this.showCollapse = !this.showCollapse
    },
    updateScroll() {
      this.scrollPosition = window.scrollY
    }
  },
  components: {
    FontAwesomeIcon
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  }
}
</script>

<style></style>
