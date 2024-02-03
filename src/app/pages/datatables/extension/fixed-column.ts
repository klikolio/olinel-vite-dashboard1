import 'datatables.net'
import 'datatables.net-bs5'
import 'datatables.net-fixedcolumns'
import 'datatables.net-fixedcolumns-bs5'
import '@modules/datatables/bootstrap/styles/datatables.scss'
import '@modules/datatables/fixedcolumns/styles/fixedcolumns.scss'

import $ from 'jquery'
import { DATATABLES_DATA_LONG } from '@app/utilities/datatables-helper'

$('#datatables-1').DataTable({
	data: DATATABLES_DATA_LONG,
	scrollY: '300px',
	scrollX: true,
	scrollCollapse: true, // Enable scrollable table
	fixedColumns: true, // Enable fixed column extension with default configuration
})

$('#datatables-2').DataTable({
	data: DATATABLES_DATA_LONG,
	scrollY: '300px',
	scrollX: true,
	scrollCollapse: true, // Enable scrollable table
	fixedColumns: {
		leftColumns: 2, // Float first two columns
	},
})

$('#datatables-3').DataTable({
	data: DATATABLES_DATA_LONG,
	scrollY: '300px',
	scrollX: true,
	scrollCollapse: true, // Enable scrollable table
	// Float first and last columns
	fixedColumns: {
		leftColumns: 1,
		rightColumns: 1,
	},
})
