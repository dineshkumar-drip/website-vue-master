<template>
  <div class="impo-expo exporters-container">
    <main-header :defaultLightHeader="true" />
    <div class="d-flex flex-column justify-content-between">
      <div class="d-flex justify-content-center align-items-center">
        <page-not-found v-if="error.statusCode === 404" />
        <page-not-found v-else />
      </div>
    </div>
    <main-footer />
  </div>
</template>

<script>
import PageNotFound from '~/components/PageNotFound.vue'
import MainHeader from '~/components/common/ImpoExpo/MainHeader'
import MainFooter from '~/components/footer/MainFooter'

export default {
  layout: 'empty',
  props: ['error'],
  errorCaptured: function (err) {
    console.log('Caught error', err?.message)
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  components: { PageNotFound, MainHeader, MainFooter },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>
<style>
.whatsapp-connect-container {
  display: none !important;
}
</style>
<style scoped>
.footer {
  text-align: center;
  background: #0a2e57;
  padding: 10px 10px;
  color: #ffffff;
}
.whatsapp-connect-container {
  display: none;
}
</style>
