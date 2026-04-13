<template>
  <section class="index-container tradex-container">
    <landing-header
      :hide-phone="true"
      :hide-cta="true"
      defaultLightHeader
      isLandingPage
    />
    <main-hero page="tradex" />
    <simple-information :leftSideImage="true" page="tradex" />
    <feature-card page="tradex" />
    <landing-page-footer />
  </section>
</template>

<script>
import LandingHeader from '~/components/LandingHeader'
import MainHero from '~/components/common/ImpoExpo/MainHero'
import SimpleInformation from '~/components/common/Landing/SimpleInformation'
import FeatureCard from '~/components/common/Landing/FeatureCard'
import LandingPageFooter from '~/components/common/Landing/LandingPageFooter'

export default {
  nuxtI18n: false,
  components: {
    LandingHeader,
    MainHero,
    LandingPageFooter,
    SimpleInformation,
    FeatureCard
  },
  data() {
    return {
      title: this.$t('pages.importers.title'),
      description: this.$t('pages.importers.description')
    }
  },
  computed: {
    canonicalTag() {
      return process.env.DRIP_WEB_HOST + this.$route.path
    }
  },
  head() {
    return {
      needLineBreak: true,
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.description }
      ],
      link: [{ rel: 'canonical', href: this.canonicalTag }]
    }
  }
}
</script>
