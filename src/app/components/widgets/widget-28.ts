import { initChart7 } from '@app/widgets/chart-7'
import { pageLoadedListener } from '@app/utilities/widget-helper'

pageLoadedListener(() => {
	const chartInstance = initChart7(
		document.querySelector('#widget-chart-7a'),
		[
			{
				name: 'Revenue',
				data: [5400, 3800, 6600, 2800, 9800, 5800],
			},
		],
		'#29b6f6',
		true,
	)

	chartInstance.render()
})
