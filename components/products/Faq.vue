<template>
  <b-row class="faq-container">
    <b-col class="faq-question-container pr-lg-0" :cols="12" :lg="6">
      <div
        class="d-flex align-items-center faq-question-card flex-lg-row flex-column"
        v-for="(faq, i) in faqs"
        :key="i"
        :class="i === active ? 'active' : ''"
        @click="displayAnswer(i)"
      >
        <no-ssr>
          <div class="question d-flex align-items-center w-100 px-lg-3 py-3">
            <div class="question-card-question">
              {{ faq.question }}
            </div>
            <!-- <font-awesome-icon
              class="icon d-none d-lg-block"
              icon="angle-right"
              size="3x"
            /> -->
            <img
              class="icon d-none d-lg-block"
              :src="
                require(`~/assets/images/product/faq/angle-right-icon${
                  active === i ? '-active' : ''
                }.svg`)
              "
            />
            <font-awesome-icon
              class="icon d-block d-lg-none"
              :icon="active === i ? 'angle-up' : 'angle-down'"
            />
          </div>
          <!-- TODO: Find a solution for no-ssr -->
        </no-ssr>
        <div
          class="faq-answer-card px-5 py-5 d-block d-lg-none"
          v-if="active === i"
        >
          <div class="answer-card-answer">
            {{ faqs[active].answer }}
          </div>
        </div>
      </div>
    </b-col>
    <b-col
      class="d-none ans-card p-0 text-white bg-dark-blue d-lg-flex flex-column justify-content-center align-items-center"
    >
      <!-- <div class="text-white"> -->
      <div
        class="answer-card-question h3 font-weight-light position-relative pl-3"
      >
        {{ faqs[active].question }}
      </div>
      <div class="answer-card-answer text-center">
        {{ faqs[active].answer }}
      </div>
      <!-- </div> -->
    </b-col>
  </b-row>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
export default {
  data() {
    return {
      active: 0
    }
  },
  methods: {
    displayAnswer(i) {
      this.active = i
    }
  },
  props: {
    faqs: {
      type: Array,
      default: () => []
    }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';
@import '~bootstrap/scss/mixins';

.faq-container {
  .faq-question-container {
    z-index: 1;
    .faq-question-card {
      position: relative;
      color: $secondary;
      cursor: pointer;
      background: #fff;
      min-height: 6.25rem;
      z-index: 0;
      width: 100%;

      .question {
        &:before {
          content: '';
          background-color: #a7a7a7;
          position: absolute;
          height: 60%;
          width: 4px;
          left: 0;
        }
      }

      .icon {
        margin-left: auto;
      }

      .question-card-question {
        max-width: calc(100% - 4rem);
        color: $noble-blue-500;
        font-size: 28px;
        font-weight: 400;
      }

      &.active {
        z-index: 2;
        .icon {
          color: #1eb476;
        }
        .question {
          &:before {
            background-color: #1eb476;
          }
        }
        .question-card-question {
          color: $noble-blue-500;
          font-weight: 700;
        }
      }
    }
  }
  .faq-answer-card {
    position: relative;
    color: white;
    background-color: $dark-blue;
    height: 100%;
    width: 101%;
    transform: translate(0%, 0%);

    .answer-card-question {
      font-weight: 600;
    }

    .answer-card-answer {
      color: white;
      line-height: 1.44;
    }
  }
  .bg-dark-blue {
    background-color: $dark-blue;
  }
  .ans-card {
    padding: 0 5rem !important;
    gap: 3rem;
    .answer-card-question::before {
      content: '';
      position: absolute;
      background-color: #1eb476;
      height: 100%;
      width: 0.25rem;
      left: 0rem;
    }
  }
}

@include media-breakpoint-down(md) {
  .faq-container {
    .faq-question-container {
      .faq-question-card {
        .question-card-question {
          font-size: 1.25rem;
        }
        .question {
          &:before {
            display: none;
          }
        }

        &.active,
        &:hover {
          width: 100%;
        }
      }
    }
  }
}
</style>
