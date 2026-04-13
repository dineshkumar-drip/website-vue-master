<template>
  <section class="news-section">
    <b-container>
      <b-row class="mb-5">
        <b-col>
          <heading :text="$t('pages.about.ourPartners')" />
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
            :src="require(`~/assets/images/product/partners/${image.slug}`)"
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
import Heading from '~/components/common/ImpoExpo/Heading'

export default {
  components: {
    Slick,
    Heading
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
        slidesToShow: this.isProductPage ? 4 : 3,
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
      }
    }
  },
  computed: {
    partners() {
      let indianPartners = [
        {
          slug: 'plexconcil_logo.png',
          alt: 'pc',
          height: 150,
          width: 175
        },
        {
          slug: 'chemexcil.png',
          alt: 'chemexcil',
          height: 35
        },
        {
          slug: 'fieo.png',
          alt: 'fieo',
          height: 15
        },
        {
          slug: 'svb.png',
          alt: 'svb',
          height: 35
        },
        {
          slug: 'wells-fargo.png',
          alt: 'wells-fargo',
          height: 35
        }
      ]
      let mexicanPartners = [
        {
          slug: 'svb.png',
          alt: 'svb',
          height: 35
        },
        {
          slug: 'wells-fargo.png',
          alt: 'wells-fargo',
          height: 35
        },
        {
          slug: 'anierm.png',
          alt: 'anierm',
          height: 35
        },
        {
          slug: 'cofoce.png',
          alt: 'cofoce',
          height: 35,
          width: 200
        },
        {
          slug: 'comce.jpg',
          alt: 'comce',
          height: 35
        }
      ]
      return this.$i18n.locale.indexOf('es') > -1
        ? mexicanPartners
        : indianPartners
    }
  }
}
</script>
<style lang="scss" scoped>
.logo-tc {
  max-height: 100px;
}
</style>
