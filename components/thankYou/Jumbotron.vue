<template>
  <section class="section-thank-you">
    <b-container fluid>
      <b-row class="justify-content-center">
        <b-col class="text-center" :sm="8">
          <font-awesome-icon
            :icon="'check-circle'"
            class="job-opening-success-icon"
          />
          <h1>
            {{ dictionary.title }}
          </h1>
          <div v-if="isGoTrade" class="lead mt-5">
            <p>
              {{ $t('pages.gotrade.thankYou.jumbotronText') }}
            </p>
            <p>
              <a :href="`tel:${$t('pages.gotrade.phone')}`">{{
                $t('pages.gotrade.phone')
              }}</a>
              /
              <a :href="`mailto:${$t('pages.gotrade.email')}`">{{
                $t('pages.gotrade.email')
              }}</a>
            </p>
          </div>
          <p v-else class="lead mt-5" v-html="dictionary.description" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  data() {
    return {
      dictionary:
        this.page === 'channelPartner'
          ? this.$t('pages.thankYou.channelPartner')
          : this.$t('pages.thankYou.hero')
    }
  },
  props: {
    isGoTrade: {
      type: Boolean,
      default: false
    },
    page: {
      type: String,
      default: null
    }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>
