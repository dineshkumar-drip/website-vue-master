<template>
  <section class="index-container careers-container">
    <main-header :hide-cta="true" />
    <main-jumbotron>
      <template slot="content">
        <b-row>
          <b-col :cols="12" :xl="7" :sm="9">
            <h1 class="display-3">
              <vue-typer
                text="Work at Drip"
                erase-style="backspace"
                :erase-delay="70"
              />
              <span class="slash blink text-primary"></span>
            </h1>
          </b-col>
        </b-row>
        <b-row>
          <b-col :cols="12" :xl="6" :sm="6">
            <p class="lead">
              Drip uses technology to re-engineer the core of international
              trade finance. Our mission is to enable growing companies in all
              corners of the world finance their cross-border trade at the click
              of a button.
            </p>
            <p class="lead">
              We have a team of highly skilled individuals across San Francisco
              and Mumbai, experts in the field of finance, banking, consulting
              and technology that has enabled us to march closer to our mission.
              Come join us and be part of this journey!
            </p>
            <b-btn class="px-5 py-3" variant="primary" :href="url">
              View Jobs
            </b-btn>
            <div class="mb-5"></div>
          </b-col>
        </b-row>
      </template>
    </main-jumbotron>
    <main-footer :isNewBranding="true" />
  </section>
</template>
<script>
import MainHeader from '~/components/MainHeader'
import MainJumbotron from '~/components/MainJumbotron'
import MainFooter from '~/components/footer/MainFooter'

export default {
  data() {
    return {
      url: 'https://dripcapital.recruiterbox.com/#content'
    }
  },
  head() {
    return {
      title: 'Careers',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Work at Drip. Join us and be a part of our journey.'
        }
      ]
    }
  },
  components: {
    MainHeader,
    MainJumbotron,
    MainFooter
  }
}
</script>
<style lang="scss" scoped>
.careers-container {
  .jumbotron {
    background-image: url('~/assets/images/careers/careers-jumbotron.jpg');
  }
}
</style>
