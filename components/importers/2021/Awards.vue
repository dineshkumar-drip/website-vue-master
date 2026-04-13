<template>
  <page-section v-if="dictionary">
    <b-container fluid class="drip-container">
      <section-heading text="Awards and Certifications" />
      <b-row
        class="align-items-center justify-content-flex-start flex-wrap my-0 mr-3"
      >
        <b-col
          cols="3"
          md="2"
          lg
          class="p-2 p-md-4 text-center"
          v-for="(item, i) in dictionary.items"
          :key="i"
        >
          <b-img
            :src="require(`@/assets/images/awards/${item}`)"
            class="img-fluid"
            :alt="item"
          />
        </b-col>
      </b-row>
    </b-container>
  </page-section>
</template>

<script>
import PageSection from '~/components/PageSection'
import SectionHeading from '~/components/common/ImpoExpo/SectionHeading'

export default {
  props: {
    page: {
      type: String,
      default: 'exporters'
    },
    isAboutPage: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    dictionary() {
      return this.$t(`pages.${this.page}.awards`)
    }
  },
  components: {
    PageSection,
    SectionHeading
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/scss/variables';

.drip-container {
  padding: 0 108px;

  @media screen and (min-width: $xl-laptop) {
    padding: 0px 108px;
  }

  @media screen and (max-width: $xl-laptop) {
    padding: 0px 108px;
  }

  @media screen and (max-width: $large-laptop) {
    padding: 0px 28px;
  }

  @media screen and (max-width: $laptop) {
    padding: 0px 24px;
  }

  @media screen and (max-width: $tablet) {
    padding: 0px 24px;
  }

  @media screen and (max-width: $mobile) {
    padding: 0px 20px;
  }
}
</style>
