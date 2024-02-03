import merge from 'deepmerge'

export type pageDirectionType = 'ltr' | 'rtl' | string
export type themeVariantType = 'light' | 'dark' | string
export type themeObject = Record<themeVariantType, object | string>
export type themeObjectLevel = Record<themeVariantType, Record<number, string>>

export const defaultThemeVariant: themeVariantType = 'light'
export const defaultPageDirection: pageDirectionType = 'ltr'

export function getThemeVariant(): themeVariantType {
	return (
		document.documentElement.getAttribute('data-theme') ?? defaultThemeVariant
	)
}

export function getThemeVariantIsDark(): boolean {
	return getThemeVariant() === 'dark'
}

export function getPageDirection(): pageDirectionType {
	return document.documentElement.getAttribute('dir') ?? defaultPageDirection
}

export function getPageIsRTL(): boolean {
	return getPageDirection() === 'rtl'
}

export function getBrowserWidth(): number {
	return (
		window.innerWidth ||
		document.documentElement.clientWidth ||
		document.body.clientWidth
	)
}

export function getRandomNumber(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

export function formatInt(num: any) {
	return typeof num === 'string'
		? Number(num.replace(/[$,]/g, '')) * 1
		: typeof num === 'number'
			? num
			: 0
}

export function pageLoadedListener(callback: () => void) {
	const preloadEventKey = 'hidden.preload'
	const preloadActiveClass = 'preload-active'
	const preloadElement = document.querySelector('.preload')

	if (preloadElement || document.body.classList.contains(preloadActiveClass)) {
		document.addEventListener(preloadEventKey, callback)
	} else {
		document.addEventListener('DOMContentLoaded', callback)
	}
}

export function concatOptions(defaultOptions: object, extraOptions?: object) {
	if (extraOptions) {
		return merge(defaultOptions, extraOptions)
	} else {
		return defaultOptions
	}
}

export const currencyFormatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
	minimumFractionDigits: 0,
})
