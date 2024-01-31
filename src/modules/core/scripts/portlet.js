import BaseComponent from 'bootstrap/js/src/base-component'
import { defineJQueryPlugin } from 'bootstrap/js/src/util'

/**
 * Constants
 */

const NAME = 'portlet'

const SELECTOR_BODY = '.portlet-body'

const DATA_COLLAPSED = 'data-portlet-collapsed'

/**
 * Class definition
 */

class Portlet extends BaseComponent {
	// Getters
	static get NAME() {
		return NAME
	}

	// Function for toggling collapsion
	toggleCollapse() {
		const bodyElement = this._element.querySelector(SELECTOR_BODY)

		const isCollapsed = this._element.getAttribute(DATA_COLLAPSED) === 'true'

		this._element.setAttribute(DATA_COLLAPSED, !isCollapsed)

		if (isCollapsed) {
			bodyElement.style.display = null
		} else {
			bodyElement.style.display = 'none'
		}
	}

	// Function for destroying element
	destroy() {
		this._element.remove()
	}
}

defineJQueryPlugin(Portlet)

export default Portlet
