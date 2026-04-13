<template>
  <div>
    <p class="para" v-html="$t(`pages.bankDetails.${currKey}.desc1`)"></p>
    <table class="table col-xs-11 mb-5">
      <tbody>
        <tr v-if="tabCurrency.bank_name">
          <td class="key">{{ $t('pages.bankDetails.keys.bankName') }}</td>
          <td>{{ tabCurrency.bank_name }}</td>
        </tr>

        <tr v-if="tabCurrency.bank_address">
          <td class="key">{{ $t('pages.bankDetails.keys.bankAddress') }}</td>
          <td>
            <div v-for="(item, i) in tabCurrency.bank_address" :key="i">
              {{ item }} <br />
            </div>
          </td>
        </tr>

        <tr v-if="tabCurrency.clabe">
          <td class="key">{{ $t('pages.bankDetails.keys.clabe') }}</td>
          <td>{{ tabCurrency.clabe }}</td>
        </tr>

        <tr v-if="tabCurrency.aba_routing">
          <td class="key">{{ $t('pages.bankDetails.keys.aba') }}</td>
          <td>{{ tabCurrency.aba_routing }}</td>
        </tr>

        <tr v-if="tabCurrency.swift">
          <td class="key">{{ $t('pages.bankDetails.keys.swift') }}</td>
          <td>{{ tabCurrency.swift }}</td>
        </tr>

        <tr v-if="tabCurrency.bank_sort_code">
          <td class="key">{{ $t('pages.bankDetails.keys.bankSortCode') }}</td>
          <td>{{ tabCurrency.bank_sort_code }}</td>
        </tr>

        <tr v-if="tabCurrency.ac_name">
          <td class="key">{{ $t('pages.bankDetails.keys.bName') }}</td>
          <td>{{ tabCurrency.ac_name }}</td>
        </tr>

        <tr v-if="tabCurrency.iban">
          <td class="key">{{ $t('pages.bankDetails.keys.iban') }}</td>
          <td>{{ tabCurrency.iban }}</td>
        </tr>

        <tr v-if="tabCurrency.ac_no">
          <td class="key">{{ $t('pages.bankDetails.keys.bNo') }}</td>
          <td>{{ tabCurrency.ac_no }}</td>
        </tr>

        <tr v-if="tabCurrency.beneficiary && tabCurrency.beneficiary.bank_name">
          <td class="key">
            {{ $t('pages.bankDetails.keys.beneficiary.bankName') }}
          </td>
          <td>{{ tabCurrency.beneficiary.bank_name }}</td>
        </tr>

        <tr
          v-if="tabCurrency.beneficiary && tabCurrency.beneficiary.bank_address"
        >
          <td class="key">
            {{ $t('pages.bankDetails.keys.beneficiary.bankAddress') }}
          </td>
          <td>
            <div>
              {{ tabCurrency.beneficiary.bank_address }}
            </div>
          </td>
        </tr>

        <tr v-if="tabCurrency.beneficiary && tabCurrency.beneficiary.swift">
          <td class="key">
            {{ $t('pages.bankDetails.keys.beneficiary.swift') }}
          </td>
          <td>{{ tabCurrency.beneficiary.swift }}</td>
        </tr>

        <tr v-if="tabCurrency.beneficiary && tabCurrency.beneficiary.ac_name">
          <td class="key">
            {{ $t('pages.bankDetails.keys.beneficiary.accName') }}
          </td>
          <td>{{ tabCurrency.beneficiary.ac_name }}</td>
        </tr>

        <tr v-if="tabCurrency.beneficiary && tabCurrency.beneficiary.ac_no">
          <td class="key">
            {{ $t('pages.bankDetails.keys.beneficiary.accNo') }}
          </td>
          <td>{{ tabCurrency.beneficiary.ac_no }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ['currKey', 'currency'],
  data() {
    return {
      tabCurrency: (this.currency && this.currency[this.currKey]) || {}
    }
  }
}
</script>
