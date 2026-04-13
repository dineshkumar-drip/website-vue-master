<template>
  <section>
    <b-container>
      <b-row>
        <b-col :cols="12" :lg="7" class="mb-5">
          <h3 class="about-section-title text-center text-lg-left">
            {{ $t('pages.about.whoWeAre.question') }}
          </h3>
          <div class="answer-text">
            {{ $t('pages.about.whoWeAre.answer') }}
          </div>
        </b-col>
      </b-row>
    </b-container>
    <section class="section-who-we-are text-white">
      <b-container>
        <b-row>
          <b-col>
            <h3 class="about-section-title text-center text-lg-left">
              {{ $t('pages.about.whoWeAre.founderTitle') }}
            </h3>
          </b-col>
        </b-row>
        <b-row
          v-for="(item, index) in $t('pages.about.whoWeAre.founders')"
          :key="index"
          class="founder-card"
          :class="index === 1 ? 'mt-5' : ''"
        >
          <b-col :cols="4" :class="index === 1 ? 'order-0 order-lg-1' : ''">
            <div
              class="founder-thumbnail-wrapper d-flex flex-column justify-content-end align-items-center"
            >
              <b-img-lazy
                :src="require(`~/assets/images/about/${item.title}.png`)"
                :alt="item.name"
                class="founder-thumbnail"
              />
            </div>
          </b-col>
          <b-col
            :cols="8"
            :class="
              index === 1
                ? 'd-flex flex-column align-items-lg-end order-1 order-lg-0'
                : ''
            "
          >
            <div class="founder-name-card mb-2 d-flex align-items-center">
              <div
                class="founder-name"
                :class="index === 1 ? 'order-0 order-lg-1' : ''"
              >
                {{ item.name }}
              </div>
              <a
                v-track-click
                :id="`about-${item.title}-linkedin`"
                :href="item.linkedinUrl"
                class="founder-linkedin text-white"
                :class="index === 1 ? 'order-1 order-lg-0 mx-3' : ' ml-3'"
                target="_blank"
              >
                <font-awesome-icon :icon="['fab', 'linkedin-in']" />
              </a>
            </div>
            <div class="founder-title mb-4">{{ item.designation }}</div>
            <div
              class="founder-desc d-none d-lg-block"
              :class="index === 1 ? 'text-right' : ''"
            >
              {{ item.desc }}
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <b-container class="life-at-drip">
      <b-row>
        <b-col>
          <h3 class="about-section-title text-center text-lg-left">
            {{ $t('pages.about.lifeAtDrip.title') }}
          </h3>
        </b-col>
      </b-row>
      <b-row>
        <b-col :cols="12">
          <slick
            id="life-at-drip-slider"
            class="life-at-drip-slick"
            ref="life-at-drip-slick"
            :options="slickOptions"
          >
            <div
              v-for="(item, index) in $t('pages.about.lifeAtDrip.images')"
              :key="index"
              class="life-drip-image-wrapper"
            >
              <b-img-lazy
                :src="require(`~/assets/images/about/${item}.png`)"
                :alt="item"
                class="life-drip-image"
              />
            </div>
          </slick>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import Slick from 'vue-slick'

export default {
  components: {
    FontAwesomeIcon,
    Slick
  },
  data() {
    return {
      slickOptions: {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 300,
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
  }
}
</script>
