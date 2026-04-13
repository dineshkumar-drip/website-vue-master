<template>
  <section
    class="index-container landing-template-container"
    :class="landingClass"
  >
    <landing-header />
    <landing-jumbotron>
      <template slot="content">
        <b-row>
          <b-col
            :cols="12"
            :md="5"
            class="d-flex flex-column justify-content-center landing-content landing-setting-content"
          >
            <h1 class="display-5 text-white">
              {{ $t('landing.exporter.main.title') }}
              <span class="slash blink text-primary"></span>
            </h1>
            <ul class="lead text-white">
              <li>{{ $t('landing.exporter.main.lead1') }}</li>
              <li>{{ $t('landing.exporter.main.lead2') }}</li>
              <li>{{ $t('landing.exporter.main.lead3') }}</li>
            </ul>
          </b-col>
          <b-col
            :cols="12"
            :xl="5"
            :offset-lg="1"
            :lg="6"
            :md="7"
            :offset-xl="2"
            class="d-flex flex-column justify-content-center"
          >
            <slot name="form" />
          </b-col>
        </b-row>
      </template>
    </landing-jumbotron>
    <landing-footer footer-type="landing" />
  </section>
</template>
<script>
import LandingHeader from '~/components/LandingHeader'
import LandingJumbotron from '~/components/landing/LandingJumbotron'
import LandingFooter from '~/components/LandingFooter'

export default {
  props: ['landingClass'],
  components: {
    LandingHeader,
    LandingJumbotron,
    LandingFooter
  }
}
</script>
