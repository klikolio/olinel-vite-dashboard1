import Portlet from '@modules/bootstrap/scripts/portlet'

document.querySelectorAll('.portlet').forEach((portletElement) => {
	const portletInstance = new Portlet(portletElement)

	portletElement
		.querySelectorAll('[data-toggle="portlet"]')
		.forEach((toggleElement) => {
			const behavior = toggleElement.getAttribute('data-behavior')

			toggleElement.addEventListener('click', () => {
				switch (behavior) {
					case 'toggleCollapse':
						portletInstance.toggleCollapse()
						break
					case 'destroy':
						portletInstance.destroy()
						break
				}
			})
		})
})
