import 'dotenv/config'
import postcssRTLCSS from 'postcss-rtlcss'

export default {
	plugins: [
		process.env['PAGE_DIRECTION'] === 'rtl'
			? postcssRTLCSS({ mode: 'override' })
			: undefined,
	],
}
