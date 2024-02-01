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
	}

	return normalizeApexchartsOptions(
		merge(extraOptions, {
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
				strokeColors: chartBgLevel[themeVariant][1],
			},
			stroke: {
				show: true,
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
		}),
	)
}

export function initChart9(chartQuery, baseColor, series) {
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
