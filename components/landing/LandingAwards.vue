<template>
  <page-section class="section-awards-about pb-0">
    <b-container fluid>
      <heading :text="dictionary.title" center />
      <b-row class="align-items-center justify-content-center">
        <b-col
          class="p-4 text-center"
          v-for="(item, i) in dictionary.items"
          :key="i"
          :cols="isMobile ? 3 : ''"
        >
          <b-img
            :src="require(`@/assets/images/awards/${item}`)"
            class="img-fluid"
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
  data() {
    return {
      isMobile: false
    }
  },
  computed: {
    dictionary() {
      return this.$t(`pages.newLanding.awards`)
    }
  },
  mounted() {
    this.isMobile = window.innerWidth <= 768
  },
  components: {
    PageSection,
    Heading
  }
}
</script>
