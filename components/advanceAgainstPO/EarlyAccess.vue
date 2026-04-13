<template>
  <page-section section-class="early-access-section">
    <b-container fluid>
      <div class="content-box mx-auto px-4 px-md-5 py-4 py-md-5">
        <heading :text="dictionary.title" />

        <p class="highlight-text mt-4">
          {{ dictionary.line1 }}
        </p>
        <p class="highlight-text">
          {{ dictionary.line2 }}
        </p>
      </div>
    </b-container>
  </page-section>
</template>

<script>
import PageSection from '~/components/PageSection'
import Heading from '~/components/common/ImpoExpo/Heading'

export default {
  props: {
    page: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      dictionary: this.$t(`pages.${this.page}.earlyAccess`)
    }
  },
  components: {
    PageSection,
    Heading
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables';
@import '~bootstrap/scss/mixins';

.early-access-section {
  .content-box {
    height: auto;
    background: #ffffff;
    border-radius: 4px;
    box-shadow: 0px 12px 30px 0px rgba(0, 0, 0, 0.07);
    position: relative;
    z-index: 1;
  }

  .highlight-text {
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 36px;
    letter-spacing: 0px;
    color: #000;
    margin-bottom: 1rem;
  }
}
</style>
