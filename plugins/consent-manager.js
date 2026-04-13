// plugins/consent-manager.js
export default function (context, inject) {
  const COOKIE_NAME = 'userConsent'
  const DEFAULT_CONSENT = { necessary: true, preference: '' }

  const getConsent = () => {
    if (process.server) return DEFAULT_CONSENT
    const consentData = localStorage.getItem(COOKIE_NAME)
    return consentData ? JSON.parse(consentData) : DEFAULT_CONSENT
  }
  const getConsentValue = (purpose) => {
    if (process.server) return true
    const consent = getConsent()
    return consent[purpose]
  }

  const setConsent = (purpose, value) => {
    if (process.server) return
    const consent = getConsent()
    consent[purpose] = value
    consent.timestamp = new Date().toISOString()
    consent.version = '1.0'
    localStorage.setItem(COOKIE_NAME, JSON.stringify(consent))
  }

  const removeConsent = (purpose) => {
    if (process.server) return
    const consent = getConsent()
    delete consent[purpose]
    localStorage.setItem(COOKIE_NAME, JSON.stringify(consent))
  }

  const clearConsent = () => {
    if (process.server) return
    localStorage.removeItem(COOKIE_NAME)
  }

  const hasConsent = (purpose) => {
    if (process.server) return true
    const consent = getConsent()
    return !!consent[purpose]
  }

  // Inject the consent manager functions into the Nuxt.js context.
  inject('consentManager', {
    getConsent,
    getConsentValue,
    setConsent,
    hasConsent,
    removeConsent,
    clearConsent
  })
}
