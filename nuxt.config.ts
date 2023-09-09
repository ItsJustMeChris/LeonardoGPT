// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  css: ["@/assets/css/main.css"],
  tailwindcss: {
    // Options
    config: {
      plugins: [require("daisyui")],
    },
  },
});
