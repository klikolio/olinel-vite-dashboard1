import '@modules/simplebar/styles/simplebar.scss'
import SimpleBar from 'simplebar'

export function initDropdownSimplebar() {
	const dropdownQuery = '.dropdown'
	const simplebarQuery = '[data-toggle="simplebar"]'

	document.querySelectorAll(dropdownQuery).forEach((dropdownElement) => {
		dropdownElement.addEventListener('show.bs.dropdown', () => {
			document.querySelectorAll(simplebarQuery).forEach((simplebarElement) => {
				new SimpleBar(simplebarElement as HTMLElement)
			})
		})
	})
}

initDropdownSimplebar()
