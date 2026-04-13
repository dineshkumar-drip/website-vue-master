<template>
  <section :class="['section-press', isProductPage ? 'py-5' : '']">
    <b-container>
      <b-row>
        <b-col
          :cols="12"
          :class="isProductPage ? 'text-center text-lg-left' : ''"
        >
          <h3
            :class="[
              'section-title white-text',
              isProductPage ? '' : 'text-center display-3'
            ]"
          >
            {{ $t('pages.about.inTheNews') }}
          </h3>
        </b-col>
      </b-row>
      <b-row>
        <b-col :lg="8" :offset-lg="2" :sm="10" :offset-sm="1">
          <slick
            v-if="!isProductPage"
            id="quote-slider"
            ref="slick"
            :options="slickOptions"
            class="press-slider text-center"
          >
            <div class="press-slide" v-for="(article, i) in articles" :key="i">
              <blockquote>
                <a :href="article.link" target="_blank">
                  {{ article.title }}
                </a>
              </blockquote>
            </div>
          </slick>
          <slick
            class="press-source-slider"
            id="source-slider"
            :options="sourceSlickOptions"
          >
            <div
              class="text-center press-source-slide"
              v-for="(image, i) in articles"
              :key="i"
            >
              <a target="_blank" :href="image.link">
                <b-img-lazy
                  :src="require(`~/assets/images/about/press/${image.slug}`)"
                  :alt="image.alt"
                  :height="image.height"
                  :width="image.width || 'auto'"
                  class="logo-tc img-fluid m-auto d-inline"
                ></b-img-lazy>
              </a>
            </div>
          </slick>
        </b-col>
      </b-row>
      <b-row v-if="isProductPage && !isUs">
        <b-col class="pt-5 text-center">
          <p class="news-text">
            {{
              isMxDomestic
                ? $t('pages.about.dripExperienceMxDomestic')
                : $t('pages.about.dripExperience')
            }}
          </p>
        </b-col>
      </b-row>
      <button-arrow
        v-track-click
        v-if="isProductPage && !isUs"
        id="product-press-cta"
        variant="secondary"
        @click.native="applyNow"
        class="apply-button btn-lg"
      >
        {{ $t('pages.home.jumbotron.applyNow') }}
      </button-arrow>
    </b-container>
  </section>
</template>
<script>
import Slick from 'vue-slick'
import ButtonArrow from '../products/ButtonArrow'

export default {
  components: {
    Slick,
    ButtonArrow
  },
  props: ['isProductPage', 'isMxDomestic'],
  data() {
    return {
      slickOptions: {
        asNavFor: '#source-slider',
        dots: false,
        arrows: true,
        fade: true,
        prevArrow: '<a class="slick-prev slick-arrow"></a>',
        nextArrow: '<a class="slick-next slick-arrow"></a>',
        responsive: [
          {
            breakpoint: 992,
            settings: {
              arrows: false,
              centerPadding: 0,
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      },
      sourceSlickOptions: {
        infinite: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 300,
        centerMode: true,
        focusOnSelect: true,
        prevArrow: `<a class="slick-arrow prev-arrow-news"></a>`,
        nextArrow: `<a class="slick-arrow next-arrow-news"></a>`,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              arrows: false,
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    }
  },
  computed: {
    articles() {
      let inArticles = [
        {
          title: 'Trade finance firm Drip raises $25 million',
          link: 'https://www.thehindu.com/business/trade-finance-firm-drip-raises-25-mn/article28809218.ece',
          slug: 'hindu.png',
          height: 45,
          alt: 'Hindu'
        },
        {
          title:
            'Drip Capital raises $25M to help exporters access working capital',
          link: 'https://techcrunch.com/2019/07/24/drip-capital-seriesb/',
          slug: this.isProductPage ? 'tc.png' : 'tc.svg',
          height: 90,
          alt: 'Tech Crunch'
        },
        {
          title:
            'Accel Partners leads $25 million Series B funding round in Drip Capital',
          link: 'https://tech.economictimes.indiatimes.com/news/startups/accel-partners-leads-25-million-series-b-funding-round-in-drip-capital/70363028',
          slug: 'ettech.png',
          height: 30,
          alt: 'ET Tech'
        },
        {
          title:
            '[Funding alert] Digital financing startup Drip Capital raises $25M in Series B funding from Accel and others',
          link: 'https://yourstory.com/2019/07/funding-startup-digital-financing-drip-capital-accel',
          slug: 'ys.svg',
          height: 40,
          alt: 'YourStory'
        },
        {
          title:
            'Drip Capital raises $25 million from Accel, Sequoia India, others',
          link: 'https://www.livemint.com/companies/start-ups/drip-capital-raises-25-million-from-accel-sequoia-india-others-1563969026971.html',
          slug: this.isProductPage ? 'lm.png' : 'livemint.png',
          height: 45,
          alt: 'Live Mint'
        },
        {
          title: 'Drip Capital raises $25 million from Accel and others',
          link: 'https://www.fortuneindia.com/technology/drip-capital-raises-25-million-from-accel-and-others/103456',
          slug: 'fortune.svg',
          height: 50,
          alt: 'Fortune India'
        },
        {
          title: 'Accel invests more money in trade finance firm Drip Capital',
          link: 'https://www.vccircle.com/accel-invests-more-money-in-trade-finance-firm-drip-capital',
          slug: 'vcc.svg',
          height: 55,
          alt: 'VC Circle'
        },
        {
          title:
            'Drip Capital Raises $25 Million In Series B Funding From Accel, Sequoia, Others',
          link: 'https://www.bloombergquint.com/business/drip-capital-raises-dollar25-million-in-series-b-funding-from-accel-sequoia-others',
          slug: this.isProductPage ? 'bloom.png' : 'bq.svg',
          height: 55,
          alt: 'Bloomberg Quint'
        },
        {
          title:
            'Accel leads $25 mn Series B funding in trade finance firm Drip Capital',
          link: 'https://www.techcircle.in/2019/07/24/accel-leads-25-mn-series-b-funding-in-trade-finance-firm-drip-capital',
          slug: 'techcircle.png',
          height: 60,
          alt: 'Tech Circle'
        },
        {
          title:
            'This is how SME exporters can tide over their working capital crunch',
          link: 'https://www.financialexpress.com/industry/sme/this-is-how-sme-exporters-can-tide-over-their-working-capital-crunch/1655235/',
          slug: 'financialexpress.svg',
          height: 30,
          alt: 'Financial Express'
        }
      ]
      let mxArticles = [
        {
          title:
            'Drip Capital cierra ronda de inversión serie B y destina 20 mdd a México',
          link: 'https://elempresario.mx/nuevos-mercados/drip-capital-cierra-ronda-inversion-serie-b-destina-20-mdd-mexico',
          slug: 'ecnomiesta.png',
          height: 35,
          alt: 'ecnomiesta'
        },
        {
          title: 'Esta fintech aprovecha el vacío que dejó ProMéxico',
          link: 'https://elfinanciero.com.mx/economia/esta-fintech-aprovecha-el-vacio-que-dejo-promexico',
          slug: 'el-financiero.png',
          alt: 'el-financiero',
          height: 35,
          width: 150
        },
        {
          title:
            'La oportunidad de oro que tiene México en medio de la guerra comercial entre China y Estados Unidos',
          link: 'https://www.entrepreneur.com/article/342993',
          slug: 'entrepreneur.png',
          alt: 'entrepreneur',
          height: 35,
          width: 200
        },
        {
          title:
            '¿Exportas y tardas 180 días en cobrar tus facturas? Esta fintech lo soluciona',
          link: 'https://expansion.mx/emprendedores/2019/07/11/exportas-y-tardas-180-dias-en-cobrar-tus-facturas-esta-fintech-lo-soluciona',
          slug: 'expansion.png',
          alt: 'expansion',
          height: 35
        },
        {
          title: 'Drip Capital aprovecha el cierre de ProMéxico',
          link: 'https://www.milenio.com/negocios/drip-capital-aprovecha-el-cierre-de-promexico',
          slug: 'milenio.png',
          alt: 'milenio',
          height: 35
        }
      ]
      let usArticles = [
        {
          title: 'The Rising Tide Of Seafood: Opportunities And Prospects',
          link: 'https://www.forbes.com/advisor/in/personal-finance/in-conversation-with-pushkar-mukewar/',
          slug: 'forbes.png',
          height: 50,
          alt: 'forbes'
        },
        {
          title: 'Drip Capital raises $25 million from Accel and others',
          link: 'https://www.fortuneindia.com/technology/drip-capital-raises-25-million-from-accel-and-others/103456',
          slug: 'Fortune_logo.png',
          height: 50,
          alt: 'Fortune'
        },
        {
          title: 'CB Insights Names Drip Capital to the 2020 Fintech 250 List',
          link: 'https://markets.businessinsider.com/news/stocks/cb-insights-names-drip-capital-to-the-2020-fintech-250-list-1029582974',
          slug: 'BI.png',
          alt: 'bi',
          height: 45,
          width: 200
        },
        {
          title:
            'Drip Capital raises $25M to help exporters access working capital',
          link: 'https://techcrunch.com/2019/07/24/drip-capital-seriesb/',
          slug: 'tech-crunch.png',
          height: 100,
          alt: 'Tech Crunch'
        }
      ]
      return (
        (this.$i18n.locale.indexOf('es') > -1 ? mxArticles : inArticles) &&
        (this.$i18n.locale.indexOf('en-us') > -1 ? usArticles : inArticles)
      )
    },
    isUs() {
      return this.$i18n.locale.indexOf('us') > -1
    }
  },
  methods: {
    applyNow() {
      this.isMxDomestic
        ? (window.location.href = this.$t('urls.cuenta'))
        : this.$router.push(this.localePath('exporters-apply'))
    }
  }
}
</script>
<style lang="scss" scoped>
.news-text {
  font-size: 24px;
  font-weight: 500;
  color: #ffffff;
}
.white-text {
  color: #ffffff;
}
</style>
