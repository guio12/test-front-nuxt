// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: false,
  modules: [
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@formkit/auto-animate/nuxt',
    '@nuxt/fonts',
  ],
  css: ['~/assets/styles/main.scss'],
  imports: {
    dirs: ['types'],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: `@use "~/assets/styles/variables.scss" as *;`,
          quietDeps: true, // Supprime les warnings de SASS dans node_modules
        },
      },
    },
  },
})
