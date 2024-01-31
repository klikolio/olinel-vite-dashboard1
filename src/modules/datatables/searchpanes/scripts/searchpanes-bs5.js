/*! Bootstrap 5 integration for DataTables' SearchPanes
 * © SpryMedia Ltd - datatables.net/license
 */

import jQuery from 'jquery';
import DataTable from 'datatables.net-bs5';

// Allow reassignment of the $ variable
let $ = jQuery;

$.extend(true, DataTable.SearchPane.classes, {
  buttonGroup: 'btn-group',
  disabledButton: 'disabled',
  narrow: 'col',
  pane: {
    container: 'table'
  },
  searchCont: 'dtsp-searchCont input-group',
  paneButton: 'btn btn-icon btn-flat-primary',
  pill: 'badge rounded-pill bg-primary',
  search: 'form-control search',
  table: 'table table-sm table-borderless',
  topRow: 'dtsp-topRow'
});

$.extend(true, DataTable.SearchPanes.classes, {
  clearAll: 'dtsp-clearAll btn btn-flat-primary',
		collapseAll: 'dtsp-collapseAll btn btn-flat-primary',
		container: 'dtsp-searchPanes',
		disabledButton: 'disabled',
		panes: 'dtsp-panes dtsp-panesContainer',
		search: DataTable.SearchPane.classes.search,
		showAll: 'dtsp-showAll btn btn-flat-primary',
		title: 'dtsp-title',
		titleRow: 'dtsp-titleRow'
});

export default DataTable;
