import { initChart7 } from '@app/widgets/chart-7'
import { pageLoadedListener } from '@app/utilities/widget-helper'

pageLoadedListener(() => {
	const chartInstance = initChart7(
		document.querySelector('#widget-chart-7b'),
		'#66bb6a',
		false,
		[
			{
				name: 'Order',
				data: [4000, 2000, 3600, 2800, 6200, 4000],
			},
		],
	)

	chartInstance.render()
})
