import '@/build/vendors/sortable/styles/sortable.scss'
import Sortable from 'sortablejs'

document.querySelectorAll('.portlet-drag-container').forEach((dragElement) => {
	new Sortable(dragElement, {
		group: 'shared',
		handle: '.portlet-header-handle',
	})
})
