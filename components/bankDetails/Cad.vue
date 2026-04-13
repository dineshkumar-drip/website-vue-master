<template>
  <div>
    <div
      class="business-details-table-info"
      v-html="$t('pages.bankDetails.cad.desc1')"
    ></div>
    <table-cell
      :start="true"
      :entry="{
        key: $t('pages.bankDetails.keys.beneficiary.bankName'),
        value: currency.beneficiary.bank_name
      }"
    />
    <table-cell
      :entry="{
        key: $t('pages.bankDetails.keys.beneficiary.bankAddress'),
        value: currency.beneficiary.bank_address
      }"
    />
    <table-cell
      :entry="{
        key: $t('pages.bankDetails.keys.beneficiary.accName'),
        value: currency.beneficiary.ac_name
      }"
    />
    <table-cell
      :entry="{
        key: $t('pages.bankDetails.keys.beneficiary.accNo'),
        value: currency.beneficiary.ac_no
      }"
    />
    <table-cell
      :end="true"
      :entry="{
        key: $t('pages.bankDetails.keys.beneficiary.swift'),
        value: currency.beneficiary.swift
      }"
    />
    <hr
      style="
        background-color: #95a3b3;
        max-width: 808px;
        height: 2px;
        margin: 0;
        margin: 16px 0;
        border: 0;
      "
    />
    <table-cell
      :start="true"
      :entry="{
        key: $t('pages.bankDetails.keys.correspondent.bankName'),
        value: currency.bank_name
      }"
    />
    <table-cell
      :entry="{
        key: $t('pages.bankDetails.keys.correspondent.bankAddress'),
        value: currency.bank_address.join(' ')
      }"
    />
    <table-cell
      :end="true"
      :entry="{
        key: $t('pages.bankDetails.keys.correspondent.swift'),
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
