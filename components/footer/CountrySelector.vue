<template>
  <div>
    <span v-if="isBankDetailsPage">
      {{ $t('pages.bankDetails.exporterCountry') }}
    </span>
    <span>
      <b-dropdown
        :variant="variant"
        v-bind:class="{ 'footer-dropdown': !isBankDetailsPage }"
        :dropup="!isBankDetailsPage"
        :text="businessName"
      >
        <b-dropdown-item href="/en-in" @click.prevent="switchCountry('en-in')">
          <b-img
            :src="require(`~/assets/images/index/in-flag.svg`)"
            alt="India"
            :width="20"
            class="flag"
          />
          {{ $t('pages.countries.india') }}
        </b-dropdown-item>
        <b-dropdown-item href="/es-mx" @click.prevent="switchCountry('es-mx')">
          <b-img
            :src="require(`~/assets/images/index/mx-flag.svg`)"
            alt="Mexico"
            :width="20"
            class="flag"
          />
          {{ $t('pages.countries.mexico') }}
        </b-dropdown-item>
        <b-dropdown-item href="/en-us" @click.prevent="switchCountry('en-us')">
          <b-img
            :src="require(`~/assets/images/index/us-flag.png`)"
            alt="US"
            :width="20"
            :height="13"
            class="flag"
          />
          {{ $t('pages.countries.us') }}
        </b-dropdown-item>
      </b-dropdown>
    </span>
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  data() {
    return {
      mappings: {
        en: this.$t('pages.countries.global'),
        'en-in': this.$t('pages.countries.india'),
        'es-mx': this.$t('pages.countries.mexico'),
        'en-mx': this.$t('pages.countries.mexico'),
        'en-ae': this.$t('pages.countries.uae'),
        'en-us': this.$t('pages.countries.us')
      },
      variant: this.isBankDetailsPage
        ? 'outline'
        : 'secondary' || this.isExporters
        ? 'footer-bg'
        : 'secondary'
    }
  },
  computed: {
    businessName() {
      return this.mappings[this.$i18n.locale]
    }
  },
  methods: {
    // set cookie    // redirect
    switchCountry(locale) {
      if (process.browser) {
        this.cookieLocale = this.$cookies.get('i18n_locale')
        this.$cookies.set('i18n_locale', locale, {
          path: '/',
          maxAge: 60 * 60 * 24 * 7
        })
        this.$router.replace(this.switchLocalePath(locale))
      }
    }
  },
  props: {
    isBankDetailsPage: {
      default: false
    },
    isExporters: {
      default: false
    }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';
.footer-dropdown.btn-group {
  .btn {
    text-transform: capitalize;
    font-size: 0.8rem;
    margin-left: 0;
    color: white;
    padding: 0;
  }
}
.main-footer {
  .footer-dropdown {
    .dropdown-item {
      color: $secondary;
      text-align: left;
      font-size: 0.8rem;
      min-width: 7rem;
      .flag {
        margin-right: 0.4rem;
        margin-top: 0rem;
        width: 1.2rem;
      }
    }
  }
}
.footer-bg .btn {
  background-color: $dark-blue !important;
  // color: white !important;
}
</style>
