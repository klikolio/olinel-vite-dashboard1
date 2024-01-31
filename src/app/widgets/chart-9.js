import '@modules/apexcharts/scripts/apexcharts'
import '@modules/apexcharts/styles/apexcharts.scss'

import {
	colorScheme,
	getChartThemeOptions,
	getThemeVariantIsDark,
} from '@app/utilities/widget-helper'

export function initChart9(chartQuery, baseColor, series) {
	const chartInstance = new ApexCharts(chartQuery, {
		...getChartThemeOptions(), // Add theme option to chart
		series,
		chart: {
			type: 'area',
			height: 150,
			background: 'transparent',
			sparkline: {
				enabled: true,
			},
		},
		fill: {
			type: 'solid',
			opacity: 0,
		},
		markers: {
			strokeColors: getThemeVariantIsDark()
				? colorScheme.black
				: colorScheme.white,
		},
		stroke: {
			show: true,
			colors: [baseColor],
			lineCap: 'round',
		},
		tooltip: {
			marker: {
				show: false,
			},
		},
		xaxis: {
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
			crosshairs: {
				show: false,
			},
		},
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
