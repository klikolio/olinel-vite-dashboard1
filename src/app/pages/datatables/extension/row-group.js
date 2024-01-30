import 'datatables.net'
import 'datatables.net-bs5'
import 'datatables.net-responsive'
import 'datatables.net-responsive-bs5'
import 'datatables.net-rowgroup'
import 'datatables.net-rowgroup-bs5'
import '@/build/vendors/datatables/bootstrap/styles/datatables.scss'
import '@/build/vendors/datatables/responsive/styles/responsive.scss'
import '@/build/vendors/datatables/rowgroup/styles/rowgroup.scss'

import $ from 'jquery'
import { DATATABLES_DATA } from '@/app/utilities/datatables-data'

$('#datatables-1').DataTable({
	data: DATATABLES_DATA,
	responsive: true,
	order: [[4, 'desc']],
	rowGroup: {
		dataSrc: 4, // Set the columns for row group
	},
})

$('#datatables-2').DataTable({
	data: DATATABLES_DATA,
	responsive: true,
	order: [[4, 'desc']],
	rowGroup: {
		dataSrc: 4, // Set the columns for row group
		// Row group custom rendering method
		endRender: (rows, group) => {
			const avg =
				rows
					.data()
					.pluck(5)
					.reduce(function (a, b) {
						return a + b.replace(/[^\d]/g, '') * 1
					}, 0) / rows.count()

			return `Average salary in ${group} : ${$.fn.dataTable.render.number(',', '.', 0, '$').display(avg)}`
		},
	},
})

$('#datatables-3').DataTable({
	data: DATATABLES_DATA,
	responsive: true,
	order: [
		[4, 'desc'],
		[3, 'asc'],
	],
	rowGroup: {
		dataSrc: [4, 3], // Set the columns for row group
	},
	columnDefs: [
		{
			targets: [3, 4],
			visible: false,
		},
	],
})
