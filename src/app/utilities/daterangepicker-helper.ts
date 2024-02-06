import $ from 'jquery'
import moment from 'moment'
import type { Options } from 'daterangepicker'

export async function initDaterangepicker(defaultOptions: Options) {
	window.moment = moment

	await import('daterangepicker')

	$.fn.daterangepicker.defaultOptions = defaultOptions
}
