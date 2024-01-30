import 'datatables.net'
import 'datatables.net-bs5'
import 'datatables.net-responsive'
import 'datatables.net-responsive-bs5'
import 'datatables.net-fixedheader'
import 'datatables.net-fixedheader-bs5'
import '@/build/vendors/datatables/bootstrap/styles/datatables.scss'
import '@/build/vendors/datatables/responsive/styles/responsive.scss'
import '@/build/vendors/datatables/fixedheader/styles/fixedheader.scss'

import $ from 'jquery'
import { DATATABLES_DATA } from '@/app/utilities/datatables-data'
import { getBrowserWidth } from '@/app/utilities/widget-helper'

const headerOffset = getBrowserWidth() >= 1025
  ? document.querySelector('#sticky-header-desktop').clientHeight
  : document.querySelector('#sticky-header-mobile').clientHeight

$("#datatables-1").DataTable({
  data: DATATABLES_DATA,
  responsive: true,
  fixedHeader: {
    header: true, // Float table header
    headerOffset: headerOffset // Fit table header with page header
  }
})

$("#datatables-2").DataTable({
  data: DATATABLES_DATA,
  responsive: true,
  fixedHeader: {
    header: true,
    footer: true,
    headerOffset: headerOffset // Fit table header with page header
  }
})