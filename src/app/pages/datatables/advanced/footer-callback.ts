import 'datatables.net'
import 'datatables.net-bs5'
import 'datatables.net-responsive'
import 'datatables.net-responsive-bs5'
import '@modules/datatables/bootstrap/styles/datatables.scss'
import '@modules/datatables/responsive/styles/responsive.scss'

import $ from 'jquery'
import { DATATABLES_DATA } from '@app/utilities/datatables-helper'
import { currencyFormatter, formatInt } from '@app/utilities/widget-helper'

$('#datatables-1').DataTable({
	data: DATATABLES_DATA,
	responsive: true,

	// Footer callback method for rendering
	footerCallback: function () {
		const column = 7
		const api = new $.fn.dataTable.Api(this)

		const total = api
			.column(column, { page: 'current' })
			.data()
			.reduce((total: any, num: any) => {
				return formatInt(total) + formatInt(num)
			}, 0)

		$(api.column(column).footer()).html(
			`Total: ${currencyFormatter.format(total)}`,
		)
	},
})
