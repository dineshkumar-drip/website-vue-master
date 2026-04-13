<template>
  <page-section section-class="partner-success-section" class="light p-0">
    <b-row>
      <b-col
        :cols="12"
        :lg="3"
        v-for="(item, index) in $t('pages.investors.facts.stats')"
        :key="index"
      >
        <div class="success-card text-center">
          <span class="fact-number">{{ item.number }}</span>
          <p class="fact-text mt-1 mb-0">{{ item.text }}</p>
        </div>
      </b-col>
    </b-row>
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
<style scoped lang="scss">
@import '../../assets/scss/variables';
.light {
  background: white;
  color: $secondary;
}
.success-card {
  padding: 2rem;
}
.fact-text {
  font-family: $investor-font-family;
  font-size: 1rem;
  letter-spacing: 0.5px;
  color: $investor-black;
}
</style>
