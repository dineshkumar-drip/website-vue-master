module.exports = {
  urls: {
    howItWorks: '/#como-funciona',
    investorsFooter: '/inversionistas',
    contact: '/contacto',
    about: '/acerca-de-nosotros',
    careers:
      'https://www.linkedin.com/jobs/search/?keywords=drip%20capital%20m%C3%A9xico',
    intCalc: '/calculadora-de-tasas-de-interes',
    channelPartner: '/socios',
    exporters: {
      apply: '/proveedores/aplicar',
      footer: '/proveedores'
    },
    products: {
      invoiceFactoring: '/productos/factoraje-de-facturas',
      exportFinance: '/productos/finanzas-de-exportacion',
      postShipmentFinance: '/productos/finanzas-despues-del-envio',
      nonRecourseFactoring: '/productos/factorizacion-sin-recurso',
      receivablesFactoring: '/productos/factoring-de-cuentas-por-cobrar',
      exportFactoring: '/productos/factoring-de-exportacion',
      internationalFactoring: '/productos/factoring-internacional'
    },
    links: {
      resources: '/es-mx/recursos',
      blog: '/es-mx/recursos/blog'
    },
    termsOfUse: '/terminos-de-uso',
    privacyPolicy: '/politica-de-privacidad',
    video:
      'https://www.youtube.com/embed/R3-UDcna6iQ?rel=0&amp;showinfo=0&amp;enablejsapi=1',
    cuenta: 'https://cuenta.dripcapital.com/contacto'
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
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.342895206928!2d-122.15271992533079!3d37.429003632004516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb6674daf3a4b%3A0xc232195f14005e81!2sDrip%20Capital%20Inc.!5e0!3m2!1sen!2sin!4v1683901382981!5m2!1ses!2ses'
  },
  region: {
    phone: '+52-55-4161-1579',
    domesticMxPhone: '(55) 5350 8865',
    email: 'contacto@dripcapital.com',
    domesticMxEmail: 'gregorio@dripcapital.com',
    city: 'Ciudad de México',
    country: 'México',
    slug: 'mexico',
    company: 'Bradley 75, Anzures, Miguel Hidalgo,',
    address1: '11590 Ciudad de México,',
    address2: 'CDMX',
    business: 'Mexico',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.5319485524915!2d-99.18124582617307!3d19.432618940683035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8b29f65a677%3A0x3ba8d2d7f2c16fd5!2sBradley%2075%2C%20Anzures%2C%20Miguel%20Hidalgo%2C%2011590%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX%2C%20Mexico!5e0!3m2!1sen!2sus!4v1683921190246!5m2!1ses!2ses'
  },
  country: 'Mexico',
  header: {
    home: 'Casa',
    signIn: 'Inicia sesión',
    startApplication: 'Comenzar Aplicación',
    applyNow: 'Comienza a financiar',
    mainHeader: {
      navItems: [
        {
          text: 'Para nacional y exportación',
          path: 'exporters'
        },
        {
          text: 'Para socios comerciales',
          path: 'partners'
        }
      ],
      companyNavIn: [
        {
          text: 'Sobre nosotros',
          link: 'about'
        },
        {
          text: 'Contacto',
          link: 'contact'
        }
      ],
      companyNavOut: [
        {
          text: 'Equipo de liderazgo',
          link: '/es-mx/liderazgo'
        },
        {
          text: 'Carrera',
          link: 'https://www.linkedin.com/jobs/search/?keywords=drip%20capital%20m%C3%A9xico'
        }
      ],
      resources: [
        {
          text: 'Blog',
          link: '/es-mx/recursos/blog'
        },
        {
          text: 'Finanzas Guias',
          link: '/es-mx/recursos/finanzas-guias'
        }
      ]
    }
  },
  footer: {
    products: {
      title: 'Productos',
      navItems: ['Financiamiento de exportación']
    },
    explore: {
      title: 'Explorar',
      exporters: 'Para nacional y exportación',
      // importers: 'Compradores',
      investors: 'Inversionistas',
      partner: 'Asóciate con nosotros'
    },
    help: {
      title: 'Ayuda',
      howItWorks: 'Cómo funciona',
      faqs: 'Preguntas frecuentes',
      interestCalculator: 'Calculadora de Intereses'
    },
    company: {
      title: 'Compañía',
      about: 'Sobre nosotros',
      contact: 'Contacto',
      leadershipTeam: 'Equipo de liderazgo',
      careers: 'Carrera',
      blog: 'Blog',
      resources: 'Recursos'
    },
    copyright: {
      terms: 'Términos de Uso',
      policy: 'Política de Privacidad',
      optOut: { title: '', link: '' },
      optOutAIRoboCalls: {
        title: '',
        link: ''
      }
    },
    fciInfo: 'Drip Capital Inc. is member of Factors Chain International',
    sslInfo:
      'The connection to this site is encrypted and authenticated using a strong protocol (TLS 1.2), a strong key exchange (ECDHE_RSA with P-256), and a strong cipher (AES_128_GCM).',
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
    cookieConsent: {
      close: 'Cerca',
      line1:
        'Utilizamos cookies para brindarte la mejor experiencia posible en nuestro sitio web. Al continuar navegando, das consentimiento al uso de cookies en concordancia con y para los propósitos establecidos en nuestra',
      line2: 'Política de privacidad',
      line3:
        'y reconoces que has leído, entendido y dado consentimiento a todos los términos y condiciones establecidos'
    },
    cookieConsentBanner: {
      title: 'Valoramos su privacidad',
      body: `Utilizamos cookies y otras tecnologías de seguimiento para mejorar su experiencia en nuestro sitio web. Podemos almacenar y/o acceder a información en un dispositivo y procesar datos personales, como su dirección IP y datos de navegación, para publicidad y contenido personalizados, medición de publicidad y contenido, investigación de audiencia y desarrollo de servicios. <br /> Además, podemos utilizar datos de geolocalización precisos e identificación mediante el escaneo de dispositivos. Para obtener más información, consulte nuestra <a href="/es-mx/privacy-policy" target="_blank">Política de Privacidad.</a>`,
      btnReject: 'Rechazar todo',
      btnAccept: 'Aceptar todo'
    }
  },
  pages: {
    newsroom: require('./pages/newsroom'),
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
    investors: require('./pages/investors'),
    investorsOld: {
      contact: {
        submit: 'Enviar',
        submitting: 'Enviando',
        success: {
          title: '¡Gracias por tu interés!',
          description:
            'Nuestro equipo se comunicará con usted a la brevedad con los detalles sobre cómo invertir en Drip. Para consultas urgentes, contáctenos en <a href="mailto:info@dripcapital.com">info@dripcapital.com</a>'
        }
      }
    },
    about: {
      title: 'Acerca de Nosotros Drip Capital Inc.',
      description:
        'Drip Capital es una empresa de financiamiento internacional que ofrece factoraje sin requerir colateral a exportadores mexicanos mediante un proceso rápido y sencillo.',
      mainHero: {
        title: 'Soluciones de financiamiento',
        title2: 'basadas en la tecnología',
        lead: [
          'Aprovechando datos de comercio internacional, hemos creado soluciones',
          'innovadoras para ayudar a PyMEs a crecer y escalar sus operaciones'
        ],
        tips: [
          {
            tagline: 'Total financiado',
            heading: '$3,500M USD'
          },
          {
            tagline: 'Presencia global',
            heading: '100+ países'
          },
          {
            tagline: 'Empoderando PyMEs',
            heading: '6,000+ empresas'
          }
        ]
      },
      why: {
        title: 'La plataforma de financiamiento del futuro\n',
        items: [
          {
            title: 'Capital de trabajo libre de colateral',
            description:
              'Empoderamos a las PyMEs al brindarles acceso a financiamiento seguro, eficiente y libre de colateral. De esta forma, los negocios pueden pagar a sus proveedores en tiempo, incrementar su capacidad de producción y acelerar su expansión.'
          },
          {
            title: 'Plataforma de evaluación de riesgo',
            description:
              'Utilizamos modelos estadísticos avanzados y algoritmos predictivos basados en data del comercio internacional para identificar oportunidades de financiameinto. Aplicamos más de 100 comprobaciones para garantizar que  se aprueben  oportunidades de gran calidad. '
          },
          {
            title: 'Ingresos para inversionistas institucionales',
            description:
              'Recaudamos capital en los Estados Unidos, Lo que brinda altos rendimientos y oportunidades de inversión líquidas no correlacionadas. Lo canalizamos a los mercados emergentes donde el capital es la mayor limitación para el crecimiento.'
          }
        ]
      },
      map: {
        title: 'Empoderando a PyMEs alrededor del mundo'
      },
      leadership: {
        title: 'Liderazgo global',
        items: [
          {
            name: 'Pushkar Mukewar',
            img: 'pushkar',
            description:
              'Como cofundador y CEO, Pushkar lidera el equipo de más de 180 miembros de Drip. Tiene más de 13 años de experiencia en el dominio financiero con firmas globales como Saama Capital y Capital One. También es alumno de Wharton MBA y tecnología de Georgia.',
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
              'Tej lidera las operaciones y los productos financieros y ha construido la infraestructura central de gestión de riesgos de Drip que ayudó a escalar a más de mil millones de dólares en transacciones. Es un alumno de IIT Bombay con experiencia en escalar empresas en etapa inicial.',
            social: [
              {
                icon: 'linkedin',
                url: 'https://www.linkedin.com/in/pushkar-mukewar-0316951/'
              }
            ]
          },
          {
            name: 'Edmundo Montano',
            img: 'edmundo',
            description:
              'Edmundo dirige el negocio de México, donde su equipo se enfoca en el crecimiento y el éxito del cliente. Tiene más de 9 años de experiencia en empresas de tecnología como Rocket Internet y Amazon y tiene un MBA de la Harvard Business School.',
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
              'Viraj dirige el negocio de India, donde su equipo se centra en el crecimiento y el éxito del cliente. Alumno de IIT Bombay y emprendedor de corazón, cofundó Niffler, que finalmente fue adquirida por Amazon India.',
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
              'Meenakshi dirige la función de Personas en Drip, impulsando la estrategia y el desarrollo de personas y haciendo de Drip el mejor lugar para trabajar. Ha trabajado con empresas de alto crecimiento como GENPACT y Hutch y fue directora global de RR.HH. de Fractal Analytics y BrowserStack.',
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
              'Ankur dirige Ingeniería en Drip y es responsable de impulsar la estrategia tecnológica y la visión del producto de Drip. Ankur, anteriormente líder tecnológico en BrowserStack, aporta años de experiencia en la creación de plataformas tecnológicas para organizaciones a escala.',
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
              'Khushy lidera el equipo de estrategia y varios proyectos especiales que impulsan el crecimiento de Drip. En el pasado, trabajó en Bain & Company en sus oficinas de EE. UU., Reino Unido e India, en proyectos de estrategia para empresas Fortune 500, gobiernos y organizaciones sin fines de lucro.',
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
        title: 'Nuestras Oficinas',
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
        title: 'Nuestros Inversionistas',
        items: ['accel', 'wing', 'yc', 'initialized', 'sequoia']
      },
      lifeAtDrip: {
        title: 'La vida en Drip Capital',
        images: ['carousel-1', 'carousel-2', 'carousel-3']
      },
      inTheNews: 'En las noticias',
      dripExperience:
        'Experimenta el poder del financiamiento de exportación de Drip Capital',
      dripExperienceMxDomestic:
        'Experimenta el poder del financiamiento de Drip Capital',
      values: {
        title: 'Nuestros principios operativos',
        values: [
          {
            title: 'Obsesión por el cliente',
            text: 'Nuestros clientes están en el centro de todo lo que hacemos. Somos obsesivos con nuestros socios de negocio. Proporcionamos soluciones reales para los problemas reales de los clientes de las PYMES para seguir siendo relevantes y estar a la vanguardia.'
          },
          {
            title: 'Insiste en los estándares más altos',
            text: 'Establecemos los estándares más altos en todos los aspectos: personas, productos, procesos y tecnología. Nos nos conformamos con nada por debajo de la excelencia. Reconocemos, contratamos, desarrollamos y promovemos talentos excepcionales.'
          },
          {
            title: 'Piensa en grande. Piensa osadamente',
            text: 'En Drip, impulsamos el crecimiento de las pequeñas y medianas empresas para crear un impacto en las industrias y comunidades. Cuestionamos el statu quo con posibilidades más grandes y osadas. Los grandes sueños nos inspiran y retan.'
          },
          {
            title: 'Sé humilde',
            text: 'Respetamos y apreciamos a todos. Escuchamos y actuamos genuinamente, sin prejuicios. Somos honestos para aceptar nuestros errores y tenemos hambre de aprender.'
          },
          {
            title: 'Actúa como dueño',
            text: 'Ningún problema es "problema de alguien más". Creamos valor a largo plazo por encima de ganancias a corto plazo. Nos mantenemos conectados a los detalles; nada está por debajo de nosotros. Asumimos la responsabilidad y valoramos correctamente.'
          },
          {
            title: 'Un Drip. Un equipo feliz',
            text: 'Nuestro mayor activo en Drip es el talento que trabaja en conjunto para crear algo especial. Lo que nos hace exitosos es nuestro propósito en común. La transparencia, confianza, competitividad y la colaboración nos impulsan. Nos esforzamos por fomentar un lugar de trabajo repleto de alegría y felicidad.'
          },
          {
            title: 'Analiza y siempre actúa',
            text: 'Nos enfocamos en lo realmente importante. Simplificamos problemas grandes y complejos en retos más pequeños sobre los que podemos actuar continuamente. Nuestras decisiones se toman de forma analítica.'
          },
          {
            title: 'Logra resultados relevantes',
            text: 'Los resultados significativos nos importan. Vamos más allá para entregar resultados con tenacidad y orgullo. A pesar de las dificultades, estamos a la altura y damos un paso adelante.'
          }
        ]
      },
      ourPartners: 'Nuestros socios'
    },
    contact: {
      title: 'Contáctanos',
      description: 'Póngase en contacto con Drip Capital.',
      jumbotron: {
        title: 'Estamos aquí para ayudarte',
        lead: {
          line1: '¿Aún tienes preguntas sobre nuestro proceso?',
          line2: 'Llámanos al',
          line3:
            'para que hables con uno de nuestros especialistas en Financiamiento y obtengas respuesta a todas tus dudas.'
        },
        contactForm: {
          title: 'Contáctanos',
          placeholders: {
            name: 'Nombre Completo',
            email: 'Email',
            phone: 'Teléfono',
            company: 'Compañía',
            message: 'Mensaje'
          },
          success: {
            title: '¡Gracias por tu interés!',
            description:
              'Nuestro equipo se pondrá en contacto con usted en breve. Para consultas urgentes, contáctenos en '
          },
          sendMessage: 'Enviar mensaje',
          sendingMessage: 'Enviando mensaje'
        }
      },
      getInTouch: {
        title: 'Nuestras oficinas',
        getDirections: 'Obtener las direcciones'
      },
      conclusion: {
        linkedIn: 'LinkedIn'
      }
    },
    exporters: {
      title: 'Financiamiento de capital de trabajo para exportadores',
      description:
        'Drip Capital brinda soluciones de fácil acceso a capital de trabajo libre de colateral para exportadores. Ingresa tus facturas de exportación y recibe el pago en 24 horas.',
      mainHero: {
        title: 'Factoraje para financiar',
        title2: 'tu crecimiento',
        lead: [
          'No esperes por el pago de tus compradores internacionales.',
          'Ingresa tus facturas y recibe el pago una vez realizado el envío.'
        ],
        getStarted: 'Solicita ya',
        tips: [
          {
            tagline: 'Línea de crédito superior',
            heading: '$2.5 millones de dólares'
          },
          {
            tagline: 'Costos eficientes',
            heading: 'Tasas competitivas'
          },
          {
            tagline: 'Acceso fácil',
            heading: 'Sin colateral'
          }
        ]
      },
      solution: {
        title: 'La solución a tus necesidades de capital de trabajo',
        desc: 'Convierte tu capital de trabajo en una ventaja competitiva para expandirte y crecer rápidamente en mercados nacionales e internacionales. Empresas inteligentes —pequeñas y grandes— están recurriendo a nuestro financiamiento para no solo cubrir más órdenes, sino también para costear su inventario, materias primas, pagos a empleados y otras necesidades de corto plazo.',
        video: 'https://www.youtube.com/embed/R3-UDcna6iQ'
      },
      newSolution: {
        title: 'Ofrece acceso a efectivo libre de colateral a tus clientes',
        desc: '<p>Drip Capital offers a unique trade finance solution that allows <span class="text-secondary font-weight-bold">companies</span> to get a <span class="text-secondary font-weight-bold">collateral-free working capital</span> at the <span class="text-secondary font-weight-bold">click of a button.</span></p><ol class="custom-list d-flex flex-column mt-3"><li>Apply with basic company details.</li><li>Get offer letter.</li><li>Onboarding is fast, paperless, well-priced, with a credit limit of up to $2.5 million USD.</li><li>Once approved, funds are disbursed in 24-48 hours.</li></ol><style>.custom-list { list-style-type: none;counter-reset: elementcounter;padding-left: 0; gap: 1rem; } .custom-list li:before { content: counter(elementcounter) ") ";  counter-increment: elementcounter;}</style>',
        video: 'https://www.youtube.com/embed/RubH4u6NF0I'
      },
      advantage: {
        title: 'La ventaja de Drip',
        items: [
          {
            title: 'Capital de trabajo libre de colateral',
            desc: 'Obtén adelantos de cuentas por cobrar dólares sin requerir colateral'
          },
          {
            title: 'Financiamiento más eficiente',
            desc: 'Una solución digital y flexible de financiamiento con tasas competitivas'
          },
          {
            title: 'Incrementa tu liquidez y crece tus ventas',
            desc: 'Expande tu negocio y mejora tus flujos de efectivo para financiar tu crecimiento'
          },
          {
            title: 'Rápido, simple y transparente',
            desc: 'Sigue nuestro onboarding digital sin papeleo, utiliza nuestro portal para financiar tus facturas y recibe los fondos en 24 horas'
          }
        ]
      },
      capital: {
        title: 'Aplicación simple en 4 pasos',
        items: [
          {
            title: 'Aplica en línea',
            desc: 'Ingresa detalles básicos de tu negocio en nuestro sitio.',
            image: '1'
          },
          {
            title: 'Evaluación de crédito',
            desc: 'Obtén una carta oferta con base en una evaluación de crédito automatizada.',
            image: '2'
          },
          {
            title: 'Ingresa una factura',
            desc: 'Sube de forma segura tus facturas en nuestro portal.',
            image: '3'
          },
          {
            title: 'Desembolsos en 24 horas',
            desc: 'Obtén un adelanto del pago directamente en tu cuenta.',
            image: '4'
          }
        ],
        cta: 'Obtén un oferta'
      },
      newCapital: {
        title: 'Obtén ingresos adicionales',
        cta: 'Aplica en línea',
        items: [
          {
            title: 'Aplica online',
            desc: 'Aplica en línea para registrarte en nuestro programa socios',
            image: '1'
          },
          {
            title: 'Introducción',
            desc: 'Introduce nuestra solución financiera a tu red',
            image: '2'
          },
          {
            title: 'Registro',
            desc: 'El cliente firma el acuerdo y obtiene financiamiento',
            image: '3'
          },
          {
            title: 'Obtén una comisión',
            desc: 'Los socios obtiene un reporte mensual de transacciones y reciben sus pagos de igual forma',
            image: '4'
          }
        ]
      },
      successStories: {
        title: 'Lo que nuestros clientes dicen sobre nosotros',
        items: [
          {
            icon: 'textile.png',
            desc: 'Nuestra empresa ahora le vende a seis nuevos clientes en cuatro países distintos ya que podemos ofrecer condiciones de crédito atractivas gracias al apoyo de Drip.',
            owner: 'Exportador de textiles y vestimenta'
          },
          {
            icon: 'food.png',
            desc: 'Hemos duplicado nuestras ventas gracias al acceso a capital que nos otorgó Drip.',
            owner: 'Exportador de productos alimenticios'
          },
          {
            icon: 'seafood.png',
            desc: 'Gracias a que Drip nos otorgó capital de trabajo en tan solo una semana, fuimos capaces de cumplir con un pico inesperado en la demanda.',
            owner: 'Exportador de mariscos congelados'
          },
          {
            icon: 'plastic.png',
            desc: 'El factoraje de Drip es parte importante de nuestra estrategia financiera y de ventas, pues nos permite mejorar nuestra liquidez y financiar el crecimiento.',
            owner: 'Exportador de plásticos y polímeros'
          },
          {
            icon: 'mezcal.png',
            desc: 'El financiamiento de Drip nos ayuda a seguir trabajando en las órdenes de compra pendientes, continuar con la cadena productiva y negociar con nuestros proveedores un descuento por pronto pago.',
            owner: 'Exportador de mezcal'
          }
        ]
      },
      leaders: {
        title: 'Nuestros clientes trabajan con líderes de la industria',
        items: [
          {
            icon_url: 'borg-warner'
          },
          {
            icon_url: 'ford'
          },
          {
            icon_url: 'grupo-modelo-mx'
          },
          {
            icon_url: 'macdonald'
          }
        ]
      },
      growth: {
        title: 'Obtén adelantos de tus cuentas por cobrar en 24 horas',
        desc: 'Toma el control sobre el pago de tus facturas con nuestra solución de financiamiento libre de colateral. Aplica ahora para empezar tu viaje con Drip Capital.'
      },
      conclusion: {
        title: 'Gana con Drip Capital',
        leads: [
          'Trabaja como nuestro aliado y monetiza la relación con tus proveedores.',
          'Comparte la solución de Drip con tus proveedores y gana atractivas recompensas por tus referencias.',
          'Contáctanos para más información.'
        ],
        cta: 'Comienza aquí'
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
          title: 'Estás a un paso de obtener una oferta'
        },
        alt1: 'Application Help',
        tags: [
          'Collateral-free working capital',
          'Quick approval for credit upto $2.5 million',
          'Increase sales by offering credit'
        ]
      },
      awards: {
        title: 'Nuestros reconocimientos y certificaciones',
        items: [
          'combinator.png',
          'red-herring.png',
          'fintech-250.png',
          'efy.png',
          'banking-tech.png'
        ]
      }
    },
    advanceAgainstPO: {
      title: 'Financiamiento de capital de trabajo para exportadores',
      description:
        'Drip Capital brinda soluciones de fácil acceso a capital de trabajo libre de colateral para exportadores. Ingresa tus facturas de exportación y recibe el pago en 24 horas.',
      mainHero: {
        title: 'Factoraje para financiar',
        title2: 'tu crecimiento',
        lead: [
          'No esperes por el pago de tus compradores internacionales.',
          'Ingresa tus facturas y recibe el pago una vez realizado el envío.'
        ],
        getStarted: 'Solicita ya',
        tips: [
          {
            tagline: 'Línea de crédito superior',
            heading: '$2.5 millones de dólares'
          },
          {
            tagline: 'Costos eficientes',
            heading: 'Tasas competitivas'
          },
          {
            tagline: 'Acceso fácil',
            heading: 'Sin colateral'
          }
        ]
      },
      solution: {
        title: 'La solución a tus necesidades de capital de trabajo',
        desc: 'Convierte tu capital de trabajo en una ventaja competitiva para expandirte y crecer rápidamente en mercados nacionales e internacionales. Empresas inteligentes —pequeñas y grandes— están recurriendo a nuestro financiamiento para no solo cubrir más órdenes, sino también para costear su inventario, materias primas, pagos a empleados y otras necesidades de corto plazo.',
        video: 'https://www.youtube.com/embed/R3-UDcna6iQ'
      },
      newSolution: {
        title: 'Ofrece acceso a efectivo libre de colateral a tus clientes',
        desc: '<p>Drip Capital offers a unique trade finance solution that allows <span class="text-secondary font-weight-bold">companies</span> to get a <span class="text-secondary font-weight-bold">collateral-free working capital</span> at the <span class="text-secondary font-weight-bold">click of a button.</span></p><ol class="custom-list d-flex flex-column mt-3"><li>Apply with basic company details.</li><li>Get offer letter.</li><li>Onboarding is fast, paperless, well-priced, with a credit limit of up to $2.5 million USD.</li><li>Once approved, funds are disbursed in 24-48 hours.</li></ol><style>.custom-list { list-style-type: none;counter-reset: elementcounter;padding-left: 0; gap: 1rem; } .custom-list li:before { content: counter(elementcounter) ") ";  counter-increment: elementcounter;}</style>',
        video: 'https://www.youtube.com/embed/RubH4u6NF0I'
      },
      advantage: {
        title: 'La ventaja de Drip',
        items: [
          {
            title: 'Capital de trabajo libre de colateral',
            desc: 'Obtén adelantos de cuentas por cobrar dólares sin requerir colateral'
          },
          {
            title: 'Financiamiento más eficiente',
            desc: 'Una solución digital y flexible de financiamiento con tasas competitivas'
          },
          {
            title: 'Incrementa tu liquidez y crece tus ventas',
            desc: 'Expande tu negocio y mejora tus flujos de efectivo para financiar tu crecimiento'
          },
          {
            title: 'Rápido, simple y transparente',
            desc: 'Sigue nuestro onboarding digital sin papeleo, utiliza nuestro portal para financiar tus facturas y recibe los fondos en 24 horas'
          }
        ]
      },
      capital: {
        title: 'Cómo funciona',
        items: [
          {
            title: 'Se emite tu orden de compra',
            desc: 'Tu comprador coloca una orden de compra en Voyager, quien luego la coloca contigo.',
            image: '1'
          },
          {
            title: 'Anticipo inicial',
            desc: 'Voyager te paga el 60% del valor de la orden de compra por adelantado.',
            image: '2'
          },
          {
            title: 'Etapa de envío',
            desc: 'Sube el conocimiento de embarque (Bill of Lading) y recibe otro 20%.',
            image: '3'
          },
          {
            title: 'Pago final en la fecha de vencimiento',
            desc: 'Una vez que el comprador paga a Voyager, recibes el saldo restante en el momento de la liquidación.',
            image: '4'
          }
        ],
        cta: 'Solicita una oferta'
      },
      newCapital: {
        title: 'Obtén ingresos adicionales',
        cta: 'Aplica en línea',
        items: [
          {
            title: 'Aplica online',
            desc: 'Aplica en línea para registrarte en nuestro programa socios',
            image: '1'
          },
          {
            title: 'Introducción',
            desc: 'Introduce nuestra solución financiera a tu red',
            image: '2'
          },
          {
            title: 'Registro',
            desc: 'El cliente firma el acuerdo y obtiene financiamiento',
            image: '3'
          },
          {
            title: 'Obtén una comisión',
            desc: 'Los socios obtiene un reporte mensual de transacciones y reciben sus pagos de igual forma',
            image: '4'
          }
        ]
      },
      successStories: {
        title: 'Lo que nuestros clientes dicen sobre nosotros',
        items: [
          {
            icon: 'textile.png',
            desc: 'Nuestra empresa ahora le vende a seis nuevos clientes en cuatro países distintos ya que podemos ofrecer condiciones de crédito atractivas gracias al apoyo de Drip.',
            owner: 'Exportador de textiles y vestimenta'
          },
          {
            icon: 'food.png',
            desc: 'Hemos duplicado nuestras ventas gracias al acceso a capital que nos otorgó Drip.',
            owner: 'Exportador de productos alimenticios'
          },
          {
            icon: 'seafood.png',
            desc: 'Gracias a que Drip nos otorgó capital de trabajo en tan solo una semana, fuimos capaces de cumplir con un pico inesperado en la demanda.',
            owner: 'Exportador de mariscos congelados'
          },
          {
            icon: 'plastic.png',
            desc: 'El factoraje de Drip es parte importante de nuestra estrategia financiera y de ventas, pues nos permite mejorar nuestra liquidez y financiar el crecimiento.',
            owner: 'Exportador de plásticos y polímeros'
          },
          {
            icon: 'mezcal.png',
            desc: 'El financiamiento de Drip nos ayuda a seguir trabajando en las órdenes de compra pendientes, continuar con la cadena productiva y negociar con nuestros proveedores un descuento por pronto pago.',
            owner: 'Exportador de mezcal'
          }
        ]
      },
      leaders: {
        title: 'Nuestros clientes trabajan con líderes de la industria',
        items: [
          {
            icon_url: 'borg-warner'
          },
          {
            icon_url: 'ford'
          },
          {
            icon_url: 'grupo-modelo-mx'
          },
          {
            icon_url: 'macdonald'
          }
        ]
      },
      growth: {
        title: 'Obtén adelantos de tus cuentas por cobrar en 24 horas',
        desc: 'Toma el control sobre el pago de tus facturas con nuestra solución de financiamiento libre de colateral. Aplica ahora para empezar tu viaje con Drip Capital.'
      },
      conclusion: {
        title: 'Gana con Drip Capital',
        leads: [
          'Trabaja como nuestro aliado y monetiza la relación con tus proveedores.',
          'Comparte la solución de Drip con tus proveedores y gana atractivas recompensas por tus referencias.',
          'Contáctanos para más información.'
        ],
        cta: 'Comienza aquí'
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
          title: 'Estás a un paso de obtener una oferta'
        },
        alt1: 'Application Help',
        tags: [
          'Collateral-free working capital',
          'Quick approval for credit upto $2.5 million',
          'Increase sales by offering credit'
        ]
      },
      awards: {
        title: 'Nuestros reconocimientos y certificaciones',
        items: [
          'combinator.png',
          'red-herring.png',
          'fintech-250.png',
          'efy.png',
          'banking-tech.png'
        ]
      },
      whoIsThisFor: {
        title: '¿Para Quién es Esto?',
        intro:
          'El anticipo contra PO es exclusivamente para nuestros clientes exportadores actuales en Drip Capital.',
        points: [
          {
            normal: 'Exportadores PYME que ya trabajan con Drip y manejan ',
            bold: 'órdenes internacionales grandes o frecuentes'
          },
          {
            normal: 'Vendedores que confían en Drip y necesitan ',
            bold: 'pagos por adelantado para gestionar capital de trabajo limitado'
          },
          {
            normal: 'Exportadores que buscan ',
            bold: 'acelerar el flujo de efectivo sin ofrecer colateral adicional'
          }
        ],
        closing:
          'Esta solución está diseñada para cerrar la brecha entre la recepción de la orden y la generación de la factura.'
      },

      earlyAccess: {
        title: 'Obtén hasta un 60% de anticipo incluso antes de enviar.',
        line1:
          'El anticipo contra PO te da acceso anticipado a capital. Esta solución innovadora se ofrece a través de nuestra subsidiaria comercial, Voyager Trading.',
        line2:
          'Te permite acceder hasta al 60% del valor de tu orden de compra antes del envío, para que puedas cubrir los costos de producción y logística sin esperar a que pague el comprador.'
      }
    },
    homePage: {
      title: 'Financiamiento de capital de trabajo para exportadores',
      description:
        'Drip Capital brinda soluciones de fácil acceso a capital de trabajo libre de colateral para exportadores. Ingresa tus facturas de exportación y recibe el pago en 24 horas.',
      mainHero: {
        title: 'Impulsa tus exportaciones',
        title2: 'con financiamiento rápido',
        lead: [
          'Financiamiento sin colateral para tu negocio de exportación – ',
          'desde antes del envío hasta después del envío.'
        ],
        getStarted: 'Comienza ahora',
        tips: [
          {
            tagline: 'Línea de crédito más alta',
            heading: '$2.5 millones USD'
          },
          {
            tagline: 'Eficiente en costos',
            heading: 'Precios competitivos'
          },
          {
            tagline: 'Acceso simple',
            heading: 'Sin colateral'
          }
        ]
      },
      solution: {
        title: 'La solución a tus necesidades de capital de trabajo',
        desc: 'Convierte tu capital de trabajo en una ventaja competitiva para expandirte y crecer rápidamente en mercados nacionales e internacionales. Empresas inteligentes —pequeñas y grandes— están recurriendo a nuestro financiamiento para no solo cubrir más órdenes, sino también para costear su inventario, materias primas, pagos a empleados y otras necesidades de corto plazo.',
        video: 'https://www.youtube.com/embed/R3-UDcna6iQ'
      },
      newSolution: {
        title: 'Ofrece acceso a efectivo libre de colateral a tus clientes',
        desc: '<p>Drip Capital offers a unique trade finance solution that allows <span class="text-secondary font-weight-bold">companies</span> to get a <span class="text-secondary font-weight-bold">collateral-free working capital</span> at the <span class="text-secondary font-weight-bold">click of a button.</span></p><ol class="custom-list d-flex flex-column mt-3"><li>Apply with basic company details.</li><li>Get offer letter.</li><li>Onboarding is fast, paperless, well-priced, with a credit limit of up to $2.5 million USD.</li><li>Once approved, funds are disbursed in 24-48 hours.</li></ol><style>.custom-list { list-style-type: none;counter-reset: elementcounter;padding-left: 0; gap: 1rem; } .custom-list li:before { content: counter(elementcounter) ") ";  counter-increment: elementcounter;}</style>',
        video: 'https://www.youtube.com/embed/RubH4u6NF0I'
      },
      advantage: {
        title: 'La ventaja de Drip',
        items: [
          {
            title: 'Capital de trabajo libre de colateral',
            desc: 'Obtén adelantos de cuentas por cobrar dólares sin requerir colateral'
          },
          {
            title: 'Financiamiento más eficiente',
            desc: 'Una solución digital y flexible de financiamiento con tasas competitivas'
          },
          {
            title: 'Incrementa tu liquidez y crece tus ventas',
            desc: 'Expande tu negocio y mejora tus flujos de efectivo para financiar tu crecimiento'
          },
          {
            title: 'Rápido, simple y transparente',
            desc: 'Sigue nuestro onboarding digital sin papeleo, utiliza nuestro portal para financiar tus facturas y recibe los fondos en 24 horas'
          }
        ]
      },
      capital: {
        title: 'Aplicación simple en 4 pasos',
        items: [
          {
            title: 'Aplica en línea',
            desc: 'Ingresa detalles básicos de tu negocio en nuestro sitio.',
            image: '1'
          },
          {
            title: 'Evaluación de crédito',
            desc: 'Obtén una carta oferta con base en una evaluación de crédito automatizada.',
            image: '2'
          },
          {
            title: 'Ingresa una factura',
            desc: 'Sube de forma segura tus facturas en nuestro portal.',
            image: '3'
          },
          {
            title: 'Desembolsos en 24 horas',
            desc: 'Obtén un adelanto del pago directamente en tu cuenta.',
            image: '4'
          }
        ],
        cta: 'Obtén un oferta'
      },
      newCapital: {
        title: 'Obtén ingresos adicionales',
        cta: 'Aplica en línea',
        items: [
          {
            title: 'Aplica online',
            desc: 'Aplica en línea para registrarte en nuestro programa socios',
            image: '1'
          },
          {
            title: 'Introducción',
            desc: 'Introduce nuestra solución financiera a tu red',
            image: '2'
          },
          {
            title: 'Registro',
            desc: 'El cliente firma el acuerdo y obtiene financiamiento',
            image: '3'
          },
          {
            title: 'Obtén una comisión',
            desc: 'Los socios obtiene un reporte mensual de transacciones y reciben sus pagos de igual forma',
            image: '4'
          }
        ]
      },
      successStories: {
        title: 'Lo que nuestros clientes dicen sobre nosotros',
        items: [
          {
            icon: 'textile.png',
            desc: 'Nuestra empresa ahora le vende a seis nuevos clientes en cuatro países distintos ya que podemos ofrecer condiciones de crédito atractivas gracias al apoyo de Drip.',
            owner: 'Exportador de textiles y vestimenta'
          },
          {
            icon: 'food.png',
            desc: 'Hemos duplicado nuestras ventas gracias al acceso a capital que nos otorgó Drip.',
            owner: 'Exportador de productos alimenticios'
          },
          {
            icon: 'seafood.png',
            desc: 'Gracias a que Drip nos otorgó capital de trabajo en tan solo una semana, fuimos capaces de cumplir con un pico inesperado en la demanda.',
            owner: 'Exportador de mariscos congelados'
          },
          {
            icon: 'plastic.png',
            desc: 'El factoraje de Drip es parte importante de nuestra estrategia financiera y de ventas, pues nos permite mejorar nuestra liquidez y financiar el crecimiento.',
            owner: 'Exportador de plásticos y polímeros'
          },
          {
            icon: 'mezcal.png',
            desc: 'El financiamiento de Drip nos ayuda a seguir trabajando en las órdenes de compra pendientes, continuar con la cadena productiva y negociar con nuestros proveedores un descuento por pronto pago.',
            owner: 'Exportador de mezcal'
          }
        ]
      },
      leaders: {
        title: 'Nuestros clientes trabajan con líderes de la industria',
        items: [
          {
            icon_url: 'borg-warner'
          },
          {
            icon_url: 'ford'
          },
          {
            icon_url: 'grupo-modelo-mx'
          },
          {
            icon_url: 'macdonald'
          }
        ]
      },
      growth: {
        title: 'Obtén adelantos de tus cuentas por cobrar en 24 horas',
        desc: 'Toma el control sobre el pago de tus facturas con nuestra solución de financiamiento libre de colateral. Aplica ahora para empezar tu viaje con Drip Capital.'
      },
      conclusion: {
        title: 'Gana con Drip Capital',
        leads: [
          'Trabaja como nuestro aliado y monetiza la relación con tus proveedores.',
          'Comparte la solución de Drip con tus proveedores y gana atractivas recompensas por tus referencias.',
          'Contáctanos para más información.'
        ],
        cta: 'Comienza aquí'
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
          title: 'Estás a un paso de obtener una oferta'
        },
        alt1: 'Application Help',
        tags: [
          'Collateral-free working capital',
          'Quick approval for credit upto $2.5 million',
          'Increase sales by offering credit'
        ]
      },
      awards: {
        title: 'Nuestros reconocimientos y certificaciones',
        items: [
          'combinator.png',
          'red-herring.png',
          'fintech-250.png',
          'efy.png',
          'banking-tech.png'
        ]
      }
    },
    importers: {
      title: 'Financiamiento de capital de trabajo para importadores',
      description:
        'Drip Capital brinda soluciones de fácil acceso a capital de trabajo libre de colateral para importadores. Accede a capital de trabajo utilizando tus facturas pendientes o tuinventario en almacén.',
      jumbotron: {
        contactForm: {
          title: 'Interesado en aprender más?',
          placeholders: {
            name: 'Nombre completo',
            email: 'Email',
            organization: 'Company',
            address: 'Address',
            phone: 'Teléfono',
            message: 'Mensaje (Optional)'
          },
          success: {
            title: '¡Gracias por tu interés!',
            description:
              'Nuestro equipo se pondrá en contacto con usted en breve. Para consultas urgentes, contáctenos en ',
            desc2: 'or call on'
          },
          sendMessage: 'Enviar mensaje',
          sendingMessage: 'Enviando mensaje'
        }
      },
      mainHero: {
        title: 'Compra hoy, paga tus',
        title2: 'importaciones después',
        lead: [
          'Obtén acceso oportuno a tu efectivo utilizando facturas o inventario.'
        ],
        getStarted: 'Solicita ya',
        tips: [
          {
            tagline: 'Línea de crédito atractiva',
            heading: '$2.5 millones de dólares'
          },
          {
            tagline: 'Tasas competitivas',
            heading: '0.7% mensual* con base en valuación de crédito'
          },
          {
            tagline: 'Transferencia instantánea',
            heading: 'En 24 horas'
          }
        ]
      },
      solution: {
        title: 'Soluciones para un flujo de efectivo más sano',
        desc: 'El financiamiento para compradores de Drip Capital brinda una línea de crédito accesible en un solo clic. Las PyMEs pueden obtener capital de trabajo adicional a bajo costo y mejorar sus flujos de efectivo para invertir en tecnología, comprar más inventario, adquirir nuevos clientes, cumplir con las demandas de temporada y expandirse a nuevos mercados, lo que les permitirá impulsar sus ventas y hacer crecer su negocio más ágilmente.'
      },
      advantage: {
        title: 'La ventaja de Drip',
        items: [
          {
            title: 'Límite de crédito alto',
            desc: 'Financiamiento simple y en un solo día con un límte de hasta $2.5 millones de dólares.'
          },
          {
            title: 'Competitividad',
            desc: 'Construye una reputación a largo plazo al ofrecer términos atractivos a tus clientes y pagos oportunos a tus proveedores.'
          },
          {
            title: 'Sin papeleo, ágil, sin complicaciones',
            desc: 'Obtén financiamiento en 24 horas después de subir los documentos a la plataforma.'
          },
          {
            title: 'Mejora el flujo de efectivo',
            desc: 'Crea un negocio más sano y rentable con un ciclo de conversión de efectivo más corto.'
          }
        ]
      },
      capital: {
        title: 'Es tu dinero. Accede a él de manera rápida y segura.',
        items: [
          {
            title: 'Aplica en línea',
            desc: 'Ingresa detalles básicos de tu negocio en nuestro sitio',
            image: '1'
          },
          {
            title: 'Calificación de Drip',
            desc: 'Obtén una carta propuesta con base en evaluación de crédito',
            image: '2'
          },
          {
            title: 'Ingresa una factura',
            desc: 'Sube de forma segura tus facturas en nuestro portal',
            image: '3'
          },
          {
            title: 'Recibe el capital',
            desc: 'Obtén un adelanto del pago directamente en tu cuenta en 24 horas',
            image: '4'
          }
        ],
        cta: 'Obtener ofertas'
      },
      successStories: {
        title: 'Únete a líderes de la industria que usan Drip Capital',
        items: [
          {
            desc: 'El uso de nuestras líneas bancarias para pagar a los proveedores mientras la carga aún está en el agua no encajaba muy bien con nuestro ciclo de capital de trabajo. Ojalá hubiéramos sabido sobre Drip antes. Han apoyado nuestro crecimiento y nos están ayudando a escalar más rápido a través del inventario y la financiación de la cadena de suministro.',
            owner: 'CFO - Importador de café en Florida'
          },
          {
            desc: 'La línea de crédito y el proceso de financiamiento de Drip es transparente y funciona perfectamente con nuestro banco actual. Gracias a ellos, ahora podemos comprar productos de la mejor calidad de proveedores de renombre a precios atractivos pagando al momento del envío.',
            owner: 'Propietario - Comerciante de mariscos en Miami'
          },
          {
            desc: 'Ahora podemos aceptar más pedidos de clientes existentes y también hemos comenzado a trabajar con cadenas minoristas populares. Gracias a Drip Capital, ahora tenemos un flujo de caja saludable que nos permite satisfacer este aumento de la demanda.',
            owner: 'Jefe de Ventas - Mayorista de carne en California'
          }
        ]
      },
      leaders: {
        title: 'Nuestros clientes trabajan con líderes de la industria',
        items: [
          {
            icon_url: 'borg-warner'
          },
          {
            icon_url: 'ford'
          },
          {
            icon_url: 'grupo-modelo-mx'
          },
          {
            icon_url: 'macdonald'
          }
        ]
      },
      growth: {
        title: 'Financiamiento para PyMEs en crecimiento',
        desc: 'Nuestros expertos en financiamiento internacional pueden ayudarte a obtener mayor capital de tu cadena de suministro. Aplica ahora para empezar tu viaje con Drip Capital.'
      },
      conclusion: {
        title: 'Gana con Drip Capital',
        leads: [
          'Obtén atractivas recompensas por cada refierencia de compradores que nos ayudes a sumar a nuestra plataforma. Regístrate y empieza a compartir nuestros productos con tu red.'
        ],
        cta: 'Solicita ya'
      }
    },
    home: {
      title: 'Trade Finance Simplificado',
      description:
        'Drip Capital es una empresa de financiamiento internacional que ofrece factoraje sin requerir colateral a exportadores mexicanos mediante un proceso rápido y sencillo.',
      jumbotron: {
        titles: [
          'Aplicación sencilla con aprobación rápida',
          'Accede a capital de trabajo continuo y estable',
          'Acceso fácil a capital de trabajo sin garantía en colateral'
        ],
        content: {
          t1: 'Aplicación sencilla con aprobación rápida',
          d1: 'Llena nuestra solicitud y espera una respuesta rápida. Olvídate de las esperas largas para ser aprobado.',
          t2: 'Accede a capital de trabajo continuo y estable',
          d2: 'Obtén el pago por adelantado de tus facturas con el factoraje de exportación de Drip y utiliza el capital para hacer crecer tu negocio.',
          t3: 'Acceso fácil a capital de trabajo sin garantía en colateral',
          d3: [
            '— Límite de crédito hasta por US $2.5 millones',
            '— 80% del valor de la factura en cuanto salga el envío',
            '— Tasas de interés competitivas'
          ]
        },
        applyNow: 'Solicita ya',
        checkEligibility: 'ENVIAR INFORMACIÓN'
      },
      videoIntro: {
        logo: 'Logotipo de Drip Capital',
        desc: 'Ve el video para que descubras cómo el factoraje de exportación de Drip está simplificando el financiamiento de comercio internacional'
      },
      howItWorks: {
        title: 'Cómo Funciona',
        desc: 'Obtén el financiamiento de exportación de Drip en tres simples pasos. Nuestro proceso ha sido cuidadosamente optimizado para ser rápido y conveniente para ti.',
        slug: 'como-funciona',
        content: [
          {
            no: '01',
            title: 'Solicitud en Línea',
            desc: 'Llena nuestra solicitud en línea con los datos de tu empresa y los productos que exportas'
          },
          {
            no: '02',
            title: 'Estudio Crediticio',
            desc: 'Nuestro equipo de crédito evaluará tu solicitud y te asignará un límite de crédito'
          },
          {
            no: '03',
            title: 'Envíanos tus Facturas',
            desc: '¡Ya estás listo para recibir tu financiamiento! En cuanto la documentación legal esté completa, puedes empezar a enviarnos las facturas que quieres financiar'
          }
        ],
        checkEligibility: 'Solicita ya'
      },
      benefits: {
        title: 'Cómo te beneficia',
        desc: 'Maximiza tu crecimiento con acceso constante a capital de trabajo por medio de nuestro factoraje de exportación.',
        content: [
          {
            icon: 'chart',
            title: 'Capital de trabajo sin garantía en colateral'
          },
          {
            icon: '2.5million',
            title: 'Límite de crédito de hasta US$ 2.5 millones'
          },
          {
            icon: 'dollar',
            title: 'Adelanto de hasta el 80% del valor de la factura'
          },
          {
            icon: 'exclamation',
            title: 'Protección contra la insolvencia financiera del comprador'
          }
        ],
        testimonials: [
          {
            exporter: 'Exportador de productos alimenticios',
            location: '',
            desc: 'Hemos duplicado nuestras ventas gracias al acceso a capital que nos otorgó Drip',
            icon: 'testimonial-2'
          },
          {
            exporter: 'Exportador de textiles y vestimenta',
            location: '',
            desc: 'Nuestra empresa ahora le vende a seis nuevos clientes en cuatro países distintos ya que podemos ofrecer condiciones de crédito atractivas gracias al apoyo de Drip',
            icon: 'testimonial-1'
          },
          {
            exporter: 'Exportador de mariscos congelados',
            location: '',
            desc: 'Gracias a que Drip nos otorgó capital de trabajo en tan solo una semana, fuimos capaces de cumplir con un pico inesperado en la demanda',
            icon: 'testimonial-3'
          }
        ]
      },
      getInTouch: {
        title: 'Contáctanos',
        email: 'Email'
      }
    },
    newHome: {
      jumbotron: {
        title: 'Crece tus exportaciones con Drip',
        description:
          'Recibe adelantos de tus cuentas por cobrar en menos de 24 horas con nuestra plataforma digital',
        getStarted: 'SOLICITA YA'
      },
      features: {
        title: 'Beneficios de DRIP',
        benefits: [
          {
            icon: 'icon1',
            title:
              'Recibe capital de trabajo sin necesidad de un activo como colateral',
            keyTitle: {
              tradefinance: 'Get collateral-free trade finance',
              dripcapital: 'Get collateral-free trade finance',
              indiafactoring: 'Get collateral-free trade finance',
              invoicecredit: 'Get collateral-free trade finance',
              invoicediscount: 'Get collateral-free trade finance',
              invoicefinance: 'Get collateral-free trade finance'
            },
            description:
              'Financia el crecimiento de tu negocio utlizando tus cuentas por cobrar.',
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
            title: 'Digital, Rápido y Transparente',
            description:
              'Usa el Portal de Drip para subir facturas y tener toda la visibilidad de tus operaciones de financiamiento.'
          },
          {
            icon: 'icon3',
            title: 'Reduce tu riesgo',
            description:
              'Tienes la opción de que tus facturas sean aseguradas en caso de que tu comprador no pague.'
          },
          {
            icon: 'icon4',
            title: 'La Garantía de Drip',
            description:
              'Más de 60 exportadores financiados en México con compradores en más de 30 países, ayudando a los exportadores a crecer 30% mes a mes.'
          }
        ]
      },
      onboarding: {
        title: 'Portal de Drip',
        steps: [
          'Regístrate en línea para validar tu elegibilidad y obtener una oferta.',
          'Firma electrónicamente para confirmar el financiamiento.',
          'Recibe el dinero en tu cuenta en menos de 24 horas.',
          'Agrega y rastrea futuras facturas y pagos en línea.'
        ],
        imgAlt: 'Add Invoice Screenshot'
      },
      insights: {
        title:
          'Datos analíticos sobre comercio internacional al alcance de tus manos',
        texts: [
          'Introducimos DripView – análisis avanzado de datos para entender mejor tus propias exportaciones.',
          'Obtén información sobre tendencias globales DripTrade, la plataforma de comercio de Drip.'
        ],
        imgAlt: 'Insights Screenshot'
      },
      conclusion: {
        title: 'Solicítalo Hoy Mismo',
        t1: 'La solución a tus problemas de capital de trabajo a un solo un click de distancia.',
        cta: 'SOLICITA YA'
      },
      testimonials: [
        {
          item: 'Fuimos capaces de incrementar ventas significativamente gracias al acceso a capital de trabajo que ahora tenemos con Drip. También incorporamos nuevos clientes con términos de crédito muy competitivos.',
          name: 'José Luis Flores',
          location: 'Director Comercial de Tecnometal Mexicana'
        },
        {
          item: 'Decidimos trabajar con Drip Capital porque su producto está enfocado justo a esta necesidad: crecer nuestras exportaciones manteniendo al mismo tiempo finanzas saludables. Una buena sorpresa fue la facilidad de uso de la plataforma así como el servicio que Drip nos ha otorgado.',
          name: 'Jorge Antonio Castillo, Director General de Baja Hot LLC',
          location: 'filial americana de Salsas Castillo'
        }
      ]
    },
    privacy: {
      heading: 'Política de Privacidad de Drip Capital, Inc.',
      subtext:
        'Esta Política de Privacidad ("<b>Política</b>") describe la Información Personal que Drip Capital Inc. y sus filiales ("<b>Drip Capital</b>" o "<b>Compañía</b>" o "<b>DC</b>") pueden recopilar sobre usted, cómo usamos o Procesamos; y protegemos esta información, y las opciones que puede tomar sobre cómo usamos esta información.',
      list: [
        {
          title: 'Introducción',
          body: 'Esta Política establece la política, los procedimientos y los controles para la privacidad en línea con todos los requisitos reglamentarios, operativos y contractuales aplicables y establece cómo DC recopila, almacena, Procesa, transfiere, comparte y utiliza la Información Personal cuando utiliza el sitio web o los servicios de DC. DC ha construido un sólido marco de privacidad en alineación con los requisitos identificados de la Ley de Derechos de Privacidad de California ("<b>CPRA</b>"), así como el certificado de ISO 27001. Cuando accede al sitio web o utiliza nuestros productos y/o servicios, reconoce que ha leído esta Política y entendido su contenido.'
        },
        {
          title: 'Definiciones',
          body: 'A menos que se defina en otra parte de esta Política, los términos en mayúscula tienen los siguientes significados:',
          hasList: true,
          innerList: [
            {
              content:
                '"Información Personal" significa cualquier información de identificación personal que se relacione con una persona física, que, ya sea directa o indirectamente, o en combinación con otra información disponible o que probablemente esté disponible con una persona jurídica, sea capaz de identificar a dicha persona.'
            },
            {
              content:
                '"Procesamiento" incluye la recopilación, registro, organización, estructuración, almacenamiento, adaptación o alteración, recuperación, consulta, uso, divulgación o puesta a disposición de otro modo, alineación o combinación, restricción, borrado o destrucción de Información Personal.'
            },
            {
              content:
                '"Información Personal Sensible" significa Información Personal que también comprende información relacionada con contraseñas, información financiera, condiciones de salud físicas, fisiológicas y/o mentales, orientación sexual, información biométrica, geolocalización. La Información Personal Sensible no incluye información que está libremente disponible o accesible en el dominio público o proporcionada en virtud de cualquier ley por el momento en vigor.'
            }
          ]
        },
        {
          title: 'Recopilación Restringida de Información',
          hasList: true,
          innerList: [
            {
              content:
                'DC solo recopilará la Información Personal que usted consienta. La recopilación de dicha Información Personal nos permite ofrecerle servicios que le ayuden con sus necesidades comerciales. Dependiendo de la necesidad comercial que solicite, DC recopila la información necesaria para configurar y mantener ese servicio comercial.'
            },
            {
              content:
                'Siempre puede negar o retirar su consentimiento en una etapa posterior, según el proceso descrito en las secciones posteriores, de acuerdo con las leyes regionales aplicables.'
            },
            {
              content:
                'Si desea conocer el nombre y las direcciones de las agencias que están asociadas con DC para recopilar y retener su Información, puede comunicarse con <a href="mailto:privacy@dripcapital.com">privacy@dripcapital.com</a>.'
            }
          ]
        },
        {
          title: 'Acceso y Modificación de la Información Personal',
          body: '',
          hasList: true,
          innerList: [
            {
              content:
                'Puede, en cualquier momento, solicitar acceso a su Información Personal almacenada o procesada por DC, de acuerdo con las leyes aplicables. DC responderá a su solicitud según los procedimientos establecidos. DC cuenta con procedimientos razonables para permitirle acceder a la información que almacenamos y/o Procesamos. También puede ejercer su derecho a modificar Información Personal inexacta o incompleta, de acuerdo con las leyes aplicables.'
            },
            {
              content:
                'Comuníquese con privacy@dripcapital.com para obtener más información sobre cómo acceder o modificar su Información Personal con DC.'
            },
            {
              content:
                'La Política solo se aplica a la Información Personal que usted comparte y no se aplica a la información interpretada para ofrecerle servicios comerciales. DC también se reserva el derecho de no compartir ninguna información recopilada de otras fuentes, como agencias de verificación de antecedentes, agencias de crédito, etc., en virtud de una solicitud realizada en este documento. Para brindarle acceso a la información de manera rápida y sencilla, la información solicitada se proporcionará en el formato prescrito según las pautas internas de DC.'
            }
          ]
        },
        {
          title: 'Opción de Consentimiento',
          body: '',
          hasList: true,
          innerList: [
            {
              content:
                'El consentimiento para la Información Personal es siempre voluntario, informado y actual.'
            },
            {
              content:
                'DC ofrece a los clientes la opción de retirar el consentimiento, de acuerdo con las leyes aplicables, para usar su Información Personal que se nos otorga. En ese caso, puede comunicarse con <a href="mailto:privacy@dripcapital.com">privacy@dripcapital.com</a>. Sin embargo, en tales casos, es posible que DC no pueda continuar brindándole los servicios comerciales o, cuando corresponda, el mismo nivel de servicios, para los cuales usted no proporcionó la Información Personal.'
            }
          ]
        },
        {
          title: 'Procesamiento de Información',
          body: '',
          hasList: true,
          innerList: [
            {
              content:
                'DC puede Procesar su Información Personal para los siguientes propósitos:',
              hasList: true,
              deepList: [
                {
                  content:
                    'cumplir con las obligaciones en virtud o en relación con su contrato de acuerdo con nosotros según el servicio comercial utilizado'
                },

                {
                  content:
                    'gestionar y rescindir nuestra relación de acuerdo con usted'
                },

                {
                  content:
                    'cumplir con las obligaciones en virtud o en relación con la prestación de nuestros servicios a nuestros clientes'
                },

                {
                  content:
                    'planificar y gestionar el trabajo y las operaciones del día a día'
                },

                {
                  content:
                    'ejecutar las formalidades relacionadas con la terminación del contrato'
                },

                {
                  content:
                    'facilitar nuestro cumplimiento de las leyes, costumbres y regulaciones que pueden ser aplicables a nosotros de vez en cuando'
                }
              ]
            },

            {
              content:
                'Los propósitos enumerados en las cláusulas anteriores pueden continuar aplicándose incluso en situaciones en las que su relación con nosotros (por ejemplo, en virtud de un contrato) haya terminado o se haya alterado de alguna manera, durante un período razonable posterior (incluido, cuando corresponda, un período que nos permita hacer valer nuestros derechos en virtud de cualquier contrato con usted).'
            },

            {
              content:
                'Cada empleado/asociado comercial/persona relevante de DC, que se ocupe o entre en contacto con Información Personal de un cliente, independientemente de su origen, tendrá la responsabilidad de cumplir con la ley aplicable con respecto a la privacidad de los datos, esta política y las prácticas de privacidad específicas.'
            },

            {
              content:
                'Cada una de estas personas debe buscar asesoramiento en caso de ambigüedad al tratar con Información Personal o al comprender esta Política.'
            },
            {
              content:
                'DC se asegura de que sus empleados/personas relevantes sean diligentes y tengan precaución al tratar con la Información Personal de los clientes, en el curso del desempeño de sus funciones y también, en todo momento, lo harán:',
              hasList: true,
              deepList: [
                {
                  content:
                    'respetar la Información Personal a la que tienen acceso y tratarla de la manera en que esperarían que se trataran sus datos personales.'
                },
                {
                  content:
                    'impedir que cualquier persona no autorizada tenga acceso a cualquier sistema informático que procese Información Personal, y especialmente cualquier:  (1) lectura, copia, alteración, eliminación o eliminación no autorizadas de datos; o  (2) entrada, divulgación, carga, transmisión/transferencia no autorizadas de datos de Información Personal;  (3) cumplir con las políticas y los procedimientos de seguridad y privacidad de la información de DC;'
                },
                {
                  content:
                    'asegurarse de que los usuarios autorizados de un sistema de procesamiento de datos puedan acceder solo a la Información Personal a la que se refiere su derecho de acceso;'
                },
                {
                  content:
                    'mantener un registro de qué Información Personal se ha compartido, cuándo y con quién;'
                },
                {
                  content:
                    'no proporcionar ninguna Información Personal a terceros sin las aprobaciones correspondientes;'
                },
                {
                  content:
                    'Asegurarse de que, durante la comunicación de Información Personal y la transferencia de medios de almacenamiento, los datos no se puedan leer, copiar o borrar sin autorización.'
                },

                {
                  content:
                    'informar y notificar de inmediato, al tomar conocimiento, cualquier vulnerabilidad e infracción relacionada con la privacidad/infracciones de seguridad (incluidos los riesgos potenciales) al personal correspondiente dentro de DC.'
                }
              ]
            },

            {
              content:
                'DC toma muy en serio el incumplimiento de esta política por parte de los empleados de DC y puede tomar medidas disciplinarias que incluyen, entre otras, el despido o la terminación.'
            }
          ]
        },
        {
          title: 'Compartir y Divulgar Información con Terceros',
          body: '',
          hasList: true,
          innerList: [
            {
              content:
                'DC puede compartir su Información Personal con terceros cuando sea necesario para proporcionarle productos o servicios, o como parte del curso regular de nuestra relación con usted. Dichas divulgaciones solo ocurrirán cuando:',
              hasList: true,
              deepList: [
                {
                  content:
                    'Usted haya sido informado previamente o haya dado su consentimiento;'
                },
                {
                  content:
                    'La divulgación sea necesaria para prevenir el fraude, detectar incidentes de seguridad o proteger contra actividades ilegales; o'
                },
                { content: 'Sea permitido o requerido por la ley aplicable.' }
              ]
            },
            {
              content:
                'DC divulgará Información Personal a terceros solo con su consentimiento previo, o de conformidad con una relación contractual. Sin embargo, en ciertas situaciones, como solicitudes legales de las autoridades gubernamentales, obligaciones reglamentarias o el cumplimiento de una orden judicial, DC puede divulgar su Información Personal sin previo aviso o consentimiento, según lo permitido o requerido por la ley.'
            },
            {
              content:
                'DC puede recopilar información sobre cómo utiliza o se conecta a nuestro sitio web, o los tipos de otros sitios web, servicios de redes sociales, contenido y anuncios que ve para personalizar los anuncios en nuestro sitio web, que son visibles para usted cuando visita nuestro sitio web o utiliza nuestros productos o servicios. DC ha establecido procedimientos que garantizarán razonablemente que su Información Personal no sea divulgada por nosotros ni por ninguna agencia/tercero asociado con nosotros, más allá de lo absolutamente requerido.'
            }
          ]
        },
        {
          title: 'Destinatarios de la Información Personal',
          body: 'En relación con la prestación de los servicios solicitados, DC puede colaborar con ciertos terceros que se detallan a continuación:',
          hasList: true,
          innerList: [
            {
              content:
                'Agencias de crédito/compañías de información crediticia ("<b>CIC</b>"): DC puede compartir su Información Personal con agencias de crédito/compañías de información crediticia para obtener los datos crediticios relevantes necesarios para las evaluaciones de riesgo con el fin de poder proporcionar nuestros servicios.'
            },
            {
              content:
                'Servicios de Riesgo: DC trabaja con terceros externos para evaluar el riesgo de las transacciones y recopilar información que DC utiliza para validar y verificar las transacciones.'
            },
            {
              content:
                'Seguro: DC puede compartir su Información Personal con proveedores de seguros o corredores de seguros para evaluar el riesgo y evaluar la cobertura de seguro de crédito para transacciones específicas.'
            },
            {
              content:
                'Cumplimiento de la ley, reguladores y otras partes por razones legales: DC puede compartir su Información Personal con terceros según lo exija la ley o si DC cree razonablemente que dicha acción es necesaria para: (x) cumplir con la ley y las solicitudes razonables de las fuerzas del orden; (y) detectar e investigar actividades ilegales e infracciones de acuerdos; y/o (z) ejercer o proteger los derechos, la propiedad o la seguridad personal de DC, sus usuarios u otros.'
            },
            {
              content:
                'Proveedores de Servicios: DC puede compartir su Información Personal con nuestros proveedores de servicios externos, incluidos bufetes de abogados, agencias de cobranza, socios y otros consultores en relación con la diligencia debida, la suscripción y/o la aplicación de nuestros derechos contractuales.'
            },
            {
              content:
                'Marketing y publicidad: DC puede comunicarse con usted con información sobre nuestros productos y servicios, incluido el envío de mensajes de marketing y la solicitud de sus comentarios sobre nuestros productos y servicios. La mayoría de los mensajes de marketing que envía DC serán por correo electrónico. Para algunos mensajes de marketing, DC puede utilizar la Información Personal que recopila sobre usted para ayudarnos a determinar la información de marketing más relevante para compartir con usted. Es posible que DC necesite comunicarse con usted por correo electrónico o a través de nuestro equipo de soporte.'
            }
          ]
        },
        {
          title: 'Seguridad y Confidencialidad',
          body: '',
          hasList: true,
          innerList: [
            {
              content:
                'DC mantendrá su Información Personal confidencial y limitará el acceso a aquellos que específicamente la necesitan para llevar a cabo sus actividades comerciales, excepto según lo permita la ley aplicable. DC se refiere a los estándares de la industria y utiliza medidas de seguridad administrativas, técnicas y físicas razonables para proteger su Información Personal del acceso, destrucción, uso, modificación o divulgación no autorizados.'
            },
            {
              content:
                'Se ha establecido un sólido sistema de gestión de seguridad de la información ("<b>ISMS</b>") dentro de DC que rige los sistemas y las prácticas alineadas con las mejores prácticas globales y certificado según el estándar ISO/IEC 27001:2013. El sistema está sujeto a controles estrictos que incluyen monitoreo continuo, pruebas de seguridad periódicas, auditorías y verificaciones internas/externas. DC también se asegura de que cualquier socio comercial/subcontratista/subsidiaria/agencia de terceros contratada para Procesar su Información Personal también se adhiera a las prácticas de seguridad razonables para proteger su Información Personal y proporcionar el mismo nivel de protección para los datos según lo exigen los Principios y las leyes y regulaciones aplicables.'
            }
          ]
        },
        {
          title: 'Integridad y Retención de Información Personal',
          body: 'DC utiliza tecnología apropiada y prácticas de empleados bien definidas para Procesar sus datos de manera rápida y precisa. DC no conservará su Información Personal durante más tiempo del necesario, excepto según lo exija la ley aplicable. DC retendrá sus datos personales durante el tiempo que sea necesario para los fines para los que fueron recopilados y en cumplimiento de nuestras obligaciones en virtud de los requisitos legales, reglamentarios, fiscales, contables y técnicos necesarios.',
          hasList: false,
          innerList: []
        },
        {
          title: 'Transferencia de Información',
          body: '',
          hasList: true,
          innerList: [
            {
              content:
                'DC se compromete a garantizar que la Información Personal se almacene en las regiones respectivas tanto como sea posible, en alineación con las leyes y regulaciones aplicables.'
            },
            {
              content:
                'Sin embargo, en ciertos escenarios, es posible que DC necesite transferir y almacenar los datos en los EE. UU. o en la India o en otra región/país en alineación con la arquitectura y las prácticas de información y tecnología corporativas. Siempre que surja tal necesidad de transferencia entre países, la empresa garantizará el cumplimiento adecuado de las leyes y regulaciones a través de medidas tales como garantizar que la transferencia de datos esté en alineación con las leyes y regulaciones aplicables y/o cualquier restricción del Procesamiento se limite solo a aquellas que sean necesarias para el cumplimiento del contrato de trabajo y los requisitos y compromisos relacionados; y se implementan controles adecuados y prácticas de seguridad razonables para garantizar una protección de datos eficaz a la par con los requisitos de las leyes y regulaciones.'
            }
          ]
        },
        {
          title: 'Reclamación de Quejas de Privacidad',
          body: 'Cualquier inquietud, disputa, discrepancia o queja con respecto al Procesamiento de Información Personal puede dirigirse a <a href="mailto:privacy@dripcapital.com">privacy@dripcapital.com</a>. Redresaremos la queja dentro de los 45 días posteriores a la fecha de recepción de dicha queja. Este canal es específico para quejas relacionadas con la privacidad. Todas las quejas anónimas o de terceros no serán registradas/atendidas.',
          hasList: false,
          innerList: []
        },
        {
          title: 'Cambios a la Política de Privacidad',
          body: 'DC se reserva el derecho de actualizar esta Política en cualquier momento, como parte de nuestra mejora continua y para cumplir con la ley aplicable. DC le proporcionará acceso a la Política actualizada a medida que DC realice cambios en nuestro sitio web.',
          hasList: false,
          innerList: []
        },
        {
          title: 'Otras preguntas',
          body: 'Si tiene alguna pregunta o necesita más información sobre esta política, puede comunicarse con nosotros en <a href="mailto:privacy@dripcapital.com">privacy@dripcapital.com</a>.',
          hasList: false,
          innerList: []
        },
        {
          title:
            'Derechos del cliente sobre su Información Personal - Solo residentes de California-EE. UU.',
          body: 'De acuerdo con la ley de privacidad aplicable, usted tiene los siguientes derechos con respecto a su Información Personal que posee DC:',
          hasList: true,
          innerList: [
            {
              content:
                'Derecho a Eliminar: Un cliente tiene derecho a solicitar la eliminación de Información Personal en su totalidad o en parte. DC tiene derecho a almacenar, mantener y Procesar toda o parte de la información que no es personal.'
            },
            {
              content:
                'Derecho a Corregir: Un cliente tiene derecho a solicitar la modificación o actualización de la Información Personal recopilada por DC si el cliente la considera inexacta o incorrecta.'
            },
            {
              content:
                'Derecho a Acceder/Saber: Un cliente tiene derecho a solicitar la divulgación de lo siguiente sobre la Información Personal recopilada sobre el cliente durante los últimos 12 meses:',
              hasList: true,
              deepList: [
                {
                  content: 'Las categorías de Información Personal recopilada'
                },
                {
                  content:
                    'Las categorías de fuentes de las que se recopiló la Información Personal'
                },
                {
                  content:
                    'Las categorías de terceros a los que se divulgó la Información Personal'
                },
                {
                  content:
                    'El propósito de recopilar y compartir Información Personal'
                },
                {
                  content:
                    'La Información Personal real recopilada en su totalidad'
                }
              ]
            },
            {
              title:
                'Derecho a saber qué Información Personal se vende y a quién:',
              hasList: true,
              deepList: [
                {
                  content:
                    'Un cliente tiene derecho a solicitar que se revele qué o si la Información Personal se vende a un tercero.'
                },
                {
                  content:
                    'DC nunca vende Información Personal recopilada a terceros. Consulte el Aviso de Recopilación de Información.'
                }
              ]
            },
            {
              title:
                'Derecho a optar por no participar en la venta o el intercambio de Información Personal:',
              hasList: true,
              deepList: [
                {
                  content:
                    'Un cliente tiene derecho, en cualquier momento, a indicarle a DC que deje de compartir Información Personal con terceros.'
                }
              ]
            },
            {
              content: 'Derecho a limitar el uso de Información Personal:',
              hasList: true,
              deepList: [
                {
                  content:
                    'Un cliente tiene derecho, en cualquier momento, a indicarle a DC que limite el uso de la Información Personal a aquel uso que sea necesario para que DC preste sus servicios.'
                }
              ]
            },
            {
              content:
                'Derecho a no represalias tras la exclusión o el ejercicio de otros derechos:',
              hasList: true,
              deepList: [
                {
                  content:
                    'DC no discriminará a un cliente que haya ejercido uno o más de los derechos anteriores.'
                }
              ]
            }
          ],
          appendText:
            'Los clientes de California pueden ejercer dichos derechos haciendo una solicitud de la siguiente manera:  Comunicándose con nosotros a nuestro número gratuito al +1 (888) 402 9440  Enviando su solicitud a <a href="mailto:privacy@dripcapital.com">privacy@dripcapital.com</a>.'
        },
        {
          title: 'Aviso de Recopilación de Información',
          body: 'Este Aviso describe la base sobre la cual DC Procesará la Información Personal de las personas, incluidos, entre otros, clientes, clientes, proveedores, proveedores de servicios, socios comerciales, empleados, contratistas y cualquier otra persona que interactúe con DC, de acuerdo con las leyes y regulaciones de protección de datos aplicables. DC puede recopilar Información Personal según su consentimiento, incluyendo, entre otros, su:',
          hasList: true,
          innerList: [
            { content: 'Nombre de la empresa' },
            { content: 'Ubicación' },
            {
              content:
                'Datos de contacto, incluidos la dirección postal, los números de teléfono, la dirección de correo electrónico'
            },
            { content: 'Detalles de registro' },
            { content: 'Número de identificación de la empresa' },
            { content: 'Otros detalles de identificación relevantes' },
            { content: 'Detalles de salud financiera' },
            { content: 'Historial de crédito' },
            { content: 'Información financiera' },
            { content: 'Número de cuenta y otros detalles relevantes' },
            { content: 'Detalles de la cuenta bancaria;' },
            { content: 'Información relacionada con impuestos' },
            {
              content: 'Fotografías y otra información audiovisual relevante;'
            },
            {
              content:
                'Registros relacionados con el uso, el acceso, la vigilancia, etc., dentro de las instalaciones y los sistemas de DC;'
            },
            {
              content:
                'Número de identificación del propietario (específico localmente)'
            },
            {
              content:
                'Información de contacto de las personas asociadas con la empresa'
            },
            {
              content:
                'Cualquier información adicional que nos proporcione como nuestro cliente'
            }
          ]
        },
        {
          title: 'Información Personal de Niños',
          body: 'No proporcionamos nuestros Servicios a niños. No recopilamos a sabiendas Información Personal (tal como se define en la Ley de Protección de la Privacidad en Línea de los Niños de EE. UU., o "COPPA") de niños menores de 13 años. Tampoco "compartimos" ni "vendemos" a sabiendas, tal como se definen esos términos en la Ley de Derechos de Privacidad de California, la Información Personal de menores de 16 años que son residentes de California. Si usted es padre o tutor y cree que hemos violado esta disposición, comuníquese con <a href="mailto:privacy@dripcapital.com">privacy@dripcapital.com</a>.',
          hasList: false,
          innerList: []
        },
        {
          title: 'Cookies',
          body: 'DC puede recopilar información relacionada con asuntos tales como el número total de visitas a este sitio web, el número de visitantes a cada página de este sitio web, las direcciones de Protocolo de Internet ("IP") de nuestros visitantes y el tiempo dedicado a este sitio web. DC puede utilizar esta información para comprender cómo nuestros visitantes utilizan este sitio web para que DC pueda mejorarlo. DC también puede utilizar su dirección IP para ayudar a diagnosticar problemas con nuestros servidores y para fines de administración del sistema. DC puede compartir información agregada no personal con nuestros agentes, socios comerciales, consultores u otros terceros. Parte de la información no personal se puede recopilar a través de cookies. Las cookies pueden permitirnos rastrear los intereses de nuestros usuarios para mejorar su experiencia en este sitio web y para ofrecer contenido específico a los intereses de un usuario. Estas cookies generalmente no están vinculadas a Información Personal. Si solicita que el sitio web almacene su nombre de usuario y/o contraseña, la cookie se vinculará a su nombre de usuario y/o contraseña y, por lo tanto, rastreará su ruta de navegación alrededor del sitio web. Puede eliminar o rechazar la cookie utilizando las herramientas de su navegador web. Aunque puede seguir utilizando este sitio web sin la cookie, es posible que algunas partes del sitio web no funcionen correctamente para usted.',
          hasList: false,
          innerList: []
        },
        {
          title: 'Sitios Web de Terceros',
          body: 'Nuestro sitio web puede contener enlaces a sitios web, aplicaciones o servicios de terceros que no son operados ni controlados por nosotros. Estos terceros pueden recopilar Información Personal de usted de forma independiente, incluso a través de cookies, píxeles u otras tecnologías de seguimiento cuando interactúa con su contenido en nuestro sitio web.',
          hasList: false,
          innerList: [],
          appendText:
            'Tenga en cuenta que esta Política no se aplica a sitios web o servicios de terceros, y no somos responsables de las prácticas de privacidad, el manejo de datos o las medidas de seguridad de dichos terceros. Le recomendamos que revise las políticas de privacidad de los sitios web o servicios de terceros que visite antes de proporcionarles su Información Personal. <br/><br/> Última actualización el 30 de abril de 2025.'
        }
      ]
    },
    oldPrivacy: {
      title: 'Política de Privacidad',
      subtitle: [
        'Drip Capital brinda líneas de crédito que pueden ser usada para costear materias primas, inventarios y otras necesidad de corto plazo para ayudar a exportadores a cumplir con los pedidos de sus compradores. Estas líneas de crédito pueden ayudar a crecer el negocio y tomar órdenes de compradores más grandes.',
        'Esta Política de Privacidad describe la información que Drip Capital Inc. y sus afiliados (Drip Capital) recolecta sobre tu, cómo la usamos y protegemos esta información, y las elecciones que puedes hacer sobre cómo usamos esta información. Esta política aplica a la información, incluyendo la que puede ser usada para identificar a una individuo (Información Personal), recolectada sobre ti por Drip Capital por medio de diferentes métodos, incluyendo a través el sitio web. Tu privacidad es importante para nosotros, por ellos te pedimos que te familiarices con nuestra prácticas de privacidad y contáctanos si tienes alguna pregunta.'
      ],
      heading: 'POLÍTICA DE PRIVACIDAD DRIP CAPITAL, INC.',
      description: '',
      content: [
        {
          title: 'Recolección de tu Información Personal',
          desc: [
            'El derecho de utilizar el sitio web es personal. Te comprometes a no reproducir, duplicar, copiar, vender, revender, usar o explotar para cualquier fin comercial el sitio web, su uso y acceso, cualquier información  o tecnología obtenida del sitio web. Los contenidos del sitio web, incluyendo, sin limitación, cualquier contenido, imagen, logo y cualquier otro material están protegidos por leyes de derechos de autor, patentes, marca registrada y otras leyes tanto de Estados Unidos, como del extranjero.'
          ]
        },
        {
          title: 'Cambios y modificaciones al sitio web',
          desc: [
            'La Información Personal incluye cualquiera que decidas brindarnos como parte de la creación de una cuenta, comenzar o completar una aplicación para financiamiento. Esto incluirá información como tu nombre, número telefónico, dirección, fecha de nacimiento, número de seguridad social, información bancaria, número de tarjeta de crédito, etcétera. Además de cualquier información que pueda brindar directamente, podrías autorizarnos para acceder a Información Personal proveída por terceros.',
            'Adicionalmente, podríamos recolectar información cuando utilices nuestros productos o servicios, así como al realizar búsquedas, cómo utilizas los servicios que brindamos, y el tipo de peticiones que realices.',
            'Utilizamos la información recolectada a través de cookies y otras tecnologías como beacons, etiquetas y scripts para mejorar la experiencia del usuario y la calidad general de nuestro servicio. Estas tecnologías son usadas al analizar tendencias, administrar el sitio web, dar seguimiento a los movimientos del usuarios en la web y para recolectar información demográfica sobre nuestro base de usuarios. Podríamos recibir reportes basados en el uso de estas tecnologías por compañías o un individuo, así como una base agregada.'
          ]
        },
        {
          title: 'Uso de Información Personal',
          hasList: true,
          desc: [
            'En general, usaremos la Información Personal compartida para el propósito para el cual la información fue proveída, para brindar la información solicitada o relacionada con una solicitud específica, para informar sobre servicios que sean de tu interés, o para mejorar el sitio web y los servicios que ofrecemos a los clientes. Nuestro uso de tu Información Personal puede incluir, sin limitaciones, lo siguiente:',
            'Registro como un usuario e identificación al conectarse',
            'Revisión y procesamiento de una aplicación para uno o más de nuestro productos de financiamiento.',
            'Informar sobre diversas opciones de productos de financiamiento que sean de interés.',
            'Comunicar sobre información de la cuenta, envíos, solicitudes de atención a cliente, comunicaciones de marketing, etcétera.',
            'Obtener, mantener, mejorar y proveer servicios, así como para conducir nuestro negocio.',
            'Producir datos analíticos y reportes que contengan resúmenes anónimos de Información Personal y otros datos que no sea personal.',
            'Información (Información General) que compartimos con socios de negocios. La Información General puede incluir Información Personal que haya sido agregada, anonimizada y que no permita identificarte.'
          ]
        },
        {
          title: 'Divulgación de Información Personal',
          desc: [
            'La Información Personal compartida puede ser divulgada en circunstancias limitadas, incluyendo, pero no limitada, a cualquier ley, regulación, proceso legal o solicitud gubernamental aplicable, así como Términos de Servicio ejecutables, como investigaciones de posibles violaciones, detectar, prevenir o atender fraude, problemas técnicos o de seguridad, para proteger y defender derechos y la propiedad de Drip Capital, o, en caso de una emergencia que amenace la vida, salud o seguridad de un individuo.',
            'Nos reservamos el derecho de divulgar tu Información Personal según sea requerido por la ley y cuando consideremos que la divulgación sea necesaria para proteger nuestros derechos o cumplir con procedimientos judiciales, órdenes de la corte o procesos legales relacionados a nuestro sitio web.',
            'Dependemos de servicios de terceros para llevar a cabo una variedad de servicios en nuestro nombre, tales como el hosting de nuestro sitio web. Al recurrir a ello, podríamos tener la necesidad de compartir la Información Personal. Brindamos a nuestros proveedores de servicios solo la Información Personal necesaria para llevar a cabo sus servicios y requerimos que protejan dicha información y no la utilicen para ningún otro propósito. Podríamos complementar tu Información Personal con información de terceros.'
          ]
        },
        {
          title:
            'Rastreo (tracking), cookies y opciones para denegar el rastreo',
          desc: [
            'Drip Capital puede recolectar automáticamente Información no Personal relacionada al número total de visitas a su sitio web, el número de visitantes de cada página del sitio web,  las direcciones de Protocolo de Internet (IP) de los visitantes, así como el tiempo que pasen en sitio. Podríamos usar esa información para entender cómo es que nuestros visitantes utilizan el sitio web para mejorarlo. También podríamos usar la dirección IP para ayudar a diagnosticar problemas en nuestro servidores y para propósitos de administración de sistema. En ocasiones, podríamos compartir información no Personal con nuestros agentes, socios de negocio, consultores y otros terceros.',
            'Cierta Información no personal puede ser recolectada a través de cookies. Los cookies son usadas por gran parte de los sitios web. Los cookies son archivos de texto guardados en la computadora de los usuarios y que contienen información sobre el usuario. Los cookies permiten el rastreo de los intereses del usuario para mejorar la experiencia en el sitio y para entregar contenido afín a dichos intereses. Podríamos colocar cookies en el archivo del navegador de tu computadora cuando visites nuestro sitio web. Estos cookies no están generalmente vinculados a Información Personal. Si solicitas que un sitio web guarde tu nombre de usuarios y contraseña, el archivo cookie estará vinculado a tu usuario y contraseña, y, por ende, rastrearemos tu navegación en el sitio web.',
            'Puedes borrar o declinar el uso de cookies utilizando las herramientas en tu navegador web. Aunque aún puedes utilizar el sitio web sin cookies, algunas partes del sitio tal vez no funcionen propiamente.'
          ]
        },
        {
          title: 'Transferencia de información',
          desc: [
            'Tu Información Personal puede ser transferida, almacenada y procesada en un país distinto al que fue proveída. Esto incluye los Estados Unidos. Al hacer esto, transferimos información atendiendo con las leyes de protección de datos. Asimismo, tomamos acciones para proteger tu Información personal en cualquier país en el que sea almacenada o transferida. Contamos con procedimientos y controles para asegurarlo.'
          ]
        },
        {
          title: 'Seguridad',
          desc: [
            'Estamos comprometidos a mantener la seguridad de tu Información Personal, por lo que hemos implementado estándares de la industria de procedimientos técnicos, administrativos y físicos para proteger tu información. También limitamos el acceso a Información Personal a aquellos que cuentan con una necesidad de negocio. Cuando brindamos tu Información Personal a nuestras subsidiarias, socios de negocio de confianza, afiliados o proveedores de servicios, requerimos que dichas compañías protejan la información y no la utilizan para ningún otro propósito. Sin embargo, aunque hemos intentado crear un sitio seguro y confiable, la confidencialidad de cualquier comunicación  o material transmitido hacia o desde este sitio web no puede ser garantizada. Te recomendamos ser cauteloso al transmitir Información Personal por Internet. Al divulgar cualquier Información Personal, deberás estar consciente that dicha información puede ser accesible al público y, consecuentemente, podría ser recolectada y utilizada por otros sin tu consentimiento. También deberás reconocer que tu uso del Internet y este sitio web es únicamente bajo tu riesgo. La seguridad de tu Información Personal es importante para nosotros. Cuando introduzcas información sensible (como el número de tarjeta de crédito o número de seguridad social) en nuestros formularios, encriptamos la información utilizando tecnología segura (Security Socket Layer, SSL). El acceso a tu Información Personal es a través de un ID único y una contraseña seleccionada por ti. Para proteger la confidencialidad de la información, no la compartas con alguien más. Eres responsable de todos los usos del sitio web realizados por cualquier persona que utilice tu ID único y contraseña. Infórmanos inmediatamente si crees que tu usuario o contraseña están comprometidos.'
          ]
        },
        {
          title: 'Sitios web terceros y funcionalidades de Dripcapital.com',
          desc: [
            'Para mayor conveniencia, Drip Capital puede brindarte enlaces de este sitio web a otros sitios web que gestionan terceros independientes. No nos hacemos responsables por las prácticas de privacidad de dichos terceros. Te exhortamos a que estés consciente del momento en que dejas el sitio web y leer las políticas de privacidad de cualquier otro sitio web que visites. Nuestro sitio web incluye funcionalidades de redes sociales, como el inicio de sesión por Facebook o miniprogramas interactivos que funcionan en nuestro sitio. Estas características podrían recolectar tu dirección IP, la página que visitas en el sitio, además de utilizar cookies para implementar la funcionalidad apropiadamente. Las funcionalidades de redes sociales  y widgets son alojados por terceros o directamente en nuestro sitio. Tus interacciones con estas características son regidas por la política de privacidad de la compañía que las provea.'
          ]
        },
        {
          title: 'Cambios',
          desc: [
            'Nuestra Política de Privacidad puede cambiar. Notificaremos cualquier cambio de dicha política en esta página.'
          ]
        },
        {
          title: 'Contacto',
          desc: [
            'Si tienes alguna pregunta sobre nuestras prácticas de privacidad o te gustaría revisar o actualizar tu Información Personal, puedes contactarnos en nuestra dirección corporativa o enviarnos un correo electrónico a contactus@dripcapital.com'
          ]
        }
      ],
      conclude: 'Fecha efectiva: 1 de marzo, 2015.'
    },
    channelPartner: {
      title: 'Programa de socios comerciales',
      description:
        'Únete a nuestro programa de socios comerciales y monetiza tus conexiones con compradores y proveedores. Contáctanos hoy para saber más.',
      jumbotron: {
        title:
          'Asociate a Drip Capital y monetiza tus relaciones con exportadores.',
        line1:
          'Presenta el factoraje de Drip Capital a exportadores y obtén comisiones atractivas por tus clientes referidos',
        getRegistered: 'Enviar'
      },
      success: [
        {
          primary: '',
          stat: '$5,000M+',
          sec: 'Financiados'
        },
        {
          primary: '',
          stat: '6,000',
          sec: 'Empresas'
        },
        {
          primary: '',
          stat: '100+',
          sec: 'Países'
        },
        {
          primary: '',
          stat: '100,000',
          sec: 'Transacciones Globales'
        }
      ],
      benefits: {
        title: 'Beneficios para el exportador',
        content: [
          {
            icon: 'chart',
            title: 'Capital de trabajo sin colateral',
            desc: 'El financiamiento es ofrecido sin necesidad de colateral.'
          },
          {
            icon: '2.5million',
            title: 'Límite de crédito de hasta US$2.5 millones',
            desc: 'Drip ofrece una línea de crédito que va desde los US$50 mil hasta los US$2.5 millones, dependiendo del tamaño del exportador y sus necesidades.'
          },
          {
            icon: 'dollar',
            title: 'Adelantamos el 80% del valor de la factura',
            desc: 'Los exportadores ahora pueden recibir el pago de sus facturas por adelantado. Esto permite liberar el 80% del valor de la factura al instante.'
          },
          {
            icon: 'fast',
            title: 'Aprobación rápida, papeleo mínimo, sin complicaciones',
            desc: 'Los exportadores pueden aplicar a Drip llenando un formato en 5 minutos, requiriendo papeleo mínimo.'
          }
        ]
      },
      conclusion: {
        title: 'Contáctanos',
        email: 'contacto@dripcapital.com',
        form: {
          title: 'Regístrate como Socio Comercial',
          dba: 'Haciendo negocios como:',
          businessType: 'Tipo de empresa:',
          userTypes: [
            { text: 'Persona física', value: 'individual' },
            { text: 'Persona moral', value: 'company' }
          ],
          success: {
            title: 'Thanks for your interest!',
            desc: 'Our team will contact you shortly with the details on how to partner with Drip. For urgent queries, please contact us at'
          }
        }
      },
      solution: {
        title: 'Ofrece acceso a efectivo libre de colateral a tus clientes',
        desc: 'Drip ofrece una solución financiera única que permite a compradores y proveedores obtener capital de trabajo libre de colateral utilizando sus facturas y cuentas por pagar. Empresas inteligentes, grandes y pequeñas, utilizan nuestro financiamiento para liberar efectivo adicional de su cadena de suministro para invertir en el crecimiento de su negocio y expandir su huella global. Esto ofrece a nuestros socios comerciales una oportunidad única para ofrecer una solución de financiamiento sin complicaciones a sus clientes de manera instantánea, sin papeleo, a precios atractivos y con un límite de crédito de hasta $2.5 millones de dólares. Nuestro equipo de expertos dedicados trabaja puntualmente para sumar a nuestro socios y sus clientes.',
        video: 'https://www.youtube.com/embed/RubH4u6NF0I'
      },
      mainHero: {
        title: 'Sé un socio de Drip Capital',
        title1: '',
        title2: 'La plataforma de financiamiento al comercio global del futuro',
        // title3: '',
        subtitle:
          'Únete a nuestro programa de socios comerciales y monetiza tus conexiones con compradores y proveedores alrededor del país.',
        // getStarted: 'Comienza aquí',
        tips: [
          {
            tagline: 'Ganancias atractivas',
            heading: '$2M+ en comisiones pagadas'
          },
          {
            tagline: 'Un comunidad en crecimiento',
            heading: '1000+ socios registrados'
          },
          {
            tagline: 'Red global',
            heading: 'Presencia en 100+ países'
          }
        ]
      },
      capital: {
        title: 'Acceso fácil a efectivo',
        items: [
          {
            title: 'Aplica online',
            desc: 'Aplica en línea para registrarte en nuestro programa socios',
            image: '1'
          },
          {
            title: 'Introducción',
            desc: 'Introduce nuestra solución financiera a tu red',
            image: '2'
          },
          {
            title: 'Registro',
            desc: 'El cliente firma el acuerdo y obtiene financiamiento',
            image: '3'
          },
          {
            title: 'Obtén una comisión',
            desc: 'Los socios obtiene un reporte mensual de transacciones y reciben sus pagos de igual forma',
            image: '4'
          }
        ],
        cta: 'Aplica en línea'
      },
      contactForm: {
        title: 'Detalles para comenzar',
        placeholders: {
          name: 'Nombre completo',
          email: 'Email',
          organization: 'Company',
          address: 'Address',
          phone: 'Teléfono',
          message: 'Message (Optional)',
          company: 'Compañía'
        },
        success: {
          title: 'Gracias por tu interés en Drip Capital!',
          description:
            'Nuestro consultor financiero te contactará en 48 horas. Para solicitudes urgentes, por favor contáctanos al +52 55 4161 1579',
          desc2: 'or call on'
        },
        sendMessage: 'INGRESAR',
        sendingMessage: 'Submitting Message'
      },
      growth: {
        title: 'Detalles para comenzar',
        desc: 'Únete a nuestro programa de socios comerciales y monetiza tus conexiones con compradores y proveedores alrededor del país.'
      },
      faqs: {
        title: 'Preguntas frecuentes',
        items: [
          {
            question: '¿Quién puede registrarse para ser socio comercial?',
            answer:
              'Cualquier persona que esté en contacto con un negocios activo con operaciones internacionales o domésticas de comercio pueden registrarse como uno de nuestros socios comerciales. Nuestro socios se encuentran en una amplia variedad de sectores, como fletes, compras, consultoría financiera, brokers, abogados, compañías logísticas, instituciones financieras, etcétera.'
          },
          {
            question:
              '¿Existe un límite máximo de comisión que se pueda ganar con Drip?',
            answer:
              'En la mayoría de los servicios la única limitante es que el cliente siga financiando con nosotros. Solo manejamos un tope de 25,000 dólares anuales en el esquema de factoraje a proveedores.'
          },
          {
            question:
              '¿Esta comisión es por cada orden financiada a través de mi referencia?',
            answer:
              'La comisión es por cada factura que financiemos del cliente referenciado y se paga de manera trimestral sobre cartera recuperada.'
          },
          {
            question:
              '¿Qué pasa si mi cliente decide no usar el financiamiento de Drip después de firmar el acuerdo?',
            answer: 'Nada, simplemente no se generan comisiones.'
          },
          {
            question:
              '¿Cuáles son los beneficios para proveedores y compradores?',
            answer:
              'Mayor flujo de efectivo, no se contraen deudas o pasivos, se mejoran plazos de crédito (ambas vías), se generan más ventas, etcétera.'
          }
        ]
      },
      news: {
        title: 'En las noticias',
        items: [
          {
            icon_url: 'milenio',
            link: 'https://www.milenio.com/negocios/inversiones-bienes-capital-empresas-creceran-2021'
          },
          {
            icon_url: 'eleconomista',
            link: 'https://www.eleconomista.com.mx/sectorfinanciero/Hay-oportunidad-de-financiamiento-en-competencia-comercial-entre-Mexico-y-China-Drip-Capital-20210523-0041.html'
          },
          {
            icon_url: 'elfinanciero',
            link: 'https://www.elfinanciero.com.mx/economia/el-factoraje-se-populariza-entre-grandes-firmas/'
          },
          {
            icon_url: 'el-heraldo',
            link: 'https://heraldodemexico.com.mx/economia/2021/7/13/suben-costos-maritimos-empresas-tienen-que-pagar-cinco-veces-por-el-traslado-de-mercancias-315463.html'
          },
          {
            icon_url: 'reforma',
            link: 'https://www.reforma.com/aplicacioneslibre/preacceso/articulo/default.aspx?urlredirect=https://www.reforma.com/amenaza-al-comercio-nuevo-brote-de-covid-en-china/ar2212011?referer=--7d616165662f3a3a6262623b727a7a7279703b767a783a--'
          }
        ]
      },
      newSolution: {
        title: 'Ofrece acceso a efectivo libre de colateral a tus clientes',
        desc: '<p>Drip Capital ofrece una solución de financiamiento que permite a <span class="text-secondary font-weight-bold">empresas en México</span> acceder a <span class="text-secondary font-weight-bold">capital de trabajo libre de colateral.</span><ol class="custom-list d-flex flex-column mt-3"><li>Una empresa aplica con detalles básicos</li><li>Obtiene una carta oferta</li><li>El onboarding es rápido, sin papeleo, con costo eficiente y una línea de crédito por hasta $2.5 millones USD</li><li>Una vez aprobado, la empresa recibe adelantos de sus facturas en 24 horas.</li></ol><style>.custom-list { list-style-type: none;counter-reset: elementcounter;padding-left: 0; gap: 1rem; } .custom-list li:before { content: counter(elementcounter) ") ";  counter-increment: elementcounter;}</style>'
      },
      newCapital: {
        title: 'Obtén ingresos adicionales',
        cta: 'Aplica en línea',
        items: [
          {
            title: 'Aplica online',
            desc: 'Aplica en línea para registrarte en nuestro programa socios',
            image: '1'
          },
          {
            title: 'Introducción',
            desc: 'Introduce nuestra solución financiera a tu red',
            image: '2'
          },
          {
            title: 'Registro',
            desc: 'El cliente firma el acuerdo y obtiene financiamiento',
            image: '3'
          },
          {
            title: 'Obtén una comisión',
            desc: 'Los socios obtiene un reporte mensual de transacciones y reciben sus pagos de igual forma',
            image: '4'
          }
        ]
      }
    },
    bankDetails: {
      exporterCountry: 'País exportador :',
      requestError: 'Solicitud no autorizada'
    },
    landing: {
      tradeFinance: {
        phone: 'Llámanos al: +52-55-4161-1579',
        email: 'contacto@dripcapital.com',
        title: 'Factoraje en línea simplificado',
        description:
          'Financia tus ventas nacionales e internacionales con factoraje | Libre de colateral | Desembolso instantáneo | Límite de crédito alto',
        jumbotron: {
          title: 'Drip adelanta los pagos de tus facturas',
          description:
            'Con nuestra solución de factoraje, tu negocio puede recibir por adelantado el 80% del valor de cada factura por ventas nacionales o de exportación.',
          form: {
            title: 'Algunos datos para iniciar',
            interest: 'Me Interesa',
            categories: [
              {
                value: 'Factoraje de Exportación',
                text: 'Factoraje de Exportación'
              },
              { value: 'Factoraje Nacional', text: 'Factoraje Nacional' },
              { value: 'Ambos', text: 'Ambos' },
              { value: 'Otros', text: 'Otros' }
            ],
            successTitle:
              'Your Application has been received. Thank you for taking this step towards growing your Export business.',
            successDescription:
              'Our Export Finance Advisor will contact you within 3 hours. While you\'re here, check out our <a href="{faqHref}">FAQs</a>.',
            cta: 'Obtén una oferta'
          },
          partnersTitle: 'Recommended by:'
        },
        advantage: {
          title: 'Las Ventajas de Drip',
          items: [
            {
              title: 'Capital de Trabajo Libre de Colateral',
              desc: 'Financia el crecimiento de tu negocios utilizando tus cuentas por cobrar.'
            },
            {
              title: 'Límite de Crédito Superior a Tu Banco',
              desc: 'Obtén una línea de financiamiento de hasta US$2.5 millones.'
            },
            {
              title: 'Bajo Costo',
              desc: 'Nuestras tasas son altamente competitivas.'
            },
            {
              title: 'Rápido y Transparente',
              desc: 'Utiliza nuestro portal para obtener financiamiento al instante.'
            }
          ]
        },
        capital: {
          title: 'Acceso Rápido a Efectivo Sin Deuda ni Colateral',
          items: [
            {
              title: 'Aplicar en Línea',
              desc: 'Aplica en línea para empezar el proceso de solicitud con nuestro equipo',
              image: '1'
            },
            {
              title: 'Evaluación de Goteo',
              desc: 'Obtén una oferta después de ingresar los detalles necesarios sobre tu negocio',
              image: '2'
            },
            {
              title: 'Enviar Factura',
              desc: 'Sube al portal de Drip las facturas que deseas financiar',
              image: '3'
            },
            {
              title: 'Recibir Fondos',
              desc: 'Obtén el financiamiento en alrededor de 24 horas',
              image: '4'
            }
          ]
        },
        statsTitle: 'Sobre Drip Capital',
        stats: [
          {
            number: 'US$1,000',
            text: 'Financiamiento Expedido',
            suffix: 'Millones+'
          },
          {
            number: '2,000+',
            text: 'Compradores y Proveedores',
            suffix: 'Clientes'
          },
          {
            number: '65+',
            text: 'Rutas de Comercio',
            suffix: 'Países'
          },
          {
            number: 'Más de 20,000',
            text: 'Aprobaciones más Rápidas',
            suffix: 'Transacciones'
          }
        ],
        conclusion: {
          title:
            'Aplica ahora para financiar tus facturas por ventas nacionales y de exportación',
          cta: 'Comienza aquí'
        },
        news: {
          title: 'En las noticias',
          items: [
            {
              icon_url: 'elfinanciero',
              link: 'https://www.elfinanciero.com.mx/economia/el-factoraje-se-populariza-entre-grandes-firmas/'
            },
            {
              icon_url: 'entrepreneur',
              link: 'https://www.entrepreneur.com/article/357324'
            },
            {
              icon_url: 'eleconomista',
              link: 'https://www.eleconomista.com.mx/sectorfinanciero/Hay-oportunidad-de-financiamiento-en-competencia-comercial-entre-Mexico-y-China-Drip-Capital-20210523-0041.html'
            },
            {
              icon_url: 'insider-mx',
              link: 'https://businessinsider.mx/fintech-planean-rebasar-innovacion-bancos-credito-pymes/'
            }
          ]
        },
        thankYou: {
          title: 'Gracias por tu interés en Drip Capital',
          message:
            'Nuestro consultor financiero te contactará en 48 horas. Para solicitudes urgentes, por favor contáctanos al <a href="tel:+52-55-4161-1579">+52-55-4161-1579</a> / <a href="mailto:contacto@dripcapital.com">contacto@dripcapital.com</a>'
        }
      },
      buyerFinance: {
        title: 'Soluciones Financieras Para Compradores',
        description:
          'Drip Capital prové financiamiento a proveedores y soluciones de finaciamiento de inventario para compradores en México | Obtén una oferta hoy',
        jumbotron: {
          title: 'Drip adelanta los pagos de tus facturas',
          description:
            'Con nuestra solución de factoraje, tu negocio puede recibir por adelantado el 80% del valor de cada factura por ventas nacionales o de exportación.',
          form: {
            title: 'Estás a un paso de obtener una oferta.',
            successTitle:
              'Your Application has been received. Thank you for taking this step towards growing your Export business.',
            successDescription:
              'Our Export Finance Advisor will contact you within 3 hours. While you\'re here, check out our <a href="{faqHref}">FAQs</a>.',
            cta: 'Obtén una oferta'
          }
        },
        advantage: {
          title: 'Soluciones Para un Flujo de Efectivo Más Sano',
          items: [
            {
              title: 'Financiamiento a Proveedores',
              desc: 'La solución de financiamiento a proveedores de Drip puede ayudarte a cubrir las facturas de tus proveedores una vez que se realice el envío. De esta forma, puedes pagar a Drip después y negociar mejores términos de pago.'
            },
            {
              title: 'Financiamiento de Inventario',
              desc: 'La línea de financiamiento de Drip te permite liberar capital de trabajo de tu inventario, al permitirte venderlo a Drip y comprarlo una vez que sea requerido.'
            }
          ]
        },
        capital: {
          title: 'Acceso Rápido a Efectivo Sin Deuda ni Colateral',
          items: [
            {
              title: 'Aplicar en Línea',
              desc: 'Aplica en línea para empezar el proceso de solicitud con nuestro equipo',
              image: '1'
            },
            {
              title: 'Evaluación de Goteo',
              desc: 'Obtén una oferta después de ingresar los detalles necesarios sobre tu negocio',
              image: '2'
            },
            {
              title: 'Enviar Factura',
              desc: 'Sube al portal de Drip las facturas que deseas financiar',
              image: '3'
            },
            {
              title: 'Recibir Fondos',
              desc: 'Obtén el financiamiento en alrededor de 24 horas',
              image: '4'
            }
          ]
        },
        conclusion: {
          title:
            'Aproveche la financiación sin complicaciones en sus pedidos de importación y compra.',
          cta: 'Comienza aquí',
          download: 'Download Brochure'
        }
      }
    },
    products: {
      navTabs: [
        {
          title: 'Descripción',
          href: '#overview'
        },
        {
          title: 'Cómo funciona',
          href: '#how-it-works'
        },
        {
          title: 'Por qué Drip Capital',
          href: '#why-drip-capital'
        },
        {
          title: 'Historias de crecimiento',
          href: '#growth-stories'
        },
        {
          title: 'Preguntas',
          href: '#faqs'
        }
      ],
      growthStories: {
        title: 'Historias de crecimiento',
        subTitle:
          'Así hemos ayudado a emprendedores a exponenciar tu crecimiento'
      },
      videoIntro: {
        lead1: 'Ve el video para que descubras cómo el',
        lead2:
          'de Drip está simplificando el financiamiento de comercio internacional.'
      },
      hiw: {
        lead1: 'Solicitud en línea',
        lead2:
          'de Drip en tres simples pasos. Nuestro proceso ha sido cuidadosamente optimizado para ser rápido y sencillo.'
      },
      benefits: {
        lead1:
          'Maximiza tu crecimiento con acceso constante a capital de trabajo por medio de nuestro factoraje de exportación.'
      },
      invoiceFactoring: {
        title: 'Factoraje de Facturas',
        description: 'Factoraje de Facturas',
        keyword: 'factoraje de facturas'
      },
      banner: {
        title:
          'La solución a tus problemas de capital de trabajo a un solo un click de distancia',
        applyCTA: 'Solicita ya'
      },
      quickFacts: {
        title: 'Drip Capital en números',
        subTitle:
          'Tenemos la confianza de más de 1,500 exportadores e importadores globales'
      },
      productBenefits: {
        title: 'Por qué elegir Drip Capital ',
        subtitle:
          'Somos una compañía fintech enfocada en resolver los problemas alrededor del capital de trabajo para PyMEs exportadoras utilizando data y tecnología. Reconstruimos aspectos básicos del financiamiento del comercio internacional para hacer más parejo el terreno para los negocios de menor tamaño.',
        content: [
          {
            icon: 'collateral',
            title: 'Capital de trabajo libre de colateral',
            desc: 'Financia el crecimiento de tus exportaciones utilizando tus cuentas por cobrar de comercio internacional.'
          },
          {
            icon: 'credit-limit',
            title: 'Límite de crédito hasta por $2.5 millones de dólares',
            desc: 'Obtén un línea de crédito de hasta $2.5 millones de dólares después del envío.'
          },
          {
            icon: 'competitive',
            title: 'Precios competitivos',
            desc: 'El costo del financiamiento de exportación puedes ser tan bajo como el 0.7% al mes con base en la evaluación de crédito.'
          },
          {
            icon: 'paperless',
            title: 'Sin trámites, ágil y transparente',
            desc: 'Utiliza el portal de Drip Capital para un servicio completo e integral.'
          }
        ]
      },
      domesticMxProductBenefits: {
        title: 'Por qué elegir Drip Capital ',
        subtitle:
          'Somos una compañía fintech enfocada en resolver los problemas alrededor del capital de trabajo de las empresas utilizando data y tecnología. Reconstruimos aspectos básicos del financiamiento para permitir el crecimiento de las empresas tanto en México, como en otros países.',
        content: [
          {
            icon: 'collateral',
            title: 'Capital de trabajo libre de colateral',
            desc: 'Financia el crecimiento de tus ventas nacionales utilizando tus cuentas por cobrar.'
          },
          {
            icon: 'credit-limit',
            title: 'Límite de crédito hasta por 2 millones de pesos',
            desc: 'Obtén un línea de crédito de hasta 2 millones de pesos después del envío.'
          },
          {
            icon: 'competitive',
            title: 'Precios competitivos',
            desc: 'l costo del financiamiento tiene tasas a partir del 1.5% mensual, con base en la evaluación de crédito.'
          },
          {
            icon: 'paperless',
            title: 'Sin trámites, ágil y transparente',
            desc: 'Utiliza el portal de Drip Capital para un servicio completo e integral.'
          }
        ]
      },
      exportProcess: {
        items: [
          {
            icon_url: 'first-step',
            content: `Ingresa digitalmente una factura en el portal de Drip Capital`
          },
          {
            icon_url: 'second-step',
            content: `Obtén por adelantado 80% del valor de la factura`
          },
          {
            icon_url: 'third-step',
            content: `El comprador paga el 100% a Drip Capital`
          },
          {
            icon_url: 'fourth-step',
            content: `Recibe el pago del 20% restante, menos la comisión`
          }
        ]
      },
      exportFinance: {
        title: 'Financiamiento de Exportación',
        description: 'Financiamiento de Exportación',
        keyword: 'financiamiento de exportación'
      },
      postShipmentFinance: {
        title: 'Financiamiento después del Envío',
        description: 'Financiamiento después del Envío',
        keyword: 'financiamiento después del envío'
      },
      nonRecourseFactoring: {
        title: 'Factoraje Sin Recurso',
        description: 'Factoraje Sin Recurso',
        keyword: 'actoraje sin recurso'
      },
      receivablesFactoring: {
        title: 'Factoraje de Cuentas por Cobrar',
        description: 'Factoraje de Cuentas por Cobrar',
        keyword: 'factoraje de cuentas por cobrar'
      },
      faqs: {
        title: 'Preguntas frecuentes',
        moreQuestions: '¿Tienes más preguntas?',
        viewAll: 'ver todo'
      },
      exportResources: {
        viewAll: 'VER TODO',
        learnMore: 'Aprende Más'
      },
      contactForm: {
        sectionSubHeading: '¿Aún tienes preguntas sobre nuestro proceso?',
        connectHeading: 'Déjanos ayudarte',
        or: 'O',
        title: 'Solicita una llamada',
        placeholders: {
          name: 'Nombre completo',
          phone: 'Telédono',
          email: 'Email'
        }
      }
    },
    interestCalculator: {
      title: 'Calculadora de tasas de interés',
      description:
        'Calcule intereses y cargos cuando factoriza sus facturas con Drip Capital',
      table1: {
        title: 'Términos comerciales',
        advanceRate: 'Porcentaje de anticipo (% del Valor de la factura)',
        a: 'A',
        interestRate: 'Tasa de interés (% anualmente)',
        b: 'B',
        factoringCommission:
          'Comisión de factoraje (% del Valor de la factura)',
        c: 'C'
      },
      table2: {
        title: 'Factura ejemplo',
        invoiceValue: 'Valor de la factura ($)',
        d: 'D',
        duration: 'Plazo (dias)',
        e: 'E'
      },
      table3: {
        title: 'Cálculos',
        amountAdvanced: 'Monto anticipado ($)',
        f: 'F=A*D',
        interest: 'Interés ($)',
        g: 'G=F*B*E/360',
        factoringCommission: 'Comisión de factoraje ($)',
        h: 'H=C*D',
        total: 'Total (Comisiones + Interés) ($)',
        i: 'I=G+H',
        percentage: 'Porcentaje sobre el valor de la factura (%)',
        j: 'J=I/D'
      }
    },
    pitchCalculator: {
      title: 'Working Capital Requirement Calculator',
      description: 'Calculate pitch for us customers'
    },
    gotrade: {
      phone: '+52-55-4161-1579',
      email: 'contacto@dripcapital.com'
    }
  },
  landing: {
    exporter: {
      title: 'Crezca Su Negocio Más Rápido',
      description:
        'Libere sus cuentas por cobrar internacionales y crezca su negocio más rápido',
      main: {
        title:
          'Te ofrecemos factoraje de exportación para tus cuentas por cobrar',
        lead1: 'Limite de crédito hasta por US $2.5 millones',
        lead2: '80% del valor de la factura en cuanto salga el envío',
        lead3: 'Tasas de interés competitivas'
      }
    },
    common: {
      form: {
        title: 'Contáctanos sobre tus necesidades',
        success: {
          title: '¡Gracias por tu información!',
          description:
            'Nuestro equipo se pondrá en contacto contigo a la brevedad. Para consultas urgentes, contáctenos en <a href="mailto:contacto@dripcapital.com">contacto@dripcapital.com</a>'
        }
      },
      news: {
        title: 'En las noticias',
        items: [
          {
            icon_url: 'elfinanciero',
            link: 'https://www.elfinanciero.com.mx/economia/el-factoraje-se-populariza-entre-grandes-firmas/'
          },
          {
            icon_url: 'entrepreneur',
            link: 'https://www.entrepreneur.com/article/357324'
          },
          {
            icon_url: 'eleconomista',
            link: 'https://www.eleconomista.com.mx/sectorfinanciero/Hay-oportunidad-de-financiamiento-en-competencia-comercial-entre-Mexico-y-China-Drip-Capital-20210523-0041.html'
          },
          {
            icon_url: 'insider-mx',
            link: 'https://businessinsider.mx/fintech-planean-rebasar-innovacion-bancos-credito-pymes/'
          }
        ]
      }
    },
    peloton: {
      contact: {
        placeholders: {
          name: 'Nombre completo',
          email: 'Email',
          phone: 'Teléfono',
          amount: null,
          productCategory: '¿Qué exporta?',
          company: 'Compañía',
          state: 'Estado',
          exporters: '¿Eres exportador?',
          exportersData: [
            { text: 'Sí soy exportador', value: 'sí soy exportador' },
            { text: 'No exporto', value: 'no exporto' },
            {
              text: 'Soy proveedor de servicios/broker',
              value: 'soy proveedor de servicios/broker'
            },
            { text: 'Otro', value: 'otro' }
          ]
        },
        submit: 'Enviar',
        submitting: 'Sumisión'
      }
    }
  },
  common: {
    form: {
      placeholders: {
        name: 'Nombre completo',
        email: 'Email',
        officePhone: 'Teléfono de oficina',
        phone: 'Teléfono',
        company: 'Compañía',
        companyPurpose: 'Razón social de la empresa',
        iec: 'IEC Número',
        products: '¿Qué productos exporta?',
        city: 'Ciudad',
        state: 'Estado'
      },
      start: 'Comenzar',
      applyNow: 'Solicita ya',
      applying: 'Aplicando',
      submit: 'Enviar',
      submitting: 'Sumisión'
    },
    news: {
      title: 'En las noticias',
      items: [
        {
          icon_url: 'elfinanciero',
          link: 'https://www.elfinanciero.com.mx/economia/el-factoraje-se-populariza-entre-grandes-firmas/'
        },
        {
          icon_url: 'el-heraldo',
          link: 'https://heraldodemexico.com.mx/economia/2022/2/10/fintech-van-en-aumento-crece-en-numero-de-usuarios-377492.html'
        },
        {
          icon_url: 'eleconomista',
          link: 'https://www.eleconomista.com.mx/sectorfinanciero/Hay-oportunidad-de-financiamiento-en-competencia-comercial-entre-Mexico-y-China-Drip-Capital-20210523-0041.html'
        },
        {
          icon_url: 'insider-mx',
          link: 'https://businessinsider.mx/fintech-planean-rebasar-innovacion-bancos-credito-pymes/'
        }
      ]
    }
  },
  blog: {
    title: 'Drip Capital Blog',
    description:
      'Financiamiento internacional y factoraje de exportación para PYMEs.',
    keywords: [
      'Factoring',
      'Invoice Factoring',
      'Import Export',
      'SME Financing',
      'Business Financing'
    ],
    jumbotron: {
      title: 'Financiamiento de Exportación Simplificado'
    },
    header: {
      home: 'Casa',
      about: 'Sobre nosotros',
      hiw: 'Cómo funciona',
      contact: 'Contacto',
      faqs: 'Preguntas frecuentes'
    },
    listing: {
      articlesOn: 'Artículos sobre',
      minRead: 'min leer',
      readMore: 'Lee mas'
    },
    widgets: {
      subscribe: {
        title: 'Suscríbete al blog de Drip.',
        desc: 'Ingrese su dirección de correo electrónico para suscribirse a este blog y recibir notificaciones de nuevas publicaciones por correo electrónico.',
        subscribe: 'suscribir',
        subscribing: 'suscribiéndose'
      },
      topPosts: {
        title: 'Artículo mejor calificado'
      }
    },
    relatedPosts: {
      title: 'Artículos Relacionados'
    }
  },
  leadership: require('./pages/leadership'),
  localeModal: {
    title: '¿De dónde nos visitas?',
    go: 'Go',
    locales: [
      {
        text: 'India (Inglés)',
        value: 'en-in'
      },
      {
        text: 'Estados Unidos (Inglés)',
        value: 'en-us'
      },
      {
        text: 'México (Español)',
        value: 'es-mx'
      },
      {
        text: 'Global (Inglés)',
        value: 'en'
      }
    ]
  }
}
