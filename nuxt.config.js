export default {
  ssr: false,

  target: 'static',

  head: {
    title: 'nuxt-i18n-issue',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  components: true,

  buildModules: ['@nuxtjs/stylelint-module', '@nuxtjs/tailwindcss'],

  modules: ['@nuxtjs/axios', '@nuxtjs/i18n'],

  tailwindcss: {
    viewer: false,
    exposeConfig: true,
  },

  i18n: {
    baseUrl: 'https://nuxt-i18n-issue.vercel.app',
    locales: [
      { code: 'en', iso: 'en', lang: 'en', file: 'en-en.js', dir: 'ltr' },
      { code: 'en-JO', iso: 'en-JO', lang: 'en', file: 'en-en.js', dir: 'ltr' },
      { code: 'en-PS', iso: 'en-PS', lang: 'en', file: 'en-en.js', dir: 'ltr' },
      { code: 'en-EG', iso: 'en-EG', lang: 'en', file: 'en-en.js', dir: 'ltr' },
      { code: 'en-SA', iso: 'en-SA', lang: 'en', file: 'en-en.js', dir: 'ltr' },
      { code: 'en-IQ', iso: 'en-IQ', lang: 'en', file: 'en-en.js', dir: 'ltr' },
      { code: 'en-PK', iso: 'en-PK', lang: 'en', file: 'en-en.js', dir: 'ltr' },
      { code: 'en-QA', iso: 'en-QA', lang: 'en', file: 'en-en.js', dir: 'ltr' },
      { code: 'en-OM', iso: 'en-OM', lang: 'en', file: 'en-en.js', dir: 'ltr' },
      {
        code: 'en-lang',
        iso: 'en-LANG',
        lang: 'en',
        file: 'en-en.js',
        dir: 'ltr',
      },
      {
        code: 'en-other',
        iso: 'en-OTHER',
        lang: 'en',
        file: 'en-en.js',
        dir: 'ltr',
      },

      { code: 'ar', iso: 'ar', lang: 'ar', file: 'ar-ar.js', dir: 'rtl' },
      { code: 'ar-JO', iso: 'ar-JO', lang: 'ar', file: 'ar-ar.js', dir: 'rtl' },
      { code: 'ar-PS', iso: 'ar-PS', lang: 'ar', file: 'ar-ar.js', dir: 'rtl' },
      { code: 'ar-EG', iso: 'ar-EG', lang: 'ar', file: 'ar-ar.js', dir: 'rtl' },
      { code: 'ar-SA', iso: 'ar-SA', lang: 'ar', file: 'ar-ar.js', dir: 'rtl' },
      { code: 'ar-IQ', iso: 'ar-IQ', lang: 'ar', file: 'ar-ar.js', dir: 'rtl' },
      { code: 'ar-PK', iso: 'ar-PK', lang: 'ar', file: 'ar-ar.js', dir: 'rtl' },
      { code: 'ar-QA', iso: 'ar-QA', lang: 'ar', file: 'ar-ar.js', dir: 'rtl' },
      { code: 'ar-OM', iso: 'ar-OM', lang: 'ar', file: 'ar-ar.js', dir: 'rtl' },
      {
        code: 'ar-lang',
        iso: 'ar-LANG',
        lang: 'ar',
        file: 'ar-ar.js',
        dir: 'rtl',
      },
      {
        code: 'ar-other',
        iso: 'ar-OTHER',
        lang: 'ar',
        file: 'ar-ar.js',
        dir: 'rtl',
      },
    ],
    strategy: 'prefix_and_default',
    detectBrowserLanguage: false,
    defaultLocale: 'ar',
    lazy: true,
    langDir: 'locales/',
    vueI18n: {
      fallbackLocale: 'ar',
    },
  },

  build: {},
}
