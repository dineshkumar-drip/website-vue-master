<template>
  <section class="impo-expo exporters-container" v-if="featuredStories">
    <main-header :defaultLightHeader="true" />
    <b-container class="mt-5 d-flex pb-5">
      <div class="share-wrapper mt-5 py-5 pr-3">
        <share
          class="pt-5 position-sticky top-5"
          :data="{ title: featuredStories.title, url: shareUrl }"
        />
      </div>
      <div>
        <h1 class="heading">{{ featuredStories.title }}</h1>
        <drip-content
          :content="featuredStories.content"
          :city="featuredStories.city"
          :date="featuredStories.date"
        />
      </div>
    </b-container>

    <!-- Share icon on mobile -->
    <b-btn
      @click="showShareModal = !showShareModal"
      variant="transparent"
      class="share-icon-wrapper"
      :style="{ bottom: `${isGlobalOrIn ? '5rem' : '10px'}` }"
    >
      <no-ssr>
        <font-awesome-icon class="share-icon" :icon="['fa', 'share']" />
      </no-ssr>
    </b-btn>
    <b-modal
      no-fade
      hide-footer
      title="Share"
      class="share-modal"
      v-model="showShareModal"
    >
      <share
        :isMobile="true"
        classes="d-flex justify-content-between pb-4"
        :data="{ title: featuredStories.title, url: shareUrl }"
      />
    </b-modal>
    <main-footer :isNewBranding="true" />
  </section>
</template>
<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import MainHeader from '~/components/common/ImpoExpo/MainHeader'
import NewsContent from '~/components/mediaKit/NewsContent.vue'
import DripContent from '~/components/newsroom/DripContent.vue'
import MainFooter from '~/components/footer/MainFooter.vue'
import Share from '~/components/newsroom/Share.vue'
import { createClient } from '~/plugins/contentful.js'
import moment from 'moment'

export default {
  nuxtI18n: {
    locales: ['en-us', 'en-in']
  },
  data() {
    return {
      title: this.$t('pages.newsroom.title'),
      description: this.$t('pages.channelPartner.description'),
      faqs: this.$t('pages.channelPartner.faqs.items'),
      featuredStories: [],
      shareUrl: '',
      showShareModal: false,
      publishedDateIso: '',
      modifiedDateIso: ''
    }
  },
  computed: {
    isIn() {
      return this.$i18n.locale === 'en-in'
    },
    isEnMx() {
      return this.$i18n.locale === 'en-mx'
    },
    isGlobalOrIn() {
      return this.$i18n.locale === 'en' || this.$i18n.locale === 'en-in'
    }
  },
  head() {
    const canonicalUrl = `${
      process.env.DRIP_WEB_HOST || 'https://www.dripcapital.com'
    }${this.$route.path}`
    const pageTitle =
      this.featuredStories && this.featuredStories.title
        ? this.featuredStories.title
        : this.title
    return {
      needLineBreak: true,
      title: pageTitle,
      meta: [
        { hid: 'description', name: 'description', content: this.description }
      ],
      script: [
        {
          hid: 'ldjson-newsarticle',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'NewsArticle',
            headline: pageTitle,
            datePublished: this.publishedDateIso,
            publisher: {
              '@id': 'https://www.dripcapital.com/#organization'
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': canonicalUrl
            }
          }),
          type: 'application/ld+json'
        }
      ],
      __dangerouslyDisableSanitizersByTagID: {
        'ldjson-newsarticle': ['innerHTML']
      }
    }
  },
  async asyncData({ params, app }) {
    if (params && params.slug) {
      const locale = app.i18n.locale
      const client = locale.indexOf('es') > -1 ? createClient() : createClient()
      const featuredStoriesContentTypeId = 'newsroomPressReleases'
      const fetauredStoriesResults = await client.getEntries({
        content_type: featuredStoriesContentTypeId,
        'fields.slug': params.slug,
        'fields.locale': locale === 'en-in' ? 'IN' : 'US'
      })
      const featuredEntries = fetauredStoriesResults.items.map((i) => {
        let DateObj = new Date()
        if (i.fields.date) {
          if (i.fields.date.includes('/')) {
            const dateArr = i.fields.date.split('/')
            DateObj.setDate(dateArr[0])
            DateObj.setMonth(dateArr[1])
            DateObj.setYear(dateArr[2])
          } else {
            DateObj = i.fields.date
          }
        }
        let momentObj = moment(DateObj)
        return {
          ...i.fields,
          date:
            i.fields.date && momentObj.isValid()
              ? momentObj.format('MMMM DD, YYYY')
              : '',
          publishedDateIso: momentObj.isValid()
            ? momentObj.toISOString()
            : i.sys && i.sys.createdAt
            ? i.sys.createdAt
            : '',
          modifiedDateIso: i.sys && i.sys.updatedAt ? i.sys.updatedAt : ''
        }
      })
      return {
        featuredStories: featuredEntries[0] || {},
        publishedDateIso:
          (featuredEntries[0] && featuredEntries[0].publishedDateIso) || '',
        modifiedDateIso:
          (featuredEntries[0] && featuredEntries[0].modifiedDateIso) || ''
      }
    }
  },
  mounted() {
    this.shareUrl = `${process.env.DRIP_WEB_HOST}${this.$route.fullPath}`
  },
  components: {
    FontAwesomeIcon,
    MainHeader,
    DripContent,
    NewsContent,
    MainFooter,
    Share
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables';
@import '~bootstrap/scss/mixins';

.impo-expo {
  padding-top: 4rem;

  .top-5 {
    top: 3rem;
  }

  .heading {
    color: $dark-blue;
    font-size: xx-large;
    margin-bottom: 1.5rem;
  }
}

.share-icon-wrapper {
  display: none;
}

@include media-breakpoint-down(sm) {
  .impo-expo {
    padding-top: 3rem;
    .heading {
      font-size: larger;
    }
  }
}

@include media-breakpoint-down(xs) {
  .share-wrapper {
    display: none;
  }
  .share-icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 10px;
    background-color: $primary;
    padding: 0.75rem;
    border-radius: 100%;

    .share-icon {
      font-size: 1.4rem;
      color: $white;
    }
  }
}
.modal-dialog {
  margin: 0;
}
</style>
