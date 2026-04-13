<template>
  <page-section section-class="section-news">
    <div class="news-container">
      <b-container :fluid="!isProduct">
        <heading
          :text="dictionary.title"
          :center="!isProduct"
          class="title"
          :class="isLandingPage ? 'mb-24' : ''"
        />
        <div
          v-if="isMobile && isLandingPage && carouselItems.length > 0"
          class="news-section"
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
                    :src="
                      require(`~/assets/images/exporters/${singleItem.icon_url}.png`)
                    "
                  />
                </a>
              </template>
              <template v-else>
                <img
                  class="logo-img"
                  :src="
                    require(`~/assets/images/exporters/${singleItem.icon_url}.png`)
                  "
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
                <template v-if="singleItem.link">
                  <a
                    :href="singleItem.link"
                    target="_blank"
                    :class="isLandingPage ? 'no-pointer' : ''"
                  >
                    <b-img
                      class="d-block custom-image"
                      :src="
                        require(`~/assets/images/exporters/${singleItem.icon_url}.png`)
                      "
                      fluid
                    />
                  </a>
                </template>
                <template v-else>
                  <b-img
                    class="d-block custom-image"
                    :src="
                      require(`~/assets/images/exporters/${singleItem.icon_url}.png`)
                    "
                    fluid
                  />
                </template>
              </b-col>
            </b-row>
          </div>
        </slick>
      </b-container>
    </div>
  </page-section>
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
    isCampaign: {
      type: Boolean,
      default: false
    },
    isProduct: {
      type: Boolean,
      default: false
    },
    page: {
      type: String,
      default: 'importers'
    },
    isLandingPage: {
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
    if (this.page == 'channelPartner') {
      this.dictionary = this.$t('pages.channelPartner.news')
    } else if (this.isCampaign) {
      this.dictionary = this.$t('pages.landing.tradeFinance.news')
    } else if (this.isLandingPage) {
      this.dictionary = this.$t('pages.newLanding.news')
    } else if (
      this.$i18n.locale === 'en' ||
      this.$i18n.locale === 'en-in' ||
      this.$i18n.locale === 'en-us'
    ) {
      this.dictionary = this.$t('news')
    } else {
      this.dictionary = this.$t('common.news')
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

.mb-100 {
  margin-bottom: 100px !important;
}

.mb-24 {
  margin-bottom: 24px;
}

.no-pointer {
  pointer-events: none;
}

.news-section {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.news-section .logo-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; /* Adjust spacing as needed */
}

.news-section .logo-item {
  flex: 1 1 calc(33.33% - 20px); /* 3 items per row with gap */
  max-width: calc(33.33% - 20px);
  box-sizing: border-box;
  display: flex;
  justify-content: center;
}

.news-section .custom-image {
  max-width: 100%;
  height: auto;
}

img.logo-img {
  max-height: 38px;
}

@media (max-width: 600px) {
  .news-section .logo-item {
    flex: 1 1 calc(50% - 20px); /* 2 items per row with gap */
    max-width: calc(50% - 20px);
  }
}

.news-container {
  .news-section {
    margin-bottom: 3em;
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
