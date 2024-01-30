export function initCopyrightYear() {
	const date = new Date()
	const elementQuery = '#copyright-year'
	const element = document.querySelector(elementQuery)

	element.innerHTML = date.getFullYear()
}
