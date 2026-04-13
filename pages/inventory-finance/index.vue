<template>
  <section class="impo-expo exporters-container" v-if="$i18n.locale">
    <landing-header
      :hide-phone="true"
      :hide-cta="true"
      :isLandingPage="isLandingPage"
      page="inventoryFinance"
    />
    <main-hero-update page="inventoryFinance" />
    <template>
      <new-facts class="mt-5 mt-lg-9" page="inventoryFinance" />
      <Capital class="mt-5 mt-lg-9" :isLandingPage="isLandingPage" />
      <news class="mt-5 mt-lg-9" page="landingPage" :isLandingPage="true" />
      <investors page="newLanding" :isLandingPage="true" />
      <buyer-contact-form :changeTitle="true" :isLandingPage="true" />
      <landing-awards :isLandingPage="true" />
      <landing-footer-new />
    </template>
  </section>
</template>

<script>
import MainHeader from '~/components/common/ImpoExpo/MainHeader'
import LandingHeader from '~/components/landing/2021/LandingHeader'
import Solution from '~/components/common/ImpoExpo/Solution'
import MainFooter from '~/components/footer/MainFooter'
import Advantage from '~/components/common/ImpoExpo/Advantage'
import Capital from '~/components/common/ImpoExpo/Capital'
import InvoiceProcess from '~/components/common/ImpoExpo/InvoiceProcess'
import News from '~/components/common/ImpoExpo/News'
import Leaders from '~/components/common/ImpoExpo/Leaders'
import Growth from '~/components/common/ImpoExpo/Growth'
import Conclusion from '~/components/common/ImpoExpo/Conclusion'
import UsAwards from '~/components/importers/2021/Awards'
import WhatCustomerSay from '~/components/importers/2021/WhatCustomerSay'
import BuyerContactForm from '~/components/importers/2021/BuyerContactForm'
import UsFooter from '~/components/importers/UsFooter'
import Investors from '~/components/about/2021/Investors'
import MainHero from '~/components/landing/2021/MainHero.vue'
import MainHeroUpdate from '~/components/landing/2021/MainHeroUpdate.vue'
import QuickFacts from '~/components/products/QuickFacts'
import NewFacts from '../../components/products/NewFacts.vue'
import LandingAwards from '~/components/landing/LandingAwards.vue'
import LandingFooterNew from '../../components/landing/2021/LandingFooterNew.vue'

export default {
  data() {
    return {
      isLandingPage: true
    }
  },
  components: {
    MainHeader,
    MainFooter,
    Solution,
    Advantage,
    Capital,
    News,
    Leaders,
    Growth,
    SuccessStories: () => import('~/components/common/ImpoExpo/SuccessStories'),
    Conclusion,
    WhatCustomerSay,
    BuyerContactForm,
    UsAwards,
    UsFooter,
    LandingHeader,
    Investors,
    MainHero,
    MainHeroUpdate,
    QuickFacts,
    NewFacts,
    InvoiceProcess,
    LandingAwards,
    LandingFooterNew
  },
  computed: {
    isUs() {
      return this.$i18n.locale.indexOf('us') > -1
    },
    isOthers() {
      return this.$i18n.locale.indexOf('us') == -1
    },
    isEn() {
      return this.$i18n.locale.indexOf('en') > -1
    }
  },
  mounted() {
    this.$cookies.set('ignoreLocaleModal', true)
  }
}
</script>

<style>
.whatsapp-connect-container {
  display: none !important;
}
</style>
