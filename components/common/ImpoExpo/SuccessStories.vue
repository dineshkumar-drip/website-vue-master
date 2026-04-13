<template>
  <page-section
    :section-class="`section-success-stories d-lg-block ${showInvestorsTestimonials}`"
  >
    <b-container fluid>
      <div class="text-center">
        <heading :text="dictionary.title" center class="title" />
      </div>
      <slick ref="slick" :options="slickOptions">
        <div
          class="d-flex custom-card"
          v-for="(obj, index) in dictionary.items"
          :index="index"
          :key="index"
        >
          <div class="img-container">
            <b-img
              class="img-fluid"
              :src="
                obj.icon
                  ? require(`~/assets/images/success/${obj.icon}`)
                  : require(`~/assets/images/success/${
                      index > 3 ? 0 : index
                    }.svg`)
              "
              :alt="obj.desc"
              :width="obj.icon ? '175' : 'auto'"
            />
          </div>
          <div class="body">
            <p class="title">{{ obj.desc }}</p>
            <p class="description">{{ obj.owner }}</p>
          </div>
        </div>
      </slick>
    </b-container>
  </page-section>
</template>

<script>
import PageSection from '~/components/PageSection'
import Heading from '~/components/common/ImpoExpo/Heading'
import Slick from 'vue-slick'

export default {
  props: {
    page: {
      type: String,
      default: 'exporters'
    }
  },
  data() {
    return {
      slickOptions: {
        centerMode: true,
        centerPadding: '250px',
        slidesToShow: 1,
        dots: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 1376,
            settings: {
              centerPadding: '180px'
            }
          },
          {
            breakpoint: 1200,
            settings: {
              centerPadding: '100px'
            }
          },
          {
            breakpoint: 992,
            settings: {
              centerMode: false
            }
          }
        ]
      }
    }
  },
  computed: {
    dictionary() {
      return this.$t(`pages.${this.page}.successStories`)
    },
    showInvestorsTestimonials() {
      return this.page !== 'investors' ? 'd-none' : ''
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
@import '~assets/scss/variables';
@import '~bootstrap/scss/mixins';

.section-success-stories {
  .custom-card {
    border: none;
    box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.15);
    background-color: $bg-light-gray;
    padding: 3rem;
    padding-left: 1rem;
    border-radius: 3px;
    .img-container {
      flex: 1;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-right: 1rem;
      .img-fluid {
        margin: 0 auto;
      }
    }
    .body {
      flex: 2;
      display: flex;
      justify-content: center;
      flex-direction: column;
      .description {
        color: $dark-blue;
      }
    }
  }
  // Slick
  .slick-slider {
    margin-top: 3em;
  }
  .slick-track {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .slick-slide {
    margin: 0 -1rem;
    .custom-card {
      transform: scale(0.85);
      transition: transform 0.3s ease-out;
    }
    &.slick-active {
      .custom-card {
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

@include media-breakpoint-down(md) {
  .values-container {
    .custom-card {
      flex-direction: column;
      .img-container {
        .img-fluid {
          width: 35%;
          margin: auto;
        }
      }
    }
  }
}

@include media-breakpoint-down(sm) {
  .values-container {
    .custom-card {
      .img-container {
        .img-fluid {
          width: 45%;
          margin: auto;
        }
      }
    }
  }
}

@include media-breakpoint-down(xs) {
  .values-container {
    .custom-card {
      .img-container {
        .img-fluid {
          width: 60%;
          margin: auto;
        }
      }
    }
  }
}
</style>
