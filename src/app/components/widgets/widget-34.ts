import { initChart7 } from '@app/widgets/chart-7'
import { pageLoadedListener } from '@app/utilities/widget-helper'

pageLoadedListener(() => {
  const chartInstance = initChart7(
    document.querySelector('#widget-chart-7c'),
    [
      {
        name: 'Visit',
        data: [560, 400, 480, 340, 780, 640],
      },
    ],
    '#ef5350',
    false,
  )

  chartInstance.render()
})
