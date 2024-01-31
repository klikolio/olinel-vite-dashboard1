import 'jquery-sticky'

import $ from 'jquery'
import { getBrowserWidth } from './widget-helper'

// Constants
const breakpoint = 1025
const wrapperSelector = '.sticky-wrapper'
const stickyConfig = {
	topSpacing: 0,
}

// Initialize sticky element
function stickyInit(target) {
	if ($(target).parent(wrapperSelector).length < 1) {
		$(target).sticky(stickyConfig)
	}
}

// Destroy sticky element
function stickyDestroy(target) {
	$(target).unstick()
}

export function initStickyHeader(headerDesktopSelector, headerMobileSelector) {
	// Initialize sticky header
	if (getBrowserWidth() >= breakpoint) {
		stickyInit(headerDesktopSelector)
	} else {
		stickyInit(headerMobileSelector)
	}

	// Window resize Listener for responsiveness
	window.addEventListener('resize', () => {
		const viewport = getBrowserWidth()
		console.log(viewport)

		// Toggle desktop and mobile header
		if (viewport >= breakpoint) {
			stickyInit(headerDesktopSelector)
			stickyDestroy(headerMobileSelector)
		} else {
			stickyInit(headerMobileSelector)
			stickyDestroy(headerDesktopSelector)
		}
	})
}
