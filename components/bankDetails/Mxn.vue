<template>
  <div>
    <div
      class="business-details-table-info"
      v-html="$t('pages.bankDetails.mxn.desc1')"
    ></div>
    <table-cell
      :start="true"
      :entry="{
        key: $t('pages.bankDetails.keys.beneficiary.bankName'),
        value: currency.bank_name
      }"
    />
    <table-cell
      :entry="{
        key: $t('pages.bankDetails.keys.beneficiary.bankAddress'),
        value: currency.bank_address.join(' ')
      }"
    />
    <table-cell
      :entry="{
        key: $t('pages.bankDetails.keys.beneficiary.accName'),
        value: currency.ac_name
      }"
    />
    <table-cell
      :entry="{
        key: $t('pages.bankDetails.keys.beneficiary.accNo'),
        value: currency.ac_no
      }"
    />
    <table-cell
      :entry="{
        key: $t('pages.bankDetails.keys.clabe'),
        value: currency.clabe
      }"
    />
    <table-cell
      :end="true"
      :entry="{
        key: $t('pages.bankDetails.keys.beneficiary.swift'),
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
