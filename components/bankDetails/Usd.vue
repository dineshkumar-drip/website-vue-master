<template>
  <div>
    <div
      class="business-details-table-info"
      v-html="$t('pages.bankDetails.usd.desc1')"
    ></div>
    <div class="business-details-table-head">Wire Transfers:</div>
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
      :entry="{
        key: $t('pages.bankDetails.keys.swiftIf'),
        value: currency.swift
      }"
    />
    <table-cell
      :end="true"
      :entry="{
        key: $t('pages.bankDetails.keys.aba'),
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
          key: $t('pages.bankDetails.keys.aba'),
          value: currency.ach_no
        }"
      />
    </div>
  </div>
</template>

<script>
import TableCell from '@/components/table'
export default {
  props: ['currency'],
  components: {
    TableCell
  },
  computed: {
    shouldShowAch() {
      if (window.location.search.includes('client=')) {
        if (this.currency.ach_no) {
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
