<template>
  <div>
    <buyer-finance />
  </div>
</template>

<script>
import BuyerFinance from '~/components/BuyerFinance'
export default {
  nuxtI18n: {
    paths: {
      en: '/landing/buyer-finance',
      'en-in': '/landing/buyer-finance',
      'en-us': '/landing/buyer-finance',
      'es-mx': '/landing/buyer-finance',
      'en-mx': '/landing/buyer-finance',
      'en-ae': '/landing/buyer-finance'
    }
  },
  components: {
    BuyerFinance
  }
}
</script>
