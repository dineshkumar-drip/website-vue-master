<template>
  <page-section section-class="page-terms-of-use">
    <main-header :defaultLightHeader="true" />
    <terms />
    <main-footer />
  </page-section>
</template>

<script>
import MainHeader from '~/components/MainHeader'
import MainFooter from '~/components/footer/MainFooter'
import PageSection from '~/components/PageSection'
import Terms from '~/components/Terms'

export default {
  nuxtI18n: {
    paths: {
      en: '/terms-of-use',
      es: '/terminos-de-uso'
    }
  },
  data() {
    return {
      title: this.$t('pages.terms.title'),
      description: this.$t('pages.terms.description')
    }
  },
  computed: {
    hreflangs() {
      return [
        {
          hid: `alternate-hreflang-en`,
          rel: 'alternate',
          href: 'https://www.dripcapital.com/terms-of-use',
          hreflang: 'en'
        },
        {
          hid: `alternate-hreflang-en-in`,
          rel: 'alternate',
          href: 'https://www.dripcapital.com/en-in/terms-of-use',
          hreflang: 'en-in'
        },
        {
          hid: `alternate-hreflang-en-us`,
          rel: 'alternate',
          href: 'https://www.dripcapital.com/en-us/terms-of-use',
          hreflang: 'en-us'
        },
        {
          hid: `alternate-hreflang-en-mx`,
          rel: 'alternate',
          href: 'https://www.dripcapital.com/es-mx/terms-of-use',
          hreflang: 'es-mx'
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
      links: [...this.hreflangs]
    }
  },
  components: {
    PageSection,
    MainHeader,
    MainFooter,
    Terms
  }
}
</script>
