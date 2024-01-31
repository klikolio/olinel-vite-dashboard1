import { initChart8 } from '@app/widgets/chart-8'

const chartInstance = initChart8(document.querySelector('#widget-chart-8'), [
	{
		name: 'Profit',
		data: [4400, 5500, 5700, 5600, 6100, 5800, 6300, 6000],
	},
	{
		name: 'Revenue',
		data: [7600, 8500, 10100, 9800, 8700, 10500, 9100, 11400],
	},
	{
		name: 'Free Cash',
		data: [3500, 4100, 3600, 2600, 4500, 4800, 5200, 5300],
	},
])

chartInstance.render()
