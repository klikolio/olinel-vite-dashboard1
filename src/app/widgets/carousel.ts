import 'slick-carousel'
import '@modules/slick-carousel/styles/slick.scss'

import * as $ from 'jquery'
import { getPageIsRTL } from '@app/utilities/widget-helper'

// Initialize carousel widget
export function initCarousel(mainSelector: string, navSelector: string) {
	const isRtl = getPageIsRTL()

	$(mainSelector).slick({
		rtl: isRtl,
		asNavFor: navSelector,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
	})

	$(navSelector).slick({
		rtl: isRtl,
		asNavFor: mainSelector,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		centerMode: true,
	})
}
