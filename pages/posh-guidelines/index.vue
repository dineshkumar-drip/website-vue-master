<template>
  <div v-if="isIn">
    <iframe
      :src="viewerUrl"
      :style="{ height: iframeHeight }"
      width="100%"
    ></iframe>
  </div>
  <div v-else>
    <h1>{{ pageNotFound }}</h1>
    <nuxt-link to="/">Home page</nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      docUrl:
        'https://docs.google.com/document/d/1y1NJgUqlu3knRkKxiRi5NTJ9tUnhVjNi73xA7kJJjVE',
      pageNotFound: '404 Not Found',
      iframeHeight: '600px' // Initial height
    }
  },
  computed: {
    viewerUrl() {
      const baseUrl = this.docUrl.split('/edit')[0]
      return `${baseUrl}/preview`
    },
    isIn() {
      return this.$i18n.locale.indexOf('in') > -1
    }
  },
  mounted() {
    this.setIframeHeight()
    window.addEventListener('resize', this.setIframeHeight)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.setIframeHeight)
  },
  methods: {
    setIframeHeight() {
      this.iframeHeight = `${window.innerHeight - 19}px`
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
iframe {
  border-style: none;
}
</style>
