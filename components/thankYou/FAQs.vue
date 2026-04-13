<template>
  <section class="section-faqs">
    <b-container fluid>
      <b-row class="justify-content-center">
        <b-col :sm="10">
          <h2 class="thank-section-title text-purple section-title">
            {{ $t('pages.thankYou.faqs.title') }}
          </h2>
          <div
            class="d-flex align-items-stretch flex-lg-row flex-column justify-content-between row"
          >
            <b-card
              class="faq-card"
              header-tag="header"
              footer-tag="footer"
              v-for="(category, index) in $t('pages.thankYou.faqs.categories')"
              :key="index"
            >
              <h6 class="faq-category-title">{{ category.title }}</h6>
              <b-card-text
                class="faq-list"
                v-for="(question, index) in category.questions"
                :key="index"
              >
                <a :href="question.url">
                  {{ question.text }}
                </a>
              </b-card-text>
              <em slot="footer"
                ><a class="faq-category-link" :href="category.moreUrl"
                  >Know more ></a
                ></em
              >
            </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
