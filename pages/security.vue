<template>
  <div>
    <!-- New en-us redesign -->
    <div v-if="isUsRedesign" class="dc-new">
      <RedesignAppTopBar />
      <RedesignAppNav />
      <section class="page-hero">
        <div class="dc-container">
          <span class="eyebrow">Trust &amp; Security</span>
          <h1>Your data is safe<br><em>with us.</em></h1>
          <p>At Drip Capital, protecting your business data is our highest priority. We employ enterprise-grade security measures across every layer of our platform.</p>
        </div>
      </section>

      <section class="section">
        <div class="dc-container" style="max-width: 800px;">
          <div class="security-grid">
            <div class="security-card">
              <div class="security-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3>SOC 2 Type II Certified</h3>
              <p>Our systems and processes are independently audited annually to ensure we meet the highest standards of security, availability, and confidentiality.</p>
            </div>
            <div class="security-card">
              <div class="security-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </div>
              <h3>256-bit Encryption</h3>
              <p>All data in transit and at rest is encrypted using AES-256 encryption, the same standard used by leading financial institutions worldwide.</p>
            </div>
            <div class="security-card">
              <div class="security-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>
              </div>
              <h3>Multi-Factor Authentication</h3>
              <p>We enforce multi-factor authentication across all accounts to prevent unauthorized access to your sensitive financial data.</p>
            </div>
            <div class="security-card">
              <div class="security-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <h3>24/7 Monitoring</h3>
              <p>Our security operations center monitors our infrastructure around the clock, with automated threat detection and rapid incident response.</p>
            </div>
            <div class="security-card">
              <div class="security-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="15" x2="15" y2="15"/></svg>
              </div>
              <h3>Regulatory Compliance</h3>
              <p>We maintain compliance with applicable financial regulations and data privacy laws, including state and federal requirements for financial services.</p>
            </div>
            <div class="security-card">
              <div class="security-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
              <h3>Secure Development</h3>
              <p>Our engineering team follows secure development lifecycle practices with regular code reviews, penetration testing, and vulnerability assessments.</p>
            </div>
          </div>

          <div style="text-align: center; margin-top: 48px;">
            <p style="font-size: 15px; color: var(--mid); margin-bottom: 24px;">Have security questions? Reach out to our team.</p>
            <NuxtLink to="/en-us/contact" class="dc-btn dc-btn-primary dc-btn-lg">Contact Security Team</NuxtLink>
          </div>
        </div>
      </section>
      <RedesignAppFooter />
    </div>
    <!-- Existing design for all other locales -->
    <page-section v-else section-class="page-privacy-policy">
      <main-header :defaultLightHeader="true" />
      <privacy />
      <main-footer />
    </page-section>
  </div>
</template>

<script>
import MainHeader from '~/components/MainHeader'
import MainFooter from '~/components/footer/MainFooter'
import PageSection from '~/components/PageSection'
import Privacy from '~/components/privacyPolicy/Privacy'

export default {
  nuxtI18n: {
    paths: {
      en: '/security'
    }
  },
  data() {
    return {
      title: this.$t('pages.privacy.title'),
      description: this.$t('pages.privacy.description')
    }
  },
  computed: {
    isUsRedesign() {
      return this.$i18n.locale === 'en-us'
    },
    hreflangs() {
      return [
        {
          hid: `alternate-hreflang-en`,
          rel: 'alternate',
          href: 'https://www.dripcapital.com/privacy-policy',
          hreflang: 'en'
        },
        {
          hid: `alternate-hreflang-en-in`,
          rel: 'alternate',
          href: 'https://www.dripcapital.com/en-in/privacy-policy',
          hreflang: 'en-in'
        },
        {
          hid: `alternate-hreflang-en-us`,
          rel: 'alternate',
          href: 'https://www.dripcapital.com/en-us/privacy-policy',
          hreflang: 'en-us'
        },
        {
          hid: `alternate-hreflang-en-mx`,
          rel: 'alternate',
          href: 'https://www.dripcapital.com/es-mx/privacy-policy',
          hreflang: 'es-mx'
        }
      ]
    }
  },
  head() {
    if (this.isUsRedesign) {
      return {
        title: 'Security | Drip Capital',
        meta: [
          { hid: 'description', name: 'description', content: 'Drip Capital security practices. SOC 2 certified, 256-bit encryption, and enterprise-grade security for your financial data.' },
          { hid: 'og:title', property: 'og:title', content: 'Security | Drip Capital' },
          { hid: 'og:description', property: 'og:description', content: 'Drip Capital security practices. SOC 2 certified, 256-bit encryption, and enterprise-grade security for your financial data.' }
        ],
        link: [
          { rel: 'canonical', href: 'https://www.dripcapital.com/en-us/security' },
          ...this.hreflangs
        ]
      }
    }
    return {
      needLineBreak: true,
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.description }
      ],
      links: [...this.hreflangs]
    }
  },
  components: {
    PageSection,
    MainHeader,
    MainFooter,
    Privacy
  }
}
</script>

<style scoped>
.security-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}
.security-card {
  padding: 28px;
  background: var(--off);
  border: 1px solid var(--border);
  border-radius: 12px;
}
.security-icon {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: rgba(0,194,124,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}
.security-card h3 {
  font-size: 17px;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 8px;
}
.security-card p {
  font-size: 14px;
  color: var(--body);
  line-height: 1.6;
}
@media (max-width: 640px) {
  .security-grid { grid-template-columns: 1fr; }
}
</style>
