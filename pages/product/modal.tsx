
import Button from '@/components/Button'
import React, { useEffect, useReducer, useRef, useState, forwardRef } from 'react'
import dynamic from 'next/dynamic';
import Modal, { ModalBody, ModalFooter, ModalHeader } from '@/components/Modal';
import { formProduct } from '@/hooks/productReducer';
import { useForm } from 'react-hook-form';
import Input from '@/components/form/Input';


interface IModalProduct {
   store: () => void,
}

// const ModalProduct = forwardRef<HTMLFormElement, IModalProduct>(({ handleSubmit, handleChange, form }, ref) => {
const ModalProduct = forwardRef<HTMLFormElement, IModalProduct>(({ store }: any, ref) => {
   
   const { register, handleSubmit, watch, formState: { errors } } = useForm(); 

   console.log(watch('brand'));

  return (
   <Modal id="modal-product">
      <ModalHeader> <h4 id="title-modal-product"> Product </h4> </ModalHeader>
         <form ref={ref} onSubmit={handleSubmit(store)} id="form-product">
            <ModalBody> 
               <div className='row'>
                  <div className='form-group mb-8 fv-row'>
                     <label className='fs-6 fw-semibold mb-2'> Title </label>
                     <Input.Text id="title" {...register('title')}/> 
                  </div>
                  <div className='form-group mb-8 fv-row'>
                     <label className='fs-6 fw-semibold mb-2'> Description </label>
                     <textarea className='form-control' {...register('description')} id="description" name='description' />
                  </div>
                  <div className='form-group mb-8 fv-row'>
                     <label className='fs-6 fw-semibold mb-2'> Brand </label>
                     <input type="text" className='form-control' {...register('brand')}/>
                  </div>
               </div>
            </ModalBody>
            <ModalFooter>
                  <Button.Custom
                     type="button"
                     className="btn-light"
                     data-bs-dismiss="modal"
                     > Tutup </Button.Custom>
                  <Button type="submit" id="btn-store-product"> 
                     <span className="indicator-label">Simpan</span>
                     <span className="indicator-progress">Processing...
                     <span className="spinner-border spinner-border-sm align-middle ms-2" /></span>
                  </Button>
            </ModalFooter>
      </form>
   </Modal>
  )
})

export default ModalProduct