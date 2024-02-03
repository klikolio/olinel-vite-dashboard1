import DataTables, { Api } from 'datatables.net'

export default DataTables

declare module 'datatables.net' {
	interface ButtonCollection {
		collectionTitle: string
	}

	interface ButtonConfig extends ButtonConfigCommon {
		buttons?: (ButtonConfig | ButtonCollection)[]
	}
}
