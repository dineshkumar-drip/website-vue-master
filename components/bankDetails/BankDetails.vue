<template>
  <b-container class="bank-details-container">
    <b-row align-h="center" v-if="unauthorizedRequest">{{
      $t('pages.bankDetails.requestError')
    }}</b-row>
    <b-row v-else-if="!loading && access" data-aos="fade-right">
      <b-col :cols="12">
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
        <c-usd
          v-if="selectedCurrency.value === 'usd'"
          :currency="currency.usd"
        />
        <c-eur
          v-if="selectedCurrency.value === 'eur'"
          :currency="currency.eur"
        />
        <c-gbp
          v-if="selectedCurrency.value === 'gbp'"
          :currency="currency.gbp"
        />
        <c-aud
          v-if="selectedCurrency.value === 'aud'"
          :currency="currency.aud"
        />
        <c-sgd
          v-if="selectedCurrency.value === 'sgd'"
          :currency="currency.sgd"
        />
        <c-cad
          v-if="selectedCurrency.value === 'cad'"
          :currency="currency.cad"
        />
        <c-mxn
          v-if="selectedCurrency.value === 'mxn'"
          :currency="currency.mxn"
        />
        <c-nzd
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
import CUsd from '@/components/bankDetails/Usd'
import CEur from '@/components/bankDetails/Eur'
import CGbp from '@/components/bankDetails/Gbp'
import CAud from '@/components/bankDetails/Aud'
import CSgd from '@/components/bankDetails/Sgd'
import CCad from '@/components/bankDetails/Cad'
import CMxn from '@/components/bankDetails/Mxn'
import CNzd from '@/components/bankDetails/Nzd'
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
            utm_token: this.$route.query.utm_token,
            eclient_id: this.$route.query.client
          }
        },
        paramsSerializer: (params) => {
          return qs.stringify(params, { encode: false })
        }
      })
        .then((res) => {
          this.loading = false
          this.currency = res.data[this.$t('region.business')]
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
    CUsd,
    CEur,
    CGbp,
    CAud,
    CSgd,
    CCad,
    CMxn,
    CNzd,
    Dropdown
  }
}
</script>
<style lang="scss" scoped>
.width-800 {
  width: 800px;
}
.custom-dropdown {
  width: 200px;
}
.custom-dropdown > button {
  background-color: red !important;
}
</style>
