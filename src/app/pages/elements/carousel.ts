import 'slick-carousel'
import '@modules/slick-carousel/styles/slick.scss'

import $ from 'jquery'
import { getPageIsRTL } from '@app/utilities/widget-helper'

const isRtl = getPageIsRTL()
const navIcons = {
	prev: `fa fa-angle-${isRtl ? 'right' : 'left'}`,
	next: `fa fa-angle-${isRtl ? 'left' : 'right'}`,
}
const defaultOptions = {
	rtl: isRtl, // Set direction
}

$('#slick-1').slick({
	...defaultOptions,
	prevArrow:
		'<button class="btn btn-flat-primary slick-prev" type="button">Previous</button>',
	nextArrow:
		'<button class="btn btn-flat-primary slick-next" type="button">Next</button>',
})

$('#slick-2').slick({
	...defaultOptions,
	slidesToShow: 3,
	slidesToScroll: 2,
	prevArrow:
		'<button class="btn btn-flat-primary slick-prev" type="button">Previous</button>',
	nextArrow:
		'<button class="btn btn-flat-primary slick-next" type="button">Next</button>',
})

$('#slick-3').slick({
	...defaultOptions,
	centerMode: true,
	prevArrow: `
    <button type="button" class="btn btn-flat-primary slick-prev-2">
      <i class="${navIcons.prev}"></i>
    </button>
  `,
	nextArrow: `
    <button type="button" class="btn btn-flat-primary slick-next-2">
      <i class="${navIcons.next}"></i>
    </button>
  `,
})

$('#slick-4').slick({
	...defaultOptions,
	prevArrow: `
    <button type="button" class="btn btn-flat-primary slick-prev-3">
      <i class="${navIcons.prev}"></i>
    </button>
  `,
	nextArrow: `
    <button type="button" class="btn btn-flat-primary slick-next-3">
      <i class="${navIcons.next}"></i>
    </button>
  `,
})

$('#slick-5').slick({
	...defaultOptions,
	autoplay: true,
	autoplaySpeed: 1000,
	slidesToShow: 2,
	prevArrow:
		'<button class="btn btn-flat-primary slick-prev" type="button">Previous</button>',
	nextArrow:
		'<button class="btn btn-flat-primary slick-next" type="button">Next</button>',
})

$('#slick-6').slick({
	...defaultOptions,
	dots: true,
	prevArrow:
		'<button class="btn btn-flat-primary slick-prev" type="button">Previous</button>',
	nextArrow:
		'<button class="btn btn-flat-primary slick-next" type="button">Next</button>',
})

$('#slick-7-main').slick({
	...defaultOptions,
	arrows: false,
	asNavFor: '#slick-7-nav',
})

$('#slick-7-nav').slick({
	...defaultOptions,
	centerMode: true,
	slidesToShow: 3,
	asNavFor: '#slick-7-main',
	focusOnSelect: true,
	prevArrow: `
    <button type="button" class="btn btn-flat-primary slick-prev-2">
      <i class="${navIcons.prev}"></i>
    </button>
  `,
	nextArrow: `
    <button type="button" class="btn btn-flat-primary slick-next-2">
      <i class="${navIcons.next}"></i>
    </button>
  `,
})
