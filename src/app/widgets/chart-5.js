import '@/build/vendors/apexcharts/styles/apexcharts.scss'
import '@/build/vendors/apexcharts/scripts/apexcharts'

import { colorScheme, getChartThemeOptions, getThemeVariantIsDark } from '@/app/utilities/widget-helper'

export function initChart5(chartQuery, series) {
  const chartInstance = new ApexCharts(chartQuery, {
    ...getChartThemeOptions(), // Add theme option to chart
    series: series,
    chart: {
      type: "area",
      background: "transparent",
      height: 300,
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    fill: {
      opacity: 0,
      type: "solid",
    },
    stroke: {
      show: true,
      colors: [colorScheme.blue],
      lineCap: "round"
    },
    markers: {
      colors: [getThemeVariantIsDark() ? colorScheme.black : colorScheme.white],
      strokeWidth: 4,
      strokeColors: colorScheme.blue
    },
    tooltip: {
      marker: {
        show: false
      },
      y: {
        formatter: val => `${val} Products` // Format chart tooltip value
      }
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
    }
  })

  document.querySelector('#theme-toggle').addEventListener('click', () => {
    chartInstance.updateOptions({
      ...getChartThemeOptions(),
      markers: { colors: [getThemeVariantIsDark() ? colorScheme.black : colorScheme.white] }
    })
  })

  return chartInstance
}
