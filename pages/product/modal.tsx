
import Button from '@/components/Button'
import React from 'react'
import Modal, { ModalBody, ModalFooter, ModalHeader } from '@/components/Modal';
import Input from '@/components/Form/Input';
import { UseFormRegister, UseFormHandleSubmit, FieldErrors} from 'react-hook-form';
import { formProduct } from '.';


type ModalProductType = {
   register: UseFormRegister<formProduct>,
   handleSubmit: UseFormHandleSubmit<formProduct>,
   onSubmit: () => void,
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
                  <Input
                     formGroupClass='mb-10'
                     label='Title'
                     name="title"
                     register={register}
                     errors={errors.title}
                     />

                  <Input 
                     formGroupClass='mb-10'
                     label='Description'
                     name="description"
                     register={register}
                     errors={errors.description}
                     />

                  <Input 
                     formGroupClass='mb-10'
                     label='Branch'
                     name="brand"
                     register={register}
                     errors={errors.brand}
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