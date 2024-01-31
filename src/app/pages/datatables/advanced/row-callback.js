import 'datatables.net'
import 'datatables.net-bs5'
import 'datatables.net-responsive'
import 'datatables.net-responsive-bs5'
import '@modules/datatables/bootstrap/styles/datatables.scss'
import '@modules/datatables/responsive/styles/responsive.scss'

import $ from 'jquery'
import { DATATABLES_DATA } from '@app/utilities/datatables-data'

$('#datatables-1').DataTable({
	data: DATATABLES_DATA,
	responsive: true,

	// Custom row rendering methods
	createdRow: (row, data, index) => {
		const column = 5
		const cell = $(row).children('td').eq(column)
		const classes =
			data[column] < 40
				? 'text-success font-weight-bold'
				: 'text-danger font-weight-bold'

		cell.addClass(classes)
	},
})
