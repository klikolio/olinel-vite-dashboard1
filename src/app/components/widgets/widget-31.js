import { initChart9 } from '@app/widgets/chart-9'

const chartInstance = initChart9(
	document.querySelector('#widget-chart-9a'),
	'#29b6f6',
	[
		{
			name: 'Users',
			data: [400, 640, 520, 760, 640, 980],
		},
	],
)

chartInstance.render()
