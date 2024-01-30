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
		cssMinify: 'lightningcss',
	},
	resolve: {
		alias: {
			'@': '/src',
		},
	},
	plugins: [
		vituum(),
		ViteMinifyPlugin(),
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
