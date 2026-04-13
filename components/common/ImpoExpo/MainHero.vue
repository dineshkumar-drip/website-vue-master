<template>
  <page-section
    section-class="section-products-main section-main-hero"
    :class="[page, page === 'newsroom' ? 'bg-primary' : '']"
  >
    <template v-if="page === 'importers' && $i18n.locale === 'en-us'">
      <buyers-landing />
    </template>
    <template v-else-if="page !== 'newsroom'">
      <jumbotron-container
        class="d-flex align-items-lg-center landing"
        :class="[page, locale]"
      >
        <template slot="content">
          <div class="container-fluid">
            <!-- if channel partner -->
            <b-row v-if="page === 'channelPartner'">
              <b-col
                :cols="12"
                :lg="7"
                :xl="7"
                class="d-flex align-items-center content-wrapper"
              >
                <div class="pr-lg-5">
                  <h1 class="mt-0 heading">
                    <span>{{ dictionary.title }}</span>
                    <template v-if="dictionary.title1">
                      <br />
                      <span>{{ dictionary.title1 }}</span>
                    </template>
                    <span class="sub-heading" v-if="dictionary.title2">
                      <br />
                      {{ dictionary.title2 }}
                    </span>
                    <span v-if="dictionary.title3">
                      <br />{{ dictionary.title3 }}
                    </span>
                  </h1>
                  <h3 class="subtitle mt-4" v-if="dictionary.subtitle">
                    {{ dictionary.subtitle }}
                  </h3>
                  <h3 class="jumbotron-subheading">
                    <span
                      v-for="lead in dictionary.lead"
                      :key="lead.id"
                      class="d-lg-block d-inline"
                    >
                      {{ lead }}
                    </span>
                  </h3>
                  <b-btn
                    v-if="dictionary.getStarted"
                    v-track-click
                    id="product-jumbotron-cta"
                    variant="primary"
                    class="btn-lg btn-cta"
                    :class="isMx ? 'text-transform-none' : 'text-capitalize'"
                    href="#page-form"
                    v-smooth-scroll="{ offset: -85 }"
                  >
                    {{ dictionary.getStarted }}
                  </b-btn>
                </div>
              </b-col>
              <b-col :cols="12" :lg="5" :xl="5">
                <partner-form v-if="page === 'channelPartner'" type="still" />
              </b-col>
            </b-row>
            <!-- else  -->
            <b-row v-else>
              <b-col
                :cols="12"
                class="content-wrapper"
                :class="{ 'px-4 px-md-5': page === 'advanceAgainstPO' }"
              >
                <h1 class="mt-0 heading">
                  <span>{{ dictionary.title }}</span>
                  <span class="sub-heading" v-show="dictionary.title2"
                    ><br />{{ dictionary.title2 }}</span
                  >
                  <span v-show="dictionary.title3"
                    ><br />{{ dictionary.title3 }}</span
                  >
                </h1>
                <h3 class="subtitle" v-if="dictionary.subtitle">
                  {{ dictionary.subtitle }}
                </h3>
                <h3 class="jumbotron-subheading">
                  <span
                    v-for="lead in dictionary.lead"
                    :key="lead.id"
                    class="d-lg-block d-inline"
                  >
                    {{ lead }}
                  </span>
                </h3>
                <b-btn
                  v-if="dictionary.getStarted"
                  v-track-click
                  id="product-jumbotron-cta"
                  variant="primary"
                  class="btn-lg btn-cta mt-0 mt-lg-5"
                  :class="isMx ? 'text-transform-none' : 'text-capitalize'"
                  href="#page-form"
                  v-smooth-scroll="{ offset: -85 }"
                >
                  {{ dictionary.getStarted }}
                </b-btn>
              </b-col>
              <b-col :cols="12" class="img-wrapper">
                <b-img :src="bgImg" class="img-fluid" />
              </b-col>
            </b-row>
          </div>
        </template>
      </jumbotron-container>
      <div class="container position-relative d-none d-lg-block">
        <div class="numbers-box">
          <b-row align-h="center">
            <b-col :cols="10">
              <div class="bg-white shadow-sm p-3 rounded">
                <b-row class="text-center">
                  <b-col v-for="item in dictionary.tips" :key="item.id">
                    <p>{{ item.tagline }}</p>
                    <h3 class="drip-h2 font-weight-700 heading-color">
                      {{ item.heading }}
                    </h3>
                  </b-col>
                </b-row>
              </div>
            </b-col>
          </b-row>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="d-flex">
        <b-row class="bg-primary newsroom-body">
          <b-col :cols="12" md="7">
            <h1 class="mt-0 newsroom-heading">
              <span>{{ dictionary.title }}</span>
              <br />
              <span>{{ dictionary.title1 }}</span>
              <span v-show="dictionary.title2"
                ><br />{{ dictionary.title2 }}</span
              >
              <span v-show="dictionary.title3"
                ><br />{{ dictionary.title3 }}</span
              >
            </h1>
            <h3 class="newsroom-subheading" v-if="dictionary.subtitle">
              {{ dictionary.subtitle }}
            </h3>
            <b-btn
              v-if="dictionary.getStarted"
              v-track-click
              id="product-jumbotron-cta"
              class="btn-lg btn-cta btn-light"
              :class="isMx ? 'text-transform-none' : 'text-capitalize'"
              href="#media-kit"
              v-smooth-scroll="{ offset: -85 }"
            >
              {{ dictionary.getStarted }}
            </b-btn>
          </b-col>
          <b-col :cols="5" md="5">
            <div />
          </b-col>
        </b-row>
      </div>
    </template>
  </page-section>
</template>

<script>
import PageSection from '~/components/PageSection'
import JumbotronContainer from '~/components/JumbotronContainer'
import BuyersLanding from '~/components/importers/BuyersLanding'
import PartnerForm from '~/components/forms/PartnerForm'
export default {
  props: {
    page: {
      type: String,
      default: 'exporters'
    }
  },
  data() {
    return {
      isNavSticky: null,
      navAnchors: [
        'overview',
        'how-it-works',
        'why-drip-capital',
        'growth-stories',
        'faqs'
      ],
      locale: this.$i18n.locale
    }
  },
  computed: {
    dictionary() {
      return this.$t(`pages.${this.page}.mainHero`)
    },
    isMx() {
      return this.$i18n.locale.indexOf('mx') > -1
    },
    bgImg() {
      switch (this.page) {
        case 'tradex':
          return require('~/assets/images/mainHero/about_pg.png')
        case 'exporters':
          if (this.$i18n.locale === 'en') {
            return require('~/assets/images/mainHero/global_pg.png')
          } else if (this.$i18n.locale === 'es-mx') {
            return require('~/assets/images/mainHero/mexico_pg.png')
          }
          return require('~/assets/images/mainHero/indian_pg.png')
        case 'investors':
          return require('~/assets/images/mainHero/investors_pg.png')
        case 'importers':
          return require('~/assets/images/mainHero/usa_pg.png')
        case 'about':
          return require('~/assets/images/mainHero/about_pg.png')
        case 'advanceAgainstPO':
          return require('~/assets/images/mainHero/advance_against_po.png')
        case 'homePage':
          return require('~/assets/images/mainHero/homeImage.png')
        default:
          return require('~/assets/images/product/product-jumbotron-background.png')
      }
    }
  },
  components: {
    PageSection,
    JumbotronContainer,
    BuyersLanding,
    PartnerForm
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables';
@import '~bootstrap/scss/mixins';

.img-wrapper {
  display: none;
}

.product-content {
  color: $secondary;
  position: relative;
}

.section-main-hero {
  background-color: $bg-light-gray;
  padding-top: 4.25rem;

  .jumbotron {
    background-image: url('~/assets/images/product/product-jumbotron-background.png');
    &.landing {
      background-image: url('~/assets/images/mainHero/bg-ship-crop.png');
      background-size: 50%;
      height: 68vh;
    }
    background-color: transparent;
    background-position: bottom right;
    background-size: contain;
    background-repeat: no-repeat;
    min-height: 70vh;
    padding-left: 1rem;
    padding-right: 1rem;

    .heading {
      color: $dark-blue;
      font-size: 44px;
      font-weight: 700;
      // margin-right : 10% ;
    }

    .subtitle {
      color: $dark-blue;
      font-size: 1.5rem;
    }

    .jumbotron-subheading {
      color: $dark-blue;
      font-size: 1.25rem;
      font-size: 16px;
    }

    &.exporters {
      background-image: url('~/assets/images/mainHero/indian_pg.png');

      &.en,
      &.en-us {
        background-image: url('~/assets/images/mainHero/global_pg.png');
      }

      &.es-mx {
        background-image: url('~/assets/images/mainHero/mexico_pg.png');
      }
    }

    &.importers {
      background-image: url('~/assets/images/mainHero/usa_pg.png');
    }

    &.investors {
      background-image: url('~/assets/images/mainHero/investors_pg.png');
    }

    &.about {
      background-image: url('~/assets/images/mainHero/about_pg.png');
    }

    &.advanceAgainstPO {
      background-image: url('~/assets/images/mainHero/advance_against_po.png');
      background-position: 85% 100%;
      background-repeat: no-repeat;
      background-size: contain;
      margin-bottom: 0;
      padding-left: 1rem;
      padding-right: 1rem;
    }
    &.homePage {
      background-image: url('~/assets/images/mainHero/homeImage.png');
      background-position: 85% 100%;
      background-repeat: no-repeat;
      background-size: contain;
      margin-bottom: 0;
      padding-left: 1rem;
      padding-right: 1rem;
    }
    &.channelPartner {
      background: $dark-blue;
    }

    &.investors {
      .subtitle {
        color: $primary;
      }
    }
  }

  .numbers-box {
    position: absolute;
    width: 100%;
    top: -2rem;
    left: 0;
    right: 0;
  }

  .heading-color {
    color: $dark-blue;
    font-size: 1.75rem;
  }
}

.dark-background {
  background-color: $dark-blue;
}

.channelPartner {
  background: $dark-blue;

  .jumbotron {
    .heading {
      color: $dark-off-white;
      font-size: 3.625rem;
    }

    .sub-heading {
      font-size: 3.625rem;
      color: $primary;
    }

    .subtitle {
      color: $white;
      font-size: 1.25rem;
      font-weight: 400;
    }
  }
}

.newsroom {
  &-heading {
    font-size: 4rem;
    color: $white;
    font-weight: 600;
    padding-bottom: 1rem;
  }

  &-subheading {
    color: $white;
    font-weight: 400;
    font-size: 1.2rem;
    padding-bottom: 1rem;
    width: 70%;
  }

  &-body {
    padding: 5rem 5rem 7rem 5rem;
  }
}

@media (min-width: 1375px) and (max-width: 1920px) {
  .section-main-hero {
    .jumbotron {
      &.about {
        &.es-mx {
          background-size: 40em;
        }
      }
      &.exporters {
        background-size: 36em;

        &.en-in {
          background-size: contain;
        }

        &.es-mx {
          background-size: 34em;
        }
      }

      &.importers {
        background-size: 40em;
      }

      &.investors {
        background-size: 45em;
      }

      &.advanceAgainstPO {
        background-size: 45em;
      }

      &.homePage {
        background-size: 40em;
      }
    }
  }
}

@media (min-width: 1200px) and (max-width: 1375px) {
  .section-main-hero {
    .jumbotron {
      background-size: 30em;

      &.exporters {
        background-size: 36em;

        &.en-in {
          background-size: contain;
        }

        &.es-mx {
          background-size: 34em;
        }
      }

      &.importers {
        background-size: 40em;
      }

      &.investors {
        background-size: 45em;
      }

      &.advanceAgainstPO {
        background-size: 38em;
      }

      &.about {
        background-size: 35em;

        &.es-mx {
          background-size: 30em;
        }
      }
    }
  }
}

@include media-breakpoint-down(lg) {
  .section-main-hero {
    padding-top: 4rem;

    .jumbotron {
      min-height: 50vh;
      padding-top: 0;

      .heading {
        font-size: 44px;
      }

      &.exporters {
        background-size: 27em;

        &.en-in {
          background-size: contain;
        }

        &.es-mx {
          background-size: 21.5em;
        }
      }

      &.importers {
        background-size: contain;
      }

      &.investors {
        background-size: 30em;
      }

      &.advanceAgainstPO {
        background-size: 30em;
      }

      &.about {
        background-size: 21em;

        &.es-mx {
          background-size: 16em;
        }
      }
    }
  }

  .channelPartner {
    .jumbotron {
      .heading,
      .sub-heading {
        font-size: 44px;
      }
    }
  }
}

@include media-breakpoint-down(md) {
  .section-main-hero {
    padding-top: 4rem;
  }

  .img-wrapper {
    display: flex;
    justify-content: center;

    img {
      width: 75%;
      margin-top: 2em;
    }
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .section-products-main {
    .jumbotron {
      min-height: auto;
      padding-bottom: 0;
      background-image: none !important;

      .heading {
        font-size: 2rem;
        margin-top: 1rem !important;
      }
    }
  }

  .newsroom {
    &-heading {
      font-size: 2rem;
    }

    &-subheading {
      font-size: 1rem;
      padding-bottom: 1rem;
    }

    &-body {
      padding: 5rem 3rem 7rem 3rem;
    }
  }

  .channelPartner {
    .jumbotron {
      .sub-heading {
        font-size: 2rem;
      }

      .subtitle {
        font-size: 1rem;
      }
    }
  }
}

@include media-breakpoint-down(xs) {
  .section-products-main {
    .jumbotron {
      .heading {
        margin-top: 0 !important;
      }
    }
  }
}
</style>
