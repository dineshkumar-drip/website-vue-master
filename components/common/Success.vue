<template>
  <page-section
    section-class="partner-success-section"
    :class="[isNewSuccess ? 'light p-0' : 'dark']"
  >
    <h3 v-if="isBuyerFinance" class="text-center">
      {{ $t('pages.products.quickFacts.title') }}
    </h3>
    <b-row>
      <b-col
        :cols="12"
        :lg="3"
        :class="isNewSuccess ? 'mb-4 mb-lg-0' : 'text-center mb-5 mb-lg-0'"
        v-for="(item, index) in $t('pages.channelPartner.success')"
        :key="index"
      >
        <div :class="isNewSuccess ? 'success-card text-center' : 'py-4 mx-3'">
          <div class="mx-3">
            <img
              :src="require(`~/assets/images/common/success/${index + 1}.svg`)"
              class="mb-3 h-100"
            />
            <div v-if="!isNewSuccess" class="stat-title">
              {{ item.primary }}
            </div>
            <p
              mt-0
              :class="[
                'stat-number',
                isNewSuccess ? 'stat-title font-weight-bold' : 'display-3'
              ]"
            >
              {{ item.stat }}
            </p>
            <p class="sec-line mt-1 mb-0">{{ item.sec }}</p>
          </div>
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
  },
  props: ['isProductPage', 'isAboutPage', 'isNewSuccess', 'isBuyerFinance']
}
</script>
<style scoped lang="scss">
@import '../../assets/scss/variables';
hr {
  width: 50%;
  margin-bottom: 10px;
}
.dark {
  padding-top: 3rem;
  background: $secondary;
  color: #ffffff;
}
.light {
  background: #ffffff;
  color: $secondary;
}
p {
  margin-top: 10%;
}
.success-card {
  border-radius: 2.063rem;
  box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.15);
  border: solid 1px $product-shadow;
  padding: 1rem 2rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f9fa;
}
</style>
