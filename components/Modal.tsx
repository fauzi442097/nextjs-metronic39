import React, {HTMLAttributes, ReactNode} from 'react'

type propsModal = {
    children: ReactNode,
    className?: string
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'fullscreen',
    [key:string]: any;
}


const Modal = ({ children, className, size = 'md', ...props } : propsModal) => {
  return (
    <div className={`modal fade ${className || ''}`} tabIndex={-1} {...props}>
        <div className={`modal-dialog modal-${size}`}>
            <div className="modal-content">
                {children}
            </div>
        </div>
    </div>

  )
}

const ModalHeader = ({ children, className, ...props } : propsModal) => {
    return (
        <div {...props} className={`modal-header ${className || ''}`}>
            {children}
            {/* <h5 className="modal-title">Modal title</h5> */}
            <div
                className="btn btn-icon btn-sm btn-active-light-primary ms-2"
                data-bs-dismiss="modal"
                aria-label="Close"
            > 
                <i className="fa-sharp fa-solid fa-xmark fs-3"></i>
            </div>
        </div>
    )
}

const ModalBody = ({ children, className, ...props } : propsModal) => {
    return (
        <div {...props} className={`modal-body ${className || ''}`}>
            {children}
        </div>
    )
}

const ModalFooter = ({ children, className, ...props } : propsModal) => {
    return (
        <div {...props} className={`modal-footer ${className || ''}`}>
            {children}
        </div>
    )
}


Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal