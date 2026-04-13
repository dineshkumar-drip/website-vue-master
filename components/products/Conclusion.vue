<template>
  <b-container class="conclusion py-5">
    <b-row
      :class="
        isMxDomestic
          ? 'justify-content-center'
          : 'justify-content-center justify-content-lg-start'
      "
    >
      <h3 class="product-pages-title text-center text-lg-left">
        {{ $t('pages.products.contactForm.sectionSubHeading') }}
      </h3>
    </b-row>
    <b-row align-h="center">
      <b-col
        class="d-flex flex-column text-center contact-details"
        :cols="12"
        :lg="5"
      >
        <div class="pb-2 contact-heading">
          {{ $t('pages.products.contactForm.connectHeading') }}
        </div>
        <div class="py-2">
          <no-ssr>
            <font-awesome-icon
              class="contact-icons rotate-icon"
              :icon="['fas', 'phone']"
            />
          </no-ssr>
          <a
            v-track-click
            class="product-page-help-link ml-2 ml-md-4"
            id="product-page-help-section"
            :href="'tel:' + phone"
          >
            {{ phone }}
          </a>
        </div>
        <div class="py-2">
          <no-ssr>
            <font-awesome-icon
              class="contact-icons"
              :icon="['fas', 'envelope']"
            />
          </no-ssr>
          <a
            v-track-click
            class="product-page-help-link ml-2 ml-md-4"
            :href="'mailto:' + email"
          >
            {{ email }}
          </a>
        </div>
      </b-col>
      <b-col :lg="1" class="text-center" v-if="!isMxDomestic">
        <div class="separation-text">
          {{ $t('pages.products.contactForm.or') }}
        </div>
      </b-col>
      <b-col v-if="!isMxDomestic" :lg="5" :sm="12" :offset-lg="1">
        <contact-form />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import ButtonArrow from '~/components/products/ButtonArrow'
import ContactForm from '~/components/importers/2021/ContactForm'

export default {
  data() {
    return {
      loading: false,
      thanks: false,
      form: {
        name: '',
        email: '',
        phone: '',
        message: 'message recieved from ' + this.title
      },
      categories: [
        { value: 'Institutional Investor', text: 'Institutional Investor' },
        {
          value: 'Accredited Individual Investor',
          text: 'Accredited Individual Investor'
        },
        { value: 'Other', text: 'Other' }
      ],
      feedbackData: [
        {
          alt: 'bad',
          slug: 'bad.svg',
          id: 'bad-experience'
        },
        {
          alt: 'dissatisfied',
          slug: 'dissatisfied.svg',
          id: 'dissatisfied-experience'
        },
        {
          alt: 'neutral',
          slug: 'neutral.svg',
          id: 'neutral-experience'
        },
        {
          alt: 'satisfied',
          slug: 'satisfied.svg',
          id: 'satisfied-experience'
        },
        {
          alt: 'good',
          slug: 'good.svg',
          id: 'good-experience'
        }
      ]
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
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  props: ['title', 'isMxDomestic'],
  computed: {
    isUs() {
      return this.$i18n.locale.indexOf('us') > -1
    },
    phone() {
      const phone = this.isUs ? this.$t('us.phone') : this.$t('region.phone')
      if (this.isMxDomestic) {
        return this.$t('region.domesticMxPhone')
      } else {
        return phone
      }
    },
    email() {
      return this.isMxDomestic
        ? this.$t('region.domesticMxEmail')
        : this.$t('region.email')
    }
  },
  components: {
    FontAwesomeIcon,
    ButtonArrow,
    ContactForm
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/scss/variables';
@import '~bootstrap/scss/mixins';

.conclusion {
  margin: 3em auto 6.5em auto;
  min-height: 600px;
  .separation-text {
    color: $secondary;
  }

  .product-contact {
    padding: 0rem 1.5rem;
    border: solid 1px $product-shadow;
    box-shadow: 0 0 5px 0 rgba(223, 223, 223, 0.5);

    .card-title {
      margin-bottom: 2rem;
      font-size: 1rem;
    }
    .material-label {
      margin-bottom: 1.25rem;

      &.required {
        .placeholder {
          &::after {
            content: ' *';
            color: red;
          }
        }
      }
    }
  }
  .contact-details {
    color: $secondary;

    .contact-heading {
      color: #6c757d;
    }
  }
  .contact-icons {
    vertical-align: middle;
  }
  .product-page-help-link {
    color: $secondary;
    font-size: 1rem;
    @media only screen and (max-width: 604px) {
      font-size: 14px;
    }
    &:hover {
      text-decoration: none;
    }
  }
}
.rotate-icon {
  transform: rotate(100deg);
}

.card-body {
  padding-top: 4rem;
  padding-bottom: 4rem;
}

@include media-breakpoint-down(md) {
  .conclusion {
    .separation-text {
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
    }
  }
}
</style>
