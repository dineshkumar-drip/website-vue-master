<template>
  <section class="impo-expo contact-page-container">
    <main-header :isContactPage="true" />
    <main-jumbotron>
      <template slot="content">
        <b-container class="p-0">
          <b-row>
            <b-col cols="12" lg="6">
              <h1 class="display-3">
                <vue-typer
                  id="typewriter"
                  :text="$t('pages.contact.jumbotron.title')"
                  :repeat="0"
                  @typed-char="onTypedChar"
                />
                <span class="slash text-primary"></span>
              </h1>
              <b-row data-aos="fade-right" v-if="loaded">
                <b-col cols="12" xl="8" md="9">
                  <p class="lead">
                    {{ $t('pages.contact.jumbotron.lead.line1') }}
                  </p>
                  <p class="lead">
                    {{ $t('pages.contact.jumbotron.lead.line2') }}
                    <a
                      v-if="!isUs"
                      v-track-click
                      id="contact-jumbo-phone"
                      :href="'tel:' + $t('region.phone')"
                    >
                      {{ $t('region.phone') }}
                    </a>
                    <a
                      v-else
                      v-track-click
                      id="contact-jumbo-phone"
                      :href="'tel:' + $t('pages.contact.jumbotron.lead.phone')"
                    >
                      {{ $t('pages.contact.jumbotron.lead.phone') }}
                    </a>
                    {{ $t('pages.contact.jumbotron.lead.line3') }}
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
    <get-in-touch />
    <conclusion />
    <main-footer />
  </section>
</template>

<script>
import MainHeader from '~/components/common/ImpoExpo/MainHeader'
import MainJumbotron from '../components/MainJumbotron'
import MainFooter from '~/components/footer/MainFooter'

import ContactForm from '../components/contact/ContactForm'
import GetInTouch from '../components/contact/GetInTouch'
import Conclusion from '../components/contact/Conclusion'

import typerHelper from '~/modules/typer-helper'
export default {
  nuxtI18n: {
    paths: {
      en: '/contact',
      es: '/contacto'
    }
  },
  data() {
    return {
      loaded: false,
      title: this.$t('pages.contact.title'),
      description: this.$t('pages.contact.description')
    }
  },
  computed: {
    isUs() {
      return (
        this.$i18n.locale.indexOf('en-us') > -1 ||
        this.$i18n.locale.indexOf('en') > -1
      )
    },
    hreflangs() {
      return [
        {
          hid: `alternate-hreflang-en`,
          rel: 'alternate',
          href: 'https://www.dripcapital.com/contact',
          hreflang: 'en'
        },
        {
          hid: `alternate-hreflang-es-mx`,
          rel: 'alternate',
          href: 'https://www.dripcapital.com/es-mx/contact',
          hreflang: 'es-mx'
        },
        {
          hid: `alternate-hreflang-en-in`,
          rel: 'alternate',
          href: 'https://www.dripcapital.com/en-in/contact',
          hreflang: 'en-in'
        },
        {
          hid: `alternate-hreflang-en-us`,
          rel: 'alternate',
          href: 'https://www.dripcapital.com/en-us/contact',
          hreflang: 'en-us'
        }
      ]
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
      ],
      links: [...this.hreflangs]
    }
  },
  components: {
    MainHeader,
    MainJumbotron,
    MainFooter,
    ContactForm,
    GetInTouch,
    Conclusion
  }
}
</script>
