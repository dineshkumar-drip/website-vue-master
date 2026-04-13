<template>
  <div class="buyer-contact-container">
    <div class="buyer-contact-inner-container">
      <div :class="[isLandingPage ? 'landing-page' : 'inner-section']">
        <b-container fluid>
          <b-row class="justify-content-between align-items-center">
            <b-col class="text-center text-lg-left mt-5" :lg="6" :cols="12">
              <div
                class="buyer-title drip-h2 font-weight-700 mt-5 mt-lg-0"
                v-if="isLandingPage"
              >
                <p>
                  We do upfront payment to your vendor.<br />
                  You pay Drip up to 120 days later.
                </p>
                <br />
                Get Started Now!
              </div>
              <div
                class="buyer-title drip-h2 font-weight-700 mt-5 mt-lg-0"
                v-else
              >
                Unlock your business growth <br />
                with instant cashflow
              </div>
            </b-col>
            <b-col class="steven text-left mt-0 mx-auto" :lg="6" :cols="12">
              <contact-form
                :changeTitle="changeTitle"
                :isLandingPage="isLandingPage"
              />
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
  </div>
</template>
<script>
import ContactForm from '~/components/importers/2021/ContactForm'

export default {
  props: {
    isLandingPage: {
      type: Boolean,
      default: false
    },
    changeTitle: {
      type: Boolean,
      default: false
    }
  },
  components: {
    ContactForm
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/scss/variables';

.buyer-contact-container {
  width: 100%;
  background: $noble-blue-500;
  margin: 100px 0;
  @media screen and (max-width: $tablet) {
    margin: 64px 0;
  }
  .buyer-contact-inner-container {
    margin: auto;
    max-width: 1440px;
    position: relative;
    min-width: 100%;
    .landing-page {
      padding-top: 83px;
      height: 420px;
      background: linear-gradient(287.89deg, #0a2e57 -6.37%, #26b67f 164.09%);
      @media screen and (max-width: 991px) {
        padding-top: 0px;
        height: 800px;
      }
      .buyer-title {
        color: $white;
      }
    }
    .inner-section {
      padding-top: 150px;
      height: 600px;
      background: $noble-blue-500;
      background-image: url('~/assets/images/importers/background-stripes.svg');
      background-repeat: no-repeat;
      @media screen and (max-width: $tablet) {
        padding-top: 0px;
        height: 800px;
      }
      .buyer-title {
        color: $white;
      }
    }
  }
}
</style>
