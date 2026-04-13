<template>
  <b-container>
    <b-row class="justify-content-center" data-aos="fade-right">
      <b-col cols="11">
        <h3 class="section-title">
          {{ $t('pages.interestCalculator.title') }}
        </h3>
      </b-col>
    </b-row>

    <b-row class="justify-content-center">
      <b-col cols="11">
        <table class="table table-bordered interest-calc-input">
          <thead>
            <tr>
              <th colspan="3">
                {{ $t('pages.interestCalculator.table1.title') }}
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{{ $t('pages.interestCalculator.table1.advanceRate') }}</td>
              <td class="has-input">
                <b-form-input v-model="a" type="text" ref="advanceRate" />
              </td>
              <td>{{ $t('pages.interestCalculator.table1.a') }}</td>
            </tr>
            <tr>
              <td>{{ $t('pages.interestCalculator.table1.interestRate') }}</td>
              <td class="has-input">
                <b-form-input v-model="b" type="text" />
              </td>
              <td>{{ $t('pages.interestCalculator.table1.b') }}</td>
            </tr>
            <tr>
              <td>
                {{ $t('pages.interestCalculator.table1.factoringCommission') }}
              </td>
              <td class="has-input">
                <b-form-input v-model="c" type="text" />
              </td>
              <td>{{ $t('pages.interestCalculator.table1.c') }}</td>
            </tr>
          </tbody>
        </table>

        <table class="table table-bordered col-xs-11 interest-calc-input">
          <thead>
            <tr>
              <th colspan="3">
                {{ $t('pages.interestCalculator.table2.title') }}
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{{ $t('pages.interestCalculator.table2.invoiceValue') }}</td>
              <td class="has-input">
                <b-form-input v-model="d" type="text" />
              </td>
              <td>{{ $t('pages.interestCalculator.table2.d') }}</td>
            </tr>
            <tr>
              <td>{{ $t('pages.interestCalculator.table2.duration') }}</td>
              <td class="has-input">
                <b-form-input v-model="e" type="text" />
              </td>
              <td>{{ $t('pages.interestCalculator.table2.e') }}</td>
            </tr>
          </tbody>
        </table>

        <table class="table table-bordered col-xs-11 interest-calc-input mb-5">
          <thead>
            <tr>
              <th colspan="3">
                {{ $t('pages.interestCalculator.table3.title') }}
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                {{ $t('pages.interestCalculator.table3.amountAdvanced') }}
              </td>
              <td>{{ f }}</td>
              <td>{{ $t('pages.interestCalculator.table3.f') }}</td>
            </tr>
            <tr>
              <td>{{ $t('pages.interestCalculator.table3.interest') }}</td>
              <td>{{ g }}</td>
              <td>{{ $t('pages.interestCalculator.table3.g') }}</td>
            </tr>
            <tr>
              <td>
                {{ $t('pages.interestCalculator.table3.factoringCommission') }}
              </td>
              <td>{{ h }}</td>
              <td>{{ $t('pages.interestCalculator.table3.h') }}</td>
            </tr>
            <tr>
              <td>{{ $t('pages.interestCalculator.table3.total') }}</td>
              <td>{{ i }}</td>
              <td>{{ $t('pages.interestCalculator.table3.i') }}</td>
            </tr>
            <tr>
              <td>{{ $t('pages.interestCalculator.table3.percentage') }}</td>
              <td>{{ j }}</td>
              <td>{{ $t('pages.interestCalculator.table3.j') }}</td>
            </tr>
          </tbody>
        </table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  data() {
    return {
      a: 80,
      b: 5.5,
      c: 0.5,
      d: 100000,
      e: 60
    }
  },
  components: {
    FontAwesomeIcon
  },
  mounted() {
    this.$refs.advanceRate.focus()
  },
  computed: {
    f() {
      return ((this.a / 100) * this.d).toFixed(0)
    },
    g() {
      return Math.round((this.f * (this.b / 100) * this.e) / 360)
    },
    h() {
      return (this.c / 100) * this.d
    },
    i() {
      return this.g + this.h
    },
    j() {
      return ((this.i / this.d) * 100).toFixed(2).replace(/[.,]00$/, '')
    }
  }
}
</script>
