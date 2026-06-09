export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],

  runtimeConfig: {
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    mailHost: process.env.MAIL_HOST,
    mailPort: process.env.MAIL_PORT,
    mailUsername: process.env.MAIL_USERNAME,
    mailPassword: process.env.MAIL_PASSWORD,
    mailFrom: process.env.MAIL_FROM,
    adminEmails: process.env.ADMIN_EMAILS,
    dbHost: process.env.DB_HOST,
    dbPort: process.env.DB_PORT,
    dbName: process.env.DB_NAME,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    public: {
      stripePublishableKey: process.env.NUXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    },
  },

  i18n: {
    locales: [
      { code: 'de', language: 'de-AT', name: 'Deutsch', file: 'de.json' },
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
      { code: 'tr', language: 'tr-TR', name: 'Türkçe', file: 'tr.json' },
    ],
    defaultLocale: 'de',
    langDir: 'locales/',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
  },

  tailwindcss: {
    configPath: 'tailwind.config.ts',
    cssPath: '~/assets/css/main.css',
  },

  app: {
    head: {
      title: 'Dynamic Residency | Strukturanalyse für Unternehmer & Investoren',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Strukturiert. Durchgerechnet. Dokumentiert. Das neue türkische Steuerregime für Unternehmer, Founder und Family Offices aus dem deutschsprachigen Raum.',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/dywo-favicon-16x16.png',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,600;1,600&display=swap',
        },
      ],
    },
  },
})
