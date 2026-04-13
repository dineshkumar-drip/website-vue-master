<template>
  <section class="section-our-offices">
    <b-container>
      <b-row>
        <b-col>
          <h3 class="about-section-title text-center text-lg-left">
            {{ $t('pages.about.ourOffices.title') }}
          </h3>
          <div class="our-offices-subtitle d-none d-lg-block">
            {{ $t('pages.about.ourOffices.subtitle') }}
          </div>
        </b-col>
      </b-row>
      <b-row class="map-section">
        <b-col :cols="12" :lg="2">
          <div
            v-for="(item, index) in $t('pages.about.ourOffices.globalOffices')"
            :key="index"
          >
            <div
              :class="currentActive === index ? 'active' : ''"
              class="map-section-title text-center text-lg-left mt-5 mt-lg-0"
              @click="changeActive(index)"
            >
              {{ item.title }}
            </div>
            <div
              class="d-block d-lg-none"
              v-for="(addr, index) in item.cities"
              :key="index"
            >
              <div class="address-wrapper mt-4">
                <div class="city-name text-center">{{ addr.cityName }}:</div>
                <div
                  class="address-line text-center"
                  v-for="(line, i) in addr.address"
                  :key="i"
                >
                  {{ line }}
                </div>
              </div>
            </div>
          </div>
        </b-col>
        <b-col class="d-none d-lg-block" :cols="10">
          <div class="map-section-image-wrapper">
            <b-img
              :src="
                require(`~/assets/images/about/${
                  $t(`pages.about.ourOffices.globalOffices[${currentActive}]`)
                    .image
                }.png`)
              "
              class="map-section-image"
            />
          </div>
        </b-col>
      </b-row>
      <b-row class="d-none d-lg-flex">
        <b-col
          :cols="4"
          v-for="(item, index) in $t(
            `pages.about.ourOffices.globalOffices[${currentActive}].cities`
          )"
          :key="index"
        >
          <div class="address-wrapper">
            <div class="city-name">{{ item.cityName }}:</div>
            <div
              class="address-line"
              v-for="(line, i) in item.address"
              :key="i"
            >
              {{ line }}
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentActive: 0
    }
  },
  methods: {
    changeActive(index) {
      this.currentActive = index
    }
  }
}
</script>
