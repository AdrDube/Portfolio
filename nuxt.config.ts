
export default defineNuxtConfig({
  compatibilityDate: '2025-08-22',
  modules: [
    '@nuxt/ui',
    '@nuxt/icon'
  ],
  css: ['~/assets/css/main.css'],

  icon: {
    size: '1em', // Default icon size
    class: '',   // Optional global class
    // ✅ Limit server bundle to only needed collections
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

