import React, { useState } from 'react'

import styles from '../public/css/my-swal.module.css'
import Button, {buttonProps} from './Button'

type swalProps = {
   type: 'success' | 'warning' | 'error' | 'info' | 'primary',
   dialogType: 'alert' | 'confirm',
   title?: string,
   message?: string,
   show: boolean,
   setShow: (show: boolean) => void,
   onProcess?: () => void,
   processName?: string
}

const getStyleSwal = (type: string) : Array<string> => {
   if ( type == 'warning' ) return ['linear-gradient(90deg, rgba(255,248,221,1) 0%, rgba(255,248,221,1) 0%, rgba(255,248,221,1) 0%, rgba(255,255,255,1) 100%)', 'text-warning', 'bi-exclamation-circle-fill'];
   if ( type == 'error' ) return ['linear-gradient(90deg, rgba(255,245,248,1) 0%, rgba(255,245,248,1) 0%, rgba(255,245,248,1) 0%, rgba(255,255,255,1) 100%)', 'text-danger', 'bi-x-circle-fill'];
   if ( type == 'success') return ['linear-gradient(90deg, rgba(232,255,243,1) 0%, rgba(232,255,243,1) 0%, rgba(232,255,243,1) 0%, rgba(255,255,255,1) 100%)', 'text-success', 'bi-check-circle-fill'];
   if ( type == 'info') return ['linear-gradient(90deg, rgba(248,245,255,1) 0%, rgba(248,245,255,1) 0%, rgba(248,245,255,1) 0%, rgba(255,255,255,1) 100%)', 'text-info', 'bi-info-circle-fill'];
   return ['linear-gradient(90deg, rgba(238,246,255,1) 0%, rgba(238,246,255,1) 0%, rgba(238,246,255,1) 0%, rgba(255,255,255,1) 100%);', 'text-primary', 'bi-info-circle-fill']
}

const Swal = ({ 
   dialogType,
   type = 'primary', 
   title,
   message, 
   show, 
   setShow, 
   onProcess,
   processName 
} : swalProps ) => {


  const [gradientStyle, color, icon]= getStyleSwal(type);
  const swalIcon = dialogType == 'confirm' ? 'bi-question-circle-fill' : icon;
  const buttonPrimaryType: buttonProps['type'] = type == 'error' ? 'danger' : type;


  return (
    <div className={styles['swal-backdrop']}
      style={{ 
         display: show ? 'block' : 'none'
       }}
    >
      <div className={styles['swal-container']}>
         <div className='bg-white rounded d-flex align-content-center w-350px'
         style={{ 
            background: gradientStyle
          }}
         >
            <div className='py-8 px-6'>
               <i className={`bi ${swalIcon} ${color}`} style={{ 
                  fontSize: '2.4rem'
                }}></i>
            </div>
            <div className='d-flex flex-column justify-content-center py-8 pe-8 w-100'>
               <div>
                  <h3> {dialogType == 'confirm' ? 'Konfirmasi' : title} </h3>
                  <p className='fs-6'> {message} </p>
               </div>
               <div className='d-flex gap-4 text-right mt-4 justify-content-end'>
                  { dialogType == 'confirm' ? (
                        <>
                           <Button.Custom onClick={() => setShow(false)} size="sm" className='border-1 border border-secondary bg-hover-secondary btn-hover-text-white'> Batal </Button.Custom> 
                           <Button onClick={onProcess} size="sm" type={buttonPrimaryType} className='fw-bold'> {processName} </Button>
                        </>
                     ) : (
                        <Button onClick={() => setShow(false)} size="sm" type={buttonPrimaryType} className='fw-bold'> Tutup </Button>
                     )
                  }
               </div>
            </div>
         </div>
      </div>
   </div>
  )
}

export default Swal