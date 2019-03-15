const pkg = require('./package')

module.exports = {
  mode: 'spa',
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

      {src: 'https://earthchie.github.io/jquery.Thailand.js/jquery.Thailand.js/dist/jquery.Thailand.min.js'},

      // materialize
      // 1
      {src: 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js'}
    ],
    
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Mitr|Prompt' },
      { rel: 'stylesheet', href: 'https://earthchie.github.io/jquery.Thailand.js/jquery.Thailand.js/dist/jquery.Thailand.min.css' },

      // 3
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
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
    // { src: '@/assets/css/style.css', lang: 'css' },
    // { src: '@/assets/scss/main.scss', lang: 'scss'},

    // 2
    '@/assets/scss/app.scss'
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

    '@/plugins/VueMultiselectPlugin.js',

    //import vee-validate
    '@/plugins/vee-validate.js',

    '@/plugins/materialize.js',

    // vue paginate
    '@/plugins/vue-paginate.js',

    '@/plugins/vue-form-wizard.js',

    '@/plugins/CleaveP',
    
    '@/plugins/Prototypes',

    '@/plugins/components'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    // '@nuxtjs/bulma',

    '@nuxtjs/style-resources',


    '@nuxtjs/auth',

    '@nuxtjs/pwa'
  ],

  router: {
    middleware: ['auth']
  },
 
  auth: {
    redirect: {
      // login: '/'
      // logout: '/login'
    },
    strategies: {
      google: {
        client_id: '399309068670-o6aq97mdhsd9ld53vq0tus577ehcnfes.apps.googleusercontent.com',
        user: false,
        // **for dev

        // **for production
        // redirect_uri: 'https://insure-muk.firebaseapp.com/callback'
        // redirect_uri: 'http://127.0.0.1:3000/callback'
      }
    }
  },
  /*
  ** Axios module configuration
  */
  axios: {
    // baseURL: 'http://localhost:3000/api/v1'
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
