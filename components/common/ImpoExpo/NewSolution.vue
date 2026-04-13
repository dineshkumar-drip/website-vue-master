<template>
  <page-section section-class="new-section-solution">
    <b-container fluid>
      <b-row>
        <b-col :md="6">
          <heading :text="dictionary.title" />
        </b-col>
      </b-row>
      <b-row class="mt-4">
        <b-col :lg="6" class="d-flex justify-content-center align-items-center">
          <b-img-lazy
            v-if="page === 'channelPartner'"
            :src="require('~/assets/images/exporters/advantage.png')"
            :alt="$t('pages.newHome.insights.imgAlt')"
            class="sol-img"
          />
        </b-col>
        <b-col :lg="6">
          <div
            class="d-flex justify-content-center align-items-center flex-column h-100"
          >
            <b-img-lazy
              v-if="page === 'importers'"
              :src="require('~/assets/images/exporters/switch/1.png')"
              :alt="$t('pages.newHome.insights.imgAlt')"
              class="sol-img"
            />
            <div v-html="dictionary.desc" />
          </div>
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
    importers: {
      type: Boolean,
      default: false
    },
    page: {
      type: String,
      default: 'importers'
    }
  },
  data() {
    return {
      dictionary: this.$t(`pages.${this.page}.newSolution`)
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

.new-section-solution {
  margin-top: 12rem;
  .sol-img {
    width: 100%;
    position: relative;
  }
}

@include media-breakpoint-down(md) {
  .new-section-solution {
    margin-top: 5rem;
  }
}
</style>
