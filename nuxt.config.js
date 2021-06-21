export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Loanspot Lenders Platform',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: `width=device-width, initial-scale=0.9, maximum-scale=1.0, user-scalable=no`,
      },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main', '~/assets/fonts/style'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/axios.client', ssr: false },
    { src: '~/plugins/toast.client', ssr: false },
    { src: '~/plugins/v-calendar.client', ssr: false },
    { src: '~/plugins/vue-fragment.client', ssr: false },
    { src: '~/plugins/vee-validate.client', ssr: false },
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
  ],
  modules: ['@nuxtjs/axios', '@nuxtjs/auth-next'],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseUrl: process.env.AUTH_API_URL,
  },

  auth: {
    strategies: {
      local: {
        scheme: 'refresh',
        localStorage: {
          prefix: 'auth.',
        },
        token: {
          prefix: 'accessToken.',
          property: 'accessToken',
          maxAge: 86400,
          type: 'Bearer',
        },
        refreshToken: {
          prefix: 'refreshToken.',
          property: 'refreshToken',
          data: 'refreshToken',
          maxAge: 60 * 60 * 24 * 15,
        },
        user: {
          property: 'user',
          autoFetch: true,
        },
        endpoints: {
          login: {
            url: '/auth/signin',
            method: 'post',
          },
          refresh: {
            url: '/auth/token/refresh/',
            method: 'post',
          },
          user: {
            url: '/auth/user',
            method: 'get',
          },
          logout: { url: '/auth/logout', method: 'post' },
        },
      },
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate/dist/rules'],
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    purgeCSSInDev: true,
    exposeConfig: true,
  },
}
