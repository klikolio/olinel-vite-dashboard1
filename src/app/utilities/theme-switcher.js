const rootQuery = 'html'
const dataAttrName = 'data-theme'
const storageId = 'theme-variant'

// Toggle theme class
function themeSwitcher(isDark) {
	if (isDark) {
		document.querySelector(rootQuery).setAttribute(dataAttrName, 'light')
		localStorage.setItem(storageId, 'light')
	} else {
		document.querySelector(rootQuery).setAttribute(dataAttrName, 'dark')
		localStorage.setItem(storageId, 'dark')
	}
}

export function initThemeSwitcher(toggleSelector) {
	const persistedState = localStorage.getItem(storageId)

	// Change default theme from local storage
	if (persistedState) {
		document.querySelector(rootQuery).setAttribute(dataAttrName, persistedState)
	}

	// Trigger listener for toggling theme
	document.querySelector(toggleSelector).addEventListener('click', () => {
		const isDark =
			document.querySelector(rootQuery).getAttribute(dataAttrName) === 'dark'

		themeSwitcher(isDark)
	})
}
