export default function (context) {
  if (process.client) {
    document.vueReferrer =
      window.sessionStorage.getItem('utm_param') || document.referrer
  }
}
