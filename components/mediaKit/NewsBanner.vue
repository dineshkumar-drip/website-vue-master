<template>
  <page-section section-class="section-banner">
    <div class="news-banner">
      <b-container>
        <b-row>
          <b-col :cols="12" v-for="(item, index) in items" :key="index">
            <div>
              <p class="main-text">{{ item.title }}</p>
              <p class="sm-text">
                {{ item.desc }}<br />
                {{ item.desc2 }}
              </p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </page-section>
</template>

<script>
import PageSection from '~/components/PageSection'
import Heading from '~/components/common/ImpoExpo/Heading'

export default {
  props: {
    dictionary: {
      type: String
    },
    page: {
      type: String
    }
  },
  data() {
    return {
      items: this.$t(this.dictionary).items
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

.section-banner {
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.news-banner {
  width: 100%;
  padding: 7em 0;
  background-color: #0a2e57;
}

.main-text,
.sm-text {
  color: white;
  text-align: center;
  margin: 0;
}

.main-text {
  font-size: 2.5em;
}

.sm-text {
  font-size: 1.2em;
  padding-top: 2rem;
}

@include media-breakpoint-down(md) {
  .section-banner {
    .news-banner {
      padding: 5rem 0;
    }
  }
}
</style>
