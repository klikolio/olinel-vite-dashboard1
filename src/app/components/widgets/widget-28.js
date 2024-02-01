import { initChart7 } from '@app/widgets/chart-7'

document.addEventListener('DOMContentLoaded', () => {
	const chartInstance = initChart7(
		document.querySelector('#widget-chart-7a'),
		'#29b6f6',
		true,
		[
			{
				name: 'Revenue',
				data: [5400, 3800, 6600, 2800, 9800, 5800],
			},
		],
	)

	chartInstance.render()
})
