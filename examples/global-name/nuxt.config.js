export default {
  css: ['~/assets/css/main.css'],

  buildModules: ['nuxt-bowser'],

  bowser: {
    name: 'device',
    autoDetect: {
      attributeName: 'data-device',
      valuePrefix: 'is-'
    }
  }
}
