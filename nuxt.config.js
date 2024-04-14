import * as config from './configs'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // debug: true,
  devtools: { enabled: true },
  ssr: false,
  srcDir: 'src',
  ...config
})
