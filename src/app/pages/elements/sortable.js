import '@/build/vendors/sortable/styles/sortable.scss'
import Sortable from 'sortablejs'

new Sortable(document.getElementById('sortable-1'))

new Sortable(document.getElementById('sortable-2'), {
	handle: '.sortable-handle',
})

new Sortable(document.getElementById('sortable-3-start'), {
	group: 'shared',
})

new Sortable(document.getElementById('sortable-3-end'), {
	group: 'shared',
})

new Sortable(document.getElementById('sortable-4-start'), {
	group: {
		name: 'shared',
		pull: 'clone',
	},
})

new Sortable(document.getElementById('sortable-4-end'), {
	group: {
		name: 'shared',
		pull: 'clone',
	},
})

new Sortable(document.getElementById('sortable-5-start'), {
	group: 'shared',
})

new Sortable(document.getElementById('sortable-5-end'), {
	group: {
		name: 'shared',
		pull: 'clone',
		put: false,
	},
	sort: false,
})

new Sortable(document.getElementById('sortable-6'), {
	group: 'shared',
	invertSwap: true,
})

document
	.querySelector('#sortable-6')
	.querySelectorAll('.sortable')
	.forEach((sortableElement) => {
		new Sortable(sortableElement, {
			group: 'shared',
			invertSwap: true,
		})
	})
