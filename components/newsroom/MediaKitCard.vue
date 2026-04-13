<template>
  <div v-if="loading">
    <div class="card col-lg px-0 bt-node">
      <p class="skeleton-loader skeleton-image" />
      <div class="card-body position-relative">
        <div class="text-center">
          <p class="skeleton-loader skeleton-text" />
        </div>
      </div>
      <p class="skeleton-loader skeleton-text" />
    </div>
  </div>
  <div v-else>
    <div class="card col-lg px-0 bt-node">
      <img class="card-img-top h-12rem" :src="imageLink" alt="Card image cap" />
      <div class="card-body position-relative">
        <div class="text-center">
          <p class="font-weight-bold">{{ title }}</p>
        </div>
      </div>
      <a
        :href="`https:${downloadLink.file.url}`"
        @click.prevent="downloadItem(`https:${downloadLink.file.url}`, title)"
      >
        <div class="card-footer border-success text-light text-center">
          Download
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Company’s Profile'
    },
    imageLink: {
      default: require('~/assets/images/newsroom/mediakit/companies-profile.svg')
    },
    downloadLink: {
      type: Object,
      default: () => {}
    },
    loading: {
      type: Boolean,
      default: true
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
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables';
.card-footer {
  background: $primary !important;
}
.font-weight-bold {
  font-size: 1.5rem;
  font-family: 'Nunito Sans';
}
.h-12rem {
  height: 12rem;
}
.bt-node {
  border-top: none;
}

.skeleton-loader {
  animation: skeleton-loading 1s ease-in-out infinite;
  background-color: #ccc;
  background-image: linear-gradient(90deg, #ccc, #fff, #ccc);
  background-size: 200%;
  height: 200px;
  margin-bottom: 5px;
  border-radius: 5px;
}

@keyframes skeleton-loading {
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 200%;
  }
}

.skeleton-image {
  width: 100%;
  height: 100%;
}

.skeleton-text {
  width: 100%;
  height: 1.5rem;
}
</style>
