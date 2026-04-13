<template>
  <section class="section-get-in-touch" id="get-in-touch">
    <b-container>
      <b-row>
        <b-col lg="12" data-aos="fade-right">
          <h3 class="section-title">
            {{ $t('pages.contact.getInTouch.title') }}
          </h3>
        </b-col>
        <b-col :lg="5" :md="6" offset-lg="1">
          <div class="text-center icon">
            <b-img-lazy
              :src="require(`~/assets/images/common/california.svg`)"
              alt=""
              :width="260"
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
              v-track-click
              id="contact-phone-us"
              :href="'tel:' + $t('pages.contact.jumbotron.lead.phone')"
              class="btn btn-ghost-secondary mt-4"
              data-aos="fade-right"
            >
              {{ $t('pages.contact.jumbotron.lead.phone') }}
            </a>
          </div>
          <div class="map" data-aos="zoom-out">
            <iframe
              :src="$t('us.mapUrl')"
              width="100%"
              height="428"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </b-col>
        <b-col :lg="5" :md="6">
          <div class="text-center icon">
            <b-img-lazy
              :src="require(`@/assets/images/common/${$t('region.slug')}.svg`)"
              :alt="$t('region.city') + ' Icon'"
              :width="260"
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
              v-track-click
              id="contact-phone-region"
              :href="'tel:' + $t('region.phone')"
              class="btn btn-ghost-secondary mt-4"
              data-aos="fade-right"
            >
              {{ $t('region.phone') }}
            </a>
          </div>
          <div class="map" data-aos="zoom-out">
            <iframe
              :src="`${$t('region.mapUrl')}`"
              width="100%"
              height="428"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
export default {}
</script>
