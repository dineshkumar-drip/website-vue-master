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
          <h1 class="reveal reveal-delay-1">Privacy Policy</h1>
        </div>
      </section>

      <!-- Content -->
      <section class="section">
        <div class="dc-container legal-container">
          <h2 class="legal-doc-title">Drip Capital, Inc. Privacy Policy</h2>

          <p class="legal-intro" v-html="subtext"></p>

          <ol class="legal-list">
            <li v-for="(item, i) in list" :key="i" class="legal-item">
              <h3 class="legal-item-title">{{ item.title }}</h3>

              <div v-if="item.body" class="legal-body" v-html="item.body"></div>

              <ol v-if="item.hasList && item.innerList" type="a" class="legal-sublist">
                <li v-for="(sub, x) in item.innerList" :key="x" class="legal-subitem">
                  <div v-html="sub.content"></div>

                  <ol v-if="sub.hasList && sub.deepList" type="i" class="legal-deeplist">
                    <li v-for="(deep, y) in sub.deepList" :key="y">
                      <div v-html="deep.content"></div>
                    </li>
                  </ol>
                </li>
              </ol>

              <div v-if="item.appendText" class="legal-body legal-append" v-html="item.appendText"></div>
            </li>
          </ol>
        </div>
      </section>

      <RedesignAppFooter />
    </div>
    <!-- Existing design for all other locales -->
    <page-section v-else section-class="page-privacy-policy">
      <main-header :defaultLightHeader="true" />
      <privacy />
      <main-footer :isNewBranding="true" />
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
      en: '/privacy-policy'
    }
  },
  data() {
    return {
      title: this.$t('pages.privacy.title'),
      description: this.$t('pages.privacy.description'),
      subtext: 'This Privacy Policy ("<b>Policy</b>") describes the Personal Information that Drip Capital Inc. and its affiliates ("<b>Drip Capital</b>" or "<b>Company</b>" or "<b>DC</b>") may collect about you, how we use or Process; and protect this information, and the choices you can make about how we use this information.',
      list: [
        {
          title: 'Introduction',
          body: 'This Policy establishes the policy, procedures and controls for privacy in line with all applicable regulatory, operational and contractual requirements and sets out how DC collects, stores, Processes, transfers, shares and uses Personal Information when you use DC\'s website or services. DC has built a strong privacy framework in alignment with identified requirements from California Privacy Rights Act ("<b>CPRA</b>"), as well as certificate from ISO 27001. When you access the website, or use our products and/ or services, you acknowledge that you have read this Policy and understood its contents.',
          hasList: false
        },
        {
          title: 'Definitions',
          body: 'Unless defined elsewhere in this Policy, capitalized terms have the following meanings:',
          hasList: true,
          innerList: [
            { content: '"Personal Information" means any personally identifiable information that relates to a natural person, which, either directly or indirectly, or in combination with other information available or likely to be available with a body corporate, is capable of identifying such a person.' },
            { content: '"Processing" includes the collection, recording, organization, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure or otherwise making available, alignment or combination, restriction, erasure or destruction of Personal Information.' },
            { content: '"Sensitive Personal Information" means Personal Information that also comprises information relating to passwords, financial information, physical, physiological and/ or mental health conditions, sexual orientation, biometric information, geolocation. Sensitive Personal Information does not include information that is freely available or accessible in the public domain or furnished under any law for the time being in force.' }
          ]
        },
        {
          title: 'Restricted Collection of Information',
          hasList: true,
          innerList: [
            { content: 'DC will only collect Personal Information that is consented to by you. Collecting such Personal Information enables us to offer you services that help you with your business needs. Depending on the business need you apply for, DC collects information necessary to set up and maintain that business service.' },
            { content: 'You can always deny or withdraw your consent at a later stage as per the process described in subsequent sections further, in accordance with regional applicable laws.' },
            { content: 'If you would like to know the name and addresses of agencies, which are associated with DC to collect and retain your Information, you can contact <a href="mailto:privacy@dripcapital.com">privacy@dripcapital.com</a>.' }
          ]
        },
        {
          title: 'Access to and Modification of Personal Information',
          hasList: true,
          innerList: [
            { content: 'You can, at any time, request access to your Personal Information being stored or processed by DC, in accordance with applicable laws. DC will respond to your request as per the established procedures. DC has reasonable procedures in place, to enable you to access the information being stored and/or Processed by us. You can also exercise your right to amend inaccurate or incomplete Personal Information, in accordance with applicable laws.' },
            { content: 'Contact <a href="mailto:privacy@dripcapital.com">privacy@dripcapital.com</a> to know more about how to access or modify your Personal Information with DC.' },
            { content: 'The Policy is only applicable to the Personal Information being shared by you and does not apply to information interpreted for offering business services to you. DC also reserves the right not to share any information being collected from other sources, such as background check agencies, credit agencies, etc., pursuant to a request made hereunder. To provide you access to information quickly and easily, the information requested will be provided in the prescribed format as per DC\'s internal guidelines.' }
          ]
        },
        {
          title: 'Option to Consent',
          hasList: true,
          innerList: [
            { content: 'The consent to Personal Information is always voluntary, informed and current.' },
            { content: 'DC gives customers an option to withdraw consent, in accordance with applicable laws, for using your Personal Information being granted to us. In that case, you may approach privacy@dripcapital.com. However, in such cases, DC may not be able to continue to provide you with the business services or where applicable, the same level of services, for which the Personal Information was not provided by you.' }
          ]
        },
        {
          title: 'Processing of Information',
          hasList: true,
          innerList: [
            {
              content: 'DC may Process your Personal Information for the following purposes:',
              hasList: true,
              deepList: [
                { content: 'performing obligations under or in connection with your contract of agreement with us as per the business service availed' },
                { content: 'managing and terminating our agreement relationship with you' },
                { content: 'performing obligations under or in connection with the provision of our services to our clients' },
                { content: 'planning and managing the day-to-day work and operations' },
                { content: 'executing the formalities related to the termination of the contract' },
                { content: 'facilitating our compliance with laws, customs and regulations which may be applicable to us from time to time' }
              ]
            },
            { content: 'The purposes listed in the above clauses may continue to apply even in situations where your relationship with us (for example, pursuant to a contract) has been terminated or altered in any way, for a reasonable period thereafter (including, where applicable, a period to enable us to enforce our rights under any contract with you).' },
            { content: 'Every DC employee/business associate/relevant individual, who deals with or comes into contact with Personal Information of a customer regardless of its origin, shall have a responsibility to comply with the applicable law concerning data privacy, this policy and specific privacy practices.' },
            { content: 'Each such person should seek advice in the event of any ambiguity while dealing with Personal Information or in understanding this Policy.' },
            {
              content: 'DC ensures that its employees/relevant Individuals shall be diligent and extend caution while dealing with Personal Information of customers, in the course of performance of their duties and shall also, at all times, will:',
              hasList: true,
              deepList: [
                { content: 'respect Personal Information that they have access to and treat it in the manner in which they would expect their personal details to be treated.' },
                { content: 'prevent any unauthorized person from having access to any computer systems Processing Personal Information, and especially any: (1) unauthorized reading, copying, alteration, deletion or removal of data; or (2) unauthorized data input, disclosure, uploading, transmission/transfer of Personal Information; (3) abide by DC information security and privacy policies and procedures;' },
                { content: 'ensure that authorized users of a data-processing system can access only the Personal Information to which their access right refers;' },
                { content: 'keep a record of which Personal Information has been shared, when and to whom;' },
                { content: 'not provide any Personal Information to any third party without appropriate approvals;' },
                { content: 'Ensure that, during the communication of Personal Information and transfer of storage media, the data cannot be read, copied or erased without authorization.' },
                { content: 'immediately, on becoming aware, report and notify any vulnerabilities and privacy-related breach/security breaches (including potential risks) to the concerned personnel within DC.' }
              ]
            },
            { content: 'DC takes non-compliance with this policy by DC\'s employees very seriously and may take disciplinary actions including but not limited to dismissal or termination.' }
          ]
        },
        {
          title: 'Sharing and Disclosure of Information with Third Parties',
          hasList: true,
          innerList: [
            {
              content: 'DC may share your Personal Information with third parties when necessary to provide you with products or services, or as part of the regular course of our relationship with you. Such disclosures will only occur where:',
              hasList: true,
              deepList: [
                { content: 'You have been previously informed or have provided consent;' },
                { content: 'The disclosure is required to prevent fraud, detect security incidents, or protect against illegal activity; or' },
                { content: 'It is otherwise permitted or required by applicable law.' }
              ]
            },
            { content: 'DC will disclose Personal Information to third parties only with your prior consent, or pursuant to a contractual relationship. However, in certain situations, such as lawful requests from government authorities, regulatory obligations, or compliance with a court order, DC may disclose your Personal Information without prior notice or consent, as permitted or required by law.' },
            { content: 'DC may collect information about how you use or connect to our Website, or the types of other websites, social media services, content and ads that you view to customize the ads on our Website, that are visible to you when you visit our Website or use our products or services. DC has established procedures which will reasonably ensure that your Personal Information will not be disclosed by us or any agencies/ third party associated with us, any further than absolutely required.' }
          ]
        },
        {
          title: 'Recipients of Personal Information',
          body: 'In connection with providing you the services requested, DC may engage with the certain third parties set forth below:',
          hasList: true,
          innerList: [
            { content: 'Credit bureaus/credit information companies ("<b>CICs</b>"): DC may share your Personal Information with credit bureaus/credit information companies to fetch the relevant credit data required for risk assessments so as to be able provide our services.' },
            { content: 'Risk Services: DC works with external third parties to evaluate the risk of transactions to gather information which is used by DC to validate and verify transactions.' },
            { content: 'Insurance: DC may share your Personal Information with insurance providers or insurance brokers to assess the risk and evaluate credit insurance coverage for specified transactions.' },
            { content: 'Law enforcement, regulators and other parties for legal reasons: DC may share your Personal Information with third parties as required by law or if DC reasonably believes that such action is necessary to: (x) comply with the law and the reasonable requests of law enforcement; (y) detect and investigate illegal activities and breaches of agreements; and/or (z) exercise or protect the rights, property, or personal safety of DC, its users or others.' },
            { content: 'Service Providers: DC may share your Personal Information with our external service providers including law firms, collection agencies, partners, and other consultants in connection with due diligence, underwriting and/ or enforcement of our contractual rights.' },
            { content: 'Marketing and advertising: DC may contact you with information about our products and services, including sending you marketing messages and asking for your feedback on our products and services. Most marketing messages DC sends will be by email. For some marketing messages, DC may use Personal Information DC collects about you to help us determine the most relevant marketing information to share with you. DC may need to contact you by email or via our support team.' }
          ]
        },
        {
          title: 'Security and Confidentiality',
          hasList: true,
          innerList: [
            { content: 'DC will keep your Personal Information confidential and limit access to those who specifically need it to conduct their business activities, except as otherwise permitted by applicable law. DC refers to industry standards and uses reasonable administrative, technical and physical security measures to protect your Personal Information from unauthorized access, destruction, use, modification or disclosure.' },
            { content: 'A robust Information Security Management system ("<b>ISMS</b>") has been established within DC that governs the systems and practices aligned with global best practices and certified under the ISO/IEC 27001:2013 standard. The system is subject to strong controls including ongoing monitoring, periodic Security testing, internal/external audits and verifications. DC also ensures that any business associates/ subcontractors/ subsidiaries/ third party agencies engaged to Process your Personal Information also adhere to the reasonable security practices to protect your Personal Information to provide the same level of protection for data as required under the Principles and applicable laws and regulations.' }
          ]
        },
        {
          title: 'Integrity and Retention of Personal Information',
          body: 'DC uses appropriate technology and well-defined employee practices to Process your data promptly and accurately. DC will not keep your Personal Information longer than is necessary, except as otherwise required by applicable law. DC will retain your personal data for as long as required for the purposes for which it was collected and in compliance with our obligations under legal, regulatory, tax, accounting, and necessary technical requirements.',
          hasList: false
        },
        {
          title: 'Transfer of Information',
          hasList: true,
          innerList: [
            { content: 'DC is committed to ensuring that Personal Information is stored in respective regions as much as possible, in alignment with the applicable laws and regulations.' },
            { content: 'However, in certain scenarios, DC might need to transfer and store the data in the US or in India or in another region/country in alignment with the corporate information and technology architecture and practices. Whenever such a need for inter-country transfer arises, the company will ensure adequate compliance with the laws and regulations through measures such as ensuring that the data transfer is in alignment with the applicable acts and regulations and/or any restriction of Processing is limited to only those as required for the fulfillment of the employment contract and related requirements and commitments; and adequate controls and reasonable security practices are put in place to ensure effective data protection on par with the requirement of the acts and regulations.' }
          ]
        },
        {
          title: 'Privacy Grievance Redressal',
          body: 'Any concerns, disputes, discrepancies or grievances with respect to the Processing of Personal Information can be referred to the directed to <a href="mailto:privacy@dripcapital.com">privacy@dripcapital.com</a>. We will redress the grievance within 45 days from the date of receipt of any such grievance. This channel is specific for privacy related grievances. All anonymous or third-person grievances would not be registered / acted upon.',
          hasList: false
        },
        {
          title: 'Changes to Privacy Policy',
          body: 'DC reserves the right to update this Policy at any time, as a part of our continual improvement and in order to comply with applicable law. DC will provide you with access to the updated Policy as and when DC makes any changes on our website.',
          hasList: false
        },
        {
          title: 'Further questions',
          body: 'If you have any questions or need further information regarding this policy, you may contact us at <a href="mailto:privacy@dripcapital.com">privacy@dripcapital.com</a>.',
          hasList: false
        },
        {
          title: "Customer's rights on their Personal Information - California-US residents only",
          body: 'In accordance with applicable privacy law, you have the following rights in respect of your Personal Information that DC holds:',
          hasList: true,
          innerList: [
            { content: 'Right to Delete: A customer has the right to request for deletion of Personal Information all in full or partial. DC has the right to store, maintain and Process all or any information which is not personal.' },
            { content: 'Right to Correct: A customer has the right to request for modification or updation of Personal Information collected by DC if seen as inaccurate or incorrect by the customer.' },
            {
              content: 'Right to Access/Know: A customer has the right to request to disclose the following about the Personal Information collected about the customer over the past 12 months:',
              hasList: true,
              deepList: [
                { content: 'The categories of Personal Information collected' },
                { content: 'The categories of sources from which the Personal Information was collected' },
                { content: 'The categories of third parties to which/whom the Personal Information was disclosed' },
                { content: 'The purpose of collecting and sharing Personal Information' },
                { content: 'The actual Personal Information collected in full' }
              ]
            },
            {
              content: 'Right to know what Personal Information is sold and to whom:',
              hasList: true,
              deepList: [
                { content: 'A customer has the right to request to disclose what or if the Personal Information is sold to a third party.' },
                { content: 'DC never sells Personal Information collected to third parties. Refer to Notice of Collection of Information.' }
              ]
            },
            {
              content: 'Right to opt-out of sale or sharing of Personal Information:',
              hasList: true,
              deepList: [
                { content: 'A customer has the right, at any time, to direct DC to stop sharing Personal Information with third parties.' }
              ]
            },
            {
              content: 'Right to limit usage of Personal Information:',
              hasList: true,
              deepList: [
                { content: 'A customer has the right, at any time, to direct DC to limit the usage of the Personal Information to that use which is necessary for DC to perform its services.' }
              ]
            },
            {
              content: 'Right to no Retaliation following opt-out or Exercise of other rights:',
              hasList: true,
              deepList: [
                { content: 'DC shall not discriminate against a customer who has exercised one or more of the rights above.' }
              ]
            }
          ],
          appendText: 'Californian customers can exercise said rights by making a request as follows: <br/> Contacting us on our toll-free number at +1 (888) 402 9440 <br/> Submitting your request at <a href="mailto:privacy@dripcapital.com">privacy@dripcapital.com</a>.'
        },
        {
          title: 'Notice of Collection of Information',
          body: 'This Notice outlines the basis on which DC will Process Personal Information of individuals, including but not limited to customers, clients, vendors, service providers, business partners, employees, contractors, and any other persons interacting with DC, in accordance with applicable data protection laws and regulations. DC may collect Personal Information based on your consent, including, without limitation, your:',
          hasList: true,
          innerList: [
            { content: 'Company Name' },
            { content: 'Location' },
            { content: 'Contact details including mailing address, telephone numbers, email address' },
            { content: 'Registration details' },
            { content: 'Company identification number' },
            { content: 'Other relevant identification details' },
            { content: 'Details of financial health' },
            { content: 'Credit history' },
            { content: 'Financial information' },
            { content: 'Account number and other relevant details' },
            { content: 'Bank account details' },
            { content: 'Tax-related information' },
            { content: 'Photographs and other relevant audio-visual information' },
            { content: 'Records related to usage, access, surveillance, etc., within DC premises and systems' },
            { content: 'Owner Identification Number (locally specific)' },
            { content: 'Contact information of persons associated with the company' },
            { content: 'Any additional information provided to us by you as our customer' }
          ]
        },
        {
          title: "Children's Personal Information",
          body: 'We do not provide our Services to children. We do not knowingly collect Personal Information (as defined by the U.S. Children\'s Privacy Protection Act, or "COPPA") from children under 13. We also do not knowingly "share" or "sell," as those terms are defined under the California Privacy Rights Act, the Personal Information of minors under 16 who are California residents. If you are a parent or guardian and believe we have violated this provision, please reach out to <a href="mailto:privacy@dripcapital.com">privacy@dripcapital.com</a>.',
          hasList: false
        },
        {
          title: 'Cookies',
          body: 'DC may collect information relating to such matters as the total number of visits to this website, the number of visitors to each page of this website, the Internet Protocol ("IP") addresses of our visitors, and the time spent on this Website. DC may use this information, to understand how our visitors use this Website so that DC can improve it. DC may also use your IP address to help diagnose problems with our servers and for purposes of system administration. DC may share aggregated, non-personal information with our agents, business partners, consultants, or other third parties. Some non-personal information may be collected through cookies. Cookies can enable us to track the interests of our users to enhance their experience on this Website and to deliver content specific to a user\'s interests. These cookies are generally not linked to Personal Information. If you request that the Website store your username and/or password, the cookie will be linked to your username and/or password and hence will track your navigation path around the Website. You may delete or decline the cookie using the tools in your web browser. Although you may still use this website without the cookie, some parts of the website may not work properly for you.',
          hasList: false
        },
        {
          title: 'Third-Party Websites',
          body: 'Our website may contain links to third-party websites, applications, or services that are not operated or controlled by us. These third parties may collect Personal Information from you independently, including through cookies, pixels, or other tracking technologies when you interact with their content on our website.',
          hasList: false,
          appendText: 'Please note that this Policy does <b>not apply</b> to third-party websites or services, and we are <b>not responsible</b> for the privacy practices, data handling, or security measures of such third parties. We encourage you to review the privacy policies of any third-party websites or services you visit before providing them with your Personal Information. <br/><br/> Last updated on 30 April 2025.'
        }
      ]
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
        title: 'Privacy Policy | Drip Capital',
        meta: [
          { hid: 'description', name: 'description', content: 'Drip Capital privacy policy. Learn how we collect, use, and protect your personal information.' },
          { hid: 'og:title', property: 'og:title', content: 'Privacy Policy | Drip Capital' },
          { hid: 'og:description', property: 'og:description', content: 'Drip Capital privacy policy. Learn how we collect, use, and protect your personal information.' }
        ],
        link: [
          { rel: 'canonical', href: 'https://www.dripcapital.com/en-us/privacy-policy' },
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

/* ── Numbered list ─────────────────────────────────────────────────────────── */
.legal-list {
  list-style: decimal;
  padding-left: 24px;
  margin: 0;
}

.legal-item {
  margin-bottom: 32px;
  padding-left: 8px;
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

.legal-append {
  margin-top: 12px;
}

/* ── Sublists ──────────────────────────────────────────────────────────────── */
.legal-sublist {
  padding-left: 24px;
  margin: 8px 0 0;
}

.legal-subitem {
  font-size: 15px;
  color: var(--body);
  line-height: 1.8;
  margin-bottom: 8px;
}

.legal-deeplist {
  padding-left: 24px;
  margin: 8px 0 0;
}

.legal-deeplist li {
  font-size: 14px;
  color: var(--body);
  line-height: 1.8;
  margin-bottom: 4px;
}

/* ── Links inside legal text ───────────────────────────────────────────────── */
.legal-container >>> a,
.legal-container a {
  color: var(--navy);
  text-decoration: underline;
}

.legal-container >>> a:hover,
.legal-container a:hover {
  color: var(--green);
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
