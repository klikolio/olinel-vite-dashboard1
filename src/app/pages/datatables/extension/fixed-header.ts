import 'datatables.net'
import 'datatables.net-bs5'
import 'datatables.net-responsive'
import 'datatables.net-responsive-bs5'
import 'datatables.net-fixedheader'
import 'datatables.net-fixedheader-bs5'
import '@modules/datatables/bootstrap/styles/datatables.scss'
import '@modules/datatables/responsive/styles/responsive.scss'
import '@modules/datatables/fixedheader/styles/fixedheader.scss'

import $ from 'jquery'
import { DATATABLES_DATA } from '@app/utilities/datatables-helper'
import { getBrowserWidth } from '@app/utilities/widget-helper'

const headerOffset =
	(getBrowserWidth() >= 1025
		? document.querySelector('#sticky-header-desktop')?.clientHeight
		: document.querySelector('#sticky-header-mobile')?.clientHeight) ?? 0

$('#datatables-1').DataTable({
	data: DATATABLES_DATA,
	responsive: true,
	fixedHeader: {
		header: true, // Float table header
		headerOffset, // Fit table header with page header
	},
})

$('#datatables-2').DataTable({
	data: DATATABLES_DATA,
	responsive: true,
	fixedHeader: {
		header: true,
		footer: true,
		headerOffset, // Fit table header with page header
	},
})
