<template>
  <b-jumbotron>
    <b-container class="text-white" fluid>
      <b-row class="justify-content-center">
        <b-col :cols="12" :md="10">
          <div class="hero-section">
            <div class="hero-content">
              <b-row>
                <b-col :lg="6" :md="6">
                  <h1 class="display-3">
                    {{ $t('pages.newHome.jumbotron.title')
                    }}<span class="slash text-primary"></span>
                  </h1>
                  <div class="desc">
                    <p
                      v-if="keyword != 'home'"
                      class="lead text-white"
                      v-html="
                        $t(
                          `pages.newHome.jumbotron.keyDescription.${keyword
                            .replace(/ /g, '')
                            .toLowerCase()}`
                        )
                      "
                    />
                    <p
                      class="lead text-white"
                      v-html="$t('pages.newHome.jumbotron.description')"
                      v-else
                    />
                  </div>
                  <div>
                    <nuxt-link
                      :to="localePath('exporters-apply')"
                      class="btn btn-primary btn-md"
                      v-track-click
                      id="home-jumbotron-cta"
                    >
                      {{ $t('pages.newHome.jumbotron.getStarted') }}
                    </nuxt-link>
                  </div>
                </b-col>
                <b-col :lg="5" :offset-md="1" :md="5" class="d-none d-md-block">
                  <div class="jumbotron-img">
                    <b-img-lazy
                      :src="
                        require(`~/assets/images/index/screenshot-jumbotron.png`)
                      "
                      :alt="$t('pages.newHome.jumbotron.imgAlt')"
                    />
                  </div>
                </b-col>
              </b-row>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </b-jumbotron>
</template>
<script>
export default {
  props: ['keyword']
}
</script>
