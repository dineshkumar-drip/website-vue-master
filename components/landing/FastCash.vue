<template>
  <page-section section-class="section-conclusion section-home gray">
    <b-container>
      <b-row class="justify-content-center">
        <b-col class="col-lead text-left" :lg="6">
          <h4 class="intro-title title-slash">
            {{ $t('pages.newHome.fastCash.title') }}
          </h4>
          <ul class="lead-list p-0">
            <li
              class="lead"
              v-for="(desc, index) in $t('pages.newHome.fastCash.desc')"
              :key="index"
            >
              {{ desc }}
            </li>
          </ul>
        </b-col>
        <b-col :lg="6" align-self="center" align-h class="d-none d-md-block">
          <div>
            <b-img
              :src="require(`@/assets/images/common/fast-cash.png`)"
              class="w-100"
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
  components: {
    PageSection
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/_variables.scss';
.lead {
  font-weight: 400;
  border-left: 4px solid $secondary;
  margin-bottom: 1.5rem;
  padding-left: 1rem;
}
.lead-list {
  list-style: none;
}
</style>
