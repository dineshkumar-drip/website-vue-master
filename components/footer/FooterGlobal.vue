<template>
  <footer
    class="bg-secondary text-light main-footer landing-footer"
    :class="isNewBranding ? 'footer-bg' : 'bg-secondary'"
  >
    <div class="container-fluid">
      <b-row align-v="center">
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
              <div class="d-flex flex-column">
                <b-nav-item
                  v-if="$t('footer.copyright.optOut.title')"
                  v-track-click
                  id="footer-opt-out"
                  class="list-inline-item"
                  :href="$t('footer.copyright.optOut.link')"
                  target="_blank"
                >
                  {{ $t('footer.copyright.optOut.title') }}
                </b-nav-item>
                <b-nav-item
                  v-if="$t('footer.copyright.optOutAIRoboCalls.title')"
                  v-track-click
                  id="footer-opt-out-robo-calls"
                  class="list-inline-item"
                  :href="$t('footer.copyright.optOutAIRoboCalls.link')"
                  target="_blank"
                >
                  {{ $t('footer.copyright.optOutAIRoboCalls.title') }}
                </b-nav-item>
              </div>
              <span v-if="!isGoTrade" class="country-selector">
                <country-selector />
              </span>
              <span class="language-selector">
                <language-selector v-if="isMx" />
              </span>
            </b-nav>
          </div>
        </b-col>
        <b-col :cols="12" :sm="12" :lg="4" class="text-lg-center">
          <b-nav class="list-inline footer-privacy-menu mb-0">
            <b-nav-item
              v-if="isAe || isUs"
              v-track-click
              id="landing-footer-email"
              :href="'mailto:' + $t('region.email')"
            >
              Email: {{ $t('region.email') }}
            </b-nav-item>
            <b-nav-item
              v-if="isAe"
              v-track-click
              id="landing-footer-phone-india"
              :href="'tel:' + $t('region.phoneIndia')"
            >
              India (Mobile): {{ $t('region.phoneIndia') }}
            </b-nav-item>
            <b-nav-item
              v-if="isGoTrade || isUs"
              v-track-click
              id="landing-footer-phone"
              :href="'tel:' + $t('pages.gotrade.phone')"
            >
              <span v-if="isGoTrade"
                >(Toll Free): {{ $t('pages.gotrade.phone') }}</span
              >
              <span v-else>USA (Toll Free): {{ $t('us.phone') }}</span>
            </b-nav-item>
            <b-nav-item
              v-else
              v-track-click
              id="landing-footer-phone"
              :href="'tel:' + $t('region.phone')"
            >
              <div v-if="isEc">
                <div>
                  Cdla Urdesa Central Circunvalación Sur 904 e Higueras,
                </div>
                <div>Guayaquil-Ecuador Tel. 593 98 488 0853</div>
                <div>hugoxavier@dripcapital.com</div>
              </div>
              <div v-else>
                <span v-if="isAe">UAE </span>(Toll Free):
                {{ $t('region.phone') }}
              </div>
            </b-nav-item>
          </b-nav>
        </b-col>
        <b-col :cols="12" :sm="12" :lg="4">
          <div class="copyright-text text-lg-right" v-if="isEc">
            &copy; {{ currentYear }} Drip Capital Inc.
            <div>1885 El Camino Real</div>
            <div>Palo Alto, CA 94306</div>
          </div>
          <p class="copyright-text text-lg-right" v-else>
            &copy; {{ currentYear }} Drip Capital Inc. USA
          </p>
        </b-col>
      </b-row>
    </div>
  </footer>
</template>
<script>
import CountrySelector from '~/components/footer/CountrySelector'
import LanguageSelector from '~/components/footer/LanguageSelector' // we are not using this anywhere, should we remove this?

export default {
  computed: {
    currentYear() {
      const now = new Date()
      return now.getFullYear()
    },
    isLanding() {
      return this.footerType === 'landing'
    },
    isMx() {
      return this.$i18n.locale.indexOf('mx') > -1
    },
    isAe() {
      return this.$i18n.locale.indexOf('ae') > -1
    },
    isUs() {
      return this.$i18n.locale.indexOf('us') > -1
    },
    isEc() {
      return this.$i18n.locale.indexOf('ec') > -1
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
    isProductPage: {
      type: Boolean,
      default: false
    },
    isGoTrade: {
      type: Boolean,
      default: false
    },
    isNewBranding: {
      type: Boolean,
      default: false
    }
  },
  components: {
    CountrySelector,
    LanguageSelector
  }
}
</script>

<style>
.country-selector {
  display: inline-block;
  /* margin-left: 1rem; */
}
.language-selector {
  display: inline-block;
  margin-left: 0;
}
</style>
