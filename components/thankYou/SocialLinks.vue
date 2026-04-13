<template>
  <section class="section-blog blog social-links-section">
    <b-container fluid>
      <b-row class="justify-content-center">
        <b-col :sm="8">
          <h2
            class="thank-section-title related-posts-title text-purple section-title text-center mb-2"
          >
            {{ $t('pages.thankYou.social.title') }}
          </h2>
          <p class="lead text-center mb-5">
            {{ $t('pages.thankYou.social.desc') }}
          </p>
          <b-row>
            <b-col
              v-for="(links, i) in $t('pages.thankYou.social.links')"
              sm="3"
              :cols="6"
              class="mb-5"
              :key="i"
            >
              <a class="social-links" :href="links.link" target="_blank">
                <b-img-lazy
                  :src="require(`@/assets/images/common/${links.name}.svg`)"
                  :alt="links.name"
                  class="w-100"
                />
              </a>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/variables';
.social-links-section {
  background: $light-background;
  .social-links {
    opacity: 0.7;
    margin: 0 auto;
    display: block;
    width: 3.5rem;
    &:hover {
      opacity: 0.5;
    }
  }
}
</style>
