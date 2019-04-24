import { generatedRoutes } from './utilities/sanity'
require('dotenv').config()

export default {
  env: {
    sanityProjectId: process.env.SANITY_PROJECT_ID
  },

  head: {
    title: 'Larucheprod',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Larucheprod portfolio' },
      { hid: 'keywords', name: 'keywords', content: 'video movie film imbaud verhaegen' },
      { hid: 'theme-color', name: 'theme-color', content: '#EEE' },
      { hid: 'apple-mobile-web-app-capable', name: 'apple-mobile-web-app-capable', content: 'yes' },
      { hid: 'apple-mobile-web-app-status-bar-style', name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      // OPEN GRAPH
      { hid: 'og:title', property: 'og:title', content: 'Larucheprod' },
      { hid: 'og:description', property: 'og:description', content: 'Worldwide visual content creator based in belgium' },
      { hid: 'og:type', property: 'og:type', content: 'video.movie' },
      { hid: 'og:url', property: 'og:url', content: 'https://www.larucheprod.be' },
      { hid: 'og:image', property: 'og:image', content: 'https://www.larucheprod.be/sharing.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ],
    bodyAttrs: {
      class: 'bg-main'
    }
  },

  css: [
    '~/assets/styles/main.scss'
  ],

  loading: { color: '#3B8070' },

  plugins: [
    { src: '~/plugins/ga.js', ssr: false },
    { src: '~/plugins/vue-scrollto.js', ssr: false },
    { src: '~/plugins/sentry.js' },
    { src: '~/plugins/sanity.js' }
  ],

  modules: [
    '@nuxtjs/sitemap'
  ],

  generate: {
    routes () {
      return generatedRoutes
    }
  },

  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      config.node = {
        fs: 'empty'
      }
    }
  },

  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://larucheprod.be',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: true, // Enable me when using nuxt generate
    exclude: [],
    routes () {
      return generatedRoutes
    }
  }
}
