import '@modules/simplebar/styles/simplebar.scss'
import SimpleBar from 'simplebar'

const dropdownQuery = '.dropdown'
const simplebarQuery = '[data-toggle="simplebar"]'

function initDropdownSimplebar() {
	document.querySelectorAll(dropdownQuery).forEach((dropdownElement) => {
		dropdownElement.addEventListener('show.bs.dropdown', () => {
			document.querySelectorAll(simplebarQuery).forEach((simplebarElement) => {
				new SimpleBar(simplebarElement)
			})
		})
	})
}

initDropdownSimplebar()
