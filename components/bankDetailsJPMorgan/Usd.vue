<template>
  <div>
    <p class="para" v-html="$t('pages.bankDetailsJpm.desc1')"></p>
    <table class="table col-xs-11 mb-5">
      <tbody>
        <tr>
          <td class="key">{{ $t('pages.bankDetails.keys.bankName') }}</td>
          <td>{{ currency.bank_name }}</td>
        </tr>

        <tr>
          <td class="key">{{ $t('pages.bankDetails.keys.bankAddress') }}</td>
          <td>
            <div v-for="(item, i) in currency.bank_address" :key="i">
              {{ item }} <br />
            </div>
          </td>
        </tr>

        <tr>
          <td class="key">{{ $t('pages.bankDetails.keys.accName') }}</td>
          <td>{{ currency.ac_name }}</td>
        </tr>

        <tr>
          <td class="key">{{ $t('pages.bankDetails.keys.accAddress') }}</td>
          <td>{{ currency.ac_address }}</td>
        </tr>

        <tr>
          <td class="key">{{ $t('pages.bankDetails.keys.accNo') }}</td>
          <td>{{ currency.ac_no }}</td>
        </tr>

        <tr>
          <td class="key">{{ $t('pages.bankDetails.keys.swiftIf') }}</td>
          <td>{{ currency.swift }}</td>
        </tr>

        <tr>
          <td class="key">
            {{ $t('pages.bankDetails.keys.beneficiary.bankName') }}
          </td>
          <td>{{ currency.beneficiary.bank_name }}</td>
        </tr>

        <tr>
          <td class="key">
            {{ $t('pages.bankDetails.keys.beneficiary.swift') }}
          </td>
          <td>{{ currency.beneficiary.swift }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ['currency']
}
</script>
