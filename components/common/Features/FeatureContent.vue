<template>
  <div class="feature-content">
    <div class="d-flex">
      <div class="section-image">
        <b-img-lazy
          :src="require(`@/assets/images/common/features/${icon}.svg`)"
          alt="title"
          :width="75"
        />
      </div>
      <div class="section-image-content">
        <p :class="isUs ? 'benefit-color' : ''" class="benefit-title">
          {{ title }}
        </p>
        <p :class="isUs ? 'lead-weight' : ''" class="lead">{{ description }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    isUs() {
      return this.$i18n.locale.indexOf('us') > -1
    }
  },
  props: ['icon', 'title', 'description']
}
</script>

<style lang="scss" scoped>
.benefit-color {
  color: black;
}
.lead-weight {
  font-weight: 400;
}
</style>
