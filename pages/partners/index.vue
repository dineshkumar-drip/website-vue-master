<template>
  <section class="impo-expo page-container">
    <main-header :isChannelPartner="true" page="channelPartner" />
    <main-hero page="channelPartner" />
    <new-solution page="channelPartner" />
    <capital class="mt-5 mt-lg-9" page="channelPartner" channelPartner />
    <feature-partner class="mt-5 mt-lg-9" v-if="!isMx && !isEnMx && !isUs" />
    <business-conditions class="mt-5 mt-lg-9" v-if="isUs" />
    <faqs class="mt-5 mt-lg-9" page="channelPartner" :faqs="faqs" />
    <quick-facts class="mt-5 mt-lg-9" page="channelPartner" />
    <news class="mt-5 mt-lg-9" v-if="!(isIn || isEnMx)" page="channelPartner" />
    <growth class="mt-5 mt-lg-10" page="channelPartner" />
    <main-footer :isNewBranding="true" />
  </section>
</template>
<script>
import MainHeader from '~/components/common/ImpoExpo/MainHeader'
import MainHero from '~/components/common/ImpoExpo/MainHero'
import Capital from '~/components/common/ImpoExpo/Capital'
import News from '~/components/common/ImpoExpo/News'
import FeaturePartner from '~/components/common/partners/FeaturePartner'
import BusinessConditions from '~/components/common/partners/BusinessConditions'
import Growth from '~/components/common/ImpoExpo/Growth'
import MainJumbotron from '~/components/MainJumbotron'
import PartnerForm from '~/components/forms/PartnerForm'
import Faqs from '~/components/products/Faqs'
import MainFooter from '~/components/footer/MainFooter'
import QuickFacts from '~/components/products/QuickFacts'
import Success from '~/components/common/Success'
import Benefits from '~/components/common/Benefits'
import NewSolution from '~/components/common/ImpoExpo/NewSolution'
import Conclusion from '~/components/channelPartner/Conclusion'
import typerHelper from '~/modules/typer-helper'

export default {
  nuxtI18n: {
    paths: {
      en: '/partners',
      'es-mx': '/socios',
      'en-in': '/partners',
      'en-mx': '/partners',
      'en-ae': '/partners',
      'en-us': '/partners'
    }
  },
  data() {
    return {
      title: this.$t('pages.channelPartner.title'),
      description: this.$t('pages.channelPartner.description'),
      faqs: this.$t('pages.channelPartner.faqs.items')
    }
  },
  computed: {
    isIn() {
      return this.$i18n.locale === 'en-in'
    },
    isEnMx() {
      return this.$i18n.locale === 'en-mx'
    },
    isMx() {
      return this.$i18n.locale === 'es-mx'
    },
    isUs() {
      return this.$i18n.locale.indexOf('us') > -1
    },

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
        },
        {
          hid: `alternate-hreflang-en-mx`,
          rel: 'alternate',
          href: 'https://www.dripcapital.com/es-mx/socios',
          hreflang: 'es-mx'
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
    MainHeader,
    MainJumbotron,
    PartnerForm,
    MainFooter,
    Success,
    Benefits,
    Conclusion,
    MainHero,
    Capital,
    News,
    FeaturePartner,
    BusinessConditions,
    Growth,
    Faqs,
    QuickFacts,
    NewSolution
  },
  methods: {
    onTypedChar(typedChar, typedCharIndex) {
      typerHelper(typedChar, typedCharIndex, this)
    }
  }
}
</script>
