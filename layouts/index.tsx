import Script from 'next/script';
import React, {ReactNode, useEffect} from 'react'
import Header from './Header'
import Sidebar from './Sidebar';
import dynamic from 'next/dynamic'
import Footer from './footer';

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

            {/* Sidebar */}
            <Sidebar/>
            {/* End Sidebar */}

            {/* Main */}
            <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
               <div id="kt_app_content" className="app-content flex-column-fluid">
                  <div id="kt_app_content_container" className="app-container container-fluid">
                     {children}
                  </div>
               </div>
               
               <Footer/>
            </div>
            {/* End Main */}
         </div>
         {/* End Wrapper */}

      </div>
      {/* End Page */}
    </div>
  )
}

export default index