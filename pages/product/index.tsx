import React, { useEffect, useRef, useState, useReducer, useCallback, useMemo } from 'react'

import productService from '@/services/productService';
import PageToolbar, { PageAction, PageTitle } from '@/components/PageToolbar';
import Card from '@/components/Card';
import ModalProduct from './modal';
import { useMyAlert } from '@/hooks/useMyAlert';
import { useMyToast } from '@/hooks/useMyToast';
import ProductList from './list';
import { hideLoadingForm, showLoadingForm } from '@/utils/globalHelper';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const formProductShema = yup.object({
   title: yup.string().required('Wajib diisi').min(3, 'Minimal diisi 3 karakter'),
   description: yup.string().required('Wajib diiis').min(6, 'Minimal diisi 6 karakter'),
   brand: yup.string().required('Wajib diisi').min(3, 'Minimal diisi 3 karakter')
});

export type formProduct = yup.InferType<typeof formProductShema>;

const Customer = () => {

   const myAlert = useMyAlert();
   const myToast = useMyToast();

   const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm<formProduct>({
      resolver: yupResolver(formProductShema)
   }); 
      

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

   const showModal = async (action: string, row?: object) => {

      // @ts-ignore
      $("#form-product")[0].reset();
      reset();

   
      if ( action == 'create') {
         $("#title-modal-product").text('Tambah Produk');
      } else {
         const result = await productService.getProduct(row.id);
         $("#title-modal-product").text('Update Produk');
         setValue('title', result.title);
         setValue('brand', result.brand);
         setValue('description', result.description);
      }
   
      $("#modal-product").modal('show');
   }

   const store = () => {
      showLoadingForm('btn-store-product');
      setTimeout(() => {
         hideLoadingForm('btn-store-product');
         myAlert.success('Data berhasil disimpan', 'Sukses', () => {
            $("#modal-product").modal('hide');
         });
      }, 3000);
   }

   const invalidForm = () => {
      myToast.warning('Lengkapi form terlebih dahulu');
   }

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
         register={register}
         handleSubmit={handleSubmit}
         onSubmit={store}
         onError={invalidForm}
         errors={errors}
      />

      <div id="kt_app_content" className="app-content flex-column-fluid">
         <div id="kt_app_content_container" className="app-container container-fluid">
            <Card>
               <Card.Body className="table-responsive">
                  <ProductList
                     showModal={showModal}
                  />
               </Card.Body>
            </Card>
         </div>
      </div>
   </>
  )
}

export default Customer