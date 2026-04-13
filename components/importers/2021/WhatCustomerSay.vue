<template>
  <div class="buyer-customer-say-container">
    <div class="buyer-customer-say-inner-container">
      <section-heading text="What Our Customers Say" />
      <div class="comment-container">
        <div id="comment-list" class="comment-list">
          <b-img-lazy
            :src="
              require(`~/assets/images/importers/whatcustomersay/${customerComment.icon}`)
            "
            :alt="customerComment.icon"
            width="24"
            height="24"
          />
          <div class="drip-label font-weight-700">
            {{ customerComment.owner }}
          </div>
          <div class="drip-body-small">{{ customerComment.role }}</div>
          <div class="divider"></div>
          <div class="d-flex">
            <img
              :src="
                require(`~/assets/images/importers/whatcustomersay/location.svg`)
              "
              alt=""
              width="16"
              class="mr-2"
            />
            <div class="drip-label font-weight-700">
              {{ customerComment.location }}
            </div>
          </div>
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            :hide-goto-end-buttons="true"
            size="sm"
            align="left"
            class="mt-3 bg-white d-none d-md-flex"
            aria-controls="comment-list"
          >
            <template>
              <!-- <template #prev-text="{ disabled }"> -->
              <!-- <img
                v-if="disabled"
                :src="require(`~/assets/images/paginations/prev-page-disabled.svg`)"
                alt="prev-page"
              /> -->
              <!-- v-else -->
              <img
                src="~/assets/images/paginations/prev-page.svg"
                alt="prev-page"
              />
            </template>
            <template>
              <!-- <template #next-text="{ disabled }"> -->
              <!-- <img
                v-if="disabled"
                src="@/assets/images/paginations/next-page-disabled.svg"
                alt="next-page"
              /> -->
              <!-- v-else -->
              <img
                src="@/assets/images/paginations/next-page.svg"
                alt="next-page"
              />
            </template>
          </b-pagination>
        </div>
        <div class="comment-card">
          <div class="top-comma">
            <img
              :src="
                require(`~/assets/images/importers/whatcustomersay/prepend-quotes.svg`)
              "
              alt=""
              width="24"
            />
          </div>
          <div class="drip-h4 font-italic">{{ customerComment.desc }}</div>
          <div class="bottom-comma">
            <img
              :src="
                require(`~/assets/images/importers/whatcustomersay/append-quotes.svg`)
              "
              alt=""
              width="24"
            />
          </div>
        </div>
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          :hide-goto-end-buttons="true"
          size="sm"
          align="left"
          class="mt-3 bg-white d-flex d-md-none"
          aria-controls="comment-list"
        >
          <template>
            <!-- <template #prev-text="{ disabled }"> -->
            <!-- <img
                v-if="disabled"
                :src="require(`~/assets/images/paginations/prev-page-disabled.svg`)"
                alt="prev-page"
              /> -->
            <!-- v-else -->
            <img
              src="~/assets/images/paginations/prev-page.svg"
              alt="prev-page"
            />
          </template>
          <template>
            <!-- <template #next-text="{ disabled }"> -->
            <!-- <img
                v-if="disabled"
                src="@/assets/images/paginations/next-page-disabled.svg"
                alt="next-page"
              /> -->
            <!-- v-else -->
            <img
              src="@/assets/images/paginations/next-page.svg"
              alt="next-page"
            />
          </template>
        </b-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeading from '../../common/ImpoExpo/SectionHeading.vue'

export default {
  components: { SectionHeading },
  props: ['testimonials'],
  data() {
    return {
      currentPage: 1,
      rows: this.testimonials && this.testimonials.length,
      perPage: 1
    }
  },
  computed: {
    customerComment() {
      return this.currentPage && this.testimonials[this.currentPage - 1]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables';
@import '~bootstrap/scss/mixins';

.buyer-customer-say-container {
  width: 100%;
  background: white;
  .buyer-customer-say-inner-container {
    margin: auto;
    max-width: 1440px;
    background: white;

    @media screen and (min-width: $xl-laptop) {
      padding: 80px 108px;
    }

    @media screen and (max-width: $xl-laptop) {
      padding: 80px 108px;
      padding-bottom: 0px;
    }

    @media screen and (max-width: $large-laptop) {
      padding: 80px 28px;
      padding-bottom: 0px;
    }

    @media screen and (max-width: $laptop) {
      padding: 80px 24px;
      padding-bottom: 0px;
    }

    @media screen and (max-width: $tablet) {
      padding: 64px 24px;
      padding-bottom: 0px;
    }

    @media screen and (max-width: $mobile) {
      padding: 64px 20px;
      padding-bottom: 0px;
    }
    .comment-container {
      display: flex;
      width: 100%;
      @media screen and (max-width: $tablet) {
        flex-direction: column;
      }
      .comment-list {
        width: 32%;
        min-width: 32%;
        margin-right: 32px;
        @media screen and (max-width: $tablet) {
          width: 100%;
        }
        img {
          margin-bottom: 8px;
        }
        .divider {
          width: 100%;
          height: 1px;
          background: $wealthy-green-500;
          margin: 12px 0;
        }
        .drip-label {
          margin-bottom: 2px;
        }
      }
      .comment-card {
        border-left-width: 2px;
        border-left-style: solid;
        border-left-color: $wealthy-green-500;
        padding: 24px;
        box-shadow: 0px 3px 6px 0px #0a2e571a;
        @media screen and (max-width: $tablet) {
          width: 100%;
        }
        .top-comma {
          margin-bottom: 4px;
        }
        .bottom-comma {
          width: min-content;
          margin-left: auto;
          margin-top: 4px;
        }
      }
    }
  }
}
</style>
<style lang="scss">
.page-item.active .page-link {
  border-radius: 8px;
}
.page-link {
  height: 32px;
  border-color: white !important;
  &:hover {
    border-radius: 8px;
  }
}
.page-item.disabled .page-link {
  border-color: white !important;
  color: grey;
  height: 32px;
  .prev-page-svg {
    color: red;
  }
}
</style>
