<template>
  <section class="m-3 p-3">
    <b-container>
      <b-row class="mb-4">
        <b-col class="text-center">
          <h3 class="h1 text-secondary">
            {{ $t('pages.gotrade.investors.title') }}
          </h3>
        </b-col>
      </b-row>
      <slick
        id="quote-slider"
        ref="slick"
        :options="slickOptions"
        class="press-slider text-center"
      >
        <div class="press-slide" v-for="(image, i) in partners" :key="i">
          <b-img
            :src="require(`@/assets/images/gotrade/investors/${image.slug}`)"
            :alt="image.alt"
            :height="image.height"
            :width="image.width || 'auto'"
            class="logo-tc img-fluid m-auto d-inline"
          ></b-img>
        </div>
      </slick>
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
        infinite: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 300,
        prevArrow: `<a class="slick-arrow prev-arrow"></a>`,
        nextArrow: `<a class="slick-arrow next-arrow"></a>`,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              arrows: false,
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      },
      partners: [
        {
          slug: 'sequoia.png',
          alt: 'Sequoia',
          height: 120,
          width: 150
        },
        {
          slug: 'accel.png',
          alt: 'accel',
          height: 35
        },
        {
          slug: 'svb.png',
          alt: 'svb',
          height: 15
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.logo-tc {
  max-height: 100px;
}
</style>
