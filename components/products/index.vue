<template>
  <div>
    <product keyword="home" />
  </div>
</template>
<script>
import Product from '~/components/Product'
export default {
  data() {
    return {
      title: this.$t('pages.home.title'),
      description: this.$t('pages.home.description')
    }
  },
  // computed: {
  //   canonicalTag() {
  //     return process.env.DRIP_WEB_HOST + this.$route.path
  //   }
  // },
  head() {
    return {
      needLineBreak: true,
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.description }
      ]
      // link: [{ rel: 'canonical', href: this.canonicalTag }]
    }
  },
  components: {
    Product
  }
}
</script>
