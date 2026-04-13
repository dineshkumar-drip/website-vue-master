<template>
  <footer
    id="footer-en-in"
    class="bg-secondary text-light main-footer"
    :class="isNewBranding ? 'footer-bg' : 'bg-secondary'"
  >
    <!-- <div class="container-fluid d-sm-block"> -->
    <div class="container-fluid">
      <div class="hidden-print d-flex justify-content-between flex-wrap">
        <div class="flex-2 d-flex justify-content-between flex-wrap">
          <div class="flex-1" v-if="!isEn">
            <div class="widget">
              <h5 class="h5 text-capitalize">
                {{ $t('footer.products.title') }}
              </h5>
              <b-nav class="d-block">
                <b-nav-item
                  v-track-click
                  v-for="(navItem, i) in $t('footer.products.navItems')"
                  :key="`${navItem + i}`"
                  :id="`footer-${navItem.split(' ').join('-')}`"
                  :to="
                    localePath({
                      name: 'products-slug',
                      params: {
                        slug: navItem.toLowerCase().split(' ').join('-')
                      }
                    })
                  "
                >
                  {{ navItem }}
                </b-nav-item>
                <b-nav-item
                  v-if="isUs"
                  v-track-click
                  href="https://www.dripcapital.com/en-us/resources/finance-guides/accounts-payable-financing"
                >
                  Payables Finance
                </b-nav-item>
              </b-nav>
            </div>
          </div>
          <div class="flex-1">
            <div class="widget">
              <h5 class="h5 text-capitalize">
                {{ $t('footer.explore.title') }}
              </h5>
              <b-nav class="d-block">
                <b-nav-item
                  v-if="!isUs"
                  v-track-click
                  id="footer-exporters"
                  :to="localePath('exporters')"
                >
                  {{ $t('footer.explore.exporters') }}
                </b-nav-item>

                <b-nav-item
                  v-track-click
                  v-if="!isMx"
                  id="footer-importers"
                  :to="localePath('importers')"
                >
                  {{ $t('footer.explore.importers') }}
                </b-nav-item>
                <b-nav-item
                  v-track-click
                  v-if="!isMx"
                  id="footer-investors"
                  :to="localePath('investors')"
                >
                  {{ $t('footer.explore.investors') }}
                </b-nav-item>
                <b-nav-item
                  v-track-click
                  id="footer-channel-partners"
                  :to="localePath('partners')"
                >
                  {{ $t('footer.explore.partner') }}
                </b-nav-item>
                <b-nav-item
                  v-if="!(isMx || isUs)"
                  v-track-click
                  id="footer-hsncode"
                  :href="$t('urls.links.hsncode')"
                >
                  {{ $t('footer.explore.hsncode') }}
                </b-nav-item>
                <b-nav-item
                  v-if="isUs"
                  v-track-click
                  id="footer-htscode"
                  :href="$t('urls.links.htsCode')"
                >
                  {{ $t('footer.explore.htsCode') }}
                </b-nav-item>
                <b-nav-item
                  v-if="isEn || isIn || isUs"
                  v-track-click
                  id="footer-finance-guides"
                  :href="$t('urls.links.financeGuides')"
                >
                  {{ $t('footer.explore.financeGuides') }}
                </b-nav-item>
                <b-nav-item
                  v-if="isEn || isIn || isUs || isMx"
                  v-track-click
                  id="footer-finance-guides"
                  :href="$t('urls.links.blog')"
                >
                  {{ $t('footer.explore.blog') }}
                </b-nav-item>
              </b-nav>
            </div>
          </div>
          <div class="flex-1">
            <div class="widget">
              <h5 class="h5 text-capitalize">{{ $t('footer.help.title') }}</h5>
              <b-nav class="d-block">
                <b-nav-item
                  v-track-click
                  id="footer-calculator"
                  :to="localePath('interest-calculator')"
                >
                  {{ $t('footer.help.interestCalculator') }}
                </b-nav-item>
              </b-nav>
            </div>
          </div>
          <div class="flex-1">
            <div class="widget">
              <h5 class="h5 text-capitalize">
                {{ $t('footer.company.title') }}
              </h5>
              <ul class="list-unstyled">
                <b-nav-item
                  v-track-click
                  id="footer-about"
                  :to="localePath('about')"
                >
                  {{ $t('footer.company.about') }}
                </b-nav-item>
                <b-nav-item
                  v-track-click
                  id="footer-contact"
                  :to="localePath('contact')"
                >
                  {{ $t('footer.company.contact') }}
                </b-nav-item>
                <b-nav-item
                  v-track-click
                  id="footer-leadership-team"
                  :to="localePath('leadership')"
                >
                  {{ $t('footer.company.leadershipTeam') }}
                </b-nav-item>
                <b-nav-item
                  v-track-click
                  id="footer-careers"
                  :href="$t('urls.careers')"
                >
                  {{ $t('footer.company.careers') }}
                </b-nav-item>
                <b-nav-item
                  v-if="!(isMx || isIn || isUs || isEn)"
                  v-track-click
                  id="footer-blog"
                  :href="$t('urls.links.resources')"
                >
                  {{ $t('footer.company.resources') }}
                </b-nav-item>
                <b-nav-item
                  v-if="isIn || isUs"
                  v-track-click
                  id="footer-newsroom"
                  :href="$t('urls.links.newsroom')"
                >
                  {{ $t('footer.company.newsroom') }}
                </b-nav-item>
                <b-nav-item
                  v-if="isIn"
                  v-track-click
                  id="footer-posh-guidelines"
                  :to="localePath('posh-guidelines')"
                >
                  {{ $t('footer.company.posh_guidelines') }}
                </b-nav-item>
              </ul>
            </div>
          </div>
          <div class="flex-1" v-if="isUs"></div>
        </div>
        <div class="d-flex justify-content-end align-items-center">
          <div class="res_img">
            <b-img-lazy
              alt="Logo"
              title="Drip"
              :src="require('~/static/images/drip-logo-white-tagline-e2e.svg')"
              class="img-fluid"
            />
          </div>
        </div>
      </div>
      <div class="flex-1 padding d-flex justify-content-between pt-4 flex-wrap">
        <div class="pt-2" v-if="isEn || isUs">
          <span class="badge badge-primary"> USA </span>
          <p>
            Drip Capital Inc.<br />
            1885 El Camino Real<br />
            Palo Alto, CA 94306<br />
            <a
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
            <a href="mailto:trade@dripcapital.com"
              ><u>trade@dripcapital.com</u></a
            >
          </p>
        </div>
        <div class="pt-2" v-if="isEn || isIn">
          <span class="badge badge-primary"> India </span>
          <p>
            Drip Capital Services India LLP<br />
            1221, 2nd Floor, Building 12 Solitaire Corporate Park,<br />
            Guru Hargovindji Rd, Chakala, Andheri East, Mumbai, Maharashtra
            400093<br />
            <a href="tel:+919987779334">+91-9987-779-334</a><br />
            <a href="mailto:cs@dripcapital.com"><u>cs@dripcapital.com</u></a>
          </p>
        </div>
        <div class="pt-2" v-if="isEn || isMx">
          <span class="badge badge-primary"> Mexico </span>
          <p>
            Drip Capital<br />
            Bradley 75, Anzures, Miguel Hidalgo,<br />
            11590 Ciudad de México, CDMX<br />
            <a href="tel:+525541611579">+52-55-4161-1579</a><br />
            <a href="mailto:contacto@dripcapital.com"
              ><u>contacto@dripcapital.com</u></a
            >
          </p>
        </div>
        <div class="pt-2 d-flex flex-wrap">
          <div class="d-flex flex-column justify-content-around">
            <div>
              <a
                href="https://fci.nl/en/home"
                target="_blank"
                v-track-click
                id="footer-fci"
              >
                <b-img-lazy
                  class="footer-image fci img-fluid"
                  alt="FCI"
                  :title="$t('footer.fciInfo')"
                  :src="require('~/static/images/fci-union-logo.svg')"
                />
              </a>
            </div>
            <div class="mt-2">
              <b-img-lazy
                class="footer-image ssl img-fluid"
                alt="SSL Secured"
                :title="$t('footer.sslInfo')"
                :src="require('~/static/images/ssl.svg')"
              />
            </div>
            <div class="mt-2">
              <!-- <b-img-lazy
                class="footer-image img-fluid"
                alt="ISO"
                :src="require('~/static/images/iso.png')"
              /> -->
            </div>
          </div>
          <div class="d-flex align-items-start ml-3" v-if="!isUs">
            <b-img-lazy
              v-if="!isMx"
              class="img-fluid"
              alt="Great Place to Work"
              :title="$t('footer.sslInfo')"
              :src="require('~/static/images/great-place-to-work.svg')"
            />
            <b-img-lazy
              v-else
              class="img-fluid"
              alt="Employers For Youth"
              :title="$t('footer.sslInfo')"
              :src="require('~/static/images/EFY.svg')"
            />
          </div>
        </div>
      </div>
      <div class="padding pb-0">
        <div class="d-flex justify-content-between flex-wrap">
          <div class="custom-width">
            <p class="custom-copyright-text mb-2">
              &copy; {{ currentYear }} {{ $t('us.company') }}
              {{ $t('us.country') }}
            </p>
            <b-nav class="list-inline footer-privacy-menu mb-0">
              <b-nav-item
                v-track-click
                id="footer-terms"
                class="list-inline-item"
                :to="localePath('terms-of-use')"
              >
                {{ $t('footer.copyright.terms') }}
              </b-nav-item>
              <b-nav-item
                v-track-click
                id="footer-privacy"
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
                  id="footer-opt-out"
                  class="list-inline-item"
                  :href="$t('footer.copyright.optOut.link')"
                  target="_blank"
                >
                  {{ $t('footer.copyright.optOutAIRoboCalls.title') }}
                </b-nav-item>
              </div>
            </b-nav>
          </div>
          <div
            class="d-flex align-items-center mt-2 mt-lg-0"
            v-if="!isProductPage"
          >
            <span class="country-selector">
              <country-selector :isNewBranding="isNewBranding" />
            </span>
          </div>
        </div>
      </div>
      <div class="padding d-flex justify-content-lg-end mt-2 mt-md-0 flex-wrap">
        <a
          href="https://www.facebook.com/dripcapital"
          target="_blank"
          v-track-click
          id="footer-fci"
        >
          <b-img-lazy
            class="footer-social-image img-fluid ml-0"
            alt="Facebook"
            :src="require('~/static/images/fb.png')"
          />
        </a>
        <a
          href="https://twitter.com/dripcapital_inc"
          target="_blank"
          v-track-click
          id="footer-fci"
        >
          <b-img-lazy
            class="footer-social-image img-fluid"
            alt="Twitter"
            :src="require('~/static/images/twitter.png')"
          />
        </a>
        <a
          href="https://www.linkedin.com/company/dripcapital"
          target="_blank"
          v-track-click
          id="footer-fci"
        >
          <b-img-lazy
            class="footer-social-image img-fluid mr-0"
            alt="FCI"
            :src="require('~/static/images/linkedinr.png')"
          />
        </a>
      </div>
      <br />
      <!-- <cookie /> -->
    </div>
  </footer>
</template>
<script>
import CountrySelector from '~/components/footer/CountrySelector'
// import Cookie from '~/components/Cookie'

export default {
  computed: {
    currentYear() {
      const now = new Date()
      return now.getFullYear()
    },
    isLanding() {
      return this.footerType === 'landing'
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
  },
  methods: {
    isActive(index) {
      return this.$i18n.locale === index
    }
  },
  components: {
    CountrySelector
    // Cookie
  },
  props: {
    footerType: {
      type: String,
      default: 'default'
    },
    page: {
      type: String
    },
    isProductPage: {
      type: Boolean,
      default: false
    },
    isNewBranding: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/_variables.scss';
@import '~bootstrap/scss/mixins';

.hidden-print {
  border-bottom: 4px solid $primary;
}

.hidden-print,
.padding {
  padding: 0 6rem 1rem !important;
}
.flex-1 {
  flex: 1;
  padding-right: 10px;
  margin-top: 10px;
}

.flex-2 {
  flex: 2;
}

.h5 {
  font-size: 1.125rem !important;
}

.badge {
  padding: 6px 15px 5px 15px;
}

.custom-copyright-text {
  margin-bottom: 0;
}
.country-selector {
  display: inline-block;
}

.custom-width {
  width: auto;
}

@include media-breakpoint-down(sm) {
  .res_img {
    display: none !important;
  }
}

@include media-breakpoint-down(md) {
  .hidden-print,
  .padding {
    padding: 0 0 1rem 0 !important;
  }
  .custom-width {
    width: 100%;
  }
}
</style>
