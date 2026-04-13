<template>
  <div class="card mb-3">
    <div class="c-container row no-gutters position-relative">
      <div class="col-md-6 top-img-container h-inherit">
        <img
          :src="
            imageLink ||
            require(`~/assets/images/newsroom/random/${getRandomInt()}.jpg`)
          "
          class="card-img pr-lg-4 h-inherit"
          alt=""
        />
      </div>

      <div
        class="col-md-6 position-relative bg-white card-position m-auto p-4 pl-5"
      >
        <div class="card-content">
          <!-- <div class="img-container mb-2">
            <img :src="logoLink" alt="" />
          </div> -->
          <p class="c-heading font-weight-bold text-secondary">{{ heading }}</p>
          <div
            class="d-flex align-items-center justify-content-center justify-content-md-start mb-4"
          >
            <template v-if="time && time.toLowerCase() !== 'invalid date'">
              <font-awesome-icon class="c-time" :icon="['far', 'calendar']" />
              <p class="c-time mb-0 ml-2">{{ time }}</p>
            </template>
            <template v-else> &nbsp; </template>
          </div>
          <div class="c-read-more">
            <a class="text-primary mb-0" :href="readMoreLink" target="_blank"
              >Read More</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  props: {
    heading: {
      type: String,
      default: ''
    },
    time: {
      type: String,
      default: ''
    },
    readMoreLink: {
      type: String,
      default: '#'
    },
    imageLink: {
      type: String,
      default: ''
    },
    logoLink: {
      default: require('~/assets/images/newsroom/news-company-imgs/the-economics-times.svg')
    }
  },
  data() {
    return {}
  },
  methods: {
    getRandomInt() {
      const min = 1
      const max = 17
      return Math.floor(Math.random() * (max - min + 1)) + min
    }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
.c-container {
  height: 17rem;
  overflow: hidden;
}
.card-position {
  top: 0;
  right: 3rem;
  border-radius: 4px;
}
.card-position .c-heading {
  font-size: 1.5rem;
  line-height: 2.063rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.card-position .c-time {
  font-size: 0.75rem;
  opacity: 0.5;
}
.card-position .c-read-more {
  background-color: $primary;
  text-align: center;
  padding: 10px 0;
  font-size: 0.875rem;
  font-weight: 600;
  max-width: 70%;
  margin: 0 auto;
  a {
    color: $white !important;
  }
}
.h-inherit {
  height: inherit;
}

.card {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.13);
  border: none;
}

@media screen and (max-width: 991px) {
  .c-container {
    height: 14.4rem;
  }

  .card-position {
    right: 1.5rem;
  }

  .card-position .c-heading {
    font-size: 1.125rem;
    line-height: 1.5rem;
  }

  .card-position .c-time {
    font-size: 0.75rem;
  }
  .card-position .c-read-more {
    font-size: 0.875rem;
    max-width: 80%;
  }
}

@media screen and (max-width: 767px) {
  .top-img-container {
    min-height: 10rem;
  }
  .card {
    width: fit-content;
  }
  .c-container {
    height: fit-content;
  }
  .c-container .c-heading,
  .c-container .c-time,
  .c-container .c-read-more {
    text-align: center !important;
    max-width: 100%;
  }
  .img-container {
    width: fit-content;
    margin-right: auto !important;
    margin-left: auto !important;
  }
  .card-position {
    top: 0;
    right: 0;
    padding: 0 !important;
    height: calc(100% + 3rem);
    .card-content {
      padding: 1rem;
      position: relative;
      top: -2rem;
      background-color: white;
      border-radius: 7px;
      padding-bottom: 0;
      width: 90%;
      margin: 0 auto;
    }
  }
}
</style>
