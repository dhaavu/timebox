export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  env: {
    DATABASE_URL: 'http://localhost:54321', 
    DATABASE_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0'
  },
// https://ssviefrcxhjtuosoevlf.supabase.co
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzdmllZnJjeGhqdHVvc29ldmxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQyMzAxMzQsImV4cCI6MTk4OTgwNjEzNH0.eeQUivtYPSd__AgkywoS18N8KiDAD1Jr3jq_P8xIXTc

  head: {
    title: 'timebox',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, 
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons+Outlined' }
      { rel:"stylesheet", href:"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,100,0,0"}, 
      {rel:"preconnect", href:"https://fonts.googleapis.com"}, 
      { rel:"preconnect" , href:"https://fonts.gstatic.com", crossorigin: true}, 
      {href:"https://fonts.googleapis.com/css2?family=Arizonia:wght@400&display=swap", rel: "stylesheet"},  
      {href:"https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap", rel: "stylesheet"}, 
      {href:"https://fonts.googleapis.com/css2?family=Allerta+Stencil", rel: "stylesheet"}
    
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~assets/css/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }, 
  loading:true
}
