<template>
  <div class="fixed-bottom cc-container" v-if="consent === 'open'">
    <div class="container-fluid">
      <div class="cookie-consent">
        <span class="message"
          >{{ $t('footer.cookieConsent.line1') }}
          <a
            :href="localePath('privacy-policy')"
            target="_blank"
            class="link"
            >{{ $t('footer.cookieConsent.line2') }}</a
          >
          {{ $t('footer.cookieConsent.line3') }}
        </span>
        <a class="allow d-none d-md-block" href="#" @click.prevent="onClose">
          <font-awesome-icon icon="times" class="icon" />
        </a>
        <a
          class="d-block d-md-none btn btn-secondary btn-sm mt-3"
          href="#"
          @click.prevent="onClose"
        >
          {{ $t('footer.cookieConsent.close') }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  data() {
    return {
      consent: 'close'
    }
  },
  mounted() {
    let c = localStorage.getItem('consent')
    if (c !== null && c !== 'open') {
      this.consent = c
    } else {
      this.consent = 'open'
      localStorage.setItem('consent', 'open')
    }
  },
  methods: {
    onClose() {
      this.consent = 'close'
      localStorage.setItem('consent', 'close')
    }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>
