<template>
  <page-section section-class="section-products-main">
    <main-header :default-light-header="true" :hide-cta="true" />
    <jumbotron page="channelPartner" />
    <faqs v-if="isIn" />
    <related-pages v-if="isIn" />
    <main-footer />
  </page-section>
</template>
<script>
import PageSection from '~/components/PageSection'
import MainHeader from '~/components/MainHeader'
import Jumbotron from '~/components/thankYou/Jumbotron'
import Faqs from '~/components/thankYou/FAQs'
import RelatedPages from '~/components/thankYou/RelatedPosts'
import MainFooter from '~/components/footer/MainFooter'

export default {
  nuxtI18n: {
    paths: {
      'en-ae': '/partners/thank-you',
      'en-mx': '/partners/thank-you',
      'en-in': '/partners/thank-you',
      'en-us': '/partners/thank-you',
      en: '/partners/thank-you',
      'es-mx': '/socios/gracias'
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
  computed: {
    isIn() {
      return this.$i18n.locale.indexOf('in') > -1 || this.$i18n.locale === 'en'
    }
  },
  components: {
    PageSection,
    MainHeader,
    Jumbotron,
    RelatedPages,
    Faqs,
    MainFooter
  }
}
</script>
