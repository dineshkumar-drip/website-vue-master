<template>
  <footer-en-in
    :isProductPage="isProductPage"
    :isNewBranding="isNewBranding"
    v-if="isIn || isMx || isUs"
  />
  <div v-else>
    <footer-global
      :isProductPage="isProductPage"
      :isNewBranding="isNewBranding"
    />
  </div>
</template>

<script>
import FooterEnIn from '~/components/footer/FooterEnIn'
import FooterGlobal from '~/components/footer/FooterGlobal'
import ContactModal from '~/components/ContactModal'
export default {
  computed: {
    isIn() {
      return this.$i18n.locale.indexOf('in') > -1 || this.$i18n.locale === 'en'
    },
    isMx() {
      return this.$i18n.locale.indexOf('mx') > -1
    },
    isUs() {
      return this.$i18n.locale.indexOf('us') > -1
    }
  },
  components: {
    FooterEnIn,
    FooterGlobal,
    ContactModal
  },
  props: ['isProductPage', 'isNewBranding']
}
</script>

<style lang="scss" scoped>
.call-image {
  z-index: 1000;
  background-color: transparent;
  border: none;
  position: fixed;
  top: 85%;
  left: 75%;
}
</style>
