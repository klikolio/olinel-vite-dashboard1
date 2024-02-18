import $ from 'jquery'

export async function initMaxlength() {
  window.jQuery = $

  await import('bootstrap-maxlength')
}
