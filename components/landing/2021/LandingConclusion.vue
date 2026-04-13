<template>
  <section class="impo-expo section-conclusion">
    <b-container fluid>
      <b-row class="justify-content-center">
        <b-col class="col-lead text-center" :lg="6">
          <h4 class="intro-title no-slash">
            {{ dictionary.title }}
          </h4>
          <div>
            <a
              :href="ctaLink"
              class="btn btn-primary btn-cta"
              :class="isMx ? 'text-transform-none' : 'text-capitalize'"
              v-smooth-scroll="{ offset: -80 }"
            >
              {{ dictionary.cta }}
            </a>
          </div>
          <div class="mt-4" v-if="isBuyerFinance">
            <a :href="getBrochureUrl" target="_blank">
              {{ dictionary.download }}
            </a>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import PageSection from '~/components/PageSection'

export default {
  data() {
    return {
      dictionary: this.isBuyerFinance
        ? this.$t('pages.landing.buyerFinance.conclusion')
        : this.$t('pages.landing.tradeFinance.conclusion')
    }
  },
  computed: {
    isMx() {
      return this.$i18n.locale.indexOf('mx') > -1
    },
    getBrochureUrl() {
      if (process.env.NODE_ENV !== 'production') {
        return 'https://23646608.fs1.hubspotusercontent-na1.net/hubfs/23646608/Drip%20payable%20finance-%20Final.pdf'
      }
      return 'https://21666794.fs1.hubspotusercontent-na1.net/hubfs/21666794/Drip%20payable%20finance-%20Final.pdf'
    }
  },
  props: {
    ctaLink: {
      required: true,
      type: String
    },
    isBuyerFinance: {
      type: Boolean,
      default: false
    }
  },
  components: {
    PageSection
  }
}
</script>

<style lang="scss" scoped>
@import '~bootstrap/scss/mixins';
@import '~assets/scss/variables';
.intro-title {
  font-size: 1.75rem;
  color: $dark-blue;
  font-weight: 600;
}
.section-conclusion {
  padding-bottom: 5rem;
  background-color: $bg-light-gray;
}
@include media-breakpoint-down(sm) {
  .intro-title {
    font-size: 1rem;
  }
}
</style>
