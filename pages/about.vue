<template>
  <section class="impo-expo exporters-container">
    <main-header :isAboutPage="true" />
    <main-hero page="about" />
    <why class="mt-8 mt-lg-10" />
    <map-globe />
    <!--    <leadership />-->
    <investors />
    <no-ssr>
      <values class="mt-5 mt-lg-9" />
    </no-ssr>
    <awards class="d-none d-lg-block mt-lg-9" :page="page" is-about-page />
    <no-ssr>
      <life class="mt-5 mt-lg-9" />
    </no-ssr>
    <locations class="mt-5" />
    <news class="mt-5 mt-lg-9" />
    <main-footer class="mt-5 mt-lg-9" :isNewBranding="true" />
  </section>
</template>

<script>
import MainHeader from '~/components/common/ImpoExpo/MainHeader'
import MainHero from '~/components/common/ImpoExpo/MainHero'
import MainFooter from '~/components/footer/MainFooter'
import News from '~/components/common/ImpoExpo/News'
import Why from '~/components/about/2021/Why'
import WhoWeAre from '~/components/about/WhoWeAre'
import MapGlobe from '~/components/about/2021/MapGlobe'
// import Leadership from '~/components/about/2021/Leadership'
import Investors from '~/components/about/2021/Investors'
import Locations from '~/components/about/2021/Locations'
import Awards from '~/components/common/Awards'

export default {
  data() {
    return {
      title: this.$t('pages.about.title'),
      description: this.$t('pages.about.description'),
      page: this.$i18n.locale === 'en-us' ? 'importers' : 'exporters'
    }
  },
  computed: {
    hreflangs() {
      return [
        {
          hid: `alternate-hreflang-en`,
          rel: 'alternate',
          href: 'https://www.dripcapital.com/about',
          hreflang: 'en'
        },
        {
          hid: `alternate-hreflang-es-mx`,
          rel: 'alternate',
          href: 'https://www.dripcapital.com/es-mx/about',
          hreflang: 'es-mx'
        },
        {
          hid: `alternate-hreflang-en-in`,
          rel: 'alternate',
          href: 'https://www.dripcapital.com/en-in/about',
          hreflang: 'en-in'
        },
        {
          hid: `alternate-hreflang-en-us`,
          rel: 'alternate',
          href: 'https://www.dripcapital.com/en-us/about',
          hreflang: 'en-us'
        }
      ]
    }
  },
  head() {
    return {
      needLineBreak: true,
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.description }
      ],
      links: [...this.hreflangs]
    }
  },
  components: {
    MainHeader,
    MainHero,
    MainFooter,
    News,
    Why,
    WhoWeAre,
    Values: () => import('~/components/about/2021/Values'),
    Life: () => import('~/components/about/2021/Life'),
    MapGlobe,
    // Leadership,
    Investors,
    Locations,
    Awards
  }
}
</script>
