<template>
  <header class="nav-wrapper" :class="{ scrolled: isScrolled }">
    <div class="dc-container">
      <nav class="nav-inner">
        <!-- Logo -->
        <NuxtLink to="/en-us/" class="nav-logo" aria-label="Drip Capital Home">
          <img src="/redesign/logo.svg" alt="Drip Capital" class="nav-logo-img" />
        </NuxtLink>

        <!-- Desktop Links -->
        <ul class="nav-links">
          <!-- Products -->
          <li
            class="nav-item has-dropdown"
            @mouseenter="openDropdown('products')"
            @mouseleave="closeDropdown"
          >
            <button class="nav-trigger" :class="{ active: activeDropdown === 'products' }">
              Products
              <span class="nav-arrow">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </button>
            <div class="dropdown" :class="{ open: activeDropdown === 'products' }">
              <div class="dropdown-inner">
                <NuxtLink to="/en-us/vendor-financing" class="dropdown-item" @click="closeDropdown">
                  <div class="dropdown-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                      <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                  </div>
                  <div>
                    <div class="dropdown-label">Vendor Financing</div>
                    <div class="dropdown-desc">Pay vendors now, repay in 90 days</div>
                  </div>
                </NuxtLink>
                <NuxtLink to="/en-us/receivables-financing" class="dropdown-item" @click="closeDropdown">
                  <div class="dropdown-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2" y="5" width="20" height="14" rx="2"/>
                      <line x1="2" y1="10" x2="22" y2="10"/>
                    </svg>
                  </div>
                  <div>
                    <div class="dropdown-label">Receivables Financing</div>
                    <div class="dropdown-desc">Convert invoices to cash in 24–48 hrs</div>
                  </div>
                </NuxtLink>
                <NuxtLink to="/en-us/line-of-credit" class="dropdown-item" @click="closeDropdown">
                  <div class="dropdown-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="23 4 23 10 17 10"/>
                      <polyline points="1 20 1 14 7 14"/>
                      <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/>
                    </svg>
                  </div>
                  <div>
                    <div class="dropdown-label">Line of Credit</div>
                    <div class="dropdown-desc">Revolving credit, draw when you need it</div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </li>

          <!-- Industry -->
          <li
            class="nav-item has-dropdown"
            @mouseenter="openDropdown('industry')"
            @mouseleave="closeDropdown"
          >
            <button class="nav-trigger" :class="{ active: activeDropdown === 'industry' }">
              Industry
              <span class="nav-arrow">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </button>
            <div class="dropdown" :class="{ open: activeDropdown === 'industry' }">
              <div class="dropdown-inner">
                <NuxtLink to="/en-us/industry/manufacturing" class="dropdown-item" @click="closeDropdown">
                  <div class="dropdown-icon">
                    <RedesignAppIcon name="gear" :size="16" color="var(--green)" />
                  </div>
                  <div>
                    <div class="dropdown-label">Manufacturing</div>
                    <div class="dropdown-desc">Industrial & production businesses</div>
                  </div>
                </NuxtLink>
                <NuxtLink to="/en-us/industry/wholesale" class="dropdown-item" @click="closeDropdown">
                  <div class="dropdown-icon">
                    <RedesignAppIcon name="box" :size="16" color="var(--green)" />
                  </div>
                  <div>
                    <div class="dropdown-label">Wholesale</div>
                    <div class="dropdown-desc">Distribution & trade businesses</div>
                  </div>
                </NuxtLink>
                <NuxtLink to="/en-us/industry/agri-food" class="dropdown-item" @click="closeDropdown">
                  <div class="dropdown-icon">
                    <RedesignAppIcon name="leaf" :size="16" color="var(--green)" />
                  </div>
                  <div>
                    <div class="dropdown-label">Agri-Products</div>
                    <div class="dropdown-desc">Agriculture & food supply chains</div>
                  </div>
                </NuxtLink>
                <NuxtLink to="/en-us/industry/consumer-goods" class="dropdown-item" @click="closeDropdown">
                  <div class="dropdown-icon">
                    <RedesignAppIcon name="bag" :size="16" color="var(--green)" />
                  </div>
                  <div>
                    <div class="dropdown-label">Consumer Goods</div>
                    <div class="dropdown-desc">Retail & branded products</div>
                  </div>
                </NuxtLink>
                <NuxtLink to="/en-us/industry/seafood" class="dropdown-item" @click="closeDropdown">
                  <div class="dropdown-icon">
                    <RedesignAppIcon name="fish" :size="16" color="var(--green)" />
                  </div>
                  <div>
                    <div class="dropdown-label">Seafood</div>
                    <div class="dropdown-desc">Seafood importers & distributors</div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </li>

          <!-- Partner -->
          <li class="nav-item">
            <NuxtLink to="/en-us/partners" class="nav-trigger" active-class="nav-trigger-active">
              Partner
            </NuxtLink>
          </li>

          <!-- Company -->
          <li
            class="nav-item has-dropdown"
            @mouseenter="openDropdown('company')"
            @mouseleave="closeDropdown"
          >
            <button class="nav-trigger" :class="{ active: activeDropdown === 'company' }">
              Company
              <span class="nav-arrow">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </button>
            <div class="dropdown" :class="{ open: activeDropdown === 'company' }">
              <div class="dropdown-inner">
                <NuxtLink to="/en-us/about" class="dropdown-item" @click="closeDropdown">
                  <div class="dropdown-icon">
                    <RedesignAppIcon name="building" :size="16" color="var(--navy)" />
                  </div>
                  <div>
                    <div class="dropdown-label">About Us</div>
                    <div class="dropdown-desc">Our story and mission</div>
                  </div>
                </NuxtLink>
                <NuxtLink to="/en-us/investors" class="dropdown-item" @click="closeDropdown">
                  <div class="dropdown-icon">
                    <RedesignAppIcon name="trending" :size="16" color="var(--green)" />
                  </div>
                  <div>
                    <div class="dropdown-label">Our Investors</div>
                    <div class="dropdown-desc">World-class backers</div>
                  </div>
                </NuxtLink>
                <NuxtLink to="/en-us/contact" class="dropdown-item" @click="closeDropdown">
                  <div class="dropdown-icon">
                    <RedesignAppIcon name="mail" :size="16" color="var(--green)" />
                  </div>
                  <div>
                    <div class="dropdown-label">Contact Us</div>
                    <div class="dropdown-desc">Get in touch with our team</div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </li>

          <!-- Sign In -->
          <li class="nav-item">
            <a
              href="https://portal.dripcapital.com/login"
              target="_blank"
              rel="noopener noreferrer"
              class="nav-trigger"
            >Sign In</a>
          </li>

          <!-- Resources -->
          <li
            class="nav-item has-dropdown"
            @mouseenter="openDropdown('resources')"
            @mouseleave="closeDropdown"
          >
            <button class="nav-trigger" :class="{ active: activeDropdown === 'resources' }">
              Resources
              <span class="nav-arrow">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </button>
            <div class="dropdown" :class="{ open: activeDropdown === 'resources' }">
              <div class="dropdown-inner">
                <a href="https://www.dripcapital.com/en-us/resources/blog" target="_blank" rel="noopener noreferrer" class="dropdown-item" @click="closeDropdown">
                  <div class="dropdown-icon">
                    <RedesignAppIcon name="trending" :size="16" color="var(--green)" />
                  </div>
                  <div>
                    <div class="dropdown-label">Blog</div>
                    <div class="dropdown-desc">Insights & industry news</div>
                  </div>
                </a>
                <a href="https://www.dripcapital.com/hts-code" target="_blank" rel="noopener noreferrer" class="dropdown-item" @click="closeDropdown">
                  <div class="dropdown-icon">
                    <RedesignAppIcon name="clipboard" :size="16" color="var(--green)" />
                  </div>
                  <div>
                    <div class="dropdown-label">HTS Code Lookup</div>
                    <div class="dropdown-desc">Find tariff codes instantly</div>
                  </div>
                </a>
                <a href="https://www.dripcapital.com/us-customs-import-duty/" target="_blank" rel="noopener noreferrer" class="dropdown-item" @click="closeDropdown">
                  <div class="dropdown-icon">
                    <RedesignAppIcon name="chart" :size="16" color="var(--green)" />
                  </div>
                  <div>
                    <div class="dropdown-label">Customs Duty Calculator</div>
                    <div class="dropdown-desc">Estimate your import duty costs</div>
                  </div>
                </a>
                <a href="https://www.dripcapital.com/en-us/resources/finance-guides" target="_blank" rel="noopener noreferrer" class="dropdown-item" @click="closeDropdown">
                  <div class="dropdown-icon">
                    <RedesignAppIcon name="dollar" :size="16" color="var(--green)" />
                  </div>
                  <div>
                    <div class="dropdown-label">Glossary</div>
                    <div class="dropdown-desc">Trade finance terminology</div>
                  </div>
                </a>
                <a href="https://www.dripcapital.com/en-us/resources/finance-guides" target="_blank" rel="noopener noreferrer" class="dropdown-item" @click="closeDropdown">
                  <div class="dropdown-icon">
                    <RedesignAppIcon name="dollar" :size="16" color="var(--green)" />
                  </div>
                  <div>
                    <div class="dropdown-label">Finance Guides</div>
                    <div class="dropdown-desc">Working capital education</div>
                  </div>
                </a>
                <a href="https://www.dripcapital.com/en-us/resources/mediaroom" target="_blank" rel="noopener noreferrer" class="dropdown-item" @click="closeDropdown">
                  <div class="dropdown-icon">
                    <RedesignAppIcon name="zap" :size="16" color="var(--green)" />
                  </div>
                  <div>
                    <div class="dropdown-label">Media Room</div>
                    <div class="dropdown-desc">Press releases & media</div>
                  </div>
                </a>
              </div>
            </div>
          </li>
        </ul>

        <!-- CTA Area -->
        <div class="nav-cta">
          <!-- Region Toggle -->
          <div class="region-toggle" :class="{ open: regionOpen }" @click.stop="toggleRegion">
            <span class="region-globe">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
              </svg>
            </span>
            <span class="region-label">{{ currentRegionLabel }}</span>
            <span class="region-arrow">
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                <path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            <div class="region-dropdown" v-show="regionOpen" @click.stop>
              <button
                v-for="region in regions"
                :key="region.locale"
                class="region-option"
                :class="{ active: $i18n.locale === region.locale }"
                @click="switchRegion(region.locale)"
              >
                <span class="region-flag">{{ region.flag }}</span>
                <span>{{ region.label }}</span>
              </button>
            </div>
          </div>

          <a href="tel:+16504370150" class="nav-phone-cta">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 012 1.18 2 2 0 014 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            +1 650 437 0150
          </a>
          <NuxtLink to="/en-us/apply" class="dc-btn dc-btn-primary dc-btn-sm">Apply Now →</NuxtLink>
        </div>

        <!-- Hamburger -->
        <button class="hamburger" :class="{ open: mobileOpen }" @click="toggleMobile" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </div>

    <!-- Mobile Menu -->
    <div class="mobile-menu" :class="{ open: mobileOpen }">
      <div class="mobile-menu-inner">
        <div class="mobile-section">
          <div class="mobile-section-title">Products</div>
          <NuxtLink to="/en-us/vendor-financing" class="mobile-link" @click="closeMobile">Vendor Financing</NuxtLink>
          <NuxtLink to="/en-us/receivables-financing" class="mobile-link" @click="closeMobile">Receivables Financing</NuxtLink>
          <NuxtLink to="/en-us/line-of-credit" class="mobile-link" @click="closeMobile">Line of Credit</NuxtLink>
        </div>
        <div class="mobile-section">
          <div class="mobile-section-title">Industry</div>
          <NuxtLink to="/en-us/industry/manufacturing" class="mobile-link" @click="closeMobile">Manufacturing</NuxtLink>
          <NuxtLink to="/en-us/industry/wholesale" class="mobile-link" @click="closeMobile">Wholesale</NuxtLink>
          <NuxtLink to="/en-us/industry/agri-food" class="mobile-link" @click="closeMobile">Agri-Products</NuxtLink>
          <NuxtLink to="/en-us/industry/consumer-goods" class="mobile-link" @click="closeMobile">Consumer Goods</NuxtLink>
          <NuxtLink to="/en-us/industry/seafood" class="mobile-link" @click="closeMobile">Seafood</NuxtLink>
        </div>
        <div class="mobile-section">
          <NuxtLink to="/en-us/partners" class="mobile-link" @click="closeMobile">Partner</NuxtLink>
        </div>
        <div class="mobile-section">
          <div class="mobile-section-title">Company</div>
          <NuxtLink to="/en-us/about" class="mobile-link" @click="closeMobile">About Us</NuxtLink>
          <NuxtLink to="/en-us/investors" class="mobile-link" @click="closeMobile">Our Investors</NuxtLink>
          <NuxtLink to="/en-us/contact" class="mobile-link" @click="closeMobile">Contact Us</NuxtLink>
        </div>
        <div class="mobile-section">
          <div class="mobile-section-title">Resources</div>
          <a href="https://www.dripcapital.com/en-us/resources/blog" target="_blank" rel="noopener noreferrer" class="mobile-link" @click="closeMobile">Blog</a>
          <a href="https://www.dripcapital.com/hts-code" target="_blank" rel="noopener noreferrer" class="mobile-link" @click="closeMobile">HTS Code Lookup</a>
          <a href="https://www.dripcapital.com/us-customs-import-duty/" target="_blank" rel="noopener noreferrer" class="mobile-link" @click="closeMobile">Customs Duty Calculator</a>
          <a href="https://www.dripcapital.com/en-us/resources/finance-guides" target="_blank" rel="noopener noreferrer" class="mobile-link" @click="closeMobile">Finance Guides</a>
          <a href="https://www.dripcapital.com/en-us/resources/mediaroom" target="_blank" rel="noopener noreferrer" class="mobile-link" @click="closeMobile">Media Room</a>
        </div>
        <div class="mobile-section">
          <div class="mobile-section-title">Region</div>
          <button
            v-for="region in regions"
            :key="region.locale"
            class="mobile-link mobile-region-btn"
            :class="{ 'mobile-region-active': $i18n.locale === region.locale }"
            @click="switchRegion(region.locale); closeMobile()"
          >
            {{ region.flag }} {{ region.label }}
          </button>
        </div>
        <div class="mobile-cta">
          <NuxtLink to="/en-us/apply" class="dc-btn dc-btn-primary w-full" @click="closeMobile">Apply Now →</NuxtLink>
          <a href="tel:+16504370150" class="dc-btn dc-btn-outline w-full">+1 650 437 0150</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isScrolled: false,
      activeDropdown: null,
      mobileOpen: false,
      regionOpen: false,
      closeTimer: null,
      regions: [
        { locale: 'en-us', label: 'USA', flag: '\u{1F1FA}\u{1F1F8}' },
        { locale: 'en-in', label: 'India', flag: '\u{1F1EE}\u{1F1F3}' },
        { locale: 'es-mx', label: 'Mexico', flag: '\u{1F1F2}\u{1F1FD}' }
      ]
    }
  },
  computed: {
    currentRegionLabel() {
      const match = this.regions.find(r => r.locale === this.$i18n.locale)
      return match ? match.label : 'USA'
    }
  },
  methods: {
    openDropdown(name) {
      if (this.closeTimer) clearTimeout(this.closeTimer)
      this.activeDropdown = name
    },
    closeDropdown() {
      this.closeTimer = setTimeout(() => {
        this.activeDropdown = null
      }, 120)
    },
    toggleMobile() {
      this.mobileOpen = !this.mobileOpen
      if (this.mobileOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    },
    closeMobile() {
      this.mobileOpen = false
      document.body.style.overflow = ''
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 8
    },
    toggleRegion() {
      this.regionOpen = !this.regionOpen
    },
    closeRegion() {
      this.regionOpen = false
    },
    switchRegion(locale) {
      this.regionOpen = false
      if (process.browser) {
        this.$cookies.set('i18n_locale', locale, { path: '/', maxAge: 60 * 60 * 24 * 7 })
        this.$router.replace(this.switchLocalePath(locale))
      }
    },
    handleOutsideClick(e) {
      const toggle = this.$el.querySelector('.region-toggle')
      if (toggle && !toggle.contains(e.target)) {
        this.regionOpen = false
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
    document.addEventListener('click', this.handleOutsideClick)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
    document.removeEventListener('click', this.handleOutsideClick)
    document.body.style.overflow = ''
  }
}
</script>

<style scoped>
.nav-wrapper {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: var(--white);
  border-bottom: 1px solid var(--border);
  height: var(--nav-height);
  display: flex;
  align-items: center;
  transition: box-shadow 0.3s ease;
}

.nav-wrapper.scrolled {
  box-shadow: 0 2px 20px rgba(11, 31, 58, 0.08);
}

.nav-inner {
  display: flex;
  align-items: center;
  gap: 32px;
  height: var(--nav-height);
  width: 100%;
}

.nav-logo {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  text-decoration: none;
}

.nav-logo-img {
  width: 140px;
  height: auto;
  display: block;
}

.nav-phone-cta {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 13px;
  font-weight: 600;
  color: var(--navy);
  text-decoration: none;
  white-space: nowrap;
  border: 1.5px solid var(--border);
  border-radius: 8px;
  padding: 7px 14px;
  transition: border-color 0.2s, color 0.2s, background 0.2s;
  letter-spacing: -0.01em;
}

.nav-phone-cta:hover {
  border-color: var(--green);
  color: var(--green-d);
  background: rgba(0, 194, 124, 0.05);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1;
  list-style: none;
}

.nav-item {
  position: relative;
}

.nav-trigger {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 12px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: var(--body);
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  transition: color 0.2s, background 0.2s;
  text-decoration: none;
  white-space: nowrap;
}

.nav-trigger:hover,
.nav-trigger.active {
  color: var(--navy);
  background: var(--off);
}

.nav-trigger-active {
  color: var(--green) !important;
}

.nav-arrow {
  display: flex;
  align-items: center;
  opacity: 0.5;
  transition: transform 0.2s;
}

.nav-trigger.active .nav-arrow {
  transform: rotate(180deg);
}

/* Dropdown */
.dropdown {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  min-width: 260px;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow-lg);
  opacity: 0;
  transform: translateY(-8px);
  pointer-events: none;
  transition: opacity 0.2s ease, transform 0.2s ease;
  z-index: 2000;
}

.dropdown.open {
  opacity: 1;
  transform: translateY(0);
  pointer-events: all;
}

.dropdown-inner {
  padding: 8px;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.15s;
  cursor: pointer;
}

.dropdown-item:hover {
  background: var(--off);
}

.dropdown-icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: var(--off2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  color: var(--navy);
  flex-shrink: 0;
}

.dropdown-label {
  font-size: 13px;
  font-weight: 600;
  color: var(--navy);
  line-height: 1.2;
}

.dropdown-desc {
  font-size: 11px;
  color: var(--mid);
  margin-top: 2px;
}

/* CTA */
.nav-cta {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

/* Region Toggle */
.region-toggle {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 7px 10px;
  font-size: 13px;
  font-weight: 600;
  color: var(--navy);
  background: none;
  border: 1.5px solid var(--border);
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
  transition: border-color 0.2s, background 0.2s;
  white-space: nowrap;
}

.region-toggle:hover,
.region-toggle.open {
  border-color: var(--green);
  background: rgba(0, 194, 124, 0.05);
}

.region-globe {
  display: flex;
  align-items: center;
  opacity: 0.7;
}

.region-label {
  font-size: 13px;
  font-weight: 600;
}

.region-arrow {
  display: flex;
  align-items: center;
  opacity: 0.5;
  transition: transform 0.2s;
}

.region-toggle.open .region-arrow {
  transform: rotate(180deg);
}

.region-dropdown {
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 148px;
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow-lg);
  z-index: 2100;
  padding: 6px;
}

.region-option {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 8px 10px;
  font-size: 13px;
  font-weight: 500;
  color: var(--body);
  background: none;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  text-align: left;
  transition: background 0.15s, color 0.15s;
}

.region-option:hover {
  background: var(--off);
  color: var(--navy);
}

.region-option.active {
  color: var(--green);
  font-weight: 700;
}

.region-flag {
  font-size: 16px;
  line-height: 1;
}

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 8px;
  background: none;
  border: none;
  cursor: pointer;
  margin-left: auto;
}

.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--navy);
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.hamburger.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
}

.hamburger.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile menu */
.mobile-menu {
  display: none;
  position: fixed;
  top: calc(var(--topbar-height) + var(--nav-height));
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--white);
  z-index: 999;
  overflow-y: auto;
  transform: translateX(100%);
  transition: transform 0.3s ease;
}

.mobile-menu.open {
  transform: translateX(0);
}

.mobile-menu-inner {
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.mobile-section {
  padding: 8px 0;
  border-bottom: 1px solid var(--border);
}

.mobile-section:last-of-type {
  border-bottom: none;
}

.mobile-section-title {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--mid);
  margin-bottom: 8px;
  padding: 0 4px;
}

.mobile-link {
  display: block;
  padding: 10px 4px;
  font-size: 15px;
  font-weight: 500;
  color: var(--body);
  text-decoration: none;
  border-radius: 6px;
  transition: color 0.2s;
}

.mobile-link:hover {
  color: var(--green);
}

.mobile-region-btn {
  width: 100%;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: 'Inter', sans-serif;
}

.mobile-region-active {
  color: var(--green) !important;
  font-weight: 700;
}

.mobile-cta {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 16px;
}

@media (max-width: 1024px) {
  .nav-links {
    display: none;
  }

  .nav-cta {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  .mobile-menu {
    display: block;
  }
}

@media (max-width: 768px) {
  .nav-logo-img {
    width: 120px;
    height: auto;
  }
}
</style>
