<template>
  <div
    class="bruce-banner d-flex justify-content-between align-items-center"
    v-if="hulk === 'open'"
  >
    <span></span>
    <span
      >🎉 Drip Capital has raised <b>$25 million</b> in Series B round led by
      Accel.
      <a
        href="https://www.dripcapital.com/resources/blog/funding-announcement-series-b"
        target="_blank"
        >Read the full story here</a
      ></span
    >
    <a @click="handleHulk" class="cross">x</a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hulk: 'close'
    }
  },
  mounted() {
    let c = localStorage.getItem('banner')
    if (c !== null && c !== 'open') {
      this.hulk = c
    } else {
      this.hulk = 'open'
      localStorage.setItem('banner', 'open')
    }
  },
  methods: {
    handleHulk() {
      this.hulk = false
      localStorage.setItem('banner', 'close')
    }
  }
}
</script>
<style lang="scss">
@import '../assets/scss/variables';
.bruce-banner {
  padding: 1rem;
  text-align: center;
  background: $primary;
  color: $white;
  letter-spacing: 1px;
  font-size: 1.1rem;
  width: 100%;
  z-index: 22;
  a {
    border-bottom: 1px solid;
    color: $secondary;
    text-decoration: none;
    cursor: pointer;
    &.cross {
      border-bottom: 0;
      font-weight: bold;
      color: rgba($secondary, 0.5);
    }
  }
}
</style>
