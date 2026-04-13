<template>
  <div>
    <div
      class="business-details-table-info mb-3"
      v-html="$t('pages.voyagerBankDetails.descEUR')"
    ></div>
    <table-cell
      :start="true"
      :entry="{
        key: $t('pages.voyagerBankDetails.keys.bankName'),
        value: currency.bank_name
      }"
    />
    <table-cell
      :entry="{
        key: $t('pages.voyagerBankDetails.keys.bankAddress'),
        value: currency.bank_address.join(' ')
      }"
    />
    <table-cell
      :entry="{
        key: $t('pages.voyagerBankDetails.keys.accName'),
        value: currency.ac_name
      }"
    />
    <table-cell
      :entry="{
        key: $t('pages.voyagerBankDetails.keys.iBan'),
        value: currency.iban
      }"
    />
    <table-cell
      :entry="{
        key: $t('pages.voyagerBankDetails.keys.accNo'),
        value: currency.ac_no
      }"
    />

    <table-cell
      :end="true"
      :entry="{
        key: $t('pages.bankDetails.keys.swift'),
        value: currency.swift
      }"
    />
  </div>
</template>

<script>
import TableCell from '@/components/table'
export default {
  props: ['currency'],
  components: {
    TableCell
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
</style>
