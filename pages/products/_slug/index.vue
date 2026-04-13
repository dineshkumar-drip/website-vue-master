<template>
  <div>
    <home :keyword="keyword" v-if="showHome" />
    <product :post="post" :keyword="keyword" v-if="post" />
    <old-product :keyword="keyword" v-else />
  </div>
</template>
<script>
import Home from '~/components/Home'
import Product from '~/components/Product'
import OldProduct from '~/components/OldProduct'
import { createClient } from '~/plugins/contentful.js'

export default {
  nuxtI18n: {
    paths: {
      'en-in': '/products/:slug',
      'en-us': '/products/:slug',
      'es-mx': '/productos/:slug'
    }
  },
  data() {
    return {
      experimentalProducts: [
        'drip capital',
        'India factoring',
        'Invoice credit',
        'Invoice discount',
        'Invoice finance'
      ],
      slug: this.$route.params.slug,
      faqSchema: null,
      post: null,
      hreflang:
        null /* all possible keys- { enHreflang,enInHreflang,enUsHreflang, esMxHreflang } */
    }
  },
  asyncData(context) {
    if (context.app.i18n.locale == 'en') {
      context.error({ statusCode: 404 })
      return
    }

    const client =
      context.app.i18n.locale.indexOf('es') > -1
        ? createClient('mexico')
        : createClient()
    const locale =
      context.app.i18n.locale.indexOf('en-us') > -1
        ? 'productPageContentUs'
        : 'productPageContent'
    return client
      .getEntries({
        content_type: locale,
        'fields.slug': context.route.params.slug
      })
      .then((entries) => {
        let post = entries.items[0]
        if (post) {
          const {
            enHreflang,
            esMxHreflang,
            enMxHreflang,
            enAeHreflang,
            enInHreflang,
            enUsHreflang,
            esEcHreflang,
            enEcHreflang
          } = post.fields
          return {
            post: post.fields,
            faqSchema: JSON.stringify(post.fields && post.fields.faqSchema),
            title: post.fields && post.fields.title,
            description: post.fields && post.fields.metaDescription,
            hreflang: {
              enHreflang,
              esMxHreflang,
              enMxHreflang,
              enAeHreflang,
              enInHreflang,
              enUsHreflang,
              esEcHreflang,
              enEcHreflang
            }
          }
        }
        return null
      })
      .catch(console.error)
  },
  computed: {
    showHome() {
      return (
        this.experimentalProducts.filter((product) => {
          return product.toLowerCase() === this.keyword.toLowerCase()
        }).length > 0
      )
    },
    keyword() {
      return this.slug.split('-').join(' ')
    }
    // canonicalTag() {
    //   return process.env.DRIP_WEB_HOST + this.$route.path
    // }
  },
  head() {
    const canonicalUrl = `${
      process.env.DRIP_WEB_HOST || 'https://www.dripcapital.com'
    }${this.$route.path}`
    const headObj = {
      needLineBreak: true,
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        }
      ],
      // link: [{ rel: 'canonical', href: this.canonicalTag }],
      script: [
        ...(this.faqSchema
          ? [
              {
                hid: 'ldjson-schema',
                innerHTML: this.faqSchema,
                type: 'application/ld+json'
              }
            ]
          : []),
        {
          hid: 'ldjson-service',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: this.title,
            description: this.description,
            provider: {
              '@id': 'https://www.dripcapital.com/#organization'
            },
            url: canonicalUrl
          }),
          type: 'application/ld+json'
        }
      ],
      __dangerouslyDisableSanitizersByTagID: {
        'ldjson-service': ['innerHTML'],
        'ldjson-schema': ['innerHTML']
      },
      link: []
    }

    if (this.hreflang) {
      const HREF_LANG = {
        enHreflang: 'en',
        esMxHreflang: 'es-mx',
        enMxHreflang: 'en-mx',
        // enAeHreflang: 'en-ae',
        enInHreflang: 'en-in',
        enUsHreflang: 'en-us'
        // esEcHreflang: 'es-ec',
        // enEcHreflang: 'en-ec'
      }
      Object.keys(this.hreflang).forEach((key) => {
        if (this.hreflang[key]) {
          let locale = HREF_LANG[key] || 'en'
          headObj.link.push({
            hid: `alternate-hreflang-${locale}`,
            rel: 'alternate',
            href: this.hreflang[key],
            hreflang: locale
          })
        }
      })
    }
    // if (!this.canonicalTag) {
    //   delete headObj.link
    // }
    return headObj
  },
  components: {
    Product,
    OldProduct,
    Home
  }
}
</script>
