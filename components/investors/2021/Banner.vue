<template>
  <page-section section-class="section-banner">
    <div class="investor-banner">
      <b-container>
        <b-row>
          <b-col class="text-center" :cols="12">
            <div class="banner-title">
              {{ $t('pages.investors.banner.title') }}
            </div>
          </b-col>
          <b-col
            :cols="12"
            class="d-flex flex-column flex-lg-row align-items-center justify-content-center"
          >
            <b-btn
              v-track-click
              id="investors-jumbotron-cta"
              href="#page-form"
              variant="primary"
              class="btn-lg banner-cta"
              :class="isMx ? 'text-transform-none' : 'text-capitalize'"
              v-smooth-scroll="{ offset: -85 }"
            >
              {{ $t('pages.investors.banner.cta') }}
            </b-btn>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </page-section>
</template>

<script>
import PageSection from '~/components/PageSection'
import Heading from '~/components/common/ImpoExpo/Heading'

export default {
  computed: {
    dictionary() {
      return this.$t(`pages.investors.benefits`)
    },
    isMx() {
      return this.$i18n.locale.indexOf('mx') > -1
    }
  },
  components: {
    PageSection,
    Heading
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables';
@import '~bootstrap/scss/mixins';

.investor-banner {
  margin-top: 4rem;
}

@include media-breakpoint-down(md) {
  .section-banner {
    .investor-banner {
      padding: 5rem 0;
    }
    .banner-title {
      margin-top: 0;
    }
  }
}
</style>
