import 'bootstrap-datepicker'
import '@modules/bootstrap-datepicker/styles/bootstrap-datepicker.scss'

import $ from 'jquery'
import { getPageIsRTL } from '@app/utilities/widget-helper'

const orientation = getPageIsRTL() ? 'right' : 'left'

// Set default plugin configuration
$.fn.datepicker.defaults.templates = {
	leftArrow: ' ',
	rightArrow: ' ',
}

$('#datepicker-1').datepicker({
	orientation,
	autoclose: true,
})

$('#datepicker-2').datepicker({
	orientation,
	todayHighlight: true,
})

$('#datepicker-3').datepicker({
	orientation,
	todayBtn: 'linked',
	clearBtn: true,
	todayHighlight: true,
})

$('#datepicker-4').datepicker({
	orientation,
	multidate: true,
	multidateSeparator: ', ',
	todayHighlight: true,
})

$('#datepicker-5').datepicker({
	orientation,
	daysOfWeekDisabled: '0',
	daysOfWeekHighlighted: '3,4',
	todayHighlight: true,
})

$('#datepicker-6').datepicker({
	orientation,
	calendarWeeks: true,
})

$('.input-daterange').datepicker({
	orientation,
	todayHighlight: true,
})

$('#datepicker-7').datepicker({
	orientation,
	language: 'ru',
})

$('#datepicker-8').datepicker({
	orientation,
	todayHighlight: true,
})
