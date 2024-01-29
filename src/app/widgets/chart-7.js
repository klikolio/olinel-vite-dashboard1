import '@/build/vendors/apexcharts/styles/apexcharts.scss'
import '@/build/vendors/apexcharts/scripts/apexcharts'

import { colorScheme, getChartThemeOptions, getThemeVariantIsDark, currencyFormatter } from '@/app/utilities/widget-helper'

export function initChart7(chartQuery, baseColor, enabledCurrencyFormat, series) {
  const chartInstance = new ApexCharts(chartQuery, {
    ...getChartThemeOptions(), // Add theme option to chart
    series: series,
    chart: {
      type: "area",
      height: 200,
      background: "transparent",
      sparkline: {
        enabled: true
      }
    },
    fill: {
      type: "solid",
      colors: [baseColor],
      opacity: 0.1
    },
    stroke: {
      show: true,
      colors: [baseColor]
    },
    markers: {
      colors: [getThemeVariantIsDark() ? colorScheme.black : colorScheme.white],
      strokeWidth: 4,
      strokeColors: baseColor
    },
    tooltip: {
      marker: {
        show: false
      },
      y: {
        formatter: val => (enabledCurrencyFormat ? currencyFormatter.format(val) : val) // Format chart tooltip value
      }
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      crosshairs: {
        show: false
      }
    }
  })

  document.querySelector('#theme-toggle').addEventListener('click', () => {
    chartInstance.updateOptions({
      ...getChartThemeOptions(),
      markers: { colors: getThemeVariantIsDark() ? colorScheme.black : colorScheme.white }
    })
  })

  return chartInstance
}
