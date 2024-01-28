import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/offcanvas'

import Tooltip from 'bootstrap/js/dist/tooltip'
import Popover from 'bootstrap/js/dist/popover'

document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((tooltipElement) => {
  new Tooltip(tooltipElement)
})

document.querySelectorAll('[data-bs-toggle="popover"]').forEach((popoverElement) => {
  new Popover(popoverElement)
})