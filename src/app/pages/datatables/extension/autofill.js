import 'datatables.net'
import 'datatables.net-bs5'
import 'datatables.net-responsive'
import 'datatables.net-responsive-bs5'
import 'datatables.net-autofill'
import 'datatables.net-autofill-bs5'
import '@/build/vendors/datatables/bootstrap/styles/datatables.scss'
import '@/build/vendors/datatables/responsive/styles/responsive.scss'
import '@/build/vendors/datatables/autofill/styles/autofill.scss'

import $ from 'jquery'
import { DATATABLES_DATA } from '@/app/utilities/datatables-data'

$('#datatables-1').DataTable({
  data: DATATABLES_DATA,
  responsive: true,
  autoFill: true // Enable autofill extension with default configuration
})

$('#datatables-2').DataTable({
  data: DATATABLES_DATA,
  responsive: true,
  autoFill: {
    focus: 'click' // Reset autofill trigger
  }
})

$('#datatables-3').DataTable({
  data: DATATABLES_DATA,
  responsive: true,
  autoFill: {
    horizontal: false // Disable horizontal filling behavior
  }
})
