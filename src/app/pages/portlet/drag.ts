import '@modules/sortablejs/styles/sortablejs.scss'

import Sortable from 'sortablejs'

document.querySelectorAll('.portlet-drag-container').forEach((dragElement) => {
	new Sortable(dragElement as HTMLElement, {
		group: 'shared',
		handle: '.portlet-header-handle',
	})
})
