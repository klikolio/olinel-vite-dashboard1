import DataTables, { Api } from 'datatables.net'

export default DataTables

declare module 'datatables.net' {
	interface ConfigRowGroup {
		enable?: boolean
		dataSrc?: number | string | (number | string)[]
		className?: string
		emptyDataGroup?: string
		endClassName?: string
		endRender?: (rows: Api<any>, group: string) => string | HTMLElement | JQuery
		startClassName?: string
		startRender?: (
			rows: Api<any>,
			group: string,
		) => string | HTMLElement | JQuery
	}
}
