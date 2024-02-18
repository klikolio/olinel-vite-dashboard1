import BaseComponent from 'bootstrap/js/src/base-component'
import EventHandler from 'bootstrap/js/src/dom/event-handler'
import { defineJQueryPlugin } from 'bootstrap/js/src/util'

/**
 * Constants
 */

const NAME = 'preload'

const MAX_DURATION = 6000
const DELAY_DURATION = 100

const CLASS_ACTIVE = 'preload-active'
const CLASS_HIDE = 'preload-hide'

const EVENT_HIDDEN_KEY = `hidden.${NAME}`
const EVENT_SHOWN_KEY = `shown.${NAME}`

/**
 * Class definition
 */

class Preload extends BaseComponent {
  // Getters
  static get NAME() {
    return NAME
  }

  static get CLASS_NAMES() {
    return { CLASS_ACTIVE, CLASS_HIDE }
  }

  constructor() {
    super()

    this.autoHide()
  }

  // Function for automatically hiding preload
  autoHide() {
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
  show() {
    if (document.body.classList.contains(CLASS_HIDE)) {
      document.body.classList.add(CLASS_ACTIVE)

      document.body.classList.remove(CLASS_HIDE)

      EventHandler.trigger(document, EVENT_SHOWN_KEY, {
        relatedTarget: this._element,
      })
    }
  }

  // Function for hiding preload
  hide() {
    if (!document.body.classList.contains(CLASS_HIDE)) {
      document.body.classList.add(CLASS_HIDE)

      EventHandler.trigger(document, EVENT_HIDDEN_KEY, {
        relatedTarget: this._element,
      })
    }
  }
}

defineJQueryPlugin(Preload)

export default Preload
