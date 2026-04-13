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
// export `createClient` to use it in page components
module.exports = {
  createClient(locale = 'default') {
    if (locale === 'mexico') return contentful.createClient(configMx)
    return contentful.createClient(config)
  }
}
