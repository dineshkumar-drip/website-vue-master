<template>
  <div
    class="impo-expo jumbotron-v2 text-white"
    id="page-jumbotron"
    :class="isBuyerFinance ? 'buyer-finance' : 'trade-finance'"
  >
    <b-container fluid>
      <b-row class="justify-content-center">
        <b-col>
          <div class="hero-content">
            <b-row>
              <b-col :cols="12" :lg="7" :xl="7">
                <h1 class="display-3">
                  {{ dictionary.title }}
                  <span class="text-primary"></span>
                </h1>
                <div class="desc">
                  <p class="lead text-white" v-html="dictionary.description" />
                </div>
                <div v-if="isIn && !isBuyerFinance">
                  <h5>
                    {{
                      $t('pages.landing.tradeFinance.jumbotron.partnersTitle')
                    }}
                  </h5>
                  <b-img-lazy
                    :src="
                      require(`~/assets/images/landing/common/plexconcil_logo.png`)
                    "
                    alt="PC"
                    class="partner-logo mr-4 d-inline-block"
                    :width="150"
                    :height="125"
                  />
                  <b-img-lazy
                    :src="
                      require(`~/assets/images/landing/common/fieo-logo-bw.png`)
                    "
                    alt="FIEO"
                    class="partner-logo d-inline-block"
                    :width="100"
                    :height="100"
                  />
                </div>
              </b-col>
              <b-col :cols="12" :lg="5" :xl="5">
                <div v-if="isBuyerFinance">
                  <finance-form />
                </div>
                <div v-else>
                  <apply-form border="none">
                    <template slot="form-title">
                      <h4 class="card-title">
                        {{ $t('pages.exporters.apply.form.title') }}
                      </h4>
                    </template>
                  </apply-form>
                </div>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ApplyForm from '~/components/forms/ApplyForm'
import FinanceForm from '~/components/importers/FinanceForm'

export default {
  data() {
    return {
      dictionary: this.isBuyerFinance
        ? this.$t('pages.landing.buyerFinance.jumbotron')
        : this.$t('pages.landing.tradeFinance.jumbotron')
    }
  },
  props: {
    isBuyerFinance: {
      type: Boolean,
      default: false
    },
    isCampaign: {
      type: Boolean,
      default: false
    }
  },
  components: {
    ApplyForm,
    FinanceForm
  },
  computed: {
    isIn() {
      return this.$i18n.locale.indexOf('in') > -1
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables';
@import '~bootstrap/scss/mixins';

.impo-expo {
  background-color: $dark-blue;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 90vh;
  position: relative;
  border-radius: 0;
  margin-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 4rem;
  padding-bottom: 3rem;
}
.display-3 {
  margin-top: 8rem;
  font-size: 4rem;
}
.lead {
  font-size: 20px;
  font-weight: 600;
}
h5 {
  font-size: 16px;
  font-weight: 400;
}

@include media-breakpoint-down(md) {
  .impo-expo {
    min-height: 150vh;
    // max-height: 0;
    padding-bottom: 2rem;
    background-position: 25%;
  }
  .hero-content {
    padding-left: 1rem;
  }
  .display-3 {
    font-size: 30px;
    margin-top: 3rem;
  }
  .lead {
    font-size: 1rem;
  }
}
</style>
