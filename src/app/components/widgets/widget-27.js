import { initChart6 } from '@app/widgets/chart-6'

document.addEventListener('DOMContentLoaded', () => {
	const chartInstance = initChart6(document.querySelector('#widget-chart-6'), [
		{
			name: 'Unique',
			data: [7000, 9600, 7200, 8800, 6200, 7600, 4000, 6400],
		},
	])

	chartInstance.render()
})
