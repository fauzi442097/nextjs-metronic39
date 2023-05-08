import React, { useEffect, useRef, useState, useReducer, useCallback, useMemo } from 'react'

import productService from '@/services/productService';
import PageToolbar, { PageAction, PageTitle } from '@/components/PageToolbar';
import Card from '@/components/Card';
import ModalProduct from './modal';
import { useMyAlert } from '@/hooks/useMyAlert';
import { useMyToast } from '@/hooks/useMyToast';
import { hideLoadingForm, showLoadingForm } from '@/utils/globalHelper';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { APIRequest } from '@/utils/apiHelper';
import UserList from './list';

const formProductShema = yup.object({
   user_id: yup.string().notRequired(),
   name: yup.string().required('Wajib diisi').min(3, 'Minimal diisi 3 karakter'),
   email: yup.string().required('Wajib diiis').email('Format email tidak valid'),
});

export type formProduct = yup.InferType<typeof formProductShema>;

const Customer = () => {

   const myAlert = useMyAlert();
   const myToast = useMyToast();
   const queryClient = useQueryClient()


   const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm<formProduct>({
      resolver: yupResolver(formProductShema),
   }); 

   const mutation = useMutation({
      mutationKey: ['users', 'create'],
      mutationFn: (formData: formProduct) => APIRequest.POST('users', formData),
      onSuccess(data, variables, context) {
         queryClient.invalidateQueries({queryKey: ['users']});
         myAlert.success('Data berhasil disimpan', 'Sukses', () => {
            $("#modal-product").modal('hide');
         });
      },
      onError(error: any, variables, context) {
         hideLoadingForm('btn-store-product');
         if ( !error || error.status == 500) {
            myToast.error('Terjadi kesalahan pada server');
         }

         if ( error.status == 400 ) {
            myToast.warning('Bad Request');
         }
      },
      onSettled(data, error, variables, context) {
         hideLoadingForm('btn-store-product');
      },
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
      if ( action == 'create') {
         $("#title-modal-product").text('Tambah Produk');
         $("#modal-product").modal('show');
         // @ts-ignore
         $("#form-product")[0].reset();
         $("#user_id").val("");
         reset();
      } else {
         try {
            const result = await productService.getProduct(row?.id);
            setValue('user_id', result.id);
            setValue('name', result.name, {shouldDirty: true});
            setValue('email', result.email);
            $("#title-modal-product").text('Update Produk');
            $("#modal-product").modal('show');
         } catch ( error ) {
            const status = error.response.status;
            if ( status == 500 ) {
               myAlert.error('Terjadi kesalahan pada server'); 
            }
         }
         
      }
   
   }

   const store: SubmitHandler<formProduct> = async (formValues) => {
      showLoadingForm('btn-store-product');
      let formData = { ...formValues, password: 'password'}
      mutation.mutate(formData);
   }

   const invalidForm = () => {
      myToast.warning('Lengkapi form terlebih dahulu');
   }

  return (
   <>
      <PageToolbar>
         <PageTitle> User List </PageTitle>
         <PageAction>
            <button type="button" className="btn btn-light-primary me-3" onClick={setActive}>
               <span className="svg-icon svg-icon-2">
               </span>
               Show Alert
            </button>
            <button type="button" className="btn btn-primary" onClick={() => showModal('create')}>Tambah User</button>
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
                  <UserList
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