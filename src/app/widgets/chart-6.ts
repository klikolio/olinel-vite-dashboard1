import '@modules/apexcharts/styles/apexcharts.scss'

import merge from 'deepmerge'
import ApexCharts, { type ApexOptions } from 'apexcharts'
import { getThemeVariant } from '@app/utilities/widget-helper'
import {
  chartBgLevel,
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
        sparkline: {
          enabled: true,
        },
      },
      markers: {
        strokeColors: chartBgLevel[themeVariant][1],
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: themeVariant,
          type: 'vertical',
          opacityFrom: 1,
          opacityTo: 0,
          stops: [0, 100],
        },
      },
      tooltip: {
        marker: {
          show: false,
        },
        y: {
          formatter: (val) => `${val} Visited`, // Format chart tooltip value
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        crosshairs: {
          show: false,
        },
      },
    }),
  )
}

export function initChart6(
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
