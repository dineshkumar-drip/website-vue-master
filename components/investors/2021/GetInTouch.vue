<template>
  <page-section section-class="section-contact section-conclusion pt-0 pt-md-5">
    <b-container fluid>
      <hr class="bg-dark-gray pb-5 d-none d-lg-block" />
      <b-row align-h="center">
        <b-col :cols="12" :lg="7">
          <heading :text="dictionary.title" center />
        </b-col>
      </b-row>
      <div class="d-md-flex justify-content-center">
        <div v-for="item in dictionary.items" :key="item.id" class="items">
          <a
            v-track-click
            class="d-flex align-items-center mx-auto"
            id="contact-direction-us"
            target="_blank"
          >
            <font-awesome-icon
              class="contact-icons mr-1"
              :icon="['fas', item.icon]"
            />
            {{ item.text }}
          </a>
        </div>
      </div>
    </b-container>
  </page-section>
</template>

<script>
import PageSection from '~/components/PageSection'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import Heading from '~/components/common/ImpoExpo/Heading'

export default {
  data() {
    return {
      dictionary: this.$t('pages.investors.getInTouch')
    }
  },
  components: {
    PageSection,
    FontAwesomeIcon,
    Heading
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
.contact-icons {
  color: $dark-blue;
}
.section-contact {
  background-color: transparent;
}

.cta-btn {
  border-radius: 5px;
  font-family: $investor-poppins;
  font-size: 0.875rem;
  letter-spacing: 0.5px;
}

.contact-icons {
  font-size: 1.25rem;
  margin-right: 1rem !important;
  transform: scaleX(-1);
}
.items {
  margin-top: 2rem;
  &:not(:last-child) {
    margin-right: 3rem;
  }
}
</style>
