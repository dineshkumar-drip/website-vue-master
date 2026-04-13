<template>
  <b-container class="quick-facts">
    <b-row>
      <b-col :cols="12">
        <div class="banner-title">
          {{ $t(`pages.${page}.quickFacts.title`) }}
        </div>
        <div class="banner-subtitle">
          {{ $t(`pages.${page}.quickFacts.subtitle`) }}
        </div>
      </b-col>
    </b-row>
    <b-row class="mt-4">
      <b-col :cols="12">
        <page-section section-class="partner-success-section" class="light p-0">
          <b-row>
            <b-col
              :cols="12"
              :lg="3"
              class="mb-4 mb-lg-0"
              v-for="(item, index) in $t('pages.newLanding.quickFacts.success')"
              :key="index"
            >
              <div class="success-card text-center">
                <div class="mx-3">
                  <p mt-0 class="stat-number stat-title font-weight-bold">
                    {{ item.stat }}
                  </p>
                  <p class="sec-line mt-1 mb-0">{{ item.sec }}</p>
                </div>
              </div>
            </b-col>
          </b-row>
        </page-section>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import Heading from '~/components/common/ImpoExpo/Heading'
import PageSection from '~/components/PageSection'

export default {
  props: {
    page: {
      type: String,
      default: 'importers'
    }
  },
  data() {
    return {
      expanded: false,
      angle: 'angle-down'
    }
  },
  components: {
    Heading,
    PageSection
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';

.stat-number {
  color: $wealthy-green-500;
}

.banner-title {
  font-size: 32px;
  font-weight: 700;
  line-height: 43.65px;
  color: $noble-blue-500;
  text-align: center;
}

.banner-subtitle {
  font-size: 24px;
  font-weight: 400;
  line-height: 32.74px;
  text-align: center;
}

.quick-facts {
  background: #ecf5fb;
  min-width: 100%;
  padding: 56px 108px;

  h3 {
    color: $secondary;
  }

  .f-32 {
    font-size: 2rem;
  }
}

@media (max-width: 661px) {
  .quick-facts {
    padding: 56px 20px;
  }
  .banner-title {
    font-size: 28px;
  }
  .banner-subtitle {
    font-size: 22px;
  }
}

.title-underline {
  position: relative;
  margin-bottom: 4rem;
  color: $dark-blue;

  &.title-white {
    color: $white;
  }

  span {
    &:after {
      content: '';
      width: 4rem;
      height: 2.5px;
      background: $primary;
      position: absolute;
      bottom: -1.5rem;
      left: 0;
    }

    &.center {
      &:after {
        right: 0;
        margin: 0 auto;
      }
    }
  }
}

hr {
  width: 50%;
  margin-bottom: 10px;
}

.dark {
  padding-top: 3rem;
  background: $secondary;
  color: #ffffff;
}

.light {
  color: $secondary;
}

p {
  margin-top: 10%;
}

.success-card {
  box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.15);
  border: solid 1px $product-shadow;
  border-radius: 12px;
  padding: 12px 46px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
}

@media (max-width: 575px) {
  .title-underline {
    span {
      &:after {
        &:after {
          right: 0;
          margin: 0 auto;
        }
      }
    }
  }
}
</style>
