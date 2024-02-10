// Constants
const bodySelector = 'body'
const bodyActiveClass = 'fullscreen-active'

export function initFullscreenTrigger(triggerSelector: string) {
	// Get elements
	const bodyElement = document.querySelector(bodySelector)
	const triggerElements = document.querySelectorAll(triggerSelector)

	// Fullscreen change Listener for toggling body class
	document.addEventListener('fullscreenchange', () => {
		if (document.fullscreenElement) {
			bodyElement?.classList.add(bodyActiveClass)
		} else {
			bodyElement?.classList.remove(bodyActiveClass)
		}
	})

	// Trigger listener for toggling fullscreen
	triggerElements.forEach((triggerElement) => {
		triggerElement.addEventListener('click', () => {
			if (bodyElement?.classList.contains(bodyActiveClass)) {
				document.exitFullscreen()
			} else {
				document.documentElement.requestFullscreen()
			}
		})
	})
}
