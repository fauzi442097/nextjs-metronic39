import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react'

import { useQuery } from '@tanstack/react-query';
import productService from '@/services/productService';
import PageToolbar, { PageAction, PageTitle } from '@/components/PageToolbar';
import Card from '@/components/Card';
import Dropdown, { DropdownItem } from '@/components/Dropdown';
import dynamic from 'next/dynamic';
import Button from '@/components/Button';
import MyDatatable from '@/components/Datatable/MyDatatable';
import Swal from '@/components/Swal';
import { AnimatePresence } from 'framer-motion';
import { TableColumn } from 'react-data-table-component';



const Modal = dynamic(() => import('@/components/Modal'), {ssr: false})
const ModalHeader = dynamic(() => import('@/components/Modal').then(module => module.ModalHeader), {ssr: false})
const ModalBody = dynamic(() => import('@/components/Modal').then(module => module.ModalBody), {ssr: false})
const ModalFooter = dynamic(() => import('@/components/Modal').then(module => module.ModalFooter), {ssr: false})



const columns: TableColumn[] = [
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
         return <Button onClick={() => showProduct(row, index, column, id)} size='sm'> Detail </Button>
      },
      button: true
   }
];


const showProduct = async (row: object, index: number, column: object, id: string) => {
   console.log(row);
   console.log(index);
   console.log(column);
   console.log(id);

   const result = await productService.getProduct(row.id);
   console.log(result);
   // setProduct(result);
   $("#modal-product").modal('show');
}


const Customer = () => {


   const [product, setProduct] = useState<Object>({})
   const [showAlert, setShowAlert] = useState<boolean>(false)

   console.log('render');
   
   
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
                        <button type="button" className="btn btn-primary" onClick={() => showProduct('1')}>Add Customer</button>
         </PageAction>
      </PageToolbar>

         <Modal id="modal-product">
            <ModalHeader> <h5> Product </h5></ModalHeader>
            <ModalBody> Tes </ModalBody>
            <ModalFooter>
                  <Button.Custom
                     className="btn-light"
                     data-bs-dismiss="modal"
                     > Close </Button.Custom>
                  <Button> Save changes </Button>
            </ModalFooter>
         </Modal>


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

                  {/* <table className="table align-middle table-row-dashed fs-6 gy-5" id="kt_customers_table">
                     <thead>
                        <tr className="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
                           <th className="w-10px pe-2">
                           <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
                              <input className="form-check-input" type="checkbox" data-kt-check="true" data-kt-check-target="#kt_customers_table .form-check-input" defaultValue={1} />
                           </div>
                           </th>
                           <th className="min-w-125px">Title</th>
                           <th className="min-w-125px">Brand</th>
                           <th className="min-w-125px">Rating</th>
                           <th className="min-w-125px text-end">Price</th>
                           <th className="min-w-125px text-end">Discount</th>
                           <th className="text-end min-w-70px">Actions</th>
                        </tr>
                     </thead>
                     <tbody className="fw-semibold text-gray-600">
                        { isLoading && <tr> <td colSpan={8} className="text-center"> Loading ... </td></tr>}
                        {
                           !isLoading && products.map((product:any, i:number) => (
                           <tr key={i}>
                              <td>
                                 <div className="form-check form-check-sm form-check-custom form-check-solid">
                                    <input className="form-check-input" type="checkbox" defaultValue={product.id} />
                                 </div>
                              </td>
                              <td> {product.title} </td>
                              <td> {product.brand} </td>
                              <td> {product.rating} </td>
                              <td className='text-end'> ${product.price} </td>
                              <td className='text-end'> ${product.discountPercentage} </td>
                              <td className="text-end">
                                 <Dropdown>
                                    <DropdownItem onClick={() => showProduct(product.id)}> View </DropdownItem>
                                    <DropdownItem> Delete </DropdownItem>
                                 </Dropdown>
                              </td>
                           </tr>
                        ))
                     }
                     </tbody>
                  </table> */}
               </Card.Body>
            </Card>
         </div>
      </div>
   </>
  )
}

export default Customer