<template>
  <footer class="text-light main-footer landing-footer">
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
          <b-nav class="list-inline footer-privacy-menu mb-0">
            <b-nav-item
              v-track-click
              id="landing-footer-region-phone"
              :href="'tel:' + $t('pages.landing.tradeFinance.phone')"
            >
              {{ $t('pages.landing.tradeFinance.phone') }}
            </b-nav-item>
            <b-nav-item
              v-track-click
              id="landing-footer-email"
              :href="'mailto:' + $t('pages.landing.tradeFinance.email')"
            >
              {{ $t('pages.landing.tradeFinance.email') }}
            </b-nav-item>
          </b-nav>
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
    isEc() {
      return this.$i18n.locale.indexOf('ec') > -1
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
.landing-footer {
  background-color: $dark-blue;
  margin-top: 6rem;
}
</style>
