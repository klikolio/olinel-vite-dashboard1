export const defaultThemeVariant = 'light'
export const defaultPageDirection = 'ltr'

export function getThemeVariant() {
	return (
		document.documentElement.getAttribute('data-theme') ?? defaultThemeVariant
	)
}

export function getThemeVariantIsDark() {
	return getThemeVariant() === 'dark'
}

export function getPageDirection() {
	return document.documentElement.getAttribute('dir') ?? defaultPageDirection
}

export function getPageIsRTL() {
	return getPageDirection() === 'rtl'
}

export function getBrowserWidth() {
	return (
		window.innerWidth ||
		document.documentElement.clientWidth ||
		document.body.clientWidth
	)
}

export function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

export function formatInt(num) {
	return typeof num === 'string'
		? num.replace(/[$,]/g, '') * 1
		: typeof num === 'number'
			? num
			: 0
}
