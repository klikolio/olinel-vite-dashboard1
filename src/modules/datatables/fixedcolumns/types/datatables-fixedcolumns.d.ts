import DataTables, { Api } from 'datatables.net'

export default DataTables

declare module 'datatables.net' {
	interface Config {
		fixedColumns?: boolean | FixedColumnsSettings
	}

	interface Api {
		fixedColumns(): FixedColumnsMethods | Api
	}
}
