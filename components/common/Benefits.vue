<template>
  <page-section section-class="partner-benefits-section">
    <b-container fluid>
      <b-row class="justify-content-center">
        <b-col :xl="10" :cols="12">
          <h2 class="h3 mb-5 section-title">
            {{ data.title }}
          </h2>
          <b-row v-if="data.subtitle" align-h="center">
            <b-col>
              <p>{{ data.subtitle }}</p>
            </b-col>
          </b-row>
          <b-row class="justify-content-center">
            <b-col
              md="6"
              lg="6"
              sm="12"
              v-for="(item, index) in data.content"
              :key="index"
            >
              <div class="content-section">
                <div class="d-flex">
                  <div class="section-image">
                    <b-img-lazy
                      :src="
                        require(`@/assets/images/common/benefits/${item.icon}.svg`)
                      "
                      :alt="item.title"
                      :width="75"
                    />
                  </div>
                  <div class="section-image-content">
                    <p class="benefit-title">{{ item.title }}</p>
                    <p>{{ item.desc }}</p>
                  </div>
                </div>
              </div>
            </b-col>
          </b-row>
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
  },
  props: ['data']
}
</script>
