<template>
  <section class="section-conclusion">
    <b-container fluid>
      <b-row>
        <b-col :lg="10" data-aos="fade-right" :offset="1">
          <h3 class="section-title">
            {{ $t('pages.channelPartner.conclusion.title') }}
          </h3>
        </b-col>
      </b-row>
      <b-row class="justify-content-between">
        <b-col>
          <!--<b-col :lg="4" :offset-lg="1" class="pt-5"> -->
          <div class="text-center pt-5">
            <b-img-lazy
              :src="require(`@/assets/images/common/${$t('region.slug')}.svg`)"
              width="160"
              :alt="$t('region.city') + ' Icon'"
              class="d-block mx-auto"
              data-aos="zoom-out"
            />
            <p
              class="text-uppercase d-block font-weight-bold"
              data-aos="fade-right"
            >
              {{ $t('region.city') }}, {{ $t('region.country') }}
            </p>
            <a
              v-track-click
              id="partners-phone"
              :href="'tel:' + $t('region.phone')"
              class="btn btn-ghost-secondary"
              data-aos="fade-right"
              >{{ $t('region.phone') }}</a
            >
          </div>
        </b-col>
        <b-col>
          <div class="text-center pt-5">
            <b-img-lazy
              :src="require(`~/assets/images/common/email.svg`)"
              alt
              :width="148"
              class="d-block mx-auto"
              data-aos="zoom-out"
            />
            <p
              class="text-uppercase d-block font-weight-bold"
              data-aos="fade-right"
            >
              {{ $t('common.form.placeholders.email') }}
            </p>
            <a
              v-track-click
              id="partners-email"
              :href="'mailto:' + $t('pages.channelPartner.conclusion.email')"
              class="btn btn-ghost-secondary text-lowercase"
              data-aos="fade-right"
              >{{ $t('pages.channelPartner.conclusion.email') }}</a
            >
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
