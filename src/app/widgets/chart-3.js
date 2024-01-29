import '@/build/vendors/apexcharts/styles/apexcharts.scss'
import '@/build/vendors/apexcharts/scripts/apexcharts'

import { colorScheme, getChartThemeOptions, getThemeVariantIsDark } from '@/app/utilities/widget-helper'

export function initChart3(chartQuery, baseColor, series) {
  const chartInstance = new ApexCharts(chartQuery, {
    ...getChartThemeOptions(), // Add theme option to chart
    series: series,
    chart: {
      type: "area",
      height: 50,
      background: "transparent",
      sparkline: {
        enabled: true
      }
    },
    fill: {
      opacity: 0,
      type: "solid"
    },
    stroke: {
      show: true,
      colors: [baseColor],
      lineCap: "round"
    },
    markers: {
      colors: [getThemeVariantIsDark() ? colorScheme.black : colorScheme.white],
      strokeWidth: 4,
      strokeColors: baseColor
    },
    tooltip: {
      followCursor: true,
      marker: {
        show: false
      },
      x: {
        show: false
      },
      y: {
        formatter: val => `${val} Tests` // Format chart tooltip value
      },
      fixed: {
        enabled: true,
        position: "topLeft",
        offsetY: -30
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
