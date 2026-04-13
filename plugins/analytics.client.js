// plugins/analytics.client.js
function listen_event(event, callback, element) {
  element = element || window
  if (element.addEventListener) {
    element.addEventListener(event, callback)
  } else {
    element.attachEvent(event, callback)
  }
}

function listen_event_selector(event, selector, callback) {
  var x = document.querySelectorAll(selector)
  for (var i = 0; i < x.length; i++) {
    listen_event(event, callback, x[i])
  }
}

function adwords_image(src) {
  var mf = document.createElement('img')
  mf.height = 1
  mf.width = 1
  mf.style = 'border-style:none; display: none;'
  mf.src = src
  document.body.appendChild(mf)
}

// Mouse FLow Snippet
function loadMouseflow() {
  var _mfq = _mfq || []
  ;(function () {
    if (!document.getElementById('mouse-flow-js')) {
      var mf = document.createElement('script')
      mf.type = 'text/javascript'
      mf.async = true
      mf.id = 'mouse-flow-js'
      mf.src =
        '//cdn.mouseflow.com/projects/128d2cf0-f3ab-4235-89dc-f17b2aec6e0b.js'
      document.getElementsByTagName('head')[0].appendChild(mf)
    }
  })()
}

// Adwords
var google_conversion_id = 942699625
var google_custom_params = window.google_tag_params
var google_remarketing_only = true

function init_conv_event(event, selector, label) {
  listen_event_selector(event, selector, function () {
    adwords_image(
      '//www.googleadservices.com/pagead/conversion/' +
        google_conversion_id +
        '/?label=' +
        label +
        '&amp;guid=ON&amp;script=0'
    )
  })
}

export default function ({ app }, inject) {
  if (app.$consentManager.getConsentValue('preference') === 'AcceptAll') {
    init_conv_event('click', 'a.applybarbottom', 'pHQHCJebgHEQ6ejBwQM')
    init_conv_event('click', '#sign-up', 'ijkhCMCdgHEQ6ejBwQM')
  }
  // init_conv_event('click', 'a:contains("CHECK ELIGIBILITY NOW")', 'kvDvCPqbgHEQ6ejBwQM');
  // init_conv_event('click', 'a:contains("LEARN MORE")', 'wP-MCNqZgHEQ6ejBwQM');
  window.onload = function () {
    //Trigger Mouseflow for desktop and mobile users

    let landingPageURL = localStorage.getItem('landingPageURL')
    if (landingPageURL === null) {
      localStorage.setItem('landingPageURL', window.location.href)
    }
    if (app.$consentManager.getConsentValue('preference') === 'AcceptAll') {
      console.debug('Adword service loaded!')
      listen_event('mousemove', loadMouseflow)
      listen_event('touchend', loadMouseflow)

      // Adwords
      adwords_image(
        '//googleads.g.doubleclick.net/pagead/viewthroughconversion/' +
          google_conversion_id +
          '/?guid=ON&amp;script=0'
      )
    }
  }
  inject('runAdwords', () => {
    if (app.$consentManager.getConsentValue('preference') === 'AcceptAll') {
      console.debug('Adword service loaded!')

      init_conv_event('click', 'a.applybarbottom', 'pHQHCJebgHEQ6ejBwQM')
      init_conv_event('click', '#sign-up', 'ijkhCMCdgHEQ6ejBwQM')

      listen_event('mousemove', loadMouseflow)
      listen_event('touchend', loadMouseflow)

      // Adwords
      adwords_image(
        '//googleads.g.doubleclick.net/pagead/viewthroughconversion/' +
          google_conversion_id +
          '/?guid=ON&amp;script=0'
      )
    }
  })
}
