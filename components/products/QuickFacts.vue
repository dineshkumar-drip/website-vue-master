<template>
  <b-container class="quick-facts">
    <b-row>
      <b-col :cols="12">
        <heading :text="$t('pages.products.quickFacts.title')" />
      </b-col>
    </b-row>
    <b-row class="mt-4">
      <b-col :cols="12">
        <success :isNewSuccess="true" />
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import Success from '~/components/common/Success'
import Heading from '~/components/common/ImpoExpo/Heading'

export default {
  props: {
    page: {
      type: String,
      default: 'importers'
    }
  },
  data() {
    return {
      expanded: false,
      angle: 'angle-down'
    }
  },
  components: {
    Success,
    Heading
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';

.quick-facts {
  h3 {
    color: $secondary;
  }
  .f-32 {
    font-size: 2rem;
  }
}
.title-underline {
  position: relative;
  margin-bottom: 4rem;
  color: $dark-blue;
  &.title-white {
    color: $white;
  }
  span {
    &:after {
      content: '';
      width: 4rem;
      height: 2.5px;
      background: $primary;
      position: absolute;
      bottom: -1.5rem;
      left: 0;
    }
    &.center {
      &:after {
        right: 0;
        margin: 0 auto;
      }
    }
  }
}
@media (max-width: 575px) {
  .title-underline {
    span {
      &:after {
        &:after {
          right: 0;
          margin: 0 auto;
        }
      }
    }
  }
}
</style>
