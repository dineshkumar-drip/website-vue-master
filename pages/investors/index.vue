<template>
  <div>
    <investors />
  </div>
</template>
<script>
import Investors from '~/components/investors/2021'

export default {
  nuxtI18n: {
    paths: {
      en: '/investors',
      'es-mx': '/inversionistas'
    }
  },
  data() {
    return {
      title: this.$t('pages.investors.title'),
      description: this.$t('pages.investors.description')
    }
  },
  computed: {
    canonicalTag() {
      return process.env.DRIP_WEB_HOST + this.$route.path
    },
    hreflangs() {
      return [
        {
          hid: `alternate-hreflang-en`,
          rel: 'alternate',
          href: 'https://www.dripcapital.com/investors',
          hreflang: 'en'
        },
        {
          hid: `alternate-hreflang-en-in`,
          rel: 'alternate',
          href: 'https://www.dripcapital.com/en-in/investors',
          hreflang: 'en-in'
        },
        {
          hid: `alternate-hreflang-en-us`,
          rel: 'alternate',
          href: 'https://www.dripcapital.com/en-us/investors',
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
      link: [{ rel: 'canonical', href: this.canonicalTag }, ...this.hreflangs]
    }
  },
  components: {
    Investors
  }
}
</script>
