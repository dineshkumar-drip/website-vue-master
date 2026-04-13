<template>
  <div class="export-process">
    <b-container>
      <b-row>
        <b-col class="text-center text-lg-left" :lg="12">
          <h3 class="process-title product-pages-title">{{ productName }}</h3>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div
            class="d-flex flex-column align-items-center align-items-lg-start flex-lg-row justify-content-between stepper"
          >
            <div
              class="process-step"
              v-for="(item, index) in content"
              :key="index"
            >
              <div class="icon-container">
                <b-img-lazy
                  class="process-icon"
                  :src="getImage(item.icon_url)"
                  fluid
                  alt="step1"
                ></b-img-lazy>
              </div>
              <div class="icon-title">{{ item.content }}</div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  props: ['product', 'productName'],
  computed: {
    content() {
      return this.exportData
        ? this.product.exportData
        : this.$t('pages.products.exportProcess.items')
    },
    exportData() {
      return this.product && this.product.exportData
    }
  },
  methods: {
    getImage(img) {
      return this.exportData
        ? img
        : require(`~/assets/images/product/${img}.png`)
    }
  }
}
</script>
