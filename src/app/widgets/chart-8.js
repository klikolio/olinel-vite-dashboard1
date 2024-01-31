import '@modules/apexcharts/scripts/apexcharts'
import '@modules/apexcharts/styles/apexcharts.scss'

import {
	getChartThemeOptions,
	currencyFormatter,
} from '@app/utilities/widget-helper'

export function initChart8(chartQuery, series) {
	const chartInstance = new ApexCharts(chartQuery, {
		...getChartThemeOptions(), // Add theme option to chart
		series,
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
	})

	// Theme switcher listener
	document.querySelector('#theme-toggle').addEventListener('click', () => {
		// Update chart color theme
		chartInstance.updateOptions(getChartThemeOptions())
	})

	return chartInstance
}
