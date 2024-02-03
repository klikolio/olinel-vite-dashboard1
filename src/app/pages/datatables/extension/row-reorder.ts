import 'datatables.net'
import 'datatables.net-bs5'
import 'datatables.net-responsive'
import 'datatables.net-responsive-bs5'
import 'datatables.net-rowreorder'
import 'datatables.net-rowreorder-bs5'
import '@modules/datatables/bootstrap/styles/datatables.scss'
import '@modules/datatables/responsive/styles/responsive.scss'
import '@modules/datatables/rowreorder/styles/rowreorder.scss'

import $ from 'jquery'
import { DATATABLES_DATA } from '@app/utilities/datatables-helper'

$('#datatables-1').DataTable({
	data: DATATABLES_DATA,
	responsive: true,
	rowReorder: true, // Enable row reorder extension with default configuration
})

$('#datatables-2').DataTable({
	data: DATATABLES_DATA,
	responsive: true,
	rowReorder: true,
	columnDefs: [
		{
			orderable: true,
			targets: 0,
		},
		{
			orderable: false,
			targets: '_all',
		},
	],
})
