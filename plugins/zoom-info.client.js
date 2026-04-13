// plugins/zoom-info.client.js
export default ({ app }, inject) => {
  const addScipts = function (d, s, src) {
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s)
    j.async = true
    j.src = src
    j.type = 'text/javascript'
    j.referrerPolicy = 'unsafe-url'
    f.parentNode.insertBefore(j, f)
  }
  const executeZoomInfoScripts = () => {
    if (app.$consentManager.getConsentValue('preference') === 'AcceptAll') {
      console.debug('Zoominfo service loaded!')
      addScipts(
        document,
        'script',
        'https://ws.zoominfo.com/pixel/DFk5jnIymY96GiJdLujg'
      )
    }
  }

  executeZoomInfoScripts()

  inject('runZoomInfo', () => {
    executeZoomInfoScripts()
  })
}
