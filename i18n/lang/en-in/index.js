module.exports = {
  urls: {
    howItWorks: '/#how-it-works',
    investors: '/invest-in-trade-receivables',
    investorsFooter: '/investors',
    importers: '/importer-credit-program',
    contact: '/contact',
    about: '/about',
    careers: '/careers',
    support: '/support',
    intCalc: '/interest-calculator',
    fieo: '/partners/fieo',
    channelPartner: '/partners',
    buyerFinance: '/landing/buyer-finance',
    importersApply: '/importers/apply',
    advanceAgainstPO: '/advance-against-po',
    links: {
      resources: '/en-in/resources',
      blog: '/en-in/resources/blog',
      hsncode: '/hsn-code',
      newsroom: '/en-in/resources/mediaroom',
      financeGuides: '/en-in/resources/finance-guides'
    },
    exporters: {
      apply: '/exporters/apply',
      footer: '/exporters'
    },
    products: {
      invoiceFactoring: '/products/invoice-factoring',
      exportFinance: '/products/export-finance',
      postShipmentFinance: '/products/post-shipment-finance',
      nonRecourseFactoring: '/products/non-recourse-factoring',
      receivablesFactoring: '/products/receivables-factoring',
      exportFactoring: '/products/export-factoring',
      internationalFactoring: '/products/international-factoring'
    },
    termsOfUse: '/terms-of-use',
    privacyPolicy: '/privacy-policy',
    video:
      'https://www.youtube.com/embed/RubH4u6NF0I?rel=0&amp;showinfo=0&amp;enablejsapi=1'
  },
  us: {
    phone: '+1-844-804-4822',
    email: 'cs@dripcapital.com',
    city: 'Palo Alto',
    country: 'USA',
    company: 'Drip Capital Inc.',
    address1: '1885 El Camino Real',
    address2: 'Palo Alto, CA 94306',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.342895206928!2d-122.15271992533079!3d37.429003632004516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb6674daf3a4b%3A0xc232195f14005e81!2sDrip%20Capital%20Inc.!5e0!3m2!1sen!2sin!4v1683901382981!5m2!1sen!2sin'
  },
  region: {
    phone: '+91-9987-779-334',
    email: 'cs@dripcapital.com',
    city: 'Mumbai',
    slug: 'mumbai',
    country: 'India',
    company: 'Drip Capital Services India LLP',
    address1: '1221, 2nd Floor, Building 12 Solitaire Corporate Park,',
    address2:
      'Guru Hargovindji Rd, Chakala, Andheri East, Mumbai, Maharashtra 400093',
    business: 'India',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.902687394444!2d72.85867337381752!3d19.111924550846403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c90f88640001%3A0xe6c2c4c36b1681d5!2sDrip%20Capital%20Services%20India%20LLP!5e0!3m2!1sen!2sin!4v1683903136774!5m2!1sen!2sin'
  },
  country: 'India',
  header: {
    home: 'Home',
    signIn: 'Login',
    startApplication: 'Get Started',
    applyNow: 'Get Started',
    mainHeader: {
      navItems: [
        {
          text: 'For Exporter',
          path: '', // Leave blank if it's a dropdown
          subNav: [
            {
              text: 'Post Shipment Finance',
              path: 'exporters'
            },
            {
              text: 'Advance Against PO',
              path: 'advance-against-po'
            }
          ]
        },
        {
          text: 'For Importer',
          path: 'importers'
        },
        {
          text: 'For Investor',
          path: 'investors'
        },
        {
          text: 'For Partner',
          path: 'partners'
        }
      ],
      companyNavOut: [
        {
          text: 'Leadership Team',
          link: '/en-in/leadership'
        },
        {
          text: 'Careers',
          link: '/careers'
        }
      ],
      resources: [
        {
          text: 'Blog',
          link: '/en-in/resources/blog'
        },
        {
          text: 'HSN Code Finder',
          link: '/hsn-code'
        },
        {
          text: 'Glossary',
          link: '/en-in/glossary-of-shipping-terms'
        },
        {
          text: 'Finance Guides',
          link: '/en-in/resources/finance-guides'
        },
        {
          text: 'Media Room',
          link: '/en-in/resources/mediaroom'
        }
      ]
    }
  },
  landingHeader: {
    apply: 'Apply'
  },
  footer: {
    products: {
      title: 'Products',
      navItems: [
        'Invoice Factoring',
        'Receivables Factoring',
        'Trade Finance',
        'Export Factoring',
        'Bill Discounting',
        'Post Shipment Finance'
      ]
    },
    explore: {
      title: 'Explore',
      exporters: 'Exporters',
      importers: 'Importers',
      investors: 'Investors',
      partner: 'Partner with Us',
      hsncode: 'HSN Code Finder',
      dripOne: 'Export Data Analyst',
      financeGuides: 'Finance Guides',
      blog: 'Blog'
    },
    help: {
      title: 'Help',
      howItWorks: 'How It Works',
      faqs: 'FAQs',
      interestCalculator: 'Charges Calculator'
    },
    company: {
      title: 'Company',
      about: 'About Us',
      contact: 'Contact',
      leadershipTeam: 'Leadership Team',
      careers: 'Careers',
      resources: 'Resources',
      newsroom: 'Media Room',
      posh_guidelines: 'POSH Guidelines'
    },
    copyright: {
      terms: 'Terms of Use',
      policy: 'Privacy Policy',
      optOut: {
        title: 'Opt-out',
        link: 'https://share.hsforms.com/2cEr9Y2UYQDOE1NbYW_PX6Qcwe7e'
      },
      optOutAIRoboCalls: {
        title: '',
        link: ''
      }
    },
    sites: {
      en: {
        site:
          (process.env.NODE_ENV === 'development' ? 'http://' : 'https://') +
          process.env.websiteHost,
        title: 'International'
      },
      es: {
        site:
          (process.env.NODE_ENV === 'development' ? 'http://' : 'https://') +
          process.env.websiteHostMx,
        title: 'Español'
      }
    },
    fciInfo: 'Drip Capital Inc. is member of Factors Chain International',
    sslInfo:
      'The connection to this site is encrypted and authenticated using a strong protocol (TLS 1.2), a strong key exchange (ECDHE_RSA with P-256), and a strong cipher (AES_128_GCM).',
    cookieConsent: {
      close: 'Close',
      line1:
        'We use cookies to give you the best possible experience on our website. By continuing to browse this site, you give consent for cookies to be used in accordance with and for the purposes set out in our',
      line2: 'Privacy Policy',
      line3:
        'and acknowledge that your have read, understood and consented to all terms and conditions therein.'
    },
    cookieConsentBanner: {
      title: 'We value your privacy',
      body: `We use cookies and other tracking technologies to improve your
          experience on our website. We may store and/or access information on a
          device and process personal data, such as your IP address and browsing
          data, for personalized advertising and content, advertising and
          content measurement, audience research and services development. <br />
          Additionally, we may utilize precise geolocation data and
          identification through device scanning. To learn more, please review
          our <a href="/en-in/privacy-policy" target="_blank">Privacy Policy.</a>`,
      btnReject: 'Reject All',
      btnAccept: 'Accept All'
    }
  },
  pages: {
    newsroom: require('./pages/newsroom'),
    // todo: change
    countries: {
      global: 'Global',
      india: 'India',
      mexico: 'Mexico',
      uae: 'UAE',
      us: 'USA',
      ecuador: 'Ecuador'
    },
    thank: {
      title: 'Gracias por solicitar',
      headline: 'Gracias por solicitar una verificación de elegibilidad',
      p1: 'Gracias por solicitar una verificación de elegibilidad.',
      p2: 'Nuestro asesor financiero de exportación se pondrá en contacto con usted dentro de 2 días hábiles. Para consultas urgentes, contáctenos en <a href="tel:+52-55-4161-1579">+52-55-4161-1579</a> / <a href="mailto:contacto@dripcapital.com">contacto@dripcapital.com</a>'
    },
    contact: {
      title: 'Contact Us',
      description: 'Get in touch with Drip Capital.',
      jumbotron: {
        title: 'We are here to help',
        lead: {
          line1: 'Still not clear about our process? ',
          line2: 'Give us a call on',
          line3:
            'and speak to our Export Finance Advisor to get your queries answered'
        },
        contactForm: {
          title: 'Contact Us',
          placeholders: {
            name: 'Full Name',
            email: 'Email',
            phone: 'Phone',
            company: 'Company',
            message: 'Message'
          },
          success: {
            title: 'Thanks for your interest!',
            description:
              'Our team will contact you shortly. For urgent queries, please contact us at '
          },
          sendMessage: 'Send Message',
          sendingMessage: 'Sending Message'
        }
      },
      getInTouch: {
        title: 'Our Offices',
        getDirections: 'Get Directions'
      },
      conclusion: {
        linkedIn: 'LinkedIn'
      }
    },
    exporters: {
      title: 'Working Capital Finance Solutions for Exporters',
      description:
        'Drip Capital provides easy access to collateral-free working capital finance solutions for exporters. Submit your export invoices and get paid within 24 hours.',
      mainHero: {
        title: 'Convert invoices into cash ',
        title2: 'and finance your growth',
        lead: [
          'Offer flexible payment terms to your buyers.',
          'Submit your invoices and get paid as soon as you ship.'
        ],
        getStarted: 'Get Started',
        tips: [
          {
            tagline: 'Higher Credit Line',
            heading: '$3 Million USD'
          },
          {
            tagline: 'Cost-Efficient',
            heading: 'Competitive pricing'
          },
          {
            tagline: 'Simple Access',
            heading: 'No collateral'
          }
        ]
      },
      advantage: {
        title: 'The Drip Advantage',
        items: [
          {
            title: 'Collateral free working capital',
            desc: 'Submit your invoices to receive advances against your account receivables.'
          },
          {
            title: 'Efficient and Competitive',
            desc: 'A digital and flexible solution with higher limits and competitive pricing.'
          },
          {
            title: 'Increase Liquidity and Grow Sales',
            desc: 'Expand your business and improve your cash flow to finance your growth.'
          },
          {
            title: 'Fast, Easy, and Transparent',
            desc: 'Complete digital onboarding with minimal paperwork, finance invoices via Drip’s portal, and receive funds within 24 hours.'
          }
        ]
      },
      capital: {
        title: 'Simple 4-step Application Process',
        items: [
          {
            title: 'Apply Online',
            desc: 'Submit basic details about your business on our website.',
            image: '1'
          },
          {
            title: 'Risk Assessment',
            desc: 'Obtain an offer letter following an automated risk assessment.',
            image: '2'
          },
          {
            title: 'Submit Invoice',
            desc: 'Securely upload your invoice on our dashboard.',
            image: '3'
          },
          {
            title: '24 Hour Disbursements',
            desc: 'Get advance payment directly to your account.',
            image: '4'
          }
        ],
        cta: 'Get an Offer'
      },
      successStories: {
        title: 'What Our Clients Say About Us',
        items: [
          {
            desc: 'We were able to significantly increase sales to existing customers by shortening our working capital cycle. Thanks to Drip, we have also added new buyers by offering competitive credit terms.',
            owner: 'Karthikesan V - Chennai based Manufacturer',
            icon: 'export.png'
          },
          {
            desc: 'Drip’s facility freed up our existing bank limit thereby helping us in making timely purchases during peak season. Further we managed to get increased large orders from existing customers.',
            owner: 'Harish K - Andhra Pradesh based Commodity Exporter'
          },
          {
            desc: "Drip's portal made the entire documents process very easy, eliminating the need to courier documents every time.",
            owner: 'Jaspreet Singh - Chandigarh based exporter'
          }
        ]
      },
      leaders: {
        title: 'Our Customers Work with Industry Leaders',
        items: [
          {
            icon_url: 'bernas'
          },
          {
            icon_url: 'colgate'
          },
          {
            icon_url: 'corning'
          },
          {
            icon_url: 'macdonald'
          }
        ]
      },
      growth: {
        title: 'Get 80% of your receivables financed within 24 hours',
        desc: 'Take control of when you get paid for your export invoices with our one-click collateral-free non-recourse financing solution. Apply now to start your journey with Drip Capital.'
      },
      conclusion: {
        title: 'Earn with Drip Capital',
        leads: [
          'Work as our Partner and monetize your relationship with exporters.',
          "Introduce Drip's export bill discounting solution to exporters and earn attractive rewards for your reference.",
          'Get in touch with us for further information.'
        ],
        cta: 'Get Started'
      },
      eligibility: {
        desc: 'Earn with Drip Capital',
        check: 'Check Eligibility',
        line1:
          "Work as our Partner and monetize your relationship with exporters. Introduce Drip's export bill discounting solution to exporters and earn attractive rewards for your reference.",
        line2:
          "Introduce Drip's export bill discounting solution to exporters and earn attractive rewards for your reference."
      },
      apply: {
        title: 'Check Eligibility',
        description:
          'Indian exporters now get paid upfront for shipments to over 30 countries. No Paperwork, financing at the click of a button upon shipment.',
        form: {
          title: 'You are one step away from your offer letter'
        },
        alt1: 'Application Help',
        tags: [
          'Collateral-free working capital',
          'Quick approval for credit upto $3 Million',
          'Increase sales by offering credit'
        ]
      },
      awards: {
        title: 'Global Awards and Certifications',
        items: [
          'combinator.png',
          'red-herring.png',
          'fintech-250.png',
          'gptw.png',
          'banking-tech.png',
          'future-unicorn.png',
          'etbfsi_exceller.jpg'
        ]
      }
    },
    homePage: {
      title: 'Working Capital Finance Solutions for Exporters',
      description:
        'Drip Capital provides easy access to collateral-free working capital finance solutions for exporters. Submit your export invoices and get paid within 24 hours.',
      mainHero: {
        title: 'Fuel Your Exports ',
        title2: 'with Fast Non-Recourse ',
        title3: 'Financing',
        lead: [
          'Collateral-free finance for your export business -  ',
          'as soon as you ship.'
        ],
        getStarted: 'Get Started',
        tips: [
          {
            tagline: 'Higher Limits',
            heading: '$3 million '
          },
          {
            tagline: 'Cost-Efficient',
            heading: 'Competitive pricing'
          },
          {
            tagline: 'Simple Access',
            heading: 'No collateral'
          }
        ]
      },
      advantage: {
        title: 'The Drip Advantage',
        items: [
          {
            title: 'Collateral free working capital',
            desc: 'Submit your invoices to receive advances against your account receivables.'
          },
          {
            title: 'Efficient and Competitive',
            desc: 'A digital and flexible solution with higher limits and competitive pricing.'
          },
          {
            title: 'Increase Liquidity and Grow Sales',
            desc: 'Expand your business and improve your cash flow to finance your growth.'
          },
          {
            title: 'Fast, Easy, and Transparent',
            desc: 'Complete digital onboarding with minimal paperwork, finance invoices via Drip’s portal, and receive funds within 24 hours.'
          }
        ]
      },
      capital: {
        title: 'Simple 4-step Application Process',
        items: [
          {
            title: 'Apply Online',
            desc: 'Submit basic details about your business on our website.',
            image: '1'
          },
          {
            title: 'Credit Assessment',
            desc: 'Obtain an offer letter following an automated credit assessment.',
            image: '2'
          },
          {
            title: 'Submit Invoice',
            desc: 'Securely upload your invoice on our dashboard.',
            image: '3'
          },
          {
            title: '24 Hour Disbursements',
            desc: 'Get advance payment directly to your account.',
            image: '4'
          }
        ],
        cta: 'Get an Offer'
      },
      successStories: {
        title: 'What Our Clients Say About Us',
        items: [
          {
            desc: 'We were able to significantly increase sales to existing customers by shortening our working capital cycle. Thanks to Drip, we have also added new buyers by offering competitive credit terms.',
            owner: 'Karthikesan V - Chennai based Manufacturer',
            icon: 'export.png'
          },
          {
            desc: 'Drip’s facility freed up our existing bank limit thereby helping us in making timely purchases during peak season. Further we managed to get increased large orders from existing customers.',
            owner: 'Harish K - Andhra Pradesh based Commodity Exporter'
          },
          {
            desc: "Drip's portal made the entire documents process very easy, eliminating the need to courier documents every time.",
            owner: 'Jaspreet Singh - Chandigarh based exporter'
          }
        ]
      },
      leaders: {
        title: 'Our Customers Work with Industry Leaders',
        items: [
          {
            icon_url: 'bernas'
          },
          {
            icon_url: 'colgate'
          },
          {
            icon_url: 'corning'
          },
          {
            icon_url: 'macdonald'
          }
        ]
      },
      growth: {
        title: 'Get 80% of your receivables financed within 24 hours',
        desc: 'Take control of when you get paid for your export invoices with our one-click collateral-free financing solution. Apply now to start your journey with Drip Capital.'
      },
      conclusion: {
        title: 'Earn with Drip Capital',
        leads: [
          'Work as our Partner and monetize your relationship with exporters.',
          "Introduce Drip's export bill discounting solution to exporters and earn attractive rewards for your reference.",
          'Get in touch with us for further information.'
        ],
        cta: 'Get Started'
      },
      eligibility: {
        desc: 'Earn with Drip Capital',
        check: 'Check Eligibility',
        line1:
          "Work as our Partner and monetize your relationship with exporters. Introduce Drip's export bill discounting solution to exporters and earn attractive rewards for your reference.",
        line2:
          "Introduce Drip's export bill discounting solution to exporters and earn attractive rewards for your reference."
      },
      apply: {
        title: 'Check Eligibility',
        description:
          'Indian exporters now get paid upfront for shipments to over 30 countries. No Paperwork, financing at the click of a button upon shipment.',
        form: {
          title: 'You are one step away from your offer letter'
        },
        alt1: 'Application Help',
        tags: [
          'Collateral-free working capital',
          'Quick approval for credit upto $3 Million',
          'Increase sales by offering credit'
        ]
      },
      awards: {
        title: 'Global Awards and Certifications',
        items: [
          'combinator.png',
          'red-herring.png',
          'fintech-250.png',
          'gptw.png',
          'banking-tech.png',
          'future-unicorn.png',
          'etbfsi_exceller.jpg'
        ]
      }
    },
    home: {
      title: 'Trade Finance Simplified',
      description:
        'Drip Capital is a Trade Finance company providing collateral-free post-shipment finance to Exporters and Importers with instant approvals and minimal documentation.',
      jumbotron: {
        titles: [
          'Gain access to steady working capital',
          'Hassle-free application with quick approvals',
          'Easy access to collateral free working capital'
        ],
        content: {
          t1: 'Gain access to steady working capital',
          d1: 'Get paid upfront for your invoices with Drip’s invoice discounting offering and use the capital to grow your business.',
          t2: 'Hassle-free application with quick approvals',
          d2: 'Fill out our application form and expect quick responses. No more waiting endlessly to get approved',
          t3: 'Easy access to collateral free working capital',
          d3: [
            '— Credit Limit upto $3 Million',
            '— 80% invoice value upfront as soon as you ship',
            '— Competitive pricing with low interest rates'
          ]
        },
        checkEligibility: 'Check Eligibility',
        applyNow: 'Apply Now'
      },
      videoIntro: {
        logo: 'Drip Capital Logo',
        desc: 'Watch the video to learn how Drip Capital’s export finance is simplifying global trade finance.'
      },
      howItWorks: {
        title: 'How it works',
        desc: 'Avail Drip’s export finance in 3 easy steps. Our process has been carefully optimised to be quick and convenient.',
        slug: 'how-it-works',
        content: [
          {
            no: '01',
            title: 'Online Application',
            desc: 'Fill out our online application with your business information and buyer details'
          },
          {
            no: '02',
            title: 'Drip Assessment',
            desc: 'Our Credit Team will evaluate your application and approve a credit limit'
          },
          {
            no: '03',
            title: 'Submit Invoices',
            desc: 'You are ready to be financed! Once legal documentation is out of the way, you can start submitting invoices for financing'
          }
        ],
        checkEligibility: 'Check Eligibility'
      },
      benefits: {
        title: 'How you can benefit',
        desc: 'Maximise growth with steady access to working capital with our post-shipment finance.',
        content: [
          {
            icon: 'chart',
            title: 'Collateral free working capital'
          },
          {
            icon: '2.5million',
            title: 'Credit limit up to $3 Million'
          },
          {
            icon: 'dollar',
            title: 'Advance of up to 80% invoice value'
          },
          {
            icon: 'exclamation',
            title: 'Protection against buyer bankruptcy'
          }
        ],
        testimonials: [
          {
            exporter: 'Food Products Exporter',
            location: 'Anand, Gujarat',
            desc: 'We were able to double our sales with timely access to working capital from Drip',
            icon: 'testimonial-2'
          },
          {
            exporter: 'Textile and Apparel Exporter',
            location: 'Chennai, Tamil Nadu',
            desc: "Our company now sells to 6 more buyers in 4 different countries since we now offer credit terms with Drip's help",
            icon: 'testimonial-1'
          },
          {
            exporter: 'Frozen Seafood Exporter',
            location: 'Bhimavaram, Andhra Pradesh',
            desc: 'We were able to fulfill a sudden high demand of orders on receiving working capital from Drip in as little as a week',
            icon: 'testimonial-3'
          }
        ]
      },
      getInTouch: {
        title: 'Get in touch',
        email: 'Email'
      },
      features: {
        title: 'Grow with Drip Capital',
        content: [
          {
            icon: 'chart',
            title: 'Collateral free working capital',
            desc: 'The financing is unsecured and offered without any collateral.'
          },
          {
            icon: 'dollar',
            title: 'Advance of up to 80% invoice value',
            desc: 'Exporters can now get paid upfront for their invoices. Invoice factoring can help release upto 80% of invoice value stuck.'
          },
          {
            icon: '2.5million',
            title: 'Credit limit up to $3 Million',
            desc: 'Drip’s working capital offering to exporters is a credit line, which ranges from USD 100 thousand to USD 2.5 million, depending on the exporter’s size and requirement.'
          },
          {
            icon: 'saving',
            title: 'Preferential pricing',
            desc: 'FIEO members are now eligible for preferential pricing for Drip Capitals invoice factoring. FIEO members can now save upto $2000 on cost of finance.'
          }
        ]
      }
    },
    terms: {
      title: 'Terms of Use',
      subtitle:
        'The following terms and conditions of service (“Terms of Service”) apply to all visitors of DripCapital.com website and associated web pages (“Website”). By accessing this website, you hereby accept the following terms and conditions. IF YOU DO NOT WISH TO BE BOUND BY THESE TERMS OF USE, PLEASE CLOSE THE BROWSER OR REFRAIN FROM USING THIS WEBSITE FURTHER. This Terms of Service is made available by Drip Capital, Inc. and its affiliates (collectively, “Drip Capital” or “we” or “us”.)',
      heading: 'Drip Capital, Inc. Terms of Service',
      description: '',
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
              line3:
                'explains how we will use and protect any personal information you may elect to provide or that we may otherwise obtain.'
            }
          ]
        },
        {
          title: 'Disclaimers',
          desc: [
            'Drip Capital assumes no responsibility for the accuracy of any information made available on this Website or our products. Any information available on this Website, including information on our products is subject to change without notice. Drip Capital may make improvements and/or changes in the products set forth in this Website at any time and without prior notice. Any mention of third party products or third party websites is for information purposes only and constitutes neither an endorsement nor a recommendation from Drip Capital.',
            'ALL INFORMATION PROVIDED ON THIS WEB SITE IS PROVIDED “AS IS” WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT OF INTELLECTUAL PROPERTY.',
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
      conclude: '© Copyright 2018, Drip Capital, Inc. ALL RIGHTS RESERVED'
    },
    privacy: {
      title: 'Privacy Policy',
      description: '',
      heading: 'Drip Capital, Inc. Privacy Policy',
      subtext: `This Privacy Policy (“<b>Policy</b>”) describes the Personal Information that Drip Capital Inc. and its affiliates (“<b>Drip
          Capital</b>” or “<b>Company</b>” or “<b>DC</b>”) may collect about you, how we use or Process; and protect this information,
          and the choices you can make about how we use this information.`,
      list: [
        {
          title: 'Introduction',
          body: 'This Policy establishes the policy, procedures and controls for privacy in line with all applicable regulatory, operational and contractual requirements and sets out how DC collects, stores, Processes, transfers, shares and uses Personal Information when you use DC’s website or services. DC has built a strong privacy framework in alignment with identified requirements from California Privacy Rights Act (“<b>CPRA</b>”), as well as certificate from ISO 27001. When you access the website, or use our products and/ or services, you acknowledge that you have read this Policy and understood its contents.'
        },
        {
          title: 'Definitions',
          body: 'Unless defined elsewhere in this Policy, capitalized terms have the following meanings:',
          hasList: true,
          innerList: [
            {
              content:
                '“Personal Information” means any personally identifiable information that relates to a natural person, which, either directly or indirectly, or in combination with other information available or likely to be available with a body corporate, is capable of identifying such a person.'
            },
            {
              content:
                '“Processing” includes the collection, recording, organization, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure or otherwise making available, alignment or combination, restriction, erasure or destruction of Personal Information.'
            },
            {
              content:
                '“Sensitive Personal Information” means Personal Information that also comprises information relating to passwords, financial information, physical, physiological and/ or mental health conditions, sexual orientation, biometric information, geolocation. Sensitive Personal Information does not include information that is freely available or accessible in the public domain or furnished under any law for the time being in force.'
            }
          ]
        },
        {
          title: 'Restricted Collection of Information',
          hasList: true,
          innerList: [
            {
              content:
                'DC will only collect Personal Information that is consented to by you. Collecting such Personal Information enables us to offer you services that help you with your business needs. Depending on the business need you apply for, DC collects information necessary to set up and maintain that business service.'
            },
            {
              content:
                'You can always deny or withdraw your consent at a later stage as per the process described in subsequent sections further, in accordance with regional applicable laws.'
            },
            {
              content:
                'If you would like to know the name and addresses of agencies, which are associated with DC to collect and retain your Information, you can contact <a href="mailto:privacy@dripcapital.com">privacy@dripcapital.com</a>.'
            }
          ]
        },
        {
          title: 'Access to and Modification of Personal Information',
          body: '',
          hasList: true,
          innerList: [
            {
              content:
                'You can, at any time, request access to your Personal Information being stored or processed by DC, in accordance with applicable laws. DC will respond to your request as per the established procedures. DC has reasonable procedures in place, to enable you to access the information being stored and/or Processed by us. You can also exercise your right to amend inaccurate or incomplete Personal Information, in accordance with applicable laws.'
            },
            {
              content:
                'Contact <a href="mailto:privacy@dripcapital.com">privacy@dripcapital.com</a> to know more about how to access or modify your Personal Information with DC.'
            },
            {
              content:
                "The Policy is only applicable to the Personal Information being shared by you and does not apply to information interpreted for offering business services to you. DC also reserves the right not to share any information being collected from other sources, such as background check agencies, credit agencies, etc., pursuant to a request made hereunder. To provide you access to information quickly and easily, the information requested will be provided in the prescribed format as per DC's internal guidelines."
            }
          ]
        },
        {
          title: 'Option to Consent',
          body: '',
          hasList: true,
          innerList: [
            {
              content:
                'The consent to Personal Information is always voluntary, informed and current. '
            },
            {
              content:
                'DC gives customers an option to withdraw consent, in accordance with applicable laws, for using your Personal Information being granted to us. In that case, you may approach privacy@dripcapital.com. However, in such cases, DC may not be able to continue to provide you with the business services or where applicable, the same level of services, for which the Personal Information was not provided by you.'
            }
          ]
        },
        {
          title: 'Processing of Information',
          body: '',
          hasList: true,
          innerList: [
            {
              content:
                'DC may Process your Personal Information for the following purposes:',
              hasList: true,
              deepList: [
                {
                  content:
                    'performing obligations under or in connection with your contract of agreement with us as per the business service availed'
                },
                {
                  content:
                    'managing and terminating our agreement relationship with you'
                },
                {
                  content:
                    'performing obligations under or in connection with the provision of our services to our clients'
                },
                {
                  content:
                    'planning and managing the day-to-day work and operations'
                },
                {
                  content:
                    'executing the formalities related to the termination of the contract'
                },
                {
                  content:
                    'facilitating our compliance with laws, customs and regulations which may be applicable to us from time to time'
                }
              ]
            },
            {
              content:
                'The purposes listed in the above clauses may continue to apply even in situations where your relationship with us (for example, pursuant to a contract) has been terminated or altered in any way, for a reasonable period thereafter (including, where applicable, a period to enable us to enforce our rights under any contract with you).'
            },
            {
              content:
                'Every DC employee/business associate/relevant individual, who deals with or comes into contact with Personal Information of a customer regardless of its origin, shall have a responsibility to comply with the applicable law concerning data privacy, this policy and specific privacy practices.'
            },
            {
              content:
                'Each such person should seek advice in the event of any ambiguity while dealing with Personal Information or in understanding this Policy.'
            },
            {
              content:
                'DC ensures that its employees/relevant Individuals shall be diligent and extend caution while dealing with Personal Information of customers, in the course of performance of their duties and shall also, at all times, will:',
              hasList: true,
              deepList: [
                {
                  content:
                    'respect Personal Information that they have access to and treat it in the manner in which they would expect their personal details to be treated.'
                },
                {
                  content: `prevent any unauthorized person from having access to any computer systems Processing Personal Information, and especially any: <br/>
                    (1) unauthorized reading, copying, alteration, deletion or removal of data; or <br/>
                    (2) unauthorized data input, disclosure, uploading, transmission/transfer of Personal Information; <br/>
                    (3) abide by DC information security and privacy policies and procedures;`
                },
                {
                  content:
                    'ensure that authorized users of a data-processing system can access only the Personal Information to which their access right refers;'
                },
                {
                  content:
                    'keep a record of which Personal Information has been shared, when and to whom;'
                },
                {
                  content:
                    'not provide any Personal Information to any third party without appropriate approvals;'
                },
                {
                  content:
                    'Ensure that, during the communication of Personal Information and transfer of storage media, the data cannot be read, copied or erased without authorization.'
                },
                {
                  content:
                    'immediately, on becoming aware, report and notify any vulnerabilities and privacy-related breach/security breaches (including potential risks) to the concerned personnel within DC.'
                }
              ]
            },
            {
              content:
                "DC takes non-compliance with this policy by DC's employees very seriously and may take disciplinary actions including but not limited to dismissal or termination."
            }
          ]
        },
        {
          title: 'Sharing and Disclosure of Information with Third Parties',
          body: '',
          hasList: true,
          innerList: [
            {
              content:
                'DC may share your Personal Information with third parties when necessary to provide you with products or services, or as part of the regular course of our relationship with you. Such disclosures will only occur where:',
              hasList: true,
              deepList: [
                {
                  content:
                    'You have been previously informed or have provided consent;'
                },
                {
                  content:
                    'The disclosure is required to prevent fraud, detect security incidents, or protect against illegal activity; or'
                },
                {
                  content:
                    'It is otherwise permitted or required by applicable law.'
                }
              ]
            },
            {
              content:
                'DC will disclose Personal Information to third parties only with your prior consent, or pursuant to a contractual relationship. However, in certain situations, such as lawful requests from government authorities, regulatory obligations, or compliance with a court order, DC may disclose your Personal Information without prior notice or consent, as permitted or required by law.'
            },
            {
              content:
                'DC may collect information about how you use or connect to our Website, or the types of other websites, social media services, content and ads that you view to customize the ads on our Website, that are visible to you when you visit our Website or use our products or services. DC has established procedures which will reasonably ensure that your Personal Information will not be disclosed by us or any agencies/ third party associated with us, any further than absolutely required.'
            }
          ]
        },
        {
          title: 'Recipients of Personal Information',
          body: 'In connection with providing you the services requested, DC may engage with the certain third parties set forth below:',
          hasList: true,
          innerList: [
            {
              content:
                'Credit bureaus/credit information companies (“<b>CICs</b>”): DC may share your Personal Information with credit bureaus/credit information companies to fetch the relevant credit data required for risk assessments so as to be able provide our services.'
            },
            {
              content:
                'Risk Services: DC works with external third parties to evaluate the risk of transactions to gather information which is used by DC to validate and verify transactions.'
            },
            {
              content:
                'Insurance: DC may share your Personal Information with insurance providers or insurance brokers to assess the risk and evaluate credit insurance coverage for specified transactions.'
            },
            {
              content:
                'Law enforcement, regulators and other parties for legal reasons: DC may share your Personal Information with third parties as required by law or if DC reasonably believes that such action is necessary to: (x) comply with the law and the reasonable requests of law enforcement; (y) detect and investigate illegal activities and breaches of agreements; and/or (z) exercise or protect the rights, property, or personal safety of DC, its users or others.'
            },
            {
              content:
                'Service Providers: DC may share your Personal Information with our external service providers including law firms, collection agencies, partners, and other consultants in connection with due diligence, underwriting and/ or enforcement of our contractual rights.'
            },
            {
              content:
                'Marketing and advertising: DC may contact you with information about our products and services, including sending you marketing messages and asking for your feedback on our products and services. Most marketing messages DC sends will be by email. For some marketing messages, DC may use Personal Information DC collects about you to help us determine the most relevant marketing information to share with you. DC may need to contact you by email or via our support team.'
            }
          ]
        },
        {
          title: 'Security and Confidentiality ',
          body: '',
          hasList: true,
          innerList: [
            {
              content:
                'DC will keep your Personal Information confidential and limit access to those who specifically need it to conduct their business activities, except as otherwise permitted by applicable law. DC refers to industry standards and uses reasonable administrative, technical and physical security measures to protect your Personal Information from unauthorized access, destruction, use, modification or disclosure.'
            },
            {
              content:
                'A robust Information Security Management system (“<b>ISMS</b>”) has been established within DC that governs the systems and practices aligned with global best practices and certified under the ISO/IEC 27001:2013 standard. The system is subject to strong controls including ongoing monitoring, periodic Security testing, internal/external audits and verifications. DC also ensures that any business associates/ subcontractors/ subsidiaries/ third party agencies engaged to Process your Personal Information also adhere to the reasonable security practices to protect your Personal Information to provide the same level of protection for data as required under the Principles and applicable laws and regulations.'
            }
          ]
        },
        {
          title: 'Integrity and Retention of Personal Information',
          body: 'DC uses appropriate technology and well-defined employee practices to Process your data promptly and accurately. DC will not keep your Personal Information longer than is necessary, except as otherwise required by applicable law. DC will retain your personal data for as long as required for the purposes for which it was collected and in compliance with our obligations under legal, regulatory, tax, accounting, and necessary technical requirements. ',
          hasList: false,
          innerList: []
        },
        {
          title: 'Transfer of Information',
          body: '',
          hasList: true,
          innerList: [
            {
              content:
                'DC is committed to ensuring that Personal Information is stored in respective regions as much as possible, in alignment with the applicable laws and regulations.'
            },
            {
              content:
                'However, in certain scenarios, DC might need to transfer and store the data in the US or in India or in another region/country in alignment with the corporate information and technology architecture and practices. Whenever such a need for inter-country transfer arises, the company will ensure adequate compliance with the laws and regulations through measures such as ensuring that the data transfer is in alignment with the applicable acts and regulations and/or any restriction of Processing is limited to only those as required for the fulfillment of the employment contract and related requirements and commitments; and adequate controls and reasonable security practices are put in place to ensure effective data protection on par with the requirement of the acts and regulations.'
            }
          ]
        },
        {
          title: 'Privacy Grievance Redressal',
          body: 'Any concerns, disputes, discrepancies or grievances with respect to the Processing of Personal Information can be referred to the directed to <a href="mailto:privacy@dripcapital.com">privacy@dripcapital.com</a>. We will redress the grievance within 45 days from the date of receipt of any such grievance. This channel is specific for privacy related grievances. All anonymous or third-person grievances would not be registered / acted upon. ',
          hasList: false,
          innerList: []
        },
        {
          title: 'Changes to Privacy Policy',
          body: 'DC reserves the right to update this Policy at any time, as a part of our continual improvement and in order to comply with applicable law. DC will provide you with access to the updated Policy as and when DC makes any changes on our website.',
          hasList: false,
          innerList: []
        },
        {
          title: 'Further questions',
          body: 'If you have any questions or need further information regarding this policy, you may contact us at <a href="mailto:privacy@dripcapital.com">privacy@dripcapital.com</a>.',
          hasList: false,
          innerList: []
        },
        {
          title:
            "Customer's rights on their Personal Information - California-US residents only",
          body: 'In accordance with applicable privacy law, you have the following rights in respect of your Personal Information that DC holds:',
          hasList: true,
          innerList: [
            {
              content:
                'Right to Delete: A customer has the right to request for deletion of Personal Information all in full or partial. DC has the right to store, maintain and Process all or any information which is not personal.'
            },
            {
              content:
                'Right to Correct: A customer has the right to request for modification or updation of Personal Information collected by DC if seen as inaccurate or incorrect by the customer.'
            },
            {
              content:
                'Right to Access/Know: A customer has the right to request to disclose the following about the Personal Information collected about the customer over the past 12 months:',
              hasList: true,
              deepList: [
                {
                  content: 'The categories of Personal Information collected'
                },
                {
                  content:
                    'The categories of sources from which the Personal Information was collected'
                },
                {
                  content:
                    'The categories of third parties to which/whom the Personal Information was disclosed'
                },
                {
                  content:
                    'The purpose of collecting and sharing Personal Information'
                },
                {
                  content: 'The actual Personal Information collected in full'
                }
              ]
            },
            {
              content:
                'Right to know what Personal Information is sold and to whom:',
              hasList: true,
              deepList: [
                {
                  content:
                    'A customer has the right to request to disclose what or if the Personal Information is sold to a third party. '
                },
                {
                  content:
                    'DC never sells Personal Information collected to third parties. Refer to Notice of Collection of Information.'
                }
              ]
            },
            {
              content:
                'Right to opt-out of sale or sharing of Personal Information:',
              hasList: true,
              deepList: [
                {
                  content:
                    'A customer has the right, at any time, to direct DC to stop sharing Personal Information with third parties.'
                }
              ]
            },
            {
              content: 'Right to limit usage of Personal Information:',
              hasList: true,
              deepList: [
                {
                  content:
                    'A customer has the right, at any time, to direct DC to limit the usage of the Personal Information to that use which is necessary for DC to perform its services.'
                }
              ]
            },
            {
              content:
                'Right to no Retaliation following opt-out or Exercise of other rights:',
              hasList: true,
              deepList: [
                {
                  content:
                    'DC shall not discriminate against a customer who has exercised one or more of the rights above.'
                }
              ]
            }
          ],
          appendText: `Californian customers can exercise said rights by making a request as follows: <br/>
          Contacting us on our toll-free number at +1 (888) 402 9440 <br/>
          Submitting your request at <a href="mailto:privacy@dripcapital.com"> privacy@dripcapital.com</a>.`
        },
        {
          title: 'Notice of Collection of Information',
          body: `This Notice outlines the basis on which DC will Process Personal Information of individuals, including but not limited to customers, clients, vendors, service providers, business partners, employees, contractors, and any other persons interacting with DC, in accordance with applicable data protection laws and regulations.
          DC may collect Personal Information based on your consent, including, without limitation, your:`,
          hasList: true,
          innerList: [
            { content: 'Company Name' },
            { content: 'Location' },
            {
              content:
                'Contact details including mailing address, telephone numbers, email address'
            },
            { content: 'Registration details' },
            { content: 'Company identification number' },
            { content: 'Other relevant identification details' },
            { content: 'Details of financial health' },
            { content: 'Credit history' },
            { content: 'Financial information' },
            { content: 'Account number and other relevant details' },
            { content: 'Bank account details;' },
            { content: 'Tax-related information' },
            {
              content:
                'Photographs and other relevant audio-visual information;'
            },
            {
              content:
                'Records related to usage, access, surveillance, etc., within DC premises and systems;'
            },
            { content: 'Owner Identification Number (locally specific)' },
            {
              content:
                'Contact information of persons associated with the company'
            },
            {
              content:
                'Any additional information provided to us by you as our customer'
            }
          ]
        },
        {
          title: "Children's Personal Information",
          body: 'We do not provide our Services to children. We do not knowingly collect Personal Information (as defined by the U.S. Children\'s Privacy Protection Act, or "COPPA") from children under 13. We also do not knowingly "share" or "sell," as those terms are defined under the California Privacy Rights Act, the Personal Information of minors under 16 who are California residents. If you are a parent or guardian and believe we have violated this provision, please reach out to <a href="mailto:privacy@dripcapital.com">privacy@dripcapital.com</a>.',
          hasList: false,
          innerList: []
        },
        {
          title: 'Cookies',
          body: 'DC may collect information relating to such matters as the total number of visits to this website, the number of visitors to each page of this website, the Internet Protocol (“IP”) addresses of our visitors, and the time spent on this Website. DC may use this information, to understand how our visitors use this Website so that DC can improve it. DC may also use your IP address to help diagnose problems with our servers and for purposes of system administration. DC may share aggregated, non-personal information with our agents, business partners, consultants, or other third parties. Some non-personal information may be collected through cookies. Cookies can enable us to track the interests of our users to enhance their experience on this Website and to deliver content specific to a user’s interests. These cookies are generally not linked to Personal Information. If you request that the Website store your username and/or password, the cookie will be linked to your username and/or password and hence will track your navigation path around the Website. You may delete or decline the cookie using the tools in your web browser. Although you may still use this website without the cookie, some parts of the website may not work properly for you.',
          hasList: false,
          innerList: []
        },
        {
          title: 'Third-Party Websites',
          body: 'Our website may contain links to third-party websites, applications, or services that are not operated or controlled by us. These third parties may collect Personal Information from you independently, including through cookies, pixels, or other tracking technologies when you interact with their content on our website.',
          hasList: false,
          innerList: [],
          appendText:
            'Please note that this Policy does <b>not apply</b> to third-party websites or services, and we are <b>not responsible</b> for the privacy practices, data handling, or security measures of such third parties. We encourage you to review the privacy policies of any third-party websites or services you visit before providing them with your Personal Information. <br/><br/> Last updated on 30 April 2025.'
        }
      ]
    },
    oldPrivacy: {
      title: 'Privacy Policy',
      subtitle: [
        'Drip provides lines of credit which can be used to pay for raw material, inventory or other short term needs and help small businesses fulfill customer orders. These lines of credit can help you grow your business and take on orders from larger buyers.',
        'This Privacy Policy describes the information that Drip Capital Inc. and its affiliates (“Drip Capital”) collects about you, how we use and protect this information, and the choices you can make about how we use this information. This policy applies to information, including any information that can be used to identify an individual (“Personal Information”), collected about you by Drip Capital in different methods, including via the website. Your privacy matters to us, so please get to know our privacy practices and contact us with any questions.'
      ],
      heading: 'Drip Capital, Inc. Privacy Policy',
      description: '',
      content: [
        {
          title: 'Collection of Personal Information',
          desc: [
            'Your right to use the Website is personal to you. You agree not to reproduce, duplicate, copy, sell, resell, use or exploit for any commercial purposes, the Website or use of or access to the Website or any information or technology obtained from the Website. The contents of the Website, including, without limitation, any content, images, logos and other material are protected under both United States and foreign copyright, patent, trademark, and other laws of Drip Capital.'
          ]
        },
        {
          title: 'Changes and Modifications to the Website',
          desc: [
            'Personal information includes any information that you choose to provide to us as part of registering for an account, or beginning or completing a loan application. This will include information such as your name, telephone number, address, date of birth, social security number, bank account information, credit card number, etc. Besides any information you may directly provide, you may give us authorization to access Personal Information from third parties.',
            'In addition, we may also collect information when you use our products or services, such as the search queries you use, how you use the services we provide, and the types of requests you make.',
            'We use information collected from cookies and other technologies, such as beacons, tags and scripts to improve your user experience and the overall quality of our services. These technologies are used in analyzing trends, administering the Website, tracking users’ movements around the Website and to gather demographic information about our user base as a whole. We may receive reports based on the use of these technologies by these companies on an individual as well as aggregated basis.'
          ]
        },
        {
          title: 'Use of Personal Information',
          hasList: true,
          desc: [
            'In general we will use the Personal Information that you share for the purpose for which the information was provided, for providing you with information that you have requested or may relate to your request, for informing you about services that you may be interested in, or to improve the WebSite and services we offer customers. Our use of your Personal Information may include, without limitation, the following:',
            'Register you as a user and identify you when you log in',
            'Review and process your application for one or more loan products',
            'Inform you of various loan product options that may be of interest',
            'Communicate regarding account information, wire transfers, customer service requests, marketing communications, etc',
            'Obtain maintain, improve, and provide to you the Service and to conduct our business',
            'Produce data analytics and reports containing anonymized summaries of Personal Information and other information that is not Personal',
            'Information (such information, “General Information”) that we share with business partners. General Information may include Personal Information that has been aggregated and stored in our system.'
          ]
        },
        {
          title: 'Disclosure of Personal Information',
          desc: [
            'Personal Information may be disclosed in limited circumstances, including, but not limited to, meet any applicable law, regulation, legal process or enforceable governmental request, enforce applicable Terms of Service, including investigation of potential violations, detect, prevent, or otherwise address fraud, security or technical issues, to protect and defend the rights or property of Drip Capital, or in an emergency threatening an individual’s life, health, or security.',
            'We reserve the right to disclose your personal information as required by law and when we believe that disclosure is necessary to protect our rights and/or comply with a judicial proceeding, court order, or legal process served on our Web site.',
            'We rely on third-party service providers to perform a variety of services on our behalf, such as hosting our website. In so doing, we may need to share your Personal Information with them. We provide our service providers with only the Personal Information they need to perform their services and we require that they protect this information and not use it for any other purpose. We may supplement your personal information with information from third parties.'
          ]
        },
        {
          title: 'Tracking; Cookies; Opt Out of Tracking',
          desc: [
            'Drip Capital may automatically collect non-Personal Information relating to such matters as the total number of visits to this website, the number of visitors to each page of this website, the Internet Protocol (IP) addresses of our visitors, and the time spent on this website. We may use this information, which is collected in and remains in aggregate form, to understand how our visitors use this website so that we can improve it. We may also use your IP address to help diagnose problems with our servers and for purposes of system administration. From time to time, we may share aggregated, non-Personal Information with our agents, business partners, consultants, or other third parties.',
            'Some non-Personal Information may be collected through cookies. Cookies are used by most major websites. A cookie is a text file stored on a user’s computer hard drive containing information about the user. Cookies can enable us to track the interests of our users to enhance their experience on this Site and to deliver content specific to a user’s interests. We may place a cookie in the browser file of your computer when you visit this website. These cookies are generally not linked to Personal Information. If you request that the Website store your username and/or password, the cookie will be linked to your username and/or password, and hence will track your navigation path around the Website.',
            'You may delete or decline the cookie using the tools in your web browser. Although you may still use this website without the cookie, some parts of the website may not work properly for you.'
          ]
        },
        {
          title: 'Information Transfer',
          desc: [
            'Your Personal Information may be transferred to, stored, and processed in a country other than the one in which it was provided. This may include the United States. When we do so, we transfer information in compliance with applicable data protection laws. And, we take steps to protect Personal Information in whatever country it is stored in or transferred to. We have procedures and controls to help ensure this.'
          ]
        },
        {
          title: 'Security',
          desc: [
            'We are committed to keeping Personal Information secure, and have implemented generally accepted industry standards of technical, administrative and physical procedures to protect Personal Information. We also limit access to Personal Information to those who have a business need. In order to provide or offer any services directly or indirectly, we may share your Personal Information with our subsidiaries, trusted business partners, affiliates, vendors, or service providers. These entities are obligated to protect the information and ensure its use is not detrimental to your interests. Nevertheless, although we have tried to create a secured and reliable website, the confidentiality of any communication or material transmitted to or from this website cannot be guaranteed. We urge you to exercise caution when conveying Personal Information over the Internet. When disclosing any Personal Information, you should remain mindful that such information might be accessible by the public and, consequently, may be collected and used by others without your consent. You should also recognize that your use of the Internet and this website is solely at your own risk. The security of your personal information is important to us. When you enter sensitive information (such as credit card number and/or social security number) on our forms, we encrypt that information using secure socket layer technology (SSL). Please note that your access to your personal information is through a unique ID and a password selected by you. To protect the confidentiality of this information, do not share this with anyone. You are responsible for all uses of the Website by anyone using your unique ID and password. Please let us know immediately if you believe your username or password has been compromised.'
          ]
        },
        {
          title: 'Third Party Websites and Features on dripcapital.com',
          desc: [
            'As a convenience to you, Drip Capital may provide links from this website to other websites maintained by independent third parties. We are not responsible for the privacy practices of independent third parties. We encourage you to be aware when you leave this website, and to read the privacy policies of any other websites that you may visit.'
          ]
        },
        {
          title: 'Changes',
          desc: [
            'Our Privacy Policy may change from time to time. We will post any privacy policy changes on this page.'
          ]
        },
        {
          title: 'Contact Us',
          desc: [
            'If you have any questions regarding our privacy practices or would like to review or update your Personal Information, you may contact us at our corporate address: or send us an e-mail to contactus@dripcapital.com.'
          ]
        }
      ],
      conclude: 'Effective Date: December 11, 2024'
    },
    pressmedia: {
      growth: {
        title: 'Need Help?',
        desc: 'Subscribe to email alerts.',
        desc2:
          'Our spokespeople and analyst can be good sources. To get in touch. Write to us at communications@dripcapital.com.'
      },
      successStories: {
        title: 'Media Kit',
        items: [
          {
            desc: 'Using our bank lines to pay suppliers while the cargo is still on the water did not fit very well with our working capital cycle. We wish we would have known about Drip earlier. They have been supportive of our growth and are helping us upscale faster through both inventory and supply-chain finance.',
            owner: 'CFO - Coffee Importer in Florida',
            profile: 'Company Profile'
          },
          {
            desc: "Drip's credit line and financing process is transparent and works perfectly with our current bank. Thanks to them, we are now able to purchase the best quality products from reputed suppliers at attractive prices by paying upon shipment.",
            owner: 'Owner - Seafoods Trader in Miami',
            profile: 'Leadership Profile'
          },
          {
            desc: 'We are now able to accept more orders from existing customers and have also started to work with popular retail chains. Thanks to Drip Capital, we now have a healthy cash flow allowing us to fulfill this increase in demand.',
            owner: 'Head of Sales - Meat Wholesaler in California',
            profile: 'Ceos pictures'
          }
        ]
      }
    },
    importers: {
      title: 'Working Capital Finance Solutions for Importers',
      description:
        'Drip Capital provides easy access to working capital finance solutions for importers. Get access to working capital using outstanding invoices or unsold inventory in the warehouse.',
      jumbotron: {
        title: 'Importer Credit Program and Supply Chain Finance',
        lead: {
          line1:
            'Drip helps importers get extended terms with their international suppliers.',
          line2:
            'Drip can help you pay later and free up your working capital to invest in growing your business. This can take the form of early payments, inventory financing or an L/C.',
          line3: 'Please contact us at',
          line4: 'or',
          line5: '. You can also fill the form and we will contact you.'
        },
        contactForm: {
          title: 'Interested in learning more?',
          placeholders: {
            name: 'Full Name',
            email: 'Email',
            organization: 'Company',
            phone: 'Phone',
            import: 'What product do you import ?',
            iec: 'IEC number',
            message: 'Message (Optional)'
          },
          success: {
            title: 'Thank you for your interest!',
            description:
              'We will contact you shortly. For urgent queries please write to us on',
            desc2: 'or call on'
          },
          sendMessage: 'Submit',
          sendingMessage: 'Submitting Message'
        }
      },
      mainHero: {
        title: 'Get Easy Access to',
        title2: 'Collateral-Free Finance',
        lead: [
          'Offer flexible payment terms to your buyers.',
          'Submit your invoices and get paid as soon as you ship.'
        ],
        getStarted: 'Get Started',
        highlights: [
          {
            image: 'dollar',
            tagline: 'Flexible Procurement Limits',
            heading: 'Up to $5 Million'
          },
          {
            image: 'no-access',
            tagline: 'Easy Access',
            heading: 'No hidden terms'
          },
          {
            image: 'calendar',
            tagline: 'Payment Terms',
            heading: 'Up to 120 Days'
          },
          {
            image: 'access',
            tagline: 'Fast and Simple',
            heading: 'Paperless digital process'
          }
        ],
        tips: [
          {
            tagline: 'Trade Financed',
            heading: '$2 Billion'
          },
          {
            tagline: 'Global Operations',
            heading: '65+ Countries'
          },
          {
            tagline: 'Fastest Approvals',
            heading: '20,000+ Transactions'
          }
        ]
      },
      indiaImporters: {
        advantage: {
          title: 'The Voyager Procurement Advantage',
          items: [
            {
              title: 'Extended Payment terms',
              desc: 'Get up to 120 days to pay when you procure your goods through Voyager'
            },
            {
              title: 'Your PO Issued',
              desc: 'You place a PO with Voyager with 20% advance payment; and Voyager places a PO with the Supplier'
            },
            {
              title: 'Early Payment for Suppliers',
              desc: 'Voyager pays 100% of the purchase value to the Suppliers upfront.'
            },
            {
              title: 'Final payment on Due date',
              desc: 'You pay Voyager the balance 80% of the purchase value on the invoice due date.'
            }
          ]
        }
      },
      advantage: {
        title: 'The Drip Advantage',
        items: [
          {
            title: 'High Credit Limit',
            desc: 'Experience hassle-free same-day financing with a credit limit up to $3 Million.'
          },
          {
            title: 'Market Goodwill',
            desc: 'Build long-term reputation by offering favorable terms to your customers and on-time payments to your suppliers.'
          },
          {
            title: 'Paperless, Swift, Hassle-free',
            desc: 'Get funded within 24 hours of submitting the documents on our platform'
          },
          {
            title: 'Improved Cash Flow',
            desc: 'Create a healthier, more profitable business with a shorter cash-conversion cycle.'
          }
        ]
      },
      capital: {
        title: "It's your Capital. Get it Fast & Safe.",
        items: [
          {
            title: 'Apply Online',
            desc: 'Submit basic details about your business on our website',
            image: '1'
          },
          {
            title: 'Drip Assessment',
            desc: 'Get the offer letter post automated assessment',
            image: '2'
          },
          {
            title: 'Submit Invoice',
            desc: 'Securely upload your invoice on our dashboard',
            image: '3'
          },
          {
            title: 'Receive Funds',
            desc: 'Get advance payment directly to your account within 24 hours',
            image: '4'
          }
        ],
        cta: 'Get Offers'
      },
      successStories: {
        title: 'Join industry leaders using Drip Capital',
        items: [
          {
            desc: 'Using our bank lines to pay suppliers while the cargo is still on the water did not fit very well with our working capital cycle. We wish we would have known about Drip earlier. They have been supportive of our growth and are helping us upscale faster through both inventory and supply-chain finance.',
            owner: 'CFO - Coffee Importer in Florida'
          },
          {
            desc: "Drip's credit line and financing process is transparent and works perfectly with our current bank. Thanks to them, we are now able to purchase the best quality products from reputed suppliers at attractive prices by paying upon shipment.",
            owner: 'Owner - Seafoods Trader in Miami'
          },
          {
            desc: 'We are now able to accept more orders from existing customers and have also started to work with popular retail chains. Thanks to Drip Capital, we now have a healthy cash flow allowing us to fulfill this increase in demand.',
            owner: 'Head of Sales - Meat Wholesaler in California'
          }
        ]
      },
      leaders: {
        title: 'Our Customers Work with Industry Leaders',
        items: [
          {
            icon_url: 'bernas'
          },
          {
            icon_url: 'colgate'
          },
          {
            icon_url: 'corning'
          },
          {
            icon_url: 'macdonald'
          }
        ]
      },
      growth: {
        title: 'On-Demand Financing for Growing SMBs',
        desc: 'Our trade finance experts can help you get the most cash out of your supply chain. Apply now to start your journey with Drip Capital.'
      },
      conclusion: {
        title: 'Earn with Drip Capital',
        leads: [
          'Earn attractive rewards for each new buyer reference you help in onboarding to our platform. Simply register yourself and start introducing our product to your network.'
        ],
        cta: 'Get Started'
      },
      awards: {
        title: 'Global awards and certifications',
        items: [
          'red-herring.png',
          'bbb-logo.png',
          'combinator.png',
          'banking-tech.png',
          'fintech-250.png',
          'fci.png',
          'bsi.png',
          'ssl.png',
          'future-unicorn.png',
          'etbfsi_exceller.jpg'
        ]
      },
      howItWorks: {
        title: 'How it Works',
        subtitle: 'Simple 4-step application process',
        items: [
          {
            img: `~/assets/images/importers/howitworks/in-importers-process-1.svg`,
            title: 'Apply Online',
            desc: ' Submit basic business details on our website.'
          },
          {
            img: `~/assets/images/common/california.svg`,
            title: 'Assessment',
            desc: 'Obtain an offer letter following an automated assessment.'
          },
          {
            img: `~/assets/images/common/california.svg`,
            title: 'Legal Documentation',
            desc: 'Sign Master Sale Agreement and place an order with us together with the advance payment.'
          },
          {
            img: `~/assets/images/common/california.svg`,
            title: 'Fast Disbursements',
            desc: 'We place orders and pay the Supplier upfront to secure your goods.'
          }
        ]
      }
    },
    products: {
      videoIntro: {
        lead1: 'Watch the video to learn how Drip Capital’s',
        lead2: 'is simplifying global trade finance.'
      },
      hiw: {
        lead1: 'Avail Drip’s',
        lead2:
          'in 3 easy steps. Our process has been carefully optimised to be quick and convenient.'
      },
      benefits: {
        lead1: 'Maximise growth with steady access to working capital with our'
      },
      exportResources: {
        title: 'Export Finance Resources',
        learnMore: 'Learn More',
        viewAll: 'View All'
      },
      banner: {
        title: 'Receive cash advance against your trade receivables',
        applyCTA: 'Apply Now'
      },
      navTabs: [
        {
          title: 'Overview',
          href: '#overview'
        },
        {
          title: 'How it works ',
          href: '#how-it-works'
        },
        {
          title: 'Why Drip Capital?',
          href: '#why-drip-capital'
        },
        {
          title: 'Growth Stories',
          href: '#growth-stories'
        },
        {
          title: 'FAQ’s',
          href: '#faqs'
        }
      ],
      growthStories: {
        title: 'Growth Stories',
        subTitle: 'Learn about how we’ve 10xed exporters'
      },
      advantage: 'Advantages',
      quickFacts: {
        title: 'Quick Facts About Drip Capital',
        subTitle: 'Trusted by more than 1500 Exporters and Importers Globally'
      },
      productBenefits: {
        title: 'Why Choose Drip Capital?',
        subtitle:
          'We are a fintech company focused on solving the working capital problem for emerging market SME exporters by leveraging data and technology. We are re-building core parts of international trade finance infrastructure to level the playing field for small businesses ',
        content: [
          {
            icon: 'collateral',
            title: 'Collateral free working capital',
            desc: 'Fund your exports growth using your foreign trade receivables.'
          },
          {
            icon: 'credit-limit',
            title: 'Credit limit up to $3 Million',
            desc: 'Get post-shipment export credit line up to $3 Million.'
          },
          {
            icon: 'competitive',
            title: 'Competitive pricing',
            desc: 'Cost of export financing can be as low as 0.7% per month basis credit evaluation.'
          },
          {
            icon: 'paperless',
            title: 'Paperless, swift, transparent',
            desc: 'Use Portal by Drip Capital for faster fulfilment and end-to-end service'
          }
        ]
      },
      faqs: {
        title: 'Frequently Asked Questions',
        moreQuestions: 'Looking for more questions?',
        viewAll: 'View All'
      },
      contactForm: {
        sectionHeading: 'Was this page helpful?',
        sectionSubHeading: 'Still not convinced? Let us help ',
        connectHeading: 'Connect With Us',
        or: 'Or',
        title: 'Request Call back',
        placeholders: {
          name: 'Full Name',
          phone: 'Phone',
          email: 'Email',
          category: 'Choose Product'
        }
      },
      exportProcess: {
        items: [
          {
            icon_url: 'first-step',
            content: `Submit invoice digitally on Drip's Portal`
          },
          {
            icon_url: 'second-step',
            content: `Get 80% invoice value in advance`
          },
          {
            icon_url: 'third-step',
            content: `Buyers pays 100% to Drip capital`
          },
          {
            icon_url: 'fourth-step',
            content: `We pay you remaining 20% less our charges`
          }
        ]
      }
    },
    interestCalculator: {
      title: 'Charges Calculator',
      description:
        'Calculate interest and charges when you factor your invoices with Drip Capital',
      table1: {
        title: 'Commercial Terms',
        advanceRate: 'Advance Rate (% of Invoice Value)',
        a: 'A',
        interestRate: 'Discount Rate (% per annum)',
        b: 'B',
        factoringCommission: 'Factoring Commission (% flat of Invoice Value)',
        c: 'C'
      },
      table2: {
        title: 'Sample Invoice',
        invoiceValue: 'Invoice Value ($)',
        d: 'D',
        duration: 'Duration (days)',
        e: 'E'
      },
      table3: {
        title: 'Calculations',
        amountAdvanced: 'Amount Advanced ($)',
        f: 'F=A*D',
        interest: 'Discount Amount ($)',
        g: 'G=F*B*E/360',
        factoringCommission: 'Factoring Commission ($)',
        h: 'H=C*D',
        total: 'Total Charges (Discount Amount + Factoring Commission) ($)',
        i: 'I=G+H',
        percentage: 'Percentage of Turnover (%)',
        j: 'J=I/D'
      }
    },
    pitchCalculator: {
      title: 'Working Capital Requirement Calculator',
      description: 'Calculate pitch for us customers'
    },
    channelPartner: {
      title: 'Channel Partner Program',
      description:
        'Join our channel partnership program and monetize your relationship with exporters. Get in touch with us today to know more.',
      jumbotron: {
        title:
          'Work as our Partner and monetize your relationship with exporters.',
        line1:
          "Introduce Drip's invoice factoring to exporters and earn attractive rewards for your reference",
        getRegistered: 'Get Registered'
      },
      featuredPartners: {
        title: 'Our Channel Partners',
        items: [
          'Leading Private Bank',
          'Leading NBFC',
          'Freight Forwarders',
          'Chartered Accountants',
          'Financial Consultants',
          'Custom House Agents',
          'Buying House Agents',
          'Export Promotion Councils',
          'Export Consultants'
        ]
      },
      benefits: {
        title: 'Benefits for exporter',
        content: [
          {
            icon: 'chart',
            title: 'Collateral free working capital',
            desc: 'The financing is unsecured and offered without any collateral.'
          },
          {
            icon: '2.5million',
            title: 'Credit limit up to $3 Million',
            desc: 'Drip’s working capital offering to exporters is a credit line, which ranges from USD 100 thousand to USD 2.5 million, depending on the exporter’s size and requirement.'
          },
          {
            icon: 'dollar',
            title: 'Advance of up to 80% invoice value',
            desc: 'Exporters can now get paid upfront for their invoices. Invoice factoring can help release upto 80% of invoice value stuck.'
          },
          {
            icon: 'fast',
            title: 'Fast approval, minimal paperwork, hassle free',
            desc: 'Exporters can apply to Drip by completing a 5-minute online application, requiring minimal paperwork.'
          }
        ]
      },
      conclusion: {
        title: 'Get in touch',
        email: 'partnership@dripcapital.com',
        form: {
          title: 'Register as a Channel Partner',
          dba: 'Doing Business As',
          businessType: 'Business Type',
          userTypes: [
            { text: 'Individual', value: 'individual' },
            { text: 'Company', value: 'company' }
          ],
          success: {
            title: 'Thanks for your interest!',
            desc: 'Our team will contact you shortly with the details on how to partner with Drip. For urgent queries, please contact us at'
          }
        }
      },
      growth: {
        title: 'A few details to get you started',
        desc: 'Join our channel partnership program and monetize your relationship with exporters.'
      },
      solution: {
        title:
          'Offer Collateral-Free Access to Working Capital to your Clients',
        desc: 'Drip Capital offers a unique trade finance solution that allows <b>Indian exporters</b> to get a <b>collateral-free working capital</b> at the <b>click of a button.</b> <div class="mt-4">1) Apply with exporter basic details </div><div class="mt-2">2) Get offer letter in <24 hours </div><div class="mt-2">3) Onboarding is instant, paperless, well-priced, with a credit limit of up to $3mn. </div><div class="mt-2">4) Once approved exporter gets disbursement in <24 hours </div><div class="mt-2">5) Credit line is over and above the exisitng banking limit for exporter </div>',
        video: 'https://www.youtube.com/embed/RubH4u6NF0I'
      },
      newSolution: {
        title: 'Offer Collateral-Free Working Capital Access to Your Clients',
        desc: '<p>Drip Capital offers a unique trade finance solution that enables <span class="text-secondary font-weight-bold">Indian Exporters</span> to access <span class="text-secondary font-weight-bold">collateral-free working capital</span> at the <span class="text-secondary font-weight-bold">click of a button.</span></p><ol class="custom-list d-flex flex-column mt-3"><li>The company applies with basic details.</li><li>They get an offer letter.</li><li>Onboarding is fast, paperless, and cost-efficient, with a credit limit of up to $3 Million USD.</li><li>Once approved, funds are disbursed in 24 hours.</li></ol><style>.custom-list { list-style-type: none;counter-reset: elementcounter;padding-left: 0; gap: 1rem; } .custom-list li:before { content: counter(elementcounter) ") ";  counter-increment: elementcounter;}</style>',
        video: 'https://www.youtube.com/embed/RubH4u6NF0I'
      },
      faqs: {
        title: 'Frequently Asked Questions',
        items: [
          {
            question: 'Who Can Register as a Channel Partner?',
            answer:
              'Anyone who is connected to an active exporter should register themselves as our channel partner. Our existing partners come from various functions and sectors like CA’s, Freight Forwarders, Buying Houses, EXIM consultants, Financial Consultants, Custom Brokers, Lawyers, Logistics Companies, Financial Institutions, etc.'
          },
          {
            question:
              'Is there a maximum limit to the commission one can earn with Drip?',
            answer:
              'No upside, higher the number of refferal, higher is the pay out'
          },
          {
            question:
              'Is the commission for every shipment that is financed through my reference?',
            answer:
              'The commission is for each invoice that we finance from the referenced client and is paid quarterly on the recovered portfolio.'
          },
          {
            question:
              'What if an exporter decides to not use the Drip facility after signing the agreement?',
            answer: 'Nothing happens, simply no commissions are generated.'
          },
          {
            question: 'What are the benefits for exporters?',
            answer:
              'This is collateral free working capital and extra line of credit upto $3mn at competitive rates (over and above their existing banking line)'
          }
        ]
      },
      capital: {
        title: 'Additional Incentive to Earn ',
        items: [
          {
            title: 'Apply Online',
            desc: 'Apply online to register as our channel partner',
            image: '1'
          },
          {
            title: 'Introduction',
            desc: 'Introduce our export finance solution to exporters',
            image: '2'
          },
          {
            title: 'Exporter Sign Up',
            desc: 'Exporter signs the agreement with drip capital and finances their shipment',
            image: '3'
          },
          {
            title: 'Get Commission',
            desc: 'Partners receive dedicated RM support and are paid on a quarterly basis.',
            image: '4'
          }
        ],
        cta: 'Apply Now'
      },
      newCapital: {
        title: 'Additional Incentive to Earn',
        cta: 'Apply Now',
        items: [
          {
            title: 'Apply Online',
            desc: 'Submit basic details on our website.',
            image: '1'
          },
          {
            title: 'Introduction',
            desc: 'Introduce our finance solution to companies.',
            image: '2'
          },
          {
            title: 'Exporter Sign Up',
            desc: 'The company signs the agreement with drip capital and finances their shipment.',
            image: '3'
          },
          {
            title: 'Get Commission',
            desc: 'Partners receive dedicated RM support and are paid on a quarterly basis.',
            image: '4'
          }
        ]
      },
      mainHero: {
        title: 'Partner with Drip Capital',
        title2: 'India’s Fastest Growing Trade Finance Company',
        // title3: '',
        subtitle:
          'Join our channel partnership program and monetize your relationship with exporters.',
        // getStarted: 'Get started',
        tips: [
          {
            tagline: 'Unparalleled Earnings',
            heading: '$2M+ Commission Rolled Out'
          },
          {
            tagline: 'Growing Community',
            heading: '1000+ Registered Partners'
          },
          {
            tagline: 'Widest Network',
            heading: '60+ Cities in India'
          }
        ]
      },
      contactForm: {
        title: 'A few details to get you started',
        placeholders: {
          name: 'Full Name',
          email: 'Email',
          organization: 'Company',
          address: 'Address',
          phone: 'Phone',
          message: 'Message',
          company: 'Company'
        },
        success: {
          title: 'Thank you for your interest!',
          description:
            'We will contact you shortly. For urgent queries please write to us on',
          desc2: 'or call on'
        },
        sendMessage: 'Submit',
        sendingMessage: 'Submitting Message'
      }
    },
    landing: {
      //are: require('./pages/landing/are'),
      tradeFinance: {
        phone: '+91-9987-779-334',
        email: 'cs@dripcapital.com',
        title:
          'Application Page for Finance Services in India by Drip CapitalOnline Factoring made Easy',
        description:
          'Use this page to apply for Drip Capital’s cross-border finance solutions in India',
        jumbotron: {
          title: 'Never wait for buyer payments',
          description:
            'Drip’s Trade Finance offering is helping exporters grow their business 30% m-o-m. With our invoice factoring solution, SMEs receive 80% of their invoice value upfront at the click of a button.',
          form: {
            title: 'A few details to get you started',
            successTitle:
              'Your Application has been received. Thank you for taking this step towards growing your Export business.',
            successDescription:
              'Our Export Finance Advisor will contact you within 3 hours. While you\'re here, check out our <a href="{faqHref}">FAQs</a>.',
            cta: 'Get Offer'
          },
          partnersTitle: 'Recommended by:'
        },
        advantage: {
          title: 'The Drip Advantage',
          items: [
            {
              title: 'Collateral Free Working Capital',
              desc: 'Fund your exports growth using just your trade receivables.'
            },
            {
              title: 'Credit Limit up to $3 Million',
              desc: 'Get post-shipment credit line up to $3 Million.'
            },
            {
              title: 'Competitive Pricing',
              desc: 'Cost of financing can be as low as 0.7% per month basis credit evaluation.'
            },
            {
              title: 'Paperless, Swift, Hassle-Free',
              desc: 'Use Portal by Drip for faster fulfilment and end-to-end service - all in one place.'
            }
          ]
        },
        statsTitle: 'About Drip Capital',
        stats: [
          {
            number: '$3',
            text: 'Trade Financed',
            suffix: 'Billion+'
          },
          {
            number: '6,000',
            text: 'Buyers & Suppliers',
            suffix: 'Customers'
          },
          {
            number: '100+',
            text: 'Trade Routes',
            suffix: 'Countries'
          },
          {
            number: '50,000+',
            text: 'Fastest Approvals',
            suffix: 'Transactions'
          }
        ],
        features: {
          title: 'The Drip Advantage',
          benefits: [
            {
              icon: 'icon1',
              title: 'Collateral free working capital',
              description:
                'Fund your exports growth using just your trade receivables.'
            },
            {
              icon: 'icon2',
              title: 'Credit limit up to $3 Million',
              description: 'Get post-shipment credit line up to $3 Million.'
            },
            {
              icon: 'icon3',
              title: 'Competitive pricing',
              description:
                'Cost of financing can be as low as 0.7% per month basis credit evaluation.'
            },
            {
              icon: 'icon4',
              title: 'Paperless, swift, transparent',
              description:
                'Use Portal by Drip for faster fulfilment and end-to-end service - all in one place.'
            }
          ]
        },
        conclusion: {
          title:
            'Apply now to avail post-shipment finance by factoring your export invoices.',
          cta: 'Apply Now'
        },
        news: {
          title: 'In the news',
          items: [
            {
              icon_url: 'fE',
              link: 'https://www.financialexpress.com/industry/sme/msme-fin-y-combinator-backed-drip-capital-crosses-1-billion-milestone-in-trade-financing-for-small-businesses/2171129/'
            },
            {
              icon_url: 'berg',
              link: 'https://www.bloombergquint.com/business/drip-capital-raises-dollar25-million-in-series-b-funding-from-accel-sequoia-others'
            },
            {
              icon_url: 'insider',
              link: 'https://markets.businessinsider.com/news/stocks/cb-insights-names-drip-capital-to-the-2020-fintech-250-list-1029582974'
            },
            {
              icon_url: 'forbes',
              link: 'https://www.forbes.com/advisor/in/personal-finance/in-conversation-with-pushkar-mukewar/'
            }
          ]
        },
        thankYou: {
          title: 'Thank you for your interest in Drip Capital',
          message:
            'Our Finance consultant will contact you within 48 hours. For urgent queries, please contact us on <a href="tel:+91-9987-779-334">+91-9987-779-334</a> / <a href="mailto:cs@dripcapital.com">cs@dripcapital.com</a>'
        }
      },
      buyerFinance: {
        title: 'Buyer Finance Solutions',
        description:
          'Drip Capital provides Flexible Supply Chain Finance & Inventory Finance Solutions for buyers around the world | Get your Offer Today',
        conclusion: {
          title:
            'Avail hassle-free finance on your import orders and purchases.',
          cta: 'Contact Sales',
          download: 'Download Brochure'
        }
      }
    },
    newHome: {
      title: 'Trade Finance Simplified',
      description:
        'Drip Capital is a Trade Finance company providing collateral-free post-shipment finance to Indian exporters with instant approvals and minimal documentation.',
      jumbotron: {
        title: 'Boost your exports with Drip',
        description:
          'Get advance against your trade receivables within 24&nbsp;hours with our paperless experience.',
        keyDescription: {
          tradefinance:
            'Finance your trade receivables within 24&nbsp;hours with our paperless experience.',
          dripcapital:
            'Finance your trade receivables within 24&nbsp;hours with our paperless experience.',
          indiafactoring:
            'Get your invoices factored within 24&nbsp;hours with our paperless experience',
          invoicecredit:
            'Get credit against your invoices within 24&nbsp;hours with our paperless experience.',
          invoicediscount:
            'Get your invoices discounted within 24&nbsp;hours with our paperless experience.',
          invoicefinance:
            'Finance your invoices within 24&nbsp;hours with our paperless experience.'
        },
        getStarted: 'Get Started',
        imgAlt: 'Portal Screenshot'
      },
      features: {
        title: 'The Drip Advantage',
        benefits: [
          {
            icon: 'icon1',
            title: 'Get collateral-free working capital',
            keyTitle: {
              tradefinance: 'Get collateral-free trade finance',
              dripcapital: 'Get collateral-free trade finance',
              indiafactoring: 'Get collateral-free trade finance',
              invoicecredit: 'Get collateral-free trade finance',
              invoicediscount: 'Get collateral-free trade finance',
              invoicefinance: 'Get collateral-free trade finance'
            },
            description:
              "Fund your company's growth using just your trade receivables.",
            keyDescription: {
              tradefinance:
                "Fund your company's growth with Drip's invoice factoring.",
              dripcapital:
                "Fund your company's growth with Drip's invoice factoring.",
              indiafactoring:
                "Fund your company's growth with Drip's invoice factoring.",
              invoicecredit:
                "Fund your company's growth with Drip's credit against invoice.",
              invoicediscount:
                "Fund your company's growth with Drip's invoice discounting.",
              invoicefinance:
                "Fund your company's growth with Drip's invoice financing."
            }
          },
          {
            icon: 'icon2',
            title: 'Paperless, Swift, Transparent',
            description:
              'Use Portal by Drip for paperless, faster fulfilment and end-to-end service - all in one place.'
          },
          {
            icon: 'icon3',
            title: 'Get the competitive edge',
            description:
              "Use Drip's advanced analytics and market-insight tools to stay ahead of the curve."
          },
          {
            icon: 'icon4',
            title: 'The Drip Assurance',
            description:
              'Over 100 exporters financed across 50+ cities in India with buyers across 30+ countries, helping exporters grow 30% MoM.'
          }
        ]
      },
      onboarding: {
        title: 'Portal by Drip',
        steps: [
          'Sign-up online to check eligibility and get a quote.',
          'E-sign to confirm terms - no physical signature needed.',
          'Get money in your account within 24 hours.',
          'Add & track future invoices & payments online.'
        ],
        imgAlt: 'Add Invoice Screenshot'
      },
      insights: {
        title: 'Business Insights at your fingertips',
        texts: [
          'Presenting DripView - advanced business analytics to better understand your exports.',
          "Get global commodity insights with access to DripTrade, Drip's trade data platform."
        ],
        imgAlt: 'Insights Screenshot'
      },
      conclusion: {
        title: 'Get started today',
        t1: 'The solution to your working capital woes is just one click away.',
        cta: 'Get Started'
      },
      testimonials: [
        {
          item: "Drip's portal made the entire documents process very easy, eliminating the need to courier documents every time.",
          name: 'Jaspreet Singh',
          location: 'Chandigarh based exporter'
        },
        {
          item: 'We were able to significantly increase sales to existing customers by shortening our working capital cycle. Thanks to Drip, we have also added new buyers by offering competitive credit terms.',
          name: 'Karthikesan V',
          location: 'Chennai based Manufacturer'
        },
        {
          item: 'Drip’s facility freed up our existing bank limit thereby helping us in making timely purchases during peak season. Further we managed to get increased large orders from existing customers.',
          name: 'Harish K',
          location: 'Andhra Pradesh based Commodity Exporter'
        }
      ]
    },
    bankDetails: {
      seoTitle: 'Bank Details',
      title: 'Drip Capital Bank Details',
      dropdownTitle: 'Please select currency from the dropdown below:',
      description:
        'Drip Capital is a Trade Finance company providing collateral-free post-shipment finance to Indian exporters with instant approvals and minimal documentation.',
      keys: {
        bankName: 'Bank Name',
        bankAddress: 'Bank Address',
        accName: 'Account Name (For Credit To)',
        accAddress: 'Beneficiary Address',
        bName: 'Beneficiary Name (For Credit To)',
        accNo: 'Account No.',
        bNo: 'Beneficiary Account No.',
        aba: 'ABA Routing & Transit No.',
        bankRoutingNumber: 'Bank Routing Number',
        swift: 'SWIFT Code',
        swiftIf: 'SWIFT Code (If Needed)',
        iban: 'IBAN',
        bankSortCode: 'Bank Sort Code',
        beneficiary: {
          bankName: 'Beneficiary Bank Name',
          bankAddress: 'Beneficiary Bank Address',
          swift: 'Beneficiary SWIFT Code',
          accName: 'Beneficiary Name (For Credit To)',
          accNo: 'Beneficiary Account No.'
        },
        correspondent: {
          bankName: 'Correspondent Bank Name',
          bankAddress: 'Correspondent Bank Address',
          swift: 'Correspondent Bank SWIFT'
        }
      },
      usd: {
        title: 'USD ($)',
        desc1:
          'Please remit all United States Dollar (<b>USD</b>) payments electronically to:'
      },
      eur: {
        title: 'EUR (€)',
        desc1:
          'Please remit all Euro (<b>EUR</b>) payments electronically via SEPA or Wire to:'
      },
      gbp: {
        title: 'GBP (£)',
        descJpMorgan:
          'Please remit all British Pound Sterling (GBP) payments electronically via Faster Payments (if payment less than GBP 250,000) or CHAPS (if more than GBP 250,000) to:',
        desc1:
          ' Please remit all British Pound Sterling (<b>GBP</b>) payments electronically to:',
        desc2: 'For CHAPS payment'
      },
      aud: {
        title: 'AUD (A$)',
        desc1:
          'Please remit all Australia Dollar (<b>AUD</b>) payments electronically to:'
      },
      sgd: {
        title: 'SGD (S$)',
        desc1:
          'Please remit all Singapore Dollar (<b>SGD</b>) payments electronically to:'
      },
      cad: {
        title: 'CAD (C$)',
        desc1:
          'Please remit all Canadian Dollar (<b>CAD</b>) payments electronically to:'
      }
    },
    bankDetailsJpm: {
      title: 'JP MORGAN',
      desc1: 'Please remit all payments electronically to:'
    },
    bankDetailsJpmGoTrade: {
      mainTitle: 'Drip Capital Bank Details',
      seoTitle: 'Bank Details',
      title1: 'Wire Transfers (USD)',
      title2: 'ACH Payments (USD)',
      description:
        'Drip Capital is a Trade Finance company providing collateral-free post-shipment finance to Indian exporters with instant approvals and minimal documentation.',
      desc1: 'Please remit all payments electronically to:',
      keys: {
        beneficiary: {
          bankName: 'Beneficiary Bank Name',
          bankAddress: 'Beneficiary Bank Address',
          accName: 'Account Name (For Credit To)',
          address: 'Beneficiary Address',
          accNo: 'Account No.',
          swift: 'SWIFT Code',
          bankRouting: 'Bank Routing Number'
        }
      }
    },
    advanceAgainstPO: {
      title: 'Working Capital Finance Solutions for Exporters',
      description:
        'Drip Capital provides easy access to collateral-free working capital finance solutions for exporters. Submit your export invoices and get paid within 24 hours.',
      mainHero: {
        title: 'Advance Against ',
        title2: 'Purchase Order (PO)',
        lead: [
          'Sell through Drip Capital and get paid in advance',
          'before you ship.'
        ],
        getStarted: 'Get Started',
        tips: [
          {
            tagline: 'Higher Procurement Limits',
            heading: '$3 million'
          },
          {
            tagline: 'Cost-Efficient',
            heading: 'Competitive pricing'
          },
          {
            tagline: 'Simple Access',
            heading: 'Paperless digital process'
          }
        ]
      },
      advantage: {
        title: 'The Drip Advantage',
        items: [
          {
            title: 'Collateral free working capital',
            desc: 'Submit your invoices to receive advances against your account receivables.'
          },
          {
            title: 'Efficient and Competitive',
            desc: 'A digital and flexible solution with higher limits and competitive pricing.'
          },
          {
            title: 'Increase Liquidity and Grow Sales',
            desc: 'Expand your business and improve your cash flow to finance your growth.'
          },
          {
            title: 'Fast, Easy, and Transparent',
            desc: 'Complete digital onboarding with minimal paperwork, finance invoices via Drip’s portal, and receive funds within 24 hours.'
          }
        ]
      },
      capital: {
        title: 'How it works',
        items: [
          {
            title: 'Your PO Issued',
            desc: 'The buyer places a PO on Voyager, who then places it with you.',
            image: '1'
          },
          {
            title: 'Initial Advance',
            desc: 'Voyager pays you up to 60% of the PO value upfront.',
            image: '2'
          },
          {
            title: 'Shipment Stage',
            desc: 'Upload the Bill of Lading and receive another 20%.',
            image: '3'
          },
          {
            title: 'Final payment on Due date',
            desc: 'Once the buyer pays Voyager, you get the balance 20%.',
            image: '4'
          }
        ],
        cta: 'Get an Offer'
      },
      successStories: {
        title: 'What Our Clients Say About Us',
        items: [
          {
            desc: 'We were able to significantly increase sales to existing customers by shortening our working capital cycle. Thanks to Drip, we have also added new buyers by offering competitive credit terms.',
            owner: 'Karthikesan V - Chennai based Manufacturer',
            icon: 'export.png'
          },
          {
            desc: 'Drip’s facility freed up our existing bank limit thereby helping us in making timely purchases during peak season. Further we managed to get increased large orders from existing customers.',
            owner: 'Harish K - Andhra Pradesh based Commodity Exporter'
          },
          {
            desc: "Drip's portal made the entire documents process very easy, eliminating the need to courier documents every time.",
            owner: 'Jaspreet Singh - Chandigarh based exporter'
          }
        ]
      },
      leaders: {
        title: 'Our Customers Work with Industry Leaders',
        items: [
          {
            icon_url: 'bernas'
          },
          {
            icon_url: 'colgate'
          },
          {
            icon_url: 'corning'
          },
          {
            icon_url: 'macdonald'
          }
        ]
      },
      growth: {
        title: 'Get 80% of your receivables financed within 24 hours',
        desc: 'Take control of when you get paid for your export invoices with our one-click collateral-free non-recourse financing solution. Apply now to start your journey with Drip Capital.'
      },
      conclusion: {
        title: 'Earn with Drip Capital',
        leads: [
          'Work as our Partner and monetize your relationship with exporters.',
          "Introduce Drip's export bill discounting solution to exporters and earn attractive rewards for your reference.",
          'Get in touch with us for further information.'
        ],
        cta: 'Get Started'
      },
      eligibility: {
        desc: 'Earn with Drip Capital',
        check: 'Check Eligibility',
        line1:
          "Work as our Partner and monetize your relationship with exporters. Introduce Drip's export bill discounting solution to exporters and earn attractive rewards for your reference.",
        line2:
          "Introduce Drip's export bill discounting solution to exporters and earn attractive rewards for your reference."
      },
      apply: {
        title: 'Check Eligibility',
        description:
          'Indian exporters now get paid upfront for shipments to over 30 countries. No Paperwork, financing at the click of a button upon shipment.',
        form: {
          title: 'You are one step away from your offer letter'
        },
        alt1: 'Application Help',
        tags: [
          'Collateral-free working capital',
          'Quick approval for credit upto $3 Million',
          'Increase sales by offering credit'
        ]
      },
      awards: {
        title: 'Global Awards and Certifications',
        items: [
          'combinator.png',
          'red-herring.png',
          'fintech-250.png',
          'gptw.png',
          'banking-tech.png',
          'future-unicorn.png',
          'etbfsi_exceller.jpg'
        ]
      },
      whoIsThisFor: {
        title: 'Who Is This For?',
        intro:
          'Advance Against Purchase Order (PO) is specially designed for exporters with varying needs, including:',
        points: [
          {
            normal:
              'Exporters who need advance payments to manage limited working capital.'
          },
          {
            normal:
              'Exporters who wish to accelerate cash flow without offering additional collateral.'
          }
        ],
        closing:
          'This solution is designed to bridge the gap between order receipt and invoice generation.'
      },

      earlyAccess: {
        title: 'Get up to 60% advance payment even before you ship.',
        line1:
          'Our trading subsidiary, Voyager Trading will act as your reseller/distributor in overseas markets and purchase from you on up to 60% advance payment terms so you can cover production and logistics costs before you ship.',
        line2: ''
      }
    },
    thankYou: require('./pages/thank-you'),
    bankDetailsIndia: {
      seoTitle: 'Bank Details',
      title: 'Drip Capital Bank Details',
      description:
        'Drip Capital is a Trade Finance company providing collateral-free post-shipment finance to Indian exporters with instant approvals and minimal documentation.',
      keys: {
        bankName: 'Bank Name',
        bankAddress: 'Bank Address',
        accName: 'Account Name (For Credit To)',
        accNo: 'Account No.',
        ifscCode: 'IFSC Code'
      },
      inr: {
        title: 'AXIS BANK',
        desc1: 'Please remit all payments electronically to:'
      }
    },
    voyagerBankDetails: {
      mainTitle: 'Voyager Trading Bank Details',
      seoTitle: 'Voyager Bank Details',
      title1: 'Wire Transfer',
      title2: 'ACH',
      description:
        'Drip Capital is a Trade Finance company providing collateral-free post-shipment finance to Indian exporters with instant approvals and minimal documentation.',
      descUS:
        'Please remit all United States Dollar (USD) payments electronically to:',
      descEUR:
        'Please remit all Euro (EUR) payments electronically via SEPA or Wire to:',
      keys: {
        bankName: 'Bank Name',
        bankAddress: 'Bank Address',
        accName: 'Account Name (For Credit To)',
        address: 'Beneficiary Address',
        iBan: 'IBAN',
        accNo: 'Account Number',
        swift: 'SWIFT Code',
        abaRouting: 'ABA Routing & Transit No.'
      }
    },
    about: {
      title: 'About Drip Capital Inc.',
      description:
        'Drip Capital is a Trade Finance company providing collateral-free post-shipment finance to Indian exporters with instant approvals and minimal documentation.',
      mainHero: {
        title: 'Technology-enabled',
        title2: 'Trade Finance Solutions',
        lead: [
          'By leveraging international trade data, Drip Capital’s innovative &',
          'quick financing solutions help global SMEs scale their businesses'
        ],
        tips: [
          {
            tagline: 'Trade Financed',
            heading: '$7+ billion USD'
          },
          {
            tagline: 'Global Presence',
            heading: '100+ Countries'
          },
          {
            tagline: 'Empowering SMBs',
            heading: '9,000+ Companies'
          }
        ]
      },
      why: {
        title: 'The trade finance platform for the future',
        items: [
          {
            title: 'Collateral free working capital',
            description:
              'We empower SMBs by providing them access to safe, efficient and collateral free finance. Businesses are paying off their suppliers on time, increasing manufacturing capacity and accelerating product expansion.'
          },
          {
            title: "Drip's risk assessment platform",
            description:
              'We use advanced statistical models and predictive algorithms on extensive data sets to identify financing opportunities. We apply over 100 checks to ensure only the highest quality of opportunities are approved.'
          },
          {
            title: 'Alternative income for institutional investors',
            description:
              'We raise capital in the US providing high yields and uncorrelated, liquid investment opportunities. We funnel it to emerging markets where capital is the biggest constraint for growth'
          }
        ]
      },
      map: {
        title: 'Powering SMBs across the globe'
      },
      values: {
        title: 'Core Operating Principles',
        values: [
          {
            title: 'Customer Obsession',
            text: 'Our clients are at the centre of everything we do. We are obsessive about our partnership. We provide real solutions for real SMB customer problems to stay relevant and ahead of the curve.'
          },
          {
            title: 'Insist on the Highest Standards',
            text: 'We set the highest standards across all aspects - people, products, process and technology. We settle for nothing short of excellence. We recognise, hire, develop and promote exceptional talent.'
          },
          {
            title: 'Think Big & Bold',
            text: 'At Drip, we drive small and medium businesses’ growth to create impact in industries and communities. We question the status quo with bigger and bolder possibilities. Big dreams inspire and challenge us.'
          },
          {
            title: 'Be Humble',
            text: 'We respect and appreciate each other. We listen, act genuinely and non-judgmentally. We are self-honest to accept our mistakes and hungry to learn.'
          },
          {
            title: 'Ownership',
            text: "No problems is ‘someone else's problem’. We create long term value over short term gains. We stay connected to the details; nothing is beneath us. We take ownership and make the right judgement."
          },
          {
            title: 'One Drip. One Happy Team',
            text: 'Our greatest asset at Drip is the talent working together to create something special. What makes us successful is our aligned purpose. Transparency, trust, competence and collaboration drive us. We strive to nurture a workplace beaming with joy and happiness.'
          },
          {
            title: 'Thoughtful Bias towards Action',
            text: 'We focus on the truly important. We break complex problems into smaller, digestible pieces that we can quickly act on to continuously push the ball forward. Our decisions are made analytically.'
          },
          {
            title: 'Deliver Meaningful Results',
            text: 'Meaningful results matter to us. We go above and beyond to deliver results with tenacity and pride. Despite difficulties, we rise to the occasion and leap forward.'
          }
        ]
      },
      lifeAtDrip: {
        title: 'Life at Drip Capital',
        images: ['carousel-1', 'carousel-2', 'carousel-3']
      },
      locations: {
        title: 'Locations',
        items: [
          {
            name: 'Palo Alto',
            img: 'california',
            imgM: 'c',
            company: 'Drip Capital Inc.',
            address1: '1885 El Camino Real',
            address2: 'Palo Alto, CA 94306'
          },
          {
            name: 'Mexico',
            img: 'mexico',
            imgM: 'm',
            company: 'Bradley 75, Anzures, Miguel Hidalgo,',
            address1: '11590 Ciudad de México,',
            address2: 'CDMX'
          },
          {
            name: 'Mumbai',
            img: 'mumbai',
            imgM: 'mu',
            company: 'Drip Capital Services India LLP',
            address1: '1221, 2nd Floor, Building 12 Solitaire Corporate Park,',
            address2:
              'Guru Hargovindji Rd, Chakala, Andheri East, Mumbai, Maharashtra 400093'
          }
        ]
      }
    },
    glossary: require('./pages/glossary')
  },
  landing: {
    exporter: {
      title: 'Grow Your Faster Business',
      description:
        'Free your international accounts receivable and grow your business faster',
      main: {
        title: 'We offer you export factoring for your accounts receivable',
        lead1: 'Credit limit up to US $ 2.5 million',
        lead2:
          '80% of the value of the invoice as soon as the shipment arrives',
        lead3: 'Competitive interest rates'
      }
    },
    common: {
      form: {
        title: '' // blank for now.
      }
    },
    peloton: {
      jumbotron: {
        title: 'Get a free peloton bike.Be healthy. Earn interest.',
        lead: 'Drip Capital already offers attractive interest rates. Now for the month of July, we are offering a brand new Peloton Bike to all new investors.<br>No strings attached.',
        cta: 'Get your bike'
      },
      about: {
        title: 'Drip is a digital trade finance platform for investors',
        description: `<p class="lead">Drip offers accredited individual investors unprecedented access to uncorrelated, attractive absolute returns. Investors have access to these returns via Drip Notes.</p>
        <p class="lead">Drip bridges the working capital needs for international exporters while providing a truly different and better alternative for fixed income investors seeking attractive risk adjusted returns.</p>
        <p class="lead">Drip's equity investors include top tier venture firms like Accel, Sequoia, Wing VC and Y-Combinator.</p>`
      },
      chart: {
        title: '1 Year Yields for Drip Note vs. Large US Banks 1 Year CDs*',
        disclaimer:
          'Largest US banks shown here for illustrative purposes have FDIC Insured accounts. Drip’s debt notes are not FDIC insured and not guaranteed. Largest US banks offerings shown here for illustrative purposes have similar liquidity terms (i.e 1 Year CDs and 1 Year Drip Note). Risks may differ. Comparison is limited to the largest US banks and does not include rates of other online banks. Rates of the selected banks were obtained from Informa Research Services, www.informars.com, and reflect New York high yield savings rates for similar products offered at the select banks with a minimum balance of at least $2,500. Informa has obtained the data from the various financial institutions that it tracks and its accuracy cannot be guaranteed. <br/> <br/> Drip is not a bank or other chartered depository institution. Funds held by Company or its service providers (including any bank service providers) in connection with the investment in Drip debt notes are not deposit obligations and are not insured for the benefit of the investor by the Federal Deposit Insurance Corporation or any other governmental agency.',
        disclaimerShow: '*Show disclaimer',
        disclaimerHide: 'Hide disclaimer'
      },
      stats: {
        title: 'Quick Facts on Drip Capital',
        items: [
          {
            header: 'Lock in a great rate:',
            figure: '3%',
            footer: 'Annual Yield, Interest Paid Monthly'
          },
          {
            header: 'Short Term:',
            figure: '1-3',
            footer: 'years options'
          },
          {
            header: 'Low Risk:',
            figure: '$0',
            footer: 'losses on note’s principal since inception'
          }
        ]
      },
      steps: {
        title: 'How to get your free Peloton Bike*',
        description:
          'Pick one option below to: Get a 2.5% APY Return, get your money back and get your free Peloton Bike immediately',
        steps: [
          'Invest $35k, $50k or $100k with Drip.',
          'Drip will send you the new Peloton bike right away. It’s yours to keep.',
          'Earn 3% APY monthly interest sent to your bank account. Get 100% of your money back in 1-3 years.'
        ],
        cta: 'Get Started',
        disclaimer:
          '*$2,500 value (includes bike, sales, taxes, shipping and installation/setup)'
      },
      testimonials: [
        {
          quote:
            'The Peloton classes are truly amazing and challenging as I ride with the best instructors live from NYC. It is a totally different experience if you’ve been a studio rider like I was. Ride on!!',
          name: 'Naomi A.',
          location: 'Palo Alto, CA'
        },
        {
          quote:
            'I’m getting a much higher rate on my cash which was earning close to nothing at my bank. Getting my free Peloton Bike was fast, easy and mine to keep!',
          name: 'Ken B.',
          location: 'Houston, TX'
        },
        {
          quote:
            'I was hesitant to buy this expensive bike. No more – With Drip, I got the bike for free and earned interest. This bike changed my life as I have more energy, feel happier and stronger. Thank you Drip!',
          name: 'Nicole K.',
          location: 'New York, NY'
        }
      ],
      getInTouch: {
        title: 'Get in touch',
        location: 'PALO ALTO, CA',
        email: 'EMAIL'
      },
      contact: {
        title: 'Apply for your free Peloton Bike',
        placeholders: {
          name: 'Full Name',
          email: 'Email',
          phone: 'Phone',
          amount: 'Investment Amount',
          productCategory: 'What do you export?',
          company: 'Company',
          state: 'State',
          exporters: 'Are you an exporter?'
        },
        success: {
          title: 'Thanks for your interest!',
          description:
            'Our team will contact you shortly with the details on how to get your Peloton Bike. For urgent queries, please contact us at <a href="mailto:specials@dripcapital.com">specials@dripcapital.com</a>'
        },
        submit: 'Submit',
        submitting: 'Submitting'
      }
    },
    partners: {
      fieo: {
        title: 'Partners FIEO',
        description:
          'FIEO and Drip Capital sign MoU to solve working capital needs of exporters',
        jumbotron: {
          reg: 'Register with Drip Capital',
          line1:
            "FIEO members can now get paid upfront for their invoices using Drip's invoice factoring and use this capital to grow their business."
        },
        success: [
          {
            primary: 'More than',
            stat: '₹3500 Cr',
            sec: 'of Trade Financed'
          },
          {
            primary: 'Working with',
            stat: '350+',
            sec: 'Exporters'
          },
          {
            primary: 'Work across exporters in',
            stat: '60+',
            sec: 'Cities'
          },
          {
            primary: 'Work across buyers in',
            stat: '40+',
            sec: 'Countries'
          }
        ],
        benefits: {
          title: 'Partnership benefits for FIEO members',
          content: [
            {
              icon: 'chart',
              title: 'Collateral free working capital',
              desc: 'The financing is unsecured and offered without any collateral.'
            },
            {
              icon: '2.5million',
              title: 'Credit limit up to $3 Million',
              desc: 'Drip’s working capital offering to exporters is a credit line, which ranges from USD 100 thousand to USD 2.5 million, depending on the exporter’s size and requirement.'
            },
            {
              icon: 'dollar',
              title: 'Advance of up to 80% invoice value',
              desc: 'Exporters can now get paid upfront for their invoices. Invoice factoring can help release upto 80% of invoice value stuck.'
            },
            {
              icon: 'saving',
              title: 'Preferential pricing',
              desc: 'FIEO members are now eligible for preferential pricing for Drip Capitals invoice factoring. FIEO members can now save upto $2000 on cost of finance.'
            }
          ],
          testimonials: [
            {
              exporter: 'Food Products Exporter',
              location: 'Anand, Gujarat',
              desc: 'We were able to double our sales with timely access to working capital from Drip',
              icon: 'testimonial-2'
            },
            {
              exporter: 'Textile and Apparel Exporter',
              location: 'Chennai, Tamil Nadu',
              desc: "Our company now sells to 6 more buyers in 4 different countries since we now offer credit terms with Drip's help",
              icon: 'testimonial-1'
            },
            {
              exporter: 'Frozen Seafood Exporter',
              location: 'Bhimavaram, Andhra Pradesh',
              desc: 'We were able to fulfill a sudden high demand of orders on receiving working capital from Drip in as little as a week',
              icon: 'testimonial-3'
            }
          ]
        },
        events: {
          title: "Upcoming FIEO + Drip Capital's Events",
          reg: 'Register for this event',
          regSuccess: 'Registration Successful',
          upcoming: [
            {
              img: 'ludhiana',
              city: 'Ludhiana',
              state: 'Punjab',
              date: 'May 23, 2019',
              desc: 'Drip Capital organizes a interactive session on Trade Finance for exporters based out of Ludhiana.'
            },
            {
              img: 'jodhpur',
              city: 'Jodhpur',
              state: 'Rajasthan',
              date: 'May 24, 2019',
              desc: 'Drip Capital organizes a interactive session on Trade Finance for exporters based out of Jodhpur.'
            },
            {
              img: 'kanpur',
              city: 'Kanpur',
              state: 'Uttar Pradesh',
              date: 'May 29, 2019',
              desc: 'Drip Capital organizes a interactive session on Trade Finance for exporters based out of Kanpur.'
            }
          ]
        }
      }
    }
  },
  common: {
    form: {
      title: 'Register',
      placeholders: {
        name: 'Full Name',
        email: 'Email',
        phone: 'Phone',
        company: 'Company',
        iec: 'IEC Number',
        interest: "I'm Interested in",
        products: 'What products do you export?',
        city: 'City',
        state: 'State'
      },
      applyNow: 'Register',
      applying: 'Applying',
      submit: 'Apply Now',
      submitting: 'Submitting',
      success: {
        title: 'Thanks for your interest!',
        desc: 'Our team will contact you shortly with the details on how to invest in Drip. For urgent queries, please contact us at'
      }
    }
  },
  blog: {
    title: 'Trade Finance Blog',
    description:
      'Read the latest ideas and expert views on the state of global trade, export finance and MSME business growth',
    keywords: ['Trade Finance', 'Finance', 'Export'],
    jumbotron: {
      title: 'Simplified Trade Finance'
    },
    header: {
      home: 'Home',
      about: 'About Us',
      hiw: 'How It Works',
      contact: 'Contact Us',
      faqs: 'FAQs'
    },
    listing: {
      articlesOn: 'Articles On',
      minRead: 'min read',
      readMore: 'Read More'
    },
    widgets: {
      subscribe: {
        title: "Subscribe to Drip's Blog",
        desc: 'Enter your email address to subscribe to this blog and receive notifications of new posts by email.',
        subscribe: 'Subscribe',
        subscribing: 'Subscribing'
      },
      topPosts: {
        title: 'Top Rated Posts'
      }
    },
    relatedPosts: {
      title: 'Related Posts'
    }
  },
  resources: {
    title: 'Global Trade & Export Finance Resources',
    description:
      'Discover the latest trends, insights and industry specific forecasts in global trade & export finance.',
    sidebar: {
      title: 'Categories'
    },
    list: {
      blog: 'Blog',
      viewAll: 'View All'
    }
  },
  news: {
    title: 'In the News',
    items: [
      {
        icon_url: 'et',
        link: 'https://cio.economictimes.indiatimes.com/news/strategy-and-management/drip-capital-enhances-risk-predictability-model-to-counter-security-hurdles/94521312'
      },
      {
        icon_url: 'bw',
        link: 'https://bwdisrupt.businessworld.in/article/Drip-Capital-Vayana-TradeXchange-Partner-To-Support-SMEs/22-12-2022-459026/'
      },
      {
        icon_url: 'tfe',
        link: 'https://www.financialexpress.com/life/technology-drip-capital-helping-small-businesses-to-access-capital-and-scale-further-2412840/'
      },
      {
        icon_url: 'thbl',
        link: 'https://www.thehindubusinessline.com/companies/msme/drip-capital-plans-trade-facilitation-services-to-support-smbs/article65313929.ece'
      },
      {
        icon_url: 'bs',
        link: 'https://www.business-standard.com/content/press-releases-ani/drip-capital-named-on-y-combinator-s-top-companies-list-122030301056_1.html'
      }
    ]
  },
  cautionaryAlertModal: {
    title: 'Important Notice',
    body: 'Beware of fraudsters falsely claiming affiliation with Drip Capital, Inc. on various platforms.',
    button: 'Read our cautionary notice'
  }
}
