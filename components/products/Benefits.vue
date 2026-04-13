<template>
  <page-section section-class="section-benefits">
    <b-container>
      <b-row data-aos="fade-right">
        <b-col cols="12" lg="7">
          <div class="heading-1 display-3 mb-2">
            {{ $t('pages.home.benefits.title') }} <span class="slash"></span>
          </div>
          <div class="mb-5 section-subtitle" v-if="isHome">
            {{ $t('pages.home.benefits.desc') }}
          </div>
          <div class="mb-5 section-subtitle" v-else>
            {{ $t('pages.products.benefits.lead1') }} {{ keyword }}
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6" lg="5" sm="12" data-aos="fade-right">
          <div
            class="content-section"
            v-for="(item, index) in $t('pages.home.benefits.content')"
            :key="index"
          >
            <div class="d-flex">
              <div class="section-image">
                <b-img-lazy
                  :src="
                    require(`@/assets/images/common/benefits/${item.icon}.svg`)
                  "
                  :alt="item.title"
                  :width="75"
                />
              </div>
              <div class="section-image-content">
                <p class="lead">{{ item.title }}</p>
              </div>
            </div>
          </div>
        </b-col>

        <!-- <div class="col-sm-1"></div> -->

        <b-col md="6" lg="7" sm="12" class="bg-secondary">
          <div class="slash-quote">
            <div class="quote-main">
              <b-carousel
                id="carousel1"
                indicators
                :interval="4000"
                img-width="1024"
                img-height="600"
                data-aos="fade-left"
              >
                <b-carousel-slide
                  img-blank
                  v-for="(testimonial, index) in $t(
                    'pages.home.benefits.testimonials'
                  )"
                  :key="index"
                >
                  <p class="quote">{{ testimonial.desc }} &#8221;</p>
                  <p class="author">
                    <strong>{{ testimonial.exporter }}</strong
                    >,<br />{{ testimonial.location }}
                  </p>
                  <div class="testimonial-image">
                    <b-img-lazy
                      :src="
                        require(`@/assets/images/index/${testimonial.icon}.svg`)
                      "
                      :alt="testimonial.title"
                      :width="85"
                    />
                  </div>
                </b-carousel-slide>
              </b-carousel>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </page-section>
</template>

<script>
import PageSection from '~/components/PageSection'

export default {
  props: ['keyword'],
  computed: {
    isHome() {
      return this.keyword === 'home'
    }
  },
  components: {
    PageSection
  }
}
</script>
