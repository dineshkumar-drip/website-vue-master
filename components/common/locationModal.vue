<template>
  <div v-if="dictionary && dictionary.locales && dictionary.locales.length">
    <Script
      src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
    ></Script>
    <b-modal
      v-if="showModalVar"
      modal-class="locale-modal"
      ref="my-modal"
      hide-footer
      hide-header
    >
      <div class="d-flex w-full justify-content-end p-2">
        <b-button class="p-0" @click="hideModal" variant="outline-light">
          <b-img :src="require(`~/assets/images/modal/Close.png`)" />
        </b-button>
      </div>
      <b-row class="py-md-4">
        <b-col :md="4">
          <div class="d-flex justify-content-center align-items-center">
            <b-img
              class="img-fluid world"
              :src="require(`~/assets/images/modal/location.png`)"
            />
          </div>
        </b-col>
        <b-col :md="8" class="d-flex align-items-center justify-content-center">
          <div class="body">
            <p class="text-center location-title">{{ dictionary.title }}</p>
            <div>
              <div
                class="aselect"
                :data-value="actualLocale"
                :data-list="dictionary.locales"
              >
                <div class="selector" @click="toggle()">
                  <div class="label text-left">
                    <span>{{
                      dictionary.locales.find((l) => l.value === actualLocale)
                        .text
                    }}</span>
                    <b-img
                      :class="visible ? 'down up' : 'down'"
                      :src="require('~/assets/images/common/down.svg')"
                    />
                  </div>
                  <div :class="{ hidden: !visible, visible }">
                    <ul>
                      <li
                        :key="i"
                        class="text-left"
                        v-for="(item, i) in dictionary.locales"
                        @click="select(item)"
                      >
                        {{ item.text }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-center">
              <b-button
                class="mt-2 px-5 mb-4 mb-md-0"
                variant="primary"
                @click.prevent="switchCountry"
              >
                {{ dictionary.go }}
              </b-button>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-modal>
    <alert-modal ref="alertModalComp" />
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import NavItemText from '~/components/common/ImpoExpo/NavItemText'
import AlertModal from '@/components/common/alertModal'

export default {
  props: {
    actualLocale: {
      type: String,
      default: 'en'
    },
    showModalVar: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dictionary: this.$t('localeModal'),
      visible: false
    }
  },
  methods: {
    showModal() {
      this.$refs['my-modal'].show()
    },
    hideModal(setIgnoreCookie = true) {
      if (setIgnoreCookie) {
        this.$cookies.set('ignoreLocaleModal', true, {
          path: '/',
          maxAge: 60 * 60 * 24 * 1
        })
      }
      this.$refs['my-modal'].hide()
    },
    toggle() {
      this.visible = !this.visible
    },
    select(option) {
      this.actualLocale = option.value
    },
    switchCountry() {
      this.hideModal(false)
      if (process.browser) {
        this.$cookies.set('i18n_locale', this.actualLocale, {
          path: '/',
          maxAge: 60 * 60 * 24 * 7
        })
        this.$router.replace(this.switchLocalePath(this.actualLocale))
        if (
          this.actualLocale === 'en-in' &&
          !this.$cookies.get('ignoreAlertModal')
        ) {
          this.$refs['alertModalComp'].showAlert()
        }
      }
    }
  },
  mounted() {
    if (this.showModalVar) {
      this.$refs['my-modal'].show()
    }
  },
  watch: {
    showModalVar: async function (newVal) {
      if (newVal) {
        setTimeout(() => {
          this.$refs['my-modal'].show()
        }, 2000)
      }
    }
  },
  components: {
    FontAwesomeIcon,
    NavItemText,
    AlertModal
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';
@import '~bootstrap/scss/mixins';

.locale-modal {
  // position: relative;
  .modal {
    top: 20%;
    &-dialog {
      max-width: 700px;
    }
    &-content {
      border-radius: 1rem;
    }
  }
  .location-title {
    font-size: 1.75rem;
    font-weight: 700;
  }
}

@include media-breakpoint-down(md) {
  .locale-modal {
    .modal {
      top: 0;
    }
    .world {
      width: 10em;
      margin-bottom: 1em;
    }
    .location-title {
      font-size: 1.25rem;
    }
  }
}

.aselect {
  width: 100%;
  margin: 20px auto;
  .selector {
    background: #efefef;
    position: relative;
    z-index: 1;
    .expanded {
      transform: rotateZ(180deg) translateY(2px);
    }
    .label {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px;
      font-size: 16px;
      color: #525252;
      .down {
        width: 13px;
        max-height: 25px;
        margin-left: 5px;
      }
      .up {
        transform: rotate(180deg);
      }
    }
  }
  ul {
    width: 100%;
    list-style-type: none;
    padding: 0;
    margin: 0;
    font-size: 16px;
    border: 1px solid gainsboro;
    position: absolute;
    z-index: 1;
    background: #fff;
  }
  li {
    padding: 12px;
    color: #666;
    &:hover {
      color: white;
      background: $primary;
    }
  }
  .hidden {
    visibility: hidden;
  }
  .visible {
    visibility: visible;
  }
}
</style>
