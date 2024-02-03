import '@modules/sortablejs/styles/sortablejs.scss'

import Sortable from 'sortablejs'

const element1 = document.getElementById('sortable-1')

if (element1) {
	new Sortable(element1, {})
}

const element2 = document.getElementById('sortable-2')

if (element2) {
	new Sortable(element2, {
		handle: '.sortable-handle',
	})
}

const element3Start = document.getElementById('sortable-3-start')
const element3End = document.getElementById('sortable-3-end')

if (element3Start && element3End) {
	new Sortable(element3Start, {
		group: 'shared',
	})

	new Sortable(element3End, {
		group: 'shared',
	})
}

const element4Start = document.getElementById('sortable-4-start')
const element4End = document.getElementById('sortable-4-end')

if (element4Start && element4End) {
	new Sortable(element4Start, {
		group: {
			name: 'shared',
			pull: 'clone',
		},
	})

	new Sortable(element4End, {
		group: {
			name: 'shared',
			pull: 'clone',
		},
	})
}

const element5Start = document.getElementById('sortable-5-start')
const element5End = document.getElementById('sortable-5-end')

if (element5Start && element5End) {
	new Sortable(element5Start, {
		group: 'shared',
	})

	new Sortable(element5End, {
		group: {
			name: 'shared',
			pull: 'clone',
			put: false,
		},
		sort: false,
	})
}

const element6 = document.getElementById('sortable-6')

if (element6) {
	new Sortable(element6, {
		group: 'shared',
		invertSwap: true,
	})

	element6.querySelectorAll<HTMLElement>('.sortable').forEach((element) => {
		new Sortable(element, {
			group: 'shared',
			invertSwap: true,
		})
	})
}
