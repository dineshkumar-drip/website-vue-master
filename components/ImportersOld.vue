<template>
  <page-section section-class="importers-page-container">
    <main-header />
    <main-jumbotron>
      <template slot="content">
        <b-container class="p-0">
          <b-row>
            <b-col cols="12" lg="6">
              <h1 class="display-3">
                <vue-typer
                  id="typewriter"
                  :text="$t('pages.importers.jumbotron.title')"
                  :repeat="0"
                  @typed-char="onTypedChar"
                />
                <span class="slash text-primary"></span>
              </h1>
              <b-row data-aos="fade-right" v-if="loaded">
                <b-col cols="12" md="10">
                  <p class="lead">
                    {{ $t('pages.importers.jumbotron.lead.line1') }}
                  </p>
                  <p class="lead">
                    {{ $t('pages.importers.jumbotron.lead.line2') }}
                  </p>
                  <ul class="lead">
                    <li
                      v-for="(desc, index) in $t(
                        'pages.importers.jumbotron.lead.d1'
                      )"
                      :key="index"
                      class="lead desc"
                    >
                      {{ desc }}
                    </li>
                  </ul>
                  <p class="lead">
                    {{ $t('pages.importers.jumbotron.lead.line3') }}
                    <a
                      v-track-click
                      id="importers-mail"
                      :href="'mailto:' + $t('pages.importers.emailId')"
                    >
                      {{ $t('pages.importers.emailId') }}
                    </a>
                    {{ $t('pages.importers.jumbotron.lead.line4') }}
                    <a
                      v-track-click
                      id="importers-phone"
                      :href="'tel:' + $t('pages.importers.phoneNumber')"
                    >
                      {{ $t('pages.importers.phoneNumber') }}
                    </a>
                    {{ $t('pages.importers.jumbotron.lead.line5') }}
                  </p>
                </b-col>
              </b-row>
            </b-col>
            <b-col cols="12" lg="6" data-aos="zoom-out" v-if="loaded">
              <contact-form />
            </b-col>
          </b-row>
        </b-container>
      </template>
    </main-jumbotron>
    <main-footer />
  </page-section>
</template>

<script>
import MainHeader from '~/components/MainHeader'
import MainJumbotron from '~/components/MainJumbotron'
import MainFooter from '~/components/footer/MainFooter'

import PageSection from '~/components/PageSection'

import ContactForm from '~/components/importers/ContactForm'

import typerHelper from '~/modules/typer-helper'

export default {
  data() {
    return {
      loaded: false,
      title: this.$t('pages.importers.title'),
      description: this.$t('pages.importers.description')
    }
  },
  mounted() {
    this.loaded = true
  },
  methods: {
    onTypedChar(typedChar, typedCharIndex) {
      typerHelper(typedChar, typedCharIndex, this)
    }
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
    MainHeader,
    MainJumbotron,
    MainFooter,
    ContactForm,
    PageSection
  }
}
</script>
