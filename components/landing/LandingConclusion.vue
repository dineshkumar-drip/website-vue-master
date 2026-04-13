<template>
  <page-section section-class="section-conclusion bg-light-gray">
    <b-container fluid>
      <b-row class="justify-content-center">
        <b-col class="col-lead text-center" :lg="6">
          <h4 class="intro-title no-slash">
            {{ $t('pages.landing.tradeFinance.conclusion.title') }}
          </h4>
          <div>
            <a
              :href="ctaLink"
              class="btn btn-primary btn-lg apply-btn text-white"
              v-smooth-scroll="{ offset: -80 }"
            >
              {{ $t('pages.landing.tradeFinance.conclusion.cta') }}
            </a>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </page-section>
</template>

<script>
import PageSection from '~/components/PageSection'

export default {
  props: {
    ctaLink: {
      required: true,
      type: String
    }
  },
  components: {
    PageSection
  }
}
</script>
