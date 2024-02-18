import 'slick-carousel'
import '@modules/slick-carousel/styles/slick.scss'

import $ from 'jquery'
import Handlebars from 'handlebars'
import { getPageIsRTL, pageLoadedListener } from '@app/utilities/widget-helper'

const isRtl = getPageIsRTL()
const defaultOptions = {
  rtl: isRtl, // Set direction
}
const navIcons = {
  prev: `fa fa-angle-${isRtl ? 'right' : 'left'}`,
  next: `fa fa-angle-${isRtl ? 'left' : 'right'}`,
}

const buttonTemplate = Handlebars.compile(
  '<button class="btn btn-info {{extraClassName}}" type="button">{{content}}</button>',
  { noEscape: true },
)

pageLoadedListener(() => {
  $('#slick-1').slick({
    ...defaultOptions,
    prevArrow: buttonTemplate({
      extraClassName: 'slick-prev',
      content: 'Previous',
    }),
    nextArrow: buttonTemplate({
      extraClassName: 'slick-next',
      content: 'Next',
    }),
  })

  $('#slick-2').slick({
    ...defaultOptions,
    slidesToShow: 3,
    slidesToScroll: 2,
    prevArrow: buttonTemplate({
      extraClassName: 'slick-prev',
      content: 'Previous',
    }),
    nextArrow: buttonTemplate({
      extraClassName: 'slick-next',
      content: 'Next',
    }),
  })

  $('#slick-3').slick({
    ...defaultOptions,
    centerMode: true,
    prevArrow: buttonTemplate({
      extraClassName: 'slick-prev-2',
      content: `<i class="${navIcons.prev}"></i>`,
    }),
    nextArrow: buttonTemplate({
      extraClassName: 'slick-next-2',
      content: `<i class="${navIcons.next}"></i>`,
    }),
  })

  $('#slick-4').slick({
    ...defaultOptions,
    prevArrow: buttonTemplate({
      extraClassName: 'slick-prev-3',
      content: `<i class="${navIcons.prev}"></i>`,
    }),
    nextArrow: buttonTemplate({
      extraClassName: 'slick-next-3',
      content: `<i class="${navIcons.next}"></i>`,
    }),
  })

  $('#slick-5').slick({
    ...defaultOptions,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 2,
    prevArrow: buttonTemplate({
      extraClassName: 'slick-prev',
      content: 'Previous',
    }),
    nextArrow: buttonTemplate({
      extraClassName: 'slick-next',
      content: 'Next',
    }),
  })

  $('#slick-6').slick({
    ...defaultOptions,
    dots: true,
    prevArrow: buttonTemplate({
      extraClassName: 'slick-prev',
      content: 'Previous',
    }),
    nextArrow: buttonTemplate({
      extraClassName: 'slick-next',
      content: 'Next',
    }),
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
    prevArrow: buttonTemplate({
      extraClassName: 'slick-prev-2',
      content: `<i class="${navIcons.prev}"></i>`,
    }),
    nextArrow: buttonTemplate({
      extraClassName: 'slick-next-2',
      content: `<i class="${navIcons.next}"></i>`,
    }),
  })
})
