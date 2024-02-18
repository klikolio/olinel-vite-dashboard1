import '@modules/daterangepicker/styles/daterangepicker.scss'

import $ from 'jquery'
import moment from 'moment'
import { getPageIsRTL } from '@app/utilities/widget-helper'
import { initDaterangepicker } from '@app/utilities/daterangepicker-helper'

const direction = getPageIsRTL() ? 'left' : 'right'

initDaterangepicker({
  opens: direction, // Set direction
  cancelButtonClasses: 'btn-outline-danger',
}).then(() => {
  $('#daterangepicker-1').daterangepicker()

  $('#daterangepicker-2').daterangepicker({
    timePicker: true,
  })

  $('#daterangepicker-3').daterangepicker({
    singleDatePicker: true,
    showDropdowns: true,
    timePicker: true,
  })

  $('#daterangepicker-4').daterangepicker({
    startDate: moment().subtract(29, 'days'),
    endDate: moment(),
    ranges: {
      Today: [moment(), moment()],
      Yesterday: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      'Last 7 Days': [moment().subtract(6, 'days'), moment()],
      'Last 30 Days': [moment().subtract(29, 'days'), moment()],
      'This Month': [moment().startOf('month'), moment().endOf('month')],
      'Last Month': [
        moment().subtract(1, 'month').startOf('month'),
        moment().subtract(1, 'month').endOf('month'),
      ],
    },
  })

  $('#daterangepicker-5').daterangepicker({
    minDate: '04/09/2020',
    maxDate: '05/15/2020',
  })

  $('#daterangepicker-6').daterangepicker({
    showWeekNumbers: true,
    timePicker: true,
    ranges: {
      Today: [moment(), moment()],
      Yesterday: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      'Last 7 Days': [moment().subtract(6, 'days'), moment()],
      'Last 30 Days': [moment().subtract(29, 'days'), moment()],
      'This Month': [moment().startOf('month'), moment().endOf('month')],
      'Last Month': [
        moment().subtract(1, 'month').startOf('month'),
        moment().subtract(1, 'month').endOf('month'),
      ],
    },
  })

  $('#daterangepicker-7').daterangepicker({
    locale: {
      format: 'MM/DD/YYYY',
      separator: ' - ',
      applyLabel: 'подать заявление',
      cancelLabel: 'Отмена',
      fromLabel: 'от',
      toLabel: 'в',
      weekLabel: 'н',
      daysOfWeek: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
      monthNames: [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
      ],
      firstDay: 1,
    },
  })
})
