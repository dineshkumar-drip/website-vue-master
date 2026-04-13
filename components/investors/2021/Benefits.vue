<template>
  <page-section section-class="section-benefits">
    <b-container fluid>
      <b-row>
        <b-col>
          <heading :text="dictionary.title" />
        </b-col>
      </b-row>
      <b-row class="mt-5">
        <b-col :cols="12" :lg="5" class="mobile-section">
          <b-row class="mt-0">
            <b-col :cols="12" v-for="item in dictionary.items" :key="item.id">
              <div class="left-side mb-5">
                <h3 class="headings">{{ item.title }}</h3>
                <p>{{ item.desc }}</p>
              </div>
            </b-col>
          </b-row>
        </b-col>
        <b-col :cols="12" :lg="7" class="benefits-image text-center">
          <b-img
            :src="require(`~/assets/images/investors/graph.png`)"
            alt="Loss Rates"
            class="img-fluid stat-chart"
          />
        </b-col>
      </b-row>
    </b-container>
  </page-section>
</template>

<script>
import PageSection from '~/components/PageSection'
import Heading from '~/components/common/ImpoExpo/Heading'

export default {
  computed: {
    dictionary() {
      return this.$t(`pages.investors.benefits`)
    }
  },
  components: {
    PageSection,
    Heading
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables';
@import '~bootstrap/scss/mixins';

.section-benefits {
  h3 {
    font-weight: 600;
    color: $dark-blue;
    font-size: 1.75rem;
  }
}

@include media-breakpoint-down(md) {
  .section-benefits {
    .left-side {
      h3 {
        font-size: 1.25rem;
        font-weight: 600;
      }
      padding-top: 1.25rem;
    }
  }
  .mobile-section {
    position: relative;
    padding-bottom: 2rem;
  }
  .sol-img {
    position: absolute;
    bottom: -11rem;
    left: 2rem;
    z-index: 1;
  }
}
</style>
