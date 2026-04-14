<template>
  <span ref="counterEl" class="animated-counter">{{ prefix }}{{ displayValue }}{{ suffix }}</span>
</template>

<script>
export default {
  props: {
    target: {
      type: Number,
      required: true
    },
    suffix: {
      type: String,
      default: ''
    },
    prefix: {
      type: String,
      default: ''
    },
    duration: {
      type: Number,
      default: 2000
    }
  },
  data() {
    return {
      displayValue: 0,
      animationFrame: null,
      hasAnimated: false,
      observer: null
    }
  },
  methods: {
    animateCount() {
      if (this.hasAnimated) return
      this.hasAnimated = true

      const startTime = performance.now()
      const startValue = 0
      const endValue = this.target

      const easeOutCubic = (t) => {
        return 1 - Math.pow(1 - t, 3)
      }

      const step = (currentTime) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / this.duration, 1)
        const easedProgress = easeOutCubic(progress)

        this.displayValue = Math.round(startValue + (endValue - startValue) * easedProgress)

        if (progress < 1) {
          this.animationFrame = requestAnimationFrame(step)
        } else {
          this.displayValue = endValue
        }
      }

      this.animationFrame = requestAnimationFrame(step)
    }
  },
  mounted() {
    if (!this.$refs.counterEl || typeof IntersectionObserver === 'undefined') {
      this.$nextTick(() => {
        this.displayValue = this.target
      })
      return
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateCount()
            this.observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    this.observer.observe(this.$refs.counterEl)
  },
  beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect()
    }
    if (this.animationFrame !== null) {
      cancelAnimationFrame(this.animationFrame)
    }
  }
}
</script>
