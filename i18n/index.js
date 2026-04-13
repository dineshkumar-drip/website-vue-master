module.exports = {
  baseUrl: process.env.DRIP_WEB_HOST,
  locales: [
    {
      code: 'en',
      iso: 'en',
      file: 'en/index.js'
    },
    {
      code: 'es-mx',
      iso: 'es-mx',
      file: 'es-mx/index.js'
    },
    {
      code: 'en-mx',
      iso: 'en-mx',
      file: 'en-mx/index.js'
    },
    {
      code: 'en-in',
      iso: 'en-in',
      file: 'en-in/index.js'
    },
    {
      code: 'en-us',
      iso: 'en-us',
      file: 'en-us/index.js'
    }
  ],
  langDir: 'i18n/lang/',
  lazy: true,
  fallbackLocale: 'en',
  defaultLocale: 'en',
  detectBrowserLanguage: false,
  vueI18n: {
    fallbackLocale: 'en',
    silentFallbackWarn: true
  },
  seo: false
}
