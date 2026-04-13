import Vue from 'vue'

Vue.directive('trackClick', {
  inserted: (el, binding, vnode) => {
    el.addEventListener('click', () => {
      vnode.context.$ma.trackEvent({
        category: 'Click',
        action: 'User click',
        properties: {
          linkId: el.id
        }
      })
    })
  }
})
