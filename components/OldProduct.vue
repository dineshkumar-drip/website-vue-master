<template>
  <page-section section-class="section-products-main">
    <main-header />
    <main-jumbotron :class="isIn ? '' : 'es'" class="full-height">
      <template slot="content">
        <b-container>
          <b-row>
            <b-col cols="12" xl="7" sm="10">
              <h1 class="display-3">
                <vue-typer
                  id="typewriter"
                  @typed="onTyped"
                  @erased="onErased"
                  :text="$t('pages.home.jumbotron.titles')"
                  erase-style="backspace"
                  :erase-delay="30"
                  :pre-erase-delay="9000"
                  @typed-char="onTypedChar"
                />
                <span class="slash blink text-primary"></span>
              </h1>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12" xl="5" sm="9">
              <div class="j-desc">
                <div
                  v-if="$t('pages.home.jumbotron.content.t1') === stringTyped"
                  data-aos="fade-right"
                  :class="{ 'animate-left': isErased }"
                >
                  <p class="lead">
                    {{ $t('pages.home.jumbotron.content.d1') }}
                  </p>
                </div>
                <div
                  v-if="$t('pages.home.jumbotron.content.t2') === stringTyped"
                  data-aos="fade-right"
                  :class="{ 'animate-left': isErased }"
                >
                  <p class="lead">
                    {{ $t('pages.home.jumbotron.content.d2') }}
                  </p>
                </div>
                <div
                  v-if="$t('pages.home.jumbotron.content.t3') === stringTyped"
                  data-aos="fade-right"
                  :class="{ 'animate-left': isErased }"
                >
                  <ul class="main-hero-list">
                    <li
                      v-for="(desc, index) in $t(
                        'pages.home.jumbotron.content.d3'
                      )"
                      :key="index"
                      class="desc lead"
                    >
                      {{ desc }}
                    </li>
                  </ul>
                </div>
              </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12" xl="7" sm="9">
              <b-link
                v-track-click
                id="product-jumbotron-cta"
                :to="localePath('exporters-apply')"
                class="btn btn-primary btn-lg"
                >{{ $t('pages.home.jumbotron.checkEligibility') }}</b-link
              >
            </b-col>
          </b-row>
        </b-container>
      </template>
    </main-jumbotron>
    <video-intro :keyword="keyword" />
    <how-it-works :keyword="keyword" />
    <benefits :keyword="keyword" />
    <get-in-touch />
    <main-footer isProductPage />
  </page-section>
</template>
<script>
import PageSection from '~/components/PageSection'
import MainHeader from '~/components/MainHeader'
import MainJumbotron from '~/components/MainJumbotron'
import VideoIntro from '~/components/products/VideoIntro'
import HowItWorks from '~/components/products/HowItWorks'
import Benefits from '~/components/products/Benefits'
import GetInTouch from '~/components/products/GetInTouch'
import MainFooter from '~/components/footer/MainFooter'
import typerHelper from '~/modules/typer-helper'
export default {
  data() {
    return {
      isErased: false,
      stringTyped: '',
      countWord: 0
    }
  },
  computed: {
    isIn() {
      return this.$i18n.locale === 'en-in'
    }
  },
  props: ['keyword'],
  methods: {
    onTyped(typedString) {
      this.isErased = false
      this.stringTyped = typedString
    },
    onErased() {
      this.isErased = true
      setTimeout(() => {
        this.stringTyped = ''
      }, 1000)
    },
    onTypedChar(typedChar, typedCharIndex) {
      typerHelper(typedChar, typedCharIndex, this)
    }
  },
  components: {
    PageSection,
    MainHeader,
    MainJumbotron,
    HowItWorks,
    VideoIntro,
    Benefits,
    GetInTouch,
    MainFooter
  }
}
</script>
<style lang="scss" scoped>
.full-height {
  height: 100vh;
}
</style>
