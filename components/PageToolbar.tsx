import React, {ReactNode} from 'react'
import Breadcrumbs from './Breadcrumbs'

type props = {
   children?: React.ReactNode
}

const PageToolbar = ({ children } : props) => {
  return (
   <div id="kt_app_toolbar" className="app-toolbar pt-6 pb-2">
      <div id="kt_app_toolbar_container" className="app-container container-fluid d-flex align-items-stretch">
         <div className="app-toolbar-wrapper d-flex flex-stack flex-wrap gap-4 w-100">
            {children}
         </div>
      </div>
   </div>
  )
}

export const PageTitle = ({ children } : props) => {
   return (
      <div className="page-title d-flex flex-column justify-content-center gap-1 me-3">
         <h1 className="page-heading d-flex flex-column justify-content-center text-dark fw-bold fs-3 m-0">{children}</h1>
         <Breadcrumbs/>
      </div>
   )
}

export const PageAction = ({children} : props ) => {
   return (
      <div className={`d-flex align-items-center gap-2 gap-lg-3`}>
         { children }
      </div>
   )
}



export default PageToolbar