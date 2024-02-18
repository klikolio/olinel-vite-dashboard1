import 'datatables.net'
import 'datatables.net-bs5'
import 'datatables.net-responsive'
import 'datatables.net-responsive-bs5'
import 'datatables.net-keytable'
import 'datatables.net-keytable-bs5'
import '@modules/datatables/bootstrap/styles/datatables.scss'
import '@modules/datatables/responsive/styles/responsive.scss'
import '@modules/datatables/keytable/styles/keytable.scss'

import $ from 'jquery'
import { DATATABLES_DATA } from '@app/utilities/datatables-helper'

$('#datatables-1').DataTable({
  data: DATATABLES_DATA,
  responsive: true,

  // Enable key table extension with default configuration
  keys: true,
})
