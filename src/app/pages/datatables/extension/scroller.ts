import 'datatables.net'
import 'datatables.net-bs5'
import 'datatables.net-scroller'
import 'datatables.net-scroller-bs5'
import '@modules/datatables/bootstrap/styles/datatables.scss'
import '@modules/datatables/scroller/styles/scroller.scss'

import $ from 'jquery'

$('#datatables-1').DataTable({
  ajax: '/data/datatables-scroller.json', // Get data from API
  deferRender: true,
  scrollCollapse: true, // Enable scrollable table
  scrollY: '300px',
  scroller: true, // Enable scroller extension with default configuration
})
