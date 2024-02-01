import merge from 'deepmerge'
import { getThemeVariant } from './widget-helper'

export const chartFontFamily = 'Poppins, sans-serif'
export const chartColorScheme = {
	blue: '#29b6f6',
	indigo: '#5c6bc0',
	purple: '#ab47bc',
	pink: '#ec407a',
	red: '#ef5350',
	orange: '#ffa726',
	yellow: '#ffee58',
	green: '#66bb6a',
	teal: '#26a69a',
	cyan: '#26c6da',
	white: '#fff',
	gray100: '#F5F5F5',
	gray200: '#eeeeee',
	gray300: '#e0e0e0',
	gray400: '#bdbdbd',
	gray500: '#9e9e9e',
	gray600: '#757575',
	gray700: '#616161',
	gray800: '#424242',
	gray900: '#212121',
}

export const chartPalette = [
	chartColorScheme.blue,
	chartColorScheme.green,
	chartColorScheme.cyan,
	chartColorScheme.red,
	chartColorScheme.purple,
]

export const chartTextLevel = {
	light: {
		1: chartColorScheme.gray600,
		2: chartColorScheme.gray700,
		3: chartColorScheme.gray800,
		4: chartColorScheme.gray900,
	},
	dark: {
		1: chartColorScheme.gray300,
		2: chartColorScheme.gray200,
		3: chartColorScheme.gray100,
		4: chartColorScheme.white,
	},
}

export const chartBgLevel = {
	light: {
		1: chartColorScheme.white,
		2: chartColorScheme.gray100,
		3: chartColorScheme.gray200,
		4: chartColorScheme.gray300,
	},
	dark: {
		1: chartColorScheme.gray800,
		2: chartColorScheme.gray700,
		3: chartColorScheme.gray600,
		4: chartColorScheme.gray500,
	},
}

export const chartBorderColor = {
	light: chartColorScheme.gray100,
	dark: chartColorScheme.gray700,
}

export const apexchartsNormalization = () => {
	const themeVariant = getThemeVariant()

	return {
		colors: chartPalette,
		chart: {
			foreColor: chartTextLevel[themeVariant][2],
			fontFamily: chartFontFamily,
			selection: {
				fill: {
					color: chartTextLevel[themeVariant][2],
				},
				stroke: {
					color: chartTextLevel[themeVariant][1],
				},
			},
		},
		plotOptions: {
			bar: {
				dataLabels: {
					total: {
						style: {
							color: chartTextLevel[themeVariant][1],
							fontSize: '12px',
						},
					},
				},
			},
			boxPlot: {
				colors: {
					upper: chartColorScheme.green,
					lower: chartColorScheme.blue,
				},
			},
			radialBar: {
				track: {
					background: chartBgLevel[themeVariant][2],
				},
				dataLabels: {
					name: {
						fontSize: '16px',
						fontWeight: 600,
					},
					value: {
						fontSize: '14px',
						fontWeight: 400,
					},
					total: {
						fontSize: '16px',
						fontWeight: 600,
					},
				},
				barLabels: {
					fontSize: '16px',
					fontWeight: 600,
				},
			},
			pie: {
				donut: {
					labels: {
						name: {
							fontSize: '16px',
							fontWeight: 600,
						},
						value: {
							fontSize: '20px',
							fontWeight: 400,
						},
						total: {
							fontSize: '16px',
							fontWeight: 400,
						},
					},
				},
			},
			polarArea: {
				rings: {
					strokeColor: chartBgLevel[themeVariant][4],
				},
				spokes: {
					connectorColors: chartBgLevel[themeVariant][4],
				},
			},
			radar: {
				polygons: {
					strokeColors: chartBgLevel[themeVariant][4],
					connectorColors: chartBgLevel[themeVariant][4],
				},
			},
		},
		dataLabels: {
			style: {
				fontSize: '12px',
				fontWeight: 600,
			},
		},
		legend: {
			fontSize: '12px',
			fontWeight: 400,
		},
		noData: {
			style: {
				fontSize: '14px',
			},
		},
		title: {
			style: {
				fontSize: '14px',
				fontWeight: 600,
			},
		},
		subtitle: {
			style: {
				fontSize: '12px',
				fontWeight: 400,
			},
		},
		tooltip: {
			style: {
				fontSize: '12px',
			},
		},
		xaxis: {
			labels: {
				style: {
					fontSize: '12px',
					fontWeight: 400,
				},
			},
			group: {
				style: {
					fontSize: '12px',
					fontWeight: 400,
				},
			},
			axisBorder: {
				color: chartBgLevel[themeVariant][3],
			},
			axisTicks: {
				color: chartBgLevel[themeVariant][3],
			},
			title: {
				style: {
					fontSize: '12px',
					fontWeight: 600,
				},
			},
			crosshairs: {
				stroke: {
					color: chartBgLevel[themeVariant][4],
				},
			},
			tooltip: {
				style: {
					fontSize: '12px',
				},
			},
		},
		yaxis: {
			labels: {
				style: {
					fontSize: '12px',
					fontWeight: 400,
				},
			},
			axisBorder: {
				color: chartBgLevel[themeVariant][3],
			},
			axisTicks: {
				color: chartBgLevel[themeVariant][3],
			},
			title: {
				style: {
					fontSize: '12px',
					fontWeight: 600,
				},
			},
			crosshairs: {
				stroke: {
					color: chartBgLevel[themeVariant][4],
				},
			},
		},
		theme: {
			mode: getThemeVariant(),
			monochrome: {
				color: chartColorScheme.blue,
			},
		},
	}
}

export const currencyFormatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
	minimumFractionDigits: 0,
})

export function normalizeApexchartsOptions(extraOptions) {
	return merge(apexchartsNormalization(), extraOptions ?? {})
}
