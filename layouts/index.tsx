import Script from 'next/script';
import React, {ReactNode, useEffect} from 'react'
import Header from './Header'
import Sidebar from './Sidebar';
import dynamic from 'next/dynamic'

interface Props {
   children: ReactNode
}

const setThemeMode = () => {
   var defaultThemeMode = "light"; 
   document.documentElement.setAttribute("data-bs-theme", defaultThemeMode); 
}

const index = ({children} : Props) => {

   useEffect(() => {
      setThemeMode();
   }, []);

  return (
   <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
      {/* Begin Page */}
      <div className="app-page flex-column flex-column-fluid" id="kt_app_page">
         {/* Header */}
         <Header/>
         {/* End Header */}

         {/* Wrapper */}
         <div className="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
            <Sidebar/>
         </div>
         {/* End Wrapper */}
      </div>
      {/* End Page */}
      {children}
      

    </div>
  )
}

export default index