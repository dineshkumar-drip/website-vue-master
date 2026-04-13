<template>
  <page-section section-class="section-privacy">
    <b-container>
      <b-row>
        <b-col>
          <h1 class="display-3">{{ $t('pages.privacy.heading') }}</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <p v-html="$t('pages.privacy.subtext')"></p>
        </b-col>
      </b-row>
      <b-row class="mb-4">
        <b-col>
          <ul style="list-style-type: decimal">
            <!-- Parent points start -->
            <li
              v-for="(items, i) in $t('pages.privacy.list')"
              :key="i"
              class="drip-h4 font-weight-700 color-noble-blue-500"
            >
              <div>
                {{ items.title }}
              </div>
              <div class="mb-2"></div>

              <div
                class="drip-body font-weight-400 color-noble-blue-500"
                v-html="items.body"
              ></div>

              <template v-if="items.hasList">
                <ul style="list-style: lower-alpha; padding-left: 20px">
                  <!-- Child points -->
                  <li
                    v-for="(mainPoints, x) in items.innerList"
                    :id="`pointer${i}${x}`"
                    :key="`pointer${i}${x}`"
                    class="drip-body font-weight-400 color-noble-blue-500 mb-1"
                  >
                    <div
                      v-html="mainPoints.content"
                      class="drip-body font-weight-400 color-noble-blue-500"
                    ></div>

                    <ul
                      v-if="mainPoints && mainPoints.hasList"
                      style="list-style: lower-roman"
                    >
                      <!-- Grand-child points -->
                      <li
                        v-for="(innerPoints, y) in mainPoints.deepList"
                        :id="`pointer${i}${x}${y}`"
                        :key="`pointer${i}${x}${y}`"
                        class="drip-label font-weight-400 color-noble-blue-500"
                      >
                        <div
                          v-html="innerPoints.content"
                          class="drip-label font-weight-400 color-noble-blue-500"
                        ></div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </template>
              <div v-if="items.appendText" class="mb-1"></div>
              <div
                v-if="items.appendText"
                class="drip-body font-weight-400 color-noble-blue-500"
                v-html="items.appendText"
              ></div>
              <div class="mb-3"></div>
            </li>
            <!-- Parent points end -->
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </page-section>
</template>

<script>
import PageSection from '~/components/PageSection'

export default {
  components: {
    PageSection
  }
}
</script>
<style lang="scss">
.section-privacy {
  a {
    text-decoration: underline;
    color: #0a2e57 !important;
  }
}
</style>
