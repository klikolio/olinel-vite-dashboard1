export function initCopyrightYear(elementSelector) {
	// Set Date instance
	const date = new Date()

	// Get element to inject
	const element = document.querySelector(elementSelector)

	// Inject element with year value
	element.innerHTML = date.getFullYear()
}
