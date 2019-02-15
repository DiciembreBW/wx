const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],

    script: [
      {src: 'https://use.fontawesome.com/releases/v5.3.1/js/all.js'},
      {src: 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js'},
      {src: 'https://earthchie.github.io/jquery.Thailand.js/jquery.Thailand.js/dependencies/JQL.min.js'},
      {src: 'https://earthchie.github.io/jquery.Thailand.js/jquery.Thailand.js/dependencies/typeahead.bundle.js'},

      {src: 'https://earthchie.github.io/jquery.Thailand.js/jquery.Thailand.js/dist/jquery.Thailand.min.js'}
    ],
    
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Mitr' },
      { rel: 'stylesheet', href: 'https://earthchie.github.io/jquery.Thailand.js/jquery.Thailand.js/dist/jquery.Thailand.min.css' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    // impprt vue-multiselect style
    { src: 'vue-multiselect/dist/vue-multiselect.min.css', lang: 'css' },
    { src: '@/assets/css/style.css', lang: 'css' },
    '@/assets/scss/main.scss',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // import Firestore plugin
    // {src: '@/plugins/Firestore.js', ssr: false},
    '@/plugins/Firestore.js',

    // เพิ่ม plugin ในไฟล์ config
    // '~/plugins/med.js',

    '@/plugins/VueMultiselectPlugin.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',

    '@nuxtjs/style-resources'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      config.externals = {
        jquery: 'jQuery'
      }
    }
  }
}
