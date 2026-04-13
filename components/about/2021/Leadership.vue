<template>
  <page-section section-class="section-about-leadership">
    <b-container>
      <heading center :text="dictionary.title" />
      <b-row align-h="center">
        <b-col :cols="12" :lg="10">
          <b-row align-h="center">
            <b-col
              v-for="item in dictionary.items"
              :key="item.id"
              :lg="4"
              class="mb-0"
              :cols="10"
              :sm="6"
            >
              <div class="leader-container">
                <div class="front">
                  <b-img
                    class="border-0 shadow leader"
                    :src="
                      require(`~/assets/images/about/leadership/${item.img}.png`)
                    "
                    :alt="item.name"
                    rounded
                    text-variant="white"
                  />
                  <div class="position-absolute">
                    <h3 class="name">
                      <span>{{ item.name }}</span>
                      <a
                        class="social"
                        :href="social.url"
                        v-for="social in item.social"
                        :key="social.id"
                        target="_blank"
                      >
                        <b-img
                          :src="
                            require(`~/assets/images/about/leadership/${social.icon}.svg`)
                          "
                          width="20"
                        ></b-img>
                      </a>
                    </h3>
                  </div>
                </div>
                <div class="back">
                  <span>{{ item.description }}</span>
                </div>
              </div>
            </b-col>
          </b-row>
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
      dictionary: this.$t('pages.about.leadership')
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
.section-about-leadership {
  margin-bottom: 5rem;
  .leader-container {
    position: relative;
    margin-bottom: 7.5rem;
    .front {
      .leader {
        width: 100%;
      }
      .name {
        color: $dark-blue;
        font-size: 1.25rem;
        letter-spacing: 0.5px;
        font-weight: 700;
        padding-top: 1.5rem;
      }
      .social {
        padding-left: 0.5rem;
        top: -2px;
        position: relative;
      }
    }
    .back {
      display: flex;
      color: $white;
      align-items: flex-end;
      position: absolute;
      bottom: 0;
      padding: 1rem;
      height: 100%;
      opacity: 0;
      transition: opacity 300ms;
      &:hover {
        opacity: 1;
      }
      span {
        z-index: 1;
      }
      &:before {
        content: '';
        background-color: $dark-blue;
        border-radius: 5px;
        height: 100%;
        width: 100%;
        left: 0;
        opacity: 0.8;
        top: 0;
        position: absolute;
      }
    }
  }
}
</style>
