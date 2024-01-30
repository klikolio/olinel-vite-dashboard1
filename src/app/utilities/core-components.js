import Aside from '@/build/core/scripts/aside'
import Menu from '@/build/core/scripts/menu'
import Preload from '@/build/core/scripts/preload'

export function initAsideMenu () {
  new Aside()
  new Menu()
}

export function initPreload () {
  new Preload()
}
