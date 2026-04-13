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
    links: {
      resources: '/resources',
      blog: '/resources/blog',
      hsncode: '/hsn-code',
      financeGuides: '/resources/finance-guides'
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
  header: {
    home: 'Home',
    signIn: 'Login',
    startApplication: 'Get Started',
    applyNow: 'Get Started',
    mainHeader: {
      navItems: [
        {
          text: 'For Buyers',
          path: 'importers'
        },
        {
          text: 'For Suppliers',
          path: 'exporters'
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
      companyNavIn: [
        {
          text: 'About Us',
          link: 'about'
        },
        {
          text: 'Contact',
          link: 'contact'
        }
      ],
      companyNavOut: [
        {
          text: 'Leadership Team',
          link: '/leadership'
        },
        {
          text: 'Careers',
          link: '/careers'
        }
      ],
      resources: [
        {
          text: 'Blog',
          link: '/resources/blog'
        },
        {
          text: 'HSN Code Finder',
          link: '/hsn-code'
        },
        {
          text: 'Glossary',
          link: '/glossary-of-shipping-terms'
        },
        {
          text: 'Finance Guides',
          link: '/resources/finance-guides'
        }
      ]
    },
    countrySelector: [
      {
        title: 'India',
        locale: 'en-in'
      },
      {
        title: 'Mexico',
        locale: 'es-mx'
      },
      {
        title: 'USA',
        locale: 'en-us'
      }
    ]
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
      exporters: 'Suppliers',
      importers: 'Buyers',
      investors: 'Investors',
      partner: 'Partner with us',
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
      resources: 'Resources'
    },
    copyright: {
      terms: 'Terms of Use',
      policy: 'Privacy Policy',
      termsAndConditions: '*T&C Apply',
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
    },
    partners: { global_phone: '+1 (650) 437 0165' }
  },
  pages: {
    newsroom: require('./pages/newsroom'),
    gotrade: {
      pageTitle:
        'Drip Capital | Inventory Financing | Trade Finance Simplified',
      metaDescription:
        'Drip’s Go-Trade is a Inventory Finance Credit Line for importers. We help buyers unlock working capital stuck in inventory and also provides just in time inventory. Drip Capital has partnered with the leading Freezer Services companies and can finance inventory stored in 500+ warehouses with ease',
      title: 'Gotrade',
      jumbotron: {
        title: 'Get paid for unsold or in-transit inventory',
        para1:
          'Drip Trade helps Buyers in the United States unlock working capital in their supply chain.',
        para2:
          'Drip Trade can purchase your unsold inventory in your warehouse or pay your vendors on your behalf.'
      },
      thankYou: {
        pageTitle: 'Thank You | Drip Capital',
        jumbotronText:
          'Our trade finance advisor will contact you within 2 business days. For urgent queries, please contact us on'
      },
      partners: {
        title: 'Our Partners'
      },
      investors: {
        title: 'Our Investors'
      },
      phone: '+91-9987-779-334',
      email: 'cs@dripcapital.com',
      contact: 'Contact Us'
    },
    // todo: change
    languages: {
      spanish: 'Español',
      english: 'English'
    },
    countries: {
      global: 'Global',
      india: 'India',
      mexico: 'Mexico',
      uae: 'UAE',
      us: 'USA',
      ecuador: 'Ecuador'
    },
    thankYou: require('./pages/thank-you'),
    thank: {
      title: 'Gracias por solicitar',
      headline: 'Gracias por solicitar una verificación de elegibilidad',
      p1: 'Gracias por solicitar una verificación de elegibilidad.',
      p2: 'Nuestro asesor financiero de exportación se pondrá en contacto con usted dentro de 2 días hábiles. Para consultas urgentes, contáctenos en <a href="tel:+52-55-4161-1579">+52-55-4161-1579</a> / <a href="mailto:contacto@dripcapital.com">contacto@dripcapital.com</a>'
    },
    tradex: {
      mainHero: {
        title: 'Innovative procurement',
        title2: 'and supply chain solutions',
        title3: 'for your business',
        lead: [
          'We help you source and procure the products on your terms,',
          'so you can focus on building your business!'
        ],
        tips: [
          {
            tagline: 'Trade facilitated',
            heading: '12000 Cr INR'
          },
          {
            tagline: 'Our buyers & sellers base',
            heading: '13000'
          },
          {
            tagline: 'Annual shipments',
            heading: '50,000+'
          }
        ]
      },
      informationSection: {
        title: 'About Us',
        aboutContent: [
          {
            text1: 'End-to-end supply chain solutions',
            text2: 'Seamless sourcing & delivery',
            image: 'supply-chain'
          },
          {
            text1: 'Simplifies Domestic & Cross Border Procurement',
            text2: 'Quality materials at competitive prices',
            image: 'domestic-procurement'
          },
          {
            text1: 'Supported by Scale, Global Footprint',
            text2: 'Worldwide presence to enhance service delivery',
            image: 'world'
          }
        ],
        imageUrl: 'advantage.png',
        content1: `At Voyager, we enable trade through bespoke and customized solutions
          no matter where you may be buying from. Our team of dynamic and
          seasoned professionals leverage our global networks to turbo-charge
          your supply chain by deploying the best practices across logistics,
          procurement and market expansion.`,
        content2: `Our services span 20+ Industry verticals in India including, but not
          limited, to Solar Energy, Chemicals, Garments, Machinery & Heavy
          Equipments and our supply chain services support sales and
          procurements from all major trading countries.`
      },
      featureCard: [
        {
          name1: 'Refined Copper',
          name2: 'and Copper alloys',
          hsCode: 'HS Code: 7403',
          url: 'refined-copper'
        },
        {
          name1: 'Aluminum Scrap',
          name2: '(including zorba)',
          hsCode: 'HS Code: 76020010',
          url: 'aluminum-scrap'
        },
        {
          name1: 'SS Scrap',
          name2: '(including zurik)',
          hsCode: 'HS Code: 72042190',
          url: 'ss-scrap'
        },
        {
          name1: 'Aluminum Ingots',
          name2: '',
          hsCode: 'HS Code: 76012010',
          url: 'aluminum-ingots'
        },
        {
          name1: 'Aluminum Wire rods',
          name2: '',
          hsCode: 'HS Code: 76051100',
          url: 'aluminum-wire-rods'
        },
        {
          name1: 'Aluminum SS Coils',
          name2: '300/400 series grade',
          hsCode: 'HS Code: 72193390 / 490',
          url: 'ss-coils'
        }
      ]
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
            heading: '$4+ billion USD'
          },
          {
            tagline: 'Global Presence',
            heading: '100+ Countries'
          },
          {
            tagline: 'Empowering SMBs',
            heading: '6,000+ Companies'
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
      leadership: {
        title: 'Global Leadership',
        items: [
          {
            name: 'Pushkar Mukewar',
            img: 'pushkar',
            description:
              'As Co-founder and CEO, Pushkar leads the 180+ member team at Drip. He has 13+ years of experience in the financial domain with global firms like Saama Capital and Capital One. He is also a Wharton MBA and Georgia tech alumnus.',
            social: [
              {
                icon: 'linkedin',
                url: 'https://www.linkedin.com/in/pushkar-mukewar-0316951/'
              }
            ]
          },
          {
            name: 'Tej Mulgaonkar',
            img: 'tej',
            description:
              'Tej leads Operations and Financial Products and has built Drip’s core risk management infrastructure that helped scale to over a billion dollars of transactions. He is an IIT Bombay alumnus experienced in scaling early-stage businesses.',
            social: [
              {
                icon: 'linkedin',
                url: 'https://www.linkedin.com/in/pushkar-mukewar-0316951/'
              }
            ]
          },
          {
            name: 'Edmundo Montaño',
            img: 'edmundo',
            description:
              'Edmundo heads the Mexico business, where his team focuses on growth and customer success. He has 9+ years of experience at tech companies such as Rocket Internet and Amazon and has an MBA from the Harvard Business School.',
            social: [
              {
                icon: 'linkedin',
                url: 'https://www.linkedin.com/in/edmundomontano/'
              }
            ]
          },
          {
            name: 'Viraj Shah',
            img: 'viraj',
            description:
              'Viraj heads the India business, where his team focuses on Growth and customer success. An IIT Bombay alum and entrepreneur at heart, he co-founded Niffler, which was eventually acquired by Amazon India',
            social: [
              {
                icon: 'linkedin',
                url: 'https://www.linkedin.com/in/shahviraj/'
              }
            ]
          },
          {
            name: 'Meenakshi Iyengar',
            img: 'meenakshi',
            description:
              'Meenakshi leads People function at Drip driving people strategy and development and making Drip the best place to work. She has worked with high growth companies like GENPACT and Hutch and was Global HR head for Fractal Analytics and BrowserStack.',
            social: [
              {
                icon: 'linkedin',
                url: 'https://www.linkedin.com/in/meenakshi-iyengar-3825774/'
              }
            ]
          },
          {
            name: 'Ankur Goel',
            img: 'ankur',
            description:
              "Ankur leads Engineering at Drip and is responsible for driving Drip's technology strategy and product vision. Previously the tech lead at BrowserStack, Ankur brings years of experience, building tech platforms for organizations at scale",
            social: [
              {
                icon: 'linkedin',
                url: 'https://www.linkedin.com/in/ankurgel/'
              }
            ]
          },
          {
            name: 'Khushy Aggarwal',
            img: 'khushy',
            description:
              'Khushy leads the strategy team and various special projects driving growth for Drip. In the past, she has worked at Bain & Company in their US, UK and India offices, on strategy projects for Fortune 500 companies, governments and nonprofits.',
            social: [
              {
                icon: 'linkedin',
                url: 'https://www.linkedin.com/in/khushy-aggarwal-a1118274/'
              }
            ]
          }
        ]
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
      },
      investors: {
        title: 'Our Investors',
        items: ['accel', 'wing', 'yc', 'initialized', 'sequoia']
      },
      lifeAtDrip: {
        title: 'Life at Drip Capital',
        images: ['carousel-1', 'carousel-2', 'carousel-3']
      },
      inTheNews: 'In the news',
      dripExperience:
        'Experience the power of export financing with Drip capital',
      ourPartners: 'Our Partners',
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
      }
    },
    contact: {
      title: 'Contact Us',
      description: 'Get in touch with Drip Capital.',
      jumbotron: {
        title: 'We are here to help',
        lead: {
          phone: '+1-650-437-0150',
          line1: 'Prefer to talk?',
          line2: 'Give us a call on',
          line3:
            'and speak to our Supply Chain Finance Advisor to get your queries answered'
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
        title: 'Collateral-Free solutions',
        title2: 'to finance growth',
        lead: [
          'Access the working capital you need to improve your',
          'cash flow and increase your cross-border transactions'
        ],
        getStarted: 'Get Started',
        tips: [
          {
            tagline: 'Trade financed',
            heading: '$3+ billion USD'
          },
          {
            tagline: 'Global operations',
            heading: '6000+ businesses'
          },
          {
            tagline: 'Worldwide presence',
            heading: '100+ countries'
          }
        ]
      },
      modal: {
        title: 'Begin your journey with Drip Capital.',
        cta: 'Apply to our Payable Finance solution here!'
      },

      // solution: {
      //   title: 'Solution to your Cash Flow Needs',
      //   desc: 'Turn working capital into a competitive advantage to expand and grow rapidly in the international market. Export businesses- both small and large- are availing our credit facility to not just fulfill more buyer orders but also pay for inventory, raw materials, employees or other short-term needs. Start your journey with Drip Capital today and get advance against your trade receivables at the click of a button.',
      //   video: 'https://www.youtube.com/embed/RubH4u6NF0I'
      // },
      advantage: {
        title: 'The Drip Advantage',
        items: [
          {
            title: 'Collateral Free Working Capital',
            desc: 'Submit your documents and get quick access to finance without any collateral needed'
          },
          {
            title: 'Efficient and Competitive',
            desc: 'A digital and flexible finance solution with higher credit lines and cost effective pricing'
          },
          {
            title: 'Increase liquidity and grow sales',
            desc: 'Expand your business and improve your cash flow to finance your growth'
          },
          {
            title: 'Fast, easy and transparent',
            desc: 'Follow our digital onboarding with minimal paperwork, get finance directly from Drip’s portal and receive your funds swiftly'
          }
        ]
      },
      capital: {
        title: 'Simple 4-step application process',
        howItWorks: 'How It Works',
        items: [
          {
            title: 'Apply Online',
            desc: 'Submit basic details about your business on our website',
            image: '1'
          },
          {
            title: 'Credit assessment',
            desc: 'Obtain an offer letter following an automated credit assessment.',
            image: '2'
          },
          {
            title: 'Submit documents',
            desc: 'Securely upload your documents on our dashboard.',
            image: '3'
          },
          {
            title: 'Quick disbursements',
            desc: 'Get advance payment directly to your account.',
            image: '4'
          }
        ],
        cta: 'Get an Offer'
      },
      successStories: {
        title: 'What our clients say about us',
        items: [
          {
            desc: 'Our company now sells to six new clients in four different countries as we can offer attractive credit terms thanks to the support of Drip.',
            owner: 'Idrees Baidi - Dubai based trader',
            icon: 'export.png'
          },
          {
            desc: 'Drip’s facility freed up our existing bank limit thereby helping us in making timely purchases during peak season. Further we managed to get increased large orders from existing customers.',
            owner: 'Harish K - India based Commodity Exporter'
          },
          {
            desc: 'Thanks to Drip granting us working capital in just one week, we were able to meet an unexpected peak in demand.',
            owner: 'Taufeeq Ali - Sharjah based distributor'
          }
        ]
      },
      leaders: {
        title: 'Our customers work with industry leaders',
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
        desc: 'Take control of when you get paid for your export invoices with our one-click collateral-free financing solution. Apply now to start you journey with Drip Capital.'
      },
      // conclusion: {
      //   title: 'Earn with Drip Capital',
      //   leads: [
      //     'Work as our Partner and monetize your relationship with exporters.',
      //     'Introduce Drip\'s export bill discounting solution to exporters and earn attractive rewards for your reference.',
      //     'Get in touch with us for further information.'
      //   ],
      //   cta: 'Get Started'
      // },
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
          'Quick approval for credit upto $3 million',
          'Increase sales by offering credit'
        ]
      },
      awards: {
        title: 'Global awards and certifications',
        items: ['combinator.png', 'red-herring.png', 'fintech-250.png']
      },
      customerSay: {
        title: 'What our clients say about us',
        items: [
          {
            icon: 'food-products.svg',
            desc: "Drip's portal made the entire documents process very easy, eliminating the need to courier documents every time.",
            owner: 'Jaspreet Singh',
            location: 'Chandigarh',
            role: 'Exporter'
          },
          {
            icon: 'export.png',
            desc: 'We were able to significantly increase sales to existing customers by shortening our working capital cycle. Thanks to Drip, we have also added new buyers by offering competitive credit terms.',
            owner: 'Karthikesan V',
            location: 'Chennai',
            role: 'Manufacturer'
          },
          {
            icon: 'frozen-food.svg',
            desc: 'Drip’s facility freed up our existing bank limit thereby helping us in making timely purchases during peak season. Further we managed to get increased large orders from existing customers.',
            owner: 'Harish K',
            location: 'Andhra Pradesh',
            role: 'Commodity Exporter'
          }
        ]
      }
    },
    advanceAgainstPO: {
      title: 'Working Capital Finance Solutions for Exporters',
      description:
        'Drip Capital provides easy access to collateral-free working capital finance solutions for exporters. Submit your export invoices and get paid within 24 hours.',
      mainHero: {
        title: 'Advance Against Purchase',
        title2: 'Order (PO)',
        lead: ['Get working capital before you ship.'],
        getStarted: 'Get Started',
        tips: [
          {
            tagline: 'Higher Credit Line',
            heading: '$3 million USD'
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
            desc: 'A digital and flexible finance solution with higher credit lines and competitive pricing.'
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
            desc: 'Your buyer places a PO on Voyager, who then places it with you.',
            image: '1'
          },
          {
            title: 'Initial Advance',
            desc: 'Voyager pays you 60% of the PO value upfront.',
            image: '2'
          },
          {
            title: 'Shipment Stage',
            desc: 'Upload the Bill of Lading and receive another 20%.',
            image: '3'
          },
          {
            title: 'Final payment on Due date',
            desc: 'Once the buyer pays Voyager, you get the balance at the time of settlement.',
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
          'Quick approval for credit upto $3 million',
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
          'banking-tech.png'
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
        title: 'Get up to 60% Advance even before you ship.',
        line1:
          'Advance against PO provides you early access to capital. This innovative solution is delivered through our trading subsidiary, Voyager Trading.',
        line2:
          'It lets you access up to 60% of your PO value before you ship, so you can cover production and logistics costs without waiting for buyer payments.'
      }
    },
    homePage: {
      title: 'Working Capital Finance Solutions for Exporters',
      description:
        'Drip Capital provides easy access to collateral-free working capital finance solutions for exporters. Submit your export invoices and get paid within 24 hours.',
      mainHero: {
        title: 'Fuel Your Exports',
        title2: 'with Fast Financing',
        lead: [
          'Collateral-free finance for your export business – ',
          'from before you ship to after you ship.'
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
            desc: 'A digital and flexible finance solution with higher credit lines and competitive pricing.'
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
          'banking-tech.png'
        ]
      }
    },
    investors: require('./pages/investors'),
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
            'Credit Limit upto $3 Million',
            '80% invoice value upfront as soon as you ship',
            'Competitive pricing with low interest rates'
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
            desc: "Drip's working capital offering to exporters is a credit line, which ranges from USD 100 thousand to USD 2.5 million, depending on the exporter’s size and requirement."
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
      heading: 'Drip Capital, Inc. Privacy Policy',
      title: 'Privacy Policy',
      description: '',
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
          title: 'Introduction',
          desc: [
            'This policy has been developed to support Drip Capital’s (further referred to as ‘DC’ or organization) direction, and for establishing policy, procedures and controls for privacy, in order to establish a Privacy Information Management System (PIMS) in line with all applicable regulatory, operational and contractual requirements.',
            'To provide adequate protection for its customers’ personal information, DC has built a strong PIMS in alignment with identified requirements from British Standard BS 10012:2018 and ISO 27701.'
          ]
        },
        {
          title: 'Responsibility',
          desc: [
            'DC will implement necessary controls and practices at all levels to protect personal information stored and processed on its systems and ensure that such information is carefully protected.',
            'DC requires all employees to ensure that they have read and understood Drip’s privacy policies and strictly adhere to them.'
          ]
        },
        {
          title: 'Policy Statement and Objectives',
          desc: [
            'This privacy policy sets out how DC securely collects, stores, processes, transfers, shares and uses data that identifies or is associated with you (“Personal Information”) when you use DC’s website or services or generally interact with DC.',
            'The privacy of individuals, including its customers and clients, is of utmost importance to DC. DC and its businesses in the US, India and Mexico adhere to several privacy management policies and practices as part of a global commitment to protecting personal information. In particular, this policy explains how DC, its employees, partners and vendors will collect, use, store, share, transmit, delete or otherwise process (collectively “process”) personal information in accordance with its Data Protection & Privacy Principles.'
          ]
        },
        {
          title: 'Scope and Applicability',
          desc: [
            'This Policy covers personal information that DC collects directly from Customers / business associates of DC and all its subsidiaries.',
            'This policy applies to information security across all internal and business Information Systems, services and related practices in all locations where DC conducts business.'
          ]
        },
        {
          title: 'Information covered within Policy',
          hasList: true,
          desc: [
            'In this Policy, the term “Personal Information” implies any personally identifiable information that relates to a natural person, which, either directly or indirectly, in combination with other information available or likely to be available with a body corporate, is capable of identifying such a person. <br/> The term, “Data Subject” refers to the person whose data is being collected or processed by DC. <br/> In this Policy, the term “Sensitive Personal Information” means Personal Information that also comprises information relating to:',
            'Passwords',
            'Financial information',
            'Physical, physiological and mental health conditions',
            'Sexual orientation',
            'Biometric information',
            'Any detail relating to the above clauses as provided to the body corporate for providing service; and',
            'Any of the information received under the above clauses by the body corporate for processing, stored or processed under lawful contract or otherwise'
          ]
        },
        {
          hasList: true,
          desc: [
            'Sensitive Personal Information does not include information that is freely available or accessible in the public domain or furnished under the Right to Information Act, 2005 or any other law for the time being in force.<br/>DC fully supports and adheres to the Principles of Data Protection and respects the rights of individuals as set out in the Standard and shall ensure that the personal information for which it is responsible will:',
            'Be obtained and processed fairly and lawfully and shall not be processed unless the processing is necessary for the purposes defined under the standard',
            'Be obtained for a specified and lawful purpose and shall not be processed in any manner incompatible with that purpose',
            'Be adequate, relevant and not excessive for those purposes',
            'Be accurate and kept up to date',
            'Be processed in accordance with the data subject’s rights (in accordance with California privacy law - CPRA)',
            'Be kept secure from unauthorized access, accidental loss or destruction;',
            'Only be transferred to a country where proper Laws & Regulations related to Privacy are adhered'
          ]
        },
        {
          title:
            '<span id="Notice-of-Collection-of-Information"> Notice of Collection of Information </span>',
          hasList: true,
          desc: [
            'As part of your agreement with DC, the company will collect, store and process your private information for fair, legal business and operational purposes.<br/> This Notice sets out the basis upon which DC may collect, use, disclose or otherwise process personal and financial data of its customers and business associates in accordance with the applicable acts and regulations.<br/> DC may collect personal information in the context of your agreement with DC, including, without limitation, your:',
            'Company Name',
            'Location',
            'Contact details including mailing address, telephone numbers, email address',
            'Registration details',
            'Company identification number',
            'Other relevant identification details',
            'Details of financial health',
            'Credit history',
            'Financial information',
            'Account number and other relevant details',
            'Bank account details;',
            'Tax-related information',
            'Photographs and other relevant audio-visual information;',
            'Records related to usage, access, surveillance etc within DC premises and systems;',
            'Owner Identification Number (locally specific)',
            'Contact information of persons associated with the company',
            'Any additional information provided to us by you as our customer'
          ]
        },
        {
          hasList: true,
          desc: [
            'Consent of customers will be sought and received, for any collection and processing of all categories of data.<br/> The above information may be collected and processed by the company directly or by an authorized representative of the company:',
            'As a part of the internal process in DC',
            'At any later stage of your agreement with DC'
          ]
        },
        {
          title: 'Restricted Collection of Information',
          hasCharList: true,
          desc: [
            '',
            '(a) DC will only collect personal and sensitive Information that is required and by lawful, fairly and non-intrusively. Collecting this Information enables us to offer you services that help you with your business needs. Depending on the business need you apply for, DC also collects information necessary to set up and maintain that business service.',
            '(b) DC will only collect Information needed for lawful purposes related to the business service and only after your explicit consent in the course of your agreement with us.',
            '(c) You can always deny or withdraw your consent at a later stage as per the process described in subsequent sections further, in accordance with regional applicable laws.',
            '(d) Generally, DC collects Information directly from you. However, DC may also collect personal information about you from third parties including CICs and vendors.'
          ]
        },
        {
          desc: [
            'If you would like to know the name and address of agencies, which are associated with DC to collect and retain your Information, you can contact privacy@dripcapital.com.'
          ]
        },
        {
          title: 'Access & Modification to Information',
          desc: [
            'Customers can, at any time, request for their personal information being stored or processed by DC, in accordance with regional applicable laws. DC will respond to your request as per the established procedures. DC has reasonable procedures in place, to enable you to access the information being stored and/or processed by us.',
            'To provide you access to information quickly and easily, the information requested will be provided in the prescribed format as per DC’s internal guidelines. Access will be restricted when the request is made without sufficient grounds.',
            'Contact privacy@dripcapital.com to know more about how to access your personal information with DC.',
            'You can also exercise your right to amend inaccurate or incomplete personal information, in accordance with regional applicable laws. The rationale for providing the Information Provider with the right of correction is to ensure that the data quality of their information is maintained and DC will take all reasonable steps to ensure this.  In case DC refuses to amend your personal information, on request, DC will provide you reasons for the rejection.',
            'Contact privacy@dripcapital.com to know more about how to request an amendment to your personal information stored with DC.',
            'However, it should be noted that the privacy statement is only applicable to the personal information being shared by the data subject and does not apply to information interpreted for offering business services to you. DC also reserves the right not to share the information being collected from other sources, such as background check agencies, credit agencies, etc.'
          ]
        },
        {
          title: 'Option to Consent',
          desc: [
            'The consent to personal information is always voluntary, informed and current. DC gives customers an option to withdraw consent, in accordance with regional applicable laws, for using your personal information being granted to us. In that case, you may approach <a href="mailto:privacy@dripcapital.com">privacy@dripcapital.com</a>. However, in such cases, DC may not be able to continue to provide you with the business services for which the personal information was provided by you.',
            'DC also gives customers the option of having their personal information included or removed from marketing lists and bulk mailers used for marketing. This includes product and service offers from us and those made in conjunction with our business partners.'
          ]
        },
        {
          title: 'Processing and Use of Information',
          hasList: true,
          desc: [
            'Generally, DC collects and processes personal information for the following purposes:',
            'To establish and authenticate your identity',
            'To communicate with you and to contact you with offers from time to time',
            'To meet our legal and regulatory obligations',
            'To provide the business services as requested by you',
            'To carry out our regular business operations',
            'To fulfill the terms of the agreement with you'
          ]
        },
        {
          hasList: true,
          desc: [
            'In addition to the above-listed purpose, DC may process your personal information to be compliant with existing or new legal or regulatory requirements without any explicit approval from you regarding the same. <br/> Your personal information that is collected will be processed /used by DC for the following purposes and DC may disclose your personal information to authorized and designated third parties where necessary as a part of the following purposes:',
            'Performing obligations under or in connection with your contract of agreement with us as per the business service availed',
            'Managing and terminating our agreement relationship with you,',
            'Performing obligations under or in connection with the provision of our services to our clients;',
            'Planning and managing the day-to-day work and operations.',
            'For executing the processes and formalities related to the Termination of the contract, and',
            'Facilitating our compliance with laws, customs and regulations which may be applicable to us from time to time.'
          ]
        },
        {
          desc: [
            'The purposes listed in the above clauses may continue to apply even in situations where your relationship with us (for example, pursuant to a contract) has been terminated or altered in any way, for a reasonable period thereafter (including, where applicable, a period to enable us to enforce our rights under any contract with you).'
          ]
        },
        {
          title: 'Recipients of Personal Information',
          hasCharList: true,
          desc: [
            'DC may share your personal information with the following:',
            '<li style="list-style-type:disc;"> <b> Credit Information companies (CICs): </b> DC may share your personal information with CICs to fetch data required for the execution of our services to you.</li>',
            '<li style="list-style-type:circle; margin-left:3rem"> Purpose - This information is required for CICs to supply DC with credit performance history which is used by Drip to run risk assessment.</li>',
            '<li style="list-style-type:disc;"><b> Risk Services: </b> DC works with external 3rd parties to evaluate the risk of transactions</li>',
            '<li style="list-style-type:circle; margin-left:3rem">Purpose - This information is required to gather information which is used by DC to validate & verify transactions</li>',
            '<li style="list-style-type:disc;"><b>Insurance providers:</b> DC may share your personal information with 3rd party insurance providers to assess the risk and protect the transactions.</li>',
            '<li style="list-style-type:circle; margin-left:3rem">Purpose - Insurance providers require this information to provide credit insurance coverage for debtors of a transaction</li>',
            '<li style="list-style-type:disc;"><b>Law enforcement, regulators and other parties for legal reasons:</b> DC may share your personal information with third parties as required by law or if DC reasonably believes that such action is necessary to (i) comply with the law and the reasonable requests of law enforcement; (ii) detect and investigate illegal activities and breaches of agreements; and/or (iii) exercise or protect the rights, property, or personal safety of DC, its users or others.</li>',
            '<li style="list-style-type:circle; margin-left:3rem">Purpose - This information is required to gather litigation history used to run risk assessments</li>',
            '<li style="list-style-type:disc;"><b>Legal Firms:</b> DC may share your personal information with our external legal partners, consultants and counsels in case of any legal action</li>',
            '<li style="list-style-type:circle; margin-left:3rem">Purpose - In a scenario where DC needs to collect outstanding amounts from concerned parties, DC may engage the services of legal agencies to facilitate collections.',
            '<li style="list-style-type:disc;"><b>Marketing and advertising:</b> From time to time DC may contact you with information about our products and services, including sending you marketing messages and asking for your feedback on our products and services. Most marketing messages DC sends will be by email. For some marketing messages, DC may use personal information DC collects about you to help us determine the most relevant marketing information to share with you. Unsubscribing from marketing emails will not unsubscribe you from system notifications that DC needs to send as part of the services DC provides. From time to time, DC may need to contact you by email or via our support team.</li>'
          ]
        },
        {
          title: 'Security & Confidentiality of Information',
          desc: [
            'DC will keep your personal information confidential and limit access to those who specifically need it to conduct their business activities, except as otherwise permitted by applicable law. DC refers to industry standards and uses reasonable administrative, technical and physical security measures to protect your personal information from unauthorized access, destruction, use, modification or disclosure.',
            'A robust information Security Management system (ISMS) is being established within DC that governs the systems and practices. This ISMS is being established and managed in alignment with global best practices and certified towards ISO/IEC 27001:2013 standard. The system is subject to strong controls including ongoing monitoring, periodic Security testing, internal/external audits and verifications. DC also ensures that any business associates/ subcontractors/ subsidiaries/ third party agencies DC engages to access/ process/ store your personal information also adhere to the reasonable security practices to protect your personal information to provide the same level of protection for data as required under the Principles and applicable laws and regulations.'
          ]
        },
        {
          title: 'Integrity & Retention of Information',
          desc: [
            'DC uses appropriate technology and well-defined employee practices to process your data promptly and accurately. DC will not keep your personal information longer than is necessary, except as otherwise required by applicable law.',
            'DC destroys all personal information that is no longer needed for the purposes for which DC collected it unless its retention is required to satisfy legal, regulatory or accounting requirements, to protect our interests or for auditory purposes. DC ensures to take reasonable steps to destroy or permanently de-identify personal information if it is no longer needed for any purpose.'
          ]
        },
        {
          title: 'Personal Information Handling',
          hasCharList: true,
          desc: [
            'Every DC employee/business associate/relevant individual, who deals with or comes into contact with personal information of a customer regardless of its origin, shall have a responsibility to comply with the applicable law concerning data privacy, this policy and specific privacy practices. <br/> The Relevant Individual should seek advice in the event of any ambiguity while dealing with personal information or in understanding this Policy. <br/> The processing of personal information is defined as encompassing everything that DC does with personal information including the sharing, transferring or disclosing of personal information to another organization or internally. <br/> DC ensures that its employees/relevant Individuals shall be diligent and extend caution while dealing with personal information of customers, in the course of performance of their duties and shall also, at all times, will:',
            '<b>a. Respect personal information</b> that they have access to and treat it in the manner in which they would expect their personal details to be treated.</span>',
            '<b>b. Prevent any unauthorized person</b> from having access to any computer systems processing personal information, and especially:</span>',
            '<span style="margin-left:3rem"> i. Unauthorized reading, copying, alteration, deletion or removal of data;</span>',
            '<span style="margin-left:3rem"> ii. Unauthorized data input, disclosure, uploading, transmission/transfer of personal information;</span>',
            '<span style="margin-left:3rem"> iii. Abide by DC information security and privacy policies and procedures;</span>',
            '<b>c. Ensure that authorized users</b> of a data-processing system can access only the personal information to which their access right refers.',
            '<b>d. Keep a record of which personal information</b> has been shared, when and to whom.',
            '<b>e. Not provide any personal information</b> to any third party without an approval from the Information Security team,',
            '<b>f. Ensure that personal information</b> processed on behalf of a third party (client) can be processed only in the manner prescribed by a such third party,',
            '<b>g. Ensure that, during the communication</b> of personal information and transfer of storage media, the data cannot be read, copied or erased without authorization.',
            '<b>h. Immediately, on becoming aware,</b> report and notify any vulnerabilities and privacy-related breach/security breaches (including potential risks) to the SecOps team.',
            'DC takes non-compliance to this policy by DC’s employees very seriously and may take disciplinary actions including but not limited to Employee dismissal or Relevant Individual termination.'
          ]
        },
        {
          title: 'Sharing & Disclosure of Information',
          desc: [
            'All the personal information within the context of DC will be disclosed to and be accessible by only limited, designated personnel within DC, as per DC’s organizational policies and applicable acts/regulations. These personnel could be part of any of the registered companies within the organization.',
            'DC may share your personal information with third parties where it is necessary to provide you with products or services or as part of the nature of our relationship with you. DC will only share the personal information where DC has previously informed or been authorized by you, in connection with efforts to reduce fraud or criminal activity or as permitted by law.',
            'DC will disclose personal information with third parties only when you have given us your prior permission or where it’s part of our contractual arrangements with you. In certain circumstances like but not limited to, requests from the Government Agencies mandated to receive such information or as an obligation under an order of Law, DC will not seek your permission to disclose your personal information.',
            'DC has established procedures which will reasonably ensure that your personal information will not be disclosed by us or any agencies/ third party associated with us, any further than absolutely required.'
          ]
        },
        {
          title: 'Transfer of Information',
          hasList: true,
          desc: [
            'DC is committed to ensuring that personal information is stored in respective regions as much as possible, in alignment with the applicable laws and regulations.<br/> However, in certain scenarios, DC might need to transfer and store the data in the US or in India or in another region/country in alignment with the corporate information and technology architecture and practices. Whenever such a need for inter-country transfer arises, the company will ensure adequate compliance with the laws and regulations through measures such as ensuring:',
            'The data transfer is in alignment with the applicable acts and regulations and/or',
            'Restriction of transfer, storage, retention and processing is limited to only those as required for the fulfillment of the employment contract and related requirements and commitments.',
            'Adequate controls and reasonable security practices are put in place to ensure effective data protection on par with the requirement of the acts and regulations.'
          ]
        },
        {
          title: 'Privacy Grievance Redressal',
          desc: [
            'Any concerns, disputes, discrepancies or grievances with respect to the processing of personal information can be referred to the directed to privacy@dripcapital.com. The privacy team will redress the grievance within 45 days from the date of receipt of any such grievance. This channel is specific for Privacy related grievances. All anonymous or third-person grievances would not be registered / acted upon.'
          ]
        },
        {
          title: 'Changes to Privacy Policy',
          desc: [
            'DC reserves the right to update this privacy policy at any time, as a part of our continual improvement and as part of our objective to align with applicable laws and regulations.',
            'DC will notify you about any future changes in the privacy policy and provide you with access to the new/changed privacy policy as and when DC makes any substantial updates.',
            'DC may also continue to notify you from time to time about any new/changed aspects in the processing of your personal information.'
          ]
        },
        {
          title: 'Further questions',
          desc: [
            'If you have any questions or need further information regarding this policy, you may contact us via the means provided in this document.',
            'These terms and conditions shall be governed by and construed in accordance with the laws of India and any dispute shall be referred to privacy@dripcapital.com.'
          ]
        },
        {
          title: 'Enforcement and Compliance',
          hasList: true,
          desc: [
            'This privacy policy is enforced effectively in the organization through practices and measures such as:',
            'Ensuring effective and adequate awareness through:'
          ]
        },
        {
          hasSublist: true,
          desc: [
            'Onboarding process of new employees and customers',
            'Periodic and ongoing information Security awareness initiatives',
            'Periodic and need-based communication on Policy and updates from CISO/ ISMS team'
          ]
        },
        {
          hasList: true,
          desc: ['', 'Ensuring effective compliance with the Policy through:']
        },
        {
          hasSublist: true,
          desc: ['Internal checks and reviews', 'Internal and External Audits']
        },
        {
          hasList: true,
          desc: [
            '',
            'Breach of this Policy will invoke appropriate corrections and corrective actions as per DC’s internal Processes. Serious and persistent breaches may constitute gross misconduct & result in invoking Disciplinary actions from DC management.'
          ]
        },
        {
          title: 'Exception',
          desc: [
            'Currently, there are no exceptions established within DC for this Policy.',
            'Any exception to this policy should be authorized by the DC Management or Privacy Officer or any person specifically designated and authorized by the Management.'
          ]
        },
        {
          title: 'Targeted Advertising',
          desc: [
            'DC may collect information about how you use or connect to our Website, or the types of other websites, social media services, content and ads that you view to customize the ads on our Website, that are visible to you when you visit our Website or use our products or services.'
          ]
        },
        {
          title:
            'Customer’s rights on their Personal Information - California-US residents only',
          hasCharList: true,
          desc: [
            'In accordance with applicable privacy law, you have the following rights in respect of your personal information that DC holds:',
            'a. Right to Delete: <br/>',
            '<ul><li style="list-style-type:none; margin-left:2rem">A customer has the right to request for deletion of personal information all in full or partial. DC has the right to store, maintain and process all or any information which is not personal.</li></ul>',
            'b. Right to Correct: <br/>',
            '<ul><li style="list-style-type:none; margin-left:2rem">A  customer has the right to request for modification or updation of personal information collected by DC if seen as inaccurate or incorrect by the customer.</li></ul>',
            'c. Right to Access/Know: <br/>',
            '<ul><li style="list-style-type:none; margin-left:2rem">A customer has the right to request to disclose the following about the personal information collected about the customer:</li></ul>',
            '<span style="margin-left:4rem"> i. The categories of personal information collected</span>',
            '<span style="margin-left:4rem"> ii. The categories of sources from which the personal information was collected</span>',
            '<span style="margin-left:4rem"> iii. The categories of third parties to which/whom the personal information was disclosed</span>',
            '<span style="margin-left:4rem"> iv. The purpose of collecting and sharing of personal information</span>',
            '<span style="margin-left:4rem"> v. The actual personal information collected in full</span>',
            'd. Right to know what personal information is sold and to whom:<br/>',
            '<span style="margin-left:4rem">i. A customer has the right to request to disclose what or if the personal information is sold to a third party.</span>',
            '<span style="margin-left:4rem">ii. Disclaimer: DC never sells personal information collected to third parties.<b> Refer to <a href="#Notice-of-Collection-of-Information">Notice of Collection of Information</a> </b></span>',
            'e. Right to opt-out of Sale or Sharing of personal information: <br/>',
            '<span style="margin-left:4rem">i. A customer has the right, at any time, to direct DC to stop sharing personal information with third parties.</span>',
            'f. Right to limit usage of personal information:',
            '<span style="margin-left:4rem">i. A customer has the right, at any time, to direct DC to limit the usage of the personal information to that use which is necessary for DC to perform its services.</span>',
            'g. Right to no Retaliation following opt-out or Exercise of other rights:<br/>',
            '<span style="margin-left:4rem">i. DC shall not discriminate against a customer who has exercised one or more of the rights above.</span>'
          ]
        },
        {
          desc: [
            '<br/>Californian customers can exercise said rights by reaching out to privacy@dripcapital.com.',
            'However, it should be noted that the privacy statement is only applicable to the Personal Information being shared by the data subject and not relating to information interpreted for offering the business services. DC reserves the right not to share the information being collected from other sources, such as background check agencies, credit agencies, etc.',
            'DC may not be able to continue to provide you with the business services for which the personal information was provided by you if execution of all/any of the above rights leads to the disruption of DC’s business.'
          ]
        },
        {
          title: 'Cookies',
          desc: [
            'DC may automatically collect information relating to such matters as the total number of visits to this website, the number of visitors to each page of this website, the Internet Protocol (IP) addresses of our visitors, and the time spent on this Website. DC may use this information, which is collected in and remains in aggregate form, to understand how our visitors use this Website so that DC can improve it. DC may also use your IP address to help diagnose problems with our servers and for purposes of system administration. From time to time, DC may share aggregated, non-personal information with our agents, business partners, consultants, or other third parties. Some non-personal information may be collected through cookies. Cookies are used by most major websites. A cookie is a text file stored on a user’s computer hard drive containing information about the user. Cookies can enable us to track the interests of our users to enhance their experience on this Website and to deliver content specific to a user’s interests. DC may place a cookie in the browser file of your computer when you visit this Website. These cookies are generally not linked to personal information. If you request that the Website store your username and/or password, the cookie will be linked to your username and/or password, and hence will track your navigation path around the Website. You may delete or decline the cookie using the tools in your web browser. Although you may still use this website without the cookie, some parts of the website may not work properly for you.'
          ]
        },
        {
          title: 'Third-Party Websites',
          desc: [
            'As a convenience to you, DC may provide links to other websites maintained by independent third parties. DC is not responsible for the privacy practices of independent third parties. DC encourages you to be aware when you leave this Website and to read the privacy policies of any other websites that you may visit. Our Website includes social media features, such as the Facebook log-in or interactive mini-programs that run on our Website. These features may collect your IP address, which page you are visiting on our site, and may set a cookie to enable the feature to function properly. These social media features and widgets are either hosted by a third party or hosted directly on our Website. Your interactions with these features are governed by the privacy policy of the company providing them.'
          ]
        },
        {
          disclaimer:
            'Disclaimer* : This policy applies to entities based in both the United States and India.'
        }
      ],
      conclude: 'Effective Date: March 1, 2015'
    },
    pressmedia: {
      leaders: {
        title: 'Subscribe to Email Alerts'
      },
      growth: {
        title: 'Need Help?',
        desc: 'Feel free to reach out to communications@dripcapital.com if you have any further questions.',
        desc2:
          'Our spokespeople and analyst can be good sources. To get in touch. Write to us at communications@dripcapital.com.'
      },
      mediakit: {
        title: 'Drip Caital/ Media Kit',
        desc: 'Screenshots'
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
            profile: 'Ceo,s pictures'
          }
        ]
      }
    },
    importers: {
      title: 'Importer Credit Program and Supply Chain Finance',
      description: '',
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
          title: 'A few details to get you started',
          placeholders: {
            name: 'Full Name',
            email: 'Email',
            organization: 'Company',
            phone: 'Phone',
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
        title: 'Payables Financing for ',
        title2: 'your Growing Business',
        lead: [
          'Drip Capital makes it extremely easy for businesses to',
          'turn their domestic and international invoices into cash'
        ],
        getStarted: 'Get Started',
        tips: [
          {
            tagline: 'High credit limit',
            heading: '$3 Million USD'
          },
          {
            tagline: 'Simple application',
            heading: 'Minimal paperwork'
          },
          {
            tagline: 'Fast access',
            heading: 'Within 48 hours'
          }
        ]
      },
      advantage: {
        title: 'The Drip Advantage',
        items: [
          {
            title: 'Collateral free payable finance',
            desc: 'Use your accounts payable to extend your credit period by 90 days'
          },
          {
            title: 'Efficient and competitive',
            desc: 'Access higher credit lines and cost-efficient pricing with our a paper-less processes '
          },
          {
            title: 'Fast, easy and transparent',
            desc: 'Use Drip’s portal to track your application: the process takes as little as 48 hours'
          },
          {
            title: 'Enhanced customer experience',
            desc: 'Dedicated account manager to help you expand your business'
          }
        ]
      },
      capital: {
        title: 'Simple 4-step application process',
        howItWorks: 'How It Works',
        title2: 'How ',
        items: [
          {
            title: 'Apply Online',
            desc: 'Submit basic details about your business on our website.',
            image: '1'
          },
          {
            title: 'Credit assessment',
            desc: 'Obtain an offer letter following an automated credit assessment.',
            image: '2'
          },
          {
            title: 'Submit documents',
            desc: 'Securely upload your documents on our dashboard.',
            image: '3'
          },
          {
            title: 'Supplier receives funds',
            desc: 'The payment is made directly within 24 hours of processing.',
            image: '4'
          }
        ],
        cta: 'Get an offer'
      },
      successStories: {
        title: 'What our clients say about us',
        items: [
          {
            icon: 'seafood.png',
            desc: "Drip's credit line and financing process is transparent and works perfectly with our current bank. Thanks to them, we are now able to purchase the best quality products from reputed suppliers at attractive prices by paying upon shipment.",
            owner: 'Owner - Seafoods Trader in Miami'
          },
          {
            icon: 'coffee.png',
            desc: 'Using our bank lines to pay suppliers while the cargo is still on the water did not fit very well with our working capital cycle. We wish we would have known about Drip earlier. They have been supportive of our growth and are helping us upscale faster through both inventory and supply-chain finance.',
            owner: 'CFO - Coffee Importer in Florida'
          },
          {
            icon: 'meat.png',
            desc: 'We are now able to accept more orders from existing customers and have also started to work with popular retail chains. Thanks to Drip Capital, we now have a healthy cash flow allowing us to fulfill this increase in demand.',
            owner: 'Head of Sales - Meat Wholesaler in California'
          },
          {
            icon: 'textile.png',
            desc: 'As demand has grown, we need to import more and offer terms to our buyers, which can create a cash flow mismatch. Drip Capital has become a great quick and efficient solution for import finance.',
            owner:
              'CEO - Traditional and original products importer in New York'
          }
        ]
      },
      customerSay: {
        title: 'What our clients say about us',
        items: [
          {
            icon: 'fish-icon.svg',
            desc: "Drip's credit line and financing process is transparent and works perfectly with our current bank. Thanks to them, we are now able to purchase the best quality products from reputed suppliers at attractive prices by paying upon shipment.",
            owner: 'Seafoods Buyer',
            role: 'Owner',
            location: 'Miami'
          },
          {
            icon: 'coffee.svg',
            desc: 'Using our bank lines to pay suppliers while the cargo is still on the water did not fit very well with our working capital cycle. We wish we would have known about Drip earlier. They have been supportive of our growth and are helping us upscale faster through both inventory and supply-chain finance.',
            owner: 'Coffee Importer',
            role: 'CFO',
            location: 'Florida'
          },
          {
            icon: 'meat.svg',
            desc: 'We are now able to accept more orders from existing customers and have also started to work with popular retail chains. Thanks to Drip Capital, we now have a healthy cash flow allowing us to fulfill this increase in demand.',
            owner: 'Meat Wholesaler',
            role: 'Head of Sales',
            location: 'California'
          },
          {
            icon: 'textile.svg',
            desc: 'As demand has grown, we need to import more and offer terms to our buyers, which can create a cash flow mismatch. Drip Capital has become a great quick and efficient solution for import finance.',
            owner: 'Traditional and Original Products Importer',
            role: 'CEO',
            location: 'New York'
          }
        ]
      },
      leaders: {
        title: 'Our customers work with industry leaders',
        items: [
          {
            icon_url: 'amazon'
          },
          {
            icon_url: 'tjoe'
          },
          {
            icon_url: 'costco'
          },
          {
            icon_url: 'macdonald'
          }
        ]
      },
      growth: {
        title: 'Unlock your business growth potential with better cash flow',
        desc: 'Ensure access to working capital to accelerate sustained business growth and create a healthier supply chain.'
      },
      awards: {
        title: 'Global awards and certifications',
        items: [
          'combinator.png',
          'red-herring.png',
          'fintech-250.png',
          'banking-tech.png'
        ]
      }
      // conclusion: {
      //   title: 'Earn with Drip Capital',
      //   leads: [
      //     'Earn attractive rewards for each new buyer reference you help in onboarding to our platform. Simply register yourself and start introducing our product to your network.'
      //   ],
      //   cta: 'Get Started'
      // }
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
        title: 'Why Choose Drip Capital',
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
        title: 'Frequently asked questions',
        moreQuestions: 'Looking for more questions?',
        viewAll: 'View All'
      },
      contactForm: {
        sectionHeading: 'Was this page helpful?',
        sectionSubHeading: 'Still not convinced? Let us help ',
        title: 'Request Call back',
        connectHeading: 'Connect With Us',
        or: 'Or',
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
      },
      investors: {
        title: 'Our Investors',
        items: ['accel', 'wing', 'yc', 'sequoia']
      }
    },
    interestCalculator: {
      title: 'Interest Calculator',
      description:
        'Calculate interest and charges when you factor your invoices with Drip Capital',
      table1: {
        title: 'Commercial Terms',
        advanceRate: 'Advance Rate (% of Invoice Value)',
        a: 'A',
        interestRate: 'Interest Rate (% per annum)',
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
        interest: 'Interest ($)',
        g: 'G=F*B*E/360',
        factoringCommission: 'Factoring Commission ($)',
        h: 'H=C*D',
        total: 'Total (Fees + Interest) ($)',
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
      success: [
        {
          primary: 'More than',
          stat: '$8 Billion+',
          sec: 'Trade Financed'
        },
        {
          primary: 'Working with',
          stat: '11000+',
          sec: 'Buyers & Suppliers'
        },
        {
          primary: 'Work across exporters in',
          stat: '100+',
          sec: 'Countries'
        },
        {
          primary: 'Work across buyers in',
          stat: '100,000',
          sec: 'Cross-Border Transactions'
        }
      ],
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
      solution: {
        title:
          'Offer Collateral-Free Access to Working Capital to your Clients',
        desc: 'Drip Capital offers a unique trade finance solution that allows buyers to get collateral-free working capital using just their outstanding invoices and purchases. Smart businesses, small and large importers alike, use our facility to unlock additional cash from their supply chain to invest in growing their business and expanding their global footprint. This gives channel partners a unique opportunity to offer a hassle-free financing solution to their clients, which is instant, paperless, well-priced, and comes with a credit limit of up to $1M. Our dedicated team of experts works round the clock for a seamless onboarding journey for you and your clients.',
        video: 'https://www.youtube.com/embed/RubH4u6NF0I'
      },
      newSolution: {
        title: 'Offer Collateral-Free Working Capital Access to Your Clients',
        desc: '<p>Drip Capital offers a unique trade finance solution that enables <span class="text-secondary font-weight-bold">companies</span> to access <span class="text-secondary font-weight-bold">collateral-free working capital</span></span> at the <span class="text-secondary font-weight-bold">click of a button.</span> </p><ol class="custom-list d-flex flex-column mt-3"><li> Apply with basic company details.</li><li>Get offer letter</li><li>Onboarding is fast, paperless, well-priced, with a credit limit of up to $3 Million USD.</li><li>Once approved, funds are disbursed in 24-48 hours.</li></ol><style>.custom-list { list-style-type: none;counter-reset: elementcounter;padding-left: 0; gap: 1rem; } .custom-list li:before { content: counter(elementcounter) ") ";  counter-increment: elementcounter;}</style>',
        video: 'https://www.youtube.com/embed/RubH4u6NF0I'
      },
      mainHero: {
        title: 'Partner with Drip Capital',
        title2: 'The Trade Finance Platform of the Future',
        title3: '',
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
            heading: '100+ Countries Presence'
          }
        ]
      },
      capital: {
        title: 'Easy Access to Fast Cash',
        items: [
          {
            title: 'Apply Online',
            desc: 'Apply online to register as our channel partner',
            image: '1'
          },
          {
            title: 'Introduction',
            desc: 'Introduce our import finance solution to your clients',
            image: '2'
          },
          {
            title: 'Exporter Sign Up',
            desc: 'The client signs the agreement with drip capital and gets finance',
            image: '3'
          },
          {
            title: 'Get Commission',
            desc: 'Partners get a monthly transaction report and are paid on a quarterly basis',
            image: '4'
          }
        ],
        cta: 'Apply Now'
      },
      newCapital: {
        title: 'Additional Incentive to Earn',
        cta: 'Apply now',
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
      growth: {
        title: 'A few details to get you started',
        desc: 'Join our channel partnership program and monetize your relationship with exporters'
      },
      faqs: {
        title: 'Frequently Asked Questions',
        items: [
          {
            question: 'Who Can Register as a Channel Partner?',
            answer:
              'Anyone who is connected to an active importer should register themselves as our channel partner. Our existing partners come from various functions and sectors like CA’s, Freight Forwarders, Buying Houses, Financial Consultants, Custom Brokers, Lawyers, Logistics Companies, Financial Institutions, etc.'
          },
          {
            question:
              'Is there a maximum limit to the commission one can earn with Drip?',
            answer:
              'There is no limit on the number of referrals you can make to Drip and on the commission, you can earn through your references.'
          },
          {
            question:
              'Is the commission for every shipment that is financed through my reference?',
            answer:
              ' The commission is for each invoice that we finance from the referenced client and is paid quarterly on the recovered portfolio.'
          },
          {
            question:
              'What if an exporter decides to not use the Drip facility after signing the agreement?',
            answer: 'Nothing happens, simply no commissions are generated.'
          },
          {
            question: 'What are the benefits for exporters?',
            answer:
              'Accelerate business growth and product expansion with an unsecured credit line that boosts cash flows. Offer better payment terms to suppliers and receive discounts on shipments.'
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
      news: {
        title: 'In the news',
        items: [
          {
            icon_url: 'forbes',
            link: 'https://www.forbes.com/advisor/in/personal-finance/in-conversation-with-pushkar-mukewar/'
          },
          {
            icon_url: 'berg',
            link: 'https://www.bloomberg.com/press-releases/2022-03-03/drip-capital-named-to-y-combinator-s-top-companies-list'
          },
          {
            icon_url: 'tc',
            link: 'https://techcrunch.com/2019/07/24/drip-capital-seriesb/'
          },
          {
            icon_url: 'wallstreet-journal',
            link: 'https://www.wsj.com/articles/drip-capital-raises-15-million-for-cross-border-financing-1529626519'
          }
        ]
      }
    },
    newLanding: {
      are: require('./pages/landing/are'),
      jumbotron: {
        title: 'Flexible Working Capital Solutions',
        subtext: 'Get upto $3Mn in 24 hours.',
        description1: 'No Collaterals. No UCC Filing',
        asterisk: '*',
        description2: '. Quick Processing.',
        getStarted: 'Get Started',
        form: {
          title: 'Fast & Simple Collateral Free Financing Solution.',
          subtitle: 'Let’s connect and grow together.'
        }
      },
      investors: {
        title: 'Drip is backed up by World’s top Investors',
        items: [
          'accel-logo',
          'y-combinator',
          'barclays',
          'east-west-bank',
          'sequoia-logo',
          'ifc'
        ]
      },
      awards: {
        title: 'Awards and Certifications',
        items: [
          'red-herring.png',
          'bbb-logo.png',
          'combinator.png',
          'banking-tech.png',
          'fintech-250.png',
          'fci.png',
          'bsi.png',
          'ssl.png'
        ]
      },
      news: {
        title: 'In the News',
        items: [
          {
            icon_url: 'forbes-logo'
          },
          {
            icon_url: 'bloom-berg'
          },
          {
            icon_url: 'wsj'
          },
          {
            icon_url: 'fortune-mag'
          },
          {
            icon_url: 'nasdaq'
          }
        ]
      },
      quickFacts: {
        title: 'The Proven Leader in Import Financing',
        subtitle: 'See why businesses trust us for fast and reliable solutions',
        success: [
          {
            stat: '$6 Billion+',
            sec: 'Trade Financed'
          },
          {
            stat: '9000+',
            sec: 'Buyers & Suppliers'
          },
          {
            stat: '100+',
            sec: 'Countries'
          },
          {
            stat: '50,000+',
            sec: 'Transactions Financed'
          }
        ]
      },
      capital: {
        title: 'How it works',
        items: [
          {
            title: 'Submit invoice',
            desc: 'Select an invoice that you want to pay later',
            image: '1'
          },
          {
            title: 'Payment',
            desc: 'Drip pays your vendor',
            image: '2'
          },
          {
            title: 'Settlement',
            desc: 'You pay us back up to 120 days later with associated fees',
            image: '3'
          }
        ],
        cta: 'Get an Offer'
      }
    },
    payableFinance: {
      are: require('./pages/landing/are'),
      jumbotron: {
        title: 'Get Up To 100% of Your Unpaid Invoices Funded in Just 7 Days!',
        subtext:
          'Unlock Business Growth  with Drip’s Payables Financing Solutions',
        description1: 'No Collaterals. No UCC Filing',
        asterisk: '*',
        description2: '. Quick Processing.',
        getStarted: 'Get Started',
        form: {
          title: 'Fast & Simple Collateral Free Financing Solution.',
          subtitle: 'Let’s connect and grow together.'
        }
      },
      quickFacts: {
        title: 'The Proven Leader in Payable Financing',
        subtitle: 'See why businesses trust us for fast and reliable solutions',
        success: [
          {
            stat: '$6 Billion+',
            sec: 'Trade Financed'
          },
          {
            stat: '9000+',
            sec: 'Buyers & Suppliers'
          },
          {
            stat: '100+',
            sec: 'Countries'
          },
          {
            stat: '50,000+',
            sec: 'Transactions Financed'
          }
        ]
      }
    },
    inventoryFinance: {
      are: require('./pages/landing/are'),
      jumbotron: {
        title: 'Get up to 100% of Your Inventory Funded!',
        subtext:
          'Unlock the Value of Your Inventory and Drive Business Growth ',
        description1: 'No Collaterals. No UCC Filing',
        asterisk: '*',
        description2: '. Quick Processing.',
        getStarted: 'Get Started',
        form: {
          title: 'Fast & Simple Collateral Free Financing Solution.',
          subtitle: 'Let’s connect and grow together.'
        }
      },
      quickFacts: {
        title: 'The Proven Leader in Inventory Financing',
        subtitle: 'See why businesses trust us for fast and reliable solutions',
        success: [
          {
            stat: '$6 Billion+',
            sec: 'Trade Financed'
          },
          {
            stat: '9000+',
            sec: 'Buyers & Suppliers'
          },
          {
            stat: '100+',
            sec: 'Countries'
          },
          {
            stat: '50,000+',
            sec: 'Transactions Financed'
          }
        ]
      }
    },
    landing: {
      are: require('./pages/landing/are'),
      tradeFinance: {
        phone: '+1 650 437-0150',
        payableFinancePhone: '+1 650 437-0135',
        email: 'trade@dripcapital.com',
        title: 'Online Factoring made Easy',
        description:
          'Collateral-free invoice factoring. Turn your export invoices into cash. Apply now to get 80% of your invoice value upfront.',
        jumbotron: {
          title: 'Never wait for buyer payments',
          description:
            'Drip’s Trade Finance offering is helping exporters grow their business 30% m-o-m. With our invoice factoring solution, SMEs receive 80% of their invoice value upfront at the click of a button.',
          form: {
            title: 'A few details to get you started',
            interest: "I'm Interested in",
            categories: [
              { value: 'Export Factoring', text: 'Export Factoring' },
              { value: 'Domestic Factoring', text: 'Domestic Factoring' },
              { value: 'Both', text: 'Both' },
              { value: 'Others', text: 'Others' }
            ],
            successTitle:
              'Your Application has been received. Thank you for taking this step towards growing your Export business.',
            successDescription:
              'Our Export Finance Advisor will contact you within 3 hours. While you\'re here, check out our <a href="{faqHref}">FAQs</a>.',
            cta: 'Get Offer'
          },
          partnersTitle: 'Recommended by:'
        },
        capital: {
          title: 'Fast Access to Cash without Collateral',
          items: [
            {
              title: 'Apply Online',
              desc: 'Apply online to start the application process with our team',
              image: '1'
            },
            {
              title: 'Drip Assessment',
              desc: 'Get the offer letter after submitting your business details',
              image: '2'
            },
            {
              title: 'Submit Invoice',
              desc: 'Upload your outstanding invoices on Drip Portal',
              image: '3'
            },
            {
              title: 'Receive Funds',
              desc: 'Get funded within 24 hours',
              image: '4'
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
        conclusion: {
          title:
            'Apply now to avail post-shipment finance by factoring your export invoices.',
          cta: 'Apply Now'
        },
        news: {
          title: 'In the news',
          items: [
            {
              icon_url: 'street',
              link: 'https://www.thestreet.com/press-releases/drip-capital-surpasses-1-billion-in-cross-border-trade-receivables-financing-transactions-15539576'
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
        jumbotron: {
          title: 'Unlock working capital from your supply chain',
          description:
            'Drip Capital makes it easy for buyers to get timely access to cash against their import orders and purchases. Our short term financing solution can help you service your retail partners efficiently while beating the competition.',
          form: {
            title: 'You are one step away from your offer letter.',
            successTitle:
              'Your Application has been received. Thank you for taking this step towards growing your Export business.',
            successDescription:
              'Our Export Finance Advisor will contact you within 3 hours. While you\'re here, check out our <a href="{faqHref}">FAQs</a>.',
            cta: 'Get Offer'
          }
        },
        advantage: {
          title: 'Solutions For a Healthier Cash Flow',
          items: [
            {
              title: 'Supply Chain Finance',
              desc: 'Drip’s supply chain finance solution can help you by paying your supplier’s invoice as soon as the supplier ships, while you pay Drip later, hence getting longer payment terms on your in-transit order.'
            },
            {
              title: 'Inventory Finance',
              desc: 'Drip’s inventory finance credit line allows you to release working capital stuck in your unsold inventory at a warehouse by selling this inventory to Drip and purchasing it back as and when required.'
            }
          ]
        },
        capital: {
          title: 'Easy Access to Fast Cash',
          items: [
            {
              title: 'Apply Online',
              desc: 'Submit basic details about your business and previous year financials',
              image: '1'
            },
            {
              title: 'Drip Assessment',
              desc: 'Get the offer letter post automated assesment',
              image: '2'
            },
            {
              title: 'Submit Invoice',
              desc: 'Upload your outstanding invoices or transfer inventory on Drip Portal',
              image: '3'
            },
            {
              title: 'Receive Funds',
              desc: 'Get funded within 24 hours',
              image: '4'
            }
          ]
        },
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
      newFeatures: {
        title: 'Get Finance on In-Transit and Unsold Inventory',
        benefits: [
          {
            icon: 'icon5',
            title: 'Supply Chain Finance',
            description:
              "Drip's supply chain finance solution can help you by paying your supplier's invoice as soon as the supplier ships, while you pay Drip later, hence getting longer payment terms on your in-transit order."
          },
          {
            icon: 'icon6',
            title: 'Inventory Finance',
            description:
              "Drip's inventory finance credit line allows you to release working capital stuck in your unsold inventory at a warehouse by selling this inventory to Drip and purchasing it back as and when required."
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
      ],
      fastCash: {
        title: 'Easy Access to Fast Cash',
        desc: [
          'Apply online and submit previous year financials with 12 months bank statements',
          'Get the offer letter after submitting your business details',
          'Upload your outstanding invoices or transfer inventory on Drip Portal',
          'Get funded within 24 hours'
        ]
      }
    },
    bankDetails: {
      seoTitle: 'Bank Details',
      title: 'Drip Capital Bank Details',
      dropdownTitle: 'Please select currency from the dropdown below:',
      description:
        'Drip Capital is a Trade Finance company providing collateral-free post-shipment finance to Indian exporters with instant approvals and minimal documentation.',
      exporterCountry: 'Exporter Country :',
      requestError: 'Unauthorized Request',
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
        swiftIf: 'Swift Code (If Needed)',
        iban: 'IBAN',
        bankSortCode: 'Bank Sort Code',
        clabe: 'CLABE',
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
      },
      mxn: {
        title: 'Pesos (MXN$)',
        desc1:
          'Please remit all Mexican Pesos (<b>MXN</b>) payments electronically to:'
      },
      nzd: {
        title: 'NZD (NZ$)',
        desc1:
          'Please remit all New Zealand Dollar (<b>NZD</b>) payments electronically to:'
      }
    },
    bankDetailsJpm: {
      seoTitle: 'Bank Details',
      title: 'JP MORGAN',
      description:
        'Drip Capital is a Trade Finance company providing collateral-free post-shipment finance to Indian exporters with instant approvals and minimal documentation.',
      desc1:
        'Please remit all United States Dollar (USD) payments electronically to::'
    },
    bankDetailsJpmGoTrade: {
      mainTitle: 'Drip Capital Bank Details',
      seoTitle: 'Bank Details (USD)',
      title1: 'Wire Transfers (USD)',
      title2: 'ACH Payments',
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
    bankDetailsIndia: {
      seoTitle: 'Bank Details',
      title: 'Drip Capital India Services LLP Bank Details',
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
        products: 'What products do you export?',
        city: 'City',
        state: 'State'
      },
      applyNow: 'Register',
      applying: 'Applying',
      submit: 'Apply now',
      submitting: 'Submitting',
      subscribe: 'Subscribe',
      success: {
        title: 'Thanks for your interest!',
        desc: 'Our team will contact you shortly with the details on how to invest in Drip. For urgent queries, please contact us at'
      }
    },
    news: {
      title: 'In the news',
      items: [
        {
          icon_url: 'forbes',
          link: 'https://www.forbes.com/advisor/in/personal-finance/in-conversation-with-pushkar-mukewar/'
        },
        {
          icon_url: 'fortune',
          link: 'https://www.fortuneindia.com/technology/drip-capital-raises-25-million-from-accel-and-others/103456'
        },
        {
          icon_url: 'tc',
          link: 'https://techcrunch.com/2019/07/24/drip-capital-seriesb/'
        },
        {
          icon_url: 'insider',
          link: 'https://markets.businessinsider.com/news/stocks/cb-insights-names-drip-capital-to-the-2020-fintech-250-list-1029582974'
        }
      ]
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
  leadership: require('./pages/leadership'),
  news: {
    title: 'In the news',
    items: [
      {
        icon_url: 'forbes-logo',
        link: 'https://www.forbes.com/sites/forbesfinancecouncil/2023/06/06/how-smbs-can-contribute-to-supply-chain-decarbonization/?sh=49e81fbf3041'
      },

      {
        icon_url: 'berg',
        link: 'https://www.bloomberg.com/news/audio/2022-05-16/easing-supply-chain-constraints-radio?srnd=fixed-income'
      },
      {
        icon_url: 'wsj',
        link: 'https://www.wsj.com/articles/drip-capital-raises-15-million-for-cross-border-financing-1529626519'
      },
      {
        icon_url: 'fortune-magazine',
        link: 'https://www.fortuneindia.com/technology/drip-capital-raises-25-million-from-accel-and-others/103456'
      },
      {
        icon_url: 'nasdaq',
        link: 'https://www.nasdaq.com/videos/how-the-supply-chain-crisis-accelerated-digital-transformation'
      }
    ]
  },
  localeModal: {
    title: 'Where are you visiting us from?',
    go: 'Go',
    locales: [
      {
        text: 'India (English)',
        value: 'en-in'
      },
      {
        text: 'United States (English)',
        value: 'en-us'
      },
      {
        text: 'Mexico (Spanish)',
        value: 'es-mx'
      },
      {
        text: 'Global (English)',
        value: 'en'
      }
    ]
  },
  cautionaryAlertModal: {
    title: 'Important Notice',
    body: 'Beware of fraudsters falsely claiming affiliation with Drip Capital, Inc. on various platforms.',
    button: 'Read our cautionary notice'
  }
}
