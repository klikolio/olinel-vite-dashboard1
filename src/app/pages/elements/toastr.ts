import '@modules/toastr/styles/toastr.scss'

import toastr from 'toastr'

let i = -1
let toastCount = 0
let toastLastElement: any

// Array of dummy messages
const msgs = [
	'My name is Inigo Montoya. You killed my father. Prepare to die!',
	`<div>
      <input class="form-control mb-2" placeholder="Input text" >
      <a href="//google.com" target="_blank">This is a hyperlink</a>
    </div>
    <div>
      <button type="button" class="btn btn-primary okBtn mr-1 mt-2">Close me</button>
      <button type="button" class="btn btn-text-light surpriseBtn mt-2">Surprise me</button>
    </div>`,
	'Are you the six fingered man?',
	'Inconceivable!',
	'I do not think that means what you think it means.',
	'Have fun storming the castle!',
]

// Get string from message array by index
function getMessage() {
	i++
	i = i === msgs.length ? 0 : i

	return msgs[i]
}

// Add clear button to message string
function getMessageWithClearButton(msg: string) {
	msg = msg || 'Clear it self?'
	msg +=
		'<br><button type="button" class="btn btn-primary clear mt-2">Close</button>'

	return msg
}

// Get radio value
function getRadioValue(groupSelector: string) {
	return Array.from(
		document
			.querySelector(groupSelector)
			?.querySelectorAll<HTMLInputElement>('input[type="radio"]') ?? [],
	).find((radioElement) => radioElement?.checked)?.value
}

// Show toastr handler
document.querySelector('#showtoast')?.addEventListener('click', () => {
	// Get all options
	const shortCutFunction = getRadioValue('#toastTypeGroup') as ToastrType
	let msg =
		document.querySelector<HTMLTextAreaElement>('#message')?.value ||
		getMessage()
	const title = document.querySelector<HTMLInputElement>('#title')?.value || ''
	const showDuration =
		document.querySelector<HTMLInputElement>('#showDuration')?.value
	const hideDuration =
		document.querySelector<HTMLInputElement>('#hideDuration')?.value
	const timeOut = document.querySelector<HTMLInputElement>('#timeOut')?.value
	const extendedTimeOut =
		document.querySelector<HTMLInputElement>('#extendedTimeOut')?.value
	const showEasing =
		document.querySelector<HTMLSelectElement>('#showEasing')?.value
	const hideEasing =
		document.querySelector<HTMLSelectElement>('#hideEasing')?.value
	const showMethod =
		document.querySelector<HTMLSelectElement>('#showMethod')?.value
	const hideMethod =
		document.querySelector<HTMLSelectElement>('#hideMethod')?.value
	const addBehaviorToastClick = document.querySelector<HTMLInputElement>(
		'#addBehaviorOnToastClick',
	)?.checked
	const addClear =
		document.querySelector<HTMLInputElement>('#addClear')?.checked

	// Increase index
	const toastIndex = toastCount++

	// Set toastr configuration
	toastr.options = {
		closeButton:
			document.querySelector<HTMLInputElement>('#closeButton')?.checked,
		debug: document.querySelector<HTMLInputElement>('#debugInfo')?.checked,
		newestOnTop:
			document.querySelector<HTMLInputElement>('#newestOnTop')?.checked,
		progressBar:
			document.querySelector<HTMLInputElement>('#progressBar')?.checked,
		positionClass: getRadioValue('#positionGroup') || 'toast-top-right',
		preventDuplicates:
			document.querySelector<HTMLInputElement>('#preventDuplicates')?.checked,
		onclick: () => {},
	}

	// Add toastr click behavior if enabled
	if (addBehaviorToastClick) {
		toastr.options.onclick = () => {
			alert('You can perform some custom action after a toast goes away')
		}
	}

	// Set duration of showing if enabled
	if (showDuration?.length) {
		toastr.options.showDuration = parseInt(showDuration)
	}

	// Set duration of hiding if enabled
	if (hideDuration?.length) {
		toastr.options.hideDuration = parseInt(hideDuration)
	}

	// Set timeout duration for toastr if enabled
	if (timeOut?.length) {
		toastr.options.timeOut = addClear ? 0 : parseInt(timeOut)
	}

	// Set extra timeout duration if enabled
	if (extendedTimeOut?.length) {
		toastr.options.extendedTimeOut = addClear ? 0 : parseInt(extendedTimeOut)
	}

	// Set show easing if enabled
	if (showEasing?.length) {
		toastr.options.showEasing = showEasing
	}

	// Set hide easing if enabled
	if (hideEasing?.length) {
		toastr.options.hideEasing = hideEasing
	}

	// Set show method if enabled
	if (showMethod?.length) {
		toastr.options.showMethod = showMethod
	}

	// Set hide method if enabled
	if (hideMethod?.length) {
		toastr.options.hideMethod = hideMethod
	}

	// Add clear button to toastr message if enabled
	if (addClear) {
		msg = getMessageWithClearButton(msg)
		toastr.options.tapToDismiss = false
	}

	// Set toastr command and configuration code to variables
	const optionText = `toastr.options = ${JSON.stringify(toastr.options, null, 4)}`
	const commandText = `toastr.${shortCutFunction}(\`${msg}\`${title ? ', "' + title + '"' : ''})`

	// Show the code
	const codeSampleElement =
		document.querySelector<HTMLElement>('#toastrOptions')

	if (codeSampleElement) {
		codeSampleElement.innerHTML = `${optionText}\n\n${commandText}`
	}

	// Execute toastr
	const toastElement = toastr[shortCutFunction](msg, title)

	// Save the last toastr object
	toastLastElement = toastElement

	// Break if found error
	if (typeof toastElement === 'undefined') {
		return
	}

	// Add behavior to additional buttons
	if (toastElement.find('.okBtn').length) {
		toastElement.delegate('.okBtn', 'click', () => {
			alert(`you clicked me. i was toast #${toastIndex}. goodbye!`)
			toastElement.remove()
		})
	}

	if (toastElement.find('.surpriseBtn').length) {
		toastElement.delegate('.surpriseBtn', 'click', () => {
			alert(
				`Surprise! you clicked me. i was toast #${toastIndex}. You could perform an action here.`,
			)
		})
	}

	if (toastElement.find('.clear').length) {
		toastElement.delegate('.clear', 'click', () => {
			toastr.clear(toastElement, { force: true })
		})
	}
})

// Clear last toastr element handler
document.querySelector('#clearlasttoast')?.addEventListener('click', () => {
	toastr.clear(toastLastElement)
})

// Clear all toastr elements handler
document.querySelector('#cleartoasts')?.addEventListener('click', () => {
	toastr.clear()
})
