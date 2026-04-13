export default ({ app }, inject) => {
  const cleanupPhoneNumbers = () => {
    if (process.client) {
      const phoneLinks = document.querySelectorAll('a[href^="tel:"]')
      console.log('Cleaning up phone numbers, found:', phoneLinks.length)

      phoneLinks.forEach((el) => {
        const oldText = el.textContent
        const oldHref = el.href

        el.textContent = el.textContent.trim().replace(/^\++/, '+')
        el.href = el.href.trim().replace(/tel:\++/, 'tel:+')

        if (oldText !== el.textContent || oldHref !== el.href) {
          console.log('Fixed phone:', oldText, '->', el.textContent)
        }
      })
    }
  }

  if (process.client) {
    // Run on route changes
    app.router.afterEach(() => {
      setTimeout(() => {
        cleanupPhoneNumbers()
      }, 150)
    })

    // Run on initial page load
    app.router.onReady(() => {
      setTimeout(() => {
        cleanupPhoneNumbers()
      }, 500)
    })

    // Run after Vue has mounted - use nextTick
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        setTimeout(() => {
          cleanupPhoneNumbers()
        }, 200)
      })
    }
  }

  // Inject as a global method so components can call it if needed
  inject('cleanupPhoneNumbers', cleanupPhoneNumbers)
}
