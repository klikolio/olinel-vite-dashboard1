import { defineConfig } from 'vite'
import vituum from 'vituum'
import nunjucks from '@vituum/vite-plugin-nunjucks'

export default defineConfig({
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  plugins: [vituum(), nunjucks({
    root: './src',
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
