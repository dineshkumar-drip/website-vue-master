<template>
  <div>
    <!-- New en-us redesigned homepage -->
    <div v-if="isUsRedesign" class="dc-new">
      <redesign-app-top-bar />
      <redesign-app-nav />
      <redesign-home-page />
      <redesign-app-footer />
    </div>
    <!-- Existing en/en-us importers page -->
    <importers v-else-if="showImporters" />
    <exporters v-else-if="showMexicoExporters" />
    <home-page v-else />
  </div>
</template>

<script>
import HomePage from './HomePage.vue'
import Importers from '~/components/Importers'
import Exporters from '~/components/exporters'

export default {
  data() {
    return {
      title: this.$t('pages.home.title'),
      description: this.$t('pages.home.description'),
      ldJsonSchema: null
    }
  },
  head() {
    if (this.isUsRedesign) {
      return {
        title: 'Drip Capital: Working Capital for Growing Businesses',
        meta: [
          { hid: 'description', name: 'description', content: 'Drip Capital provides fast, flexible working capital for US businesses. Vendor financing, receivables financing, and lines of credit with 24-hour approval.' },
          { hid: 'og:title', property: 'og:title', content: 'Drip Capital: Working Capital for Growing Businesses' },
          { hid: 'og:description', property: 'og:description', content: 'Fast, flexible working capital for US businesses. 24-hour approval, no collateral required.' }
        ],
        link: [
          { rel: 'canonical', href: 'https://www.dripcapital.com/en-us/' },
          ...this.hreflangs
        ],
        script: this.ldJsonSchema
          ? [
              {
                hid: 'ldjson-schema-index',
                innerHTML: JSON.stringify(this.ldJsonSchema),
                type: 'application/ld+json'
              }
            ]
          : [],
        __dangerouslyDisableSanitizersByTagID: {
          'ldjson-schema-index': ['innerHTML']
        }
      }
    }
    return {
      needLineBreak: true,
      title: `${this.title} | Drip Capital`,
      meta: [
        { hid: 'description', name: 'description', content: this.description }
      ],
      link: [{ rel: 'canonical', href: this.canonicalTag }, ...this.hreflangs],
      script: this.ldJsonSchema
        ? [
            {
              hid: 'ldjson-schema-index',
              innerHTML: JSON.stringify(this.ldJsonSchema),
              type: 'application/ld+json'
            }
          ]
        : [],
      __dangerouslyDisableSanitizersByTagID: {
        'ldjson-schema-index': ['innerHTML']
      }
    }
  },
  computed: {
    isUsRedesign() {
      return this.$i18n.locale === 'en-us'
    },
    showImporters() {
      return this.$i18n.locale === 'en'
    },
    showMexicoExporters() {
      return this.$i18n.locale === 'es-mx'
    },
    canonicalTag() {
      return process.env.DRIP_WEB_HOST + this.$route.path
    },
    hreflangs() {
      return [
        {
          hid: `alternate-hreflang-en`,
          rel: 'alternate',
          href: 'https://www.dripcapital.com',
          hreflang: 'en'
        },
        {
          hid: `alternate-hreflang-en-in`,
          rel: 'alternate',
          href: 'https://www.dripcapital.com/en-in',
          hreflang: 'en-in'
        },
        {
          hid: `alternate-hreflang-en-us`,
          rel: 'alternate',
          href: 'https://www.dripcapital.com/en-us',
          hreflang: 'en-us'
        },
        {
          hid: `alternate-hreflang-es-mx`,
          rel: 'alternate',
          href: 'https://www.dripcapital.com/es-mx',
          hreflang: 'es-mx'
        }
      ]
    }
  },
  mounted() {
    switch (this.$i18n.locale) {
      case 'en':
      case 'en-in':
        this.ldJsonSchema = {
          '@context': 'https://schema.org',
          '@type': 'Corporation',
          name: 'Drip Capital',
          url: 'https://www.dripcapital.com',
          logo: 'https://assets.dripcapital.com/_nuxt/img/drip-logo.3600dbd.svg',
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '9987779334',
            contactType: 'customer service',
            areaServed: 'IN',
            availableLanguage: 'en'
          },
          sameAs: 'https://www.linkedin.com/company/dripcapital'
        }
        break
      case 'en-us':
        this.ldJsonSchema = {
          '@context': 'https://schema.org',
          '@type': 'Corporation',
          name: 'Drip Capital',
          url: 'https://www.dripcapital.com/en-us',
          logo: 'https://assets.dripcapital.com/_nuxt/img/drip-logo.3600dbd.svg',
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-650-437-0150',
            contactType: 'customer service',
            areaServed: 'US',
            availableLanguage: 'en'
          },
          sameAs: 'https://www.linkedin.com/company/dripcapital'
        }
        break
      case 'es-mx':
        this.ldJsonSchema = {
          '@context': 'https://schema.org',
          '@type': 'Corporation',
          name: 'Drip Capital',
          url: 'https://www.dripcapital.com/es-mx',
          logo: 'https://assets.dripcapital.com/_nuxt/img/drip-logo.3600dbd.svg',
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-650-437-0150',
            contactType: 'customer service',
            areaServed: 'MX',
            availableLanguage: 'es'
          },
          sameAs: 'https://mx.linkedin.com/showcase/drip-capital-mx'
        }
        break
    }
  },
  components: {
    HomePage,
    Importers,
    Exporters
  }
}
</script>
