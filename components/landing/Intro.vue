<template>
  <section class="section-intro">
    <b-container class="divided-container" fluid>
      <b-row>
        <b-col
          :xl="4"
          :offset-xl="1"
          :lg="5"
          :md="10"
          :offset-md="1"
          class="col-lead"
          :offset-lg="0"
        >
          <h4 class="intro-title">
            {{ $t('landing.peloton.about.title') }}
          </h4>
          <div v-html="$t('landing.peloton.about.description')" />
        </b-col>
        <b-col :xl="4" :lg="5" class="divided default col-chart" :offset-lg="2">
          <b-row>
            <b-col :offset-md="1" :md="10" :lg="12" :offset-sm="0">
              <h4 class="text-secondary intro-title">
                {{ $t('landing.peloton.chart.title') }}
              </h4>

              <b-img
                src="~/assets/images/landing/peloton/chart.png"
                srcset="~/assets/images/landing/peloton/chart.png,
                  ~/assets/images/landing/peloton/chart@2x.png 2x"
                alt="2.5% returns for Drip Assets"
                class="img-fluid stat-chart"
              />
              <div>
                <b-collapse
                  id="stat-disclaimer"
                  @show="
                    disclaimerText = $t('landing.peloton.chart.disclaimerHide')
                  "
                  @hide="
                    disclaimerText = $t('landing.peloton.chart.disclaimerShow')
                  "
                >
                  <p class="small">
                    <span
                      v-html="$t('landing.peloton.chart.disclaimer')"
                    ></span>
                  </p>
                </b-collapse>
                <a
                  v-b-toggle.stat-disclaimer
                  class="text-primary small disclaimer-toggle"
                >
                  {{ disclaimerText }}
                </a>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
export default {
  data() {
    return {
      disclaimerText: this.$t('landing.peloton.chart.disclaimerShow')
    }
  }
}
</script>
