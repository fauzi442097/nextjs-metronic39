import React from 'react'

const SidebarBottom = () => {
  return (
    <div className="app-sidebar-menu-secondary menu menu-rounded menu-column ps-5 pe-6">
         {/*begin::Heading*/}
         <div className="menu-item menu-labels">
            <div className="menu-content d-flex flex-stack fw-bold text-gray-600 text-uppercase fs-7">
            <span className="menu-heading ps-1">Labels</span>
            {/*begin::Link*/}
            <a className="menu-btn ps-2" href="../../demo39/dist/authentication/layouts/corporate/sign-in.html">
               {/*begin::Svg Icon | path: icons/duotune/general/gen035.svg*/}
               <span className="svg-icon svg-icon-2 svg-icon-success">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={5} fill="currentColor" />
                  <rect x="10.8891" y="17.8033" width={12} height={2} rx={1} transform="rotate(-90 10.8891 17.8033)" fill="currentColor" />
                  <rect x="6.01041" y="10.9247" width={12} height={2} rx={1} fill="currentColor" />
                  </svg>
               </span>
               {/*end::Svg Icon*/}
            </a>
            {/*end::Link*/}
            </div>
         </div>
         {/*end::Heading*/}
         {/*begin::Separator*/}
         <div className="app-sidebar-separator separator mx-5 mt-2 mb-2" />
         {/*end::Separator*/}
         {/*begin::Menu Item*/}
         <div className="menu-item">
            {/*begin::Menu link*/}
            <a className="menu-link" href="../../demo39/dist/apps/projects/project.html">
            {/*begin::Bullet*/}
            <span className="menu-icon ps-2">
               <span className="bullet bullet-dot h-10px w-10px bg-primary" />
            </span>
            {/*end::Bullet*/}
            {/*begin::Title*/}
            <span className="menu-title text-gray-700 fw-bold fs-6">Google Ads</span>
            {/*end::Title*/}
            {/*begin::Badge*/}
            <span className="menu-badge">
               <span className="badge badge-secondary">6</span>
            </span>
            {/*end::Badge*/}
            </a>
            {/*end::Menu link*/}
         </div>
         {/*end::Menu Item*/}
         {/*begin::Menu Item*/}
         <div className="menu-item">
            {/*begin::Menu link*/}
            <a className="menu-link" href="../../demo39/dist/apps/projects/project.html">
            {/*begin::Bullet*/}
            <span className="menu-icon ps-2">
               <span className="bullet bullet-dot h-10px w-10px bg-success" />
            </span>
            {/*end::Bullet*/}
            {/*begin::Title*/}
            <span className="menu-title text-gray-700 fw-bold fs-6">AirStoke App</span>
            {/*end::Title*/}
            {/*begin::Badge*/}
            <span className="menu-badge">
               <span className="badge badge-secondary">2</span>
            </span>
            {/*end::Badge*/}
            </a>
            {/*end::Menu link*/}
         </div>
         {/*end::Menu Item*/}
         {/*begin::Menu Item*/}
         <div className="menu-item">
            {/*begin::Menu link*/}
            <a className="menu-link" href="../../demo39/dist/apps/projects/project.html">
            {/*begin::Bullet*/}
            <span className="menu-icon ps-2">
               <span className="bullet bullet-dot h-10px w-10px bg-warning" />
            </span>
            {/*end::Bullet*/}
            {/*begin::Title*/}
            <span className="menu-title text-gray-700 fw-bold fs-6">Internal Tasks</span>
            {/*end::Title*/}
            {/*begin::Badge*/}
            <span className="menu-badge">
               <span className="badge badge-secondary">37</span>
            </span>
            {/*end::Badge*/}
            </a>
            {/*end::Menu link*/}
         </div>
         {/*end::Menu Item*/}
         {/*begin::Menu Item*/}
         <div className="menu-item">
            {/*begin::Menu link*/}
            <a className="menu-link" href="../../demo39/dist/apps/projects/project.html">
            {/*begin::Bullet*/}
            <span className="menu-icon ps-2">
               <span className="bullet bullet-dot h-10px w-10px bg-danger" />
            </span>
            {/*end::Bullet*/}
            {/*begin::Title*/}
            <span className="menu-title text-gray-700 fw-bold fs-6">Fitnes App</span>
            {/*end::Title*/}
            {/*begin::Badge*/}
            <span className="menu-badge">
               <span className="badge badge-secondary">4</span>
            </span>
            {/*end::Badge*/}
            </a>
            {/*end::Menu link*/}
         </div>
         {/*end::Menu Item*/}
         {/*begin::Collapsible items*/}
         <div className="menu-inner flex-column collapse" id="kt_app_sidebar_menu_projects_collapse">
            {/*begin::Menu Item*/}
            <div className="menu-item">
            {/*begin::Menu link*/}
            <a className="menu-link" href="../../demo39/dist/apps/projects/project.html">
               {/*begin::Bullet*/}
               <span className="menu-icon ps-2">
                  <span className="bullet bullet-dot h-10px w-10px bg-info" />
               </span>
               {/*end::Bullet*/}
               {/*begin::Title*/}
               <span className="menu-title text-gray-700 fw-bold fs-6">Oppo CRM</span>
               {/*end::Title*/}
               {/*begin::Badge*/}
               <span className="menu-badge">
                  <span className="badge badge-secondary">12</span>
               </span>
               {/*end::Badge*/}
            </a>
            {/*end::Menu link*/}
            </div>
            {/*end::Menu Item*/}
            {/*begin::Menu Item*/}
            <div className="menu-item">
            {/*begin::Menu link*/}
            <a className="menu-link" href="../../demo39/dist/apps/projects/project.html">
               {/*begin::Bullet*/}
               <span className="menu-icon ps-2">
                  <span className="bullet bullet-dot h-10px w-10px bg-warning" />
               </span>
               {/*end::Bullet*/}
               {/*begin::Title*/}
               <span className="menu-title text-gray-700 fw-bold fs-6">Finance Dispatch</span>
               {/*end::Title*/}
               {/*begin::Badge*/}
               <span className="menu-badge">
                  <span className="badge badge-secondary">25</span>
               </span>
               {/*end::Badge*/}
            </a>
            {/*end::Menu link*/}
            </div>
            {/*end::Menu Item*/}
         </div>
         {/*end::Collapsible items*/}
         {/*begin::Collapse toggle*/}
         <div className="menu-item">
            {/*begin::Toggle*/}
            <a className="menu-link menu-collapse-toggle toggle collapsible collapsed" data-bs-toggle="collapse" href="#kt_app_sidebar_menu_projects_collapse" data-kt-toggle-text="Show less">
            <span className="menu-icon ps-2">
               {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
               <span className="svg-icon toggle-off svg-icon-4 svg-icon-gray-700 me-0">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                  </svg>
               </span>
               {/*end::Svg Icon*/}
               {/*begin::Svg Icon | path: icons/duotune/arrows/arr073.svg*/}
               <span className="svg-icon toggle-on svg-icon-4 svg-icon-gray-700 me-0">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5657 11.3657L16.75 15.55C17.1642 15.9643 17.8358 15.9643 18.25 15.55C18.6642 15.1358 18.6642 14.4643 18.25 14.05L12.7071 8.50716C12.3166 8.11663 11.6834 8.11663 11.2929 8.50715L5.75 14.05C5.33579 14.4643 5.33579 15.1358 5.75 15.55C6.16421 15.9643 6.83579 15.9643 7.25 15.55L11.4343 11.3657C11.7467 11.0533 12.2533 11.0533 12.5657 11.3657Z" fill="currentColor" />
                  </svg>
               </span>
               {/*end::Svg Icon*/}
            </span>
            {/*begin::Title*/}
            <span className="menu-title text-gray-600 fw-semibold" data-kt-toggle-text-target="true">Show more</span>
            {/*end::Title*/}
            </a>
            {/*end::Toggle*/}
         </div>
         {/*end::Collapse toggle*/}
      </div>
  )
}

export default SidebarBottom