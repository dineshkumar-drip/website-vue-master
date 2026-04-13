<template>
  <span>
    <b-dropdown class="footer-dropdown" dropup>
      <template #button-content>
        {{ languageName }}
      </template>
      <b-dropdown-item
        v-for="(mapping, i) in mappings"
        :key="i"
        :href="mapping.link"
      >
        {{ mapping.language }}
      </b-dropdown-item>
    </b-dropdown>
  </span>
</template>

<script>
export default {
  data() {
    return {
      mappings: [
        {
          locale: 'es-mx',
          link: '/es-mx/',
          language: this.$t('pages.languages.spanish')
        },
        {
          locale: 'en-mx',
          link: '/en-mx/',
          language: this.$t('pages.languages.english')
        }
      ]
    }
  },
  computed: {
    languageName() {
      return this.mappings.find((mapping) => {
        return mapping.locale === this.$i18n.locale
      }).language
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';
.footer-dropdown.btn-group {
  .btn {
    text-transform: capitalize;
    font-size: 0.8rem;
  }
}
.main-footer {
  .footer-dropdown {
    .dropdown-item {
      color: $secondary;
      text-align: left;
      font-size: 0.8rem;
      min-width: 7rem;
    }
  }
}
</style>
