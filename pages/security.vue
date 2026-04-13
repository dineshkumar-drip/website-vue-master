<template>
  <page-section section-class="page-privacy-policy">
    <main-header :defaultLightHeader="true" />
    <privacy />
    <main-footer />
  </page-section>
</template>

<script>
import MainHeader from '~/components/MainHeader'
import MainFooter from '~/components/footer/MainFooter'
import PageSection from '~/components/PageSection'
import Privacy from '~/components/privacyPolicy/Privacy'

export default {
  nuxtI18n: {
    paths: {
      en: '/security'
    }
  },
  data() {
    return {
      title: this.$t('pages.privacy.title'),
      description: this.$t('pages.privacy.description')
    }
  },
  computed: {
    hreflangs() {
      return [
        {
          hid: `alternate-hreflang-en`,
          rel: 'alternate',
          href: 'https://www.dripcapital.com/privacy-policy',
          hreflang: 'en'
        },
        {
          hid: `alternate-hreflang-en-in`,
          rel: 'alternate',
          href: 'https://www.dripcapital.com/en-in/privacy-policy',
          hreflang: 'en-in'
        },
        {
          hid: `alternate-hreflang-en-us`,
          rel: 'alternate',
          href: 'https://www.dripcapital.com/en-us/privacy-policy',
          hreflang: 'en-us'
        },
        {
          hid: `alternate-hreflang-en-mx`,
          rel: 'alternate',
          href: 'https://www.dripcapital.com/es-mx/privacy-policy',
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
    Privacy
  }
}
</script>
