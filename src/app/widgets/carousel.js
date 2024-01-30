import 'slick-carousel'
import '@/build/vendors/slick-carousel/styles/slick.scss'

import $ from 'jquery'
import { getPageIsRTL } from '@/app/utilities/widget-helper'

export function initCarousel (mainSelector, navSelector) {
  const isRtl = getPageIsRTL()

  $(mainSelector).slick({
    rtl: isRtl, // Carousel direction
    asNavFor: navSelector, // Make this carousel as navigation for #widget-carousel-nav carousel
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  })

  $(navSelector).slick({
    rtl: isRtl, // Carousel direction
    asNavFor: mainSelector, // Make this carousel as navigation for #widget-carousel carousel
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true
  })
}
