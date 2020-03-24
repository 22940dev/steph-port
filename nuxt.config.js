export default {
  mode: 'spa',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /* Global CSS */
  css: ['~/styles/normalize.scss', '~/styles/typography.scss', '~/styles/global.scss'],
  router: {
    linkExactActiveClass: 'exact-active-link'
  },
  pageTransition: {
    name: 'page',
    mode: 'out-in'
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  modules: [
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: [
      '~/styles/abstracts/_mixins.scss',
      '~/styles/abstracts/_variables.scss',
      '~/styles/abstracts/_functions.scss'
    ]
  },
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
