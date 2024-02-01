import '@modules/apexcharts/styles/apexcharts.scss'

import merge from 'deepmerge'
import ApexCharts from 'apexcharts'
import {
	currencyFormatter,
	normalizeApexchartsOptions,
} from '@app/utilities/apexcharts-helper'

const chartOptions = (series) => {
	const extraOptions = {}

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

export function initChart8(chartQuery, series) {
	const chartInstance = new ApexCharts(chartQuery, chartOptions(series))

	// Theme switcher listener
	document.querySelector('#theme-toggle').addEventListener('click', () => {
		// Update chart color theme
		chartInstance.updateOptions(chartOptions())
	})

	return chartInstance
}
