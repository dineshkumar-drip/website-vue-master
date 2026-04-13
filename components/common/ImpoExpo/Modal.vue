<template>
  <div>
    <b-modal ref="my-modal" hide-footer hide-header>
      <div class="d-block d-flex text-center">
        <div class="img-container">
          <b-img
            class="img-fluid"
            :src="require(`~/assets/images/modal/trade_finance.png`)"
          />
        </div>
        <div class="body">
          <b-button
            class="cls-btn"
            @click="hideModal"
            :disabled="loading"
            :background="transparent"
          >
            <b-img :src="require(`~/assets/images/modal/Close.png`)" />
          </b-button>

          <h3>Improve your working capital access!</h3>

          <!-- </div> -->
          <!-- <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button> -->
          <b-button class="mt-2" variant="primary" block @click="toggleModal"
            >Apply to our trade finance today</b-button
          >
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  methods: {
    showModal() {
      this.$refs['my-modal'].show()
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    }
  },
  mounted() {
    this.showModal()
  }
}
</script>

<style lang="scss">
@import '~assets/scss/variables';
@import '~bootstrap/scss/mixins';

.cls-btn {
  border: none !important;
  background: none !important;
  justify-content: right;
}

.modal-body {
  //     border: none;
  box-shadow: 11px 9px 15px rgba(0, 0, 0, 0.15);
  background-color: $bg-light-gray;

  padding: 1rem;
  border-radius: 30px;
  .img-container {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .body {
    flex: 2;
    border-radius: 30px;

    display: flex;
    //       justify-content: center;
    flex-direction: column;
    font-size: 28px;
    color: $dark-blue;

    .description {
      color: $dark-blue;
    }
  }
}
</style>
