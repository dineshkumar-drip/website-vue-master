<template>
  <section class="section-blog blog related-posts">
    <b-container fluid>
      <b-row class="justify-content-center">
        <b-col :sm="10">
          <h2
            class="thank-section-title related-posts-title text-purple section-title"
          >
            {{ $t('pages.thankYou.articles.title') }}
          </h2>
          <b-row>
            <b-col
              sm="4"
              class="blog-article-holder related-post"
              v-for="(article, index) in $t('pages.thankYou.articles.articles')"
              :key="index"
            >
              <div class="card">
                <b-img-lazy
                  :src="article.image"
                  alt="Invoice Factoring 101"
                  class="card-img-top"
                />
                <div class="card-body">
                  <h4 class="card-title text-purple">
                    <a :href="article.url" class>{{ article.title }}</a>
                  </h4>
                </div>
                <div class="card-footer">
                  <div class="footer-content">
                    <div class="post-top-meta">
                      <div class="u-flex0">
                        <b-img-lazy
                          :src="article.author.image"
                          alt="Raghav Khajuria"
                          class="author-thumb"
                        />
                      </div>
                      <div class="u-flex1">
                        <span class="link-dark">{{ article.author.name }}</span>
                        <div class="author-meta">
                          <span class="post-date">{{
                            article.author.meta
                          }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
