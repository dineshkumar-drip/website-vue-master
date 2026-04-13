<template>
  <b-row>
    <b-col class="text-center text-lg-left" :cols="12" :lg="7">
      <b-card
        v-for="(faq, index) in productQuestions"
        :key="faq.question + '-' + index"
        :title="faq.question"
        class="question-card"
      >
        <b-card-text class="answer text-left">{{ faq.answer }}</b-card-text>
      </b-card>
    </b-col>
    <b-col :lg="5" class="d-lg-block d-none d-lg-flex align-items-center">
      <div class="question-image-container text-center">
        <b-img
          class="question-image"
          :src="imageSrc"
          alt="You buy and we pay your suppliers"
        />
      </div>
    </b-col>
  </b-row>
</template>
<script>
export default {
  props: ['faq', 'productQuestions', 'imageUrl'],
  computed: {
    imageSrc() {
      return (
        this.imageUrl ||
        require('~/assets/images/product/product-page-question-image.png')
      )
    }
  }
}
</script>
<style lang="scss" scoped>
.rotate-icon {
  transform: rotate(180deg);
}
.card-button {
  white-space: initial;
}
</style>
