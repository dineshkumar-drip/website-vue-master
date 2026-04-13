<template>
  <page-section section-class="section-about-leadership my-2">
    <b-container fluid>
      <heading :text="dictionary.title" center />
      <b-row align-h="center">
        <b-col>
          <div class="d-none d-lg-block">
            <b-row class="justify-content-between">
              <b-col :cols="4">
                <location-card :item="dictionary.items[0]" />
              </b-col>
              <b-col :cols="4">
                <location-card :item="dictionary.items[2]" />
              </b-col>
              <b-col :cols="4">
                <location-card :item="dictionary.items[1]" />
              </b-col>
            </b-row>
          </div>
          <div class="d-block d-lg-none">
            <div v-for="(item, i) in dictionary.items" :key="i">
              <location-card :item="item" :height="180" isMobile />
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </page-section>
</template>

<script>
import PageSection from '~/components/PageSection'
import Heading from '~/components/common/ImpoExpo/Heading'
import LocationCard from '~/components/about/2021/LocationCard.vue'

export default {
  data() {
    return {
      dictionary: this.$t('pages.about.locations')
    }
  },
  components: {
    PageSection,
    Heading,
    LocationCard
  }
}
</script>
