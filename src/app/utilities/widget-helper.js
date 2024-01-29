export const defaultThemeVariant = 'light'

export const colorScheme = {
  blue: '#29b6f6',
  green: '#66bb6a',
  red: '#ef5350',
  cyan: '#26c6da',
  white: '#fff',
  black: '#424242'
}

export const chartThemeOptions = {
  light: {
    theme: {
      mode: "light",
      palette: "palette1"
    }
  },
  dark: {
    theme: {
      mode: "dark",
      palette: "palette1"
    }
  }
}

export const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0
})

export function getThemeVariant() {
  return document.documentElement.getAttribute('data-theme') ?? defaultThemeVariant
}

export function getThemeVariantIsDark() {
  return getThemeVariant() === 'dark'
}

export function getChartThemeOptions() {
  const themeVariant = getThemeVariant()

  return chartThemeOptions[themeVariant]
}
