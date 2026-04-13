<template>
  <page-section
    id="impo-expo-conclusion"
    section-class="section-conclusion section-home"
  >
    <b-container>
      <hr class="bg-dark-gray" />
      <b-row class="justify-content-between align-items-center mt-5">
        <b-col :md="5" :cols="12">
          <heading :text="dictionary.title" />
        </b-col>
        <b-col class="text-md-left text-center mt-4 mt-md-0" :md="6" :cols="12">
          <div>
            <p class="mb-0" v-for="lead in dictionary.leads" :key="lead.id">
              {{ lead }}
            </p>
            <b-btn
              variant="primary"
              :to="localePath('partners')"
              class="btn-cta mt-4"
              :class="isMx ? 'text-transform-none' : 'text-capitalize'"
              >{{ dictionary.cta }}</b-btn
            >
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
    }
  },
  data() {
    return {
      dictionary: this.importers
        ? this.$t('pages.importers.conclusion')
        : this.$t('pages.exporters.conclusion')
    }
  },
  computed: {
    isMx() {
      return this.$i18n.locale.indexOf('mx') > -1
    }
  },
  components: {
    PageSection,
    Heading
  }
}
</script>

<style lang="scss" scoped>
@import '~bootstrap/scss/mixins';
@import '~assets/scss/variables';

.section-conclusion {
  background: white;
  padding-bottom: 5rem;
}
@include media-breakpoint-down(md) {
  .section-conclusion {
    padding-top: 2rem;
  }
}
</style>
