<template>
  <page-section section-class="section-about-investors">
    <b-container fluid :id="page === 'newLanding' ? 'investor-container' : ''">
      <heading
        center
        :text="dictionary.title"
        :class="isLandingPage ? 'mb-24' : ''"
      />
      <div
        v-if="isMobile && isLandingPage && carouselItems.length > 0"
        class="investor-section"
      >
        <div
          v-for="(item, index) in carouselItems"
          :key="index"
          class="logo-wrapper"
        >
          <div
            v-for="(singleItem, itemIdx) in item"
            :key="`key-${itemIdx}`"
            class="logo-item"
          >
            <template v-if="singleItem.link">
              <a
                :href="singleItem.link"
                target="_blank"
                :class="isLandingPage ? 'no-pointer' : ''"
              >
                <img
                  class="logo-img"
                  :src="require(`~/assets/images/investors/${singleItem}.png`)"
                />
              </a>
            </template>
            <template v-else>
              <img
                class="logo-img"
                :src="require(`~/assets/images/investors/${singleItem}.png`)"
              />
            </template>
          </div>
        </div>
      </div>
      <slick
        ref="slick"
        :options="slickOptions"
        v-if="carouselItems.length > 0 && !isMobile"
        :class="isLandingPage ? 'mt-0 mb-100' : ''"
      >
        <div v-for="(item, index) in carouselItems" :key="index">
          <b-row
            class="align-items-center carousel-img-container"
            :class="
              isMobile ? 'justify-content-center' : 'justify-content-around'
            "
          >
            <b-col
              :cols="isMobile ? 12 : 2"
              v-for="(singleItem, itemIdx) in item"
              :key="`key-${itemIdx}`"
            >
              <b-img
                :class="
                  page === 'newLanding' ? 'd-block ' : 'd-block custom-image'
                "
                :src="require(`~/assets/images/investors/${singleItem}.png`)"
                fluid
                v-if="page === 'newLanding'"
              />
              <b-img
                class="d-block custom-image"
                :src="
                  require(`~/assets/images/about/investors/${singleItem}.svg`)
                "
                fluid
                v-else
              />
            </b-col>
          </b-row>
        </div>
      </slick>
    </b-container>
  </page-section>
</template>

<script>
import PageSection from '~/components/PageSection'
import Heading from '~/components/common/ImpoExpo/Heading'
import Slick from 'vue-slick'
import { chunk } from 'lodash'

export default {
  props: {
    page: {
      type: String,
      default: 'about'
    },
    isLandingPage: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dictionary: this.$t(`pages.${this.page}.investors`),
      carouselItems: [],
      isMobile: false,
      slickOptions: {
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        dots: false,
        arrows: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              dots: true
            }
          }
        ]
      }
    }
  },
  mounted() {
    this.isMobile = window.innerWidth <= 768
    this.carouselItems = chunk(
      this.dictionary.items || [],
      this.isMobile ? 1 : 7
    )
  },
  components: {
    PageSection,
    Heading,
    Slick
  }
}
</script>

<style lang="scss">
@import '~assets/scss/variables';
@import '~bootstrap/scss/mixins';

.mb-100 {
  margin-bottom: 100px !important;
}

.mb-24 {
  margin-bottom: 24px;
}

#investor-container {
  padding: 0 3rem !important;
}

.investor-section {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.investor-section .logo-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; /* Adjust spacing as needed */
}

.investor-section .logo-item {
  flex: 1 1 calc(33.33% - 20px); /* 3 items per row with gap */
  max-width: calc(33.33% - 20px);
  box-sizing: border-box;
  display: flex;
  justify-content: center;
}

.investor-section .custom-image {
  max-width: 100%;
  height: auto;
}

img.logo-img {
  max-height: 38px;
}

@media (max-width: 600px) {
  .investor-section .logo-item {
    flex: 1 1 calc(50% - 20px); /* 2 items per row with gap */
    max-width: calc(50% - 20px);
  }
}

.section-about-investors {
  .investor-section {
    margin-bottom: 40px;
  }

  // Slick
  .slick-slider {
    margin: 5em 0 3em 0;
  }
  .slick-track {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .slick-slide {
    margin: 0 -1rem;
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
