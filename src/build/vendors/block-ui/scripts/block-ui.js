$(function() {
  $.blockUI.defaults = Object.assign($.blockUI.defaults, {
    message: '<span class="blockUI blockTitle">Please wait...</span>',
    css: {},
    themedCSS: {},
    overlayCSS:  {},
    growlCSS: {},
  });
});