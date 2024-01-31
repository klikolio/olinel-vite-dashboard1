import { initChart4 } from '@/app/widgets/chart-4'

const chartInstance = initChart4(
	document.querySelector('#widget-chart-4'),
	['Progress', 'Done', 'New'],
	[40, 50, 10],
)

chartInstance.render()
