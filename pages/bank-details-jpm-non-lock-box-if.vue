<template>
  <page-section section-class="page-bank-details">
    <main-header :defaultLightHeader="true" />
    <bank-details-jpm-non-locked />
    <main-footer />
  </page-section>
</template>

<script>
import PageSection from '~/components/PageSection'
import MainHeader from '~/components/MainHeader'
import MainFooter from '~/components/footer/MainFooter'
import bankDetailsJpmNonLocked from '../components/bankDetailsJpmNonLocked/bankDetailsJpmNonLocked.vue'

export default {
  data() {
    return {
      title: this.$t('pages.bankDetails.seoTitle'),
      description: this.$t('pages.bankDetails.description')
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
  components: {
    PageSection,
    MainHeader,
    MainFooter,
    bankDetailsJpmNonLocked
  }
}
</script>
