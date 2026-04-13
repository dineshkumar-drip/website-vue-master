<template>
  <div class="text-center location-card-container">
    <b-card
      class="border-0"
      :class="[item.img]"
      :body-class="['custom-card']"
      overlay
      :img-src="require(`~/assets/images/about/locations/${image}.png`)"
      img-alt="Card Image"
      text-variant="white"
      :img-height="height"
      :sub-title="item.designation"
    >
      <!-- <b-card-text class="back">
        <span>{{ item.company }}</span>
        <span>{{ item.address1 }}</span>
        <span>{{ item.address2 }}</span>
      </b-card-text> -->
    </b-card>
    <div class="title">{{ item.name }}</div>
    <b-card-text>
      <!-- <span align="center">{{ item.name }}</span> -->
      <p class="m-0">{{ item.company }}</p>
      <p class="m-0">{{ item.address1 }}</p>
      <p class="m-0">{{ item.address2 }}</p>
    </b-card-text>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    height: {
      type: Number,
      default: 220
    },
    isMobile: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    image() {
      return this.item.img
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables';
@import '~bootstrap/scss/mixins';

.location-card-container {
  .title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  margin-top: 2em;
  .card-img {
    width: 100%;
    height: auto;
    margin-bottom: 2em;
  }
}

@include media-breakpoint-down(md) {
  .location-card-container {
    .title {
      font-size: 1.5rem;
    }
    .card-img {
      width: 50%;
      margin: auto;
      margin-bottom: 1em;
    }
  }
}

@include media-breakpoint-down(sm) {
  .location-card-container {
    .card-img {
      width: 60%;
    }
  }
}

@include media-breakpoint-down(xs) {
  .location-card-container {
    .card-img {
      width: 70%;
    }
  }
}
</style>
