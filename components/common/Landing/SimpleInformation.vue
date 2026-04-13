<template>
  <b-container
    class="mt-3 mt-md-8 mt-lg-10 mt-xl-8 tradex-container mx-auto mx-xl-10"
  >
    <b-row class="tradex-row">
      <b-col :sm="12">
        <section-heading :text="$t(`pages.${page}.informationSection.title`)" />
        <div class="spacing-8"></div>
      </b-col>
      <b-col v-if="showInfo" sm="12" md="6" :order="leftSideImage ? 2 : 3">
        <b-img-lazy
          v-if="$t(`pages.${page}.informationSection.imageUrl`)"
          :src="
            require(`~/assets/images/exporters/${$t(
              `pages.${page}.informationSection.imageUrl`
            )}`)
          "
          :alt="$t('pages.newHome.insights.imgAlt')"
          class="img-fluid"
        />
      </b-col>
      <b-col
        v-if="showInfo"
        sm="12"
        md="6"
        class="d-flex align-items-center"
        :order="leftSideImage ? 3 : 2"
      >
        <div class="drip-body color-noble-blue-500">
          {{ $t(`pages.${page}.informationSection.content1`) }}
          <br />
          <br />
          {{ $t(`pages.${page}.informationSection.content2`) }}
        </div>
      </b-col>
      <b-col v-if="!showInfo" sm="12">
        <div class="d-flex justify-content-around about-cards">
          <div
            class="flex-1 p-2 rounded-2 mr-2 about-card"
            v-for="(x, i) in $t(
              `pages.${page}.informationSection.aboutContent`
            )"
            :key="i"
          >
            <b-img-lazy
              v-if="x.image"
              :src="require(`~/assets/images/landing/evstradex/${x.image}.png`)"
              :alt="$t('pages.newHome.insights.imgAlt')"
              width="180"
              class="img-fluid"
            />
            <div class="about-inner-card">
              <br />
              <br />
              <div class="drip-h4 font-weight-700 color-noble-blue-500">
                {{ x.text1 }}
              </div>
              <br />
              <div class="drip-h4 font-weight-700 color-noble-blue-500">
                {{ x.text2 }}
              </div>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import SectionHeading from '~/components/common/ImpoExpo/SectionHeading'

export default {
  props: ['leftSideImage', 'page', 'showInfo'],
  components: {
    SectionHeading
  }
}
</script>
<style lang="scss" scoped>
@import '../../../assets/scss/variables';
.tradex-container {
  color: $white;
  .tradex-row {
    padding: 40px 0;
  }
}
.about-card {
  width: 250px;
  img {
    position: relative;
    top: 16px;
    border-radius: 12px;
    box-shadow: 0px 12px 17px -13px #1b73bc;
  }
  .about-inner-card {
    border-radius: 12px;
    background: #eaf1f1;
    padding: 12px;
    margin-left: 8px;
    height: 240px;
  }
}
</style>
