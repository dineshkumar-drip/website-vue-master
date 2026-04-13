<template>
  <page-section section-class="section-we">
    <b-container fluid>
      <heading :text="dictionary.title" />
      <b-row class="mt-5 justify-content-between">
        <b-col :cols="12" :lg="6" class="benefits-image text-center">
          <b-img
            :src="require(`~/assets/images/investors/who_we_r.png`)"
            alt="Loss Rates"
          />
        </b-col>
        <b-col :cols="12" :lg="6" class="mt-4 mt-lg-0 benefits-image">
          <p class="pb-3">{{ dictionary.lead1 }}</p>
          <p>{{ dictionary.lead2 }}</p>
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
      return this.$t(`pages.investors.whoWeAre`)
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
.benefits-image {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

img {
  width: 100%;
  border-radius: 5%;
}

@include media-breakpoint-down(lg) {
  img {
    width: 75%;
  }
}

@include media-breakpoint-down(sm) {
  img {
    width: 100%;
  }
}
</style>
