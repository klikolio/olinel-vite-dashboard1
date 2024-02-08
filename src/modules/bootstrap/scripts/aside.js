import BaseComponent from 'bootstrap/js/src/base-component'
import { defineJQueryPlugin } from 'bootstrap/js/src/util'

/**
 * Constants
 */

const NAME = 'aside'

const BREAKPOINT = 1025
const TRANSITION_DURATION = 200

const SELECTOR_MAIN = '.aside'
const SELECTOR_BACKDROP = '#aside-backdrop'
const SELECTOR_TOGGLE = '[data-toggle="aside"]'

const CLASS_DESKTOP_MINIMIZED = 'aside-desktop-minimized'
const CLASS_DESKTOP_MAXIMIZED = 'aside-desktop-maximized'
const CLASS_MOBILE_MINIMIZED = 'aside-mobile-minimized'
const CLASS_MOBILE_MAXIMIZED = 'aside-mobile-maximized'
const CLASS_HOVER = 'aside-hover'

const STORAGE_IDENTIFIER = 'aside-state'

/**
 * Class definition
 */

class Aside extends BaseComponent {
	// Getters
	static get NAME() {
		return NAME
	}

	constructor() {
		super()

		this.syncState()
		this.toggleListener()
	}

	// Function for syncing state with local storage
	syncState() {
		const persistState = localStorage.getItem(STORAGE_IDENTIFIER)

		if (persistState) {
			const desktopMaximized = JSON.parse(persistState).desktopMaximized

			if (this.getBrowserWidth() >= BREAKPOINT) {
				this.toggleDesktop(desktopMaximized)
			}
		}

		if (document.body.classList.contains(CLASS_DESKTOP_MINIMIZED)) {
			document.querySelector(SELECTOR_MAIN)?.classList.add(CLASS_HOVER)
		}
	}

	// Function for adding event listener to toggle elements
	toggleListener() {
		document.querySelectorAll(SELECTOR_TOGGLE).forEach((toggleElement) => {
			toggleElement.addEventListener('click', () => {
				if (this.getBrowserWidth() >= BREAKPOINT) {
					this.toggleDesktop(
						document.body.classList.contains(CLASS_DESKTOP_MINIMIZED),
					)
				} else {
					this.toggleMobile(
						document.body.classList.contains(CLASS_MOBILE_MINIMIZED),
					)
				}
			})
		})
	}

	// Function for toggling in desktop viewport
	toggleDesktop(isMaximized) {
		const mainElement = document.querySelector(SELECTOR_MAIN)

		this.toggleBodyClass(true, isMaximized)

		localStorage.setItem(
			STORAGE_IDENTIFIER,
			JSON.stringify({ desktopMaximized: isMaximized }),
		)

		if (isMaximized) {
			mainElement?.classList.remove(CLASS_HOVER)
			window.dispatchEvent(new Event('resize'))
		} else {
			setTimeout(() => {
				mainElement?.classList.add(CLASS_HOVER)
				window.dispatchEvent(new Event('resize'))
			}, TRANSITION_DURATION)
		}
	}

	// Function for toggling in mobile viewport
	toggleMobile(isMaximized) {
		this.toggleBodyClass(false, isMaximized)

		if (isMaximized) {
			let backdropElement = document.createElement('div')

			backdropElement.id = SELECTOR_BACKDROP.replace('#', '')

			backdropElement = document.body.appendChild(backdropElement)

			backdropElement.classList.add('fade')
			backdropElement.classList.add('show')
			backdropElement.addEventListener('click', () => {
				backdropElement.classList.remove('show')
				backdropElement.remove()
				this.toggleBodyClass(false, false)
			})
		} else {
			const backdropElement = document.querySelector(SELECTOR_BACKDROP)
			backdropElement?.classList.remove('show')
			backdropElement?.remove()
		}
	}

	// Function for toggling body class
	toggleBodyClass(isDesktop, isMaximized) {
		let addedClass, removedClass

		if (isMaximized) {
			addedClass = isDesktop ? CLASS_DESKTOP_MAXIMIZED : CLASS_MOBILE_MAXIMIZED
			removedClass = isDesktop
				? CLASS_DESKTOP_MINIMIZED
				: CLASS_MOBILE_MINIMIZED
		} else {
			addedClass = isDesktop ? CLASS_DESKTOP_MINIMIZED : CLASS_MOBILE_MINIMIZED
			removedClass = isDesktop
				? CLASS_DESKTOP_MAXIMIZED
				: CLASS_MOBILE_MAXIMIZED
		}

		document.body.classList.add(addedClass)
		document.body.classList.remove(removedClass)
	}

	// Function for getting browser width
	getBrowserWidth() {
		return (
			window.innerWidth ||
			document.documentElement.clientWidth ||
			document.body.clientWidth
		)
	}
}

defineJQueryPlugin(Aside)

export default Aside
