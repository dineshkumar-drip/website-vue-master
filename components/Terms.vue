<template>
  <page-section section-class="section-terms">
    <b-container>
      <b-row>
        <b-col>
          <h1 class="display-3">{{ $t('pages.terms.heading') }}</h1>
        </b-col>
      </b-row>
      <b-row class="mb-4">
        <b-col>
          <p class="lead">{{ $t('pages.terms.subtitle') }}</p>
        </b-col>
      </b-row>
      <b-row v-for="(item, index) in $t('pages.terms.content')" :key="index">
        <b-col cols="12">
          <h5>
            <strong>{{ item.title }}</strong>
          </h5>
        </b-col>
        <template v-if="item.hasLink">
          <b-col cols="12" v-for="(desc, i) in item.desc" :key="i" class="mb-4">
            <p class="lead">
              {{ desc.line1 }} <a href="#">{{ desc.line2 }}</a> {{ desc.line3 }}
            </p>
          </b-col>
        </template>
        <template v-else>
          <b-col cols="12" v-for="(desc, i) in item.desc" :key="i" class="mb-4">
            <p class="lead">{{ desc }}</p>
          </b-col>
        </template>
      </b-row>
      <b-row>
        <b-col cols="12" class="mb-4">
          <h5 class="conclude">{{ $t('pages.terms.conclude') }}</h5>
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
