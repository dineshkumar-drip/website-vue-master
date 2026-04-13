// plugins/load-script.client.js
export default ({ app }, inject) => {
  function executeScript(src, callback, defer = false) {
    // Make it available as $loadScript
    return new Promise((resolve, reject) => {
      // Return a promise for better handling
      if (
        process.client &&
        app.$consentManager.getConsentValue('preference') === 'AcceptAll'
      ) {
        const script = document.createElement('script')
        script.src = src
        script.async = true // Or defer, as needed
        script.defer = defer // Or defer, as needed
        script.onload = () => {
          console.debug(`Script ${src} loaded successfully!`)
          resolve() // Resolve the promise when the script loads
          if (callback) callback() // Execute a callback if provided
        }
        script.onerror = (error) => {
          console.debug(`Error loading script ${src}:`, error)
          reject(error) // Reject the promise on error
        }
        document.body.appendChild(script)
      } else {
        resolve() // Resolve immediately on the server (no script loading needed)
      }
    })
  }
  if (
    ['en', 'en-in'].includes(app.i18n.locale) &&
    app.$consentManager.getConsentValue('preference') === 'AcceptAll'
  ) {
    executeScript('https://jscloud.net/x/25934/inlinks.js', null, true)
  }
  if (
    app.i18n.locale === 'en-us' &&
    app.$consentManager.getConsentValue('preference') === 'AcceptAll'
  ) {
    executeScript('https://jscloud.net/x/25933/inlinks.js', null, true)
    executeScript('https://js.chilipiper.com/marketing.js', null, true)
  }

  inject('loadScript', executeScript)
}
