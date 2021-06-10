import { resolve } from 'path'
import pkg from '../package.json'

export default function nuxtBowser(moduleOptions) {
  const { nuxt, addPlugin } = this
  const options = {
    name: 'browser',
    autoDetect: false,
    userAgent:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36',

    ...nuxt.options.bowser,
    ...moduleOptions
  }

  addPlugin({
    src: resolve(__dirname, '../templates/plugin.js'),
    fileName: 'nuxtBowser.js',
    options
  })
}

export { pkg as meta }
