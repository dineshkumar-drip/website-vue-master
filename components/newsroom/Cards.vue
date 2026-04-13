<template>
  <div class="pad-top container mb-5" :class="mediaKit ? 'mediaKit' : ''">
    <heading :text="heading" />
    <b-row v-if="mediaKit">
      <b-col
        :sm="12"
        :md="4"
        :lg="4"
        :xl="4"
        :cols="12"
        v-for="(item, index) in items"
        :key="index"
      >
        <!-- <a :href="`https:${item.media[0].file.url}`"> -->
        <!-- <img :src="require(`@/assets/images/newsroom/${link.icon}.svg`)"> -->
        <div class="position-relative card-img">
          <!-- <img :src="`https:${item.media[0].file.url}`" class="card-img-top" /> -->
          <p class="card-text mb-xl-n3" v-if="item.title">{{ item.title }}</p>
          <a
            :href="`https:${item.media[0].file.url}`"
            @click.prevent="
              downloadItem(`https:${item.media[0].file.url}`, item.title)
            "
          >
            <button type="button" class="btn-download btn-primary btn-block">
              Download
            </button>
          </a>
        </div>
        <!-- <nuxt-link to="media-kit">
          <div class="position-relative">
            <div class="card-img-top">
              <p class="card-text" v-if="item.title">{{item.title}}</p>
              </div>
            <button type="button"  class="btn-download btn-primary btn-block" v-if="mediaKit">Download</button>
          </div>
        </nuxt-link> -->
        <!-- <div class="card-body"> -->
        <!-- <p class="card-text" v-if="item.title">{{item.title}}</p> -->
        <!-- <p class="card-text" v-if="item.name">{{item.name}}  <font-awesome-icon :icon="['fa', 'LinkedinIn']" /></p>
          <p class="text-sm"  v-if="item.profile">{{item.profile}}</p> -->
        <!-- </div> -->
      </b-col>
    </b-row>

    <!-- <b-row v-else-if="page === 'mediaKitInside'">
      <b-col :sm="12" :md="4" :lg="4" :xl="4" :cols="12" v-for="(item, innerIndex) in imagesLink" :key="innerIndex">
        <div class="position-relative">
          <img :src="`https:${item.file.url}`" class="card-img-top" />
        </div>
        <div class="card-body">
          <p class="h5 mb-0 pb-0" v-if="item.title">{{ item.title }} <font-awesome-icon :icon="['fab', 'linkedin']" /></p> -->
    <!-- <p class="mt-0 pt-0 mt-3 mb-0" v-if="item.profile">{{ item.profile }} </p> -->
    <!-- <a :href="`https:${item.file.url}`" @click.prevent="downloadItem(`https:${item.file.url}`,item.title)">Download</a>
        </div>
      </b-col>
    </b-row> -->

    <b-carousel
      :id="page + '-carousel'"
      class="custom-cards-carousel"
      :interval="4000000"
      background="#ffffff"
      controls
      v-else
    >
      <b-carousel-slide img-blank v-for="(chunk, index) in items" :key="index">
        <b-row>
          <b-col
            :sm="12"
            :md="4"
            :lg="4"
            :xl="4"
            :cols="12"
            v-for="(item, innerIndex) in chunk"
            :key="innerIndex"
          >
            <div class="position-relative">
              <img :src="item.imageLink" class="card-img-top" />
            </div>
            <div class="card-body">
              <p class="text-sm">{{ item.date }}</p>
              <p class="card-text">{{ item.title }}</p>
              <a :href="item.link" v-if="!dLink" target="_blank"
                >Read More
                <font-awesome-icon
                  v-if="page !== 'mediaKitInsides'"
                  :icon="['fas', 'arrow-right']"
                />
              </a>
              <!-- <a :href="`featured-stories/${item.fId}`" v-if="dLink" target="_blank">Read More <font-awesome-icon :icon="['fas', 'arrow-right']" /></a> -->
              <nuxt-link :to="`featured-stories/${item.fId}`" v-if="dLink"
                >Read More
                <font-awesome-icon :icon="['fas', 'arrow-right']" />
              </nuxt-link>
            </div>
          </b-col>
        </b-row>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>
<script>
import Heading from '~/components/common/ImpoExpo/Heading.vue'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  props: {
    dictionary: {
      type: String
    },
    page: {
      type: String
    },
    mediaKit: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      default: () => []
    },
    dLink: {
      type: Boolean,
      default: false
    },
    imagesLink: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      heading: this.$t(this.dictionary).title,
      newsItems: this.$t(this.dictionary).items
    }
  },
  watch: {
    items() {
      console.log('Items: ', this.items)
    }
  },
  methods: {
    downloadItem(url, label) {
      this.axios
        .get(url, { responseType: 'blob' })
        .then((response) => {
          const blob = new Blob([response.data], {
            type: url.endsWith('pdf') ? 'application/pdf' : 'image/jpeg'
          })
          const link = document.createElement('a')
          link.href = URL.createObjectURL(blob)
          link.download = label
          link.click()
          URL.revokeObjectURL(link.href)
        })
        .catch(console.error)
    }
  },
  components: {
    Heading,
    FontAwesomeIcon
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables';
@import '~bootstrap/scss/mixins';

.cards-container {
  font-family: 'Nunito Sans', sans-serif;
  color: #0a2e57;
  padding: 5rem;
}

.card {
  &-text {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1em;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    min-height: 72px;
  }

  &-img-top {
    // min-height: 17rem;
    height: 25rem;
    width: 100%;
    object-fit: cover;
    background-color: white;
  }

  &-body {
    padding: 0.5rem;
  }
}

.media-kit-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.mediaKit {
  .card-text {
    width: 290px;
    font-weight: 700;
    font-size: 24px;
    text-align: center;
    color: #0a2e57;
  }

  .card-img {
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.13);
    border-radius: 4px;
  }
}

.newsMedia {
  .card-text {
    text-decoration: underline;
  }
}

@media (max-width: 575px) {
  .cards-container {
    margin: 0;
    padding: 3em 1.5em 0 1.5em;
  }

  .section-card {
    margin: 2rem 3rem;
  }

  .card {
    &-section {
      display: flex;
      justify-content: space-between;
    }

    &-text {
      font-size: 1rem;
      min-height: 0;
      margin-bottom: 5px;
    }

    &-body {
      margin-bottom: 1.5rem;
    }

    &-img-top {
      height: 20em;
    }
  }
}

.pad-top {
  padding-top: 200px;
}

.row-media-kit {
  margin-left: 43rem;
}

.btn-download {
  width: 350px;
  height: 44px;
  border-radius: 0px 0px 4px 4px;
}
</style>
