export function initCopyrightYear(elementSelector: string) {
	// Set Date instance
	const date = new Date()

	// Get element to inject
	const element = document.querySelector(elementSelector)

	// Inject element with year value
	if (element) element.innerHTML = date.getFullYear().toString()
}
