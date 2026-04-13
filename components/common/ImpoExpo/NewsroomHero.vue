<template>
  <page-section
    section-class="section-products-main section-main-hero mb-15rem"
    :class="[page, 'newsroom']"
  >
    <div class="position-relative newsroom-wrap">
      <div class="container">
        <b-row class="newsroom">
          <b-col :cols="12">
            <h1 class="newsroom-heading">
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
            <h3
              class="newsroom-subheading"
              v-if="dictionary.subtitle"
              v-html="dictionary.subtitle"
            />
          </b-col>
        </b-row>
      </div>
      <div class="position-absolute press-media-wrap">
        <div
          class="position-relative container"
          v-if="cardData && cardData.title"
        >
          <press-media-card
            :heading="cardData.title"
            :time="cardData.date"
            :readMoreLink="cardData.link || cardData.articleLink"
            :imageLink="
              cardData.imageLink && cardData.imageLink.fields
                ? cardData.imageLink.fields.file.url
                : undefined
            "
          />
          <share
            classes="position-absolute share-icons"
            :data="cardData"
            v-if="!mobile"
          />
        </div>
        <div class="position-relative container" v-if="loading">
          <div class="skeleton-box">
            <div class="skeleton-loader skeleton-heading"></div>
            <div class="skeleton-loader skeleton-heading"></div>
          </div>
        </div>
      </div>
    </div>
  </page-section>
</template>

<script>
import PageSection from '~/components/PageSection'
import JumbotronContainer from '~/components/JumbotronContainer'
import PartnerForm from '~/components/forms/PartnerForm'
import Share from '~/components/newsroom/Share.vue'
import PressMediaCard from '~/components/newsroom/pressMediaCard.vue'

export default {
  props: {
    page: {
      type: String,
      default: 'exporters'
    },
    cardData: {
      type: Object,
      default: () => {}
    },
    loading: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      locale: this.$i18n.locale,
      mobile: false,
      data: {}
    }
  },
  computed: {
    dictionary() {
      return this.$t(`pages.${this.page}.mainHero`)
    },
    isMx() {
      return this.$i18n.locale.indexOf('mx') > -1
    },
    dictionary1() {
      return this.$t(`pages.${this.page}.newsroomHero`)
    }
  },
  methods: {
    toggleQrCodeVisiblity(event) {
      if (!this.mobile) {
        event.preventDefault()
        this.qrCodeVisible = !this.qrCodeVisible
      }
    },
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true
      }
      return false
    }
  },
  mounted() {
    this.mobile = this.isMobile()
  },
  components: {
    PageSection,
    JumbotronContainer,
    PartnerForm,
    Share,
    PressMediaCard
  }
}

// watch: {
//       dictionary1 (value) {
//         console.log('dictionary1: ', value)
//       }
// },
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables';
@import '~bootstrap/scss/mixins';

.mb-15rem {
  margin-bottom: 15rem;
}

.share-icons {
  top: 1rem;
  left: -2rem;
  margin-top: auto;
  margin-bottom: auto;
  height: fit-content;
}

.press-media-wrap {
  left: 0;
  right: 0;
}

.skeleton-box {
  height: 200px;
  width: 100%;
  background: #fff;
  margin: auto;
  display: flex;
  flex-direction: row;
  border-radius: 5px;
}
.skeleton-loader {
  animation: skeleton-loading 1s infinite;
  background-color: #ccc;
  background-image: linear-gradient(90deg, #ccc, #fff, #ccc);
  background-size: 200%;
  height: 200px;
  margin-bottom: 5px;
  border-radius: 5px;
}

@keyframes skeleton-loading {
  0% {
    background-position: 200%;
  }
  100% {
    background-position: 0%;
  }
}

.skeleton-heading {
  width: 50%;
  height: 240px;
}
.newsroom-wrap {
  padding-bottom: 9.5rem;
}

.newsroom {
  background: $dark-blue;

  &-heading {
    margin-top: 8rem;
    font-size: 3rem;
    color: $white;
    font-weight: 400;
    padding-bottom: 1rem;
    margin-bottom: 0;
  }

  &-subheading {
    color: $white;
    font-weight: 400;
    font-size: 1.125rem;
    padding-bottom: 1rem;
    width: 70%;
    margin-bottom: 2.125rem;
  }
}

@include media-breakpoint-down(md) {
  .newsroom {
    &-heading {
      font-size: 2rem;
    }

    &-subheading {
      font-size: 1rem;
      padding-bottom: 1rem;
    }
  }
}

@include media-breakpoint-down(sm) {
  .mb-15rem {
    margin-bottom: 24rem;
  }

  .newsroom {
    &-heading {
      margin-top: 7rem;
    }

    &-subheading {
      width: 100%;
      margin-bottom: 0.75rem;
    }
  }
}

@include media-breakpoint-down(xs) {
  .newsroom {
    .heading {
      font-size: 1.5rem;
      margin-top: 0 !important;
    }
  }

  .mb-15rem {
    margin-bottom: 24rem;
  }
}

@media (max-width: 400px) {
  .mb-15rem {
    margin-bottom: 19rem;
  }
}
</style>
