
import React, {ReactNode, useEffect, ReactElement} from 'react'
import Header from './Header'
import Sidebar from './Sidebar';
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
               {children}
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