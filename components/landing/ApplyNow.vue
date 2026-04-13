<template>
  <page-section section-class="section-conclusion section-home">
    <b-container>
      <b-row class="justify-content-between align-items-center">
        <b-col class="text-center text-md-left" :md="7" :cols="12">
          <h4 class="intro-title no-slash">
            {{ $t('pages.newHome.conclusion.title') }}
          </h4>
        </b-col>
        <b-col
          class="text-md-right text-center mt-4 mt-md-0"
          :md="4"
          :cols="12"
        >
          <div>
            <a
              href="#apply-now"
              v-smooth-scroll="{ offset: -85 }"
              class="btn btn-primary btn-lg apply-btn text-white"
            >
              {{ $t('pages.newHome.conclusion.cta') }}
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
  components: {
    PageSection
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/_variables.scss';
.section-conclusion {
  background: $buyer-finance;
  padding-top: 3rem;
  padding-bottom: 3rem;
}
</style>
