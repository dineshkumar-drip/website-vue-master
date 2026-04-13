<template>
  <section v-if="content">
    <p class="font-weight-bold content-text">{{ city }}, {{ date }}:</p>
    <div v-for="(cont, index) in content.split('\n')" :key="index">
      <p class="content-text pt-2" v-if="cont && cont.trim()">
        {{ cont }}<br />
      </p>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    content: {
      type: String,
      default: ''
    },
    city: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/scss/variables';
@import '~bootstrap/scss/mixins';

@include media-breakpoint-down(sm) {
  .content-text {
    font-size: small;
  }
}
</style>
