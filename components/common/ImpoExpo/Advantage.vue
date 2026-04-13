<template>
  <page-section section-class="section-advantage">
    <div class="inner-container">
      <b-row class="d-none">
        <b-col>
          <div class="d-flex justify-content-center section-subtext">
            {{ dictionary.subtext }}
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <section-heading :text="dictionary.title" />
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col
          :cols="12"
          :lg="6"
          class="benefits-image"
          order="1"
          :order-md="isImporter ? 2 : 1"
        >
          <template v-if="!isImporter">
            <template v-if="page === 'investors'">
              <b-img
                class="img-fluid"
                :src="require(`@/assets/images/exporters/new-advantage.png`)"
              />
            </template>
            <template v-else>
              <b-img
                class="img-fluid"
                :src="require(`@/assets/images/exporters/advantage.png`)"
              />
            </template>
          </template>
        </b-col>
        <b-col
          :cols="12"
          :lg="6"
          class="mobile-section d-flex align-items-center"
          order="2"
          :order-md="isImporter ? 1 : 2"
        >
          <b-row>
            <b-col
              :cols="12"
              :lg="isBuyerFinance ? 12 : 12"
              v-for="item in dictionary.items"
              :key="item.id"
            >
              <div class="right-side">
                <h3
                  class="pb-6+ headings drip-h3"
                  :class="[
                    isBuyerFinance ? 'mt-lg-5' : '',
                    isImporter ? 'font-weight-700' : ''
                  ]"
                >
                  {{ item.title }}
                </h3>
                <p>{{ item.desc }}</p>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
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
    isCampaign: {
      type: Boolean,
      default: false
    },
    isBuyerFinance: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    dictionary() {
      return this.$t(`pages.${this.page}.advantage`)
    },
    isImporter() {
      console.log(this.$route.path)
      return this.$route.path.includes('importer')
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
@import '~bootstrap/scss/mixins';
.benefits-image {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
.section-advantage {
  margin-top: 32px;
  .inner-container {
    max-width: 1440px;
    margin: auto;
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
  h3 {
    font-weight: 400;
    color: $dark-blue;
    font-size: 24px;
    margin: 0;
  }
  .section-subtext {
    font-size: 24px;
    font-weight: 500;
    color: $dark-blue;
    text-align: center;
    margin-bottom: 32px !important;
  }
}

@include media-breakpoint-down(md) {
  .section-advantage {
    .right-side {
      h3 {
        font-size: 16px;
      }
      padding-top: 1.25rem;
    }
  }

  .benefits-image {
    img {
      max-width: 75%;
    }
  }
}
</style>
