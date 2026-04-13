<template>
  <page-section class="section-video-container index-section">
    <b-container>
      <b-row>
        <b-col md="4" cols="12">
          <b-row data-aos="fade-right">
            <b-col md="8" sm="4" cols="5" class="mb-4 mb-md-5">
              <b-img-lazy
                :alt="$t('pages.home.videoIntro.logo')"
                :src="
                  require(`~/assets/images/common/drip-logo-tagline-e2e.svg`)
                "
              />
            </b-col>
            <b-col md="12" sm="12" cols="12" class="mb-4">
              <p class="lead" v-if="isHome">
                {{ $t('pages.home.videoIntro.desc') }}
              </p>
              <p class="lead" v-else>
                {{ $t('pages.products.videoIntro.lead1') }} {{ keyword }}
                {{ $t('pages.products.videoIntro.lead2') }}
              </p>
            </b-col>
          </b-row>
        </b-col>
        <b-col md="8" sm="12" cols="12">
          <div class="video-container" data-aos="zoom-out">
            <iframe
              id="drip-video"
              width="853"
              height="480"
              :src="$t('urls.video')"
              frameborder="0"
              allowfullscreen
            />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </page-section>
</template>
<script>
import PageSection from '~/components/PageSection'

export default {
  props: ['keyword'],
  computed: {
    isHome() {
      return this.keyword === 'home'
    }
  },
  components: {
    PageSection
  }
}
</script>
