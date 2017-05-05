module.exports = {
  router: {
    // Run the middleware/user-agent.js on every pages
    middleware: 'default'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Catatanku - Luthfihm Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'title', name: 'title', content: 'Catatanku - Luthfihm Blog' },
      { hid: 'google-site-verification', name: 'google-site-verification', content: 'UcMRw9WlhJ8RaYIg8cdQot6bGIZC02c0XHsDJsKgVXk' },
      { hid: 'application-name', name: 'application-name', content: 'Catatanku - Luthfi Hamid Masykuri' },
      { hid: 'msapplication-tooltip', name: 'msapplication-tooltip', content: 'Catatanku - Luthfi Hamid Masykuri' },
      { hid: 'description', name: 'description', content: 'Secarik Catatan untuk Berbagi' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/startbootstrap-clean-blog/3.3.7/css/clean-blog.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/startbootstrap-clean-blog/3.3.7/js/clean-blog.min.js' }
    ]
  },
  css: [
    { src: '~assets/stylesheets/main.scss', lang: 'scss' }
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
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
