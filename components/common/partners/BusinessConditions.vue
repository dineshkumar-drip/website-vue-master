<template>
  <page-section section-class="section-news">
    <b-container fluid>
      <heading :text="dictionary.title" center />
      <b-row class="mt-5">
        <b-col
          v-for="item in dictionary.items"
          :key="item"
          :md="4"
          class="feature-values d-flex align-items-center justify-content-center justify-content-md-start"
        >
          <b-img-lazy
            :src="require(`~/assets/images/partners/${item.icon}.svg`)"
            :alt="item.icon"
            width="32"
            height="32"
          />
          <span class="font-weight-bold text-secondary">{{ item.text }}</span>
        </b-col>
      </b-row>
    </b-container>
  </page-section>
</template>
<script>
import Heading from '~/components/common/ImpoExpo/Heading'
import PageSection from '../../PageSection'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  props: {
    comp: {
      type: String,
      default: 'feature'
    }
  },
  data() {
    return {
      dictionary: this.$t('pages.channelPartner.featuredPartners')
    }
  },
  components: {
    PageSection,
    Heading,
    FontAwesomeIcon
  }
}
</script>

<style lang="scss" scoped>
@import '~bootstrap/scss/mixins';
@import '~assets/scss/variables';
.feature-values {
  font-size: 16px;
  margin-bottom: 2rem;
  gap: 16px;
}

@media (max-width: 767px) {
  .feature-values {
    justify-content: flex-start !important;
  }
}
</style>
