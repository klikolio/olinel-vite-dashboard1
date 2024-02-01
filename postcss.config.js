import 'dotenv/config'
import rtlcss from 'postcss-rtlcss'

export default {
	plugins: [rtlcss({ mode: 'combined' })],
}
