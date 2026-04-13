<template>
  <section class="impo-expo trade-finance-landing-container">
    <landing-header :hide-phone="true" :hide-cta="true" />
    <main-hero />
    <advantage
      class="mt-5 mt-lg-8"
      :isCampaign="true"
      page="landing.tradeFinance"
    />
    <capital class="mt-8 mt-lg-9" :isCampaign="true" />
    <landing-stats class="mt-5 mt-lg-8" />
    <landing-conclusion cta-link="#page-jumbotron" />
    <news class="mt-8 mt-lg-9" :isCampaign="true" />
    <landing-footer :isNewBranding="true" />
  </section>
</template>

<script>
import MainHero from '~/components/landing/2021/MainHero'
import LandingHeader from '~/components/landing/2021/LandingHeader'
import LandingFooter from '~/components/landing/2021/LandingFooter'
import LandingStats from '~/components/landing/2021/LandingStats'
import LandingConclusion from '~/components/landing/2021/LandingConclusion'
import Advantage from '~/components/common/ImpoExpo/Advantage'
import Capital from '~/components/common/ImpoExpo/Capital'
import News from '~/components/common/ImpoExpo/News'

export default {
  nuxtI18n: {
    paths: {
      en: '/landing/trade-finance',
      'en-in': '/landing/trade-finance',
      'en-us': '/landing/trade-finance',
      'es-mx': '/landing/financiamiento-a-proveedores',
      'en-mx': '/landing/supplier-finance',
      'en-ae': '/landing/trade-finance',
      'es-ec': '/landing/financiamiento-de-exportación',
      'en-ec': '/landing/exporter-finance'
    }
  },
  head() {
    return {
      title: this.$t('pages.landing.tradeFinance.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('pages.landing.tradeFinance.description')
        }
      ]
    }
  },
  components: {
    LandingHeader,
    MainHero,
    LandingStats,
    LandingConclusion,
    Advantage,
    Capital,
    News,
    LandingFooter
  }
}
</script>
