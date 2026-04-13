<template>
  <div>
    <p class="para" v-html="$t('pages.bankDetailsIndia.inr.desc1')"></p>
    <table class="table col-xs-11 mb-5">
      <tbody>
        <tr>
          <td class="key">{{ $t('pages.bankDetailsIndia.keys.bankName') }}</td>
          <td>{{ currency.bank_name }}</td>
        </tr>

        <tr>
          <td class="key">{{ $t('pages.bankDetailsIndia.keys.accName') }}</td>
          <td>{{ currency.ac_name }}</td>
        </tr>

        <tr>
          <td class="key">{{ $t('pages.bankDetailsIndia.keys.accNo') }}</td>
          <td>{{ currency.ac_no }}</td>
        </tr>

        <tr>
          <td class="key">{{ $t('pages.bankDetailsIndia.keys.ifscCode') }}</td>
          <td>{{ currency.ifsc_code }}</td>
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
