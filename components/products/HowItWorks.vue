<template>
  <page-section
    section-class="bg-secondary text-light section-hiw"
    :id="$t('pages.home.howItWorks.slug')"
  >
    <b-container>
      <b-row data-aos="fade-right">
        <b-col :cols="12" :lg="7">
          <div class="heading-1 display-3 mb-2">
            {{ $t('pages.home.howItWorks.title') }} <span class="slash"></span>
          </div>
          <div class="mb-5 section-subtitle" v-if="isHome">
            {{ $t('pages.home.howItWorks.desc') }}
          </div>
          <div class="mb-5 section-subtitle" v-else>
            {{ $t('pages.products.hiw.lead1') }} {{ keyword }}
            {{ $t('pages.products.hiw.lead2') }}
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="sm-container container-fluid">
      <b-row>
        <b-col :md="8" :xl="7" class="d-none d-md-block" data-aos="zoom-out">
          <b-img-lazy
            class="hiw-gif img-fluid"
            :alt="$t('pages.home.howItWorks.title')"
            :src="require(`@/assets/images/index/hiw/${$t('region.slug')}.gif`)"
            loop="infinite"
          />
        </b-col>

        <b-col :cols="12" :md="4" data-aos="fade-right">
          <div
            class="content-section"
            v-for="(item, index) in $t('pages.home.howItWorks.content')"
            :key="index"
          >
            <div class="heading-2">{{ item.no }}</div>
            <div class="heading-3">{{ item.title }}</div>
            <div class="section-text">{{ item.desc }}</div>
          </div>
          <div class="content-section">
            <b-link
              v-track-click
              id="products-how-it-works"
              :to="localePath('exporters-apply')"
              class="btn btn-primary"
            >
              {{ $t('pages.home.howItWorks.checkEligibility') }}
            </b-link>
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
