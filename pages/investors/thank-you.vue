<template>
  <page-section
    section-class="impo-expo section-products-main section-investors-thank-you"
  >
    <main-header />
    <jumbotron-container class="align-items-center">
      <template slot="content">
        <b-row align-h="center">
          <b-col :cols="12" :lg="8">
            <h1 class="mt-5 heading text-center mb-4">
              <span>{{
                $t('pages.investors.growth.contact.success.title')
              }}</span>
            </h1>
            <h3
              class="mt-0 text-center"
              v-html="$t('pages.investors.growth.contact.success.description')"
            ></h3>
          </b-col>
        </b-row>
      </template>
    </jumbotron-container>
    <!-- <get-in-touch /> -->
    <investors-footer />
    <main-footer :isNewBranding="true" />
  </page-section>
</template>

<script>
import InvestorJumbotron from '~/components/investors/InvestorJumbotron'
import JumbotronContainer from '~/components/JumbotronContainer'
import PageSection from '~/components/PageSection'

import MainHeader from '~/components/common/ImpoExpo/MainHeader'
import MainHero from '~/components/common/ImpoExpo/MainHero'
import MainFooter from '~/components/footer/MainFooter'
import GetInTouch from '~/components/investors/2021/GetInTouch'
import InvestorsFooter from '~/components/investors/2021/InvestorsFooter'

export default {
  nuxtI18n: {
    paths: {
      'en-in': '/investors/thank-you',
      'en-us': '/investors/thank-you',
      en: '/investors/thank-you',
      'es-mx': '/inversionistas/gracias'
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
    MainFooter,
    MainHeader,
    MainHero,
    InvestorJumbotron,
    InvestorsFooter,
    JumbotronContainer,
    PageSection,
    GetInTouch
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/scss/variables';
@import '~bootstrap/scss/mixins';
.section-investors-thank-you {
  background-color: $bg-light-gray;
  padding-top: 5rem;
  .jumbotron {
    background-color: transparent;
    background-position: bottom right;
    min-height: 40vh;
    padding-left: 1rem;
    padding-right: 1rem;
    background-image: none;
    .heading {
      color: $dark-blue;
      font-size: 2rem;
    }
    h3 {
      font-size: 1.25rem;
      font-weight: 500;
    }
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
