<template>
  <div class="buyer-works-container">
    <div class="buyer-works-inner-container">
      <section-heading
        :text="$t('pages.importers.howItWorks.title')"
        :subtitle="$t('pages.importers.howItWorks.subtitle')"
      />
      <div class="process-card-container">
        <div class="center-line"></div>
        <div class="process-card" v-for="(proc, index) in process" :key="index">
          <img
            v-if="$i18n.locale.indexOf('us') > -1"
            :src="
              require(`~/assets/images/importers/howitworks/process-${
                index + 1
              }.svg`)
            "
            :alt="`process ${index + 1}`"
          />
          <img
            v-else
            :src="
              require(`~/assets/images/importers/howitworks/in-importers-process-${
                index + 1
              }.svg`)
            "
            :alt="`process ${index + 1}`"
          />
          <div class="card-content">
            <div class="card-number drip-body-small">{{ index + 1 }}</div>
            <div class="card-title drip-body font-weight-700">
              {{ proc.title }}
            </div>
            <div v-if="isRegion('in')" class="card-desc drip-h4">
              {{ proc.desc }}
            </div>
            <div v-else class="card-desc drip-h3">{{ proc.desc }}</div>
          </div>
        </div>
      </div>
      <div v-if="showProcessBenefits" class="process-sub-cards">
        <div>
          <img
            :src="
              require(`~/assets/images/importers/howitworks/no-ucc-filing.svg`)
            "
            alt=""
            width="24"
            height="24"
          />
          No UCC filing
        </div>
        <span class="slash-separator"></span>
        <div>
          <img
            :src="
              require(`~/assets/images/importers/howitworks/zero-impact-credit-score.svg`)
            "
            alt=""
            width="24"
            height="24"
          />
          No impact to your credit score
        </div>
      </div>
      <div v-else class="mt-4 mb-1"></div>
      <div>
        <div class="cta-button solid" @click="scrollToForm()">
          Learn More
          <font-awesome-icon
            :icon="['fas', 'chevron-right']"
            class="icon alt ml-3"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import SectionHeading from '../../common/ImpoExpo/SectionHeading'

export default {
  props: ['showProcessBenefits'],
  components: { FontAwesomeIcon, SectionHeading },
  data() {
    return {
      process: this.$t('pages.importers.howItWorks.items')
    }
  },
  methods: {
    scrollToForm() {
      document.querySelector('#page-form').scrollIntoView({
        behavior: 'smooth'
      })
    },
    isRegion(region) {
      return this.$i18n.locale.indexOf(region) > -1
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables';
@import '~bootstrap/scss/mixins';

.buyer-works-container {
  width: 100%;
  background: white;
  .buyer-works-inner-container {
    margin: auto;
    max-width: 1440px;
    background: white;

    @media screen and (min-width: $xl-laptop) {
      padding: 64px 108px;
    }

    @media screen and (max-width: $xl-laptop) {
      padding: 80px 108px;
      padding-bottom: 0px;
    }

    @media screen and (max-width: $large-laptop) {
      padding: 80px 28px;
      padding-bottom: 0px;
    }

    @media screen and (max-width: $laptop) {
      padding: 80px 24px;
      padding-bottom: 0px;
    }

    @media screen and (max-width: $tablet) {
      padding: 64px 24px;
      padding-bottom: 0px;
    }

    @media screen and (max-width: $mobile) {
      padding: 64px 20px;
      padding-bottom: 0px;
    }
    .cta-button {
      width: 240px;
      margin: right;
      @media screen and (max-width: $tablet) {
        margin: auto;
      }
    }
    .process-card-container {
      position: relative;
      display: flex;
      flex-wrap: nowrap;
      flex-direction: row;
      align-content: stretch;
      justify-content: unset;
      width: 100%;
      @media screen and (max-width: $tablet) {
        flex-direction: column;
        flex-wrap: wrap;
      }
      .center-line {
        position: absolute;
        z-index: 1;
        top: 50%;
        width: 90%;
        height: 4px;
        border-top: 2px dashed $wealthy-green-500;
        border-right: 0px;
        margin-bottom: 12px;
        @media screen and (max-width: $tablet) {
          top: 0%;
          left: 49%;
          border-top: 0px;
          border-right: 2px dashed $wealthy-green-500;
          width: 4px;
          height: 90%;
        }
      }
      .process-card {
        flex-grow: 1;
        flex-basis: 0;
        z-index: 3;
        padding: 12px;
        box-shadow: 0px 6px 12px 0px #0a2e5733;
        border-radius: 8px;
        margin-right: 24px;
        background: $white;
        @media screen and (max-width: $tablet) {
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 24px;
          width: 100%;
        }
        img {
          width: 100%;
        }
        .card-content {
          padding: 12px;
          .card-number {
            width: 24px;
            height: 24px;
            text-align: center;
            border-radius: 50%;
            background: #26b67f;
            color: white;
            margin-bottom: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .card-title {
            color: $noble-blue-500;
            margin-bottom: 4px;
          }
          .card-desc {
            color: $noble-blue-500;
          }
        }
      }
    }
    .process-sub-cards {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      width: 100%;
      margin: 32px 0;
      color: $noble-blue-500;
      @media screen and (max-width: $tablet) {
        flex-direction: column;
        margin: 24px 0;
      }
      img {
        margin-right: 8px;
        border-radius: 2px;
      }
      .slash-separator {
        color: $wealthy-green-500;
        margin: 0px 24px;
        background: $wealthy-green-500;
        width: 2px;
        height: 24px;
        @media screen and (max-width: $tablet) {
          flex-direction: column;
          width: 24px;
          height: 2px;
          margin: 12px 0px;
        }
      }
    }
  }
}
</style>
