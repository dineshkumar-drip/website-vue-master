<template>
  <div class="d-flex flex-column w-100 h-100">
    <div class="img-container">
      <b-img-lazy
        class="card-img-top"
        :src="pressItems.imageLink.fields.file.url"
        v-if="pressItems.imageLink && pressItems.imageLink.fields"
      />
      <b-img-lazy
        class="card-img-top"
        :src="require(`~/assets/images/newsroom/random/${getRandomInt()}.jpg`)"
        alt="random"
        v-else
      />
    </div>
    <div class="card-body position-relative">
      <div class="position-absolute bg-white mx-auto over-content">
        <div class="text-center px-4 pt-4">
          <p class="text-secondary font-weight-bold text-wrap">
            {{ pressItems.title }}
          </p>
          <div
            class="d-flex justify-content-center align-items-center mt-4 mb-3"
          >
            <template
              v-if="
                pressItems.date &&
                pressItems.date.toLowerCase() !== 'invalid date'
              "
            >
              <font-awesome-icon
                class="font-size"
                :icon="['far', 'calendar']"
              />
              <p class="font-size mb-0 ml-2 text-center">
                {{ pressItems.date }}
              </p>
            </template>
            <template v-else> &nbsp; </template>
          </div>
        </div>
      </div>
    </div>
    <a
      v-if="id !== 'press-releases'"
      :href="pressItems.link || pressItems.articleLink"
      target="_blank"
      class="card-footer text-light text-center"
    >
      Read More
    </a>
    <nuxt-link
      v-else
      :to="`press-releases/${pressItems.slug}`"
      class="card-footer border-success text-light text-center"
    >
      Read More
    </nuxt-link>
  </div>
</template>
<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  props: {
    id: {
      type: String
    },
    pressItems: {
      type: Object,
      default: () => {}
    },
    loading: {
      type: Boolean,
      default: true
    },
    dLink: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    getRandomInt() {
      const min = 1
      const max = 27
      return Math.floor(Math.random() * (max - min + 1)) + min
    }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables';
@import '~bootstrap/scss/mixins';

.over-content {
  width: 85%;
  left: 0;
  right: 0;
  bottom: -5rem;
  border-radius: 4px;
}

.card-body {
  margin-bottom: 6rem;
}

.mb-8rem {
  margin-bottom: 8rem;
}

.h-11rem-img {
  height: 11.625rem;
  width: 22rem;
}

.card-footer {
  background: $primary !important;
}

.text-wrap {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 1.125rem;
}

.font-size {
  font-size: 12px;
  opacity: 0.5;
}

.img-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 11rem;
  overflow: hidden;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

@include media-breakpoint-down(sm) {
  .img-container {
    height: 20rem;
  }
}

@include media-breakpoint-down(xs) {
  .img-container {
    height: 15rem;
  }
}
</style>
