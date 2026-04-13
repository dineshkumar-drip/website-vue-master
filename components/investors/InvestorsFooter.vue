<template>
  <footer class="investor-footer main-footer landing-footer">
    <div class="container-fluid">
      <b-row align-v="center">
        <b-col
          :cols="12"
          class="footer-flex-container"
          v-for="(footer, index) in $t('pages.investors.footer')"
          :key="index"
        >
          <p class="footer-text">{{ footer }}</p>
        </b-col>
      </b-row>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/variables';

.investor-footer {
  background-color: $investor-grey;
}
</style>
