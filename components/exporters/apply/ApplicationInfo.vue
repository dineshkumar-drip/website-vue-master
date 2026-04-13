<template>
  <page-section section-class="application-info">
    <b-container fluid>
      <b-row class="justify-content-center">
        <b-col
          :md="4"
          lg="3"
          class="slash-big d-none d-md-block"
          v-for="(tag, index) in $t('pages.exporters.apply.tags')"
          :key="index"
        >
          <p class="lead">{{ tag }}</p>
        </b-col>
      </b-row>
    </b-container>
  </page-section>
</template>

<script>
import PageSection from '~/components/PageSection'
export default {
  components: {
    PageSection
  }
}
</script>
