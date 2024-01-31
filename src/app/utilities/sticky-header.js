import 'jquery-sticky'
import $ from 'jquery'

const stickyConfig = {
	topSpacing: 0,
}

// Method to initialize sticky header
function stickyInit(target) {
	$(target).sticky(stickyConfig)
}

// Method to destroy sticky header
function stickyDestroy(target) {
	$(target).unstick()
}

export function initStickyHeader(headerDesktopSelector, headerMobileSelector) {
	// Set required constants
	const stickyBreakpoint = 1025

	// Listen window resize event for responsive
	$(window).on('resize', function () {
		const viewport = $(this).width()

		// Check viewport breakpoint
		if (viewport >= stickyBreakpoint) {
			stickyInit(headerDesktopSelector)
			stickyDestroy(headerMobileSelector)
		} else {
			stickyInit(headerMobileSelector)
			stickyDestroy(headerDesktopSelector)
		}
	})

	// Initialize sticky header for the first time
	if ($(window).width() >= stickyBreakpoint) {
		stickyInit(headerDesktopSelector)
	} else {
		stickyInit(headerMobileSelector)
	}
}
