<template>
  <section class="partner-page-container">
    <custom-header :defaultLightHeader="true">
      <template slot="menu-items">
        <li class="nav-item btn btn-primary apply-btn">
          <a
            v-track-click
            id="fieo-header-cta"
            :to="localePath('apply-now')"
            target="_self"
            class="nav-link mxp"
            v-smooth-scroll="{ offset: -146 }"
          >
            {{ $t('landingHeader.apply') }}
          </a>
        </li>
      </template>
    </custom-header>
    <main-jumbotron>
      <template slot="content">
        <b-container fluid class="p-0">
          <b-row id="apply-now">
            <b-col cols="12" lg="6">
              <h1 class="display-3 fieo-main-title">
                <vue-typer
                  id="typewriter"
                  :text="$t('landing.partners.fieo.description')"
                  :repeat="0"
                  @typed-char="onTypedChar"
                />
                <span class="slash text-primary"></span>
              </h1>
              <b-row>
                <b-col cols="12" xl="8" md="9">
                  <p class="lead">
                    {{ $t('landing.partners.fieo.jumbotron.line1') }}
                  </p>
                </b-col>
              </b-row>
            </b-col>
            <b-col cols="12" lg="7" v-if="loaded" offset-xl="1" xl="5">
              <apply-form page="fieo">
                <template slot="form-title">
                  <h4 class="text-secondary card-title">
                    {{ $t('landing.partners.fieo.jumbotron.reg') }}
                  </h4>
                </template>
              </apply-form>
            </b-col>
          </b-row>
        </b-container>
      </template>
    </main-jumbotron>
    <success />
    <benefits :data="$t('landing.partners.fieo.benefits')" />
    <events />
    <landing-footer />
  </section>
</template>

<script>
import CustomHeader from '~/components/partners/CustomHeader'
//import LandingHeader from '~/components/LandingHeader'
import MainJumbotron from '~/components/MainJumbotron'
import LandingFooter from '~/components/LandingFooter'

import Success from '~/components/common/Success'
import Benefits from '~/components/common/Benefits'
import ApplyForm from '~/components/forms/ApplyForm'

import typerHelper from '~/modules/typer-helper'
import Events from '~/components/partners/Events'

export default {
  nuxtI18n: {
    paths: {
      en: '/partners/fieo',
      es: '/partners/fieo'
    }
  },
  data() {
    return {
      title: this.$t('landing.partners.fieo.title'),
      description: this.$t('landing.partners.fieo.description'),
      loaded: false
    }
  },
  methods: {
    onTypedChar(typedChar, typedCharIndex) {
      typerHelper(typedChar, typedCharIndex, this)
    }
  },
  mounted() {
    this.loaded = true
  },
  head() {
    return {
      needLineBreak: true,
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.description }
      ]
    }
  },
  components: {
    CustomHeader,
    //LandingHeader,
    MainJumbotron,
    LandingFooter,
    Success,
    Benefits,
    Events,
    ApplyForm
  }
}
</script>
