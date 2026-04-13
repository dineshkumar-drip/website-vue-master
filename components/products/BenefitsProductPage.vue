<template>
  <b-container class="product-page-benefits">
    <b-row>
      <b-col :cols="12" :lg="8">
        <b-row>
          <b-col class="text-center text-lg-left">
            <h3 class="product-pages-title">{{ productBenefits.title }}</h3>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="d-none d-lg-block">
            <div class="benefits-subtitle">
              {{ subtitle }}
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            :cols="12"
            :lg="6"
            v-for="(item, index) in content"
            :key="index"
          >
            <div class="d-flex align-items-center content-container">
              <div class="section-image-container">
                <b-img-lazy
                  class="section-image"
                  :src="getImage(item.icon)"
                  :alt="item.title"
                />
              </div>
              <div class="section-content">
                <div class="section-benefits-title">
                  {{ item.title }}
                </div>
                <div class="section-benefits-desc">
                  {{ item.desc }}
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-col>
      <b-col :cols="4" class="d-none d-lg-block benefits-image text-center">
        <div>
          <b-img
            class="benefits-background"
            :src="imageSrc"
            alt="Supplying goods to buyers across US"
          />
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: ['isMxDomestic', 'product'],
  data() {
    return {
      productBenefits: this.isMxDomestic
        ? this.$t('pages.products.domesticMxProductBenefits')
        : this.$t('pages.products.productBenefits')
    }
  },
  computed: {
    subtitle() {
      return this.benefits
        ? this.product.productBenefits.subtitle
        : this.productBenefits.subtitle
    },
    content() {
      return this.benefits
        ? this.product.productBenefits.content
        : this.$t('pages.products.productBenefits.content')
    },
    benefits() {
      return this.product && this.product.productBenefits
    },
    imageSrc() {
      return (
        (this.product && this.product.imageUrl) ||
        require(`@/assets/images/product/benefits-background.png`)
      )
    }
  },
  methods: {
    getImage(icon) {
      return this.benefits
        ? icon
        : require(`~/assets/images/product/benefits-${icon}.png`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';
@import '~bootstrap/scss/mixins';

.product-page-benefits {
  margin-bottom: 2.125rem;

  .benefits-subtitle {
    color: $product-light-grey;
    margin-bottom: 2rem;
  }

  .content-container {
    border-radius: 5px;
    box-shadow: 0 5px 10px 0 rgba(223, 223, 223, 0.5);
    border: solid 1px $product-shadow;
    padding: 1rem;
    margin-bottom: 1.875rem;
    min-height: 8.5rem;

    .section-image-container {
      flex: 1;

      .section-image {
        width: 100%;
      }
    }

    .section-content {
      margin-left: 1rem;
      flex: 4;

      .section-benefits-title {
        font-size: 14px;
        font-weight: bold;
        color: $secondary;
        letter-spacing: 1px;
      }

      .section-benefits-desc {
        font-size: 12px;
        color: $secondary;
        letter-spacing: 1px;
      }
    }
  }

  .benefits-image {
    margin-top: 4rem;

    .benefits-background {
      width: 70%;
    }
  }
}

@include media-breakpoint-down(sm) {
  .product-page-benefits {
    .content-container {
      margin-bottom: 15px;
    }
  }
}
</style>
