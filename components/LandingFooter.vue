<template>
  <footer class="text-light main-footer landing-footer">
    <div class="container-fluid">
      <b-row>
        <b-col :cols="12" :sm="12" :lg="4" class="footer-flex-container">
          <div>
            <p class="copyright-text">
              <a
                v-track-click
                id="landing-footer-email"
                :href="'mailto:' + $t('region.email')"
              >
                {{ $t('region.email') }}
              </a>
            </p>
            <p class="copyright-text">
              &copy; {{ currentYear }} Drip Capital Inc. USA
            </p>
            <b-nav class="list-inline footer-privacy-menu">
              <b-nav-item
                v-track-click
                id="landing-footer-about"
                class="list-inline-item"
                :to="localePath('about')"
              >
                {{ $t('footer.company.about') }}
              </b-nav-item>
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
        <b-col
          :cols="12"
          :sm="12"
          :lg="4"
          class="text-lg-center footer-flex-container"
        >
          <a
            v-track-click
            id="landing-footer-fci"
            href="https://fci.nl/en/home"
            target="_blank"
          >
            <b-img-lazy
              :height="50"
              class="footer-image fci"
              alt="FCI"
              title="Drip Capital Inc. is member of Factors Chain International"
              :src="require(`~/static/images/fci-union-logo.svg`)"
            />
          </a>
          <b-img-lazy
            :height="45"
            class="footer-image ssl"
            alt="SSL Secured"
            title="The connection to this site is encrypted and authenticated using a strong protocol (TLS 1.2), a strong key exchange (ECDHE_RSA with P-256), and a strong cipher (AES_128_GCM)."
            :src="require(`~/static/images/ssl.svg`)"
          />
        </b-col>
        <b-col :cols="12" :sm="12" :lg="4">
          <div class="row">
            <div class="col-6">
              <span class="badge badge-primary text-upper">{{
                $t('us.country')
              }}</span>
              <p>
                {{ $t('us.company') }}<br />
                {{ $t('us.address1') }}<br />
                {{ $t('us.address2') }}<br /><br />
                <a
                  v-track-click
                  id="landing-footer-us-phone"
                  class="text-primary"
                  :href="'tel:' + $t('us.phone')"
                  >{{ $t('us.phone') }}</a
                >
              </p>
            </div>
            <div class="col-6">
              <span class="badge badge-primary text-upper">{{
                $t('region.country')
              }}</span>
              <p>
                {{ $t('region.company') }}<br />
                {{ $t('region.address1') }}<br />
                {{ $t('region.address2') }}<br /><br />
                <a
                  v-track-click
                  id="landing-footer-region-phone"
                  class="text-primary"
                  :href="'tel:' + $t('region.phone')"
                >
                  {{ $t('region.phone') }}
                </a>
              </p>
            </div>
          </div>
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
    }
  }
}
</script>
