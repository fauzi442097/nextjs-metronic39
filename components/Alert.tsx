import React, { ReactNode, useState } from 'react'
import { motion } from "framer-motion"


type AlertTypes = 'success' | 'warning' | 'error' | 'info';
type alertProps = {
    type: AlertTypes,
    title?: string,
    message: string,
    onCloseAlert?: () => void
}

const getIconAlert = (alertType: string) : string => {
    if ( alertType == 'success' ) return 'bi-check';
    if ( alertType == 'warning' ) return 'bi-exclamation';
    if ( alertType == 'error' ) return 'bi-x';
    return 'bi-info';
}

const getTitleAlert = (title:undefined | string, alertType: string) : string => {
    if  ( !title && alertType == 'warning' ) return 'Warning';
    if  ( !title && alertType == 'success' ) return 'Sukses';
    if  ( !title && alertType == 'error' ) return 'Error';
    return 'Info';
}

const getColorAlert = (alertType: string ) : Array<string> => {
    if ( alertType == 'success' ) return ['linear-gradient(90deg, rgba(154,229,188,1) 0%, rgba(232,255,243,1) 0%, rgba(255,255,255,1) 100%)', 'bg-success', 'text-success'];
    if ( alertType == 'warning' ) return ['linear-gradient(90deg, rgba(255,248,221,1) 0%, rgba(255,248,221,1) 0%, rgba(255,255,255,1) 100%)', 'bg-warning', 'text-warning'];
    if ( alertType == 'error' ) return ['linear-gradient(90deg, rgba(255,245,248,1) 0%, rgba(255,245,248,1) 0%, rgba(255,255,255,1) 100%)', 'bg-danger', 'text-danger'];
    return ['linear-gradient(90deg, rgba(238,246,255,1) 0%, rgba(238,246,255,1) 0%, rgba(255,255,255,1) 100%)', 'bg-primary', 'text-primary']
}

const Alert = ({ type, title, message, onCloseAlert } : alertProps ) => {
    const alertType: string | undefined = !type ? 'primary' : type;
    const alertTitle: string  = title || getTitleAlert(title, alertType);
    const alertIcon: string = getIconAlert(alertType);
    const [gradientColor, bgColor, textColor ] = getColorAlert(alertType);

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0 }}
            style={{ 
                background: gradientColor,
                boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
           }}className={`alert alert-dismissible bg-white d-flex flex-column align-items-start gap-4 flex-sm-row p-5 mb-10`}>
              <div className={`${bgColor} d-flex rounded-circle`} style={{ borderRadius: '7px' }}>
                <i style={{ fontSize: '2rem' }}className={`bi ${alertIcon} text-white`}></i>
              </div>
              <div className="d-flex flex-column pe-0 pe-sm-10">
                  <h4 className={`mb-1 ${textColor}`}>{alertTitle}</h4>
                  <span>{message}</span>
              </div>
      
              <button type="button" onClick={onCloseAlert} className="position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto">
                  <i className="bi bi-x fs-1 text-secondary"></i>
              </button>
          </motion.div>
    )
}


export default Alert