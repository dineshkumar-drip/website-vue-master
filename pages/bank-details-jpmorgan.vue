<template>
  <page-section section-class="page-bank-details">
    <main-header :defaultLightHeader="true" />
    <bank-details-jpm />
    <main-footer />
  </page-section>
</template>

<script>
import PageSection from '~/components/PageSection'
import MainHeader from '~/components/MainHeader'
import MainFooter from '~/components/footer/MainFooter'
import BankDetailsJpm from '~/components/bankDetailsJPMorgan/BankDetailsJPMorgan'

export default {
  data() {
    return {
      title: this.$t('pages.bankDetailsJpm.seoTitle'),
      description: this.$t('pages.bankDetailsJpm.description')
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
    BankDetailsJpm
  }
}
</script>
