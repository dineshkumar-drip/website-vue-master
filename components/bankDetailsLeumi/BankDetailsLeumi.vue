<template>
  <b-container class="bank-details-container">
    <b-row align-h="center" v-if="unauthorizedRequest">{{
      $t('pages.bankDetails.requestError')
    }}</b-row>
    <b-row v-else-if="!loading && access" data-aos="fade-right">
      <b-col class="d-xl-none" :cols="12">
        <country-selector :isBankDetailsPage="true" />
      </b-col>
      <b-col :cols="12" :md="8">
        <h3 class="section-title">
          {{ $t('pages.bankDetails.title') }}
        </h3>
        <b-tabs>
          <b-tab :title="$t('pages.bankDetails.usd.title')" active>
            <c-usd :currency="currency.leumi_usd" />
          </b-tab>
        </b-tabs>
      </b-col>
      <b-col class="d-none d-xl-block" :cols="12" :lg="4">
        <country-selector :isBankDetailsPage="true" />
      </b-col>
    </b-row>
    <spinner spinnerHeight="calc(100vh - 9rem)" v-else />
  </b-container>
</template>

<script>
import Spinner from '@/components/Spinner'
import CUsd from '@/components/bankDetailsLeumi/Usd'
import qs from 'qs'
import CountrySelector from '@/components/footer/CountrySelector'

export default {
  data() {
    return {
      access: false,
      loading: true,
      unauthorizedRequest: false,
      currency: ''
    }
  },
  mounted() {
    this.getPublicToken()
  },
  methods: {
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
  components: {
    Spinner,
    CUsd,
    CountrySelector
  }
}
</script>
