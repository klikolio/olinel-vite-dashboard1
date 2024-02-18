import $ from 'jquery'
import Select2 from 'select2'

export async function initSelect2() {
  window.jQuery = $

  Select2(null, $)
}
