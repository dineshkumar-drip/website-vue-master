<template>
  <page-section section-class="section-capital">
    <b-container fluid >
      <heading :text="dictionary.howItWorks" v-if="isLandingPage" :class="{ 'mx-4 mx-md-5': page === 'advanceAgainstPO' }" />
      <heading :text="dictionary.title" v-else :class="{ 'mx-4 mx-md-5': page === 'advanceAgainstPO' }"/>
      <b-row align-h="between" :class="{ 'flex-row-reverse': page === 'advanceAgainstPO' }">
        <b-col class="col-lead text-center text-lg-left d-flex justify-content-center flex-column" :cols="12" :lg="6">
          <ul class="switch-list pt-4 pl-0">
            <li class="switcher mb-4" v-for="(item, i) in dictionary.items" :key="i" @click="changeActive(i)"
              :class="{ active: i === currentActive }">
              <div class="d-block d-lg-none">
                <b-img :src="require(`@/assets/images/${page}/switch/${isMx ? 'es-mx-' : isIn && i === 1 ? 'en-in-' : ''
                  }${i}.png`)
                  " class="w-100" />
              </div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.desc }}</p>
            </li>
          </ul>
          <div>
            <b-btn v-if="!isCampaign && !isBuyerFinance" variant="primary" :class="isLandingPage ? 'd-none' : ''"
              class="btn-cta text-transform-none" href="#page-form" v-smooth-scroll="{ offset: -85 }">{{ dictionary.cta
              }}</b-btn>
          </div>
        </b-col>
        <b-col :lg="6" :cols="12" align-self="center" align-h class="d-none d-lg-block">
          <div class="d-flex justify-content-center align-items-center">
            <b-img :src="require(`@/assets/images/${page}/switch/${isMx ? 'es-mx-' : isIn && currentActive === 1 ? 'en-in-' : ''
              }${currentActive}.png`)
              " :class="page === 'channelPartner' ? 'capital-image' : 'w-100'" />
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
    isCampaign: {
      type: Boolean,
      default: false
    },
    isBuyerFinance: {
      type: Boolean,
      default: false
    },
    page: {
      type: String,
      default: 'importers'
    },
    isLandingPage: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentActive: 0
    }
  },
  computed: {
    isUs() {
      return this.$i18n.locale.indexOf('us') > -1
    },
    isMx() {
      return this.$i18n.locale.indexOf('mx') > -1
    },
    isIn() {
      return this.$i18n.locale === 'en-in'
    },
    dictionary() {
      if (this.importers) {
        return this.$t('pages.importers.capital')
      } else if (this.isCampaign) {
        return this.$t('pages.landing.tradeFinance.capital')
      } else if (this.isBuyerFinance) {
        return this.$t('pages.landing.buyerFinance.capital')
      } else if (this.page === 'channelPartner') {
        return this.$t('pages.channelPartner.newCapital')
      } else if (this.page === 'advanceAgainstPO') {
        return this.$t('pages.advanceAgainstPO.capital')
      }
      return this.$t('pages.exporters.capital')
    }
  },
  methods: {
    changeActive(index) {
      this.currentActive = index
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

.section-capital {
  .switch-list {
    list-style: none;

    .switcher {
      cursor: pointer;
      font-weight: 400;
      border-left: 4px solid #a7a7a7;
      padding-left: 2rem;
      font-size: 1rem;
      opacity: 0.5;

      &.active {
        opacity: 1;
        color: $dark-blue;
        border-color: #32c286;
      }

      h3 {
        font-size: 1.75rem;
        font-weight: 400;
        margin: 0;
      }
    }
  }

  button {
    display: block;
    margin: 0 auto;
  }
}

@include media-breakpoint-down(md) {
  .section-capital {
    .switch-list {
      .switcher {
        cursor: default;
        text-align: center;
        border-left: 0;
        padding-left: 0;
        opacity: 1;
        color: $dark-blue;

        img {
          width: 60% !important;
        }

        h3 {
          font-size: 1.25rem;
          font-weight: 400;
        }
      }
    }
  }
}
</style>
