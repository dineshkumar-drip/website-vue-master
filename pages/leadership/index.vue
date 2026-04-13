<template>
  <div>
    <section class="impo-expo exporters-container">
      <div class="bg-grey">
        <main-header :defaultLightHeader="true" />
        <div class="pt-5 container-fluid">
          <h1
            class="leadership-heading my-auto display-4 text-secondary"
            v-html="leadership.heading"
          ></h1>
        </div>
      </div>
      <div class="container-fluid mt-5 pt-5">
        <heading :text="leadership.section1.title" center />
        <div class="mt-4">
          <b-row class="justify-content-center">
            <b-col
              class="col-12 leadership-card-container"
              sm="6"
              :lg="isUs ? '5' : '4'"
              :xl="isUs ? '4' : '3'"
              v-for="(member, i) in members"
              :key="i"
            >
              <leadership-card
                :title="member.name"
                :subTitle="member.designation"
                :text="member.bio"
                :linkedInLink="member.linkedInUrl"
                :linkedInText="leadership.connect"
                :imgUrl="member.imgUrl"
              ></leadership-card>
            </b-col>
          </b-row>
        </div>
      </div>
    </section>
    <section class="impo-expo exporters-container">
      <map-globe :text="leadership.section2.title" isLeaderShip />
      <main-footer :isNewBranding="true" />
    </section>
  </div>
</template>
<script>
import MainHeader from '~/components/common/ImpoExpo/MainHeader'
import NewsContent from '~/components/mediaKit/NewsContent.vue'
import DripContent from '~/components/newsroom/DripContent.vue'
import MainFooter from '~/components/footer/MainFooter.vue'
import LeadershipCard from '../../components/leadershipCard'
import Heading from '~/components/common/ImpoExpo/Heading'
import MapGlobe from '~/components/about/2021/MapGlobe'

export default {
  nuxtI18n: {
    paths: {
      en: '/leadership',
      'en-in': '/leadership',
      'en-us': '/leadership',
      'es-mx': '/liderazgo'
    }
  },
  data() {
    return {
      title: this.$t('leadership').title,
      description: this.$t('leadership').description,
      leadership: this.$t('leadership'),
      members:
        this.$i18n.locale === 'en-us'
          ? this.$t('leadership.section1.membersUs')
          : this.$t('leadership.section1.members')
    }
  },
  computed: {
    isIn() {
      return this.$i18n.locale === 'en-in'
    },
    isEnMx() {
      return this.$i18n.locale === 'en-mx'
    },
    isUs() {
      return this.$i18n.locale === 'en-us'
    }
  },
  head() {
    const locales = [
      {
        name: 'en',
        path: '/leadership'
      },
      {
        name: 'en-us',
        path: '/en-us/leadership'
      },
      {
        name: 'en-in',
        path: '/en-in/leadership'
      },
      {
        name: 'es-mx',
        path: '/es-mx/liderazgo'
      }
    ]
    const links = []
    for (const locale of locales) {
      links.push({
        hid: `alternate-hreflang-${locale.name}`,
        rel: 'alternate',
        href: `${process.env.DRIP_WEB_HOST}${locale.path}`,
        hreflang: locale.name
      })
    }
    return {
      needLineBreak: true,
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.description }
      ],
      link: links
    }
  },
  components: {
    MainHeader,
    DripContent,
    NewsContent,
    MainFooter,
    LeadershipCard,
    Heading,
    MapGlobe
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables';
@import '~bootstrap/scss/mixins';

.bg-grey {
  background-color: $leadership-grey !important;
}

.leadership-heading {
  text-align: center;
  // margin-top: 8rem;
  padding-top: 10rem !important;
  padding-bottom: 7rem !important;
}

.svg-container {
  width: fit-content;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
}

.leadership-card-container {
  margin-bottom: 3rem;
}

@include media-breakpoint-down(md) {
  .leadership-heading {
    padding-top: 6rem !important;
    padding-bottom: 3rem !important;
  }
}

@include media-breakpoint-down(sm) {
  .leadership-heading {
    font-size: 1.8rem;
    text-align: center;
  }
}

@include media-breakpoint-down(xs) {
  .leadership-heading {
    font-size: 1.6rem;
    text-align: center;
  }
}
</style>
