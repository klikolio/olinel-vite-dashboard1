export function initCopyrightYear(elementSelector) {
	const date = new Date()
	const element = document.querySelector(elementSelector)

	element.innerHTML = date.getFullYear()
}
