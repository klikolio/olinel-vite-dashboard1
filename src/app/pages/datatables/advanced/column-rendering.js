import 'datatables.net'
import 'datatables.net-bs5'
import 'datatables.net-responsive'
import 'datatables.net-responsive-bs5'
import '@/build/vendors/datatables/bootstrap/styles/datatables.scss'
import '@/build/vendors/datatables/responsive/styles/responsive.scss'

import $ from 'jquery'
import { DATATABLES_DATA } from '@/app/utilities/datatables-data'

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const status = [
  { title: "Success", state: "success" },
  { title: "Progress", state: "primary" },
  { title: "Suspended", state: "info" },
  { title: "Canceled", state: "danger" }
]

const DATATABLES_DATA_UPDATED = DATATABLES_DATA.map((dataRow) => {
  return [...dataRow, status[getRandomNumber(0, status.length - 1)].state, '']
})

$("#datatables-1").DataTable({
  data: DATATABLES_DATA_UPDATED,
  responsive: true,

  // Custom column rendering methods
  columnDefs: [
    {
      targets: -1,
      title: "Actions",
      searchable: false,
      orderable: false,
      render: (data, type, full, meta) => `
        <button class="btn btn-label-primary btn-icon">
          <i class="fa fa-edit"></i>
        </button>
      `
    },
    {
      targets: -2,
      render: (data, type, full, meta) => {
        return `<span class="badge badge-label-${status[data].state}">${status[data].title}</span>`
      }
    }
  ]
})