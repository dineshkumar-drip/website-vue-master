<template>
  <div
    :class="page === 'newLanding' ? 'bg-img' : ''"
    class="impo-expo jumbotron-v2 text-white"
    id="page-jumbotron"
  >
    <b-container fluid>
      <b-row class="justify-content-center">
        <b-col>
          <div class="hero-content">
            <b-row>
              <b-col :cols="12" :lg="7" :xl="7">
                <h1 class="display-3">
                  {{ dictionary.title }}
                  <span class="text-primary"></span>
                </h1>
                <p class="subtext">{{ dictionary.subtext }}</p>
                <div class="desc">
                  <p class="lead text-white desc-para">
                    {{ dictionary.description1 }}&#8203;
                    <span class="superscript">{{ dictionary.asterisk }}</span>
                    {{ dictionary.description2 }}
                  </p>
                </div>

                <b-btn
                  v-track-click
                  id="investors-jumbotron-cta"
                  variant="primary"
                  class="btn-lg banner-cta"
                  v-smooth-scroll="{ offset: -85 }"
                  @click="focusFormCard"
                >
                  {{ dictionary.getStarted }}
                  <font-awesome-icon
                    :icon="['fas', 'chevron-right']"
                    class="icon alt ml-2"
                  />
                </b-btn>
              </b-col>
              <b-col :cols="12" :lg="5" :xl="5">
                <div>
                  <!-- <apply-form border="none">
                    <template slot="form-title">
                      <h4 class="card-title">{{ $t('pages.exporters.apply.form.title') }}</h4>
                    </template>
</apply-form> -->
                  <contact-form :isHero="isHero" />
                </div>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ApplyForm from '~/components/forms/ApplyForm'
import FinanceForm from '~/components/importers/FinanceForm'
import ContactForm from '~/components/importers/2021/ContactForm'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  data() {
    return {
      dictionary: this.$t(`pages.${this.page}.jumbotron`),
      isHero: true
    }
  },
  props: {
    isBuyerFinance: {
      type: Boolean,
      default: false
    },
    isCampaign: {
      type: Boolean,
      default: false
    },
    page: {
      type: String
    }
  },
  components: {
    ApplyForm,
    FinanceForm,
    ContactForm,
    FontAwesomeIcon
  },
  methods: {
    focusFormCard() {
      const form = document.getElementById('page-form')
      form.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest'
      })
      document.getElementById('page-form').classList.add('animate')
      const t = setTimeout(() => {
        document.getElementById('page-form').classList.remove('animate')
        clearTimeout(t)
      }, 1000)
    }
  },
  computed: {
    isIn() {
      return this.$i18n.locale.indexOf('in') > -1
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables';
@import '~bootstrap/scss/mixins';

.impo-expo {
  background: linear-gradient(287.89deg, #0a2e57 -6.37%, #26b67f 164.09%);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-position-y: 70px;
  min-height: 64vh;
  position: relative;
  border-radius: 0;
  margin-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 4rem;
  padding-bottom: 3rem;
}

.impo-expo.bg-img {
  background: linear-gradient(
      287.89deg,
      rgba(10, 46, 87, 0.6) -6.37%,
      rgba(38, 182, 127, 0.6) 164.09%
    ),
    url('~/assets/images/landing/common/main-hero-background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-position-y: 70px;
  min-height: 64vh;
  position: relative;
  border-radius: 0;
  margin-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 4rem;
  padding-bottom: 3rem;
}

.btn-lg.banner-cta {
  font-size: 16px;
  font-weight: 700;
  padding: 16px 107px 16px 108px;
  gap: 8px;
  border-radius: 8px;
}

.superscript {
  vertical-align: super;
  font-size: 0.8em;
}

.banner-cta {
  text-transform: capitalize;
}

.display-3 {
  margin-bottom: 12px;
  margin-top: 8rem;
  font-size: 4rem;
}

.lead {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 32px;
}

.subtext {
  font-size: 32px;
  font-weight: 700;
  line-height: 43.65px;
  text-align: left;
  margin-bottom: 40px;
}

h5 {
  font-size: 16px;
  font-weight: 400;
}

.icon.alt.ml-2 {
  width: 7.41px;
  height: 12px;
}

span.asterisk {
  font-size: 16px;
}

@media screen and (max-width: 768px) {
  .impo-expo.bg-img {
    padding-bottom: 2rem;
    background: linear-gradient(
        287.89deg,
        rgba(10, 46, 87, 0.6) -6.37%,
        rgba(38, 182, 127, 0.6) 164.09%
      ),
      url('~/assets/images/landing/common/main-hero-bg-mobile.png');
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position-y: -100px;
    background-position: bottom;
    background-position-y: -150px;
  }
}

@media screen and (max-width: 668px) {
  .impo-expo.bg-img {
    background-position-y: -100px;
  }
}

@media screen and (max-width: 535px) {
  .impo-expo.bg-img {
    background-position-y: 0px;
  }
}

@include media-breakpoint-down(md) {
  .hero-content {
    padding-left: 1rem;
  }

  .display-3 {
    font-size: 30px;
    margin-top: 3rem;
  }

  .lead {
    font-size: 1rem;
  }
}
</style>
<style lang="scss">
.animate {
  animation-name: zoom;
  animation-duration: 1s;
  animation-iteration-count: 2;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
  -webkit-animation-name: zoom;
  -webkit-animation-duration: 1s;
  -webkit-animation-iteration-count: 2;
  -webkit-animation-timing-function: ease;
  -webkit-animation-fill-mode: forwards;
}

@keyframes zoom {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}

@-webkit-keyframes zoom {
  0% {
    -webkit-transform: scale(1);
  }

  50% {
    -webkit-transform: scale(1.1);
  }

  100% {
    -webkit-transform: scale(1);
  }
}
</style>
