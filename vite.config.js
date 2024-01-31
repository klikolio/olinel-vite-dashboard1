import 'dotenv/config'
import vituum from 'vituum'
import nunjucks from '@vituum/vite-plugin-nunjucks'
import legacy from '@vitejs/plugin-legacy'
import eslint from 'vite-plugin-eslint'
import { defineConfig } from 'vite'
import { ViteMinifyPlugin as minify } from 'vite-plugin-minify'

export default defineConfig({
	publicDir: 'public',
	resolve: {
		alias: {
			'@app': '/src/app',
			'@modules': '/src/modules',
		},
	},
	plugins: [
		vituum(),
		minify(),
		eslint(),
		legacy(),
		nunjucks({
			root: './src',
			globals: {
				env: {
					PAGE_DIRECTION: process.env.PAGE_DIRECTION ?? 'ltr',
				},
			},
			filters: {
				classnames: (classNamesObj) => {
					return Object.keys(classNamesObj)
						.map((className) => {
							return classNamesObj[className] ? className : null
						})
						.filter((className) => className !== null)
						.join(' ')
				},
			},
		}),
	],
})
