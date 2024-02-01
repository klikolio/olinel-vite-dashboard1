import '@modules/apexcharts/styles/apexcharts.scss'

import merge from 'deepmerge'
import ApexCharts from 'apexcharts'
import { getThemeVariant } from '@app/utilities/widget-helper'
import {
	chartBgLevel,
	normalizeApexchartsOptions,
} from '@app/utilities/apexcharts-helper'

const chartOptions = (baseColor, series) => {
	const extraOptions = {}
	const themeVariant = getThemeVariant()

	if (series !== undefined) extraOptions.series = series
	if (baseColor !== undefined) {
		extraOptions.stroke = {
			colors: [baseColor],
		}
		extraOptions.markers = {
			strokeColors: baseColor,
		}
	}

	return normalizeApexchartsOptions(
		merge(extraOptions, {
			chart: {
				type: 'area',
				height: 50,
				background: 'transparent',
				sparkline: {
					enabled: true,
				},
			},
			fill: {
				opacity: 0,
				type: 'solid',
			},
			stroke: {
				show: true,
				lineCap: 'round',
			},
			markers: {
				colors: [chartBgLevel[themeVariant][1]],
				strokeWidth: 4,
			},
			tooltip: {
				followCursor: true,
				marker: {
					show: false,
				},
				x: {
					show: false,
				},
				y: {
					formatter: (val) => `${val} Tests`, // Format chart tooltip value
				},
				fixed: {
					enabled: true,
					position: 'topLeft',
					offsetY: -30,
				},
			},
			xaxis: {
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
				crosshairs: {
					show: false,
				},
			},
		}),
	)
}

export function initChart3(chartQuery, baseColor, series) {
	const chartInstance = new ApexCharts(
		chartQuery,
		chartOptions(baseColor, series),
	)

	// Theme switcher listener
	document.querySelector('#theme-toggle').addEventListener('click', () => {
		// Update chart color theme
		chartInstance.updateOptions(chartOptions())
	})

	return chartInstance
}
