import { initChart3 } from '@app/widgets/chart-3'

document.querySelectorAll('.widget-chart-3').forEach((chartQuery) => {
	const baseColor = chartQuery.getAttribute('data-chart-color')
	const chartLabel = chartQuery.getAttribute('data-chart-label')
	const chartValue = chartQuery
		.getAttribute('data-chart-value')
		.split(',')
		.map((val) => Number(val))

	const chartInstance = initChart3(chartQuery, baseColor, [
		{
			name: chartLabel,
			data: chartValue,
		},
	])

	chartInstance.render()
})
