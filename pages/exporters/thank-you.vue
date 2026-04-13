<template>
  <page-section
    section-class="impo-expo section-products-main section-exporters-thank-you"
  >
    <main-header />
    <jumbotron-container class="align-items-center">
      <template slot="content">
        <b-row align-h="center">
          <b-col :cols="12" :lg="8">
            <h1 class="mt-5 heading text-center mb-4">
              <span>{{ $t('pages.landing.tradeFinance.thankYou.title') }}</span>
            </h1>
            <h3
              class="mt-0 text-center"
              v-html="$t('pages.landing.tradeFinance.thankYou.message')"
            ></h3>
          </b-col>
        </b-row>
      </template>
    </jumbotron-container>
    <landing-footer :isNewBranding="true" />
  </page-section>
</template>

<script>
import InvestorJumbotron from '~/components/investors/InvestorJumbotron'
import JumbotronContainer from '~/components/JumbotronContainer'
import PageSection from '~/components/PageSection'
import MainHeader from '~/components/common/ImpoExpo/MainHeader'
import MainHero from '~/components/common/ImpoExpo/MainHero'
import LandingFooter from '~/components/landing/2021/LandingFooter'
import InvestorsFooter from '~/components/investors/2021/InvestorsFooter'

export default {
  nuxtI18n: {
    paths: {
      'en-ae': '/exporters/thank-you',
      'en-mx': '/suppliers/thank-you',
      'en-in': '/exporters/thank-you',
      'en-us': '/exporters/thank-you',
      en: '/exporters/thank-you',
      'es-mx': '/proveedores/gracias'
    }
  },
  data() {
    return {
      title: this.$t('pages.thankYou.title'),
      description: this.$t('pages.thankYou.description')
    }
  },
  head() {
    return {
      needLineBreak: true,
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.description }
      ]
    }
  },
  components: {
    LandingFooter,
    MainHeader,
    MainHero,
    InvestorJumbotron,
    InvestorsFooter,
    JumbotronContainer,
    PageSection
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables';
@import '~bootstrap/scss/mixins';
.section-exporters-thank-you {
  background-color: $bg-light-gray;
  padding-top: 5rem;
  .jumbotron {
    background-color: transparent;
    background-position: bottom right;
    min-height: 77vh;
    padding-left: 1rem;
    padding-right: 1rem;
    background-image: none;
    .heading {
      color: $dark-blue;
      font-size: 2rem;
    }
  }
  h3 {
    font-size: 1.25rem;
    font-weight: 500;
  }
  .numbers-box {
    position: absolute;
    width: 100%;
    top: -2rem;
    left: 0;
    right: 0;
  }
  .heading-color {
    color: $dark-blue;
    font-size: 1.75rem;
  }
}
</style>
