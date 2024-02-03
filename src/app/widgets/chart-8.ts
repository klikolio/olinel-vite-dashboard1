import '@modules/apexcharts/styles/apexcharts.scss'

import merge from 'deepmerge'
import ApexCharts, { type ApexOptions } from 'apexcharts'
import { currencyFormatter } from '@app/utilities/widget-helper'
import { normalizeApexchartsOptions } from '@app/utilities/apexcharts-helper'

const chartOptions = (series?: ApexAxisChartSeries) => {
	const extraOptions: ApexOptions = {}

	if (series !== undefined) extraOptions.series = series

	return normalizeApexchartsOptions(
		merge(extraOptions, {
			chart: {
				type: 'bar',
				height: 200,
				background: 'transparent',
				sparkline: {
					enabled: true,
				},
			},
			fill: {
				opacity: 1,
			},
			stroke: {
				show: true,
				width: 2,
				colors: ['transparent'],
			},
			plotOptions: {
				bar: {
					horizontal: false,
				},
			},
			dataLabels: {
				enabled: false,
			},
			xaxis: {
				categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
			},
			tooltip: {
				y: {
					formatter: (val) => currencyFormatter.format(val), // Format chart tooltip value
				},
			},
		}),
	)
}

export function initChart8(
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
