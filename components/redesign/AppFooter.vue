<template>
  <footer class="footer">
    <div class="footer-main">
      <div class="dc-container">
        <div class="footer-grid">
          <!-- Brand Column -->
          <div class="footer-brand">
            <NuxtLink to="/en-us/" class="footer-logo-link" aria-label="Drip Capital">
              <img src="/redesign/logo-white.svg" alt="Drip Capital" class="footer-logo-img" />
            </NuxtLink>
            <p class="footer-tagline">Working Capital for Growing Businesses</p>
            <p class="footer-desc">
              We help businesses with $5M–$500M in annual revenue access fast, flexible capital. No collateral required.
            </p>

            <!-- Email CTA -->
            <div class="footer-email-form">
              <div class="input-row">
                <input type="email" placeholder="your@email.com" v-model="emailInput" />
                <button class="dc-btn dc-btn-primary dc-btn-sm" @click="handleEmail">Let's talk</button>
              </div>
            </div>

            <!-- Contact Info -->
            <div class="footer-contact">
              <div class="contact-item">
                <span class="contact-icon">📞</span>
                <a href="tel:+16504370150">+1 (650) 437-0150</a>
              </div>
              <div class="contact-item">
                <span class="contact-icon">✉</span>
                <a href="mailto:hello@dripcapital.com">hello@dripcapital.com</a>
              </div>
              <div class="contact-item">
                <span class="contact-icon">📍</span>
                <span>228 Hamilton Ave, 3rd Floor, Palo Alto, CA 94301</span>
              </div>
            </div>
          </div>

          <!-- Products Column -->
          <div class="footer-col">
            <h4 class="footer-col-title">Products</h4>
            <ul class="footer-links">
              <li><NuxtLink to="/en-us/vendor-financing">Vendor Financing</NuxtLink></li>
              <li><NuxtLink to="/en-us/receivables-financing">Receivables Financing</NuxtLink></li>
              <li><NuxtLink to="/en-us/line-of-credit">Line of Credit</NuxtLink></li>
            </ul>
            <h4 class="footer-col-title" style="margin-top: 28px;">Industry</h4>
            <ul class="footer-links">
              <li><NuxtLink to="/en-us/industry/manufacturing">Manufacturing</NuxtLink></li>
              <li><NuxtLink to="/en-us/industry/wholesale">Wholesale</NuxtLink></li>
              <li><NuxtLink to="/en-us/industry/agri-food">Agri-Products</NuxtLink></li>
              <li><NuxtLink to="/en-us/industry/consumer-goods">Consumer Goods</NuxtLink></li>
              <li><NuxtLink to="/en-us/industry/seafood">Seafood</NuxtLink></li>
            </ul>
          </div>

          <!-- Company Column -->
          <div class="footer-col">
            <h4 class="footer-col-title">Company</h4>
            <ul class="footer-links">
              <li><NuxtLink to="/en-us/about">About Us</NuxtLink></li>
              <li><NuxtLink to="/en-us/investors">Our Investors</NuxtLink></li>
              <li><NuxtLink to="/en-us/use-cases">Case Studies</NuxtLink></li>
              <li><NuxtLink to="/en-us/partners">Partner Program</NuxtLink></li>
              <li><NuxtLink to="/en-us/contact">Contact Us</NuxtLink></li>
            </ul>
          </div>

          <!-- Resources Column -->
          <div class="footer-col">
            <h4 class="footer-col-title">Resources</h4>
            <ul class="footer-links">
              <li><a href="https://www.dripcapital.com/en-us/resources/blog" target="_blank" rel="noopener noreferrer">Blog</a></li>
              <li><a href="https://www.dripcapital.com/hts-code" target="_blank" rel="noopener noreferrer">HTS Code Lookup</a></li>
              <li><a href="https://www.dripcapital.com/us-customs-import-duty/" target="_blank" rel="noopener noreferrer">Customs Duty Calculator</a></li>
              <li><a href="https://www.dripcapital.com/en-us/resources/finance-guides" target="_blank" rel="noopener noreferrer">Glossary</a></li>
              <li><a href="https://www.dripcapital.com/en-us/resources/finance-guides" target="_blank" rel="noopener noreferrer">Finance Guides</a></li>
              <li><a href="https://www.dripcapital.com/en-us/resources/mediaroom" target="_blank" rel="noopener noreferrer">Media Room</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="footer-bottom">
      <div class="dc-container">
        <div class="footer-bottom-inner">
          <p class="footer-copy">
            &copy; {{ currentYear }} Drip Capital Inc. All rights reserved.
          </p>

          <!-- Legal Links -->
          <div class="footer-legal-links">
            <NuxtLink to="/en-us/privacy-policy">Privacy Policy</NuxtLink>
            <span class="legal-sep">·</span>
            <NuxtLink to="/en-us/terms-of-use">Terms of Service</NuxtLink>
            <span class="legal-sep">·</span>
            <a href="https://share.hsforms.com/2Iup-aBMESgGd7SH-9zvuQwcwe7e" target="_blank" rel="noopener noreferrer">Opt-out (Marketing emails)</a>
            <span class="legal-sep">·</span>
            <a href="https://cwe7e.share.hsforms.com/2T93PVfFCR62PwD-AlPUcBw" target="_blank" rel="noopener noreferrer">Opt-out (AI RoboCalls)</a>
          </div>

          <!-- Region Selector -->
          <div class="footer-region" :class="{ open: regionOpen }" @click.stop="toggleRegion">
            <span class="footer-region-globe">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
              </svg>
            </span>
            <span class="footer-region-label">{{ currentRegionLabel }}</span>
            <span class="footer-region-arrow">
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                <path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            <div class="footer-region-dropdown" v-show="regionOpen" @click.stop>
              <button
                v-for="region in regions"
                :key="region.locale"
                class="footer-region-option"
                :class="{ active: $i18n.locale === region.locale }"
                @click="switchRegion(region.locale)"
              >
                <span class="footer-region-flag">{{ region.flag }}</span>
                <span>{{ region.label }}</span>
              </button>
            </div>
          </div>

          <div class="footer-backers">
            <span class="backers-label">Backed by:</span>
            <span class="backer">Accel</span>
            <span class="backer-dot">·</span>
            <span class="backer">Barclays</span>
            <span class="backer-dot">·</span>
            <span class="backer">East West Bank</span>
            <span class="backer-dot">·</span>
            <span class="backer">IFC · World Bank</span>
            <span class="backer-dot">·</span>
            <span class="backer">Sequoia</span>
            <span class="backer-dot">·</span>
            <span class="backer">Y Combinator</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      emailInput: '',
      regionOpen: false,
      regions: [
        { locale: 'en-us', label: 'USA', flag: '\u{1F1FA}\u{1F1F8}' },
        { locale: 'en-in', label: 'India', flag: '\u{1F1EE}\u{1F1F3}' },
        { locale: 'es-mx', label: 'Mexico', flag: '\u{1F1F2}\u{1F1FD}' }
      ]
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear()
    },
    currentRegionLabel() {
      const match = this.regions.find(r => r.locale === this.$i18n.locale)
      return match ? match.label : 'USA'
    }
  },
  methods: {
    handleEmail() {
      if (this.emailInput) {
        this.$router.push('/en-us/contact')
      }
    },
    toggleRegion() {
      this.regionOpen = !this.regionOpen
    },
    switchRegion(locale) {
      this.regionOpen = false
      if (process.browser) {
        this.$cookies.set('i18n_locale', locale, { path: '/', maxAge: 60 * 60 * 24 * 7 })
        this.$router.replace(this.switchLocalePath(locale))
      }
    },
    handleOutsideClick(e) {
      const el = this.$el.querySelector('.footer-region')
      if (el && !el.contains(e.target)) {
        this.regionOpen = false
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.handleOutsideClick)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleOutsideClick)
  }
}
</script>

<style scoped>
.footer {
  background: var(--navy);
  color: rgba(255, 255, 255, 0.72);
}

.footer-main {
  padding: 72px 0 48px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1.2fr 1fr 1fr;
  gap: 48px;
}

/* Brand */
.footer-logo-link {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: 12px;
}

.footer-logo-img {
  height: 32px;
  width: auto;
}

.footer-tagline {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--green);
  margin-bottom: 12px;
}

.footer-desc {
  font-size: 14px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.56);
  max-width: 320px;
  margin-bottom: 24px;
}

.footer-email-form {
  margin-bottom: 28px;
}

.footer-email-form .input-row input {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.16);
  color: var(--white);
}

.footer-email-form .input-row input::placeholder {
  color: rgba(255, 255, 255, 0.36);
}

.footer-email-form .input-row input:focus {
  border-color: var(--green);
  background: rgba(255, 255, 255, 0.12);
}

.footer-contact {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 13px;
  line-height: 1.5;
}

.contact-icon {
  font-size: 14px;
  margin-top: 1px;
  flex-shrink: 0;
}

.contact-item a {
  color: rgba(255, 255, 255, 0.64);
  text-decoration: none;
  transition: color 0.2s;
}

.contact-item a:hover {
  color: var(--green);
}

.contact-item span {
  color: rgba(255, 255, 255, 0.48);
}

/* Columns */
.footer-col-title {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--white);
  margin-bottom: 16px;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
}

.footer-links a {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.56);
  text-decoration: none;
  transition: color 0.2s;
}

.footer-links a:hover {
  color: var(--green);
}

/* Bottom Bar */
.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 20px 0;
}

.footer-bottom-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
}

.footer-copy {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.40);
}

/* Legal Links */
.footer-legal-links {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  font-size: 12px;
}

.footer-legal-links a {
  color: rgba(255, 255, 255, 0.44);
  text-decoration: none;
  transition: color 0.2s;
}

.footer-legal-links a:hover {
  color: var(--green);
}

.legal-sep {
  color: rgba(255, 255, 255, 0.24);
  font-size: 12px;
}

/* Footer Region Selector */
.footer-region {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.56);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  cursor: pointer;
  user-select: none;
  transition: border-color 0.2s, color 0.2s;
  white-space: nowrap;
}

.footer-region:hover,
.footer-region.open {
  border-color: var(--green);
  color: var(--green);
}

.footer-region-globe {
  display: flex;
  align-items: center;
  opacity: 0.7;
}

.footer-region-label {
  font-size: 12px;
  font-weight: 600;
}

.footer-region-arrow {
  display: flex;
  align-items: center;
  opacity: 0.5;
  transition: transform 0.2s;
}

.footer-region.open .footer-region-arrow {
  transform: rotate(180deg);
}

.footer-region-dropdown {
  position: absolute;
  bottom: calc(100% + 6px);
  right: 0;
  min-width: 148px;
  background: var(--navy);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.32);
  z-index: 2100;
  padding: 6px;
}

.footer-region-option {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 8px 10px;
  font-size: 13px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.64);
  background: none;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  text-align: left;
  transition: background 0.15s, color 0.15s;
  font-family: 'Inter', sans-serif;
}

.footer-region-option:hover {
  background: rgba(255, 255, 255, 0.08);
  color: var(--white);
}

.footer-region-option.active {
  color: var(--green);
  font-weight: 700;
}

.footer-region-flag {
  font-size: 16px;
  line-height: 1;
}

/* Backers */
.footer-backers {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
}

.backers-label {
  font-size: 12px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.36);
  letter-spacing: 0.04em;
  margin-right: 4px;
}

.backer {
  font-size: 12px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.48);
}

.backer-dot {
  color: rgba(255, 255, 255, 0.24);
  font-size: 12px;
}

@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }

  .footer-brand {
    grid-column: 1 / -1;
  }

  .footer-bottom-inner {
    gap: 16px;
  }
}

@media (max-width: 768px) {
  .footer-main {
    padding: 48px 0 32px;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .footer-brand {
    grid-column: auto;
  }

  .footer-bottom-inner {
    flex-direction: column;
    align-items: flex-start;
  }

  .footer-backers {
    gap: 4px;
  }

  .footer-legal-links {
    gap: 4px;
  }

  .footer-region-dropdown {
    right: auto;
    left: 0;
  }
}
</style>
