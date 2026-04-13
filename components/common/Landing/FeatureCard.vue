<template>
  <b-container class="mt-lg-5 mt-3 tradex-container">
    <b-row class="tradex-row">
      <b-col cols="12">
        <section-heading text="Our Solutions" />
      </b-col>
      <b-col cols="12">
        <div
          class="d-flex flex-wrap justify-content-between justify-content-lg-start mt-4 px-4"
        >
          <div
            class="d-flex flex-column align-center landing-feature-card p-4 p-md-6 shadow-sm rounded-2 mr-4 mb-5 color-noble-blue-500"
            v-for="(x, i) in $t(`pages.${page}.featureCard`)"
            :key="i"
          >
            <b-img
              :src="require(`~/assets/images/landing/evstradex/${x.url}.png`)"
              class="mx-auto img-fluid"
            />
            <div class="drip-label my-1">
              {{ x.hsCode }}
            </div>
            <div class="drip-h4 font-weight-bold">
              {{ x.name1 }}<br />
              {{ x.name2 }}
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import SectionHeading from '~/components/common/ImpoExpo/SectionHeading'

export default {
  props: ['page'],
  components: {
    SectionHeading
  }
}
</script>
<style lang="scss" scoped>
@import '../../../assets/scss/variables';
.tradex-container {
  color: $white;
  .tradex-row {
    padding: 40px 0;
  }
}
.landing-feature-card {
  background-color: #f8f9fa;
  border-radius: 33px;
  text-align: center;
  width: 230px;
  img {
    height: 108px;
    border-radius: 16px;
    margin-bottom: 12px;
  }
}
</style>
