// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  runtimeConfig: {
    // The private keys which are only available server-side
    myBigSecret: "there in no secret",
    // Keys within public are also exposed client-side
    // public: {
    //   apiBase: "/api",
    // },
  },
});
