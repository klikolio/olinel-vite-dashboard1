import 'datatables.net'
import 'datatables.net-bs5'
import 'datatables.net-responsive'
import 'datatables.net-responsive-bs5'
import 'datatables.net-select'
import 'datatables.net-select-bs5'
import '@modules/datatables/searchpanes/scripts/searchpanes'
import '@modules/datatables/searchpanes/scripts/searchpanes-bs5'
import '@modules/datatables/bootstrap/styles/datatables.scss'
import '@modules/datatables/responsive/styles/responsive.scss'
import '@modules/datatables/select/styles/select.scss'
import '@modules/datatables/searchpanes/styles/searchpanes.scss'

import $ from 'jquery'
import { DATATABLES_DATA } from '@app/utilities/datatables-data'

$('#datatables-1').DataTable({
	data: DATATABLES_DATA,
	responsive: true,
	dom: `
    <'row'<'col-12'P>>
    <'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>>
    <'row'<'col-12'tr>>
    <'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>
  `,
	searchPanes: {
		cascadePanes: true,
		viewTotal: true,
	},
	language: {
		searchPanes: {
			count: '{total} found',
			countFiltered: '{shown} / {total}',
		},
	},
})
