import '@modules/apexcharts/scripts/apexcharts'
import '@modules/apexcharts/styles/apexcharts.scss'

import {
	colorScheme,
	getChartThemeOptions,
	getThemeVariantIsDark,
} from '@app/utilities/widget-helper'

export function initChart4(chartQuery, labels, series) {
	const chartInstance = new ApexCharts(chartQuery, {
		...getChartThemeOptions(), // Add theme option to chart
		labels,
		series,
		chart: {
			width: 300,
			type: 'donut',
			background: 'transparent',
		},
		stroke: {
			colors: [getThemeVariantIsDark() ? colorScheme.black : colorScheme.white],
		},
		colors: [colorScheme.blue, colorScheme.cyan, colorScheme.green],
		tooltip: {
			fillSeriesColor: false,
			y: {
				formatter: (val) => `${val} %`, // Format chart tooltip value
			},
		},
		legend: {
			show: false,
		},
		dataLabels: {
			enabled: false,
		},
	})

	// Theme switcher listener
	document.querySelector('#theme-toggle').addEventListener('click', () => {
		// Update chart color theme
		chartInstance.updateOptions({
			...getChartThemeOptions(),
			stroke: {
				colors: [
					getThemeVariantIsDark() ? colorScheme.black : colorScheme.white,
				],
			},
		})
	})

	return chartInstance
}
