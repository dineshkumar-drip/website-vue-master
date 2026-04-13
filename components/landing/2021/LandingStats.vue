<template>
  <section class="section-stats impo-expo py-8">
    <b-container fluid>
      <heading
        center
        color="white"
        :text="$t('pages.landing.tradeFinance.statsTitle')"
      />
      <b-row class="mt-9">
        <b-col
          :sm="6"
          :md="3"
          class="stat-desc text-center"
          v-for="(stat, index) in $t('pages.landing.tradeFinance.stats')"
          :key="index"
        >
          <p>
            {{ stat.text }}
          </p>
          <span class="stat-number">
            {{ stat.number }}
          </span>
          <br />
          <span class="stat-number">
            {{ stat.suffix }}
          </span>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import Heading from '~/components/common/ImpoExpo/Heading'

export default {
  props: {
    isBuyerFinance: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Heading
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/scss/variables';
@import '~bootstrap/scss/mixins';

.section-stats {
  background-color: $dark-blue;
  color: white;
}

.stat-number {
  font-weight: bold;
  font-size: 1.75rem;
}
@include media-breakpoint-down(md) {
  .stat-desc {
    margin-top: 3rem;
  }
}
</style>
