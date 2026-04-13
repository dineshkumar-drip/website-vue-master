<template>
  <b-container class="mt-lg-8 mt-3 tradex-container">
    <b-row class="tradex-row">
      <b-col cols="3">
        <div class="drip-body font-weight-bold mb-1">Registered Address</div>
        <div class="drip-label">
          EVS Tradex Private Limited<br />
          2ND FLOOR,BUILDING NO 12,<br />
          UNIT NO 1221,SOLITAIRE CORPORATE PARK, GURU HARGOVINDJI MARG<br />
          Mumbai Maharashtra 400093<br />
          India<br />
          GSTIN 27AAHCE8619D1ZK
        </div>
      </b-col>
      <b-col cols="3">
        <div class="drip-body font-weight-bold mb-1">Contact Us</div>
        <div class="drip-label">
          <a href="tel:+918976944027">+91 89769 44027</a> <br />
          <a href="mailto:growth@evestradex.com">growth@evestradex.com</a>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<style lang="scss" scoped>
@import '../../../assets/scss/variables';

.tradex-container {
  max-width: 100%;
  background: $noble-blue-500;
  color: $white;
  .tradex-row {
    padding: 40px 10%;
  }
}
</style>
