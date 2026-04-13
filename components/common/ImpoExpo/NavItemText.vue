<template>
  <div class="position-relative d-flex">
    <span
      :class="
        (page === 'channelPartner' || page === 'newsroom') && !lightHeader
          ? 'light-text'
          : null
      "
      >{{ text }}</span
    >
    <b-img
      class="down d-none d-lg-block"
      :src="
        (page === 'channelPartner' || page === 'newsroom') && !lightHeader
          ? require('~/assets/images/common/down-white.svg')
          : require('~/assets/images/common/down.svg')
      "
    ></b-img>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
      default: ''
    },
    page: {
      type: String,
      default: 'importers'
    },
    lightHeader: {
      type: Boolean
    }
  }
}
</script>

<style scoped lang="scss">
@import '~assets/scss/variables';
.down {
  width: 10px;
  max-height: 25px;
  margin-left: 5px;
}
.light-text {
  color: $white !important;
}
</style>
