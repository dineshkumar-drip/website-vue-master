<template>
  <div>
    <h2 class="title-slash-container">
      <span class="drip-h2 font-weight-700">{{ text }}</span>
    </h2>
    <p v-if="subtitle" class="drip-body mt-3 mb-0">{{ subtitle }}</p>
    <div class="spacing-16"></div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables';
@import '~bootstrap/scss/mixins';

.title-slash-container {
  position: relative;
  margin-bottom: 8px;
  color: $dark-blue;
  .slash-symbol {
    font-weight: 700;
    color: $wealthy-green-500;
    margin-left: 2px;
  }
  span {
    &:after {
      content: '';
      width: 30%;
      height: 4px;
      background: $primary;
      position: absolute;
      bottom: -0.6rem;
      left: 0;
      max-width: 207px;
    }
    &.center {
      &:after {
        right: 0;
        margin: 0 auto;
      }
    }
  }
}

@include media-breakpoint-down(md) {
  .title-underline {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  .title-underline-bold {
    margin: 3rem 0rem;
  }
}
</style>
