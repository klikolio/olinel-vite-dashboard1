import 'slick-carousel'
import $ from 'jquery'
import { getPageDirection } from '../utilities/widget-helper'

export function initCarousel(mainSelector, navSelector) {
  const isRtl = getPageDirection() === "rtl"

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