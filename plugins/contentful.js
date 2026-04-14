const contentful = require('contentful')
// use default environment config for convenience
// these will be set via `env` property in nuxt.config.js
const config = {
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_TOKEN,
  environment: process.env.NODE_ENV === 'production' ? 'master' : 'development'
}

const configMx = {
  space: process.env.CTF_SPACE_ID_MX,
  accessToken: process.env.CTF_TOKEN_MX,
  environment: process.env.NODE_ENV === 'production' ? 'master' : 'development'
}

// Stub client for local dev without Contentful keys
const stubClient = {
  getEntries: () => Promise.resolve({ items: [], total: 0 }),
  getEntry: () => Promise.resolve({}),
  getAsset: () => Promise.resolve({}),
  getAssets: () => Promise.resolve({ items: [], total: 0 })
}

// export `createClient` to use it in page components
module.exports = {
  createClient(locale = 'default') {
    try {
      if (locale === 'mexico') return contentful.createClient(configMx)
      return contentful.createClient(config)
    } catch (e) {
      console.warn('[contentful] Missing API keys, using stub client for local dev')
      return stubClient
    }
  }
}
