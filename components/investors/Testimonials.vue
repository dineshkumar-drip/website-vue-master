<template>
  <b-container class="testimonials">
    <b-row>
      <b-col :cols="12" class="text-center text-lg-center">
        <h3 class="test-title">
          {{ $t('pages.investors.testimonials.title') }}
        </h3>
      </b-col>
    </b-row>
    <b-row>
      <b-col :cols="12">
        <page-section section-class="partner-success-section" class="light p-0">
          <b-row>
            <b-col
              :cols="12"
              :lg="4"
              class="text-box text-center mb-0"
              v-for="(item, index) in $t('pages.investors.testimonials.cards')"
              :key="index"
            >
              <div class="success-card text-left">
                <span class="content">{{ item.content }}</span>
                <p class="footer-text mt-1 mb-0">{{ item.footer }}</p>
              </div>
            </b-col>
          </b-row>
        </page-section>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import PageSection from '~/components/PageSection'
export default {
  components: {
    PageSection
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';

.testimonials {
  margin-bottom: 4rem;
  margin-top: 4rem;
}

.light {
  background: white;
  color: $secondary;
}
.success-card {
  min-height: 26rem;
  background-color: $investor-grey;
  padding: 2rem;
  position: relative;
}
.content {
  font-family: $investor-font-family;
  font-size: 1rem;
  line-height: 1.94;
  letter-spacing: 0.5px;
  color: $investor-black;
}
.footer-text {
  font-family: $investor-font-family;
  font-size: 1rem;
  font-style: italic;
  line-height: 1.94;
  letter-spacing: 0.5px;
  color: $investor-black;
  position: absolute;
  bottom: 5rem;
  right: 2rem;
}
</style>
