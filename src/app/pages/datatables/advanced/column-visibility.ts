import 'datatables.net'
import 'datatables.net-bs5'
import 'datatables.net-responsive'
import 'datatables.net-responsive-bs5'
import '@modules/datatables/bootstrap/styles/datatables.scss'
import '@modules/datatables/responsive/styles/responsive.scss'

import $ from 'jquery'
import { DATATABLES_DATA } from '@app/utilities/datatables-helper'

$('#datatables-1').DataTable({
	data: DATATABLES_DATA,
	responsive: true,

	// Hide columns and change default ordered column
	order: [[1, 'asc']],
	columnDefs: [
		{
			targets: [0, 5],
			visible: false, // Hide selected columns
		},
	],
})
