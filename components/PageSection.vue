<template>
  <section :class="$props.sectionClass">
    <slot />
  </section>
</template>
<script>
export default {
  name: 'page-section',
  props: {
    sectionClass: {
      default: 'bg-white'
    }
  }
}
</script>
