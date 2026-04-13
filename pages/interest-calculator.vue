<template>
  <page-section section-class="page-interest-calculator">
    <main-header :defaultLightHeader="true" />
    <interest-calc />
    <main-footer />
  </page-section>
</template>

<script>
import PageSection from '~/components/PageSection'
import MainHeader from '~/components/MainHeader'
import MainFooter from '~/components/footer/MainFooter'
import InterestCalc from '~/components/InterestCalc'

export default {
  nuxtI18n: {
    paths: {
      en: '/interest-calculator',
      es: '/calculadora-de-tasas-de-interes'
    }
  },
  data() {
    return {
      title: this.$t('pages.interestCalculator.title'),
      description: this.$t('pages.interestCalculator.description')
    }
  },
  computed: {
    canonicalTag() {
      return process.env.DRIP_WEB_HOST + this.$route.path
    },
    hreflangs() {
      return [
        {
          hid: `alternate-hreflang-en-in`,
          rel: 'alternate',
          href: 'https://www.dripcapital.com/en-in/interest-calculator',
          hreflang: 'en-in'
        },
        {
          hid: `alternate-hreflang-en-us`,
          rel: 'alternate',
          href: 'https://www.dripcapital.com/en-us/interest-calculator',
          hreflang: 'en-us'
        }
      ]
    }
  },
  head() {
    return {
      needLineBreak: true,
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.description }
      ],
      link: [...this.hreflangs, { rel: 'canonical', href: this.canonicalTag }]
    }
  },
  components: {
    PageSection,
    MainHeader,
    MainFooter,
    InterestCalc
  }
}
</script>
