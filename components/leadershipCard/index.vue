<template>
  <div class="card border-0 w-100 h-100">
    <div class="w-100 d-flex justify-content-center">
      <img class="card-img-top" :src="imgUrl" alt="Card image cap" />
    </div>
    <div class="card-body d-flex flex-column justify-content-between">
      <div>
        <h5 class="card-title mb-3" align="center">{{ title }}</h5>
        <h6 class="card-subtitle mb-2 sub-title-color" align="center">
          {{ subTitle }}
        </h6>
        <p class="card-text">{{ text }}</p>
      </div>
      <a
        :href="linkedInLink"
        class="text-primary text-decoration-none mt-4 font-weight-bold connect text-right"
        target="_blank"
        v-if="linkedInLink"
      >
        {{ linkedInText }}
        <span class="bg-primary text-white px-1 ml-2 px-2 py-1">
          <font-awesome-icon :icon="['fab', 'linkedin-in']" />
        </span>
      </a>
    </div>
    <!-- <div class="underline"></div> -->
  </div>
</template>

<style lang="scss" scoped>
@import '~assets/scss/variables';
@import '~bootstrap/scss/mixins';

.black-n-white {
  filter: grayscale(100%);
}

.card,
.card-body {
  border-radius: 22px 22px 22px 22px;
  background-color: #f8f9fa;
  box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.15);
}

.card-img-top {
  max-width: 300px;
  max-height: 300px;
  padding: 20px;
  object-fit: contain;
}
.card:hover {
  box-shadow: 6px 6px 20px 10px rgba(181, 181, 181, 0.25);

  // .card-body {
  //   background-color: $white !important;
  // }

  .black-n-white {
    filter: grayscale(0%);
  }
}
.sub-title-color {
  color: $green !important;
}
.card-title::after {
  color: $dark-blue !important;
  // color: $primary;
}
.underline {
  height: 1px;
  margin-top: 2rem;
  background-color: $leadership-dark-grey;
}
.card-text {
  font-size: 0.95rem;
}
.connect span {
  border-radius: 50%;
}

@include media-breakpoint-down(xs) {
  .card-img-top {
    width: 75%;
    margin: auto;
  }
}
</style>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
export default {
  props: {
    title: {
      default: 'Card Title',
      type: String
    },
    subTitle: {
      default: 'Card Sub Title',
      type: String
    },
    text: {
      default:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      type: String
    },
    linkedInLink: {
      default: '#',
      type: String
    },
    linkedInText: {
      default: 'Connect On',
      type: String
    },
    imgUrl: {
      type: String
    }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>
