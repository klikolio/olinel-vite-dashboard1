import { initChart7 } from '@app/widgets/chart-7'

const chartInstance = initChart7(
	document.querySelector('#widget-chart-7c'),
	'#ef5350',
	false,
	[
		{
			name: 'Visit',
			data: [560, 400, 480, 340, 780, 640],
		},
	],
)

chartInstance.render()
