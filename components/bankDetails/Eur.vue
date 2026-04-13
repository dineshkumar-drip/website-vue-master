<template>
  <div>
    <divp
      class="business-details-table-info"
      v-html="$t('pages.bankDetails.eur.desc1')"
    ></divp>
    <table-cell
      :start="true"
      :entry="{
        key: $t('pages.bankDetails.keys.bankName'),
        value: currency.bank_name
      }"
    />
    <table-cell
      :entry="{
        key: $t('pages.bankDetails.keys.bankAddress'),
        value: currency.bank_address.join(' ')
      }"
    />
    <table-cell
      :entry="{
        key: $t('pages.bankDetails.keys.bName'),
        value: currency.ac_name
      }"
    />
    <table-cell
      :entry="{ key: $t('pages.bankDetails.keys.bNo'), value: currency.ac_no }"
    />
    <table-cell
      :entry="{ key: $t('pages.bankDetails.keys.iban'), value: currency.iban }"
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
