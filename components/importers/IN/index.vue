<template>
  <section class="impo-expo exporters-container">
    <main-header :defaultLightHeader="true" />
    <importer-header />
    <advantage page="importers.indiaImporters" key="" class="pt-5" />
    <how-it-works />
    <what-customer-say
      :testimonials="this.$t(`pages.exporters.customerSay.items`)"
    />
    <importer-contact-form />
    <awards page="importers" />
    <main-footer :isNewBranding="true" />
  </section>
</template>

<script>
import ImporterHeader from '~/components/importers/IN/Header'
import MainHeader from '~/components/common/ImpoExpo/MainHeader'
import Advantage from '~/components/common/ImpoExpo/Advantage'
import HowItWorks from '~/components/importers/2021/HowItWorks'
import WhatCustomerSay from '~/components/importers/2021/WhatCustomerSay'
import ImporterContactForm from '~/components/importers/IN/ImporterContactForm'
import Awards from '~/components/importers/2021/Awards'
import MainFooter from '~/components/footer/MainFooter'

export default {
  components: {
    ImporterHeader,
    MainHeader,
    Advantage,
    HowItWorks,
    WhatCustomerSay,
    ImporterContactForm,
    Awards,
    MainFooter
  },
  data() {
    return {
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
  }
}
</script>
