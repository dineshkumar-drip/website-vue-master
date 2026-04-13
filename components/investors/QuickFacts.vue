<template>
  <b-container class="quick-facts">
    <b-row>
      <b-col :cols="12" class="text-center text-lg-center">
        <h3 class="facts-title text-center">
          {{ $t('pages.investors.facts.title') }}
        </h3>
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
import Success from '~/components/investors/Success'
export default {
  data() {
    return {
      expanded: false,
      angle: 'angle-down'
    }
  },
  components: {
    Success
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';

.quick-facts {
  margin-bottom: 4rem;
  margin-top: 4rem;

  .facts-title {
    font-family: $investor-font-family;
    font-size: 1.625rem;
    letter-spacing: 0.5px;
    color: $investor-black;
    margin-bottom: 3rem;
  }
}
</style>
