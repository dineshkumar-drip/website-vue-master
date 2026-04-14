<template>
  <div>
    <!-- New en-us redesign -->
    <div v-if="isUsRedesign" class="dc-new">
      <RedesignAppTopBar />
      <RedesignAppNav />

      <!-- Hero -->
      <section class="page-hero page-hero--short">
        <div class="dc-container">
          <span class="eyebrow reveal reveal-delay-0">Legal</span>
          <h1 class="reveal reveal-delay-1">Terms of Use</h1>
        </div>
      </section>

      <!-- Content -->
      <section class="section">
        <div class="dc-container legal-container">
          <h2 class="legal-doc-title">Drip Capital, Inc. Terms of Service</h2>

          <p class="legal-intro">{{ subtitle }}</p>

          <div v-for="(item, i) in content" :key="i" class="legal-section">
            <h3 class="legal-item-title">{{ item.title }}</h3>

            <template v-if="item.hasLink">
              <p v-for="(desc, j) in item.desc" :key="j" class="legal-body">
                {{ desc.line1 }}
                <NuxtLink to="/en-us/privacy-policy">{{ desc.line2 }}</NuxtLink>
                {{ desc.line3 }}
              </p>
            </template>
            <template v-else>
              <p v-for="(desc, j) in item.desc" :key="j" class="legal-body">{{ desc }}</p>
            </template>
          </div>

          <div class="legal-conclude">
            {{ conclude }}
          </div>
        </div>
      </section>

      <RedesignAppFooter />
    </div>
    <!-- Existing design for all other locales -->
    <page-section v-else section-class="page-terms-of-use">
      <main-header :defaultLightHeader="true" />
      <terms />
      <main-footer />
    </page-section>
  </div>
</template>

<script>
import MainHeader from '~/components/MainHeader'
import MainFooter from '~/components/footer/MainFooter'
import PageSection from '~/components/PageSection'
import Terms from '~/components/Terms'

export default {
  nuxtI18n: {
    paths: {
      en: '/terms-of-use',
      es: '/terminos-de-uso'
    }
  },
  data() {
    return {
      title: this.$t('pages.terms.title'),
      description: this.$t('pages.terms.description'),
      subtitle: 'The following terms and conditions of service ("Terms of Service") apply to all visitors of DripCapital.com website and associated web pages ("Website"). By accessing this website, you hereby accept the following terms and conditions. IF YOU DO NOT WISH TO BE BOUND BY THESE TERMS OF USE, PLEASE CLOSE THE BROWSER OR REFRAIN FROM USING THIS WEBSITE FURTHER. This Terms of Service is made available by Drip Capital, Inc. and its affiliates (collectively, "Drip Capital" or "we" or "us".)',
      content: [
        {
          title: 'Authorization to Access the Website',
          desc: [
            'Your right to use the Website is personal to you. You agree not to reproduce, duplicate, copy, sell, resell, use or exploit for any commercial purposes, the Website or use of or access to the Website or any information or technology obtained from the Website. The contents of the Website, including, without limitation, any content, images, logos and other material are protected under both United States and foreign copyright, patent, trademark, and other laws of Drip Capital.'
          ]
        },
        {
          title: 'Changes and Modifications to the Website',
          desc: [
            'Drip Capital may change the Terms of Use from time to time without notice to you. Please review these Terms of Use from time to time, because your continued access or use of the Website after any modifications have become effective shall be deemed your conclusive acceptance of the modified Terms of Use.',
            'Drip Capital reserves the right to temporarily or permanently modify or discontinue the Website, or any portion of the Website, for any reason, at our sole discretion, and without notice to you.'
          ]
        },
        {
          title: 'Account Registration and Loan Application',
          desc: [
            'You may be required to create a personalized account to use of the certain parts of the Website. When you create an account, you will be required to pick a user name and a password. You are fully responsible for maintaining the security and confidentiality of your user name and password. If you learn of any unauthorized use of your password or account, please contact us immediately at cs@dripcapital.com.',
            'You may elect to apply for a loan or determine eligibility for a loan by completing our loan application form. You represent and warranty that any information provided by you is complete and accurate description of your financial situation. We reserve the right to terminate any application, refuse to offer a loan, or decline to make the Website available to you if any information provided by you is not complete and accurate.',
            'Drip Capital will keep the application and any other information disclosed by Applicant confidential. Applicant understands that Drip Capital Inc. intends to rely on the foregoing information in determining whether to enter into a factoring arrangement, and applicant authorizes Drip Capital Inc. to do so. Applicant also understands that the foregoing information may be incorporated by reference into an agreement between Applicant and Drip Capital Inc and any failure of Applicant to disclose truly, completely and correctly the information requested may constitute a breach of any such agreement. Applicant understands further that Drip Capital Inc. has not, by requesting the completion of or accepting this application form, committed to make or implied an intention or commitment to enter into a factoring arrangement with Applicant.',
            'By submitting application, you declare that the information submitted by you in the application is correct to the best of your knowledge and you have not wilfully withheld any material information, adverse or otherwise, that may influence our decision.'
          ]
        },
        {
          title: 'Privacy Policy',
          hasLink: true,
          desc: [
            {
              line1: 'Our',
              line2: 'Privacy Policy',
              line3: 'explains how we will use and protect any personal information you may elect to provide or that we may otherwise obtain.'
            }
          ]
        },
        {
          title: 'Disclaimers',
          desc: [
            'Drip Capital assumes no responsibility for the accuracy of any information made available on this Website or our products. Any information available on this Website, including information on our products is subject to change without notice. Drip Capital may make improvements and/or changes in the products set forth in this Website at any time and without prior notice. Any mention of third party products or third party websites is for information purposes only and constitutes neither an endorsement nor a recommendation from Drip Capital.',
            'ALL INFORMATION PROVIDED ON THIS WEB SITE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT OF INTELLECTUAL PROPERTY.',
            'TO THE EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL DRIP CAPITAL, OR ANY OF ITS AFFILIATES, PARTNERS, SUPPLIERS OR DISTRIBUTORS, BE LIABLE TO ANY PERSON FOR ANY GENERAL, DIRECT, SPECIAL, INCIDENTAL, INDIRECT OR CONSEQUENTIAL DAMAGES, INCLUDING, WITHOUT LIMITATION, DAMAGES RESULTING FROM USE OF OR RELIANCE ON THE INFORMATION PRESENTED, LOSS OF PROFITS OR REVENUES OR COSTS OF REPLACEMENT GOODS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE, TORT OR OTHERWISE, ARISING OUT OF OR IN CONNECTION WITH THE USE OF OUR WEB SITE OR ANY HYPERLINKED SITE, EVEN IF DRIP CAPITAL HAS BEEN INFORMED IN ADVANCE OF THE POSSIBILITY OF SUCH DAMAGES.'
          ]
        },
        {
          title: 'Governing Law',
          desc: [
            'Drip Capital operates this web site from its offices in the State of California, in the United States. Use of this web site or any information or materials made available by us through this web site is governed by the laws of the State of California, United States, without reference to conflict of law provisions. Any dispute arising out of or related to your use of this site will be brought in, and you hereby consent to exclusive jurisdiction and venue in, the state and federal courts sitting in Santa Clara County, California. You agree to waive all defenses of lack of personal jurisdiction and forum non-conveniens and agree that process may be served in a manner authorized by applicable law or court rule. Any cause of action you may have with respect to your use of the web site must be commenced within one (1) year after the claim or cause of action arises. If for any reason a court of competent jurisdiction finds any provision of the foregoing terms and conditions or portion thereof, to be unenforceable, that provision shall be enforced to the maximum extent permissible so as to effect the intent hereof, and the remainder of the terms and conditions shall continue in full force and effect.'
          ]
        }
      ],
      conclude: '\u00A9 Copyright 2018, Drip Capital, Inc. ALL RIGHTS RESERVED'
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
          href: 'https://www.dripcapital.com/terms-of-use',
          hreflang: 'en'
        },
        {
          hid: `alternate-hreflang-en-in`,
          rel: 'alternate',
          href: 'https://www.dripcapital.com/en-in/terms-of-use',
          hreflang: 'en-in'
        },
        {
          hid: `alternate-hreflang-en-us`,
          rel: 'alternate',
          href: 'https://www.dripcapital.com/en-us/terms-of-use',
          hreflang: 'en-us'
        },
        {
          hid: `alternate-hreflang-en-mx`,
          rel: 'alternate',
          href: 'https://www.dripcapital.com/es-mx/terms-of-use',
          hreflang: 'es-mx'
        }
      ]
    }
  },
  head() {
    if (this.isUsRedesign) {
      return {
        title: 'Terms of Use | Drip Capital',
        meta: [
          { hid: 'description', name: 'description', content: 'Drip Capital terms of use. Read our terms and conditions for using our website and services.' },
          { hid: 'og:title', property: 'og:title', content: 'Terms of Use | Drip Capital' },
          { hid: 'og:description', property: 'og:description', content: 'Drip Capital terms of use. Read our terms and conditions for using our website and services.' }
        ],
        link: [
          { rel: 'canonical', href: 'https://www.dripcapital.com/en-us/terms-of-use' },
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
    Terms
  }
}
</script>

<style scoped>
/* ── Hero (short variant) ──────────────────────────────────────────────────── */
.page-hero--short {
  padding-bottom: 48px;
}

/* ── Legal Container ───────────────────────────────────────────────────────── */
.legal-container {
  max-width: 800px;
}

.legal-doc-title {
  font-size: 28px;
  font-weight: 800;
  color: var(--navy);
  margin-bottom: 24px;
  letter-spacing: -0.02em;
}

.legal-intro {
  font-size: 15px;
  color: var(--body);
  line-height: 1.8;
  margin-bottom: 40px;
}

.legal-section {
  margin-bottom: 32px;
}

.legal-item-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 12px;
}

.legal-body {
  font-size: 15px;
  color: var(--body);
  line-height: 1.8;
  margin-bottom: 12px;
}

.legal-body a {
  color: var(--navy);
  text-decoration: underline;
}

.legal-body a:hover {
  color: var(--green);
}

.legal-conclude {
  font-size: 14px;
  font-weight: 700;
  color: var(--mid);
  padding-top: 32px;
  border-top: 1px solid var(--border);
  margin-top: 48px;
}

@media (max-width: 640px) {
  .legal-doc-title {
    font-size: 22px;
  }

  .legal-item-title {
    font-size: 16px;
  }
}
</style>
