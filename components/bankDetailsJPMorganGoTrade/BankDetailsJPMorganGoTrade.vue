<template>
  <b-container class="bank-details-container">
    <b-row align-h="center" v-if="unauthorizedRequest">{{
      $t('pages.bankDetails.requestError')
    }}</b-row>
    <b-row v-else-if="!loading && access" data-aos="fade-right">
      <b-col :cols="12">
        <h3 class="bank-details-title">
          {{ $t('pages.bankDetailsJpmGoTrade.mainTitle') }}
        </h3>
        <h4 class="bank-details-subtitle">
          {{ $t('pages.bankDetails.dropdownTitle') }}
        </h4>
        <div class="input-block width-800">
          <dropdown
            :items="currencies"
            :selectedValue="selectedCurrency"
            :onSelect="handleCurrencySelection"
            label="Currency"
          />
        </div>
        <div style="margin-bottom: 24px"></div>
        <c-usd-jp
          v-if="selectedCurrency.value === 'usd'"
          :currency="currency.jpm_go_trade.wire_transfers"
          :ach="currency.jpm_go_trade.ach_payments"
        />
        <c-eur
          v-if="selectedCurrency.value === 'eur'"
          :currency="currency.eur"
        />
        <c-gbp
          v-if="selectedCurrency.value === 'gbp'"
          :currency="currency.gbp"
        />
        <c-cad
          v-if="selectedCurrency.value === 'cad'"
          :currency="currency.cad"
        />
      </b-col>
    </b-row>
    <spinner spinnerHeight="calc(100vh - 9rem)" v-else />
  </b-container>
</template>

<script>
import Spinner from '@/components/Spinner'
import CUsdJp from './Usd'
import CEur from '@/components/bankDetailsJpmNonLocked/Eur'
import CGbp from '@/components/bankDetailsJPMorganGoTrade/Gbp'
import CCad from '@/components/bankDetails/Cad'
import qs from 'qs'
import Dropdown from '@/components/dropdown'

export default {
  data() {
    return {
      access: false,
      loading: true,
      unauthorizedRequest: false,
      currency: '',
      selectedCurrency: {
        label: '',
        value: ''
      },
      currencies: [
        {
          label: this.$t('pages.bankDetails.usd.title'),
          value: 'usd'
        },
        {
          label: this.$t('pages.bankDetails.eur.title'),
          value: 'eur'
        },
        {
          label: this.$t('pages.bankDetails.gbp.title'),
          value: 'gbp'
        },
        {
          label: this.$t('pages.bankDetails.cad.title'),
          value: 'cad'
        }
      ]
    }
  },
  mounted() {
    this.getPublicToken()
  },
  methods: {
    handleCurrencySelection(item) {
      this.selectedCurrency = item
    },
    getPublicToken() {
      this.axios({
        url: process.env.apiUrl + '/v1/access/token'
      })
        .then((response) => {
          this.publicToken = response.data.token
          return this.getBankDetails()
        })
        .catch((err) => {})
    },
    getBankDetails() {
      this.axios({
        url: `${process.env.apiUrl}/v1/business/exporters/call/bank_details`,
        headers: {
          Authorization: `Token ${this.publicToken}`
        },
        params: {
          vars: {
            utm_token: this.$route.query.utm_token
          }
        },
        paramsSerializer: (params) => {
          return qs.stringify(params, { encode: false })
        }
      })
        .then((res) => {
          this.loading = false
          this.currency = res.data['India']
          return res.data
            ? (this.access = true)
            : (this.unauthorizedRequest = true)
        })
        .catch((err) => {
          this.unauthorizedRequest = true
        })
    }
  },
  components: {
    Spinner,
    CUsdJp,
    CEur,
    CGbp,
    CCad,
    Dropdown
  }
}
</script>
