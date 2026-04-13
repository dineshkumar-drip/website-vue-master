<template>
  <div id="importers-us-footer">
    <div class="footer-outer-container">
      <div class="footer-container">
        <div class="footer-inner-container py-0">
          <div class="green-border"></div>
        </div>
      </div>
    </div>
    <div class="footer-outer-container">
      <div class="footer-container">
        <div class="footer-inner-container">
          <b-row>
            <b-col xs="12" md="12" lg="3" class="mb-2 mb-3">
              <a
                href="https://www.facebook.com/dripcapital"
                target="_blank"
                v-track-click
                id="footer-fci"
              >
                <img
                  :src="require(`~/assets/images/importers/facebook.svg`)"
                  alt=""
                  class="social-icon mr-3 mr-md-4"
                />
              </a>
              <a
                href="https://twitter.com/dripcapital_inc"
                target="_blank"
                v-track-click
                id="footer-fci"
              >
                <img
                  :src="require(`~/assets/images/importers/twitter.svg`)"
                  alt=""
                  class="social-icon mr-3 mr-md-4"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/dripcapital"
                target="_blank"
                v-track-click
                id="footer-fci"
              >
                <img
                  :src="require(`~/assets/images/importers/linkedin.svg`)"
                  alt=""
                  class="social-icon mr-3 mr-md-4"
                />
              </a>
            </b-col>
            <b-col xs="12" md="12" lg="6" class="mb-2">
              <div
                class="navigation-links d-flex justify-content-between flex-nowrap"
              >
                <div class="flex-basis-0">
                  <div class="widget">
                    <h5
                      class="drip-body color-noble-blue-500 text-capitalize mb-1"
                    >
                      {{ $t('footer.products.title') }}
                    </h5>
                    <b-nav class="d-block">
                      <b-nav-item
                        v-track-click
                        href="https://www.dripcapital.com/en-us/products/supply-chain-finance"
                        link-classes="mb-1 text-sm drip-body-small"
                      >
                        Supply Chain Finance
                      </b-nav-item>
                      <b-nav-item
                        v-track-click
                        href="https://www.dripcapital.com/en-us/products/trade-finance"
                        link-classes="mb-1 text-sm drip-body-small"
                      >
                        Trade Financing Solutions
                      </b-nav-item>
                      <b-nav-item
                        v-track-click
                        href="https://www.dripcapital.com/en-us/products/inventory-finance"
                        link-classes="mb-1 text-sm drip-body-small"
                      >
                        Inventory Financing
                      </b-nav-item>
                      <b-nav-item
                        v-track-click
                        href="https://www.dripcapital.com/en-us/resources/finance-guides/accounts-payable-financing"
                        link-classes="drip-body-small"
                      >
                        Payable Finance
                      </b-nav-item>
                    </b-nav>
                  </div>
                </div>
                <div class="vertical-divider"></div>
                <div class="flex-basis-0">
                  <div class="widget">
                    <h5
                      class="drip-body color-noble-blue-500 text-capitalize mb-1"
                    >
                      {{ $t('footer.explore.title') }}
                    </h5>
                    <b-nav class="d-block">
                      <b-nav-item
                        v-if="!isUs"
                        v-track-click
                        id="footer-exporters"
                        :to="localePath('exporters')"
                        link-classes="drip-body-small"
                      >
                        {{ $t('footer.explore.exporters') }}
                      </b-nav-item>

                      <b-nav-item
                        v-track-click
                        v-if="!isMx && !isIn"
                        id="footer-importers"
                        :to="localePath('importers')"
                        link-classes="drip-body-small"
                      >
                        {{ $t('footer.explore.importers') }}
                      </b-nav-item>
                      <b-nav-item
                        v-track-click
                        id="footer-investors"
                        :to="localePath('investors')"
                        link-classes="drip-body-small"
                      >
                        {{ $t('footer.explore.investors') }}
                      </b-nav-item>
                      <b-nav-item
                        v-track-click
                        id="footer-channel-partners"
                        :to="localePath('partners')"
                        link-classes="drip-body-small"
                      >
                        {{ $t('footer.explore.partner') }}
                      </b-nav-item>
                      <b-nav-item
                        v-if="!(isMx || isUs)"
                        v-track-click
                        id="footer-hsncode"
                        :href="$t('urls.links.hsncode')"
                        link-classes="drip-body-small"
                      >
                        {{ $t('footer.explore.hsncode') }}
                      </b-nav-item>
                      <b-nav-item
                        v-if="isEn || isIn || isUs"
                        v-track-click
                        id="footer-finance-guides"
                        :href="$t('urls.links.financeGuides')"
                        link-classes="drip-body-small"
                      >
                        {{ $t('footer.explore.financeGuides') }}
                      </b-nav-item>
                      <b-nav-item
                        v-if="isEn || isIn || isUs || isMx"
                        v-track-click
                        id="footer-finance-guides"
                        :href="$t('urls.links.blog')"
                        link-classes="drip-body-small"
                      >
                        {{ $t('footer.explore.blog') }}
                      </b-nav-item>
                    </b-nav>
                  </div>
                </div>
                <div class="vertical-divider"></div>
                <div class="flex-basis-0">
                  <div class="widget">
                    <h5
                      class="drip-body color-noble-blue-500 text-capitalize mb-1"
                    >
                      {{ $t('footer.company.title') }}
                    </h5>
                    <ul class="list-unstyled">
                      <b-nav-item
                        v-track-click
                        id="footer-about"
                        :to="localePath('about')"
                        link-classes="drip-body-small"
                      >
                        {{ $t('footer.company.about') }}
                      </b-nav-item>
                      <b-nav-item
                        v-track-click
                        id="footer-contact"
                        :to="localePath('contact')"
                        link-classes="drip-body-small"
                      >
                        {{ $t('footer.company.contact') }}
                      </b-nav-item>
                      <b-nav-item
                        v-track-click
                        id="footer-leadership-team"
                        :to="localePath('leadership')"
                        link-classes="drip-body-small"
                      >
                        {{ $t('footer.company.leadershipTeam') }}
                      </b-nav-item>
                      <b-nav-item
                        v-track-click
                        id="footer-careers"
                        :href="$t('urls.careers')"
                        link-classes="drip-body-small"
                      >
                        {{ $t('footer.company.careers') }}
                      </b-nav-item>
                      <b-nav-item
                        v-if="!(isMx || isIn || isUs || isEn)"
                        v-track-click
                        id="footer-blog"
                        :href="$t('urls.links.resources')"
                        link-classes="drip-body-small"
                      >
                        {{ $t('footer.company.resources') }}
                      </b-nav-item>
                      <b-nav-item
                        v-if="isIn || isUs"
                        v-track-click
                        id="footer-newsroom"
                        :href="$t('urls.links.newsroom')"
                        link-classes="drip-body-small"
                      >
                        {{ $t('footer.company.newsroom') }}
                      </b-nav-item>
                      <b-nav-item
                        v-if="isIn"
                        v-track-click
                        id="footer-posh-guidelines"
                        :to="localePath('posh-guidelines')"
                        link-classes="drip-body-small"
                      >
                        {{ $t('footer.company.posh_guidelines') }}
                      </b-nav-item>
                    </ul>
                  </div>
                </div>
                <div class="vertical-divider"></div>
                <div class="flex-basis-0">
                  <div class="widget">
                    <h5
                      class="drip-body color-noble-blue-500 text-capitalize mb-1"
                    >
                      Tools
                    </h5>
                    <ul class="list-unstyled">
                      <b-nav-item
                        v-track-click
                        id="footer-htscode"
                        :href="$t('urls.links.htsCode')"
                        link-classes="drip-body-small"
                      >
                        {{ $t('footer.explore.htsCode') }}
                      </b-nav-item>
                      <b-nav-item
                        v-track-click
                        id="footer-pitch-calculator"
                        :to="localePath('working-capital-calculator')"
                      >
                        {{ $t('footer.help.pitchCalculator') }}
                      </b-nav-item>
                    </ul>
                  </div>
                </div>
              </div>
            </b-col>
            <b-col xs="12" md="12" lg="3">
              <div class="drip-body-small font-weight-700">
                Drip Capital Inc.
              </div>
              <p class="drip-body-small mb-4">
                1885 El Camino Real Palo Alto, CA 94306<br />
                <a
                  class="color-noble-blue-500"
                  :href="
                    $route.path === '/partners'
                      ? 'tel:' + $t('footer.partners.global_phone')
                      : 'tel:+16504370150'
                  "
                >
                  {{
                    $route.path === '/partners'
                      ? $t('footer.partners.global_phone')
                      : '+1 (650) 437 0150'
                  }} </a
                ><br />
                <a
                  class="color-noble-blue-500"
                  href="mailto:trade@dripcapital.com"
                  ><u>trade@dripcapital.com</u></a
                >
              </p>
              <div class="d-flex justify-content-between flex-wrap">
                <div class="custom-width d-flex flex-row flex-md-column">
                  <p class="drip-body-small mb-2 mr-4">
                    &copy; {{ currentYear }} {{ $t('us.company') }}
                    {{ $t('us.country') }}
                  </p>
                  <b-nav
                    class="d-flex footer-privacy-menu mb-0 color-noble-blue-500 flex-nowrap"
                  >
                    <b-nav-item
                      v-track-click
                      id="footer-terms"
                      class="list-inline-item drip-body-small anchor-tag mr-2"
                      :to="localePath('terms-of-use')"
                    >
                      {{ $t('footer.copyright.terms') }}
                    </b-nav-item>

                    <b-nav-item
                      v-track-click
                      id="footer-privacy"
                      class="list-inline-item drip-body-small anchor-tag mr-2"
                      :to="localePath('privacy-policy')"
                    >
                      {{ $t('footer.copyright.policy') }}
                    </b-nav-item>
                    <div class="d-flex flex-column">
                      <b-nav-item
                        v-if="$t('footer.copyright.optOut.title')"
                        v-track-click
                        id="footer-opt-out"
                        class="list-inline-item drip-body-small anchor-tag mr-2"
                        :href="$t('footer.copyright.optOut.link')"
                        target="_blank"
                      >
                        {{ $t('footer.copyright.optOut.title') }}
                      </b-nav-item>
                      <b-nav-item
                        v-if="$t('footer.copyright.optOutAIRoboCalls.title')"
                        v-track-click
                        id="footer-opt-out-robo-calls"
                        class="list-inline-item drip-body-small anchor-tag pl-0"
                        :href="$t('footer.copyright.optOutAIRoboCalls.link')"
                        target="_blank"
                      >
                        {{ $t('footer.copyright.optOutAIRoboCalls.title') }}
                      </b-nav-item>
                    </div>
                  </b-nav>
                </div>
              </div>
            </b-col>
          </b-row>
        </div>
      </div>
      <div class="bottom-bar">
        <img
          alt="Logo"
          title="Drip"
          :src="require('~/static/images/drip-logo-white-tagline-e2e.svg')"
          width="100"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    currentYear() {
      const now = new Date()
      return now.getFullYear()
    },
    isEn() {
      return this.$i18n.locale === 'en'
    },
    isHome() {
      return this.page === 'home'
    },
    isMx() {
      return this.$i18n.locale.indexOf('mx') > -1
    },
    isUs() {
      return this.$i18n.locale.indexOf('us') > -1
    },
    isIn() {
      return this.$i18n.locale.indexOf('in') > -1
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/scss/variables';

.footer-outer-container {
  width: 100%;
  background: white;
  .footer-container {
    margin: auto;
    max-width: 1440px;
    background: white;
    .footer-inner-container {
      .social-icon {
        width: 40px;
        height: 40px;
        @media screen and (max-width: $tablet) {
          width: 24px;
          height: 24px;
        }
      }
      .green-border {
        border-top: 2px solid $wealthy-green-100;
      }

      @media screen and (min-width: $xl-laptop) {
        padding: 64px 108px;
      }

      @media screen and (max-width: $xl-laptop) {
        padding: 64px 108px;
      }

      @media screen and (max-width: $large-laptop) {
        padding: 64px 28px;
      }

      @media screen and (max-width: $laptop) {
        padding: 64px 24px;
      }

      @media screen and (max-width: $tablet) {
        padding: 24px 24px;
        padding-top: 54px;
      }

      @media screen and (max-width: $mobile) {
        padding: 24px 20px;
        padding-top: 54px;
      }

      .navigation-links {
        .vertical-divider {
          height: 172px;
          width: 2px;
          background: $wealthy-green-500;
        }
        .nav-link {
          color: $noble-blue-500;
          padding-left: 0px;
          padding-right: 4px;
          padding-top: 0px;
          font-size: 12px;
          width: max-content;
          &:hover {
            text-decoration: underline;
            cursor: pointer;
          }
          @media screen and (max-width: $tablet) {
            padding: 8px 0px;
          }
        }
      }
    }
    .flex-basis-0 {
      flex-basis: 0;
    }
    .list-inline-item {
      @media screen and (max-width: $tablet) {
        display: block;
      }
    }
    .anchor-tag {
      a {
        word-break: break-word;
        color: $noble-blue-500;
        padding: 8px 0px;
        &:hover {
          text-decoration: underline;
          cursor: pointer;
        }
        @media screen and (max-width: $tablet) {
          padding: 0px;
        }
      }
    }
  }
  .bottom-bar {
    display: flex;
    justify-content: flex-end;
    background: $noble-blue-500;
    width: 100%;
    padding: 22px 130px;
    @media screen and (max-width: $tablet) {
      padding: 22px 22px;
    }
  }
}
</style>
