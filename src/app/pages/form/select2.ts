import '@modules/select2/styles/select2.scss'

import $ from 'jquery'
import { getPageIsRTL } from '@app/utilities/widget-helper'
import { initSelect2 } from '@app/utilities/select2-helper'
import type { Options } from 'select2'

const direction = getPageIsRTL() ? 'rtl' : 'ltr'
const defaultOptions: Options = {
  dir: direction, // Set the direction
}

initSelect2().then(() => {
  $('#select2-1, #select2-2').select2({
    ...defaultOptions,
    dropdownAutoWidth: true,
  })

  $('#select2-3').select2({
    ...defaultOptions,
    dropdownAutoWidth: true,
    placeholder: 'Select multiple',
    allowClear: true,
  })

  $('#select2-4').select2({
    ...defaultOptions,
    dropdownAutoWidth: true,
    minimumResultsForSearch: Infinity,
  })

  $('#select2-5').select2({
    ...defaultOptions,
    dropdownAutoWidth: true,
    placeholder: 'Select a state',
    allowClear: true,
  })

  $('#select2-6').select2({
    ...defaultOptions,
    dropdownAutoWidth: true,
    placeholder: 'Disabled element',
    allowClear: true,
  })

  $('#select2-7').select2({
    ...defaultOptions,
    dropdownAutoWidth: true,
    placeholder: 'Disabled options',
    allowClear: true,
  })

  $('#select2-8').select2({
    ...defaultOptions,
    dropdownAutoWidth: true,
    placeholder: 'Select two or less items',
    allowClear: true,
    maximumSelectionLength: 2,
  })

  $('#select2-9').select2({
    ...defaultOptions,
    dropdownAutoWidth: true,
    placeholder: 'Add a tag',
    tags: true,
  })
})
