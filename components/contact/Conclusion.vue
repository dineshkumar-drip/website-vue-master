<template>
  <section class="section-contact-conclusion" id="contact-conclusion">
    <b-container>
      <b-row>
        <b-col lg="5" offset-lg="1" cols="12" sm="6" class="mb-5 mb-sm-0">
          <div class="text-center items-contact">
            <div class="img-container">
              <b-img-lazy
                :src="require(`~/assets/images/common/email.svg`)"
                alt="Email"
                :height="80"
                class="d-block mx-auto"
                data-aos="zoom-out"
              />
            </div>
            <a
              v-track-click
              id="contact-email"
              :href="'mailto:' + $t('region.email')"
              class="btn btn-ghost-secondary"
              data-aos="fade-right"
            >
              {{ $t('region.email') }}
            </a>
          </div>
        </b-col>
        <b-col lg="5" cols="12" sm="6">
          <div class="text-center items-contact">
            <div class="img-container">
              <b-img-lazy
                :src="require(`~/assets/images/common/linkedin-red.svg`)"
                alt="Linkedin"
                :height="80"
                class="d-block mx-auto"
                data-aos="zoom-out"
              />
            </div>
            <a
              v-track-click
              id="contact-linkedin"
              :href="linkedInUrl"
              target="_blank"
              class="btn btn-ghost-secondary"
              data-aos="fade-right"
            >
              {{ $t('pages.contact.conclusion.linkedIn') }}
            </a>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  computed: {
    linkedInUrl() {
      return this.$i18n.locale.indexOf('mx') > -1
        ? 'https://www.linkedin.com/showcase/drip-capital-mx'
        : 'https://www.linkedin.com/company/dripcapital'
    }
  }
}
</script>
