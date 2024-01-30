import 'datatables.net'
import 'datatables.net-bs5'
import 'datatables.net-responsive'
import 'datatables.net-responsive-bs5'
import 'datatables.net-keytable'
import 'datatables.net-keytable-bs5'
import '@/build/vendors/datatables/bootstrap/styles/datatables.scss'
import '@/build/vendors/datatables/responsive/styles/responsive.scss'
import '@/build/vendors/datatables/keytable/styles/keytable.scss'

import $ from 'jquery'
import { DATATABLES_DATA } from '@/app/utilities/datatables-data'

$('#datatables-1').DataTable({
	data: DATATABLES_DATA,
	responsive: true,

	// Enable key table extension with default configuration
	keys: true,
})
