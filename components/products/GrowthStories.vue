<template>
  <b-container class="growth-stories">
    <b-row>
      <b-col :class="page !== 'products' ? 'text-center text-lg-left' : ''">
        <heading :text="$t('pages.products.growthStories.title')" />
      </b-col>
    </b-row>
    <b-row>
      <b-col class="d-none d-lg-block">
        <p class="subtitle" v-if="!isUs">
          {{ $t('pages.products.growthStories.subTitle') }}
        </p>
      </b-col>
    </b-row>
    <b-row class="justify-content-center">
      <b-col :cols="12">
        <slick
          id="growth-slider"
          class="growth-slick"
          ref="slick"
          :options="slickOptions"
        >
          <div
            v-for="(story, index) in stories"
            :key="index"
            class="card-sas p-3 p-lg-4 text-center"
          >
            <b-row class="justify-content-center">
              <b-col
                :cols="12"
                :lg="isMx || isUs ? 10 : 7"
                class="d-flex flex-column justify-content-center"
              >
                <h5
                  :class="[
                    'story-company text-center',
                    !isMx && !isUs ? 'text-lg-left' : ''
                  ]"
                >
                  {{ story.company }}
                </h5>
                <p
                  :class="[
                    'story-exporter text-center',
                    !isMx && !isUs ? 'text-lg-left' : ''
                  ]"
                >
                  {{ story.resource }}
                </p>
                <div
                  v-if="!isMx"
                  class="d-flex d-lg-none justify-content-center growth-figures-container my-2"
                >
                  <div class="growth-figures">
                    {{ story.growthSubtitle }} {{ story.growthCurrency }}
                  </div>
                </div>
                <p :class="['story-content', isMx ? 'text-center' : '']">
                  {{ story.content }}
                </p>
                <div
                  :class="[
                    'story-author text-center',
                    !isMx && !isUs ? 'text-lg-left' : ''
                  ]"
                >
                  {{ story.author }}
                </div>
                <div
                  :class="[
                    'story-author-designation text-center',
                    !isMx && !isUs ? 'text-lg-left' : ''
                  ]"
                >
                  {{ story.authorDesignation }}
                </div>
              </b-col>
              <b-col
                v-if="!isMx && !isUs"
                :cols="12"
                :lg="5"
                class="d-flex flex-column justify-content-between align-items-center"
              >
                <div class="d-none d-lg-block growth-image-container py-3">
                  <b-img
                    class="growth-image"
                    :src="story.growthGraphImage"
                  ></b-img>
                </div>
                <div
                  class="d-none d-lg-flex justify-content-center growth-figures-container mt-3"
                >
                  <div class="growth-figures">
                    {{ story.growthSubtitle }} {{ story.growthCurrency }}
                  </div>
                </div>
              </b-col>
            </b-row>
          </div>
        </slick>
      </b-col>
    </b-row>
  </b-container>
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
        dots: false,
        arrows: true,
        infinite: true,
        prevArrow: `<a class="slick-arrow prev-arrow"></a>`,
        nextArrow: `<a class="slick-arrow next-arrow"></a>`,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              arrows: false,
              centerPadding: 0,
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    }
  },
  computed: {
    isUs() {
      return this.$i18n.locale.indexOf('us') > -1
    }
  },
  props: ['stories', 'isMx', 'page']
}
</script>
<style lang="scss" scoped>
@import '../../assets/scss/variables';
.growth-stories {
  margin-bottom: 4rem;

  h3 {
    color: $secondary;
  }

  .subtitle {
    color: $product-light-grey;
    margin-bottom: 2rem;
  }

  .growth-slick {
    border: solid 1px $product-shadow;
    box-shadow: 0 5px 10px 0 rgba(223, 223, 223, 0.5);
    border-radius: 5px;
  }

  .card-sas {
    border-radius: 5px;
    width: 100%;

    .story-company {
      text-align: start;
      font-size: 2rem;
      color: $primary;
      text-transform: uppercase;
      font-weight: bold;
    }

    .story-exporter {
      text-align: start;
      font-size: 1.25rem;
      font-weight: bold;
      color: $noble-blue-500;
    }

    .story-content {
      text-align: start;
      color: $noble-blue-500;
    }

    .story-author {
      text-align: start;
      color: $primary;
      font-weight: bold;
    }

    .story-author-designation {
      text-align: start;
      color: $primary;
    }

    .growth-image-container {
      flex: 4;
      .growth-image {
        width: 100%;
      }
    }

    .growth-figures-container {
      flex: 1;
      width: 100%;

      .growth-figures {
        padding: 1rem;
        max-width: 100%;
        color: $white;
        background: $product-blue-background;
      }
    }
  }

  .prev-arrow {
    border-right: 15px solid black;
  }

  .next-arrow {
    border-right: 15px solid black;
  }
}
</style>
