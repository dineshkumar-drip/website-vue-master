<template>
  <page-section section-class="page-bank-details">
    <main-header :defaultLightHeader="true" />
    <bank-details-india />
    <main-footer />
  </page-section>
</template>

<script>
import PageSection from '~/components/PageSection'
import MainHeader from '~/components/MainHeader'
import MainFooter from '~/components/footer/MainFooter'
import BankDetailsIndia from '~/components/bankDetailsIndia/BankDetailsIndia'

export default {
  data() {
    return {
      title: this.$t('pages.bankDetailsIndia.seoTitle'),
      description: this.$t('pages.bankDetailsIndia.description')
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
    BankDetailsIndia
  }
}
</script>
