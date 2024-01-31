import { initChart9 } from '@app/widgets/chart-9'

const chartInstance = initChart9(
	document.querySelector('#widget-chart-9b'),
	'#fff',
	[
		{
			name: 'Visit',
			data: [320, 450, 360, 560, 440, 480],
		},
	],
)

chartInstance.render()
