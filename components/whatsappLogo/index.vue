<template>
  <div
    class="whatsapp-connect-container"
    :class="[{ 'show-qrcode': qrCodeVisible }, { mobile }]"
    v-click-outside="hideQurCode"
    v-if="$route.path !== '/en-in/posh-guidelines' && !isMx"
    :style="{
      transform:
        !mobile && scrollPercent > 40 && scrollPercent < 70 && !qrCodeVisible
          ? 'translateX(-50%) scale(1.25)'
          : 'translateX(-50%)'
    }"
  >
    <a
      class="whatsapp-logo"
      :href="mobileRedirectLink()"
      v-on="!isMx && { click: toggleQrCodeVisiblity }"
    >
      <img :src="require(`~/assets/images/whatsapp-logo.svg`)" alt="" />
      <div v-if="!qrCodeVisible">
        <p>{{ isMx ? 'Hablar con un experto' : 'Connect with us' }}!</p>
      </div>
      <div v-else>
        <p>{{ isMx ? 'Escanear para conectar' : 'Scan to connect' }}!</p>
        <button
          v-if="!mobile"
          type="button"
          class="close"
          @click="qrCodeVisible = true"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </a>
    <div class="qr-code-popup" v-if="qrCodeVisible">
      <div class="modal-body">
        <img
          class="qr-image"
          :src="
            require(isUs
              ? '~/assets/images/whatsap-qr-code-us.png'
              : isMx
              ? '~/assets/images/whatsap-qr-code-mx.png'
              : '~/assets/images/whatsap-qr-code.svg')
          "
        />
        <div class="text-center mt-1">
          <a class="modal-link" :href="mobileRedirectLink()" target="_blank">
            {{ isMx ? 'Usar' : 'Use' }} web.whatsapp
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'
export default {
  directives: {
    clickOutside: vClickOutside.directive
  },
  data() {
    return {
      qrCodeVisible: false,
      mobile: false,
      scrollPercent: 0
    }
  },
  methods: {
    toggleQrCodeVisiblity(event) {
      if (!this.mobile) {
        event.preventDefault()
        this.qrCodeVisible = !this.qrCodeVisible
      }
    },
    hideQurCode() {
      this.qrCodeVisible = false
    },
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true
      }
      return false
    },
    updateScroll() {
      const h = document.documentElement
      const b = document.body
      const st = 'scrollTop'
      const sh = 'scrollHeight'

      this.scrollPercent =
        ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100
    },
    mobileRedirectLink() {
      return `https://wa.me/message/${
        this.$i18n.locale === 'en' || this.$i18n.locale === 'en-us'
          ? 'FML62OG4NUDQN1'
          : this.$i18n.locale === 'es-mx'
          ? 'O2CDUAWWQW7YK1'
          : 'NGGNUTJ5LLE2E1'
      }`
    }
  },
  computed: {
    isMx() {
      return this.$i18n.locale === 'es-mx'
    },
    isUs() {
      return this.$i18n.locale === 'en-us'
    },
    lightHeader() {
      return this.scrollPosition > 100
    }
  },
  mounted() {
    this.mobile = this.isMobile()
    window.addEventListener('scroll', this.updateScroll)
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';
@import '~bootstrap/scss/mixins';
.whatsapp-connect-container * {
  font-family: $global-font;
  @media screen and (max-width: $tablet) {
    font-size: 12px;
  }
}
.whatsapp-connect-container {
  transition: all 0.2s ease-in-out;
  position: fixed;
  z-index: 100;
  bottom: 0;
  left: 50%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: $dark-blue;
  padding: 0.5rem 2.5rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  border: 1px solid $primary;
  border-bottom: 0;
  .whatsapp-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 1.25rem;
      margin-right: 10px;
    }
    p {
      font-weight: 600;
      color: $white;
      margin: 0;
    }
  }
  .close {
    position: absolute;
    color: $white;
    top: 6px;
    right: 10px;
  }
  .qr-code-popup {
    right: 0;
    border-radius: 5px;
    color: $white;
    .modal-header {
      padding: 0.5rem;
      border: none;
      align-items: center;
      .modal-title {
        font-size: 0.9rem;
      }
    }
    .modal-body {
      padding: 0.5rem;
      padding-top: 10;
      .qr-image {
        width: 10rem;
        padding: 5px;
        background-color: $white;
      }
    }
    .modal-link {
      font-size: 0.9rem;
    }
  }
}

.whatsapp-connect-container.mobile {
  width: 100%;
  padding: 0.75rem;
  left: 0;
  transform: none !important;
}
@media (min-width: 1500px) {
  .whatsapp-connect-container {
    bottom: unset;
    top: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    border-top: 0;
    border-bottom: 1px solid $primary;
  }
}
</style>
