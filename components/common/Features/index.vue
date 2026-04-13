<template>
  <page-section :section-class="sectionClass">
    <b-container fluid>
      <b-row class="justify-content-center">
        <b-col :xl="10" :cols="12">
          <h4 class="intro-title title-slash">
            {{ $t(`pages.${contentKey}.features.title`) }}
          </h4>
          <b-row class="justify-content-center">
            <b-col
              md="6"
              sm="12"
              v-for="(item, index) in $t(
                `pages.${contentKey}.features.benefits`
              )"
              :key="index"
            >
              <feature-content
                :icon="item.icon"
                :title="
                  index === 0 && keyword != 'home'
                    ? item.keyTitle[keyword.replace(/ /g, '').toLowerCase()]
                    : item.title
                "
                :description="
                  index === 0 && keyword != 'home'
                    ? item.keyDescription[
                        keyword.replace(/ /g, '').toLowerCase()
                      ]
                    : item.description
                "
              />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </page-section>
</template>

<script>
import PageSection from '~/components/PageSection'
import FeatureContent from './FeatureContent'

export default {
  props: {
    keyword: {
      type: String,
      default: 'home'
    },
    featuresClass: {
      type: String,
      default: ''
    },
    contentKey: {
      type: String,
      default: 'newHome'
    }
  },
  components: {
    PageSection,
    FeatureContent
  },
  computed: {
    sectionClass() {
      return `section-features section-padded gray ${this.featuresClass || ''}`
    }
  }
}
</script>
