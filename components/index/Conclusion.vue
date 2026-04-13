<template>
  <page-section section-class="section-conclusion section-home gray">
    <b-container fluid>
      <b-row class="justify-content-center">
        <b-col class="col-lead text-center" :lg="6">
          <h4 class="intro-title no-slash">
            {{ $t('pages.newHome.conclusion.title') }}
          </h4>
          <p class="lead">
            {{ $t('pages.newHome.conclusion.t1') }}
          </p>
          <div>
            <a
              @click="applyNow"
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
  computed: {
    isUs() {
      return this.$i18n.locale.indexOf('us') > -1
    }
  },
  methods: {
    applyNow() {
      this.isUs
        ? this.$router.push(this.localePath('importers-apply'))
        : this.$router.push(this.localePath('exporters-apply'))
    }
  },
  components: {
    PageSection
  }
}
</script>

<style lang="scss" scoped>
.apply-btn {
  cursor: pointer;
}
</style>
