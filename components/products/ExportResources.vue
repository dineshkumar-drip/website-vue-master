<template>
  <section class="export">
    <b-container class="export-finance-resources">
      <b-row>
        <b-col>
          <heading :text="title" classes="mt-5 mb-4" />
        </b-col>
      </b-row>
      <b-row class="pb-5">
        <b-col
          :lg="4"
          :sm="12"
          v-for="(article, i) in resources"
          :key="i"
          class="text-center"
        >
          <div class="resource-card resource-card-wrapper shadow-sm">
            <b-link :href="article.link">
              <b-card
                :sub-title="article.title"
                :img-src="article.img ? article.img : undefined"
                :img-alt="article.title"
                class="resource-card text-left border-none"
                :img-top="article.img ? true : false"
              >
                <p class="mt-2 mb-0 card-link">
                  {{ $t('pages.products.exportResources.learnMore') }}
                </p>
              </b-card>
            </b-link>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
import ButtonArrow from '~/components/products/ButtonArrow'
import Heading from '~/components/common/ImpoExpo/Heading'

export default {
  props: ['resources', 'title'],
  components: {
    ButtonArrow,
    Heading
  },
  methods: {
    redirectBlog() {
      window.location.href = this.$t('urls.links.blog')
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/scss/variables';
@import '~bootstrap/scss/mixins';

.border-none {
  border: none;
  border-radius: 0;
}
.export {
  .export-finance-resources {
    .title {
      font-size: 24px;
      color: $secondary;
    }
    .resource-card-wrapper {
      border: 1px solid $product-shadow;
      background: $white;
      border-radius: 5px;
      margin-top: 1.5rem;
      padding: 1rem;
      padding-top: 1.5rem;
    }
    .resource-card {
      color: $secondary;
      background-color: transparent;

      .card-img-top {
        border: solid 1px $product-shadow;
        margin-bottom: 16px;
      }
      .card-body {
        padding: 0rem;

        .card-subtitle {
          color: $secondary !important;
          margin-bottom: 0rem !important;
          text-decoration: none;
        }
      }

      .card-link {
        display: block;
        margin-top: 0.5rem;
        text-decoration: underline;
        color: $primary;
      }
    }

    .view-all-link {
      margin-top: 1.5rem;
      margin-bottom: 4rem;
    }
  }
  background-color: $product-light-blue-background;
}

@include media-breakpoint-down(md) {
  .export {
    .export-finance-resources {
      .resource-card {
        .card-img-top {
          display: none;
        }
      }
    }
  }
}
</style>
