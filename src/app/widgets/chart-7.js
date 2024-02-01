import '@modules/apexcharts/styles/apexcharts.scss'

import merge from 'deepmerge'
import ApexCharts from 'apexcharts'
import { getThemeVariant } from '@app/utilities/widget-helper'
import {
	chartBgLevel,
	currencyFormatter,
	normalizeApexchartsOptions,
} from '@app/utilities/apexcharts-helper'

const chartOptions = (baseColor, enabledCurrencyFormat, series) => {
	const extraOptions = {}
	const themeVariant = getThemeVariant()

	if (series !== undefined) extraOptions.series = series
	if (baseColor !== undefined) {
		extraOptions.fill = {
			colors: [baseColor],
		}
		extraOptions.stroke = {
			colors: [baseColor],
		}
		extraOptions.markers = {
			strokeColors: baseColor,
		}
	}
	if (enabledCurrencyFormat !== undefined) {
		extraOptions.tooltip = {
			y: {
				formatter: (val) =>
					enabledCurrencyFormat ? currencyFormatter.format(val) : val, // Format chart tooltip value
			},
		}
	}

	return normalizeApexchartsOptions(
		merge(extraOptions, {
			chart: {
				type: 'area',
				height: 200,
				background: 'transparent',
				sparkline: {
					enabled: true,
				},
			},
			fill: {
				type: 'solid',
				opacity: 0.1,
			},
			stroke: {
				show: true,
			},
			markers: {
				colors: [chartBgLevel[themeVariant][1]],
				strokeWidth: 4,
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

export function initChart7(
	chartQuery,
	baseColor,
	enabledCurrencyFormat,
	series,
) {
	const chartInstance = new ApexCharts(
		chartQuery,
		chartOptions(baseColor, enabledCurrencyFormat, series),
	)

	// Theme switcher listener
	document.querySelector('#theme-toggle').addEventListener('click', () => {
		// Update chart color theme
		chartInstance.updateOptions(chartOptions())
	})

	return chartInstance
}
