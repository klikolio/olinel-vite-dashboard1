import 'datatables.net'
import 'datatables.net-bs5'
import 'datatables.net-responsive'
import 'datatables.net-responsive-bs5'
import '@/build/vendors/datatables/bootstrap/styles/datatables.scss'
import '@/build/vendors/datatables/responsive/styles/responsive.scss'

import $ from 'jquery'
import { DATATABLES_DATA } from '@/app/utilities/datatables-data'

$("#datatables-1").DataTable({
  data: DATATABLES_DATA,
  responsive: true,

  // Custom DOM layout
  dom: `
    <'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>>
    <'row'<'col-sm-12 col-md-6'i><'col-sm-12 col-md-6'p>>
    <'row'<'col-sm-12'tr>>
    <'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>>
    <'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>
  `
})