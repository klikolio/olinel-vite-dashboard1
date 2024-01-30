import 'dotenv/config'
import vituum from 'vituum'
import nunjucks from '@vituum/vite-plugin-nunjucks'
import legacy from '@vitejs/plugin-legacy'
import { defineConfig } from 'vite'
import { ViteMinifyPlugin } from 'vite-plugin-minify'

export default defineConfig({
  publicDir: 'public',
  build: {
    minify: 'terser',
    cssMinify: 'lightningcss'
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  plugins: [vituum(), legacy(), ViteMinifyPlugin(), nunjucks({
    root: './src',
    globals: {
      env: {
        PAGE_DIRECTION: process.env['PAGE_DIRECTION'] ?? 'ltr'
      }
    },
    filters: {
      array_concat: (arr1, arr2) => (typeof arr1 === 'object' && typeof arr2 === 'object' ? [...arr1, ...arr2] : arr1),
      classnames: (classNamesObj) => {
        return Object.keys(classNamesObj).map((className) => {
          if (classNamesObj[className]) {
            return className
          } else {
            return null
          }
        }).filter((className) => className !== null).join(' ')
      },
    }
  })]
})
