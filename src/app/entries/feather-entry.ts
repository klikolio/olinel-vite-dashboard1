import feather from 'feather-icons'

// Initialize Feather icons
export function initFeather() {
  feather.replace({
    'stroke-width': 2,
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
  })
}

initFeather()
