const robots = require('./modules/robots')
const plugins = require('./modules/plugins')

const isLandingPage = process.env.PROJECT_NAME === 'evs-tradex'

const { createClient } = require('./plugins/contentful')
const client = createClient()
const mxClient = createClient('mexico')

const metaByRoute = require('./assets/json/metaByRoute.js')

const isNotLocale = process.env.NUXT_DEFAULT_LOCALE !== 'en'
const productsUrl = isNotLocale ? 'productos' : 'products'
const productsUrlMx = 'productos'

let meta = () => {
  if (process.env.NODE_ENV !== 'production') {
    return { hid: 'robots', name: 'robots', content: 'noindex, nofollow' }
  }
}
export default {
  target: 'static',
  /*
   ** Headers of
   the page
   */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      {
        name: 'facebook-domain-verification',
        content: 'w0y91czpxqv390k8znziu7854yugmb'
      },
      { ...meta() }
    ],
    link: [
      //{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:300,400,400i,700%7CMontserrat:300,400,500,700' },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'https://assets.dripcapital.com/static/images/drip-favicon-3.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap'
      }
    ],
    noscript: [{ innerHTML: 'This website requires JavaScript.' }]
  },
  modern: process.env.NODE_ENV === 'production',
  env: {
    //jobOpeningsUrl: process.env.DRIP_CAREERS_API,
    //careersImagesUrl: process.env.DRIP_CAREERS_IMAGES_API,
    apiUrl: process.env.DRIP_API_HOST,
    GTM_KEY: process.env.GTM_KEY,
    portalUrl: process.env.DRIP_PORTAL_HOST,
    mixpanelKey: process.env.MIXPANEL_KEY,
    websiteHost: process.env.WEBSITE_HOST,
    websiteHostMx: process.env.WEBSITE_HOST_MX,
    DRIP_GOTRADE_API: process.env.DRIP_GOTRADE_API,
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_SPACE_ID_MX: process.env.CTF_SPACE_ID_MX,
    CTF_TOKEN: process.env.CTF_TOKEN,
    CTF_TOKEN_MX: process.env.CTF_TOKEN_MX,
    OPTIMIZE_KEY: process.env.OPTIMIZE_KEY,
    NUXT_DEFAULT_LOCALE: process.env.NUXT_DEFAULT_LOCALE || 'en',
    CTF_CMA_TOKEN: process.env.CTF_CMA_TOKEN,
    ZAPIER_TOKEN_ID: process.env.ZAPIER_TOKEN_ID,
    ZAPIER_HOOK_TOKEN: process.env.ZAPIER_HOOK_TOKEN,
    DRIP_WEB_HOST: process.env.DRIP_WEB_HOST,
    ZAPIER_EN_US_HOME_HOOK_TOKEN: process.env.ZAPIER_EN_US_HOME_HOOK_TOKEN,
    ZAPIER_EN_US_IMPORTER_APPLY_HOOK_TOKEN:
      process.env.ZAPIER_EN_US_IMPORTER_APPLY_HOOK_TOKEN,
    ZAPIER_EN_US_BUYER_FINANCE_HOOK_TOKEN:
      process.env.ZAPIER_EN_US_BUYER_FINANCE_HOOK_TOKEN,
    ZAPIER_ES_MX_HOOK_TOKEN: process.env.ZAPIER_ES_MX_HOOK_TOKEN,
    ZAPIER_EN_US_PRODUCT_HOOK_TOKEN: process.env.ZAPIER_EN_US_PRODUCT_HOOK_TOKEN
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#3B8070' },
  css: [
    '@fortawesome/fontawesome/styles.css',
    '@/assets/scss/main.scss',
    'aos/dist/aos.css',
    '@/assets/css/dc-new.css'
  ],
  /*
   ** Build configuration
   */
  plugins: plugins,
  components: true,
  modules: [
    'cookie-universal-nuxt',
    '@nuxtjs/robots',
    ['nuxt-i18n', require('./i18n')]
  ],
  build: {
    analyse: process.env.NODE_ENV !== 'production',
    loaders: {},
    hotMiddleware: {
      client: {
        noInfo: true
      }
    },
    /*
     ** Run ESLint on save
     */
    // vendor: ['aos'],
    extractCSS: {
      ignoreOrder: true
    },
    filenames: {
      css: ({ isDev }) => (isDev ? '[name].css' : 'common.[contenthash:7].css'),
      app: ({ isDev }) => (isDev ? '[name].js' : 'app.[contenthash:7].js'),
      chunk: ({ isDev }) => (isDev ? '[name].js' : '[name].[contenthash:7].js')
    },
    publicPath: process.env.CDN_URL || '/_nuxt/',
    extend(config, { isDev, isClient, isServer }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        // config.module.rules.push({
        //   test: /\.(js|vue)$/,
        //   loader: 'cache-loader',
        //   options: {
        //     cacheDirectory: '.cache/webpack' // Or any other path
        //   }
        // })
        // config.module.rules.push({
        //   test: /\.(mp4|webm|ogg)$/,
        //   loader: 'file-loader',
        //   options: {
        //     name: '[path][name].[ext]',
        //     esModule: false
        //   }
        // })
      }
      if (isServer) {
        config.externals = [
          require('webpack-node-externals')({
            whitelist: [/^vue-slick/]
          })
        ]
      }
    }
  },
  cli: {
    badgeMessages: ['Welcone to Nuxt v2!']
  },
  generate: !isLandingPage
    ? {
        exclude: [
          '/hsn-code',
          '/hts-code',
          '/support/**',
          '/resources/blog',
          '/resources/finance-guides',
          '/en-in/press-releases/policy-interventions,-market/product-diversification-key-to-futureof-indian-plastic-exports:-drip-capital-report',
          '/en-in/press-releases/policy-interventions,-market/product-diversification-key-to-future-of-indian-plastic-exports:-drip-capital-report',
          '/en-in/resources/blog',
          '/en-in/resources/finance-guides',
          '/us-customs-import-duty',
          '/en-in/resources/newsroom',
          '/en-us/resources/',
          '/en-us/resources/finance-guides',
          '/en-us/resources/newsroom',
          '/en-us/resources/blog',
          '/es-mx/recursos/blog',
          '/es-mx/recursos/finanzas-guias',
          '/en-mx/productos/descuento-de-facturas',
          '/en-mx/productos/factoraje-financiero',
          '/en-mx/productos/factoraje-de-cuentas-por-cobrar',
          '/en-mx/productos/financiamiento-cuentas-por-cobrar',
          '/en-mx/productos/financiamiento-internacional',
          '/en-mx/productos/factoraje-nacional',
          '/en-mx/productos/financiamiento-a-proveedores',
          '/en-mx/productos/financiamiento-de-exportación',
          '/en-mx/productos',
          '/en-mx/productos/**',
          '/products/trade-finance',
          '/products/supply-chain-finance',
          '/products/export-factoring',
          '/products/receivables-factoring',
          '/products/invoice-factoring',
          '/products/bill-discounting',
          '/products/export-finance',
          '/products/invoice-discounting',
          '/products/international-factoring'
        ],
        routes() {
          return Promise.all([
            client.getEntries({
              content_type: productsUrl
            }),
            mxClient.getEntries({
              content_type: productsUrlMx
            }),
            client.getEntries({
              content_type: 'productPageContentUs'
            }),
            client.getEntries({
              content_type: 'newsroomPressReleases'
            })
          ])
            .then((values) => {
              return [
                ...values[0].items.map(
                  (entry) => `/${productsUrl}/${entry.fields.slug}`
                ),
                ...values[0].items.map(
                  (entry) => `/en-in/${productsUrl}/${entry.fields.slug}`
                ),
                ...values[1].items.map(
                  (entry) => `/es-mx/${productsUrlMx}/${entry.fields.slug}`
                ),
                ...values[1].items.map(
                  (entry) => `/en-mx/${productsUrlMx}/${entry.fields.slug}`
                ),
                ...values[2].items.map(
                  (entry) => `/en-us/products/${entry.fields.slug}`
                ),
                ...values[3].items.map((entry) =>
                  entry.fields.locale === 'IN'
                    ? `/en-in/press-releases/${entry.fields.slug}`
                    : `/en-us/press-releases/${entry.fields.slug}`
                )
              ]
            })
            .catch(console.error)
        },
        fallback: true, // Optional, for static hosting fallback
        interval: 100
      }
    : {
        routes: ['/'], // Only generate the homepage
        fallback: false // optional: disable 404 fallback
      },
  hooks: {
    'generate:page'(page) {
      const meta = metaByRoute[page.route]
      if (!meta) return

      const ldJson = meta.ldJson
        ? `<script type="application/ld+json">${JSON.stringify(
            meta.ldJson
          )}</script>`
        : ''
      const extraHead = `
        <title>${meta.title}</title>
        <meta name="description" content="${meta.description}">
        <link rel="canonical" href="${meta.canonical}">
        <meta property="og:title" content="${meta.ogTitle}">
        <meta property="og:description" content="${meta.ogDescription}">
        ${ldJson}
      `

      page.html = page.html.replace('<head>', `<head>${extraHead}`)
      page.html = page.html.replace(
        /<meta[^>]*data-hid="description"[^>]*>/,
        ''
      )
    }
  },
  router: isLandingPage
    ? {
        // middleware: 'referrer',
        extendRoutes(routes, resolve) {
          // Clear default routes
          routes.splice(0, routes.length)

          // Manually define only `/` route
          routes.push({
            path: '/',
            component: resolve(
              __dirname,
              `pages/${process.env.PROJECT_NAME}/index.vue`
            )
          })
          routes.push({
            path: '/health',
            component: resolve(__dirname, `pages/health.vue`)
          })
        }
      }
    : {
        middleware: ['referrer', 'redirects']
      },
  robots: robots
}
