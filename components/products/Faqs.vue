<template>
  <b-container
    :fluid="page !== 'products'"
    class="product-faqs"
    v-if="faqsArray.length"
  >
    <b-row>
      <b-col :class="page !== 'products' ? 'text-center text-lg-left' : ''">
        <heading
          :text="$t('pages.products.faqs.title')"
          :center="page !== 'products'"
        />
      </b-col>
    </b-row>
    <faq :faqs="faqsArray" />
    <b-row v-if="isIn && page != 'channelPartner'" class="text-center">
      <b-col>
        <div class="d-flex flex-column align-items-center">
          <div class="faq-more">
            {{ $t('pages.products.faqs.moreQuestions') }}
          </div>
          <button-arrow
            v-track-click
            id="product-faqs-cta"
            variant="secondary"
            @click.native="redirectSupport"
          >
            {{ $t('pages.products.faqs.viewAll') }}
          </button-arrow>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import Faq from '~/components/products/Faq'
import ButtonArrow from '~/components/products/ButtonArrow'
import Heading from '~/components/common/ImpoExpo/Heading'
import { get } from 'lodash'

export default {
  props: {
    faqs: {
      type: Array,
      default: () => []
    },
    faqSchema: {
      type: Object,
      default: () => {}
    },
    page: {
      type: String,
      default: 'importers'
    }
  },
  data() {
    return {
      faqsArray: []
    }
  },
  methods: {
    redirectSupport() {
      window.location.href = this.$t('urls.support')
    }
  },
  computed: {
    isIn() {
      return this.$i18n.locale === 'en-in'
    }
  },
  mounted() {
    const arr = get(this.faqSchema, 'mainEntity', [])
    if (arr.length) {
      this.faqsArray = arr.map((a) => {
        return {
          question: a.name ? a.name.trim() : '',
          answer: get(a, 'acceptedAnswer.text', '').trim()
        }
      })
    } else {
      this.faqsArray = this.faqs
    }
  },
  components: {
    Faq,
    ButtonArrow,
    Heading
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/scss/variables';
.product-faqs {
  .faq-more {
    margin-top: 4rem;
    margin-bottom: 1.5rem;
    font-size: 1.25rem;
    color: $secondary;
  }
  .f-32 {
    font-size: 2rem;
  }
}
.title-underline {
  position: relative;
  margin-bottom: 4rem;
  color: $dark-blue;
  &.title-white {
    color: $white;
  }
  span {
    &:after {
      content: '';
      width: 4rem;
      height: 2.5px;
      background: $primary;
      position: absolute;
      bottom: -1.5rem;
      left: 0;
    }
    &.center {
      &:after {
        right: 0;
        margin: 0 auto;
      }
    }
  }
}
</style>
