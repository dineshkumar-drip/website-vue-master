<template>
  <div class="pitch-calculator-border mb-5">
    <b-row class="justify-content-center" data-aos="fade-right">
      <b-col cols="11">
        <section-heading :text="$t('pages.pitchCalculator.title')" />
      </b-col>
    </b-row>

    <b-row class="justify-content-center">
      <b-col cols="11">
        <div class="drip-body color-noble-blue-500">
          Estimate how much working capital your business needs to operate
          smoothly. Enter a few basics about your revenue, payment cycles, and
          inventory to see where cash gets tied up and how big the gap really
          is.
        </div>
        <div class="spacing-32"></div>
      </b-col>
      <b-col sm="11" md="6">
        <Textfield
          id="annual-revenue"
          name="annual-revenue"
          type="number"
          :label="'Annual Revenue'"
          placeholder="3000000"
          tooltiptext="Insert total income your company earns in a year"
          v-model="a"
          left-icon="$"
        />
        <Textfield
          id="cost-of-goods-and-services"
          name="cost-of-goods-and-services"
          type="number"
          :label="'Cost of Goods and Services'"
          placeholder="2500000"
          tooltiptext="Insert cost of producing goods and services"
          v-model="b"
          left-icon="$"
        />
        <Textfield
          id="receivables-period"
          name="receivables-period"
          type="number"
          :label="'Customers pay you in (Receivables days)'"
          placeholder="60"
          tooltiptext="Insert average number of days your customers take to pay you."
          v-model="c"
        />
        <Textfield
          id="payables-period"
          name="payables-period"
          type="number"
          :label="'You pay suppliers in (Payable days)'"
          placeholder="30"
          tooltiptext="Average number of days you take to pay your suppliers."
          v-model="d"
        />
        <Textfield
          id="inventory-period"
          name="inventory-period"
          type="number"
          :label="'Inventory sits for (Inventory days)'"
          placeholder="90"
          tooltiptext="Average number of days your inventory stays before being sold."
          v-model="e"
        />
        <Textfield
          id="current-debt-stack"
          name="current-debt-stack"
          type="number"
          :label="'Current debt'"
          placeholder="400000"
          tooltiptext="Total short-term loans or working capital borrowing currently used."
          v-model="f"
          left-icon="$"
        />
        <div class="drip-body-small color-noble-blue-500 font-italic">
          *This calculator provides indicative estimates only and is not
          financial advice. Results are based on user inputs and general
          assumptions and may vary by business.
        </div>
      </b-col>

      <b-col sm="11" md="5">
        <div class="d-flex flex-column vertical-divider pl-4">
          <div
            class="results-border d-flex flex-column align-items-center border-bottom-1"
          >
            <div class="d-flex justify-content-between w-100 mb-1">
              <div class="drip-h4 font-weight-700 color-noble-blue-500">
                Total Working Capital Gap:
              </div>
              <div class="drip-h4 font-weight-700 color-noble-blue-500">
                {{ formatUSD(m) }}
              </div>
            </div>
            <div class="divider-grey"></div>
            <div class="d-flex justify-content-between w-100 mb-1">
              <div
                class="d-flex drip-body font-weight-700 color-noble-blue-500 align-items-center"
              >
                If you fix this gap, <br />you can potentially earn
                <tooltip
                  tooltiptext="Potential additional gross profit achievable by optimizing working capital."
                  size="small"
                  class="ml-1"
                />
              </div>
              <div class="drip-body color-noble-blue-500">
                {{ formatUSD(n) }}
              </div>
            </div>
            <div class="d-flex justify-content-between w-100 mb-1">
              <div class="drip-body font-weight-700 color-noble-blue-500">
                Your cash conversion cycle
                <tooltip
                  tooltiptext="The number of days it takes for a company to convert its investments in inventory and other resources into cash flows from sales."
                  size="small"
                />
              </div>
              <div class="drip-body color-noble-blue-500">
                {{ h }}
              </div>
            </div>
          </div>
          <div class="spacing-24"></div>
          <div class="drip-body color-noble-blue-500">
            Even if your business is profitable, your money is always stuck
            somewhere. Working capital is what keeps the wheel turning without
            stalls
          </div>
          <div class="spacing-16"></div>
          <div class="d-flex justify-content-between w-100 align-items-center">
            <div class="drip-h4 font-weight-700 color-noble-blue-500">
              See ways to improve <br />
              your cash flow
            </div>
            <div>
              <button class="action-button" @click="redirectTo">
                Browse funding options
              </button>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import SectionHeading from '~/components/common/ImpoExpo/SectionHeading'
import category from '~/components/WorkingCapitalCalc/category_data.json'
import Textfield from '~/components/WorkingCapitalCalc/Textfield'
import Select from '~/components/WorkingCapitalCalc/Select'
import Tooltip from '~/components/WorkingCapitalCalc/Tooltip'

export default {
  components: {
    SectionHeading,
    Textfield,
    Select,
    Tooltip
  },
  data() {
    return {
      a: 0,
      b: 0,
      c: 0,
      d: 0,
      e: 0,
      f: 0,
      g: 'Electronics',
      options: [
        'Electronics',
        'Consumer Discretionary',
        'Industrial Goods',
        'Packaged Foods',
        'Food - Animal Products',
        'Food - Plant Products',
        'Other',
        'Materials/Commodities',
        'Textiles & Apparel'
      ],
      industryData: []
    }
  },
  methods: {
    redirectTo() {
      this.$router.push(this.localePath('index'))
    },
    formatUSD(number) {
      if (number) {
        const formatter = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        })
        return formatter.format(number)
      }
      return '$0'
    }
  },
  computed: {
    h() {
      // Cash Conversion Cycle
      // =C6+C8-C7
      const { c, d, e } = this
      const sum = parseInt(c) + parseInt(e) - parseInt(d)
      return Math.round(sum)
    },
    i() {
      // =C5/365
      return parseFloat(this.b / 365).toFixed(2)
    },
    j() {
      // CCC Comparision with Peers
      // =IF(C13<VLOOKUP(C10,$E$3:$H$11,2,FALSE)&C13>VLOOKUP(C10,$E$3:$H$11,3,FALSE), "Inline with Industry Average",IF(C13>VLOOKUP(C10,E3:H11,2,FALSE),"Higher than Industry Average", "Lower than Industry Average"))
      if (this.h === 0) {
        return '-'
      }
      if (
        this.h < category.find((x) => x.name === this.g).hvalue &&
        this.h > category.find((x) => x.name === this.g).lvalue
      ) {
        return 'Inline with Industry Average'
      } else if (this.h > category.find((x) => x.name === this.g).hvalue) {
        return 'Higher than Industry Average'
      } else {
        return 'Lower than Industry Average'
      }
    },
    k() {
      // Working Capital Need
      // =MROUND(C14*C13,50000)
      const multiple = 50000
      return Math.round((this.h * this.i) / multiple) * multiple
    },
    l() {
      // =C4-C5
      return this.a - this.b
    },
    m() {
      // =C16-C9
      return this.k - this.f
    },
    n() {
      // Excess Gross Profit Possible
      // =MROUND(C17/C5*4*C16,50000)
      const valueToRound = (this.l / this.b) * 4 * this.k
      const multiple = 50000

      // MROUND(value, multiple) is equivalent to Math.round(value / multiple) * multiple
      const result = Math.round(valueToRound / multiple) * multiple

      return result
    }
  }
}
</script>
<style lang="scss" scoped>
.pitch-calculator-border {
  padding: 36px 0px;
  margin: 40px 10%;
  border: 2px solid #217ce57d;
  border-radius: 16px;
  @media (max-width: 1025px) {
    margin: 40px 20px;
  }
}
.results-border {
  width: 100%;
  padding: 24px 8px;
  border: 2px solid #217ce57d;
  border-radius: 16px;
}
.pitch-table {
  .has-input,
  .final-value {
    position: relative;
    width: 40%;
    .is-usd {
      position: absolute;
      right: 24px;
      top: 19px;
      color: grey;
      font-weight: 700;
    }
  }
}
.vertical-divider {
  border-left: 4px solid #34d286;
  height: 100%;
}
.divider-grey {
  width: 100%;
  height: 1px;
  background-color: #e0e0e0;
  margin: 16px 0;
}
.action-button {
  display: flex;
  padding: 16px;
  background: #26b67f;
  font-weight: 700;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  &:hover {
    background: #1d9164;
    color: #ffffff;
    cursor: pointer;
  }
}
</style>
