<template>
  <footer class="text-light main-footer landing-footer">
    <div class="container-fluid">
      <b-row>
        <b-col :cols="12" :sm="12" :lg="3">
          <p class="copyright-text">
            &copy; {{ currentYear }} Drip Capital Inc. USA
          </p>
        </b-col>
        <b-col :cols="12" :sm="12" :lg="3">
          <b-nav class="justify-content-lg-center">
            <b-nav-item
              v-track-click
              id="landing-footer-privacy"
              class="list-inline-item"
              :to="localePath('privacy-policy')"
            >
              {{ $t('footer.copyright.policy') }}
            </b-nav-item>
          </b-nav>
        </b-col>
        <b-col :cols="12" :sm="12" :lg="3" class="text-lg-center">
          <b-nav class="list-inline footer-privacy-menu mb-0">
            <b-nav-item
              v-track-click
              id="landing-footer-terms"
              class="list-inline-item"
              :to="localePath('terms-of-use')"
            >
              {{ $t('footer.copyright.terms') }}
            </b-nav-item>
          </b-nav>
        </b-col>
        <b-col :cols="12" :sm="12" :lg="3" class="text-lg-center">
          <b-nav class="list-inline footer-privacy-menu mb-0">
            <b-nav-item
              v-track-click
              id="landing-footer-terms"
              class="list-inline-item t-c"
              :to="localePath('terms-of-use')"
            >
              {{ $t('footer.copyright.termsAndConditions') }}
            </b-nav-item>
          </b-nav>
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

.t-c {
  pointer-events: none;
}

.landing-footer {
  background-color: $dark-blue;
  margin-top: 6rem;
}

@media (max-width: 600px) {
  .landing-footer {
    padding: 24px 20px;
    margin-top: 60px;
  }
}
</style>
