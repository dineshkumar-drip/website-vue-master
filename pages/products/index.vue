<template>
  <div>
    <products />
  </div>
</template>
<script>
import Products from '~/components/products/'
export default {
  paths: {
    'en-in': '/products',
    'en-us': '/products',
    'es-mx': '/productos'
  },
  components: {
    Products
  }
}
</script>
