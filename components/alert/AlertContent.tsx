import notificationStyle from '@/utils/notificationStyles'
import React, { useMemo } from 'react'
import { motion } from "framer-motion"
import Button, { buttonProps } from '../Button'
import styles from '../../public/css/my-swal.module.css'
import { IAlertContent } from '@/utils/interfaces/IAlert'


const animateContainer = {
  hidden: { 
     opacity: 0,
     scale: 0,
  },
  animate: {
     scale: 0.5
  },
  show: { 
     opacity: 1,
     scale: 1
  },
  exit: {
     opacity: 0,
     scale: 0
  }
}

const animateBackdrop = {
  hidden: { 
     opacity: 0 
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.3
    }
  },
  exit: {
     opacity: 0
  }
}

const AlertContent = ({ 
  message, 
  title, 
  context = "default", 
  labelCancel,
  onClose, 
  onSubmit, 
  labelSubmit,
  dialogType 
} : IAlertContent) => {

  console.log(context);

  const icon = useMemo(() => notificationStyle.setIcon(context), [context]);
  const bgColor = useMemo(() => notificationStyle.setBgColor(context), [context]);
  const textColor = useMemo(() => notificationStyle.setColor(context), [context]);
  const gradientColor = useMemo(() => notificationStyle.setGradient(context), [context]);
  const titleAlert = useMemo(() => notificationStyle.setTitle(context, title), [context, title]);
  const buttonPrimaryType: buttonProps['type'] = context == 'error' ? 'danger' : context == 'info' ? 'primary' : context;

  return (
    <motion.div 
    key={'swal'}
    variants={animateBackdrop} 
    initial="hidden"
    animate="show"
    exit="exit"
    className={styles['swal-backdrop']}
  >
    <div className={styles['swal-container']}>
      <motion.div 
        variants={animateContainer}
        className='bg-white rounded d-flex align-content-center w-400px'
        style={{ background: gradientColor }}
      >
        <div className='py-6 px-6'>
            <div className={`w-35px h-35px text-center rounded-circle ${bgColor}`}>
              <i className={`bi ${icon} text-white`} style={{ fontSize: '2.5rem' }}></i>
            </div>
        </div>
        <div className='d-flex flex-column justify-content-center pt-6 pe-8 w-100 pb-6'>
            <div>
              <h2 className={`${textColor} mb-4`}> {dialogType == 'confirm' ? 'Konfirmasi' : titleAlert} </h2>
              <p className='fs-4'> {message} </p>
            </div>
            <div className='d-flex gap-4 text-right mt-4 justify-content-end'>
              { dialogType == 'confirm' ? (
                    <>
                        <Button.Custom onClick={onClose} size="md" className='border-1 border border-secondary bg-hover-secondary btn-hover-text-white'> {labelCancel || 'Tutup' } </Button.Custom> 
                        <Button onClick={onSubmit} size="md" variant={buttonPrimaryType} className='fw-bold'> {labelSubmit} </Button>
                    </>
                  ) : (
                    <Button onClick={onClose} size="md" variant={buttonPrimaryType} className='fw-bold'> {labelCancel || 'Tutup' }</Button>
                  )
              }
            </div>
        </div>
      </motion.div>
    </div>
    </motion.div>
  )
}

export default AlertContent