import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react'

import { useQuery } from '@tanstack/react-query';
import productService from '@/services/productService';
import PageToolbar, { PageAction, PageTitle } from '@/components/PageToolbar';
import Card from '@/components/Card';
import Dropdown, { DropdownItem } from '@/components/Dropdown';
import Button from '@/components/Button';
import MyDatatable from '@/components/Datatable/MyDatatable';
import Swal from '@/components/Swal';
import { AnimatePresence } from 'framer-motion';
import { TableColumn } from 'react-data-table-component';
import ModalProduct from './modal';


const columns = [
   {
       name: 'Id',
       selector: row => row.id,
       cellExport: row => row.id,
       sortable: true
   },
   {
       name: 'Title',
       selector: row => row.title,
       cellExport: row => row.title,
       sortable: true
   },
   {
      name: 'Description',
      selector: row => row.description,
      cellExport: row => row.description,
      sortable: true,
      compact: true
   },
   {
      name: 'Brand',
      selector: row => row.brand,
      cellExport: row => row.brand,
      sortable: true
   },
   {
      name: 'Rating',
      selector: row => row.rating,
      cellExport: row => row.rating,
      sortable: true,
      right: true,
      compact: true
   },
   {
      name: 'Price',
      selector: row => row.price,
      cellExport: row => row.price,
      sortable: true,
      right: true,
      compact: true
   },
   {
      name: 'Stock',
      selector: row => row.stock,
      cellExport: row => row.stock,
      sortable: true,
      right: true,
      compact: true
   },
   {
      name: 'Disc Pct',
      selector: row => row.discountPercentage,
      cellExport: row => row.discountPercentage,
      sortable: true,
      right: true,
      compact: true
   },
   {
      name: 'Category',
      selector: row => row.category,
      cellExport: row => row.category,
      sortable: true
   },
   {
      cell: (row: object, index: number, column: object, id: string) => {
         return <Button onClick={() => showModal('update', row)} size='sm'> Detail </Button>
      },
      button: true
   }
];


const showModal = async (action: string, row?: object) => {

   if ( action == 'create') {
      $("#title-modal-product").text('Tambah Produk');
   } else {
      const result = await productService.getProduct(row.id);
      console.log(result);
      $("#title-modal-product").text('Update Produk');
   }

   $("#modal-product").modal('show');
   
}

const Customer = () => {


   const [product, setProduct] = useState<Object>({})
   const [showAlert, setShowAlert] = useState<boolean>(false)

   

   
   
   const { data: products, isError, isLoading, error } = useQuery({
      queryKey: ['products'],
      queryFn: productService.getProducts
   });

   if ( isError && error instanceof Error ) return <p> { error.message }</p> 


   console.log(products);

  return (
   <>
      <PageToolbar>
         <PageTitle> Product List </PageTitle>
         <PageAction>
         <button type="button" className="btn btn-light-primary me-3" onClick={() => setShowAlert(true)}>
                           <span className="svg-icon svg-icon-2">
                           </span>
                           Show Alert
                        </button>
                        <button type="button" className="btn btn-primary" onClick={() => showModal('create')}>Add Customer</button>
         </PageAction>
      </PageToolbar>

      <AnimatePresence>
      { showAlert &&  
         <Swal 
            dialogType='confirm'
            type='warning'
            onProcess={() => alert('te')} 
            show={showAlert} 
            setShow={setShowAlert}
            message={'Non aktifkan user ini?'}
            processName={'Non Aktif'}
         />}
      </AnimatePresence>

      <ModalProduct/>


      <div id="kt_app_content" className="app-content flex-column-fluid">
         <div id="kt_app_content_container" className="app-container container-fluid">
            <Card>
               <Card.Body className="table-responsive">
               <MyDatatable
                     columns={columns}
                     data={products}
                     pagination
                     isLoading={isLoading}
                     selectableRows
                     selectableRowsHighlight={true}
                  />
               </Card.Body>
            </Card>
         </div>
      </div>
   </>
  )
}

export default Customer