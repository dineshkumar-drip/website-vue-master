<template>
  <div class="feature-content">
    <div class="d-flex">
      <div class="section-image">
        <b-img-lazy
          :src="require(`@/assets/images/common/newFeatures/${icon}.png`)"
          alt="title"
          :width="75"
        />
      </div>
      <div class="section-image-content">
        <p class="benefit-title">
          {{ title }}
        </p>
        <p class="lead">{{ description }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['icon', 'title', 'description']
}
</script>

<style lang="scss" scoped>
.benefit-title {
  color: black;
}
.benefit-title,
.lead {
  font-weight: 400;
}
</style>
