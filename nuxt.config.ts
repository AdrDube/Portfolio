export default defineNuxtConfig({
  compatibilityDate: '2025-08-22',
  modules: [
    '@nuxt/ui',
    '@nuxt/icon',
  ],
  css: ['~/assets/css/main.css'],

  icon: {
    serverBundle: {
      collections: [
        'gravity-ui',
        'mdi',
        'ph',
        'lineicons',
        'fa6-brands',
        'simple-icons',
        'devicon-plain',
        'mingcute',
        'lets-icons',
        'arcticons',
        'octicon',
        'line-md',
        'iconamoon',
        'streamline',
        'fluent',
        'ei'
      ]
    }
  }
})

