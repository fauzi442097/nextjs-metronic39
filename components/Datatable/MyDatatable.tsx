import React from 'react'

import CustomStyles from './CustomStyles';
import CheckboxTable from './CheckboxTable';
import dynamic from 'next/dynamic';

const DataTable = dynamic(() => import('react-data-table-component'), {ssr: false})
// @ts-ignore
const DataTableExtensions = dynamic(() => import('react-data-table-component-extensions'), {ssr: false})


type DatatableProps = {
    columns: Array<object>,
    data: Array<object>,
    pagination?: true,
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

const LoadingData = () => {
  return (
    <div className='sc-dkrFOg iSAVrt rdt_TableHeadRow'>
      <div className='rdt_TableCol'> 1 </div>
      <div className='rdt_TableCol'> 2 </div>
      <div className='rdt_TableCol'> 3 </div>
      <div className='rdt_TableCol'> 4 </div>
      <div className='rdt_TableCol'> 5 </div>
    </div>
  )
}

const MyDatatable = ({
    columns,
    data,
    pagination,
    isLoading,
    ...props
}: DatatableProps) => {

  return (
    <div className='position-relative'>
      {/* @ts-ignore */}
      <DataTableExtensions
          columns={columns}
          data={data}
          print={true}
          export={true}
          filterPlaceholder={'Cari Data'}
        >
          <DataTable
              customStyles={CustomStyles}
              pagination={pagination}
              highlightOnHover
              persistTableHead
              noDataComponent={'Data tidak tersedia'}
              defaultSortFieldId={1}
              progressPending={isLoading}
              progressComponent={'Processing ...'}
              defaultSortAsc={false}
              sortIcon={<CaretDownIcon/>}
              //@ts-ignore
              selectableRowsComponent={CheckboxTable}
              fixedHeader
              {...props}
          />
      </DataTableExtensions>
    </div>
  )
}

export default MyDatatable