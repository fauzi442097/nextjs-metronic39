import React from 'react'

const Main = () => {
  return (
    <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
      {/*begin::Content wrapper*/}
      <div className="d-flex flex-column flex-column-fluid">
        
          {/*begin::Toolbar*/}
          <div id="kt_app_toolbar" className="app-toolbar pt-6 pb-2">
            {/*begin::Toolbar container*/}
            <div id="kt_app_toolbar_container" className="app-container container-fluid d-flex align-items-stretch">
              {/*begin::Toolbar wrapper*/}
              <div className="app-toolbar-wrapper d-flex flex-stack flex-wrap gap-4 w-100">
                {/*begin::Page title*/}
                <div className="page-title d-flex flex-column justify-content-center gap-1 me-3">
                  {/*begin::Title*/}
                  <h1 className="page-heading d-flex flex-column justify-content-center text-dark fw-bold fs-3 m-0">Customer List</h1>
                  {/*end::Title*/}
                  {/*begin::Breadcrumb*/}
                  <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0">
                    {/*begin::Item*/}
                    <li className="breadcrumb-item text-muted">
                      <a href="../../demo39/dist/index.html" className="text-muted text-hover-primary">Home</a>
                    </li>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <li className="breadcrumb-item">
                      <span className="bullet bg-gray-400 w-5px h-2px" />
                    </li>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <li className="breadcrumb-item text-muted">Apps</li>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <li className="breadcrumb-item">
                      <span className="bullet bg-gray-400 w-5px h-2px" />
                    </li>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <li className="breadcrumb-item text-muted">Customers</li>
                    {/*end::Item*/}
                  </ul>
                  {/*end::Breadcrumb*/}
                </div>
                {/*end::Page title*/}
                {/*begin::Actions*/}
                <div className="d-flex align-items-center gap-2 gap-lg-3">
                  <a href="#" className="btn btn-flex btn-outline btn-color-gray-700 btn-active-color-primary bg-body h-40px fs-7 fw-bold" data-bs-toggle="modal" data-bs-target="#kt_modal_view_users">Add Member</a>
                  <a href="#" className="btn btn-flex btn-primary h-40px fs-7 fw-bold" data-bs-toggle="modal" data-bs-target="#kt_modal_create_campaign">New Campaign</a>
                </div>
                {/*end::Actions*/}
              </div>
              {/*end::Toolbar wrapper*/}
            </div>
            {/*end::Toolbar container*/}
          </div>
          {/*end::Toolbar*/}

          {/*begin::Content*/}
          <div id="kt_app_content" className="app-content flex-column-fluid">
              {/*begin::Content container*/}
              <div id="kt_app_content_container" className="app-container container-fluid">
                  
              </div>
              {/*end::Content container*/}
          </div>
          {/*end::Content*/}
      </div>
      {/*end::Content wrapper*/}
    </div>
  )
}

export default Main