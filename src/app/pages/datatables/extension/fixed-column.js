import 'datatables.net'
import 'datatables.net-bs5'
import 'datatables.net-fixedcolumns'
import 'datatables.net-fixedcolumns-bs5'
import '@/build/vendors/datatables/bootstrap/styles/datatables.scss'
import '@/build/vendors/datatables/fixedcolumns/styles/fixedcolumns.scss'

import $ from 'jquery'
import { DATATABLES_DATA_LONG } from '@/app/utilities/datatables-data'

$('#datatables-1').DataTable({
  data: DATATABLES_DATA_LONG,
  scrollY: 300,
  scrollX: true,
  scrollCollapse: true, // Enable scrollable table
  fixedColumns: true // Enable autofill extension with default configuration
})

$('#datatables-2').DataTable({
  data: DATATABLES_DATA_LONG,
  scrollY: 300,
  scrollX: true,
  scrollCollapse: true, // Enable scrollable table
  fixedColumns: {
    leftColumns: 2 // Float first two columns
  }
})

$('#datatables-3').DataTable({
  data: DATATABLES_DATA_LONG,
  scrollY: 300,
  scrollX: true,
  scrollCollapse: true, // Enable scrollable table
  // Float first and last columns
  fixedColumns: {
    leftColumns: 1,
    rightColumns: 1
  }
})
