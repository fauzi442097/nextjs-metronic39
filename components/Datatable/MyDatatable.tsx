import React, {forwardRef} from 'react'
import DataTable from 'react-data-table-component';
import CustomStyles from './CustomStyles';
import CheckboxTable from './CheckboxTable';

type DatatableProps = {
    columns: Array<object>,
    data: Array<object>,
    pagination?: true,
    striped?: true
    isLoading: boolean,
    [key:string]: any
}

const CaretDownIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" style={{ 
        marginLeft: '8px'
     }} width="16" height="16" fill="currentColor" className="bi bi-sort-down" viewBox="0 0 16 16">
      <path d="M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293V2.5zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"/>
    </svg>
  )
}
const MyDatatable = ({
    columns,
    data,
    pagination,
    striped,
    isLoading,
    ...props
}: DatatableProps) => {
  return (
    <DataTable
        customStyles={CustomStyles}
        columns={columns}
        data={data}
        pagination={pagination}
        striped={striped}
        highlightOnHover
        persistTableHead
        noDataComponent={'Data tidak tersedia'}
        defaultSortFieldId={1}
        progressPending={isLoading}
        progressComponent={'Processing ...'}
        defaultSortAsc={false}
        selectableRowsHighlight={true}
        sortIcon={<CaretDownIcon/>}
        selectableRowsComponent={CheckboxTable}
        {...props}
    />
  )
}

export default MyDatatable