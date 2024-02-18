import { initChart3 } from '@app/widgets/chart-3'
import { pageLoadedListener } from '@app/utilities/widget-helper'

pageLoadedListener(() => {
  document.querySelectorAll('.widget-chart-3').forEach((chartQuery) => {
    // Get attribute data from element
    const baseColor = chartQuery.getAttribute('data-chart-color') ?? undefined
    const chartLabel = chartQuery.getAttribute('data-chart-label') ?? 'No label'
    const chartValue =
      chartQuery
        .getAttribute('data-chart-value')
        ?.split(',')
        .map((val) => Number(val)) ?? []

    const chartInstance = initChart3(
      chartQuery,
      [
        {
          name: chartLabel,
          data: chartValue,
        },
      ],
      baseColor,
    )

    chartInstance.render()
  })
})
