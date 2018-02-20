module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'zenmaibane.github.io',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'portfolio' }
    ],
    script: [{
      src: 'https://use.fontawesome.com/releases/v5.0.4/js/all.js',
      defar: true
    }]
  },
  css: [
    { src: '~assets/base.scss', lang: 'scss' },
    { src: '~assets/bulmaCustom.scss', lang: 'scss' }
  ],
  mode: 'spa',
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
