
import Button from '@/components/Button'
import React from 'react'
import Modal, { ModalBody, ModalFooter, ModalHeader } from '@/components/Modal';
import { UseFormRegister, UseFormHandleSubmit, FieldErrors} from 'react-hook-form';
import { formProduct } from '.';
import Input from '@/components/form/Input';


type ModalProductType = {
   register: UseFormRegister<formProduct>,
   handleSubmit: UseFormHandleSubmit<formProduct>,
   onSubmit: (formValues: formProduct) => void,
   onError?: () => void,
   errors: FieldErrors<formProduct>
}

const ModalProduct = ({
   register,
   handleSubmit,
   onSubmit,
   onError,
   errors
}: ModalProductType) => {

  return (
   <Modal id="modal-product">
      <ModalHeader> <h4 id="title-modal-product"> Product </h4> </ModalHeader>
         <form onSubmit={handleSubmit(onSubmit, onError)} id="form-product">
            <ModalBody> 
               <div className='row'>

                  <input type="hidden" {...register('user_id')} id="user_id"/>
                  
                  <Input
                     formGroupClass='mb-10'
                     label='Nama Lengkap'
                     name="name"
                     register={register}
                     errors={errors.name}
                     />

                  <Input 
                     formGroupClass='mb-10'
                     label='email'
                     name="email"
                     register={register}
                     errors={errors.email}
                     />
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
}

export default ModalProduct