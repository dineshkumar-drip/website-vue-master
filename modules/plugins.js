const plugins = [
  '~/plugins/consent-manager',
  '~/plugins/vue-bootstrap',
  '~/plugins/vue-axios',
  '~/plugins/font-awesome',
  '~/plugins/vue-smooth-scroll',
  '~/plugins/directives',
  '~/plugins/appImage',
  '~/plugins/phone-number-fix.client.js',
  '~/plugins/load-script.client.js',
  '~/plugins/zoom-info.client.js',
  '~/plugins/gtm.client.js',
  '~/plugins/analytics.client.js',
  '~/plugins/mixpanel.client.js',
  '~/plugins/ssr-schema',
  { src: '~/plugins/aos', ssr: false },
  { src: './plugins/vue-typer', ssr: false },
  { src: './plugins/vue-slick', ssr: false },
  { src: '~/plugins/vue-carousel-3d', ssr: false, mode: 'client' }
]

module.exports = plugins
