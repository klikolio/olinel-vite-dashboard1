import { initChart9 } from '@app/widgets/chart-9'
import { pageLoadedListener } from '@app/utilities/widget-helper'

pageLoadedListener(() => {
  const chartInstance = initChart9(
    document.querySelector('#widget-chart-9b'),
    [
      {
        name: 'Visit',
        data: [320, 450, 360, 560, 440, 480],
      },
    ],
    '#fff',
  )

  chartInstance.render()
})
