import { initChart2 } from '@app/widgets/chart-2'
import { pageLoadedListener } from '@app/utilities/widget-helper'

pageLoadedListener(() => {
  const chartInstance = initChart2(document.querySelector('#widget-chart-2'), [
    {
      name: 'Revenue',
      data: [4200, 9000, 5200, 13600, 6800, 10900, 8000],
    },
    {
      name: 'Profit',
      data: [2800, 9200, 2800, 6000, 2000, 14600, 6000],
    },
  ])

  chartInstance.render()
})
