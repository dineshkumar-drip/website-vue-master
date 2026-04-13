<template>
  <section class="section-home-container position-relative">
    <main-header />
    <jumbotron-v2 :keyword="keyword" class="align-items-center d-flex">
      <b-col :lg="6" :md="6">
        <h1 class="display-3">
          {{ $t('pages.newHome.jumbotron.title')
          }}<span class="slash text-primary"></span>
        </h1>
        <div class="desc">
          <p
            v-if="keyword != 'home'"
            class="lead text-white"
            v-html="
              $t(
                `pages.newHome.jumbotron.keyDescription.${keyword
                  .replace(/ /g, '')
                  .toLowerCase()}`
              )
            "
          />
          <p
            class="lead text-white"
            v-html="$t('pages.newHome.jumbotron.description')"
            v-else
          />
        </div>
        <div>
          <a
            @click="applyNow"
            class="btn btn-primary apply-btn btn-md"
            v-track-click
            id="home-jumbotron-cta"
          >
            {{ $t('pages.newHome.jumbotron.getStarted') }}
          </a>
        </div>
      </b-col>
      <b-col :lg="5" :offset-md="1" :md="5" class="d-none d-md-block">
        <div class="jumbotron-img">
          <b-img-lazy
            :src="require(`~/assets/images/index/screenshot-jumbotron.png`)"
            :alt="$t('pages.newHome.jumbotron.imgAlt')"
          />
        </div>
      </b-col>
    </jumbotron-v2>
    <features :keyword="keyword" features-class="bg-light-gray" />
    <onboarding />
    <insights />
    <testimonials />
    <conclusion />
    <main-footer page="home" />
  </section>
</template>
<script>
import PageSection from '~/components/PageSection'
import MainHeader from '~/components/MainHeader'
import JumbotronV2 from '~/components/common/JumbotronV2'

import Features from '~/components/common/Features'
import Onboarding from '~/components/index/Onboarding'
import Insights from '~/components/index/Insights'
import Testimonials from '~/components/index/Testimonials'
import Conclusion from '~/components/index/Conclusion'

import MainFooter from '~/components/footer/MainFooter'

export default {
  props: ['keyword'],
  computed: {
    isUs() {
      return this.$i18n.locale.indexOf('us') > -1
    }
  },
  methods: {
    applyNow() {
      this.isUs
        ? this.$router.push(this.localePath('importers-apply'))
        : this.$router.push(this.localePath('exporters-apply'))
    }
  },
  components: {
    PageSection,
    MainHeader,
    JumbotronV2,
    Features,
    Onboarding,
    Insights,
    Testimonials,
    Conclusion,
    MainFooter
  }
}
</script>

<style lang="scss" scoped>
.apply-btn {
  cursor: pointer;
}
</style>
