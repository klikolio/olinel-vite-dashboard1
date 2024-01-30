export function initFullscreenTrigger () {
  const fullscreenActiveClass = 'fullscreen-active'

  const bodyQuery = 'body'
  const triggerQuery = '#fullscreen-trigger'
  const bodyElement = document.querySelector(bodyQuery)
  const triggerElement = document.querySelector(triggerQuery)

  document.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement) {
      bodyElement.classList.add(fullscreenActiveClass)
    } else {
      bodyElement.classList.remove(fullscreenActiveClass)
    }
  })

  triggerElement.addEventListener('click', () => {
    if (bodyElement.classList.contains(fullscreenActiveClass)) {
      document.exitFullscreen()
    } else {
      document.documentElement.requestFullscreen()
    }
  })
}
