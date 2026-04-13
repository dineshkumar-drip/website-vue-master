<template>
  <section class="section-offer" id="offer">
    <b-container class="divided-container" fluid>
      <b-row>
        <b-col :lg="4" :offset-lg="1" class="col-steps" :md="10" :offset-md="1">
          <h4 class="intro-title">
            {{ $t('landing.peloton.steps.title') }}
          </h4>
          <p>
            {{ $t('landing.peloton.steps.disclaimer') }}
          </p>
          <ul class="offer-steps list-unstyled">
            <li>
              <span class="offer-highlight text-white text-center">1</span>
              <div class="offer-text">
                <span>{{ $t('landing.peloton.steps.steps[0]') }}</span>
              </div>
            </li>
            <li>
              <span class="offer-highlight text-white text-center">2</span>
              <div class="offer-text">
                <span>{{ $t('landing.peloton.steps.steps[1]') }}</span>
              </div>
            </li>
            <li>
              <span class="offer-highlight text-white text-center">3</span>
              <div class="offer-text">
                <span>{{ $t('landing.peloton.steps.steps[2]') }}</span>
              </div>
            </li>
          </ul>
          <a
            v-track-click
            id="landing-offer-cta"
            href="#apply"
            class="btn btn-primary btn-lg offers-cta text-uppercase"
            v-smooth-scroll="{ offset: -85 }"
          >
            {{ $t('landing.peloton.steps.cta') }}
          </a>
        </b-col>
        <b-col
          :lg="4"
          class="divided secondary text-white col-testimonials"
          :offset-lg="2"
        >
          <slick ref="slick" :options="slickOptions" class="offer-slider">
            <div>
              <blockquote>
                {{ $t('landing.peloton.testimonials[0].quote') }}
                <cite
                  >{{ $t('landing.peloton.testimonials[0].name') }}
                  <span class="location">{{
                    $t('landing.peloton.testimonials[0].location')
                  }}</span></cite
                >
              </blockquote>
            </div>
            <div>
              <blockquote>
                {{ $t('landing.peloton.testimonials[1].quote') }}
                <cite
                  >{{ $t('landing.peloton.testimonials[1].name') }}
                  <span class="location">{{
                    $t('landing.peloton.testimonials[1].location')
                  }}</span></cite
                >
              </blockquote>
            </div>
            <div>
              <blockquote>
                {{ $t('landing.peloton.testimonials[2].quote') }}
                <cite
                  >{{ $t('landing.peloton.testimonials[2].name') }}
                  <span class="location">{{
                    $t('landing.peloton.testimonials[2].location')
                  }}</span></cite
                >
              </blockquote>
            </div>
          </slick>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
import Slick from 'vue-slick'

export default {
  components: {
    Slick
  },
  data() {
    return {
      slickOptions: {
        autoplay: true,
        autoplaySpeed: 10000,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false
      }
    }
  }
}
</script>
