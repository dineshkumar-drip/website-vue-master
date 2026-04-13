<template>
  <div>
    <buyer-finance />
  </div>
</template>

<script>
import BuyerFinance from '~/components/BuyerFinance'
export default {
  nuxtI18n: {
    paths: {
      en: '/importers/apply',
      'en-in': '/importers/apply',
      'en-us': '/importers/apply',
      'es-mx': '/compradores/aplicar',
      'en-mx': '/buyers/apply',
      'en-ae': '/importers/apply'
    }
  },
  computed: {
    hreflangs() {
      return [
        {
          hid: `alternate-hreflang-en-us`,
          rel: 'alternate',
          href: 'https://www.dripcapital.com/en-us/importers/apply',
          hreflang: 'en-us'
        }
      ]
    },
    canonicalTag() {
      return process.env.DRIP_WEB_HOST + this.$route.path
    }
  },
  head() {
    return {
      link: [{ rel: 'canonical', href: this.canonicalTag }, ...this.hreflangs]
    }
  },
  components: {
    BuyerFinance
  }
}
</script>
