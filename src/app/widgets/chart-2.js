import '@modules/apexcharts/scripts/apexcharts'
import '@modules/apexcharts/styles/apexcharts.scss'

import {
	colorScheme,
	getChartThemeOptions,
	getThemeVariantIsDark,
	currencyFormatter,
} from '@app/utilities/widget-helper'

export function initChart2(chartQuery, series) {
	const chartInstance = new ApexCharts(chartQuery, {
		...getChartThemeOptions(), // Add theme option to chart
		series,
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
			colors: [colorScheme.cyan, colorScheme.green],
		},
		markers: {
			strokeColors: getThemeVariantIsDark()
				? colorScheme.black
				: colorScheme.white,
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
	})

	// Theme switcher listener
	document.querySelector('#theme-toggle').addEventListener('click', () => {
		// Update chart color theme
		chartInstance.updateOptions({
			...getChartThemeOptions(),
			markers: {
				strokeColors: getThemeVariantIsDark()
					? colorScheme.black
					: colorScheme.white,
			},
		})
	})

	return chartInstance
}
