export default {
  data() {
    return {
      _scrollObserver: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initScrollReveal()
    })
  },
  beforeDestroy() {
    if (this._scrollObserver) {
      this._scrollObserver.disconnect()
      this._scrollObserver = null
    }
  },
  watch: {
    $route() {
      this.$nextTick(() => {
        this.refreshScrollReveal()
      })
    }
  },
  methods: {
    initScrollReveal() {
      if (typeof window === 'undefined') return
      if (this._scrollObserver) this._scrollObserver.disconnect()

      this._scrollObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
              this._scrollObserver.unobserve(entry.target)
            }
          })
        },
        {
          threshold: 0.05,
          rootMargin: '0px 0px -20px 0px'
        }
      )
      this.observeRevealElements()
    },
    observeRevealElements() {
      if (!this._scrollObserver) return
      var elements = document.querySelectorAll('.reveal:not(.visible)')
      elements.forEach((el) => this._scrollObserver.observe(el))
    },
    refreshScrollReveal() {
      if (!this._scrollObserver) {
        this.initScrollReveal()
        return
      }
      this.observeRevealElements()
    }
  }
}
