
import Button from '@/components/Button'
import React, { useEffect, useReducer, useRef, useState } from 'react'
import dynamic from 'next/dynamic';
import Input from '@/components/form/Input';
import Modal, { ModalBody, ModalFooter, ModalHeader } from '@/components/Modal';
import { productInitialState, productReducer } from '@/hooks/productReducer';
import { FORM_REDUCER_ACTIONS } from '@/utils/enums/FormActions';


// const Modal = dynamic(() => import('../../components/Modal'), )
// const ModalHeader = dynamic(() => import('../../components/Modal').then(module => module.ModalHeader), {ssr: false})
// const ModalBody = dynamic(() => import('../../components/Modal').then(module => module.ModalBody), {ssr: false})
// const ModalFooter = dynamic(() => import('../../components/Modal').then(module => module.ModalFooter), {ssr: false})

const ModalProduct = () => {

  console.log('modal product rendered');

  const formRef = useRef<HTMLFormElement>(null);
  const [state, dispatch] = useReducer(productReducer, productInitialState);
  const [fv, setFv] = useState<any>();

  useEffect(() => {
   setFv(initFormValidation());
 },[]);

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  
 }


 const initFormValidation = () => {
   // @ts-ignore
   return FormValidation.formValidation(
     formRef.current,
     {
         fields: {
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
         },

         plugins: {
              // @ts-ignore
             trigger: new FormValidation.plugins.Trigger(),
              // @ts-ignore
             bootstrap: new FormValidation.plugins.Bootstrap5({
                 rowSelector: '.fv-row',
                 eleInvalidClass: '',
                 eleValidClass: ''
             })
         }
     }
   );
 }


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();
   if ( fv ) {
      fv.validate().then((status: string) => {
         console.log({status});
         if ( status == 'Valid' ) {
            console.log(state);
         } else {
            alert('invalid');
         }
      })
   }
  }

  return (
   <Modal id="modal-product">
      <ModalHeader> <h4 id="title-modal-product"> Product </h4> </ModalHeader>
         <form ref={formRef} onSubmit={handleSubmit}>
            <ModalBody> 
               <div className='row'>
                  <div className='form-group mb-8 fv-row'>
                     <label className='fs-6 fw-semibold mb-2'> Title </label>
                     <Input.Text name="title" id="title" defaultValue={state.title} onChange={handleChange}/> 
                  </div>
                  <div className='form-group mb-8 fv-row'>
                     <label className='fs-6 fw-semibold mb-2'> Description </label>
                     <textarea className='form-control' defaultValue={state.description} onChange={handleChange} rows={3} id="description" name='description' />
                  </div>
                  <div className='form-group mb-8 fv-row'>
                     <label className='fs-6 fw-semibold mb-2'> Brand </label>
                     <Input.Text name="brand" defaultValue={state.brand} onChange={handleChange} id="brand"/> 
                  </div>
               </div>
            </ModalBody>
            <ModalFooter>
                  <Button.Custom
                     className="btn-light"
                     data-bs-dismiss="modal"
                     > Close </Button.Custom>
                  <Button> Save changes </Button>
            </ModalFooter>
      </form>
   </Modal>
  )
}

export default ModalProduct