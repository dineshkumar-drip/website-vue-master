<template>
  <section class="impo-expo buyer-finance-landing-container">
    <landing-header :hide-phone="true" :hide-cta="true" />
    <main-hero :isBuyerFinance="true" />
    <advantage :isBuyerFinance="true" page="landing.buyerFinance" />
    <capital :isBuyerFinance="true" />
    <landing-conclusion cta-link="#page-jumbotron" :isBuyerFinance="true" />
    <landing-stats :isBuyerFinance="true" />
    <news :isCampaign="true" />
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
  data() {
    return {
      loaded: false,
      title: this.$t('pages.landing.buyerFinance.title'),
      description: this.$t('pages.landing.buyerFinance.description')
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
