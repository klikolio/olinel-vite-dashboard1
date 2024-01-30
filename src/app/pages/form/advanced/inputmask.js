import Inputmask from 'inputmask'

new Inputmask({
  mask: '99/99/9999',
  placeholder: 'mm/dd/yyyy'
}).mask(document.querySelector('#inputmask-1'))

new Inputmask({
  mask: '(999) 999-9999'
}).mask(document.querySelector('#inputmask-2'))

new Inputmask({
  mask: '99-9999999',
  placeholder: ''
}).mask(document.querySelector('#inputmask-3'))

new Inputmask({
  mask: '9',
  repeat: 10,
  greedy: false
}).mask(document.querySelector('#inputmask-4'))

new Inputmask({
  mask: '$ 999.999.999,99',
  numericInput: true
}).mask(document.querySelector('#inputmask-5'))

new Inputmask({
  mask: '999.999.999.999'
}).mask(document.querySelector('#inputmask-6'))

new Inputmask({
  mask: '*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]',
  greedy: false,
  onBeforePaste: val => val.toLowerCase().replace('mailto:', ''), // Clean email string
  definitions: {
    '*': {
      validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",
      cardinality: 1,
      casing: 'lower'
    }
  }
}).mask(document.querySelector('#inputmask-7'))