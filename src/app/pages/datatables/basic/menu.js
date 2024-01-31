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

	// Set length menu select element
	lengthMenu: [
		[5, 10, 25, 50, -1],
		[5, 10, 25, 50, 'All'],
	],
})
