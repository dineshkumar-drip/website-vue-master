// plugins/mixpanel.client.js
/* eslint-disable space-before-function-paren */
/* eslint-disable quotes */
export default ({ app }, inject) => {
  function loadMixpanel(loadBy) {
    if (app.$consentManager.getConsentValue('preference') === 'AcceptAll') {
      if (!window.mixpanel) {
        // eslint-disable-next-line space-before-function-paren
        ;(function (f, b) {
          if (!b.__SV) {
            var e, g, i, h
            window.mixpanel = b
            b._i = []
            b.init = function (e, f, c) {
              function g(a, d) {
                var b = d.split('.')
                2 == b.length && ((a = a[b[0]]), (d = b[1]))
                a[d] = function () {
                  a.push([d].concat(Array.prototype.slice.call(arguments, 0)))
                }
              }
              var a = b
              'undefined' !== typeof c ? (a = b[c] = []) : (c = 'mixpanel')
              a.people = a.people || []
              a.toString = function (a) {
                var d = 'mixpanel'
                'mixpanel' !== c && (d += '.' + c)
                a || (d += ' (stub)')
                return d
              }
              a.people.toString = function () {
                return a.toString(1) + '.people (stub)'
              }
              i =
                'disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking start_batch_senders people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove'.split(
                  ' '
                )
              for (h = 0; h < i.length; h++) g(a, i[h])
              var j = 'set set_once union unset remove delete'.split(' ')
              a.get_group = function () {
                function b(c) {
                  d[c] = function () {
                    call2_args = arguments
                    call2 = [c].concat(
                      Array.prototype.slice.call(call2_args, 0)
                    )
                    a.push([e, call2])
                  }
                }
                for (
                  var d = {},
                    e = ['get_group'].concat(
                      Array.prototype.slice.call(arguments, 0)
                    ),
                    c = 0;
                  c < j.length;
                  c++
                )
                  b(j[c])
                return d
              }
              b._i.push([e, f, c])
            }
            b.__SV = 1.2
            e = f.createElement('script')
            e.type = 'text/javascript'
            e.async = !0
            e.src =
              'undefined' !== typeof MIXPANEL_CUSTOM_LIB_URL
                ? MIXPANEL_CUSTOM_LIB_URL
                : 'file:' === f.location.protocol &&
                  '//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js'.match(/^\/\//)
                ? 'https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js'
                : '//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js'
            g = f.getElementsByTagName('script')[0]
            g.parentNode.insertBefore(e, g)
          }
        })(document, window.mixpanel || [])
      }
      function mixpanel_track(event, d) {
        let data = d || {}
        data['URL'] = window.location.href
        mixpanel.track(event, data)

        if (event.match('Visited')) {
          mixpanel.people.append('Pages Visited', data['URL'])
          mixpanel.people.increment('Page loads')
        } else {
          mixpanel.people.increment('Number of events')
        }

        mixpanel.people.increment(event)
        mixpanel.people.append('Events Fired', event)
      }

      function getParameterByName(name, url) {
        if (!url) url = window.location.href
        name = name.replace(/[\[\]]/g, '\\$&')
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
          results = regex.exec(url)
        if (!results) return null
        if (!results[2]) return ''
        return decodeURIComponent(results[2].replace(/\+/g, ' '))
      }

      function mixpanel_register() {
        let page_url = window.location.href
        let source = getParameterByName('source', window.location.href)
        let campaign_id = getParameterByName(
          'campaign_id',
          window.location.href
        )
        let keyword = getParameterByName('keyword', window.location.href)
        let ad_position = getParameterByName('adposition', window.location.href)
        let first_data = {
          'Landing Page URL': page_url,
          'First Source': source,
          'First Campaign ID': campaign_id,
          'First Keyword': keyword,
          'First Ad Position': ad_position
        }
        let final_data = {
          'Final Landing Page URL': page_url,
          'Final Source': source,
          'Final Campaign ID': campaign_id,
          'Final Keyword': keyword,
          'Final Ad Position': ad_position
        }

        mixpanel.register_once({
          'Landing Page URL': page_url,
          Source: source,
          'Campaign ID': campaign_id,
          Keyword: keyword,
          'Ad Position': ad_position
        })
        mixpanel.people.set_once(first_data)

        if (getParameterByName('source', page_url)) {
          mixpanel.register(final_data)
          mixpanel.people.set(final_data)
          mixpanel.people.append('Source', source)
          mixpanel.people.append('Campaigns', campaign_id)
        }
      }

      function loadYoutube() {
        // VIDEO
        var tag = document.createElement('script')
        tag.id = 'iframe-demo'
        tag.src = 'https://www.youtube.com/iframe_api'
        var firstScriptTag = document.getElementsByTagName('script')[0]
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
      }

      function onYouTubeIframeAPIReady() {
        let playerStates = {
          '-1': 'Video Unstarted',
          0: 'Video Ended',
          1: 'Video Played',
          2: 'Video Stopped',
          3: 'Video Buffering',
          5: 'Video Cued'
        }
        const t = setTimeout(() => {
          if (YT) {
            new YT.Player('drip-video', {
              events: {
                onStateChange: function (event) {
                  try {
                    mixpanel_track(playerStates[event.data.toString()], {
                      timestamp: new Date()
                    })
                  } catch (e) {
                    console.log(e)
                  }
                }
              }
            })
          }
          clearTimeout(t)
        }, 5000)
      }

      window.mixpanel_onload = function mixpanel_onload() {
        const path = window.location.pathname

        let pathname = {
          '/': 'Visited Home Page',
          '/products/': 'Visited Products Page',
          '/contact': 'Visited Contact Us',
          '/about': 'Visited About Us',
          '/how-it-works': 'Visited How It Works',
          '/export-factoring': 'Visited Exporters',
          '/exporters': 'Visited Exporters',
          '/exporters/apply': 'Visited Apply Now',
          '/applications/': 'Visited Application',
          '/invest-in-trade-receivables': 'Visited Investors',
          '/investors': 'Visited Investors',
          '/investors/get-started': 'Visited Investors Get Started',
          '/terms-of-use': 'Visited Terms of Use',
          '/privacy-policy': 'Visited Privacy Policy',
          '/app': 'Visited Exporters App',
          '/partners/fieo': 'Visited Partner FIEO',
          '/importers': 'Visited Importers',
          '/importer-credit-program': 'Visited Importers Credit Program',
          '/products/invoice-factoring': 'Visited Invoice Factoring',
          '/products/export-finance': 'Visited Export Finance',
          '/products/post-shipment-finance': 'Visited Post Shipment Finance',
          '/products/non-recourse-factoring': 'Visited Non Recourse Factoring',
          '/products/receivables-factoring': 'Visited Receivables Factoring',
          '/interest-calculator': 'Visited Interest Calculator'
        }
        let event_name
        if (path.match('/applications/')) {
          event_name = pathname['/applications/']
        } else if (path.match('/exporters/info/')) {
          event_name = pathname['/exporters/info/']
        } else {
          event_name = pathname[window.location.pathname]
        }
        if (event_name) {
          mixpanel_track(event_name)
        } else {
          mixpanel_track('Visited ' + path)
        }
      }

      document.addEventListener('click', function (e) {
        let el
        let node
        ;[
          ...document.querySelectorAll(
            'a',
            'button',
            'input[name=commit]',
            '.mxp'
          )
        ].forEach((element) => {
          if (e.target === element) {
            el = element
          }
        })

        if (el && e.target.dataset.mxpEvent) {
          node = e.target
        } else if (el && e.target.parentNode.dataset.mxpEvent) {
          node = e.target.parentNode
        }

        if (el && node.dataset.mxpEvent) {
          let attrs = node.attributes
          let d = {}
          for (let i = 0; i < attrs.length; i++) {
            if (attrs[i].name.match(/^data-mxp-*/))
              d[attrs[i].name] = attrs[i].value
          }
          mixpanel_track(node.dataset.mxpEvent, d)
        }
      })

      window.mixpanel_alias = function mixpanel_alias(email_id) {
        var email_data = {
          'Email ID': email_id,
          $email: email_id
        }
        mixpanel.alias(email_id)
        mixpanel.register_once(email_data)
        mixpanel.people.set_once(email_data)
      }

      window.mixpanel_user = function mixpanel_user(application) {
        mixpanel.identify(application.exporter_email)
      }

      mixpanel.init(process.env.mixpanelKey, {
        persistence: 'localStorage',
        disable_persistence: true
      })

      if (loadBy === 'event') {
        window.addEventListener('load', function () {
          console.debug('Mixpanel service loaded!')
          loadYoutube()
          mixpanel_onload()
          onYouTubeIframeAPIReady()
          mixpanel_register()
        })
      }
      if (loadBy === 'funcExecution') {
        console.debug('Mixpanel service loaded!')
        loadYoutube()
        mixpanel_onload()
        onYouTubeIframeAPIReady()
        mixpanel_register()
      }
    }
  }

  loadMixpanel('event')

  inject('runMixpanel', () => {
    // eslint-disable-next-line space-before-function-paren
    loadMixpanel('funcExecution')
  })
}
