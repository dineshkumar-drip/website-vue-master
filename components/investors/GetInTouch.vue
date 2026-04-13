<template>
  <page-section section-class="section-contact section-conclusion section-home">
    <b-container fluid>
      <b-row class="justify-content-center">
        <b-col class="col-lead text-center" :lg="8">
          <h4 class="title-intro no-slash">
            {{ $t('pages.investors.getInTouch.title') }} <br />
            {{ $t('pages.investors.getInTouch.desc') }}
          </h4>
        </b-col>
      </b-row>
      <b-row class="justify-content-center">
        <b-col :lg="4" :md="5">
          <a
            v-track-click
            id="investments-email"
            :href="'mailto:' + $t('pages.investors.email')"
            class="btn btn-lg common-cta email-cta text-white py-3 w-100 mt-4"
            ><font-awesome-icon
              class="contact-icons mr-2"
              :icon="['fas', 'envelope']"
            />
            {{ $t('pages.investors.email') }}
          </a>
        </b-col>
        <b-col :lg="4" :md="5">
          <a
            v-track-click
            id="contact-phone-us"
            :href="'tel:' + $t('pages.investors.phone')"
            class="btn btn-lg common-cta text-white py-3 w-100 mt-4"
            ><font-awesome-icon
              class="contact-icons phone-icon mr-2"
              :icon="['fas', 'phone']"
            />
            {{ $t('pages.investors.phone') }}</a
          >
        </b-col>
      </b-row>
      <b-row class="justify-content-center">
        <b-col :lg="8" :md="10">
          <a
            v-track-click
            id="contact-direction-us"
            class="btn btn-lg common-cta add-cta text-white py-3 w-100 mt-4"
            target="_blank"
          >
            <font-awesome-icon
              class="contact-icons mr-1"
              :icon="['fas', 'map-marker-alt']" />
            {{ $t('pages.investors.address') }} <span class="slash"></span
          ></a>
        </b-col>
      </b-row>
    </b-container>
  </page-section>
</template>

<script>
import PageSection from '~/components/PageSection'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  components: {
    PageSection,
    FontAwesomeIcon
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
.section-contact {
  background-color: transparent;
}

.cta-btn {
  border-radius: 5px;
  font-family: $investor-poppins;
  font-size: 0.875rem;
  letter-spacing: 0.5px;
}

.phone-icon {
  transform: rotate(90deg);
}
</style>
