<template>
  <b-button
    :disabled="disabled"
    class="d-flex justify-items-center new-button"
    :variant="variant"
  >
    <slot />
    <div class="button-icon-container">
      <b-img
        v-if="!loading"
        class="button-icon"
        :src="require('../../assets/images/product/arrow-forward.png')"
      />
      <div
        v-if="loading"
        class="spinner-border spinner-icon text-light"
        role="status"
      />
    </div>
  </b-button>
</template>

<script>
export default {
  props: {
    variant: {
      default: 'primary'
    },
    disabled: {
      default: false
    },
    loading: {
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';

.new-button {
  overflow: hidden;
  border-width: 0px;
  position: relative;
  letter-spacing: 0.5px;

  .button-icon-container {
    height: 20px;
    width: 30px;
    z-index: 2;
    margin-left: 10px;
    margin-right: -4px;
    position: relative;
    .button-icon {
      width: 20px;
    }
  }

  .spinner-icon {
    width: 20px;
    height: 20px;
  }

  &:after {
    content: '';
    display: block;
    width: 100px;
    height: 20px;
    position: absolute;
    top: 0%;
    right: -31px;
    transform: rotate(-70deg);
  }

  &.btn-primary {
    &:after {
      background-color: $secondary;
    }
  }

  &.btn-secondary {
    &:after {
      background-color: $primary;
    }
  }
}
</style>
