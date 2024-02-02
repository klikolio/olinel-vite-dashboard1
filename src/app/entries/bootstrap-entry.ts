import 'bootstrap/js/dist/alert'
import 'bootstrap/js/dist/button'
import 'bootstrap/js/dist/collapse'
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/modal'
import 'bootstrap/js/dist/offcanvas'
import 'bootstrap/js/dist/tab'

import Tooltip from 'bootstrap/js/dist/tooltip'
import Popover from 'bootstrap/js/dist/popover'

// Initialize Bootstrap tooltip and popover
export function initTooltipPopover() {
	document
		.querySelectorAll('[data-bs-toggle="tooltip"]')
		.forEach((tooltipElement) => {
			new Tooltip(tooltipElement)
		})

	document
		.querySelectorAll('[data-bs-toggle="popover"]')
		.forEach((popoverElement) => {
			new Popover(popoverElement)
		})
}

initTooltipPopover()
