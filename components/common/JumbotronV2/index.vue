<template>
  <div
    class="jumbotron jumbotron-v2 text-white"
    :class="[isGoTrade ? 'gotrade' : '']"
    id="page-jumbotron"
  >
    <b-container fluid>
      <b-row :class="['justify-content-center', isGoTrade ? 'mt-5' : '']">
        <b-col :cols="12" :lg="10">
          <div class="hero-section">
            <div class="hero-content">
              <b-row>
                <slot />
              </b-row>
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row v-if="isGoTrade">
        <features></features>
      </b-row>
    </b-container>
    <div class="partners" v-if="showPartners">
      <b-container fluid>
        <b-row class="justify-content-center">
          <b-col :cols="12" :lg="10">
            <h5>
              {{ $t('pages.landing.tradeFinance.jumbotron.partnersTitle') }}
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
              :src="require(`~/assets/images/landing/common/fieo-logo-bw.png`)"
              alt="FIEO"
              class="partner-logo d-inline-block"
              :width="100"
              :height="100"
            />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>
<script>
import Features from '~/components/gotrade/Features'
export default {
  props: {
    showPartners: {
      type: Boolean,
      default: false
    },
    isGoTrade: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Features
  }
}
</script>
