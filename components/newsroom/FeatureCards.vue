<template>
  <div class="container">
    <template v-if="itemsToDisplay && itemsToDisplay.length">
      <heading :text="cardType" classes="mb-lg-8" />

      <b-row v-if="id !== 'media-kit'">
        <b-col
          class="mb-5"
          :cols="12"
          :md="6"
          :lg="4"
          v-for="(item, index) in itemsToDisplay"
          :key="index"
        >
          <f-card :pressItems="item" :id="id" :loading="item ? false : true" />
        </b-col>
      </b-row>
      <b-row v-if="id === 'media-kit'">
        <b-col
          :cols="12"
          :md="6"
          :lg="4"
          v-for="(item, i) in itemsToDisplay"
          :key="i"
          class="mb-5"
        >
          <media-kit-card
            :imageLink="
              item.imageLink && item.imageLink.fields
                ? item.imageLink.fields.file.url
                : undefined
            "
            :title="item.title"
            :downloadLink="item.media[0]"
            :key="i"
            :loading="item ? false : true"
          />
        </b-col>
      </b-row>

      <hr class="mt-0" />
      <div
        v-if="!loading && id !== 'media-kit' && this.page < this.totalPages - 1"
        class="text-center view-more my-4 font-weight-bold cursor-pointer"
        @click="handleReadMore"
      >
        {{ $t('pages.newsroom.viewMore') }} {{ cardType }}
      </div>
    </template>
    <template v-if="loading">
      <heading
        :text="cardType"
        classes="mb-lg-8"
        v-if="!itemsToDisplay.length"
      />
      <b-row>
        <b-col
          class="mb-5"
          :cols="12"
          :lg="4"
          v-for="(_, index) in loadingItems"
          :key="index"
        >
          <f-card-skeleton-loader />
        </b-col>
      </b-row>
    </template>
  </div>
</template>
<script>
import Heading from '~/components/common/ImpoExpo/Heading.vue'
import FCard from '~/components/newsroom/FCard.vue'
import MediaKitCard from '~/components/newsroom/MediaKitCard.vue'
import FCardSkeletonLoader from '~/components/newsroom/FCardSkeletonLoader.vue'
import { createClient } from '~/plugins/contentful.js'

export default {
  props: {
    id: {
      type: String,
      default: 'press-releases'
    }
  },
  data: function () {
    return {
      cardType: 'Press Releases',
      itemsToDisplay: [],
      page: 0,
      limit: 3,
      client: null,
      contentTypeId: null,
      totalPages: null,
      loading: true,
      loadingItems: new Array(3).fill(1)
    }
  },
  mounted() {
    this.client =
      this.$i18n.locale.indexOf('es') > -1 ? createClient() : createClient()
    switch (this.id) {
      case 'press-releases':
        this.cardType = 'Press Releases'
        this.contentTypeId = 'newsroomPressReleases'
        break
      case 'ceo-blogs':
        this.cardType = 'CEO’s Blog'
        this.contentTypeId = 'newsroomCeoBlogs'
        break
      case 'featured-stories':
        this.cardType = 'Featured Stories'
        this.contentTypeId = 'newsroomFeaturedStories'
        break
      case 'media-kit':
        this.cardType = 'Media Kit'
        this.contentTypeId = 'newsroomMediaKit'
        break
      default:
        this.cardType = 'Press Releases'
        this.contentTypeId = 'newsroomPressReleases'
    }
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.loading = true
      if (this.id === 'media-kit') {
        this.getMediaKit()
      } else {
        this.getArticles()
      }
    },
    async getArticles() {
      const resp = await this.client.getEntries({
        content_type: this.contentTypeId,
        'fields.locale': this.$i18n.locale === 'en-in' ? 'IN' : 'US',
        'fields.title[exists]': true,
        skip: this.page * this.limit,
        limit: this.limit,
        order: '-fields.formattedDate'
      })
      this.totalPages = Math.ceil(resp.total / this.limit)
      const entries = resp.items.map((i) => {
        return {
          ...i.fields
        }
      })
      this.itemsToDisplay = [...this.itemsToDisplay, ...entries]
      this.loading = false
    },
    async getMediaKit() {
      const resp = await this.client.getEntries({
        content_type: this.contentTypeId,
        order: '-sys.updatedAt'
      })
      const entries = resp.items
        .map((i) => {
          return { ...i.fields, media: i.fields.media.map((m) => m.fields) }
        })
        .reverse()
      this.itemsToDisplay = [...this.itemsToDisplay, ...entries]
      this.loading = false
    },
    handleReadMore() {
      this.page++
      this.fetchData()
    }
  },
  components: {
    Heading,
    FCard,
    MediaKitCard,
    FCardSkeletonLoader
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables';
.card-gap {
  gap: 1.875rem;
}

.cursor-pointer {
  cursor: pointer;
}
.cursor-pointer:hover {
  color: $primary-dark;
}
.view-more {
  color: $primary;
}
</style>
