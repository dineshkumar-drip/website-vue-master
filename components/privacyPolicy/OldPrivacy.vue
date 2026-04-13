<template>
  <page-section section-class="section-privacy">
    <b-container>
      <b-row>
        <b-col>
          <h1 class="display-3">{{ $t('pages.oldPrivacy.heading') }}</h1>
        </b-col>
      </b-row>
      <b-row class="mb-4">
        <b-col>
          <p
            class="lead"
            v-for="(item, i) in $t('pages.oldPrivacy.subtitle')"
            :key="i"
          >
            {{ item }}
          </p>
        </b-col>
      </b-row>
      <b-row
        v-for="(item, index) in $t('pages.oldPrivacy.content')"
        :key="index"
      >
        <b-col cols="12">
          <h5 v-if="item.title">
            <strong><p v-html="item.title"></p></strong>
          </h5>
        </b-col>

        <template v-if="!item.hasList && !item.hasSublist && !item.hasCharList">
          <b-col cols="12" v-for="(desc, i) in item.desc" :key="i" class="mb-4">
            <p class="lead" v-html="desc"></p>
          </b-col>
        </template>
        <b-col
          cols="12"
          v-if="item.hasList || item.hasCharList"
          class="has-list"
        >
          <ul v-for="(desc, i) in item.desc" :key="i">
            <p class="lead" v-if="i === 0" v-html="desc"></p>
            <li
              :style="{ 'list-style-type': item.hasList ? 'disc' : 'none' }"
              v-else
              class="lead"
              v-html="desc"
            ></li>
          </ul>
        </b-col>
        <b-col cols="12" v-if="item.hasSublist">
          <ul v-for="(desc, i) in item.desc" :key="i">
            <li
              style="list-style-type: circle; margin-left: 3rem"
              class="lead"
              v-html="desc"
            ></li>
          </ul>
        </b-col>
      </b-row>
      <b-row
        v-for="(item, index) in $t('pages.oldPrivacy.content')"
        :key="index"
      >
        <b-col cols="12">
          <h6 v-if="item.disclaimer">
            <strong>{{ item.disclaimer }}</strong>
          </h6>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" class="mb-4">
          <h5 class="conclude">{{ $t('pages.oldPrivacy.conclude') }}</h5>
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
