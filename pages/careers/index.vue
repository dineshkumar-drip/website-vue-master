<template>
  <div>
    <div v-if="isUsRedesign" class="dc-new">
      <RedesignAppTopBar />
      <RedesignAppNav />
      <section class="page-hero">
        <div class="dc-container">
          <span class="eyebrow">Careers</span>
          <h1>Join our team.<br><em>Build the future of trade finance.</em></h1>
          <p>We are a team of engineers, analysts, and operators solving one of the biggest problems in global trade: access to working capital for growing businesses.</p>
        </div>
      </section>

      <section class="section">
        <div class="dc-container">
          <div class="section-header" style="text-align: center; max-width: 600px; margin: 0 auto 48px;">
            <span class="eyebrow">Why Drip Capital</span>
            <h2 class="section-title">A company worth building.</h2>
          </div>
          <div class="why-grid">
            <div class="why-dc-card">
              <h3>Global Impact</h3>
              <p>We have funded over $9 billion in trade transactions, helping 11,000+ businesses across the world grow faster.</p>
            </div>
            <div class="why-dc-card">
              <h3>World-Class Team</h3>
              <p>Our team includes alumni from Goldman Sachs, Y Combinator, and top engineering programs. We value curiosity and execution.</p>
            </div>
            <div class="why-dc-card">
              <h3>Backed by Leaders</h3>
              <p>Funded by Barclays, IFC, SMBC, and top venture firms. We have the resources and partnerships to scale globally.</p>
            </div>
            <div class="why-dc-card">
              <h3>Growth Stage</h3>
              <p>We are at an inflection point, scaling our US business rapidly while building technology that will define the next era of trade finance.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section section-bg">
        <div class="dc-container" style="text-align: center; max-width: 600px;">
          <span class="eyebrow">Open Positions</span>
          <h2 class="section-title">Ready to make an impact?</h2>
          <p style="font-size: 17px; color: var(--body); line-height: 1.7; margin-bottom: 32px;">
            We are always looking for exceptional talent. If you are passionate about fintech, global trade, or building products that matter, we would love to hear from you.
          </p>
          <a href="mailto:careers@dripcapital.com" class="dc-btn dc-btn-primary dc-btn-lg">Email Us at careers@dripcapital.com</a>
        </div>
      </section>
      <RedesignAppFooter />
    </div>

    <section v-else class="index-container careers-container">
      <main-header :hide-cta="true" />
      <main-jumbotron>
        <template slot="content">
          <b-row>
            <b-col :cols="12" :xl="7" :sm="9">
              <h1 class="display-3">
                <vue-typer
                  text="Work at Drip"
                  erase-style="backspace"
                  :erase-delay="70"
                />
                <span class="slash blink text-primary"></span>
              </h1>
            </b-col>
          </b-row>
          <b-row>
            <b-col :cols="12" :xl="6" :sm="6">
              <p class="lead">
                Drip uses technology to re-engineer the core of international
                trade finance. Our mission is to enable growing companies in all
                corners of the world finance their cross-border trade at the click
                of a button.
              </p>
              <p class="lead">
                We have a team of highly skilled individuals across San Francisco
                and Mumbai, experts in the field of finance, banking, consulting
                and technology that has enabled us to march closer to our mission.
                Come join us and be part of this journey!
              </p>
              <b-btn class="px-5 py-3" variant="primary" :href="url">
                View Jobs
              </b-btn>
              <div class="mb-5"></div>
            </b-col>
          </b-row>
        </template>
      </main-jumbotron>
      <main-footer :isNewBranding="true" />
    </section>
  </div>
</template>
<script>
import MainHeader from '~/components/MainHeader'
import MainJumbotron from '~/components/MainJumbotron'
import MainFooter from '~/components/footer/MainFooter'

export default {
  data() {
    return {
      url: 'https://dripcapital.recruiterbox.com/#content'
    }
  },
  computed: {
    isUsRedesign() {
      return this.$i18n.locale === 'en-us'
    }
  },
  head() {
    return {
      title: 'Careers',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Work at Drip. Join us and be a part of our journey.'
        }
      ]
    }
  },
  components: {
    MainHeader,
    MainJumbotron,
    MainFooter
  }
}
</script>
<style lang="scss" scoped>
.careers-container {
  .jumbotron {
    background-image: url('~/assets/images/careers/careers-jumbotron.jpg');
  }
}
</style>

<style scoped>
.why-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}
.why-dc-card {
  padding: 28px;
  background: var(--off);
  border: 1px solid var(--border);
  border-radius: 12px;
}
.why-dc-card h3 {
  font-size: 17px;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 8px;
}
.why-dc-card p {
  font-size: 14px;
  color: var(--body);
  line-height: 1.6;
}
@media (max-width: 640px) {
  .why-grid { grid-template-columns: 1fr; }
}
</style>
