<template>
  <div>
    <div class="alert-modal" ref="alert-modal" v-if="showFraudAlert">
      <div class="lottie-background">
        <lottie-player
          :src="fraudAlertLottie"
          background="transparent"
          speed="1"
          :loop="true"
          autoplay
        ></lottie-player>
      </div>
      <b-row align-h="center">
        <b-col :md="12">
          <div class="d-flex align-items-center">
            <b-img
              class="img-fluid world alert-notice-image"
              :src="require(`~/assets/images/index/alert-vector.svg`)"
            />
            <div class="alert-notice-title">
              {{ $t('cautionaryAlertModal.title') }}
            </div>
          </div>
          <div class="d-flex flex-column align-items-center">
            <p class="d-flex alert-notice-description">
              {{ $t('cautionaryAlertModal.body') }}
            </p>
            <div class="d-flex w-100">
              <div
                class="mb-md-0 alert-notice-button"
                @click.prevent="openDocument"
              >
                {{ $t('cautionaryAlertModal.button') }}
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
import FraudAlertBG from '~/assets/images/lottie/fraud-alert-lottie.json'

export default {
  data() {
    return {
      showFraudAlert: false,
      lottieJSON: FraudAlertBG
    }
  },
  async mounted() {
    if (
      this.$i18n.locale === 'en-in' &&
      this.$route.path === '/en-in' &&
      !this.$cookies.get('ignoreAlertModal')
    ) {
      this.showFraudAlert = true
    }
  },
  methods: {
    showAlert() {
      this.showFraudAlert = true
    },
    hideModal() {
      this.$cookies.set('ignoreAlertModal', true)
      this.showFraudAlert = false
    },
    openDocument() {
      this.$cookies.set('ignoreAlertModal', true)
      window.open('/docs/drip_capital_inc_public_notice.pdf', '_blank')
    }
  },
  computed: {
    fraudAlertLottie() {
      return JSON.stringify(this.lottieJSON)
    }
  },
  watch: {
    '$i18n.locale': function (newVal) {
      if (
        newVal === 'en-in' &&
        this.$route.path === '/en-in' &&
        !this.$cookies.get('ignoreAlertModal')
      ) {
        this.showFraudAlert = true
      }
    },
    showFraudAlert: function (newVal) {
      if (newVal === true) {
        setTimeout(() => {
          this.showFraudAlert = false
        }, 5000)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
@import '~bootstrap/scss/mixins';

.alert-modal {
  position: fixed;
  top: 70%;
  color: #0a2e57;
  background: transparent;
  font-family: 'Nunito Sans', sans-serif;
  width: 250px;
  height: auto;
  border-radius: 8px;
  padding: 16px;

  .lottie-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    transform: scale(1.1);
  }

  .close-icon-style {
    position: absolute;
    top: 0;
    right: 0;
  }

  .alert-notice-image {
    width: 16px;
    margin-right: 8px;
  }
  .alert-notice-title {
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: center;
  }

  .alert-notice-description {
    color: black;
    width: 100%;
    text-transform: none;
    margin-top: 4px;
    margin-bottom: 12px;
    font-size: 10px;
    font-weight: 400;
  }

  .alert-notice-button {
    color: #26b67f;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    text-transform: none;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
}

@include media-breakpoint-down(md) {
}
</style>
