import Toast from 'bootstrap/js/dist/toast'

document
  .querySelectorAll('[data-bs-toggle="toast"]')
  .forEach((toastTrigger) => {
    const toastTarget = toastTrigger.getAttribute('data-bs-target')

    if (toastTarget) {
      const toastInstance = Toast.getOrCreateInstance(toastTarget)

      toastTrigger.addEventListener('click', () => {
        toastInstance.show()
      })
    }
  })
