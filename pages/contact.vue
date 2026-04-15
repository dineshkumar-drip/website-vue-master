<template>
  <div>
    <!-- New en-us redesign -->
    <div v-if="isUsRedesign" class="dc-new">
      <RedesignAppTopBar />
      <RedesignAppNav />
      <section class="page-hero">
        <div class="dc-container">
          <span class="eyebrow">Contact</span>
          <h1>Let's talk about<br><em>your business</em></h1>
          <p>Whether you're ready to apply or just exploring your options, our team is here to help. Reach out and we'll respond within one business day.</p>
        </div>
      </section>

      <!-- Contact Layout -->
      <section class="section">
        <div class="dc-container">
          <div class="contact-layout">
            <!-- Form -->
            <div class="reveal">
              <h2 class="contact-form-title">Send us a message</h2>
              <form class="dc-contact-form" @submit.prevent="submitDcForm">
                <div class="form-row">
                  <div class="form-group">
                    <label for="c-first">First Name *</label>
                    <input id="c-first" type="text" v-model="dcForm.firstName" placeholder="Jane" required />
                  </div>
                  <div class="form-group">
                    <label for="c-last">Last Name *</label>
                    <input id="c-last" type="text" v-model="dcForm.lastName" placeholder="Smith" required />
                  </div>
                </div>
                <div class="form-group">
                  <label for="c-email">Business Email *</label>
                  <input id="c-email" type="email" v-model="dcForm.email" placeholder="jane@yourcompany.com" required />
                </div>
                <div class="form-group">
                  <label for="c-phone">Phone</label>
                  <input id="c-phone" type="tel" v-model="dcForm.phone" placeholder="+1 (555) 000-0000" />
                </div>
                <div class="form-group">
                  <label for="c-company">Company Name *</label>
                  <input id="c-company" type="text" v-model="dcForm.company" placeholder="Your Company LLC" required />
                </div>
                <div class="form-group">
                  <label for="c-revenue">Annual Revenue</label>
                  <select id="c-revenue" v-model="dcForm.revenue">
                    <option value="">Select revenue range</option>
                    <option value="1m-5m">$1M – $5M</option>
                    <option value="5m-25m">$5M – $25M</option>
                    <option value="25m-100m">$25M – $100M</option>
                    <option value="100m-500m">$100M – $500M</option>
                    <option value="500m+">$500M+</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="c-product">Product Interest</label>
                  <select id="c-product" v-model="dcForm.product">
                    <option value="">What are you interested in?</option>
                    <option value="vendor-financing">Vendor Financing</option>
                    <option value="receivables-financing">Receivables Financing</option>
                    <option value="line-of-credit">Line of Credit</option>
                    <option value="all">All Products</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="c-message">Message *</label>
                  <textarea id="c-message" v-model="dcForm.message" placeholder="Tell us about your business and what you're looking for..." required></textarea>
                </div>
                <button type="submit" class="dc-btn dc-btn-primary w-full dc-btn-lg" style="justify-content: center;">
                  Send Message →
                </button>

                <div v-if="dcSubmitted" class="success-msg">
                  Thank you! We've received your message and will be in touch within one business day.
                </div>
              </form>
            </div>

            <!-- Contact Info -->
            <div class="contact-info-panel reveal reveal-delay-1">
              <div class="info-section">
                <h3 class="info-title">Get in Touch</h3>
                <div class="info-item">
                  <div class="info-icon">
                    <RedesignAppIcon name="phone" :size="18" color="var(--green)" />
                  </div>
                  <div>
                    <div class="info-label">Phone</div>
                    <a href="tel:+16504370150" class="info-value">+1 (650) 437-0150</a>
                  </div>
                </div>
                <div class="info-item">
                  <div class="info-icon">
                    <RedesignAppIcon name="mail" :size="18" color="var(--green)" />
                  </div>
                  <div>
                    <div class="info-label">Email</div>
                    <a href="mailto:hello@dripcapital.com" class="info-value">hello@dripcapital.com</a>
                  </div>
                </div>
                <div class="info-item">
                  <div class="info-icon">
                    <RedesignAppIcon name="clock" :size="18" color="var(--green)" />
                  </div>
                  <div>
                    <div class="info-label">Hours</div>
                    <div class="info-value">Mon–Fri, 9AM–6PM PST</div>
                  </div>
                </div>
              </div>

              <div class="info-section">
                <h3 class="info-title">Headquarters</h3>
                <div class="info-item">
                  <div class="info-icon">
                    <RedesignAppIcon name="map-pin" :size="18" color="var(--green)" />
                  </div>
                  <div>
                    <div class="info-value" style="line-height: 1.8;">
                      228 Hamilton Ave, 3rd Floor<br>
                      Palo Alto, CA 94301<br>
                      United States
                    </div>
                  </div>
                </div>
              </div>

              <div class="info-section">
                <h3 class="info-title">Quick Links</h3>
                <NuxtLink to="/en-us/vendor-financing" class="quick-link">Vendor Financing →</NuxtLink>
                <NuxtLink to="/en-us/receivables-financing" class="quick-link">Receivables Financing →</NuxtLink>
                <NuxtLink to="/en-us/line-of-credit" class="quick-link">Line of Credit →</NuxtLink>
                <NuxtLink to="/en-us/partners" class="quick-link">Partner Program →</NuxtLink>
              </div>

              <div class="response-promise">
                <div class="rp-icon">
                  <RedesignAppIcon name="lightning" :size="20" color="var(--green)" />
                </div>
                <div>
                  <div class="rp-title">Fast Response</div>
                  <div class="rp-desc">We respond to all inquiries within one business day. For urgent matters, call us directly.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RedesignAppFooter />
    </div>
    <!-- Existing design for all other locales -->
    <section v-else class="impo-expo contact-page-container">
      <main-header :isContactPage="true" />
      <main-jumbotron>
        <template slot="content">
          <b-container class="p-0">
            <b-row>
              <b-col cols="12" lg="6">
                <h1 class="display-3">
                  <vue-typer
                    id="typewriter"
                    :text="$t('pages.contact.jumbotron.title')"
                    :repeat="0"
                    @typed-char="onTypedChar"
                  />
                  <span class="slash text-primary"></span>
                </h1>
                <b-row data-aos="fade-right" v-if="loaded">
                  <b-col cols="12" xl="8" md="9">
                    <p class="lead">
                      {{ $t('pages.contact.jumbotron.lead.line1') }}
                    </p>
                    <p class="lead">
                      {{ $t('pages.contact.jumbotron.lead.line2') }}
                      <a
                        v-if="!isUs"
                        v-track-click
                        id="contact-jumbo-phone"
                        :href="'tel:' + $t('region.phone')"
                      >
                        {{ $t('region.phone') }}
                      </a>
                      <a
                        v-else
                        v-track-click
                        id="contact-jumbo-phone"
                        :href="'tel:' + $t('pages.contact.jumbotron.lead.phone')"
                      >
                        {{ $t('pages.contact.jumbotron.lead.phone') }}
                      </a>
                      {{ $t('pages.contact.jumbotron.lead.line3') }}
                    </p>
                  </b-col>
                </b-row>
              </b-col>
              <b-col cols="12" lg="6" data-aos="zoom-out" v-if="loaded">
                <contact-form />
              </b-col>
            </b-row>
          </b-container>
        </template>
      </main-jumbotron>
      <get-in-touch />
      <conclusion />
      <main-footer />
    </section>
  </div>
</template>

<script>
import MainHeader from '~/components/common/ImpoExpo/MainHeader'
import MainJumbotron from '../components/MainJumbotron'
import MainFooter from '~/components/footer/MainFooter'

import ContactForm from '../components/contact/ContactForm'
import GetInTouch from '../components/contact/GetInTouch'
import Conclusion from '../components/contact/Conclusion'

import typerHelper from '~/modules/typer-helper'
export default {
  nuxtI18n: {
    paths: {
      en: '/contact',
      es: '/contacto'
    }
  },
  data() {
    return {
      loaded: false,
      title: this.$t('pages.contact.title'),
      description: this.$t('pages.contact.description'),
      dcSubmitted: false,
      dcForm: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        revenue: '',
        product: '',
        message: ''
      }
    }
  },
  computed: {
    isUsRedesign() {
      return this.$i18n.locale === 'en-us'
    },
    isUs() {
      return (
        this.$i18n.locale.indexOf('en-us') > -1 ||
        this.$i18n.locale.indexOf('en') > -1
      )
    },
    hreflangs() {
      return [
        {
          hid: `alternate-hreflang-en`,
          rel: 'alternate',
          href: 'https://www.dripcapital.com/contact',
          hreflang: 'en'
        },
        {
          hid: `alternate-hreflang-es-mx`,
          rel: 'alternate',
          href: 'https://www.dripcapital.com/es-mx/contact',
          hreflang: 'es-mx'
        },
        {
          hid: `alternate-hreflang-en-in`,
          rel: 'alternate',
          href: 'https://www.dripcapital.com/en-in/contact',
          hreflang: 'en-in'
        },
        {
          hid: `alternate-hreflang-en-us`,
          rel: 'alternate',
          href: 'https://www.dripcapital.com/en-us/contact',
          hreflang: 'en-us'
        }
      ]
    }
  },
  mounted() {
    this.loaded = true
  },
  methods: {
    onTypedChar(typedChar, typedCharIndex) {
      typerHelper(typedChar, typedCharIndex, this)
    },
    async submitDcForm() {
      try {
        const body = {
          first_name: this.dcForm.firstName,
          last_name: this.dcForm.lastName,
          email: this.dcForm.email,
          phone: this.dcForm.phone,
          company_name: this.dcForm.company,
          annual_revenue: this.dcForm.revenue,
          product_interested: this.dcForm.product,
          message: this.dcForm.message,
          source: 'website_contact_us',
          locale: this.$i18n.locale
        }
        console.log('[contact] Submitting form data:', body)
        const apiUrl = process.env.apiUrl
        console.log('[contact] apiUrl:', apiUrl)
        if (apiUrl) {
          const tokenRes = await this.$axios({ url: apiUrl + '/v1/access/token' })
          const publicToken = 'Token ' + tokenRes.data.token
          await this.$axios({
            url: apiUrl + '/v2/business/webhooks/zapier',
            method: 'post',
            headers: { Authorization: publicToken },
            data: {
              zap_name: 'SCF_WS_TO_FS_CAMPAIGN_SEM_PAGE',
              zap_payload: JSON.stringify(body)
            }
          })
          console.log('[contact] Zapier webhook sent via API ✓')
        } else {
          // Fallback: direct Zapier webhook
          const res = await fetch('https://hooks.zapier.com/hooks/catch/2434182/23emz9u/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
          })
          console.log('[contact] Zapier webhook sent directly ✓', res.status)
        }
      } catch (err) {
        console.error('[contact] Zapier webhook error:', err)
      }
      this.dcSubmitted = true
      Object.assign(this.dcForm, {
        firstName: '', lastName: '', email: '', phone: '',
        company: '', revenue: '', product: '', message: ''
      })
      setTimeout(() => { this.dcSubmitted = false }, 6000)
    }
  },
  head() {
    if (this.isUsRedesign) {
      return {
        title: 'Contact Drip Capital | Get Working Capital Today',
        meta: [
          { hid: 'description', name: 'description', content: 'Get in touch with Drip Capital. Apply for vendor financing, receivables financing, or a line of credit. Call +1 (650) 437-0150 or email hello@dripcapital.com.' },
          { hid: 'og:title', property: 'og:title', content: 'Contact Drip Capital | Get Working Capital Today' },
          { hid: 'og:description', property: 'og:description', content: 'Get in touch with Drip Capital. Apply for vendor financing, receivables financing, or a line of credit.' }
        ],
        link: [
          { rel: 'canonical', href: 'https://www.dripcapital.com/en-us/contact' },
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
    MainHeader,
    MainJumbotron,
    MainFooter,
    ContactForm,
    GetInTouch,
    Conclusion
  }
}
</script>

<style scoped>
.contact-layout {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 64px;
  align-items: start;
}

.contact-form-title {
  font-size: 22px;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 28px;
}

.dc-contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.success-msg {
  padding: 16px 20px;
  background: rgba(0,194,124,0.1);
  border: 1px solid rgba(0,194,124,0.3);
  border-radius: 8px;
  font-size: 14px;
  color: var(--green-d);
  font-weight: 500;
}

.contact-info-panel {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.info-section {
  padding: 28px;
  background: var(--off);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.info-title {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--mid);
  margin-bottom: 4px;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.info-icon {
  font-size: 18px;
  width: 24px;
  flex-shrink: 0;
  margin-top: 1px;
}

.info-label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--mid);
  margin-bottom: 2px;
}

.info-value {
  font-size: 14px;
  font-weight: 500;
  color: var(--navy);
  text-decoration: none;
  transition: color 0.2s;
}

a.info-value:hover { color: var(--green); }

.quick-link {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: var(--green);
  text-decoration: none;
  padding: 6px 0;
  border-bottom: 1px solid var(--border);
  transition: color 0.2s;
}

.quick-link:last-child { border-bottom: none; }
.quick-link:hover { color: var(--green-d); }

.response-promise {
  padding: 20px;
  background: var(--navy);
  border-radius: var(--radius);
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.rp-icon { font-size: 24px; flex-shrink: 0; }
.rp-title { font-size: 14px; font-weight: 700; color: var(--white); margin-bottom: 4px; }
.rp-desc { font-size: 13px; color: rgba(255,255,255,0.64); line-height: 1.6; }

@media (max-width: 768px) {
  .contact-layout { grid-template-columns: 1fr; gap: 40px; }
  .form-row { grid-template-columns: 1fr; }
}
</style>
