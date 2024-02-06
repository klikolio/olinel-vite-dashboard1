import { initCarousel } from '@app/widgets/carousel'
import { pageLoadedListener } from '@app/utilities/widget-helper'

pageLoadedListener(() => {
	initCarousel('#widget-carousel', '#widget-carousel-nav')
})
