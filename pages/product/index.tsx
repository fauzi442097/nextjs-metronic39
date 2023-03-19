import React, { useEffect, useRef, useState, useReducer, useCallback, useMemo } from 'react'

import { useQuery } from '@tanstack/react-query';
import productService from '@/services/productService';
import PageToolbar, { PageAction, PageTitle } from '@/components/PageToolbar';
import Card from '@/components/Card';
import Dropdown, { DropdownItem } from '@/components/Dropdown';
import Button from '@/components/Button';
import MyDatatable from '@/components/datatable/MyDatatable';
import Swal from '@/components/Swal';
import { AnimatePresence } from 'framer-motion';
import { TableColumn } from 'react-data-table-component';
import ModalProduct from './modal';
import { initialProductState, productReducer } from '@/hooks/productReducer';
import { FORM_REDUCER_ACTIONS } from '@/utils/enums/FormActions';
import { useFormValidation } from '@/hooks/useFormValidation';
import { useMyAlert } from '@/hooks/useMyAlert';
import { useMyToast } from '@/hooks/useMyToast';

let validationRules = {
   'title': {
         validators: {
            notEmpty: {
               message: 'Wajib diisi'
            },
            stringLength: {
               min: 3,
               message: 'Minimal diisi 3 karakter'
            }
         }
   },
   'description': {
      validators: {
         notEmpty: {
            message: 'Wajib diisi'
         },
         stringLength: {
            min: 6,
            message: 'Minimal diisi 6 karakter'
         }
      }
   },
   'brand' : {
      validators: {
         notEmpty: {
            message: 'Wajib diisi'
         }
      }
   }
}


const Customer = () => {

   const myAlert = useMyAlert();
   const myToast = useMyToast();

   const formRef = useRef<HTMLFormElement>(null);
   const [state, dispatch] = useReducer(productReducer, initialProductState);
   const fv = useFormValidation(formRef, validationRules);
   const { form, isFormValid } = state;

   


   const setActive = () => {
      myAlert.confirm({
         type: 'warning',
         title: 'Konfirmasi',
         message: 'Apakah anda yakin akan menghapus data user ini?',
         labelSubmit: 'Non aktif',
         onSubmit: () => {
            console.log('submit')
            alert('submit');
         },
         labelCancel: 'Batal',
         onCancel: () => {
            console.log('cancel')
         },
      });   
   }

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

   const { data: products, isError, isLoading, error } = useQuery({
      queryKey: ['products'],
      queryFn: productService.getProducts
   });

   const showModal = async (action: string, row?: object) => {

      // @ts-ignore
      $("#form-product")[0].reset();
      $(".invalid-feedback").html('');
      fv.resetForm(true);
      
      if ( action == 'create') {
         $("#title-modal-product").text('Tambah Produk');
         dispatch({
            type: FORM_REDUCER_ACTIONS.SET_VALUE,
            payload: {
               title: '',
               description: '',
               brand: ''
            }
         })
      } else {
         const result = await productService.getProduct(row.id);
         $("#title-modal-product").text('Update Produk');
         dispatch({
            type: FORM_REDUCER_ACTIONS.SET_VALUE,
            payload: {
               title: result.title,
               description: result.description,
               brand: result.brand
            }
         })
      }
   
      $("#modal-product").modal('show');
   }

   const store = () => {
      if ( fv ) {
         fv.validate().then((status: string) => {
            if ( status == 'Invalid' ) {
               // setFormStatus('invalid');
               myToast.warning("Lengkapi data terlebih dahulu");

            } else {
               // FORM VALID
               $("#btn-store-product").attr('disabled', 'disabled');
               $("#btn-store-product").attr('data-kt-indicator', 'on');


               setTimeout(() => {
                  $("#btn-store-product").removeAttr('disabled');
                  $("#btn-store-product").removeAttr('data-kt-indicator');
                  myToast.success("Data berhasil disimpan");
               }, 5000);

               console.log({form: state.form});
            }
         })
      }
   }

   const setFormStatus = (status: 'valid' | 'invalid') => {
      let formValid = status == 'valid';
      dispatch({
         type: FORM_REDUCER_ACTIONS.SET_FORM_STATUS,
         payload: { isFormValid: formValid }
      });
   }

   if ( isError && error instanceof Error ) return <p> { error.message }</p> 

  return (
   <>
      <PageToolbar>
         <PageTitle> Product List </PageTitle>
         <PageAction>
            <button type="button" className="btn btn-light-primary me-3" onClick={setActive}>
               <span className="svg-icon svg-icon-2">
               </span>
               Show Alert
            </button>
            <button type="button" className="btn btn-primary" onClick={() => showModal('create')}>Add Customer</button>
         </PageAction>
      </PageToolbar>

      <ModalProduct
         ref={formRef}
         store={store}
      />

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