import 'datatables.net'
import 'datatables.net-bs5'
import 'datatables.net-responsive'
import 'datatables.net-responsive-bs5'
import '@/build/vendors/datatables/bootstrap/styles/datatables.scss'
import '@/build/vendors/datatables/responsive/styles/responsive.scss'

import $ from 'jquery'
import { DATATABLES_DATA } from '@/app/utilities/datatables-data'

function formatInt(num) {
	return typeof num === 'string'
		? num.replace(/[$,]/g, '') * 1
		: typeof num === 'number'
			? num
			: 0
}

$('#datatables-1').DataTable({
	data: DATATABLES_DATA,
	responsive: true,

	// Footer callback method for rendering
	footerCallback: function (row, data, start, end, display) {
		const column = 7
		const api = this.api()

		const total = api
			.column(column, { page: 'current' })
			.data()
			.reduce((total, num) => {
				return formatInt(total) + formatInt(num)
			}, 0)

		$(api.column(column).footer()).html(
			`Total: ${$.fn.dataTable.render.number(',', '.', 0, '$').display(total)}`,
		)
	},
})
