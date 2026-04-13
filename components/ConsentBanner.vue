<template>
  <div class="main-content">
    <!-- <button class="consent-button" @click="showConsent = true">Banner</button> -->
    <b-modal
      v-model="showConsent"
      centered
      hide-header-close
      hide-footer
      hide-header
      :no-close-on-backdrop="true"
      :no-close-on-esc="true"
      size="lg"
    >
      <div class="consent-text">
        <div class="consent-title">
          {{ $t('footer.cookieConsentBanner.title') }}
        </div>
        <div
          class="consent-body"
          v-html="$t('footer.cookieConsentBanner.body')"
        ></div>
      </div>
      <div class="d-flex align-items-center">
        <button
          id="deny-button"
          class="consent-cta-button deny-button"
          @click="denyConsent"
        >
          {{ $t('footer.cookieConsentBanner.btnReject') }}
        </button>
        <button
          id="accept-button"
          class="consent-cta-button accept-button"
          @click="acceptConsent"
        >
          {{ $t('footer.cookieConsentBanner.btnAccept') }}
        </button>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showConsent: false
    }
  },
  watch: {
    '$route.path'(val) {
      console.debug(val, this.$consentManager)

      const rejectPaths = !val.includes('privacy-policy')
      const consentNotgiven = !['AcceptAll', 'RejectAll'].includes(
        this.$consentManager.getConsentValue('preference')
      )
      if (consentNotgiven && rejectPaths) {
        this.showConsent = true
      }
    }
  },
  mounted() {
    const rejectPaths = !this.$route.path.includes('privacy-policy')
    const consentNotgiven = !['AcceptAll', 'RejectAll'].includes(
      this.$consentManager.getConsentValue('preference')
    )
    if (consentNotgiven && rejectPaths) {
      this.showConsent = true
    }
  },
  methods: {
    acceptConsent() {
      this.$consentManager.setConsent('preference', 'AcceptAll')

      this.$emit('triggerLocalCookie')
      this.showConsent = false
      this.$bvToast.show({
        title: 'Consent Accepted',
        message: 'Thank you for accepting our use of cookies.',
        variant: 'success',
        autoHideDelay: 3000
      })
      if (this.$runGTM) {
        this.$runGTM()
      }
      if (this.$runAdwords) {
        this.$runAdwords()
      }
      if (this.$runZoomInfo) {
        this.$runZoomInfo()
      }
      if (this.$runMixpanel) {
        this.$runMixpanel()
      }
    },
    denyConsent() {
      this.$consentManager.setConsent('preference', 'RejectAll')
      this.showConsent = false
      this.$bvToast.show({
        title: 'Consent Denied',
        message:
          'You have rejected the use of non-essential cookies.  Some site features may not function.',
        variant: 'warning',
        autoHideDelay: 5000
      })
    }
  }
}
</script>
<style lang="scss">
@import '../assets/scss/variables';

.main-content {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 9;

  .consent-button {
    position: absolute;
    font-size: 14px;
    font-weight: 700;
    left: 50px;
    bottom: 50px;
    width: 100px;
    height: 39px;
    padding: 5px;
    border-radius: 23px;
    border: 0;
    box-shadow: 0px 4px 22px 1px #6e6e6e;
    background: #0a273f;
    color: white;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
}
.consent-cta-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 40px;
  padding: 10px;
  border-radius: 25px;
  outline: none;
  font-size: 14px;
  font-weight: 700;
  &:hover {
    box-shadow: 0px 4px 18px -9px rgb(21, 15, 74);
  }
  &.deny-button {
    border: 2px solid #0a273f;
    background: white;
    color: #0a273f;
    margin-left: auto;
  }
  &.accept-button {
    border: 2px solid #0a273f;
    background: #0a273f;
    color: white;
    margin-left: 12px;
  }
}
</style>
<style lang="scss">
.modal-body {
  padding: 16px 30px !important;
  .consent-title {
    font-size: 20px;
    font-weight: bold;
    color: #0a273f;
    margin-bottom: 8px;
    font-family: 'Nunito Sans';
  }
  .consent-body {
    font-size: 16px;
    font-family: 'Nunito Sans';
    color: #0a273f;
    margin-bottom: 16px;
  }
}
</style>
