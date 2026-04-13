<template>
  <page-section section-class="section-about-why">
    <b-container fluid>
      <b-row>
        <b-col :lg="6">
          <heading :text="dictionary.title" />
        </b-col>
      </b-row>
      <b-row>
        <b-col :lg="6" class="col-lead pt-5" :order="2" :order-lg="1">
          <ul class="switch-list p-0">
            <li class="switcher" v-for="(item, i) in dictionary.items" :key="i">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </li>
          </ul>
        </b-col>
        <b-col
          :lg="6"
          :order="1"
          :order-lg="2"
          class="d-flex justify-content-center h-100"
        >
          <b-img-lazy
            :src="require('~/assets/images/about/why/infograph.svg')"
            :alt="$t('pages.newHome.insights.imgAlt')"
            class="why-img"
          />
        </b-col>
      </b-row>
    </b-container>
  </page-section>
</template>

<script>
import PageSection from '~/components/PageSection'
import Heading from '~/components/common/ImpoExpo/Heading'

export default {
  data() {
    return {
      dictionary: this.$t('pages.about.why')
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

.section-about-why {
  .why-img {
    object-fit: scale-down;
    object-position: top center;
    max-width: 100%;
    height: auto;
  }
  .switch-list {
    list-style: none;
    .switcher {
      font-weight: 400;
      font-size: 1rem;
      margin-bottom: 2rem;
      border-left: 4px solid $primary;
      padding-left: 1rem;
      padding-bottom: 1rem;
      h3 {
        color: $dark-blue;
        font-size: 1.75rem;
        font-weight: 600;
        letter-spacing: 0.5px;
      }
      p {
        border-left: 4px solid transparent;
      }
    }
  }
  button {
    display: block;
    margin: 0 auto;
  }
}
@include media-breakpoint-down(md) {
  .col-lead {
    padding: 0;
  }
  .section-about-why {
    .why-img {
      max-width: 70%;
    }
    .switch-list {
      background-color: $bg-light-gray;
      padding: 2rem 1rem 0.5rem 1rem !important;
      .switcher {
        // padding-left: 0;
        opacity: 1;
        color: $dark-blue;
        margin-bottom: 2rem;
        h3 {
          border-left: 0;
          padding-left: 0;
          font-size: 1.25rem;
          font-weight: 400;
          white-space: normal;
        }
        p {
          border-left: 0;
          padding-left: 0;
          font-size: 1rem;
        }
      }
    }
  }
}
</style>
