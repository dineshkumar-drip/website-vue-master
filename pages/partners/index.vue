<template>
  <div>
    <div v-if="isUsRedesign" class="dc-new">
      <RedesignAppTopBar />
      <RedesignAppNav />
      <!-- Hero -->
      <section class="page-hero">
        <div class="dc-container">
          <span class="eyebrow">Partner Program</span>
          <h1>Partner with<br><em>Drip Capital</em></h1>
          <p>Help your clients access the working capital they need while earning referral income. Join our partner network of banks, brokers, associations, and advisors.</p>
        </div>
      </section>

      <!-- Partner Types -->
      <section class="section">
        <div class="dc-container">
          <div class="section-header reveal" style="text-align: center; max-width: 560px; margin: 0 auto 48px;">
            <span class="eyebrow">Who We Partner With</span>
            <h2 class="section-title">The right partner program<br>for your business.</h2>
          </div>
          <div class="grid-2">
            <div class="partner-type-dc-card reveal" v-for="(pt, i) in partnerTypes" :key="i" :class="`reveal-delay-${i}`">
              <div class="pt-icon">
                <RedesignAppIcon :name="pt.icon" :size="28" color="var(--green)" />
              </div>
              <h3 class="pt-title">{{ pt.title }}</h3>
              <p class="pt-desc">{{ pt.desc }}</p>
              <ul class="pt-benefits">
                <li v-for="b in pt.benefits" :key="b">{{ b }}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Partner -->
      <section class="section section-bg">
        <div class="dc-container">
          <div class="section-header reveal" style="text-align: center; max-width: 560px; margin: 0 auto 48px;">
            <span class="eyebrow">Why Partner with Drip Capital</span>
            <h2 class="section-title">Benefits of joining<br>our partner network.</h2>
          </div>
          <div class="grid-3">
            <div class="benefit-dc-card reveal" v-for="(b, i) in benefits" :key="i" :class="`reveal-delay-${i}`">
              <div class="feature-icon">
                <RedesignAppIcon :name="b.icon" :size="22" color="var(--green)" />
              </div>
              <h3 class="benefit-title">{{ b.title }}</h3>
              <p class="benefit-desc">{{ b.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Partner Application Form -->
      <section class="section">
        <div class="dc-container">
          <div class="form-layout">
            <div class="form-left reveal">
              <span class="eyebrow">Apply to Partner</span>
              <h2 class="section-title">Join our<br>partner network.</h2>
              <p class="section-subtitle">
                Fill out the form and our partnerships team will be in touch within 2 business days to discuss the best program for you.
              </p>
              <div class="contact-info">
                <div class="ci-item">
                  <span class="ci-icon">
                    <RedesignAppIcon name="mail" :size="16" color="var(--green)" />
                  </span>
                  <a href="mailto:partners@dripcapital.com">partners@dripcapital.com</a>
                </div>
                <div class="ci-item">
                  <span class="ci-icon">
                    <RedesignAppIcon name="phone" :size="16" color="var(--green)" />
                  </span>
                  <a href="tel:+16504370150">+1 (650) 437-0150</a>
                </div>
              </div>
            </div>

            <div class="form-right reveal reveal-delay-1">
              <form class="partner-form" @submit.prevent="submitPartnerForm">
                <div class="form-row">
                  <div class="form-group">
                    <label for="p-name">Full Name *</label>
                    <input id="p-name" type="text" v-model="form.name" placeholder="Jane Smith" required />
                  </div>
                  <div class="form-group">
                    <label for="p-company">Company *</label>
                    <input id="p-company" type="text" v-model="form.company" placeholder="ABC Financial" required />
                  </div>
                </div>
                <div class="form-group">
                  <label for="p-email">Business Email *</label>
                  <input id="p-email" type="email" v-model="form.email" placeholder="jane@abcfinancial.com" required />
                </div>
                <div class="form-group">
                  <label for="p-type">Partner Type *</label>
                  <select id="p-type" v-model="form.type" required>
                    <option value="">Select partner type</option>
                    <option value="bank">Bank / Credit Union</option>
                    <option value="broker">Finance Broker / Advisor</option>
                    <option value="association">Trade Association</option>
                    <option value="accountant">CPA / Accountant</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="p-message">Tell us about your clients</label>
                  <textarea id="p-message" v-model="form.message" placeholder="Describe the types of businesses you work with and how we might collaborate..."></textarea>
                </div>
                <button type="submit" class="dc-btn dc-btn-primary w-full dc-btn-lg" style="justify-content: center;">
                  Submit Application →
                </button>
                <p class="form-note">Our partnerships team will respond within 2 business days.</p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <RedesignAppFooter />
    </div>

    <section v-else class="impo-expo page-container">
      <main-header :isChannelPartner="true" page="channelPartner" />
      <main-hero page="channelPartner" />
      <new-solution page="channelPartner" />
      <capital class="mt-5 mt-lg-9" page="channelPartner" channelPartner />
      <feature-partner class="mt-5 mt-lg-9" v-if="!isMx && !isEnMx && !isUs" />
      <business-conditions class="mt-5 mt-lg-9" v-if="isUs" />
      <faqs class="mt-5 mt-lg-9" page="channelPartner" :faqs="faqs" />
      <quick-facts class="mt-5 mt-lg-9" page="channelPartner" />
      <news class="mt-5 mt-lg-9" v-if="!(isIn || isEnMx)" page="channelPartner" />
      <growth class="mt-5 mt-lg-10" page="channelPartner" />
      <main-footer :isNewBranding="true" />
    </section>
  </div>
</template>
<script>
import MainHeader from '~/components/common/ImpoExpo/MainHeader'
import MainHero from '~/components/common/ImpoExpo/MainHero'
import Capital from '~/components/common/ImpoExpo/Capital'
import News from '~/components/common/ImpoExpo/News'
import FeaturePartner from '~/components/common/partners/FeaturePartner'
import BusinessConditions from '~/components/common/partners/BusinessConditions'
import Growth from '~/components/common/ImpoExpo/Growth'
import MainJumbotron from '~/components/MainJumbotron'
import PartnerForm from '~/components/forms/PartnerForm'
import Faqs from '~/components/products/Faqs'
import MainFooter from '~/components/footer/MainFooter'
import QuickFacts from '~/components/products/QuickFacts'
import Success from '~/components/common/Success'
import Benefits from '~/components/common/Benefits'
import NewSolution from '~/components/common/ImpoExpo/NewSolution'
import Conclusion from '~/components/channelPartner/Conclusion'
import typerHelper from '~/modules/typer-helper'

export default {
  nuxtI18n: {
    paths: {
      en: '/partners',
      'es-mx': '/socios',
      'en-in': '/partners',
      'en-mx': '/partners',
      'en-ae': '/partners',
      'en-us': '/partners'
    }
  },
  data() {
    return {
      title: this.$t('pages.channelPartner.title'),
      description: this.$t('pages.channelPartner.description'),
      faqs: this.$t('pages.channelPartner.faqs.items'),
      form: {
        name: '',
        company: '',
        email: '',
        type: '',
        message: ''
      },
      partnerTypes: [
        {
          icon: 'building',
          title: 'Banks & Credit Unions',
          desc: 'Expand your SMB lending capabilities by referring clients who need working capital products you don\'t currently offer.',
          benefits: ['Earn referral fees on funded clients', 'Complementary, not competitive', 'White-label options available', 'Dedicated bank partnership team']
        },
        {
          icon: 'building',
          title: 'Finance Brokers & Advisors',
          desc: 'Offer your clients a best-in-class working capital option and earn competitive referral commissions on funded transactions.',
          benefits: ['Industry-leading referral commissions', 'Fast approvals for your clients', 'Real-time deal tracking portal', 'Marketing support provided']
        },
        {
          icon: 'partner',
          title: 'Trade Associations',
          desc: 'Provide your members with access to exclusive working capital terms through a Drip Capital association partnership.',
          benefits: ['Member benefit announcement support', 'Preferred pricing for your members', 'Educational webinars & content', 'Co-branded materials available']
        },
        {
          icon: 'chart',
          title: 'CPAs & Accountants',
          desc: 'Help your business clients optimize cash flow by referring them to Drip Capital working capital solutions.',
          benefits: ['Earn referral income', 'Help clients improve cash flow', 'Simple referral process', 'Client relationship maintained']
        }
      ],
      benefits: [
        { icon: 'dollar', title: 'Competitive Referral Commissions', desc: 'Earn industry-leading referral fees for every client you refer who gets funded. Transparent, on-time payments, always.' },
        { icon: 'lightning', title: 'Fast Approvals for Your Clients', desc: 'Drip Capital\'s 24-hour approval process means your clients get funded fast, reinforcing your value as a trusted advisor.' },
        { icon: 'shield', title: 'Partner Portal Access', desc: 'Track referrals, monitor deal status, and access marketing materials through our dedicated partner portal.' },
        { icon: 'users', title: 'Training & Support', desc: 'We provide training on our products, dedicated partnership managers, and co-marketing resources to help you succeed.' },
        { icon: 'trending', title: 'Growing Product Suite', desc: 'With Vendor Financing, Receivables Financing, and Line of Credit, there\'s a Drip Capital product for nearly every working capital need your clients may have.' },
        { icon: 'star', title: 'Trusted Brand', desc: 'Partner with a brand backed by Sequoia, Accel, Y Combinator, and world-class financial institutions. Trusted by 11,000+ businesses.' }
      ]
    }
  },
  computed: {
    isUsRedesign() {
      return this.$i18n.locale === 'en-us'
    },
    isIn() {
      return this.$i18n.locale === 'en-in'
    },
    isEnMx() {
      return this.$i18n.locale === 'en-mx'
    },
    isMx() {
      return this.$i18n.locale === 'es-mx'
    },
    isUs() {
      return this.$i18n.locale.indexOf('us') > -1
    },
    canonicalTag() {
      return process.env.DRIP_WEB_HOST + this.$route.path
    },
    hreflangs() {
      return [
        {
          hid: `alternate-hreflang-en`,
          rel: 'alternate',
          href: 'https://www.dripcapital.com/investors',
          hreflang: 'en'
        },
        {
          hid: `alternate-hreflang-en-in`,
          rel: 'alternate',
          href: 'https://www.dripcapital.com/en-in/investors',
          hreflang: 'en-in'
        },
        {
          hid: `alternate-hreflang-en-us`,
          rel: 'alternate',
          href: 'https://www.dripcapital.com/en-us/investors',
          hreflang: 'en-us'
        },
        {
          hid: `alternate-hreflang-en-mx`,
          rel: 'alternate',
          href: 'https://www.dripcapital.com/es-mx/socios',
          hreflang: 'es-mx'
        }
      ]
    }
  },
  head() {
    return {
      needLineBreak: true,
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.description }
      ],
      link: [{ rel: 'canonical', href: this.canonicalTag }, ...this.hreflangs]
    }
  },
  components: {
    MainHeader,
    MainJumbotron,
    PartnerForm,
    MainFooter,
    Success,
    Benefits,
    Conclusion,
    MainHero,
    Capital,
    News,
    FeaturePartner,
    BusinessConditions,
    Growth,
    Faqs,
    QuickFacts,
    NewSolution
  },
  methods: {
    onTypedChar(typedChar, typedCharIndex) {
      typerHelper(typedChar, typedCharIndex, this)
    },
    async submitPartnerForm() {
      try {
        const body = {
          full_name: this.form.name,
          company_name: this.form.company,
          email: this.form.email,
          partner_type: this.form.type,
          message: this.form.message,
          source: 'website_partner_application',
          locale: this.$i18n.locale
        }
        console.log('[partners] Submitting form data:', body)
        const apiUrl = process.env.apiUrl
        console.log('[partners] apiUrl:', apiUrl)
        if (apiUrl) {
          const tokenRes = await this.$axios({ url: apiUrl + '/v1/access/token' })
          const publicToken = 'Token ' + tokenRes.data.token
          await this.$axios({
            url: apiUrl + '/v2/business/webhooks/zapier',
            method: 'post',
            headers: { Authorization: publicToken },
            data: {
              zap_name: 'SCF_WS_TO_FS_PAID_ORGANIC',
              zap_payload: JSON.stringify(body)
            }
          })
          console.log('[partners] Zapier webhook sent via API ✓')
        } else {
          // Fallback: direct Zapier webhook
          const res = await fetch('https://hooks.zapier.com/hooks/catch/2434182/23emz9u/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
          })
          console.log('[partners] Zapier webhook sent directly ✓', res.status)
        }
      } catch (err) {
        console.error('[partners] Zapier webhook error:', err)
      }
      alert('Thank you for your interest in partnering with Drip Capital! Our team will be in touch within 2 business days.')
      Object.assign(this.form, { name: '', company: '', email: '', type: '', message: '' })
    }
  }
}
</script>

<style scoped>
.partner-type-dc-card {
  padding: 32px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  transition: box-shadow 0.2s, transform 0.2s;
}

.partner-type-dc-card:hover {
  box-shadow: var(--shadow);
  transform: translateY(-2px);
}

.pt-icon {
  font-size: 32px;
  margin-bottom: 16px;
}

.pt-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 12px;
}

.pt-desc {
  font-size: 14px;
  color: var(--body);
  line-height: 1.7;
  margin-bottom: 20px;
}

.pt-benefits {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.pt-benefits li {
  font-size: 13px;
  color: var(--body);
  padding-left: 20px;
  position: relative;
}

.pt-benefits li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--green);
  font-weight: 700;
}

.benefit-dc-card {
  padding: 28px;
  border: 1px solid var(--border);
  background: var(--white);
  border-radius: var(--radius);
}

.benefit-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 10px;
}

.benefit-desc {
  font-size: 14px;
  color: var(--body);
  line-height: 1.7;
}

.form-layout {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 64px;
  align-items: start;
}

.contact-info {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.ci-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: var(--body);
}

.ci-icon { font-size: 16px; }

.ci-item a {
  color: var(--green);
  text-decoration: none;
}

.ci-item a:hover { color: var(--green-d); }

.partner-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px;
  background: var(--off);
  border: 1px solid var(--border);
  border-radius: 16px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.form-note {
  font-size: 12px;
  color: var(--mid);
  text-align: center;
}

@media (max-width: 768px) {
  .form-layout {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .partner-form {
    padding: 24px;
  }
}
</style>
