// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/leaflet', "@nuxt/image", "@nuxt/fonts"],
  routeRules: {
    '/map': {
      ssr: false
    }
  },
  app: {
    baseURL: "/streamers-4-palestinians"
  },
  fonts: {
    assets: {
      prefix: "/streamers-4-palestinians/_fonts/",
    }
  },
})
