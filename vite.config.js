import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

const __dirname = (() => {
  if (typeof document !== 'undefined') {
    // In a browser environment
    const scriptEls = document.getElementsByTagName('script')
    const thisScriptURL = scriptEls[scriptEls.length - 1].src
    const thisScriptDir = thisScriptURL.substr(
      0,
      thisScriptURL.lastIndexOf('/'),
    )
    const a = document.createElement('a')
    a.href = thisScriptDir
    return a.pathname
  } else {
    // In a Node.js environment
    return __dirname
  }
})()

const aliases = {
  assets: 'src/assets',
}

const resolvedAliases = Object.fromEntries(
  Object.entries(aliases).map(([key, value]) => [
    key,
    resolve(__dirname, value),
  ]),
)

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'react', // ignore react stuff
        'react-dom',
      ],
    },
  },
  resolve: {
    alias: {
      ...resolvedAliases,
      './runtimeConfig': './runtimeConfig.browser',
      'jss-plugin-{}': 'jss-plugin-global',
    },
  },
})
