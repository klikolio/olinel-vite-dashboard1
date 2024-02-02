export function apexchartsDisabledDefaultCSS() {
	const styleId = 'apexcharts-css'
	const styleElement = document.querySelector(`#${styleId}`)

	if (styleElement) {
		styleElement.innerHTML = ''
	} else {
		const newStyleElement = document.createElement('style')

		newStyleElement.id = styleId

		document.head.appendChild(newStyleElement)
	}
}

apexchartsDisabledDefaultCSS()
