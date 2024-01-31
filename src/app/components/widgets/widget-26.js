import { initChart5 } from '@app/widgets/chart-5'

const chartInstance = initChart5(document.querySelector('#widget-chart-5'), [
	{
		name: 'Sales',
		data: [400, 640, 200, 620, 320, 980],
	},
])

chartInstance.render()
