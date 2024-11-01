// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
    'shadcn-nuxt',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    "@nuxthub/core",
    '@nuxtjs/ngrok',
    '@nuxt/image',
  ],
  alias:{
    assets: "/<rootDir>/assets"
  },
  css: [
    '@unocss/reset/tailwind.css',
  ],

  colorMode: {
    classSuffix: '',
  },

  features: {
    // For UnoCSS
    inlineStyles: false,
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  routeRules: {
    '/components': { redirect: '/components/accordion' },
  },

  imports: {
    dirs: [
      './lib',
    ],
  },
  image: {
    inject: true
    },
})