import React from 'react'
import SidebarMenu from './sidebar-menu'
import SidebarTeams from './sidebar-bottom'
import SidebarBottom from './sidebar-bottom'

const Sidebar = () => {
  return (
   <div id="kt_app_sidebar" className="app-sidebar flex-column" data-kt-drawer="true" data-kt-drawer-name="app-sidebar" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="250px" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle">
      {/*begin::Wrapper*/}
      <div id="kt_app_sidebar_wrapper" className="app-sidebar-wrapper hover-scroll-y my-5 my-lg-2" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_app_header" data-kt-scroll-wrappers="#kt_app_sidebar_wrapper" data-kt-scroll-offset="5px">
         {/*begin::Sidebar menu*/}
            <SidebarMenu/>
         {/*end::Sidebar menu*/}

         {/* begin::Teames*/}
            <SidebarBottom/>
         {/*end::Teames */}
      </div>
      {/*end::Wrapper*/}
   </div>
  )
}

export default Sidebar