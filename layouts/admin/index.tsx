
import React, {ReactNode, useEffect, ReactElement} from 'react'
import dynamic from 'next/dynamic';

interface Props {
   children: ReactNode
}

const Header = dynamic(() => import("./Header"), {ssr: false });
const Sidebar = dynamic(() => import("./Sidebar"), { ssr: false });
// const Footer = dynamic(() => import("./Footer"), {ssr: false,});

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
      <div className="app-page flex-column flex-column-fluid" id="kt_app_page">
         <Header/>
         <div className="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
            <Sidebar/>
            <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
               {children}
               {/* <Footer/> */}
            </div>
         </div>
      </div>
    </div>
  )
}

export default index