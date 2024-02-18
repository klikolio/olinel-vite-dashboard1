import BaseComponent from 'bootstrap/js/src/base-component'
import { defineJQueryPlugin } from 'bootstrap/js/src/util'

/**
 * Constants
 */

const NAME = 'menu'

const SELECTOR_ITEM = '.menu-item'
const SELECTOR_TOGGLE = '.menu-item-toggle'
const SELECTOR_SUBMENU = '.menu-sub'

const DATA_COLLAPSED = 'data-menu-collapsed'
const DATA_HEIGHT = 'data-submenu-height'
const DATA_ACTIVE_PAGE = 'data-menu-active-page'

const CLASS_MAIN = 'menu'
const CLASS_ITEM = 'menu-item'
const CLASS_ACTIVE = 'active'
const CLASS_ASIDE_DESKTOP_MINIMIZED = 'aside-desktop-minimized'
const CLASS_ASIDE_DESKTOP_MAXIMIZED = 'aside-desktop-maximized'

/**
 * Class definition
 */

class Menu extends BaseComponent {
  // Getters
  static get NAME() {
    return NAME
  }

  asideDefaultDesktopMinimized = false

  constructor() {
    super()

    this.asidePrepare()
    this.calcHeight()
    this.collapseAll()
    this.setActiveLink()
    this.toggleListener()
    this.asideRestore()
  }

  // Function for adding event listener to toggle element
  toggleListener() {
    document.querySelectorAll(SELECTOR_TOGGLE).forEach((toggleElement) => {
      toggleElement.addEventListener('click', () => {
        const itemElement = toggleElement.parentElement
        const isCollapsed = itemElement?.getAttribute(DATA_COLLAPSED) === 'true'

        this.toggleCollapse(itemElement, !isCollapsed)
      })
    })
  }

  // Function for calculating submenu height
  calcHeight() {
    document.querySelectorAll(SELECTOR_ITEM).forEach((itemElement) => {
      const submenuElement = itemElement.querySelector(SELECTOR_SUBMENU)

      if (submenuElement) {
        const submenuHeight = submenuElement.offsetHeight

        itemElement.setAttribute(DATA_HEIGHT, submenuHeight)
        submenuElement.style.height = `${submenuHeight}px`
      }
    })
  }

  // Function for collapsing all items
  collapseAll() {
    Array.from(document.querySelectorAll(SELECTOR_ITEM))
      .filter((itemElement) => {
        return Boolean(itemElement.querySelector(SELECTOR_SUBMENU))
      })
      .reverse()
      .forEach((itemElement) => {
        this.toggleCollapse(itemElement, true)
      })
  }

  // Function for setting active link and items
  setActiveLink() {
    const activePage = document.documentElement.getAttribute('id')

    const linkElement = document.querySelector(
      `[${DATA_ACTIVE_PAGE}="${activePage}"]`,
    )

    if (linkElement) {
      linkElement.classList.add(CLASS_ACTIVE)

      this.getParentItems(linkElement).forEach((itemElement) => {
        this.toggleCollapse(itemElement, false)
      })
    }
  }

  // Function for toggling item collapsion
  toggleCollapse(itemElement, isCollapse) {
    const toggleElement = itemElement.querySelector(SELECTOR_TOGGLE)
    const submenuElement = itemElement.querySelector(SELECTOR_SUBMENU)
    const submenuHeight = Number(itemElement.getAttribute(DATA_HEIGHT))

    if (isCollapse) {
      toggleElement.classList.remove(CLASS_ACTIVE)
      submenuElement.style.height = '0px'
    } else {
      toggleElement.classList.add(CLASS_ACTIVE)
      submenuElement.style.height = `${submenuHeight}px`
    }

    itemElement.setAttribute(DATA_COLLAPSED, isCollapse)

    this.getParentItems(itemElement).forEach((parentItemElement) => {
      const parentSubmenuElement =
        parentItemElement.querySelector(SELECTOR_SUBMENU)
      const parentSubmenuHeight = Number(
        parentItemElement.getAttribute(DATA_HEIGHT),
      )
      const calculatedHeight = isCollapse
        ? parentSubmenuHeight - submenuHeight
        : parentSubmenuHeight + submenuHeight

      parentItemElement.setAttribute(DATA_HEIGHT, calculatedHeight)
      parentSubmenuElement.style.height = `${calculatedHeight}px`
    })
  }

  // Function to get parent items
  getParentItems(targetElement) {
    const parentElements = []

    let currentElement = targetElement.parentElement

    while (!currentElement.classList.contains(CLASS_MAIN)) {
      const hasClass = currentElement.classList.contains(CLASS_ITEM)
      const hasSubmenu = Boolean(currentElement.querySelector(SELECTOR_SUBMENU))

      if (hasClass && hasSubmenu) {
        parentElements.push(currentElement)
      }

      currentElement = currentElement.parentElement
    }

    return Array.from(parentElements)
  }

  // Function to prepare aside adoption
  asidePrepare() {
    this.asideDefaultDesktopMinimized = document.body.classList.contains(
      CLASS_ASIDE_DESKTOP_MINIMIZED,
    )

    if (this.asideDefaultDesktopMinimized) {
      document.body.classList.remove(CLASS_ASIDE_DESKTOP_MINIMIZED)
      document.body.classList.add(CLASS_ASIDE_DESKTOP_MAXIMIZED)
    }
  }

  // Function to restore aside default state
  asideRestore() {
    if (this.asideDefaultDesktopMinimized) {
      document.body.classList.add(CLASS_ASIDE_DESKTOP_MINIMIZED)
      document.body.classList.remove(CLASS_ASIDE_DESKTOP_MAXIMIZED)
    }
  }
}

defineJQueryPlugin(Menu)

export default Menu
