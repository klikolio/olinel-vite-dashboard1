import '@modules/apexcharts/styles/apexcharts.scss'
import '@modules/apexcharts/scripts/apexcharts'

import {
	colorScheme,
	getChartThemeOptions,
	getThemeVariantIsDark,
	getThemeVariant,
} from '@app/utilities/widget-helper'

export function initChart6(chartQuery, series) {
	const chartInstance = new ApexCharts(chartQuery, {
		...getChartThemeOptions(), // Add theme option to chart
		series,
		chart: {
			type: 'area',
			background: 'transparent',
			height: 300,
			sparkline: {
				enabled: true,
			},
		},
		markers: {
			strokeColors: getThemeVariantIsDark()
				? colorScheme.black
				: colorScheme.white,
		},
		fill: {
			type: 'gradient',
			gradient: {
				shade: getThemeVariant(),
				type: 'vertical',
				opacityFrom: 1,
				opacityTo: 0,
				stops: [0, 100],
			},
		},
		tooltip: {
			marker: {
				show: false,
			},
			y: {
				formatter: (val) => `${val} Visited`, // Format chart tooltip value
			},
		},
		xaxis: {
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
			crosshairs: {
				show: false,
			},
		},
	})

	document.querySelector('#theme-toggle').addEventListener('click', () => {
		chartInstance.updateOptions({
			...getChartThemeOptions(),
			markers: {
				strokeColors: getThemeVariantIsDark()
					? colorScheme.black
					: colorScheme.white,
			},
			fill: {
				gradient: { shade: getThemeVariant() },
			},
		})
	})

	return chartInstance
}
