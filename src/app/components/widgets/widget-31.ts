import { initChart9 } from '@app/widgets/chart-9'
import { pageLoadedListener } from '@app/utilities/widget-helper'

pageLoadedListener(() => {
	const chartInstance = initChart9(
		document.querySelector('#widget-chart-9a'),
		[
			{
				name: 'Users',
				data: [400, 640, 520, 760, 640, 980],
			},
		],
		'#29b6f6',
	)

	chartInstance.render()
})
