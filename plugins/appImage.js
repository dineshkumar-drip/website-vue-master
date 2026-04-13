import lozad from 'lozad'

if (process.browser) {
  const observer = lozad()
  observer.observe()
}
