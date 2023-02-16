import React, { useEffect } from 'react'
import dynamic from 'next/dynamic';
import SidebarTeams from './sidebar-bottom'

const SidebarMenu = dynamic(() => import("./sidebar-menu"), {ssr: false });
const SidebarBottom = dynamic(() => import("./sidebar-bottom"), {ssr: false });


const Sidebar = () => {

   useEffect(() => {
      KTMenu.createInstances(); 
   },[]);

  return (
   <div id="kt_app_sidebar" className="app-sidebar flex-column" data-kt-drawer="true" data-kt-drawer-name="app-sidebar" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="250px" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle">
      <div id="kt_app_sidebar_wrapper" className="app-sidebar-wrapper hover-scroll-y my-5 my-lg-2" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_app_header" data-kt-scroll-wrappers="#kt_app_sidebar_wrapper" data-kt-scroll-offset="5px">
         <SidebarMenu/>
         <SidebarBottom/>
      </div>
   </div>
  )
}

export default Sidebar