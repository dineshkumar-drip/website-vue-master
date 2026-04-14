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
      UserAgent: 'GPTBot',
      Allow: ['/']
    },
    {
      UserAgent: 'ChatGPT-User',
      Allow: ['/']
    },
    {
      UserAgent: 'ClaudeBot',
      Allow: ['/']
    },
    {
      UserAgent: 'Anthropic-AI',
      Allow: ['/']
    },
    {
      UserAgent: 'PerplexityBot',
      Allow: ['/']
    },
    {
      UserAgent: 'Amazonbot',
      Allow: ['/']
    },
    {
      UserAgent: 'Google-Extended',
      Allow: ['/']
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
        '/en-us/apply-thank-you',
        '/en-us/partners/thank-you',
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
