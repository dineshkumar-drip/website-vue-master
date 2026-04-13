<template>
  <h2
    class="title-underline"
    :class="[
      { 'text-center': center },
      `title-${color}`,
      `${classname}`,
      classes
    ]"
  >
    <span :class="{ center }">{{ text }}</span>
  </h2>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    center: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'dark-blue'
    },
    classname: {
      type: String,
      default: ''
    },
    classes: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables';
@import '~bootstrap/scss/mixins';

.title-underline {
  position: relative;
  margin-bottom: 2rem;
  color: $dark-blue;
  &.title-white {
    color: $white;
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

.title-underline-bold {
  span {
    &:after {
      content: '';
      width: 10rem;
      height: 5.5px;
      border-radius: 9rem;
    }
  }
  margin: 3rem 13rem;
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
