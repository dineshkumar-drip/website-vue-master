<template>
  <page-section section-class="section-about-life">
    <b-container fluid class="life-at-drip">
      <heading
        class="heading"
        :text="$t('pages.about.lifeAtDrip.title')"
        center
      />
      <div class="py-5">
        <slick ref="slick" :options="slickOptions">
          <img
            v-for="(item, i) in $t('pages.about.lifeAtDrip.images')"
            :key="i"
            :src="require(`~/assets/images/about/${item}.png`)"
            alt="item"
          />
        </slick>
      </div>
    </b-container>
  </page-section>
</template>

<script>
import PageSection from '~/components/PageSection'
import Heading from '~/components/common/ImpoExpo/Heading'
import Slick from 'vue-slick'

export default {
  data() {
    return {
      slickOptions: {
        centerMode: true,
        centerPadding: '160px',
        slidesToShow: 1,
        dots: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              centerPadding: '60px',
              arrows: false,
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    }
  },
  components: {
    PageSection,
    Heading,
    Slick
  }
}
</script>

<style lang="scss">
/* the slides */
.life-at-drip {
  .slick-slide {
    margin: 0 -1rem;
    img {
      opacity: 0.5;
      transform: scale(0.85);
      transition: transform 0.3s ease-out;
    }
    &.slick-active {
      img {
        opacity: 1;
        transform: scale(1);
        transition: transform 0.3s ease-out;
      }
    }
  }
  .slick-dots {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    padding: 0;
    margin-bottom: 0;
    li {
      position: relative;
      margin: 0 1rem 0 0;
      button {
        visibility: hidden;
        padding: 0;
        margin: 0;
      }
      button:after {
        border: none;
        background-color: transparent;
        content: url('~/assets/images/slick/radio_button_unchecked.png');
        visibility: visible;
        position: absolute;
        left: 0;
        top: 0;
      }
      &.slick-active {
        button:after {
          content: url('~/assets/images/slick/radio_button_checked.png');
        }
      }
    }
  }
}
</style>
