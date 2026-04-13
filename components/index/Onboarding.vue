<template>
  <page-section section-class="section-onboarding section-padded">
    <b-container fluid>
      <b-row>
        <b-col
          :md="6"
          class="divided default col-chart order-1 order-md-0"
          :offset-md="1"
        >
          <b-img-lazy
            v-if="!isUs"
            :src="require(`~/assets/images/index/screenshot-onboard.png`)"
            :alt="$t('pages.newHome.onboarding.imgAlt')"
            class="img-fluid"
          />
          <b-img-lazy
            v-else
            :src="require(`~/assets/images/importers/feature-onboard.jpg`)"
            :alt="$t('pages.newHome.onboarding.imgAlt')"
            class="img-fluid"
          />
        </b-col>
        <b-col :md="4" :sm="10" class="col-lead order-0 order-md-1">
          <h4 class="intro-title title-slash">
            {{ $t('pages.newHome.onboarding.title') }}
          </h4>
          <div>
            <ul v-if="!isUs">
              <li
                v-for="(step, i) in $t('pages.newHome.onboarding.steps')"
                :key="i"
                class="lead"
              >
                {{ step }}
              </li>
            </ul>
            <p v-else>{{ $t('pages.newHome.onboarding.body') }}</p>
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
