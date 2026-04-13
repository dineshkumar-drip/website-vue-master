function getParam(p) {
  var match = RegExp('[?&]' + p + '=([^&]*)').exec(window.location.search)
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '))
}

function getExpiryRecord(value) {
  var expiryPeriod = 90 * 24 * 60 * 60 * 1000 // 90 day expiry in milliseconds

  var expiryDate = new Date().getTime() + expiryPeriod
  return {
    value: value,
    expiryDate: expiryDate
  }
}

function addGclid() {
  console.debug('function addGclid running')
  var gclidParam = getParam('gclid')
  var gclidFormFields = ['gclid_field', 'foobar'] // all possible gclid form field ids here
  var gclidRecord = null
  var currGclidFormField

  var gclsrcParam = getParam('gclsrc')
  var isGclsrcValid = !gclsrcParam || gclsrcParam.indexOf('aw') !== -1

  // console.debug('params', gclidParam, gclsrcParam, isGclsrcValid)
  gclidFormFields.forEach(function (field) {
    if (document.getElementById(field)) {
      currGclidFormField = document.getElementById(field)
    }
  })
  if (gclidParam && isGclsrcValid) {
    gclidRecord = getExpiryRecord(gclidParam)
    localStorage.setItem('gclid', JSON.stringify(gclidRecord))
  }

  var gclid = gclidRecord || JSON.parse(localStorage.getItem('gclid'))
  var isGclidValid = gclid && new Date().getTime() < gclid.expiryDate

  // console.debug('vals', currGclidFormField, isGclidValid)
  if (currGclidFormField && isGclidValid) {
    console.debug('gclid value', gclid.value)
    currGclidFormField.value = gclid.value
  }
}
