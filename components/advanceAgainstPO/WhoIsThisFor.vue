<template>
  <page-section section-class="who-is-this-for">
    <b-container fluid class="position-relative">
      <div class="content-box mx-auto px-4 px-md-5 py-4 py-md-5">
        <heading :text="dictionary.title" />

        <div class="d-block d-lg-none text-center mb-3">
          <b-img
            class="img-fluid"
            :src="require(`@/assets/images/exporters/advantage.png`)"
            alt="Who is this for image"
            width="400"
          />
        </div>

        <p class="lead-text mt-3">{{ dictionary.intro }}</p>

        <b-row class="mt-4 align-items-center">
          <b-col :lg="6" class="d-flex align-items-center">
            <ul class="custom-list">
              <li v-for="(point, index) in dictionary.points" :key="index">
                <span class="point-normal">{{ point.normal }}</span>
                <span class="point-bold">{{ point.bold }}</span>
              </li>
            </ul>
          </b-col>

          <b-col
            :md="6"
            class="d-none d-lg-flex justify-content-center align-items-start"
          >
            <b-img
              class="img-fluid"
              :src="require(`@/assets/images/exporters/advantage.png`)"
              alt="Who is this for image"
              width="300"
            />
          </b-col>
        </b-row>

        <p class="closing-text mt-4">{{ dictionary.closing }}</p>
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
      dictionary: this.$t(`pages.${this.page}.whoIsThisFor`)
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

.who-is-this-for {
  .content-box {
    max-width: 1366px;
    height: auto;
    background: #ffffff;
    border-radius: 4px;
    box-shadow: 0px 12px 30px 0px rgba(0, 0, 0, 0.07);
    position: relative;
    z-index: 1;
  }

  .lead-text,
  .custom-list li,
  .closing-text {
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 400;
    font-size: 1.25rem;
    color: $noble-blue-500;
    line-height: 36px;
    letter-spacing: 0px;
    text-align: justify;
  }

  .custom-list {
    padding-left: 0;
    list-style: none;

    li {
      margin-bottom: 1rem;

      &::before {
        content: '- ';
        margin-right: 0.5rem;
      }
    }
  }

  .point-normal,
  .point-bold {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1.25rem;
    color: $noble-blue-500;
    line-height: 36px;
    letter-spacing: 0px;
    text-align: justify;
  }

  .point-normal {
    color: $noble-blue-500;
    font-weight: 400;
  }

  .point-bold {
    font-weight: 700;
  }

  @include media-breakpoint-down(md) {
    .content-box {
      height: auto;
      padding: 2rem;
    }
  }
}
</style>
