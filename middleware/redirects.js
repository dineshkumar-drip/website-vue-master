export default function ({ route, redirect }) {
  var path = route.path.replace(/\/$/, '') || '/'
  var redirects = {
    '/en-us/payable-finance': '/en-us/vendor-financing',
    '/en-us/importers': '/en-us/receivables-financing',
    '/en-us/importer-credit-program': '/en-us/line-of-credit',
    '/en-us/importers/apply': '/en-us/apply',
    '/en-us/exporters': '/en-us/receivables-financing',
    '/en-us/invest-in-trade-receivables': '/en-us/investors',
    '/en-us/leadership': '/en-us/about'
  }
  if (redirects[path]) {
    return redirect(301, redirects[path])
  }
}
