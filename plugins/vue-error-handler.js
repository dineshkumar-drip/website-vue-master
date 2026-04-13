import Vue from 'vue'

export default () => {
  Vue.config.errorHandler = (err, vm, info) => {
    console.error('Vue Error:', err, info)
    // Optionally show a fallback UI or send to error tracking
  }
}
