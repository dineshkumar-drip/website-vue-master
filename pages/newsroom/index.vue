<template>
  <section class="impo-expo exporters-container">
    <main-header :defaultLightHeader="true" page="newsroom" />
    <newsroom-hero page="newsroom" :cardData="cardData" :loading="loading" />
    <feature-cards id="press-releases" />
    <feature-cards id="ceo-blogs" class="mt-5" />
    <feature-cards id="featured-stories" class="mt-5" />
    <feature-cards id="media-kit" class="mt-5" />
    <main-footer class="mt-5" :isNewBranding="true" />
  </section>
</template>

<script>
import MainHeader from '~/components/common/ImpoExpo/MainHeader'
import NewsroomHero from '~/components/common/ImpoExpo/NewsroomHero'
import MainFooter from '~/components/footer/MainFooter'
import Subscribe from '~/components/newsroom/Subscribe.vue'
import FeatureCards from '~/components/newsroom/FeatureCards.vue'
import { createClient } from '~/plugins/contentful.js'

export default {
  nuxtI18n: {
    locales: ['en-us', 'en-in']
  },
  data() {
    return {
      title: this.$t('pages.newsroom.title'),
      cardData: {},
      loading: true
    }
  },
  head() {
    return {
      needLineBreak: true,
      title: this.title
    }
  },
  async mounted() {
    const locale = this.$i18n.locale
    const client = locale.indexOf('es') > -1 ? createClient() : createClient()

    const fetauredStoriesResults = await client.getEntries({
      content_type: 'newsroomFeaturedStories',
      'fields.locale': locale === 'en-in' ? 'IN' : 'US',
      'fields.title[exists]': true,
      skip: 0,
      limit: 1,
      order: '-fields.formattedDate'
    })

    const featuredEntries = fetauredStoriesResults.items.map((i) => {
      return {
        ...i.fields
      }
    })

    this.cardData = featuredEntries[0]
      ? {
          ...featuredEntries[0],
          url: featuredEntries[0].link || featuredEntries[0].articleLink
        }
      : {}
    this.loading = false
  },
  components: {
    MainHeader,
    NewsroomHero,
    Subscribe,
    MainFooter,
    FeatureCards
  }
}
</script>
