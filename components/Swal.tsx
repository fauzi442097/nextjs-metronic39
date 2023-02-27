import React, { useState } from 'react'

import styles from '../public/css/my-swal.module.css'
import Button from './Button'

const Swal = ({ showAlert } : { showAlert : boolean}) => {

  const [show, setShow] = useState<boolean>(showAlert);

  return (
    <div className={styles['swal-backdrop']}
      style={{ 
         display: show ? 'block' : 'none'
       }}
    >
      <div className={styles['swal-container']}>
         <div className='bg-white rounded d-flex align-content-center'
         style={{ 
            background: 'linear-gradient(90deg, rgba(255,245,248,1) 0%, rgba(255,245,248,1) 0%, rgba(255,255,255,1) 100%)'
          }}
         >
            <div className='py-8 px-6'>
               <i className="bi bi-question-circle-fill text-danger" style={{ 
                  fontSize: '2.4rem'
                }}></i>
            </div>
            <div className='d-flex flex-column justify-content-center py-8 pe-8'>
               <div>
                  <h3 className=''> Konfirmasi </h3>
                  <p className='fs-6'>
                     Apakah anda yakin akan menghapus data ini?
                  </p>
               </div>
               <div className='d-flex gap-4 text-right mt-4 justify-content-end'>
                  <Button.Custom onClick={() => setShow(false)} size="sm" className='border-1 border border-secondary bg-hover-secondary btn-hover-text-white'> Batal </Button.Custom>
                  <Button size="sm" type='danger' className='fw-bold'> Hapus </Button>
               </div>
            </div>
         </div>
      </div>
   </div>
  )
}

export default Swal