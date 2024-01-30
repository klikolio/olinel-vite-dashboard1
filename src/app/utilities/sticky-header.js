import 'jquery-sticky'
import $ from 'jquery'

const stickyConfig = {
  topSpacing: 0
}

// Method to initialize sticky header
function stickyInit (target) {
  $(target).sticky(stickyConfig)
}

// Method to destroy sticky header
function stickyDestroy (target) {
  $(target).unstick()
}

export function initStickyHeader () {
  // Set required constants
  const stickyBreakpoint = 1025
  const stickyHeaderElements = {
    desktop: '#sticky-header-desktop',
    mobile: '#sticky-header-mobile'
  }

  // Listen window resize event for responsive
  $(window).on('resize', function () {
    const viewport = $(this).width()

    // Check viewport breakpoint
    if (viewport >= stickyBreakpoint) {
      stickyInit(stickyHeaderElements.desktop)
      stickyDestroy(stickyHeaderElements.mobile)
    } else {
      stickyInit(stickyHeaderElements.mobile)
      stickyDestroy(stickyHeaderElements.desktop)
    }
  })

  // Initialize sticky header for the first time
  if ($(window).width() >= stickyBreakpoint) {
    stickyInit(stickyHeaderElements.desktop)
  } else {
    stickyInit(stickyHeaderElements.mobile)
  }
}
