import React, { cloneElement, useMemo } from 'react'
import { motion } from "framer-motion"

type ToastMessageContex = "default" | "info" | "success" | "warning" | "error";

interface IToastMessageProps {
    message: string,
    title? : string,
    context? : ToastMessageContex,
    onClose?: () => void
}

const ToastMessage = ({ message, title, context = "default", onClose } : IToastMessageProps) => {

  // Icon Toast
  const icon = useMemo(() => {
    switch ( context ) {
        case "info" :
            return 'bi bi-info';
        case "success" :
            return 'bi bi-check';
        case "warning" :
            return 'bi-exclamation';
        case "error" :
            return 'bi-x';
        default :
            return 'bi bi-info';
    }
  }, [context])

  // Background Color Toast
  const bgColor = useMemo(() => {
    switch ( context ) {
        case "info":
            return "bg-primary";
        case "success":
            return "bg-success";
        case "warning":
            return "bg-warning";
        case "error":
            return "bg-danger";
        default:
            return "bg-primary"
    }
  }, [context]);

  // Text Color Toast
  const textColor = useMemo(() => {
    switch ( context ) {
        case "info" :
            return "text-primary";
        case "success":
            return "text-success";
        case "warning":
            return "text-warning";
        case "error" :
            return "text-danger";
        default:
            return "text-primary"
    } 
  }, [context]);

  const gradientColor = useMemo(() => {
    switch ( context ) {
        case "info": 
            return "linear-gradient(90deg, rgba(238,246,255,1) 0%, rgba(238,246,255,1) 0%, rgba(255,255,255,1) 100%)"
        case "success" :
            return "linear-gradient(90deg, rgba(154,229,188,1) 0%, rgba(232,255,243,1) 0%, rgba(255,255,255,1) 100%)"
        case "warning" :
            return "linear-gradient(90deg, rgba(255,248,221,1) 0%, rgba(255,248,221,1) 0%, rgba(255,255,255,1) 100%)"
        case "error":
            return "linear-gradient(90deg, rgba(255,245,248,1) 0%, rgba(255,245,248,1) 0%, rgba(255,255,255,1) 100%)"
        default:
            return "linear-gradient(90deg, rgba(238,246,255,1) 0%, rgba(238,246,255,1) 0%, rgba(255,255,255,1) 100%)"
    }
  }, [context]);

  const titleToast = useMemo(() => {
    if ( !title ) {
        switch ( context ) {
            case 'info': return 'Info'
            case 'success': return 'Sukses'
            case 'warning': return 'Warning'
            case 'error': return 'Error'
            default: 
                return 'Info'
        }
    } else {
        return title;
    }
  }, [title, context]);

  return (
    <motion.div
        initial={{ x: +100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.2 }}
        style={{ 
            background: gradientColor,
            boxShadow: '0 3px 10px rgb(0 0 0 / 10%), 0 3px 3px rgb(0 0 0 / 5%)'
        }}
        className={`alert alert-dismissible bg-white d-flex flex-column align-items-start gap-4 flex-sm-row p-5 mb-10`}>

        <div className={`${bgColor} d-flex rounded-circle`} style={{ borderRadius: '7px' }}>
            <i style={{ fontSize: '2rem' }}className={`bi ${icon} text-white`}></i>
        </div>

        <div className="d-flex flex-column pe-0 pe-sm-10">
            <h4 className={`mb-1 ${textColor}`}>{titleToast}</h4>
            <span>{message}</span>
        </div>

        <button type="button" onClick={onClose} className="position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto">
            <i className="bi bi-x fs-1 text-secondary"></i>
        </button>
    </motion.div>
  )
}

export default ToastMessage