<template>
  <page-section
    :section-class="isAboutPage ? 'section-awards-about' : ''"
    v-if="dictionary"
  >
    <b-container fluid>
      <heading :text="dictionary.title" center />
      <b-row class="align-items-center justify-content-center">
        <b-col
          class="p-4 text-center"
          v-for="(item, i) in dictionary.items"
          :key="i"
        >
          <b-img
            :src="require(`@/assets/images/awards/${item}`)"
            class="img-fluid awards-image"
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
  computed: {
    dictionary() {
      return this.$t(`pages.${this.page}.awards`)
    }
  },
  components: {
    PageSection,
    Heading
  }
}
</script>
<style scoped>
.awards-image {
  min-width: 120px;
  height: 100px;
  object-fit: contain;
}
</style>
