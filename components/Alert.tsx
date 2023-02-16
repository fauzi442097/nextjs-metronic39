import React, { ReactNode } from 'react'

type AlertTypes = 'primary' | 'secondary' | 'info' | 'dark' | 'success' | 'warning' | 'danger';
type alertLightProps = {
    type: AlertTypes,
    title?: string,
    message: string
}

const getIconAlert = (alertType: string) : string => {
    if ( alertType == 'warning' ) return 'bi-exclamation-circle';
    if ( alertType == 'success' ) return 'bi-check-circle';
    if ( alertType == 'danger' ) return 'bi-x-circle';
    return 'bi-info-circle';
}

const Alert = ({ type, title, message } : alertLightProps ) => {
    let alertType = (!type) ? 'primary' : type;
    let alertTitle: string | undefined;
    let alertIcon: string = getIconAlert(alertType);

    if ( !title && alertType == 'warning' ) {
        alertTitle = 'Warning';
    } else if ( !title && alertType == 'success' ) {
        alertTitle = 'Sukses';
    } else if ( !title && alertType == 'danger' ) {
        alertTitle = 'Error';
    } else {
        alertTitle = title;
    }

    return (
        <div className={`alert alert-dismissible bg-${type} d-flex flex-column flex-sm-row p-5 mb-10`}>
          <i className={`bi ${alertIcon} me-3 fs-1 text-dark`}></i>
          <div className="d-flex flex-column text-light pe-0 pe-sm-10">
              <h5 className="mb-1">{alertTitle}</h5>
              <span>{message}</span>
          </div>
  
          <button type="button" className="position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto" data-bs-dismiss="alert">
              <i className="bi bi-x fs-1 text-white"></i>
          </button>
      </div>
    )
}

export const AlertLight = ({ type, title, message } : alertLightProps ) => {
    let alertType = (!type) ? 'primary' : type;
    let alertTitle: string | undefined;
    let alertIcon: string = getIconAlert(alertType);

    if ( !title && alertType == 'warning' ) {
        alertTitle = 'Warning';
    } else if ( !title && alertType == 'success' ) {
        alertTitle = 'Sukses';
    } else if ( !title && alertType == 'danger' ) {
        alertTitle = 'Error';
    } else {
        alertTitle = title;
    }

    return (
        <div className={`alert alert-${alertType} d-flex align-items-start p-5 mb-10`}>
            <i className={`bi ${alertIcon} me-3 fs-1 text-${alertType}`}></i>
            <div className="d-flex flex-column">
                <h5 className="mb-1">{alertTitle}</h5>
                <span>{message}</span>
            </div>
        </div>
    )
}

export default Alert