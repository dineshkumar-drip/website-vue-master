<template>
  <page-section section-class="page-bank-details">
    <main-header :defaultLightHeader="true" page="voyagerBankDetails" />
    <voyager-bank-details />
    <main-footer />
  </page-section>
</template>

<script>
import PageSection from '~/components/PageSection'
import MainHeader from '~/components/MainHeader'
import MainFooter from '~/components/footer/MainFooter'
import VoyagerBankDetails from '~/components/voyagerBankDetails/VoyagerBankDetails'

export default {
  data() {
    return {
      title: this.$t('pages.bankDetailsJpmGoTrade.seoTitle'),
      description: this.$t('pages.bankDetailsJpmGoTrade.description')
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
    VoyagerBankDetails
  }
}
</script>
