import 'datatables.net'
import 'datatables.net-bs5'
import 'datatables.net-responsive'
import 'datatables.net-responsive-bs5'
import '@modules/datatables/bootstrap/styles/datatables.scss'
import '@modules/datatables/responsive/styles/responsive.scss'

import $ from 'jquery'
import Handlebars from 'handlebars'
import { DATATABLES_DATA } from '@app/utilities/datatables-helper'
import { getRandomNumber } from '@app/utilities/widget-helper'

const status = [
  { title: 'Success', state: 'success' },
  { title: 'Progress', state: 'primary' },
  { title: 'Suspended', state: 'info' },
  { title: 'Canceled', state: 'danger' },
]

const DATATABLES_DATA_UPDATED = DATATABLES_DATA.map((dataRow) => {
  return [...dataRow, status[getRandomNumber(0, status.length - 1)].state, '']
})

$('#datatables-1').DataTable({
  data: DATATABLES_DATA_UPDATED,
  responsive: true,

  // Custom column rendering methods
  columnDefs: [
    {
      targets: -1,
      title: 'Actions',
      searchable: false,
      orderable: false,
      render: (_data, _type, _full, _meta) => `
        <button class="btn btn-subtle-primary btn-icon">
          <i class="fa fa-edit"></i>
        </button>
      `,
    },
    {
      targets: -2,
      render: (data, _type, _full, _meta) => {
        const statusData = status.find(
          (statusItem) => statusItem.state === data,
        )

        return Handlebars.compile(
          `<span class="badge badge-subtle-{{ color }}">{{ text }}</span>`,
        )({
          color: statusData?.state ?? 'primary',
          text: statusData?.title ?? 'Untitled',
        })
      },
    },
  ],
})
