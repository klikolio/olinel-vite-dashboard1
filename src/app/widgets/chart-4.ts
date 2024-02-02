import '@modules/apexcharts/styles/apexcharts.scss'

import merge from 'deepmerge'
import ApexCharts, { type ApexOptions } from 'apexcharts'
import { getThemeVariant } from '@app/utilities/widget-helper'
import {
	chartBgLevel,
	chartColorScheme,
	normalizeApexchartsOptions,
} from '@app/utilities/apexcharts-helper'

const chartOptions = (labels?: string[], series?: ApexNonAxisChartSeries) => {
	const extraOptions: ApexOptions = {}
	const themeVariant = getThemeVariant()

	if (series !== undefined) extraOptions.series = series
	if (labels !== undefined) extraOptions.labels = labels

	return normalizeApexchartsOptions(
		merge(extraOptions, {
			chart: {
				width: 300,
				type: 'donut',
				background: 'transparent',
			},
			stroke: {
				colors: [chartBgLevel[themeVariant][1]],
			},
			colors: [
				chartColorScheme.blue,
				chartColorScheme.cyan,
				chartColorScheme.green,
			],
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
		}),
	)
}

export function initChart4(
	chartQuery: Element | null,
	labels: string[],
	series: ApexNonAxisChartSeries,
): ApexCharts {
	const chartInstance = new ApexCharts(chartQuery, chartOptions(labels, series))

	// Theme switcher listener
	document.querySelector('#theme-toggle')?.addEventListener('click', () => {
		// Update chart color theme
		chartInstance.updateOptions(chartOptions())
	})

	return chartInstance
}
