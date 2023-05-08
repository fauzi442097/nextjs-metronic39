import React, { useMemo } from 'react'
import { motion } from "framer-motion"
import notificationStyle from '@/utils/notificationStyles';
import styles from '../../styles/Notification.module.css'
import { IToastContent } from '@/utils/interfaces/IToast';


const ToastContent = ({ message, title, context = "default", onClose } : IToastContent) => {

  const icon = useMemo(() => notificationStyle.setIcon(context), [context]);
  const bgColor = useMemo(() => notificationStyle.setBgColor(context), [context]);
  const textColor = useMemo(() => notificationStyle.setColor(context), [context]);
  const gradientColor = useMemo(() => notificationStyle.setGradient(context), [context]);
  const titleToast = useMemo(() => notificationStyle.setTitle(context, title), [context, title]);

  const bgColorProgress = {
    "--bg-color": `var(--bs-${bgColor.split('-')[1]})`
  } as React.CSSProperties
  

  return (
    <motion.div
        initial={{ x: +100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: +100, opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{ 
            background: gradientColor,
            boxShadow: '0 3px 10px rgb(0 0 0 / 10%), 0 3px 3px rgb(0 0 0 / 5%)',
            width: '320px'
        }}
        className={`alert alert-dismissible bg-white d-flex flex-column align-items-start gap-4 flex-sm-row p-5 mb-10 overflow-hidden`}>

        <div className={`${bgColor} d-flex rounded-circle`} style={{ borderRadius: '7px' }}>
            <i style={{ fontSize: '2rem' }}className={`bi ${icon} text-white`}></i>
        </div>

        <div className="d-flex flex-column pe-0">
            <h4 style={{ letterSpacing: '.5px' }} className={`mb-1 ${textColor}`}>{titleToast}</h4>
            <p style={{ fontWeight: '500' }} dangerouslySetInnerHTML={{ __html: message }} />
        </div>
        
    
        <button type="button" onClick={onClose} className="position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto">
            <i className="bi bi-x fs-1 text-secondary"></i>
        </button>

        {/* Progess Bar */}
        <div style={bgColorProgress} className={`${styles['notification-progress']} position-absolute bottom-0 start-0 h-3px w-100`}>
        </div>
    </motion.div>
  )
}

export default ToastContent