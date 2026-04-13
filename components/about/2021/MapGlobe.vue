<template>
  <page-section section-class="section-about-map my-5">
    <div class="video-container container-fluid">
      <heading v-if="isLeaderShip" :text="text" center />
      <heading v-else center :text="$t('pages.about.map.title')" />
      <video
        width="102%"
        loop
        autoplay
        muted
        preload
        playsinline
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
        :src="require('~/assets/images/about/mapGlobe/mapGlobeVideo.mp4')"
        type="video/mp4"
      ></video>
    </div>
  </page-section>
</template>

<script>
import PageSection from '~/components/PageSection'
import Heading from '~/components/common/ImpoExpo/Heading'

export default {
  components: {
    PageSection,
    Heading
  },
  props: {
    text: {
      type: String
    },
    isLeaderShip: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.video-container {
  overflow: hidden;
}
</style>
