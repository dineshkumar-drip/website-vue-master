<template>
  <div class="buyer-landing-container">
    <div class="buyer-landing-background">
      <div class="inner-container">
        <div class="d-flex">
          <div class="flex-grow-1 d-flex flex-column">
            <h1 class="drip-h1">
              {{ $t(`pages.importers.mainHero.titlePrepend`) }}
              <br />
              {{ $t(`pages.importers.mainHero.titleAppend`) }}
            </h1>
            <h2 class="drip-h3">
              {{ $t(`pages.importers.mainHero.title2`) }}
            </h2>
            <div class="drip-h4 mb-1">
              {{ $t(`pages.importers.mainHero.lead[0]`) }}
            </div>
            <div class="drip-h4">
              {{ $t(`pages.importers.mainHero.lead[1]`) }}
            </div>
            <b-btn
              v-track-click
              id="product-jumbotron-cta"
              variant="primary"
              class="buyer-page-btn btn-lg btn-cta drip-body font-weight-700 ml-auto ml-md-0 mr-auto mr-md-auto"
              href="#page-form"
              v-smooth-scroll="{ offset: -85 }"
            >
              {{ $t(`pages.importers.mainHero.getStarted`) }}
              <font-awesome-icon :icon="'chevron-right'" class="ml-2" />
            </b-btn>
          </div>
          <div class="flex-grow-1 hide-tablet"></div>
        </div>
      </div>
      <div class="portal-background-mobile">
        <img
          class="bg-widget"
          :src="
            require(`~/assets/images/importers/landing/portal-background-mobile.svg`)
          "
        />
      </div>
      <div class="portal-background">
        <div class="relative">
          <img
            class="bg-widget"
            :src="
              require(`~/assets/images/importers/landing/portal-background-alternate.svg`)
            "
          />
          <img
            class="widget-1"
            :src="
              require(`~/assets/images/importers/landing/credit-limit-progress.svg`)
            "
            data-aos="zoom-in-left"
            data-aos-delay="0"
            data-aos-duration="500"
          />
          <img
            class="widget-2"
            :src="
              require(`~/assets/images/importers/landing/invoice-funded.svg`)
            "
            data-aos="zoom-in-right"
            data-aos-delay="300"
            data-aos-duration="500"
          />
          <!-- <img class="widget-3" :src="require(`~/assets/images/importers/landing/invoiced-table.svg`)" data-aos="zoom-in-down" data-aos-delay="600" data-aos-duration="500" /> -->
        </div>
      </div>
    </div>
    <div class="buyer-highlights">
      <div class="inner-container font-weight-700">
        <div
          class="block flex-grow-1 d-flex flex-column align-items-center flex-lg-row mb-4"
          v-for="(highlight, i) in $t(`pages.importers.mainHero.highlights`)"
          :key="i"
        >
          <img
            v-if="highlight && highlight.image"
            :src="
              require(`~/assets/images/importers/landing/${highlight.image}.svg`)
            "
            alt=""
            class="mx-auto ml-md-0 mr-md-3"
            width="48"
            height="48"
          />
          <div class="d-flex flex-column justify-content-center">
            <div class="drip-body">
              {{ highlight.tagline }}
            </div>
            <div class="drip-h4 mt-1">
              {{ highlight.heading }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="drip-h3 font-weight-700 buyer-caption">
      Elevate your borrowing power now with the industry's
      <br class="d-none d-md-block" />
      most competitive rates for an unsecured, no collateral credit line.
    </div>
  </div>
</template>
<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  components: {
    FontAwesomeIcon
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/scss/variables';

$xl-laptop: 2000px;
$large-laptop: 1440px;
$laptop: 1280px;
$large-laptop: 1024px;
$tablet: 780px;
$mobile: 360px;

.buyer-landing-container {
  width: 100%;
  background: white;
  .buyer-landing-background {
    margin: auto;
    max-width: 1440px;
    position: relative;
    background: white;
    min-height: 480px;
    height: 480px;
    color: $noble-blue-500;
    @media screen and (max-width: $tablet) {
      min-height: auto;
      height: auto;
    }

    .inner-container {
      width: 100%;
      @media screen and (min-width: $xl-laptop) {
        padding: 0 108px;
      }

      @media screen and (max-width: $xl-laptop) {
        padding: 0 108px;
      }

      @media screen and (max-width: $large-laptop) {
        padding: 0 28px;
      }

      @media screen and (max-width: $laptop) {
        padding: 0 24px;
      }

      @media screen and (max-width: $tablet) {
        padding: 0 24px;
        text-align: center;
        #product-jumbotron-cta {
          margin-left: auto !important;
        }
      }

      @media screen and (max-width: $mobile) {
        padding: 0 20px;
        text-align: center;
        #product-jumbotron-cta {
          margin-left: auto !important;
        }
      }

      .buyer-page-btn {
        height: 56px;
      }
      .drip-h1 {
        margin-top: 80px;
        margin-bottom: 4px;
      }

      .drip-h3 {
        margin-bottom: 60px;
        @media screen and (max-width: $mobile) {
          margin-bottom: 40px;
        }
      }
      .btn-cta {
        width: 266px;
        border-radius: 8px;
        margin-top: 32px;
        margin-bottom: 32px;
        text-transform: none;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 700;
      }
    }

    .portal-background {
      position: absolute;
      top: 0;
      right: 0;
      width: 50%;
      height: 100%;
      overflow: hidden;
      @media screen and (max-width: $tablet) {
        display: none;
      }

      .relative {
        position: relative;
        width: 100%;
        height: 100%;

        .bg-widget {
          position: absolute;
          right: 0;
          height: 100%;
          width: 100%;
          object-position: left;
          object-fit: cover;
        }

        .widget-1 {
          position: absolute;
          top: 224px;
          width: 310px;
        }

        .widget-2 {
          position: absolute;
          top: 224px;
          left: 320px;
          width: 302px;
        }

        .widget-3 {
          position: absolute;
          top: 323px;
          width: 680px;
        }
      }
    }
    .portal-background-mobile {
      margin-top: 20px;
      width: 100%;
      overflow: hidden;
      @media screen and (min-width: $tablet) {
        display: none;
      }
      .bg-widget {
        width: 100%;
      }
    }
  }

  .buyer-highlights {
    margin: 40px auto;
    margin-bottom: 96px;
    max-width: 1440px;
    position: relative;
    background: white;
    color: $noble-blue-500;
    .inner-container {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      width: 100%;
      @media screen and (min-width: $xl-laptop) {
        padding: 0 108px;
      }

      @media screen and (max-width: $xl-laptop) {
        padding: 0 108px;
      }

      @media screen and (max-width: $large-laptop) {
        padding: 0 28px;
      }

      @media screen and (max-width: $laptop) {
        padding: 0 24px;
      }

      @media screen and (max-width: $tablet) {
        padding: 0 24px;
        text-align: center;
        .block {
          width: 100%;
          img {
            width: 40px;
            height: 40px;
            margin-bottom: 8px;
          }
        }
      }

      @media screen and (max-width: $mobile) {
        padding: 0 20px;
        text-align: center;
        .block {
          width: 100%;
          img {
            width: 40px;
            height: 40px;
            margin-bottom: 8px;
          }
        }
      }
      .block {
        // @keyframes shine {
        //   from {
        //     -webkit-mask-image: linear-gradient(45deg,#000 25%,rgba(238, 14, 14, 0.8) 50%,#000 75%);
        //     mask-image: linear-gradient(45deg,#000 25%,rgba(87, 24, 10, 0.3) 50%,#000 75%);
        //     -webkit-mask-size: 800%;
        //     mask-size: 800%;
        //     -webkit-mask-position: 0;
        //     mask-position: 0;
        //   }
        //   to {
        //     transition: mask-position 2s ease,-webkit-mask-position 2s ease;
        //     -webkit-mask-position: 120%;
        //     mask-position: 120%;
        //     opacity: 1;
        //   }
        // }
        img {
          box-shadow: 0px 6px 12px 0px #0a2e5733;
          border-radius: 4px;
          // filter: drop-shadow(0px 6px 12px #0A2E5733);
          // box-shadow: 0px 6px 12px 0px #0A2E5733;
          // animation-name: shine;
          // animation-duration: 2s;
          // animation-delay: 1s;
          // animation-timing-function: linear;
          // animation-iteration-count: 3;
        }

        // img:hover {
        //   transition: mask-position 2s ease,-webkit-mask-position 2s ease;
        //   -webkit-mask-position: 120%;
        //   mask-position: 120%;
        //   opacity: 1;
        // }
      }
    }
  }

  .buyer-caption {
    text-align: center;
    padding: 42px 106px;
    width: 100%;
    font-weight: 700;
    color: $white;
    background: linear-gradient(
      270.58deg,
      $noble-blue-500 -5.76%,
      $wealthy-green-500 154.63%
    );
    @media screen and (max-width: $tablet) {
      padding: 42px 24px;
    }
  }
}
.hide-tablet {
  display: block;
  @media screen and (max-width: $tablet) {
    display: none;
  }
}
</style>
