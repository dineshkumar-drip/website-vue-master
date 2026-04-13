<template>
  <page-section section-class="section-products-main" v-if="post">
    <main-header
      :isProductPage="true"
      :isNewNavbar="true"
      :isMxDomestic="isMxDomestic"
    />
    <main-jumbotron
      :class="[
        isMx ? (isMxDomestic ? 'es domestic' : 'es') : '',
        isUs ? 'us' : ''
      ]"
      class="d-flex align-items-lg-center"
      :style="
        post.jumbotronImage
          ? `background-image: url(${post.jumbotronImage})`
          : undefined
      "
    >
      <template slot="content">
        <b-container>
          <b-row>
            <b-col :cols="12" :lg="8" :xl="6">
              <h1 class="jumbotron-mainheading mt-0">
                {{ post.mainHeading }}
              </h1>
              <h3 class="jumbotron-subheading">
                {{ post.subHeading }}
              </h3>
            </b-col>
          </b-row>
          <b-row> </b-row>
          <b-row>
            <b-col :cols="12">
              <button-arrow
                v-track-click
                id="product-jumbotron-cta"
                variant="secondary"
                @click.native="scrollToAnchor('conclusion')"
              >
                {{ $t('pages.home.jumbotron.applyNow') }}
              </button-arrow>
            </b-col>
            <b-col :cols="12" class="img-wrapper">
              <b-img
                :src="
                  post.jumbotronImage || isUs
                    ? require('~/assets/images/product/product-us-jumbotron-background.jpg')
                    : require('~/assets/images/product/product-jumbotron-background.png')
                "
                class="img-fluid"
              />
            </b-col>
          </b-row>
        </b-container>
      </template>
    </main-jumbotron>
    <div v-if="isNavSticky">
      <b-row
        :class="[
          'justify-content-md-center m-0',
          isNavSticky ? 'sticky-wrapper' : 'fixed-wrapper'
        ]"
      >
        <b-col class="d-lg-block d-none" :lg="8">
          <b-nav
            :class="[isNavSticky ? 'sticky-nav' : 'fixed-nav']"
            id="product-nav"
            fill
          >
            <li
              class="nav-item"
              v-for="(item, i) in $t('pages.products.navTabs')"
              :id="`${navAnchors[i]}-anchor`"
              :key="item.title"
            >
              <a
                class="nav-link"
                v-smooth-scroll="{ duration: 1000, offset: -150 }"
                @click="scrollToAnchor(navAnchors[i])"
              >
                {{ item.title }}
              </a>
            </li>
          </b-nav>
        </b-col>
      </b-row>
    </div>
    <b-container id="overview" class="product-content">
      <b-row v-if="!isNavSticky" :class="['justify-content-md-center']">
        <b-col class="d-lg-block d-none" :lg="12">
          <b-nav class="fixed-nav" id="product-nav" fill>
            <li
              class="nav-item"
              v-for="(item, i) in $t('pages.products.navTabs')"
              :id="`${navAnchors[i]}-anchor`"
              :key="item.title"
            >
              <a
                class="nav-link"
                v-smooth-scroll="{ duration: 2000, offset: -200 }"
                @click="scrollToAnchor(navAnchors[i])"
              >
                {{ item.title }}
              </a>
            </li>
          </b-nav>
        </b-col>
      </b-row>
      <b-row class="justify-content-md-center question-container">
        <b-col>
          <div>
            <question-card
              :productQuestions="post.productDetails.productQuestions"
              :imageUrl="post.productDetails.imageUrl"
            />
            <advantages
              :keyword="post.advantageTitle"
              :advantages="
                ['trade-finance', 'supply-chain-finance'].includes(post.slug)
                  ? post.productAdvantagesJson
                  : post.productAdvantages
              "
            />
          </div>
        </b-col>
      </b-row>
    </b-container>
    <export-process
      :productName="post.productName"
      :product="post.howProductWorks"
      id="how-it-works"
    />
    <div id="why-drip-capital">
      <benefits-product-page
        :isMxDomestic="isMxDomestic"
        :product="post.whyChooseDripCapital"
      />
      <div class="pb-5">
        <html-content :data="post.extraContent" v-if="post.extraContent" />
      </div>
      <div class="product-banner">
        <b-container>
          <b-row>
            <b-col class="text-center text-lg-left" :cols="12" :lg="8">
              <div class="h1">{{ banner }}</div>
            </b-col>
            <b-col
              :cols="12"
              :lg="4"
              class="d-flex flex-column flex-lg-row align-items-center justify-content-end"
            >
              <button-arrow
                class="btn-lg"
                v-track-click
                id="product-banner-cta"
                variant="secondary"
                @click.native="scrollToAnchor('conclusion')"
              >
                {{ $t('pages.products.banner.applyCTA') }}
              </button-arrow>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <div class="mt-6">
        <quick-facts />
      </div>
      <our-partners class="mt-6" v-if="!isUs" />
      <section class="our-investors" v-else>
        <b-container>
          <b-row>
            <b-col>
              <h3 class="about-section-title text-center text-lg-left">
                {{ $t('pages.products.investors.title') }}
              </h3>
            </b-col>
          </b-row>
          <b-row>
            <b-col
              v-for="(item, index) in $t('pages.products.investors.items')"
              :key="index"
              :cols="12"
              :lg="3"
            >
              <div
                class="investor-card d-flex justify-content-center align-items-center mt-5 mt-lg-0"
              >
                <b-img-lazy
                  :src="require(`~/assets/images/about/${item}.png`)"
                  :alt="item"
                  class="w-75"
                />
              </div>
            </b-col>
          </b-row>
        </b-container>
      </section>
    </div>
    <div id="growth-stories">
      <growth-stories
        class="mt-6"
        :isMx="isMx"
        :stories="post.growthStories.data"
        page="products"
      />
      <news class="mt-6" is-product />
    </div>
    <div id="faqs">
      <faqs
        class="mt-6"
        :faqs="post.productFaqs.data"
        :faqSchema="post.faqSchema"
        page="products"
      />
      <export-resources
        class="mt-6"
        :resources="post.exportFinanceResources.efData"
        :title="post.productResources"
      />
      <div id="conclusion">
        <conclusion
          :class="!isUs ? 'mt-lg-9' : 'mt-lg-10'"
          :title="post.mainHeading"
          :isMxDomestic="isMxDomestic"
        />
      </div>
    </div>
    <main-footer class="mt-lg-10" :isProductPage="true" :isNewBranding="true" />
  </page-section>
</template>
<script>
import PageSection from '~/components/PageSection'
import MainHeader from '~/components/MainHeader'
import MainJumbotron from '~/components/MainJumbotron'
import QuestionCard from '~/components/products/QuestionCard'
import Advantages from '~/components/products/Advantages'
import ExportProcess from '~/components/products/ExportProcess'
import BenefitsProductPage from '~/components/products/BenefitsProductPage'
import QuickFacts from '~/components/products/QuickFacts'
import OurPartners from '~/components/products/OurPartners'
import GrowthStories from '~/components/products/GrowthStories'
import Faqs from '~/components/products/Faqs'
import ExportResources from '~/components/products/ExportResources'
import Conclusion from '~/components/products/Conclusion'
import MainFooter from '~/components/footer/MainFooter'
import ButtonArrow from '~/components/products/ButtonArrow'
import HtmlContent from '~/components/products/Html'
import News from '~/components/common/ImpoExpo/News'

export default {
  data() {
    return {
      isErased: false,
      stringTyped: '',
      countWord: 0,
      isNavSticky: null,
      navData: [],
      navAnchors: [
        'overview',
        'how-it-works',
        'why-drip-capital',
        'growth-stories',
        'faqs'
      ],
      locale: this.$i18n.locale,
      last: -1
    }
  },
  mounted() {
    window.addEventListener('scroll', this.navFunction)
    this.getSectionArea()
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.navFunction)
  },
  computed: {
    isIn() {
      return this.$i18n.locale === 'en-in'
    },
    isMx() {
      return this.$i18n.locale === 'es-mx'
    },
    isMxDomestic() {
      return !!this.post.isDomestic
    },
    isUs() {
      return this.$i18n.locale.indexOf('us') > -1
    },
    banner() {
      return this.post.banner
        ? this.post.banner
        : this.$t('pages.products.banner.title')
    }
  },
  props: ['keyword', 'post'],
  methods: {
    getSectionArea() {
      for (let i = 0; i < this.navAnchors.length; i++) {
        const elem = document.getElementById(this.navAnchors[i])
        if (elem) {
          const top = elem.offsetTop - 220
          const bottom = elem.offsetTop + elem.offsetHeight - 220
          const item = {
            anchor: this.navAnchors[i],
            top,
            bottom
          }
          this.navData.push(item)
        }
      }
    },
    scrollToAnchor(anchorId) {
      const elem = document.getElementById(anchorId)
      if (elem) {
        const width = window.innerWidth
        const offset = width > 991 ? 300 : -250
        window.scrollTo({
          top: elem.offsetTop - (anchorId !== 'conclusion' ? 150 : offset),
          behavior: 'smooth'
        })
      }
    },
    applyNow() {
      const path = this.isUs ? 'importers-apply' : 'exporters-apply'
      if (this.isMxDomestic) {
        window.location.href = this.$t('urls.cuenta')
      } else {
        this.$router.push(this.localePath(path))
      }
    },
    binarySearch(scrollY, start, end) {
      if (start <= end && start !== 5) {
        const mid = Math.floor((start + end) / 2)
        if (scrollY < this.navData[mid].top) {
          return this.binarySearch(scrollY, start, mid - 1)
        } else if (scrollY > this.navData[mid].bottom) {
          return this.binarySearch(scrollY, mid + 1, end)
        } else if (
          scrollY >= this.navData[mid].top &&
          scrollY <= this.navData[mid].bottom
        ) {
          if (mid === this.last) {
            if (document.getElementById(`${this.navAnchors[mid]}-anchor`)) {
              document
                .getElementById(`${this.navAnchors[mid]}-anchor`)
                .classList.add('active')
            }
          } else {
            if (
              this.last !== -1 &&
              document.getElementById(`${this.navAnchors[this.last]}-anchor`)
            ) {
              document
                .getElementById(`${this.navAnchors[this.last]}-anchor`)
                .classList.remove('active')
            }
            this.last = mid
          }
        }
      }
    },
    calculateNavs() {
      for (let i = 0; i < this.navAnchors.length; i++) {
        const elem = document.getElementById(this.navAnchors[i])
        const elementAnchor = document.getElementById(
          `${this.navAnchors[i]}-anchor`
        )
        if (elem && elementAnchor) {
          let top = elem.offsetTop - 200
          let bottom = elem.offsetHeight + top
          this.navData.push({
            anchor: `${this.navAnchors[i]}-anchor`,
            bottom,
            top
          })
        }
      }
    },
    navFunction() {
      if (window.scrollY >= window.innerHeight - 430) {
        this.isNavSticky = true
        this.binarySearch(window.scrollY, 0, 5)
      } else {
        this.isNavSticky = false
      }
    }
  },
  components: {
    PageSection,
    MainHeader,
    MainJumbotron,
    Advantages,
    QuestionCard,
    ExportProcess,
    QuickFacts,
    OurPartners,
    GrowthStories,
    BenefitsProductPage,
    Faqs,
    ExportResources,
    Conclusion,
    News,
    MainFooter,
    ButtonArrow,
    HtmlContent
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables';
@import '~bootstrap/scss/mixins';

.product-content {
  color: $secondary;
  position: relative;
}
.our-investors {
  background-color: $product-light-blue-background;
}
.mt-6 {
  margin-top: 6rem;
}
.img-wrapper {
  display: none;
}

@include media-breakpoint-down(md) {
  .img-wrapper {
    display: flex;
    justify-content: center;
    img {
      width: 75%;
      margin-top: 2em;
    }
  }
}
</style>
