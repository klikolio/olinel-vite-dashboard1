import $ from 'jquery'

export async function initSelect2() {
	window.jQuery = $

	await import('select2')
}
