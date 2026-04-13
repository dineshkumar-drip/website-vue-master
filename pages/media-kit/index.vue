<template>
  <section class="impo-expo page-container">
    <newsroom-header page="mediaKitInside" :defaultLightHeader="true" />
    <news-content
      page="mediaKitInside"
      dictionary="pages.newsroom.mediaKitImages"
    />
    <cards
      page="mediaKitInside"
      dictionary="pages.newsroom.mediaKitInside"
      :imagesLink="ceosLink"
    />
    <news-banner dictionary="pages.newsroom.newsBanner" />
    <main-footer :isNewBranding="true" />
  </section>
</template>
<script>
import Cards from '~/components/newsroom/Cards.vue'
import NewsroomHeader from '~/components/newsroom/NewsroomHeader.vue'
import NewsContent from '~/components/mediaKit/NewsContent.vue'
import MainFooter from '~/components/footer/MainFooter.vue'
import NewsBanner from '~/components/mediaKit/NewsBanner.vue'
import { createClient } from '~/plugins/contentful.js'

export default {
  nuxtI18n: {
    paths: {
      en: '/media-kit',
      'en-in': '/media-kit',
      'en-us': '/media-kit'
    }
  },
  data() {
    return {
      title: this.$t('pages.newsroom.title'),
      description: this.$t('pages.channelPartner.description'),
      faqs: this.$t('pages.channelPartner.faqs.items'),
      ceosLink: []
    }
  },
  async mounted() {
    if (process.browser) {
      const locale = this.$i18n.locale
      const client = locale.indexOf('es') > -1 ? createClient() : createClient()

      const mediaKitContentTypeId = 'newsroomMediaKit'

      const mediaKitResults = await client.getEntries({
        content_type: mediaKitContentTypeId
      })

      let mediaKitEntries = mediaKitResults.items
        .map((i) => {
          return { ...i.fields, media: i.fields.media.map((m) => m.fields) }
        })
        .reverse()
      mediaKitEntries = mediaKitEntries.filter(
        (entry) => entry.title == "Ceo's Picture"
      )

      const ceosMedia = mediaKitEntries[0].media
      this.ceosLink = ceosMedia
    }
  },
  computed: {
    isIn() {
      return this.$i18n.locale === 'en-in'
    },
    isEnMx() {
      return this.$i18n.locale === 'en-mx'
    }
  },
  head() {
    return {
      needLineBreak: true,
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.description }
      ]
    }
  },
  components: {
    Cards,
    NewsroomHeader,
    NewsContent,
    MainFooter,
    NewsBanner
  }
}
</script>
