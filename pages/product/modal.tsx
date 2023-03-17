
import Button from '@/components/Button'
import React, { useEffect, useReducer, useRef, useState, forwardRef } from 'react'
import dynamic from 'next/dynamic';
import Input from '@/components/Form/Input';
import Modal, { ModalBody, ModalFooter, ModalHeader } from '@/components/Modal';
import { formProduct } from '@/hooks/productReducer';


interface IModalProduct {
   handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
   handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
   form: formProduct
}

const ModalProduct = forwardRef<HTMLFormElement, IModalProduct>(({ handleSubmit, handleChange, form }, ref) => {
  return (
   <Modal id="modal-product">
      <ModalHeader> <h4 id="title-modal-product"> Product </h4> </ModalHeader>
         <form ref={ref} onSubmit={handleSubmit} id="form-product">
            <ModalBody> 
               <div className='row'>
                  <div className='form-group mb-8 fv-row'>
                     <label className='fs-6 fw-semibold mb-2'> Title </label>
                     <Input.Text name="title" id="title" onChange={handleChange} value={form.title}/> 
                  </div>
                  <div className='form-group mb-8 fv-row'>
                     <label className='fs-6 fw-semibold mb-2'> Description </label>
                     <textarea className='form-control' onChange={handleChange} value={form.description} rows={3} id="description" name='description' />
                  </div>
                  <div className='form-group mb-8 fv-row'>
                     <label className='fs-6 fw-semibold mb-2'> Brand </label>
                     <Input.Text name="brand" onChange={handleChange} value={form.brand} id="brand"/> 
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