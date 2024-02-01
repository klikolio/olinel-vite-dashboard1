import { initChart1 } from '@app/widgets/chart-1'
import { pageLoadedListener } from '@app/utilities/widget-helper'

pageLoadedListener(() => {
	console.log('testing');
	const chartInstance = initChart1(document.querySelector('#widget-chart-1'), [
		{
			name: 'Revenue',
			data: [6800, 4000, 5200, 1600, 4200, 1200, 8300, 4000, 7000],
		},
	])

	chartInstance.render()
})
