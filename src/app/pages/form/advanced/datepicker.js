import '@/build/vendors/bootstrap-datepicker/styles/bootstrap-datepicker.scss'
import 'bootstrap-datepicker'

import $ from 'jquery'
import { getPageIsRTL } from '@/app/utilities/widget-helper'

const orientation = getPageIsRTL() ? 'right' : 'left'

$.fn.datepicker.defaults.templates = {
	leftArrow: ' ',
	rightArrow: ' ',
}

$('#datepicker-1').datepicker({
	orientation, // Set dropdown direction
	autoclose: true,
})

$('#datepicker-2').datepicker({
	orientation, // Set dropdown direction
	todayHighlight: true,
})

$('#datepicker-3').datepicker({
	orientation, // Set dropdown direction
	todayBtn: 'linked',
	clearBtn: true,
	todayHighlight: true,
})

$('#datepicker-4').datepicker({
	orientation, // Set dropdown direction
	multidate: true,
	multidateSeparator: ', ',
	todayHighlight: true,
})

$('#datepicker-5').datepicker({
	orientation, // Set dropdown direction
	daysOfWeekDisabled: '0',
	daysOfWeekHighlighted: '3,4',
	todayHighlight: true,
})

$('#datepicker-6').datepicker({
	orientation, // Set dropdown direction
	calendarWeeks: true,
})

$('.input-daterange').datepicker({
	orientation, // Set dropdown direction
	todayHighlight: true,
})

$('#datepicker-7').datepicker({
	orientation, // Set dropdown direction
	language: 'ru',
})

$('#datepicker-8').datepicker({
	orientation, // Set dropdown direction
	todayHighlight: true,
})
