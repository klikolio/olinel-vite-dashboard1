import 'datatables.net'
import 'datatables.net-bs5'
import '@modules/datatables/bootstrap/styles/datatables.scss'

import $ from 'jquery'
import { DATATABLES_DATA_LONG } from '@app/utilities/datatables-helper'

$('#datatables-1').DataTable({
  data: DATATABLES_DATA_LONG,

  // Enable scrollable table
  scrollCollapse: true,
  scrollY: '50vh',
  scrollX: true,
})
