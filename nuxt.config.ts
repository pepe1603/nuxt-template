export default defineNuxtConfig({
  app: {
    head: {
      title: "__APP_TITLE__",
    },
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/ui",
    "@nuxtjs/google-fonts",
    "nuxt-lucide-icons",
  ],

  devtools: {
    enabled: false,
  },

  css: ["~/assets/css/main.css"],

  routeRules: {
    "/": { prerender: true },
  },

  compatibilityDate: "2025-01-15",

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },

  googleFonts: {
    families: {
      DynaPuff: [400, 500, 600, 700],
      Courgette: [400],
    },
    display: "swap",
  },
});
