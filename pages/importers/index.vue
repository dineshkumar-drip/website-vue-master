<template>
  <div>
    <in-importers v-if="$i18n.locale.indexOf('in') > -1" />
    <importers v-else />
  </div>
</template>

<script>
import Importers from '~/components/Importers'
import InImporters from '~/components/importers/IN/'

export default {
  nuxtI18n: {
    paths: {
      en: '/importers',
      'es-mx': '/compradores',
      'en-mx': '/buyers',
      'en-ae': '/importers',
      'en-in': '/importers',
      'en-us': '/importers',
      'en-ec': '/importers',
      'es-ec': '/Importadores'
    }
  },
  data() {
    return {
      locale: this.$i18n.locale,
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
  },
  components: {
    Importers,
    InImporters
  }
}
</script>
