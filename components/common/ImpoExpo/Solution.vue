<template>
  <page-section section-class="section-solution">
    <b-container fluid>
      <b-row>
        <b-col
          :lg="5"
          class="col-lead d-flex flex-column justify-content-center"
        >
          <heading :text="dictionary.title" />
          <!-- //! Removing this 'class="d-none d-lg-block"' because it is not reflecting on mobile. -->
          <p v-html="dictionary.desc"></p>
        </b-col>
        <b-col :lg="5" :offset-lg="1">
          <div class="d-flex justify-content-center flex-column h-100">
            <b-img-lazy
              v-if="page === 'importers'"
              :src="require('~/assets/images/exporters/switch/1.png')"
              :alt="$t('pages.newHome.insights.imgAlt')"
              class="sol-img"
            />
            <template v-if="page === 'channelPartner'">
              <b-img-lazy
                :src="require('~/assets/images/exporters/advantage.png')"
                :alt="$t('pages.newHome.insights.imgAlt')"
                class="sol-img"
              />
            </template>
            <template v-else>
              <b-embed
                v-if="dictionary && dictionary.video"
                type="iframe"
                aspect="16by9"
                :src="dictionary.video"
                allowfullscreen
              ></b-embed>
            </template>
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
      dictionary: this.$t(`pages.${this.page}.solution`)
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

.section-solution {
  margin-top: 12rem;
  .sol-img {
    width: 100%;
    position: relative;
  }
}
@include media-breakpoint-down(md) {
  .section-solution {
    margin-top: 5rem;
  }
}
</style>
