<template>
  <div class="buyer-contact-container">
    <div class="buyer-contact-inner-container">
      <div class="inner-section">
        <b-container fluid>
          <b-row class="justify-content-between align-items-center">
            <b-col class="text-center text-lg-left mt-5" :lg="6" :cols="12">
            </b-col>
            <b-col class="text-left mt-0 mx-auto" :lg="6" :cols="12">
              <contact-form />
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
  </div>
</template>
<script>
import ContactForm from '~/components/importers/IN/ContactForm'

export default {
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
  margin-top: 160px;
  margin-bottom: 200px;
  @media screen and (max-width: $tablet) {
    margin: 64px 0;
    margin-bottom: 140px;
  }
  .buyer-contact-inner-container {
    margin: auto;
    max-width: 1440px;
    position: relative;
    .inner-section {
      padding-top: 80px;
      height: 420px;
      background: $noble-blue-500;
      background-image: url('~/assets/images/importers/background-stripes.svg');
      background-repeat: no-repeat;
      @media screen and (max-width: $tablet) {
        padding-top: 0px;
        height: 800px;
      }
      .color-white {
        color: $white;
      }
    }
  }
}
</style>
