<template>
  <page-section section-class="finance-option-section">
    <b-container fluid class="mt-lg-10 mt-4">
      <b-row class="justify-content-around align-items-stretch">
        <b-col md="5" class="d-flex justify-content-center mb-4 mb-md-0">
          <div class="option-card">
            <h5 class="card-title">Post-Shipment Finance</h5>
            <p class="card-desc">
              Secure immediate funds against your export invoices.
            </p>
            <b-button
              variant="success"
              class="action-button"
              :to="localePath('exporters')"
              >Get Started</b-button
            >
          </div>
        </b-col>
        <b-col md="5" class="d-flex justify-content-center">
          <div class="option-card">
            <img
              src="@/assets/images/financeOptions/New.png"
              alt="New"
              class="badge-image"
            />
            <h5 class="card-title text-center">
              Advance Against Purchase Order
            </h5>
            <p class="card-desc">
              Sell through us and get upto 60% advance payment upfront against
              confirmed purchase orders.
            </p>
            <b-button
              variant="success"
              class="action-button"
              :to="localePath('advance-against-po')"
              >Learn more</b-button
            >
          </div>
        </b-col>
      </b-row>
    </b-container>
  </page-section>
</template>

<script>
import PageSection from '~/components/PageSection'

export default {
  components: {
    PageSection
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables';
@import '~bootstrap/scss/mixins';

.finance-option-section {
  margin-top: 6rem;
}

.option-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 10px 30px 0px #00000013;
  padding: 2rem;
  width: 100%;
  position: relative;
  height: 100%;
}

.card-title {
  font-weight: 700;
  color: #003366;
  margin-bottom: 1rem;
}

.card-desc {
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  color: #333;
  flex-grow: 1;
  text-align: center;
}

.action-button {
  min-width: 120px;
  align-self: center;
}

.badge-image {
  position: absolute;
  top: 10px;
  left: -0.5rem;
  height: 24px;
}
</style>
