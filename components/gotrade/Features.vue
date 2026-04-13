<template>
  <b-container>
    <b-row class="mt-5 justify-content-center">
      <b-col
        v-for="item in featureData"
        :key="item.title"
        :lg="3"
        :md="6"
        :sm="12"
        class="my-md-2 text-center"
      >
        <b-img-lazy
          class="mx-auto feature-logo"
          :src="require(`@/assets/images/gotrade/${item.slug}`)"
        ></b-img-lazy>
        <div class="h3 mb-2">{{ item.title }}</div>
        <div>
          {{ item.description }}
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  data() {
    return {
      featureData: [
        {
          title: 'High Limits',
          slug: 'icon-dollar.png',
          description:
            'Upto 10 Million USD Limits for financing your supply chain.'
        },
        {
          title: 'Flexible',
          slug: 'icon-package.png',
          description: 'Release inventory financed in any quantity you need'
        },
        {
          title: 'Supply Chain',
          slug: 'icon-warehouse.png',
          description:
            'We work with all major cold storage facilities to fund inventory in your warehouse'
        },
        {
          title: 'Low Charges',
          slug: 'icon-pricing.png',
          description:
            'Extend your credit periods with charges as low as 0.7% per month'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.feature-logo {
  height: 119px;
  width: 100%;
  max-width: 213px;
}
</style>
