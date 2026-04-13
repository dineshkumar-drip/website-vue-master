<template>
  <div class="glossary d-flex flex-column">
    <div>
      <main-header :defaultLightHeader="true" class="bg-grey" />
      <div
        class="search-container"
        style="margin-top: 4rem; padding-top: 8px; padding-bottom: 8px"
      >
        <b-row
          class="align-items-center py-3 m-0 mx-auto"
          :class="isLargeDevice ? 'container p-0' : 'container-fluid'"
        >
          <b-col
            :cols="12"
            :md="7"
            :order="2"
            :order-md="1"
            class="search-bar p-0"
          >
            <template v-if="!isSticky">
              <h1 class="text-white heading">{{ glossary.heading }}</h1>
              <div class="text-white text-uppercase sub-heading">
                {{ glossary.subHeading }}
              </div>
            </template>
            <form
              class="position-relative search-wrapper"
              @submit.prevent="doSearch"
            >
              <input
                id="search-input"
                class="search-input"
                type="text"
                :placeholder="glossary.search.placeholder"
                v-model="searchTerm"
                autocomplete="off"
              />
              <b-btn class="px-3 search-btn" variant="primary" type="submit">
                <span class="text-capitalize">{{
                  glossary.search.btnText
                }}</span>
                <b-img
                  class="ml-2 search-icon"
                  :src="require(`~/assets/images/glossary/search-icon.svg`)"
                  :alt="glossary.search.btnText"
                />
              </b-btn>
            </form>
          </b-col>
          <b-col
            :cols="12"
            :md="5"
            :order="1"
            :order-md="2"
            class="px-4 text-center"
          >
            <b-img
              class="img-fluid py-5 header-img d-none d-md-block"
              :src="require(`~/assets/images/glossary/laptop.svg`)"
              :alt="glossary.title"
            />
          </b-col>
        </b-row>
        <div v-if="!searchActive">
          <!-- Desktop version of alphabets list -->
          <div class="bg-white py-2" v-if="!isMobile">
            <div
              class="d-flex flex-wrap justify-content-between"
              :class="isLargeDevice ? 'container p-0' : 'container-fluid'"
            >
              <div
                class="alphabet cursor-pointer"
                :class="selectedAlphabet === a ? 'alphabet-selected' : ''"
                v-for="(a, index) in alphabets"
                :key="index"
              >
                <a class="alphabet-text" @click="scrollToElement($event, a)">{{
                  a
                }}</a>
              </div>
            </div>
          </div>
          <!-- Mobile version of alphabets list -->
          <div
            class="alphabets-chooser"
            v-if="isMobile && isSticky"
            @click="toggleModal"
          >
            <button class="alphabets-chooser-btn">A - Z</button>
          </div>
        </div>
        <div class="bg-white" v-else>
          <div :class="isLargeDevice ? 'container p-0' : 'container-fluid'">
            <div class="d-flex align-items-center flex-wrap py-3">
              <p class="m-0 mr-5 py-2">
                <template v-if="Object.keys(this.glossaryItems).length > 0">
                  {{ Object.keys(this.glossaryItems).length }}
                  {{ glossary.search.resultsFound }}
                </template>
                <template v-else>
                  {{ glossary.search.noResultsFound }}
                </template>
                <strong class="bold">&nbsp;"{{ searchTerm }}"</strong>
              </p>
              <button
                class="clear-search px-0 py-2"
                @click="clearSearchResults"
              >
                {{ glossary.search.clear }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div :class="isLargeDevice ? 'container p-0' : 'container-fluid'">
        <div class="alphabet-items px-1 py-4">
          <div
            :id="key"
            class="alphabet-item mb-5"
            v-for="(key, index) in Object.keys(glossaryItems)"
            :key="`alpha-${index}`"
          >
            <h2 class="text-secondary">{{ key }}</h2>
            <div class="items-container d-flex flex-wrap">
              <h3
                class="item-heading"
                v-for="(item, innerIndex) in glossaryItems[key]"
                :key="`item-${innerIndex}`"
              >
                <a class="item" :href="item.url">
                  {{ item.name }}
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <main-footer :isNewBranding="true" />
    </div>
    <div v-if="showAlphabetsModal">
      <div class="backdrop"></div>
      <div class="alphabets-modal">
        <div class="modal-header">
          <h3 class="modal-header_title">Select</h3>
          <button class="modal-header_btn" @click="toggleModal">&times;</button>
        </div>
        <div class="modal-body">
          <div class="d-flex flex-wrap justify-content-between">
            <div
              class="alphabet cursor-pointer"
              :class="selectedAlphabet === a ? 'alphabet-selected' : ''"
              v-for="(a, index) in alphabets"
              :key="index"
            >
              <a
                class="alphabet-text"
                @click="scrollToElement($event, a, true)"
                >{{ a }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainHeader from '~/components/common/ImpoExpo/MainHeader'
import MainFooter from '~/components/footer/MainFooter.vue'
import { groupBy } from 'lodash'

export default {
  nuxtI18n: {
    locales: ['en', 'en-us', 'en-in']
  },
  data() {
    return {
      title: this.$t('pages.glossary.title'),
      description: this.$t('pages.glossary.description'),
      glossary: this.$t('pages.glossary'),
      alphabets: [],
      scrollPosition: 0,
      windowWidth: 0,
      showAlphabetsModal: false,
      glossaryItems: groupBy(this.$t('pages.glossary.items'), 'alphabet'),
      selectedAlphabet: 'A',
      allGlossaryItems: this.$t('pages.glossary.items'),
      searchTerm: '',
      searchActive: false,
      alphaSections: [],
      alphaNav: []
    }
  },
  computed: {
    isSticky() {
      return this.scrollPosition > 400
    },
    isLargeDevice() {
      return this.windowWidth >= 992
    },
    isMobile() {
      return this.windowWidth < 768
    },
    getOffset() {
      let offset = this.isSticky ? 250 : 180
      if (this.isMobile) {
        offset -= 60
      } else if (this.windowWidth >= 992 && this.windowWidth < 1199) {
        offset -= this.isSticky ? 0 : 50
      } else if (!this.isLargeDevice) {
        offset -= this.isSticky ? 0 : 190
      }
      return offset
    },
    canonicalTag() {
      return process.env.DRIP_WEB_HOST + this.$route.path
    }
  },
  head() {
    return {
      needLineBreak: true,
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.description }
      ],
      link: [{ rel: 'canonical', href: this.canonicalTag }]
    }
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
      let current = ''
      this.alphaSections.forEach((section) => {
        const sectionTop = section.offsetTop
        if (window.pageYOffset >= sectionTop - this.getOffset - 50) {
          current = section.getAttribute('id')
        }
      })
      this.selectedAlphabet = current || 'A'
    },
    updateWidth() {
      this.windowWidth = window.innerWidth
    },
    toggleModal() {
      this.showAlphabetsModal = !this.showAlphabetsModal
    },
    scrollToElement(event, alphabet, isMobile = false) {
      if (event) {
        event.preventDefault()
      }
      this.selectedAlphabet = alphabet
      const element = document.getElementById(alphabet)
      if (element) {
        const offsetTop = element.offsetTop
        const scrollPos = offsetTop - this.getOffset
        this.showAlphabetsModal = false
        window.scrollTo({ top: scrollPos, behavior: 'smooth' })
      }
    },
    doSearch() {
      let filtered = []
      if (this.searchTerm) {
        filtered = this.allGlossaryItems.filter(
          (g) =>
            g.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1
        )
        this.searchActive = true
      } else {
        filtered = this.allGlossaryItems
        this.searchActive = false
      }
      document.activeElement.blur()
      this.glossaryItems = groupBy(filtered, 'alphabet')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    clearSearchResults() {
      this.searchTerm = ''
      this.doSearch()
    }
  },
  mounted() {
    this.windowWidth = window.innerWidth
    window.addEventListener('scroll', this.updateScroll)
    window.addEventListener('resize', this.updateWidth)
    this.alphaSections = document.querySelectorAll('.alphabet-item')
    this.alphaNav = document.querySelectorAll('.alphabet-text')
    this.alphabets = Object.keys(this.glossaryItems)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.updateScroll)
    window.removeEventListener('resize', this.updateWidth)
  },
  components: {
    MainHeader,
    MainFooter
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';

.glossary * {
  font-family: $global-font;
}
.search-bar {
  .heading {
    font-size: 3rem;
  }
  .sub-heading {
    font-size: 1.125rem;
  }
  .search-input {
    width: 100%;
    padding: 1rem;
    margin-top: 1rem;
    border: none;
    border-radius: 4px;
    &:focus-within {
      outline: none;
      border: none;
    }
  }
  .search-icon {
    width: 1rem;
  }
  .search-btn {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 23px;
    right: 6px;
  }
}
.clear-search {
  margin: 0;
  color: $primary;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: underline;
  background-color: transparent;
  border: none;
}
.main {
  &-content {
    padding-top: 31rem;
  }
}
.pt-big {
  padding-top: 36rem;
}
.search-container {
  background: $dark-blue;
  width: 100%;
}
.alphabet {
  &-text {
    font-size: 1.313rem;
    font-weight: 700;
    text-align: center;
    color: $secondary;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.5rem;
    height: 2.5rem;
    &:hover {
      background-color: $primary;
      color: $white !important;
    }
  }
  &-selected {
    .alphabet-text {
      background-color: $primary;
      color: $white;
    }
  }
}
.alphabet-items {
  h2 {
    font-size: 2.25rem;
    font-weight: 700;
  }
  .items-container {
    gap: 1rem;
  }
  .item-heading {
    flex-basis: calc(33.33% - 1rem);
    margin: 0;
    border: 1px solid $primary;
    border-radius: 4px;
    display: flex;
    align-items: center;
  }
  .item {
    padding: 1.75rem 1rem 1.5rem 1rem;
    color: $secondary;
    font-size: 1.125rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    &:hover {
      background-color: $primary;
      color: $white;
    }
    a {
      text-decoration: none;
      color: inherit;
    }
  }
}
.sticky {
  position: fixed;
  width: 100%;
  top: 4rem;
  .img-fluid {
    display: none;
  }
}
.backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 22;
}
.alphabets-modal {
  position: fixed;
  bottom: 0;
  background-color: $white;
  width: 100%;
  z-index: 101;
  border-radius: 20px 20px 0 0;
  .modal {
    &-header {
      border: none;
      align-items: center;
      padding-bottom: 0.5rem;
      &_title {
        font-size: 21px;
        color: $secondary;
        margin: 0;
      }
      &_btn {
        background-color: transparent;
        border: none;
        padding: 0;
        margin: 0;
        font-size: 30px;
        &:hover,
        &:active,
        :focus {
          outline: none;
          border: none;
        }
      }
    }
    &-body {
      .d-flex {
        margin: 0 -10px;
      }
      padding-top: 0;
      .alphabet {
        padding: 10px;
        &-text {
          border: 1px solid $primary;
          border-radius: 5px;
          font-weight: 100;
          font-size: 1rem;
        }
      }
    }
  }
}

a {
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .main-body {
    margin-top: 0 !important;
    padding-top: 2rem !important;
  }
  .pt-big {
    padding-top: 39rem;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .main-content {
    padding-top: 27rem;
  }
  .header-img {
    width: 255px;
  }
  .pt-big {
    padding-top: 40rem;
  }
  .alphabet-items {
    padding-top: 0 !important;
  }
}

@media (max-width: 767px) {
  .alphabet:last-child {
    margin-right: auto;
  }
  .pt-big {
    padding-top: 37rem !important;
    .alphabets-chooser {
      display: flex;
      align-content: center;
      justify-content: flex-end;
      position: relative;
      &-btn {
        padding: 0.5rem 1rem;
        margin-top: 0.5rem;
        background-color: $white;
        border: 1px solid $light-gray;
        border-right: 0;
        border-radius: 5px 0 0 5px;
        color: $light-gray;
        position: absolute;
        top: 100%;
      }
    }
  }
  .main {
    &-content {
      padding-top: 33rem;
      .heading {
        font-size: 2.25rem;
      }
      .sub-heading {
        font-size: 0.75rem;
      }
      .header-img {
        padding: 1rem 0 !important;
        width: 300px;
      }
    }
    &-body {
      padding-top: 0 !important;
      margin-top: 0 !important;
      .alphabet-items {
        h2 {
          font-size: 1.313rem;
          font-weight: 700;
        }
        .item-heading {
          flex-basis: 100%;
        }
        .item {
          font-size: 0.875rem;
          padding: 1.5rem 1rem;
        }
      }
    }
  }
  .pt-xl-big {
    padding-top: 39rem;
  }
  .pt-big.pt-xl-big {
    padding-top: 42rem !important;
  }
  .clear-search {
    font-size: 1rem;
  }
}
.cursor-pointer {
  cursor: pointer;
}
</style>
