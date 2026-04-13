<template>
  <b-jumbotron>
    <div class="text-white">
      <slot name="content">
        <b-container>
          <b-row>
            <b-col :cols="12" :md="7" class="text-md-left text-center">
              <h1 class="display-3">
                {{ $t('pages.investors.jumbotron.title') }}
              </h1>
            </b-col>
          </b-row>
          <b-row>
            <b-col :cols="12" :xl="7" :md="8" class="text-md-left text-center">
              <p class="lead1">{{ $t('pages.investors.lead.line1') }}</p>
              <p class="lead2">{{ $t('pages.investors.lead.line2') }}</p>
              <a
                v-track-click
                id="investors-jumbotron-cta"
                href="#apply"
                class="btn btn-primary btn-lg cta-invest py-3 px-5 text-uppercase"
                v-smooth-scroll="{ offset: -85 }"
                >{{ $t('pages.investors.jumbotron.cta') }}</a
              >
            </b-col>
          </b-row>
        </b-container>
      </slot>
    </div>
  </b-jumbotron>
</template>
