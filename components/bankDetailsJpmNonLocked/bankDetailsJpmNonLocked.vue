<template>
  <b-container class="bank-details-container">
    <b-row align-h="center" v-if="unauthorizedRequest">{{
      $t('pages.bankDetails.requestError')
    }}</b-row>
    <b-row v-else-if="!loading && access" data-aos="fade-right">
      <b-col :cols="12" :md="12" :lg="11">
        <h3 class="bank-details-title">
          {{ $t('pages.bankDetails.title') }}
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
        <c-usd-not-locked
          v-if="selectedCurrency.value === 'usd'"
          :currency="currency.usd"
        />
        <c-eur-not-locked
          v-if="selectedCurrency.value === 'eur'"
          :currency="currency.eur"
        />
        <c-gbp-not-locked
          v-if="selectedCurrency.value === 'gbp'"
          :currency="currency.gbp"
        />
        <c-aud-not-locked
          v-if="selectedCurrency.value === 'aud'"
          :currency="currency.aud"
        />
        <c-sgd-not-locked
          v-if="selectedCurrency.value === 'sgd'"
          :currency="currency.sgd"
        />
        <c-cad-not-locked
          v-if="selectedCurrency.value === 'cad'"
          :currency="currency.cad"
        />
        <c-mxn-not-locked
          v-if="selectedCurrency.value === 'mxn'"
          :currency="currency.mxn"
        />
        <c-nzd-not-locked
          v-if="selectedCurrency.value === 'nzd'"
          :currency="currency.nzd"
        />
      </b-col>
    </b-row>
    <spinner spinnerHeight="calc(100vh - 9rem)" v-else />
  </b-container>
</template>

<script>
import Spinner from '@/components/Spinner'
import qs from 'qs'
import CurrencyDetails from './CurrencyDetails'
import CUsdNotLocked from '@/components/bankDetailsJpmNonLocked/Usd'
import CEurNotLocked from '@/components/bankDetailsJpmNonLocked/Eur'
import CGbpNotLocked from '@/components/bankDetailsJpmNonLocked/Gbp'
import CAudNotLocked from '@/components/bankDetailsJpmNonLocked/Aud'
import CSgdNotLocked from '@/components/bankDetailsJpmNonLocked/Sgd'
import CCadNotLocked from '@/components/bankDetailsJpmNonLocked/Cad'
import CMxnNotLocked from '@/components/bankDetailsJpmNonLocked/Mxn'
import CNzdNotLocked from '@/components/bankDetailsJpmNonLocked/Nzd'
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
          label: this.$t('pages.bankDetails.aud.title'),
          value: 'aud'
        },
        {
          label: this.$t('pages.bankDetails.sgd.title'),
          value: 'sgd'
        },
        {
          label: this.$t('pages.bankDetails.cad.title'),
          value: 'cad'
        },
        {
          label: this.$t('pages.bankDetails.mxn.title'),
          value: 'mxn'
        },
        {
          label: this.$t('pages.bankDetails.nzd.title'),
          value: 'nzd'
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
          this.currency = res.data['jpm-banks-non-locked']
          return res.data
            ? (this.access = true)
            : (this.unauthorizedRequest = true)
        })
        .catch((err) => {
          this.unauthorizedRequest = true
        })
    }
  },
  computed: {
    isMx() {
      return this.$i18n.locale.indexOf('mx') > -1
    }
  },
  components: {
    Spinner,
    CurrencyDetails,
    CUsdNotLocked,
    CEurNotLocked,
    CGbpNotLocked,
    CAudNotLocked,
    CSgdNotLocked,
    CCadNotLocked,
    CMxnNotLocked,
    CNzdNotLocked,
    Dropdown
  }
}
</script>
