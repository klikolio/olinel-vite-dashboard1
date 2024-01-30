import 'datatables.net'
import 'datatables.net-bs5'
import 'datatables.net-responsive'
import 'datatables.net-responsive-bs5'
import 'datatables.net-buttons'
import 'datatables.net-buttons-bs5'
import 'datatables.net-buttons/js/buttons.colVis'
import 'datatables.net-buttons/js/buttons.html5'
import 'datatables.net-buttons/js/buttons.print'
import '@/build/vendors/datatables/bootstrap/styles/datatables.scss'
import '@/build/vendors/datatables/responsive/styles/responsive.scss'
import '@/build/vendors/datatables/buttons/styles/buttons.scss'

import $ from 'jquery'
import { DATATABLES_DATA } from '@/app/utilities/datatables-data'

$('#datatables-1').DataTable({
  data: DATATABLES_DATA,
  responsive: true,

  // Custom DOM layout
  dom: `
    <'row'<'col-sm-6 text-center text-sm-start'B><'col-sm-6 text-center text-sm-start mt-2 mt-sm-0'f>>
    <'row'<'col-12'tr>>
    <'row align-items-baseline'<'col-md-5'i><'col-md-2 mt-2 mt-md-0'l><'col-md-5'p>>
  `,
  buttons: [
    { extend: 'copy', className: 'btn btn-flat-primary' },
    { extend: 'csv', className: 'btn btn-flat-primary' },
    { extend: 'print', className: 'btn btn-flat-primary' }
  ] // List of helper buttons
})

$('#datatables-2').DataTable({
  data: DATATABLES_DATA,
  responsive: true,

  // Custom DOM layout
  dom: `
    <'row'<'col-sm-6 text-center text-sm-start'B><'col-sm-6 text-center text-sm-start mt-2 mt-sm-0'f>>
    <'row'<'col-12'tr>>
    <'row align-items-baseline'<'col-md-5'i><'col-md-2 mt-2 mt-md-0'l><'col-md-5'p>>
  `,
  buttons: [
    {
      extend: 'collection',
      text: 'Controls',
      className: 'btn btn-flat-primary',
      buttons: [
        {
          text: 'Toggle start date',
          action: (e, dt, node, config) => {
            dt.column(-2).visible(!dt.column(-2).visible())
          }
        },
        {
          text: 'Toggle salary',
          action: (e, dt, node, config) => {
            dt.column(-1).visible(!dt.column(-1).visible())
          }
        },
        {
          collectionTitle: 'Visibility control',
          extend: 'colvis',
          collectionLayout: 'two-column'
        }
      ]
    }
  ]
})
