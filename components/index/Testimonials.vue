<template>
  <page-section section-class="section-testimonials section-padded lozad">
    <b-container fluid>
      <b-row class="justify-content-center">
        <b-col :cols="12" :sm="10">
          <b-carousel
            id="home-carousel"
            indicators
            :interval="10000"
            img-width="1024"
            img-height="290"
            class="home-carousel"
          >
            <b-carousel-slide
              img-blank
              v-for="(testimonial, index) in $t('pages.newHome.testimonials')"
              :key="index"
            >
              <h4 class="title">{{ testimonial.item }}</h4>
              <p class="user">
                <strong>{{ testimonial.name }}</strong>
              </p>
              <p class="user-location">{{ testimonial.location }}</p>
            </b-carousel-slide>
          </b-carousel>
        </b-col>
      </b-row>
    </b-container>
  </page-section>
</template>

<script>
import PageSection from '~/components/PageSection'

export default {
  components: {
    PageSection
  }
}
</script>
