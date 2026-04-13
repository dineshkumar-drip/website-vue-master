<template>
  <div>
    <span>
      <b-nav-item-dropdown
        no-caret
        class="mr-4 header d-none d-lg-block"
        :variant="variant"
      >
        <template slot="button-content">
          <div class="d-flex">
            <b-img
              :src="
                (page === 'channelPartner' || page === 'newsroom') &&
                !lightHeader
                  ? require(`~/assets/images/index/globe-white.svg`)
                  : require(`~/assets/images/index/globe.svg`)
              "
              :alt="'globe'"
              :width="20"
              class="flag mr-2 d-none d-lg-block globe-icon"
            />
            <nav-item-text
              :text="businessName"
              :lightHeader="lightHeader"
              :page="page"
            />
          </div>
        </template>

        <b-dropdown-item
          @click.prevent="switchCountry(item.locale)"
          v-for="item in dictionary"
          :key="item.id"
        >
          {{ item.title }}
        </b-dropdown-item>
      </b-nav-item-dropdown>
      <b-nav-item
        no-caret
        v-track-click
        class="d-lg-none"
        id="exporter-header-lang"
        @click="visibleLang = !visibleLang"
        >{{ businessName }}
        <font-awesome-icon
          :icon="['fas', 'chevron-down']"
          class="icon alt ml-2"
          v-show="!visibleLang"
        />
        <font-awesome-icon
          :icon="['fas', 'chevron-up']"
          class="icon alt ml-2"
          v-show="visibleLang"
        />
      </b-nav-item>
      <b-collapse id="collapse-3" v-model="visibleLang" class="d-lg-none">
        <div
          class="link mb-3 mt-2 ml-2"
          v-for="(item, i) in dictionary"
          :key="i"
        >
          <a @click.prevent="switchCountry(item.locale)">{{ item.title }}</a>
        </div>
      </b-collapse>
    </span>
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import NavItemText from '~/components/common/ImpoExpo/NavItemText'

export default {
  data() {
    return {
      mappings: {
        en: this.$t('pages.countries.global'),
        'en-in': this.$t('pages.countries.india'),
        'en-ec': this.$t('pages.countries.ecuador'),
        'es-ec': this.$t('pages.countries.ecuador'),
        'es-mx': this.$t('pages.countries.mexico'),
        'en-mx': this.$t('pages.countries.mexico'),
        'en-ae': this.$t('pages.countries.uae'),
        'en-us': this.$t('pages.countries.us')
      },
      variant: this.isBankDetailsPage
        ? 'outline'
        : 'secondary' || this.isNewBranding
        ? 'footer-bg'
        : 'secondary',
      visibleLang: false,
      dictionary: this.$t('header.countrySelector')
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
    isNewBranding: {
      type: Boolean,
      default: false
    },
    page: {
      type: String,
      default: 'importers'
    },
    lightHeader: {
      type: Boolean
    }
  },
  components: {
    FontAwesomeIcon,
    NavItemText
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';
.footer-dropdown.btn-group {
  .btn {
    text-transform: capitalize;
    font-size: 0.8rem;
    margin-left: 0.4rem;
    color: white;
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
        margin-top: -0.5rem;
        width: 1.2rem;
      }
    }
  }
}
.link {
  color: white;
  font-size: 0.875rem;
  text-transform: capitalize;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
}
</style>
