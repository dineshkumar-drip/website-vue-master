import Vue from 'vue'
import { getBreadcrumbSchema } from '~/utils/breadcrumbSchema'

const ORG_ID = 'https://www.dripcapital.com/#organization'

const buildJsonLdScript = (hid, schema) => ({
  hid,
  type: 'application/ld+json',
  innerHTML: JSON.stringify(schema)
})

const getCanonicalUrl = (routePath) => {
  const baseUrl = process.env.DRIP_WEB_HOST || 'https://www.dripcapital.com'
  return `${baseUrl}${routePath}`
}

Vue.mixin({
  head() {
    // Only execute for Nuxt Page components (check if $route exists)
    if (!this.$route) {
      return {}
    }

    // Safely get route and locale
    const routePath = this.$route && this.$route.path ? this.$route.path : '/'
    const locale = this.$i18n && this.$i18n.locale ? this.$i18n.locale : 'en-us'

    // Try to get a sensible page title from multiple sources
    let pageTitle = ''
    if (this.title) {
      pageTitle = this.title
    } else if (this.heading) {
      pageTitle = this.heading
    } else if (this.post && this.post.title) {
      pageTitle = this.post.title
    } else if (
      this.featuredStories &&
      typeof this.featuredStories.title === 'string'
    ) {
      pageTitle = this.featuredStories.title
    }
    // else if (this.$metaInfo && typeof this.$metaInfo.title === 'string') {
    //   pageTitle = this.$metaInfo.title
    // }

    const canonicalUrl = getCanonicalUrl(routePath)

    // If there's no page title, don't inject LD+JSON
    if (!pageTitle) {
      return {}
    }
    console.log('pageTitle', pageTitle)

    // Always inject WebPage JSON-LD
    const scripts = [
      buildJsonLdScript('ldjson-webpage', {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': canonicalUrl,
        url: canonicalUrl,
        name: pageTitle
      })
    ]

    console.log('canonicalUrl', canonicalUrl)
    console.log('scripts', scripts)
    // Only inject breadcrumb schema on non-home pages
    const isHome =
      routePath === '/' || /^\/(en-us|en-in|es-mx|en-mx)$/.test(routePath)

    if (!isHome) {
      scripts.push(
        buildJsonLdScript(
          'ldjson-breadcrumb',
          getBreadcrumbSchema({
            canonicalUrl,
            pageTitle,
            routePath,
            locale
          })
        )
      )
    }

    // Properly disable sanitizers for both injected script tags (Nuxt 2 compatibility)
    return {
      script: scripts,
      __dangerouslyDisableSanitizersByTagID: {
        'ldjson-webpage': ['innerHTML'],
        'ldjson-breadcrumb': ['innerHTML']
      }
    }
  }
})
