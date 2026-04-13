<template>
  <page-section section-class="section-insights section-padded bg-light-gray">
    <b-container fluid>
      <b-row>
        <b-col :md="4" class="col-lead" :offset-md="1">
          <h4 class="intro-title title-slash">
            {{ $t('pages.newHome.insights.title') }}
          </h4>
          <div v-if="!isUs">
            <p
              v-for="(item, i) in $t('pages.newHome.insights.texts')"
              :key="i"
              class="lead"
            >
              {{ item }}
            </p>
          </div>
          <div v-else>
            <p class="lead">{{ $t('pages.newHome.insights.body') }}</p>
          </div>
        </b-col>
        <b-col :md="5" :offset-md="1">
          <div class="d-flex justify-content-center flex-column h-100">
            <b-img-lazy
              v-if="!isUs"
              :src="require('~/assets/images/index/screenshot-grow.png')"
              :alt="$t('pages.newHome.insights.imgAlt')"
              class="img-fluid"
            />
            <b-img-lazy
              v-else
              :src="require('~/assets/images/importers/feature-insight.jpg')"
              :alt="$t('pages.newHome.insights.imgAlt')"
              class="img-fluid"
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
  computed: {
    isUs() {
      return this.$i18n.locale.indexOf('us') > -1
    }
  },
  components: {
    PageSection
  }
}
</script>
