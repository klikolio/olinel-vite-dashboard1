import 'datatables.net'
import 'datatables.net-bs5'
import 'datatables.net-responsive'
import 'datatables.net-responsive-bs5'
import 'datatables.net-select'
import 'datatables.net-select-bs5'
import '@/build/vendors/datatables/bootstrap/styles/datatables.scss'
import '@/build/vendors/datatables/responsive/styles/responsive.scss'
import '@/build/vendors/datatables/select/styles/select.scss'

import $ from 'jquery'
import { DATATABLES_DATA } from '@/app/utilities/datatables-data'

$("#datatables-1").DataTable({
  data: DATATABLES_DATA,
  responsive: true,
  select: true // Enable select extension with default configuration
})

$("#datatables-2").DataTable({
  data: DATATABLES_DATA,
  responsive: true,
  select: {
    style: "multi" // Enable multiple selection
  }
})

$("#datatables-3").DataTable({
  data: DATATABLES_DATA,
  responsive: true,
  select: {
    style: "os",
    items: "cell" // Enable cell selection
  }
})
