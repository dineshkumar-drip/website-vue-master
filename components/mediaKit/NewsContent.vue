<template>
  <div class="pt-5rem">
    <div
      class="content-container"
      :class="page === 'mediaKitInside' ? 'bg-gray' : ''"
    >
      <h1 class="heading text-center" v-if="heading">{{ heading }}</h1>
      <h1
        class="heading"
        :class="page === 'mediaKitInside' ? '' : 'text-center'"
        v-if="title"
      >
        {{ title }}
      </h1>
      <h3 class="sub-heading" v-if="description">{{ description }}</h3>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    dictionary: {
      type: String
    },
    page: {
      type: String
    },
    heading: {
      type: String
    }
  },
  data() {
    return {
      title: this.$t(this.dictionary).title,
      description: this.$t(this.dictionary).description
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/scss/_variables.scss';
.content-container {
  padding-top: 6em;
  padding-bottom: 6em;
  padding-left: 5em;
  padding-right: 5em;
  background-color: #51b576;
  color: #ffff;
}
.bg-gray {
  background-color: #f2f2f2;
  color: #0a2e57;
}
.heading {
  font-size: 3.5rem;
}
.sub-heading {
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: 1rem;
}
.pt-5rem {
  padding-top: 5rem;
}

@media (max-width: 575px) {
  .content-container {
    padding: 3em 1.5em;
  }
  .heading {
    font-size: 2em;
    text-align: left !important;
  }
}
</style>
