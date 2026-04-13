<template>
  <section class="impo-expo exporters-container" v-if="$i18n.locale">
    <main-header :defaultLightHeader="true" />
    <main-hero page="importers" />
    <solution page="importers" v-if="!this.$i18n.locale !== 'en-us' && !isEn" />

    <div v-if="this.$i18n.locale === 'en-us'">
      <how-it-works :showProcessBenefits="true" />
      <what-customer-say
        :testimonials="this.$t(`pages.importers.customerSay.items`)"
      />
      <buyer-contact-form />
      <us-awards class="mb-0" page="importers" />
      <us-footer />
    </div>

    <div v-if="isOthers">
      <advantage
        :class="
          this.$i18n.locale !== 'en-us' || isEn
            ? 'in-impo-advantage mt-8 mt-lg-10'
            : 'in-impo-advantage mt-5 mt-lg-9'
        "
        page="importers"
        key=""
      />
      <capital class="mt-5 mt-lg-9" page="importers" />
      <!-- <news page="importers" /> -->
      <no-ssr>
        <success-stories class="mt-5" page="importers" />
      </no-ssr>
      <leaders class="mt-5 mt-lg-9" importers />
      <awards class="d-none d-lg-block mt-lg-9" page="importers" />
      <news class="mt-5 mt-lg-9" page="importers" />
      <growth class="mt-8 mt-lg-10" page="importers" />
      <!-- <conclusion importers /> -->
      <main-footer :isNewBranding="true" />
    </div>
  </section>
</template>

<script>
import MainHeader from '~/components/common/ImpoExpo/MainHeader'
import MainHero from '~/components/common/ImpoExpo/MainHero'
import Solution from '~/components/common/ImpoExpo/Solution'
import MainFooter from '~/components/footer/MainFooter'
import Advantage from '~/components/common/ImpoExpo/Advantage'
import Capital from '~/components/common/ImpoExpo/Capital'
import News from '~/components/common/ImpoExpo/News'
import Leaders from '~/components/common/ImpoExpo/Leaders'
import Growth from '~/components/common/ImpoExpo/Growth'
import Conclusion from '~/components/common/ImpoExpo/Conclusion'
import Awards from '~/components/common/Awards'
import UsAwards from '~/components/importers/2021/Awards'
import HowItWorks from '~/components/importers/2021/HowItWorks'
import WhatCustomerSay from '~/components/importers/2021/WhatCustomerSay'
import BuyerContactForm from '~/components/importers/2021/BuyerContactForm'
import UsFooter from '~/components/importers/UsFooter'

export default {
  components: {
    MainHeader,
    MainFooter,
    MainHero,
    Solution,
    Advantage,
    Capital,
    News,
    Leaders,
    Growth,
    SuccessStories: () => import('~/components/common/ImpoExpo/SuccessStories'),
    Conclusion,
    Awards,
    HowItWorks,
    WhatCustomerSay,
    BuyerContactForm,
    UsAwards,
    UsFooter
  },
  method: {
    isUs() {
      return this.$i18n.locale.indexOf('us') > -1
    }
  },
  computed: {
    // isUs() {
    //   return this.$i18n.locale.indexOf('us') > -1
    // },
    isOthers() {
      return this.$i18n.locale.indexOf('us') == -1
    },
    isEn() {
      return this.$i18n.locale.indexOf('en') > -1
    }
  }
}
</script>
