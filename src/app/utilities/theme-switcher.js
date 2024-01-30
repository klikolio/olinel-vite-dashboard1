const rootQuery = 'html'
const dataAttrName = 'data-theme'
const localStorageIdentifier = 'theme-variant'
const toggleQuery = '#theme-toggle'

function themeSwitcher(isDark) {
	// Toggling theme class
	if (isDark) {
		document.querySelector(rootQuery).setAttribute(dataAttrName, 'light')
		localStorage.setItem(localStorageIdentifier, 'light')
	} else {
		document.querySelector(rootQuery).setAttribute(dataAttrName, 'dark')
		localStorage.setItem(localStorageIdentifier, 'dark')
	}
}

export function initThemeSwitcher() {
	const persistedState = localStorage.getItem(localStorageIdentifier)

	// Change default theme by local storage
	if (persistedState) {
		document.querySelector(rootQuery).setAttribute(dataAttrName, persistedState)
	}

	// Add toggle event listener
	document.querySelector(toggleQuery).addEventListener('click', () => {
		const isDark = document.querySelector(rootQuery).getAttribute(dataAttrName) === 'dark'

		// Switching theme
		themeSwitcher(isDark)
	})
}
