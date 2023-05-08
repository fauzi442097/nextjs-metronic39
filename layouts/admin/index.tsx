
import React, {ReactNode, useEffect} from 'react'
import dynamic from 'next/dynamic';
import MyToast from '@/components/toast/MyToast';
import MyAlert from '@/components/alert/MyAlert';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useMyAlert } from '@/hooks/useMyAlert';

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

   const router = useRouter();
   const myAlert = useMyAlert();
   

   useEffect(() => {
      
      setThemeMode();
      // if ( !Cookies.get('token')) {
      //    router.push('/login');
      // }
   }, []);

  return (
   <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
      
      <MyToast/>
      <MyAlert/>

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