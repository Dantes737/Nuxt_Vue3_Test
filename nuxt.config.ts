// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  nitro: {
    output: {
      dir: "output",
      serverDir: "output/server",
      publicDir: "output/public",
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    // The private keys which are only available server-side
    myBigSecret: "there in no secret",
    // Keys within public are also exposed client-side
    // public: {
    //   apiBase: "/api",
    // },
  },
});
