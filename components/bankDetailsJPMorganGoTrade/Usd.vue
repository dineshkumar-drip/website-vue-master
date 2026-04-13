<template>
  <div>
    <div
      class="business-details-table-info"
      v-html="$t('pages.bankDetailsJpm.desc1')"
    ></div>
    <p class="business-details-table-head">Wire Transfers:</p>
    <table-cell
      :start="true"
      :entry="{
        key: $t('pages.bankDetailsJpmGoTrade.keys.beneficiary.bankName'),
        value: currency.bank_name
      }"
    />
    <table-cell
      :entry="{
        key: $t('pages.bankDetailsJpmGoTrade.keys.beneficiary.bankAddress'),
        value: currency.bank_address.join(' ')
      }"
    />
    <table-cell
      :entry="{
        key: $t('pages.bankDetailsJpmGoTrade.keys.beneficiary.accName'),
        value: currency.ac_name
      }"
    />
    <table-cell
      :entry="{
        key: $t('pages.bankDetailsJpmGoTrade.keys.beneficiary.address'),
        value: currency.ac_address
      }"
    />
    <table-cell
      :entry="{
        key: $t('pages.bankDetailsJpmGoTrade.keys.beneficiary.accNo'),
        value: currency.ac_no
      }"
    />
    <table-cell
      :entry="{
        key: $t('pages.bankDetailsJpmGoTrade.keys.beneficiary.swift'),
        value: currency.swift
      }"
    />
    <table-cell
      :end="true"
      :entry="{
        key: $t('pages.bankDetailsJpmGoTrade.keys.beneficiary.bankRouting'),
        value: currency.aba_routing
      }"
    />
    <div v-if="shouldShowAch">
      <p class="business-details-table-head">ACH:</p>
      <table-cell
        :start="true"
        :entry="{
          key: $t('pages.bankDetails.keys.accName'),
          value: currency.ac_name
        }"
      />
      <table-cell
        :entry="{
          key: $t('pages.bankDetails.keys.accNo'),
          value: currency.ac_no
        }"
      />
      <table-cell
        :end="true"
        :entry="{
          key: $t('pages.bankDetails.keys.bankRoutingNumber'),
          value: ach.aba_routing
        }"
      />
    </div>
  </div>
</template>

<script>
import TableCell from '@/components/table'
export default {
  props: ['currency', 'ach'],
  components: {
    TableCell
  },
  computed: {
    shouldShowAch() {
      if (window.location.search.includes('client=')) {
        if (this.ach_no) {
          return true
        }
        return false
      }
      return true
    }
  }
}
</script>
<style lang="scss" scoped>
.business-details-table-info {
  font-size: 16px;
  font-weight: 700;
  color: #0a2e57;
  padding-bottom: 12px;
}
.business-details-table-head {
  font-size: 20px;
  font-weight: 700;
  color: #0a2e57;
  margin-top: 24px;
  margin-bottom: 8px;
}
</style>
