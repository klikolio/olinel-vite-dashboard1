import '@modules/apexcharts/styles/apexcharts.scss'

import merge from 'deepmerge'
import ApexCharts, { type ApexOptions } from 'apexcharts'
import { getThemeVariant } from '@app/utilities/widget-helper'
import {
  chartBgLevel,
  chartColorScheme,
  normalizeApexchartsOptions,
} from '@app/utilities/apexcharts-helper'

const chartOptions = (series?: ApexAxisChartSeries) => {
  const extraOptions: ApexOptions = {}
  const themeVariant = getThemeVariant()

  if (series !== undefined) extraOptions.series = series

  return normalizeApexchartsOptions(
    merge(extraOptions, {
      chart: {
        type: 'area',
        background: 'transparent',
        height: 300,
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        opacity: 0,
        type: 'solid',
      },
      stroke: {
        show: true,
        colors: [chartColorScheme.blue],
        lineCap: 'round',
      },
      markers: {
        colors: [chartBgLevel[themeVariant][1]],
        strokeWidth: 4,
        strokeColors: chartColorScheme.blue,
      },
      tooltip: {
        marker: {
          show: false,
        },
        y: {
          formatter: (val) => `${val} Products`, // Format chart tooltip value
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      },
    }),
  )
}

export function initChart5(
  chartQuery: Element | null,
  series: ApexAxisChartSeries,
): ApexCharts {
  const chartInstance = new ApexCharts(chartQuery, chartOptions(series))

  // Theme switcher listener
  document.querySelector('#theme-toggle')?.addEventListener('click', () => {
    // Update chart color theme
    chartInstance.updateOptions(chartOptions())
  })

  return chartInstance
}
