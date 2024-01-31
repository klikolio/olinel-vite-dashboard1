import 'dotenv/config'
import rtlcss from 'postcss-rtlcss'
import lightningcss from 'postcss-lightningcss'

export default {
	plugins: [
		lightningcss(),
		process.env['PAGE_DIRECTION'] === 'rtl'
			? rtlcss({ mode: 'override' })
			: undefined,
	],
}
