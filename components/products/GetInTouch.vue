<template>
  <page-section section-class="section-home-get-in-touch">
    <b-container>
      <b-row data-aos="fade-right">
        <b-col cols="12">
          <h3 class="section-title">
            {{ $t('pages.home.getInTouch.title') }}
          </h3>
        </b-col>
      </b-row>
      <b-row class="justify-content-center">
        <b-col lg="4" md="4" cols="12">
          <div class="text-center icon">
            <b-img-lazy
              :src="require(`~/assets/images/common/california.svg`)"
              :alt="$t('us.city') + ' Icon'"
              class="d-block mx-auto"
              data-aos="zoom-out"
            />
            <strong
              class="text-uppercase d-block location"
              data-aos="fade-right"
            >
              {{ $t('us.city') }}, {{ $t('us.country') }}
            </strong>
            <a
              :href="'tel:' + $t('us.phone')"
              class="btn btn-ghost-secondary mt-4"
              data-aos="fade-right"
            >
              {{ $t('us.phone') }}
            </a>
          </div>
        </b-col>
        <b-col lg="4" md="4" cols="12">
          <div class="text-center icon">
            <b-img-lazy
              :src="require(`@/assets/images/common/${$t('region.slug')}.svg`)"
              :alt="$t('region.city') + ' Icon'"
              class="d-block mx-auto"
              data-aos="zoom-out"
            />
            <strong
              class="text-uppercase d-block location"
              data-aos="fade-right"
            >
              {{ $t('region.city') }}, {{ $t('region.country') }}
            </strong>
            <a
              :href="'tel:' + $t('region.phone')"
              class="btn btn-ghost-secondary mt-4"
              data-aos="fade-right"
            >
              {{ $t('region.phone') }}
            </a>
          </div>
        </b-col>
        <b-col lg="4" md="4" cols="12">
          <div class="text-center icon">
            <b-img-lazy
              :src="require(`~/assets/images/common/email.svg`)"
              :alt="$t('pages.home.getInTouch.email') + ' Icon'"
              class="d-block mx-auto email"
              data-aos="zoom-out"
            />
            <strong
              class="text-uppercase d-block location"
              data-aos="fade-right"
            >
              {{ $t('pages.home.getInTouch.email') }}
            </strong>
            <a
              :href="'mailto:' + $t('region.email')"
              class="btn btn-ghost-secondary mt-4 text-lowercase"
              data-aos="fade-right"
            >
              {{ $t('region.email') }}
            </a>
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
