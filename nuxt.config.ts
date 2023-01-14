// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules:[
    '@pinia/nuxt',
    '@nuxt/image-edge',
  ],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  image: {
    cloudinary: {
        baseURL: 'https://res.cloudinary.com/dnvvkg9ou/image/upload/v1673686895/mazay33'
    },
  }
})