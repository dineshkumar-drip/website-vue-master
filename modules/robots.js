const getRobots = () => {
  if (process.env.NODE_ENV !== 'production') {
    return {
      UserAgent: '*',
      Disallow: ['*']
    }
  }
  return [
    {
      UserAgent: 'bitlybot',
      Disallow: ['/']
    },
    {
      UserAgent: 'AhrefsBot',
      Disallow: ['/']
    },
    {
      UserAgent: 'SemrushBot',
      Disallow: ['/']
    },
    {
      UserAgent: 'MJ12bot',
      Disallow: ['/']
    },
    {
      UserAgent: 'DotBot',
      Disallow: ['/']
    },
    {
      UserAgent: 'BLEXBot',
      Disallow: ['/']
    },
    {
      UserAgent: '*',
      Allow: [
        '/en-us/',
        '/en-in/',
        '/es-mx/',
        '/hsn-code/',
        '/hts-code/',
        '/*/resources/mediaroom'
      ],
      Disallow: [
        '/landing/*',
        '/landing-online',
        '/search/',
        '/*/resources/newsroom/',
        '/*/resources/newsroom/*',
        '/fr-*',
        '/de-*',
        '/it-*',
        '/pt-*',
        '/zh-*',
        '/jp-*'
      ],
      Sitemap: `https://${process.env.WEBSITE_HOST}/sitemap.xml`
    }
  ]
}

module.exports = getRobots()
