import BaseComponent from 'bootstrap/js/src/base-component'
import { defineJQueryPlugin } from 'bootstrap/js/src/util'

/**
 * Constants
 */

const NAME = 'preload'

const MAX_DURATION = 6000
const DELAY_DURATION = 100

const CLASS_ACTIVE = 'preload-active'
const CLASS_HIDE = 'preload-hide'

/**
 * Class definition
 */

class Preload extends BaseComponent {
  // Getters
  static get NAME () {
    return NAME
  }

  constructor () {
    super()

    this.autoHide()
  }

  // Function for automatically hiding preload
  autoHide () {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        this.hide()
      }, DELAY_DURATION)
    })

    setTimeout(() => {
      this.hide()
    }, MAX_DURATION)
  }

  // Function for showing preload
  show () {
    document.body.classList.add(CLASS_ACTIVE)
    document.body.classList.remove(CLASS_HIDE)
  }

  // Function for hiding preload
  hide () {
    document.body.classList.add(CLASS_HIDE)
    document.body.classList.remove(CLASS_ACTIVE)
  }
}

defineJQueryPlugin(Preload)

export default Preload
