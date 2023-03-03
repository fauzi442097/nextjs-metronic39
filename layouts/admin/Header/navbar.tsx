import React from 'react'
import dynamic from 'next/dynamic'

const NavbarNotifications = dynamic(() => import('./navbar-notifications'), {ssr: false});
const NavbarQuickLinks = dynamic(() => import('./navbar-quicklinks'), {ssr: false});
const NavbarUserMenu = dynamic(() => import('./navbar-usermenu'), {ssr: false});

const Navbar = () => {
  return (
   <div className="app-navbar flex-grow-1 justify-content-end" id="kt_app_header_navbar">
      <div className="app-navbar-item d-flex align-items-stretch flex-lg-grow-1">
         
      </div>

      {/*begin::Notifications*/}
      <NavbarNotifications/>
      {/*end::Notifications*/}

      {/* begin::Quick links */}
      <NavbarQuickLinks/>
      {/* end::Quick links */}

      {/* begin::User menu */}
      <NavbarUserMenu/>
      {/* end::User menu */}

      {/*begin::Action*/}
      <div className="app-navbar-item ms-2 ms-lg-6 me-lg-5 invisible">
         {/*begin::Link*/}
         <a href="../../demo39/dist/authentication/layouts/corporate/sign-in.html" className="btn btn-icon btn-custom btn-color-gray-600 btn-active-color-primary w-35px h-35px w-md-40px h-md-40px">
            {/*begin::Svg Icon | path: icons/duotune/arrows/arr096.svg*/}
            <span className="svg-icon svg-icon-1">
               <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <rect opacity="0.3" width={12} height={2} rx={1} transform="matrix(-1 0 0 1 20 11)" fill="currentColor" />
               <path d="M18.1313 11.6927L16.3756 10.2297C15.9054 9.83785 15.8732 9.12683 16.306 8.69401C16.6957 8.3043 17.3216 8.28591 17.7336 8.65206L20.6592 11.2526C21.1067 11.6504 21.1067 12.3496 20.6592 12.7474L17.7336 15.3479C17.3216 15.7141 16.6957 15.6957 16.306 15.306C15.8732 14.8732 15.9054 14.1621 16.3756 13.7703L18.1313 12.3073C18.3232 12.1474 18.3232 11.8526 18.1313 11.6927Z" fill="currentColor" />
               <path opacity="0.5" d="M16 5V6C16 6.55228 15.5523 7 15 7C14.4477 7 14 6.55228 14 6C14 5.44772 13.5523 5 13 5H6C5.44771 5 5 5.44772 5 6V18C5 18.5523 5.44771 19 6 19H13C13.5523 19 14 18.5523 14 18C14 17.4477 14.4477 17 15 17C15.5523 17 16 17.4477 16 18V19C16 20.1046 15.1046 21 14 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H14C15.1046 3 16 3.89543 16 5Z" fill="currentColor" />
               </svg>
            </span>
            {/*end::Svg Icon*/}
         </a>
         {/*end::Link*/}
      </div>
      {/*end::Action*/}

      


      



   </div>
  )
}

export default Navbar