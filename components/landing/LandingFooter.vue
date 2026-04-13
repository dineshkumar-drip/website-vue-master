<template>
  <footer
    class="text-light main-footer landing-footer"
    :class="isNewBranding ? 'new-branding-footer' : 'bg-secondary'"
  >
    <div class="container-fluid">
      <b-row>
        <b-col :cols="12" :sm="12" :lg="4" class="footer-flex-container">
          <div>
            <b-nav class="list-inline footer-privacy-menu mb-0">
              <b-nav-item
                v-track-click
                id="landing-footer-terms"
                class="list-inline-item"
                :to="localePath('terms-of-use')"
              >
                {{ $t('footer.copyright.terms') }}
              </b-nav-item>
              <b-nav-item
                v-track-click
                id="landing-footer-privacy"
                class="list-inline-item"
                :to="localePath('privacy-policy')"
              >
                {{ $t('footer.copyright.policy') }}
              </b-nav-item>
            </b-nav>
          </div>
        </b-col>
        <b-col :cols="12" :sm="12" :lg="4" class="text-lg-center">
          <a
            v-if="isUs"
            v-track-click
            id="landing-footer-email"
            :href="'mailto:' + $t('region.email')"
          >
            Email: {{ $t('region.email') }} </a
          ><br />
          <a
            v-if="isUs"
            v-track-click
            id="landing-footer-phone"
            :href="'tel:' + $t('pages.gotrade.phone')"
          >
            <span>USA (Toll Free): {{ $t('us.phone') }}</span>
          </a>
          <a
            v-else
            v-track-click
            id="landing-footer-region-phone"
            :href="'tel:' + $t('region.phone')"
          >
            {{ $t('region.phone') }}
          </a>
        </b-col>
        <b-col :cols="12" :sm="12" :lg="4">
          <p class="copyright-text text-lg-right">
            &copy; {{ currentYear }} Drip Capital Inc. USA
          </p>
        </b-col>
      </b-row>
    </div>
  </footer>
</template>
<script>
export default {
  computed: {
    currentYear() {
      const now = new Date()
      return now.getFullYear()
    },
    isLanding() {
      return this.footerType === 'landing'
    },
    isUs() {
      return this.$i18n.locale.indexOf('us') > -1
    }
  },
  props: {
    footerType: {
      type: String,
      default: 'default'
    },
    showAddress: {
      type: String,
      default: ''
    },
    isNewBranding: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
.new-branding-footer {
  background-color: $dark-blue;
}
</style>
