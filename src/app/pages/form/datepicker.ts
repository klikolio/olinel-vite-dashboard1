import 'bootstrap-datepicker'
import '@modules/bootstrap-datepicker/styles/bootstrap-datepicker.scss'

import $ from 'jquery'
import { getPageIsRTL } from '@app/utilities/widget-helper'

const orientation: DatepickerOrientations = getPageIsRTL()
  ? 'auto right'
  : 'auto left'

// Set default plugin configuration
const defaultOptions = {
  orientation,
  templates: {
    leftArrow: ' ',
    rightArrow: ' ',
  },
}

$('#datepicker-1').datepicker({
  ...defaultOptions,
  autoclose: true,
})

$('#datepicker-2').datepicker({
  ...defaultOptions,
  todayHighlight: true,
})

$('#datepicker-3').datepicker({
  ...defaultOptions,
  todayBtn: 'linked',
  clearBtn: true,
  todayHighlight: true,
})

$('#datepicker-4').datepicker({
  ...defaultOptions,
  multidate: true,
  multidateSeparator: ', ',
  todayHighlight: true,
})

$('#datepicker-5').datepicker({
  ...defaultOptions,
  daysOfWeekDisabled: '0',
  daysOfWeekHighlighted: '3,4',
  todayHighlight: true,
})

$('#datepicker-6').datepicker({
  ...defaultOptions,
  calendarWeeks: true,
})

$('.input-daterange').datepicker({
  ...defaultOptions,
  todayHighlight: true,
})

$('#datepicker-7').datepicker({
  ...defaultOptions,
  language: 'ru',
})

$('#datepicker-8').datepicker({
  ...defaultOptions,
  todayHighlight: true,
})
