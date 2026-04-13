<template>
  <b-navbar
    :type="upHeader ? 'light' : 'dark pt-5'"
    :variant="upHeader ? 'white' : 'transparent'"
    :fixed="lightHeader ? 'top' : null"
    :class="['main-navbar', downOrUp, shadow]"
  >
    <b-container>
      <b-navbar-brand
        :to="localePath('index')"
        v-track-click
        id="header-logo"
        class="mx-auto mx-md-2"
      >
        <b-img
          v-if="lightHeader"
          :alt="$t('header.home')"
          title="Drip"
          :src="require(`~/static/images/drip-logo.svg`)"
          :width="164"
        />
        <b-img
          v-else-if="!lightHeader"
          :alt="$t('header.home')"
          title="Drip"
          :src="
            require(`~/assets/images/investors/white logo without line.png`)
          "
          :width="164"
        />
      </b-navbar-brand>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      scrollPosition: 0
    }
  },
  computed: {
    lightHeader() {
      return this.scrollPosition > 100
    },
    upHeader() {
      return this.scrollPosition > 300
    },
    downHeader() {
      return this.scrollPosition > 400
    },
    downOrUp() {
      return this.downHeader ? 'down' : this.upHeader ? 'up' : ''
    },
    shadow() {
      return this.scrollPosition < 40 ? 'shadow-none' : ''
    }
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.updateScroll)
  }
}
</script>
