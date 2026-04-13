<template>
  <div class="leaders-container">
    <b-container fluid>
      <heading :text="dictionary.title" center class="title" />
      <slick
        ref="slick"
        :options="slickOptions"
        v-if="carouselItems.length > 0"
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
                class="d-block custom-image"
                :src="
                  require(`~/assets/images/exporters/${singleItem.icon_url}.png`)
                "
                fluid
              />
            </b-col>
          </b-row>
        </div>
      </slick>
    </b-container>
  </div>
</template>

<script>
import PageSection from '~/components/PageSection'
import Heading from '~/components/common/ImpoExpo/Heading'
import Slick from 'vue-slick'
import { chunk } from 'lodash'

export default {
  props: {
    importers: {
      type: Boolean,
      default: false
    },
    newsroom: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dictionary: {
        title: '',
        items: []
      },
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
    if (this.$i18n.locale === 'en-us') {
      this.dictionary = this.$t('leaders')
    } else {
      if (this.importers) {
        this.dictionary = this.$t('pages.importers.leaders')
      } else if (this.newsroom) {
        this.dictionary = this.$t('pages.pressmedia.leaders')
      } else {
        this.dictionary = this.$t('pages.exporters.leaders')
      }
    }
    this.carouselItems = chunk(
      this.dictionary.items || [],
      this.isMobile ? 1 : 5
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

.leaders-container {
  // Slick
  .slick-slider {
    margin-top: 3em;
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
