import 'dotenv/config'
import vituum from 'vituum'
import nunjucks from '@vituum/vite-plugin-nunjucks'
import legacy from '@vitejs/plugin-legacy'
import eslint from 'vite-plugin-eslint'
import tla from 'vite-plugin-top-level-await'
import { defineConfig } from 'vite'
import { ViteMinifyPlugin as minify } from 'vite-plugin-minify'

const nunjucksGlobals = {
	env: {
		PAGE_DIRECTION: process.env['PAGE_DIRECTION'] ?? 'ltr',
	},
}

const nunjucksFilters = {
	classnames: (classNamesObj) => {
		return Object.keys(classNamesObj)
			.map((className) => (classNamesObj[className] ? className : null))
			.filter((className) => className !== null)
			.join(' ')
	},
}

export default defineConfig({
	publicDir: 'public',
	server: {
		port: 4040
	},
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
		tla(),
		nunjucks({
			root: './src',
			globals: nunjucksGlobals,
			filters: nunjucksFilters,
		}),
	],
})
