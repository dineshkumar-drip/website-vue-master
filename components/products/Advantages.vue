<template>
  <div>
    <b-row>
      <b-col class="text-center text-lg-left" :cols="12">
        <h4 class="product-pages-title">{{ keyword }}</h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col v-for="(adv, index) in advantages" :key="index" :lg="4" :cols="12">
        <div class="d-flex align-items-center single-card">
          <div class="img-container">
            <b-img
              :src="
                require(`~/assets/images/product/product-advantages-0${
                  index + 1
                }.png`)
              "
              :alt="adv?.alt ? adv.alt : 'icon'"
              class="img-fluid"
            ></b-img>
          </div>
          <div class="card-text">{{ adv?.title ? adv.title : adv }}</div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: ['advantages', 'keyword']
}
</script>
<style scoped>
.pre-line {
  white-space: pre-line;
}
</style>
