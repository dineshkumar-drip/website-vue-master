<template>
  <page-section section-class="page-pitch-calculator">
    <main-header :defaultLightHeader="true" />
    <working-capital-calc />
    <div class="spacing-32"></div>
    <div class="spacing-32"></div>
    <div class="spacing-32"></div>
    <us-footer />
  </page-section>
</template>

<script>
import PageSection from '~/components/PageSection'
import MainHeader from '~/components/MainHeader'
import UsFooter from '~/components/importers/UsFooter'
import WorkingCapitalCalc from '~/components/WorkingCapitalCalc'

export default {
  nuxtI18n: {
    paths: {
      en: '/working-capital-calculator',
      'en-in': '/working-capital-calculator',
      'en-us': '/working-capital-calculator'
    }
  },
  head() {
    return {
      needLineBreak: true,
      title: 'Working Capital Calculator',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Calculate your company's working capital instantly with our easy-to-use Working Capital Calculator."
        }
      ]
    }
  },
  data() {
    return {
      title: this.$t('pages.pitchCalculator.title'),
      description: this.$t('pages.pitchCalculator.description')
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
          href: 'https://www.dripcapital.com/en-in//working-capital-calculator',
          hreflang: 'en-in'
        },
        {
          hid: `alternate-hreflang-en-us`,
          rel: 'alternate',
          href: 'https://www.dripcapital.com/en-us//working-capital-calculator',
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
    UsFooter,
    WorkingCapitalCalc
  }
}
</script>
