// Constants
const bodySelector = 'body'
const bodyActiveClass = 'fullscreen-active'

export function initFullscreenTrigger(triggerSelector: string) {
	// Get elements
	const bodyElement = document.querySelector(bodySelector)
	const triggerElement = document.querySelector(triggerSelector)

	// Fullscreen change Listener for toggling body class
	document.addEventListener('fullscreenchange', () => {
		if (document.fullscreenElement) {
			bodyElement?.classList.add(bodyActiveClass)
		} else {
			bodyElement?.classList.remove(bodyActiveClass)
		}
	})

	// Trigger listener for toggling fullscreen
	triggerElement?.addEventListener('click', () => {
		if (bodyElement?.classList.contains(bodyActiveClass)) {
			document.exitFullscreen()
		} else {
			document.documentElement.requestFullscreen()
		}
	})
}
