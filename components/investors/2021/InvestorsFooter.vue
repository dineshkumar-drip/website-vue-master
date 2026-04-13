<template>
  <footer class="investor-footer main-footer pb-0">
    <div class="container-fluid">
      <b-row align-v="center">
        <b-col
          :cols="12"
          class="footer-flex-container"
          v-for="(footer, index) in $t('pages.investors.footer')"
          :key="index"
        >
          <p class="disclaimer">{{ footer }}</p>
        </b-col>
      </b-row>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '../../../assets/scss/variables';

.investor-footer {
  background-color: $dark-blue;
  color: $white;
  .disclaimer {
    font-size: 0.75rem;
  }
}
</style>
