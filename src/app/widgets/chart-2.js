import '@modules/apexcharts/styles/apexcharts.scss'

import merge from 'deepmerge'
import ApexCharts from 'apexcharts'
import { getThemeVariant } from '@app/utilities/widget-helper'
import {
	chartBgLevel,
	chartColorScheme,
	currencyFormatter,
	normalizeApexchartsOptions,
} from '@app/utilities/apexcharts-helper'

const chartOptions = (series) => {
	const extraOptions = {}
	const themeVariant = getThemeVariant()

	if (series !== undefined) extraOptions.series = series

	return normalizeApexchartsOptions(
		merge(extraOptions, {
			chart: {
				type: 'area',
				height: 300,
				background: 'transparent',
				sparkline: {
					enabled: true,
				},
			},
			fill: {
				type: 'solid',
				opacity: 1,
			},
			markers: {
				strokeColors: chartBgLevel[themeVariant][1],
			},
			stroke: {
				show: false,
			},
			tooltip: {
				y: {
					formatter: (val) => currencyFormatter.format(val), // Format chart tooltip value
				},
			},
			xaxis: {
				categories: [
					'Jan',
					'Feb',
					'Mar',
					'Apr',
					'May',
					'Jun',
					'Jul',
					'Aug',
					'Sep',
				],
				crosshairs: {
					show: false,
				},
			},
			responsive: [
				{
					breakpoint: 576,
					options: {
						chart: {
							height: 200,
						},
					},
				},
			],
		}),
	)
}

export function initChart2(chartQuery, series) {
	const chartInstance = new ApexCharts(chartQuery, chartOptions(series))
	// Theme switcher listener
	document.querySelector('#theme-toggle').addEventListener('click', () => {
		// Update chart color theme
		chartInstance.updateOptions(chartOptions())
	})

	return chartInstance
}
