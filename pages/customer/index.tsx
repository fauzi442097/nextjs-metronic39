import React, { useEffect, useRef, useState } from 'react'
import { 
   Card,
   Modal,
   PageToolbar,
   PageAction,
   PageTitle,
   Button,
   Alert,
   AlertLight,
   Input,
   Select,
   Checkbox,
   Radio,
   Badge,
   BadgeLight
} from '@/components'


const Customer = () => {

   const [showModal, setShowModal] = useState(false);
   
  return (
   <>
      <PageToolbar>
         <PageTitle> Customer List </PageTitle>
         <PageAction>
            <a href="#" className="btn btn-flex btn-outline btn-color-gray-700 btn-active-color-primary bg-body h-40px fs-7 fw-bold" data-bs-toggle="modal" data-bs-target="#kt_modal_view_users">Add Member</a>
            <a href="#" className="btn btn-flex btn-primary h-40px fs-7 fw-bold" data-bs-toggle="modal" data-bs-target="#kt_modal_create_campaign">New Campaign</a>
         </PageAction>
      </PageToolbar>

      <div id="kt_app_content" className="app-content flex-column-fluid">
         <div id="kt_app_content_container" className="app-container container-fluid">

         <Alert type="warning" title="Warning" message="Terjadi Kesalahan"/>
         <Alert type="primary" title="Warning" message="Terjadi Kesalahan"/>

         <AlertLight type="warning" title="Warning" message="Terjadi Kesalahan"/>
         <AlertLight type="success" title="Sukses" message="Berhasil disimpan"/>

         <Input.Text name="name" className="form-control-solid"/>

         <Select name="jurusan">
            <option value="1"> IT </option>
            <option value="1"> IT </option>
         </Select>

         <Checkbox label="Nama"/>
         <Radio />

         <Badge type='danger'> Nonaktif </Badge>
         <BadgeLight type='success'> Aktif </BadgeLight>


         
         
         
         <Button type="primary" data-bs-toggle="modal"
            data-bs-target="#kt_modal_1"> Launch demo modal </Button>


         <Modal id="kt_modal_1">
            <Modal.Header> <h3 className="modal-title">Modal title</h3> </Modal.Header>
            <Modal.Body>
               <p>Modal body text goes here.</p>
            </Modal.Body>
            <Modal.Footer>
                  <Button.Custom
                     className="btn-light"
                     data-bs-dismiss="modal"
                     > Close </Button.Custom>
                  <Button> Save changes </Button>
            </Modal.Footer>
         </Modal>

            
            <Card>
               <Card.Header>
                  <div className="card-title">
                     <div className="d-flex align-items-center position-relative my-1">
                        <span className="svg-icon svg-icon-1 position-absolute ms-6">
                           <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height={2} rx={1} transform="rotate(45 17.0365 15.1223)" fill="currentColor" />
                              <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor" />
                           </svg>
                        </span>
                        <input type="text" data-kt-customer-table-filter="search" className="form-control form-control-solid w-250px ps-15" placeholder="Search Customers" />
                     </div>
                  </div>

                  <div className="card-toolbar">
                     <div className="d-flex justify-content-end" data-kt-customer-table-toolbar="base">
                     
                        <button type="button" className="btn btn-light-primary me-3" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                           <span className="svg-icon svg-icon-2">
                              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z" fill="currentColor" />
                              </svg>
                           </span>
                           Filter
                        </button>

                     
                        <div className="menu menu-sub menu-sub-dropdown w-300px w-md-325px" data-kt-menu="true" id="kt-toolbar-filter">
                           <div className="px-7 py-5">
                              <div className="fs-4 text-dark fw-bold">Filter Options</div>
                           </div>
                           <div className="separator border-gray-200" /> 
                           <div className="px-7 py-5">
                              <div className="mb-10">
                                 <label className="form-label fs-5 fw-semibold mb-3">Month:</label>
                                 <select className="form-select form-select-solid fw-bold" data-placeholder="Select option" data-allow-clear="true" data-kt-customer-table-filter="month" data-dropdown-parent="#kt-toolbar-filter">
                                    <option />
                                    <option value="aug">August</option>
                                    <option value="sep">September</option>
                                    <option value="oct">October</option>
                                    <option value="nov">November</option>
                                    <option value="dec">December</option>
                                 </select>
                              </div>
                              <div className="mb-10">
                                 <label className="form-label fs-5 fw-semibold mb-3">Payment Type:</label>
                                 <div className="d-flex flex-column flex-wrap fw-semibold" data-kt-customer-table-filter="payment_type">
                                    <label className="form-check form-check-sm form-check-custom form-check-solid mb-3 me-5">
                                       <input className="form-check-input" type="radio" name="payment_type" defaultValue="all"  />
                                       <span className="form-check-label text-gray-600">All</span>
                                    </label>
                                    <label className="form-check form-check-sm form-check-custom form-check-solid mb-3 me-5">
                                       <input className="form-check-input" type="radio" name="payment_type" defaultValue="visa" />
                                       <span className="form-check-label text-gray-600">Visa</span>
                                    </label>
                                    <label className="form-check form-check-sm form-check-custom form-check-solid mb-3">
                                       <input className="form-check-input" type="radio" name="payment_type" defaultValue="mastercard" />
                                       <span className="form-check-label text-gray-600">Mastercard</span>
                                    </label>
                                    <label className="form-check form-check-sm form-check-custom form-check-solid">
                                       <input className="form-check-input" type="radio" name="payment_type" defaultValue="american_express" />
                                       <span className="form-check-label text-gray-600">American Express</span>
                                    </label>
                                 </div>
                              </div>
                              <div className="d-flex justify-content-end">
                                 <button type="reset" className="btn btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true" data-kt-customer-table-filter="reset">Reset</button>
                                 <button type="submit" className="btn btn-primary" data-kt-menu-dismiss="true" data-kt-customer-table-filter="filter">Apply</button>
                              </div>
                           </div>
                        </div>
                     
                        <button type="button" className="btn btn-light-primary me-3" data-bs-toggle="modal" data-bs-target="#kt_customers_export_modal">
                           <span className="svg-icon svg-icon-2">
                              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect opacity="0.3" x="12.75" y="4.25" width={12} height={2} rx={1} transform="rotate(90 12.75 4.25)" fill="currentColor" />
                              <path d="M12.0573 6.11875L13.5203 7.87435C13.9121 8.34457 14.6232 8.37683 15.056 7.94401C15.4457 7.5543 15.4641 6.92836 15.0979 6.51643L12.4974 3.59084C12.0996 3.14332 11.4004 3.14332 11.0026 3.59084L8.40206 6.51643C8.0359 6.92836 8.0543 7.5543 8.44401 7.94401C8.87683 8.37683 9.58785 8.34458 9.9797 7.87435L11.4427 6.11875C11.6026 5.92684 11.8974 5.92684 12.0573 6.11875Z" fill="currentColor" />
                              <path opacity="0.3" d="M18.75 8.25H17.75C17.1977 8.25 16.75 8.69772 16.75 9.25C16.75 9.80228 17.1977 10.25 17.75 10.25C18.3023 10.25 18.75 10.6977 18.75 11.25V18.25C18.75 18.8023 18.3023 19.25 17.75 19.25H5.75C5.19772 19.25 4.75 18.8023 4.75 18.25V11.25C4.75 10.6977 5.19771 10.25 5.75 10.25C6.30229 10.25 6.75 9.80228 6.75 9.25C6.75 8.69772 6.30229 8.25 5.75 8.25H4.75C3.64543 8.25 2.75 9.14543 2.75 10.25V19.25C2.75 20.3546 3.64543 21.25 4.75 21.25H18.75C19.8546 21.25 20.75 20.3546 20.75 19.25V10.25C20.75 9.14543 19.8546 8.25 18.75 8.25Z" fill="currentColor" />
                              </svg>
                           </span>
                           Export
                        </button>
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_add_customer">Add Customer</button>
                     </div>
                     
                     <div className="d-flex justify-content-end align-items-center d-none" data-kt-customer-table-toolbar="selected">
                        <div className="fw-bold me-5">
                           <span className="me-2" data-kt-customer-table-select="selected_count" />
                           Selected
                        </div>
                        <button type="button" className="btn btn-danger" data-kt-customer-table-select="delete_selected">Delete Selected</button>
                     </div>
                  </div>
               </Card.Header>
               <Card.Body>
               <table className="table align-middle table-row-dashed fs-6 gy-5" id="kt_customers_table">
      {/*begin::Table head*/}
      <thead>
         {/*begin::Table row*/}
         <tr className="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
            <th className="w-10px pe-2">
            <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
               <input className="form-check-input" type="checkbox" data-kt-check="true" data-kt-check-target="#kt_customers_table .form-check-input" defaultValue={1} />
            </div>
            </th>
            <th className="min-w-125px">Customer Name</th>
            <th className="min-w-125px">Email</th>
            <th className="min-w-125px">Company</th>
            <th className="min-w-125px">Payment Method</th>
            <th className="min-w-125px">Created Date</th>
            <th className="text-end min-w-70px">Actions</th>
         </tr>
         {/*end::Table row*/}
      </thead>
      {/*end::Table head*/}
      {/*begin::Table body*/}
      <tbody className="fw-semibold text-gray-600">
         <tr>
            {/*begin::Checkbox*/}
            <td>
            <div className="form-check form-check-sm form-check-custom form-check-solid">
               <input className="form-check-input" type="checkbox" defaultValue={1} />
            </div>
            </td>
            {/*end::Checkbox*/}
            {/*begin::Name=*/}
            <td>
            <a href="../../demo39/dist/apps/customers/view.html" className="text-gray-800 text-hover-primary mb-1">Emma Smith</a>
            </td>
            {/*end::Name=*/}
            {/*begin::Email=*/}
            <td>
            <a href="#" className="text-gray-600 text-hover-primary mb-1">smith@kpmg.com</a>
            </td>
            {/*end::Email=*/}
            {/*begin::Company=*/}
            <td>-</td>
            {/*end::Company=*/}
            {/*begin::Payment method=*/}
            <td data-filter="mastercard">
            <img src="assets/media/svg/card-logos/mastercard.svg" className="w-35px me-3" alt="" />**** 1074</td>
            {/*end::Payment method=*/}
            {/*begin::Date=*/}
            <td>14 Dec 2020, 8:43 pm</td>
            {/*end::Date=*/}
            {/*begin::Action=*/}
            <td className="text-end">
            <a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
               {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
               <span className="svg-icon svg-icon-5 m-0">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                  </svg>
               </span>
               {/*end::Svg Icon*/}</a>
            {/*begin::Menu*/}
            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="../../demo39/dist/apps/customers/view.html" className="menu-link px-3">View</a>
               </div>
               {/*end::Menu item*/}
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
               </div>
               {/*end::Menu item*/}
            </div>
            {/*end::Menu*/}
            </td>
            {/*end::Action=*/}
         </tr>
         <tr>
            {/*begin::Checkbox*/}
            <td>
            <div className="form-check form-check-sm form-check-custom form-check-solid">
               <input className="form-check-input" type="checkbox" defaultValue={1} />
            </div>
            </td>
            {/*end::Checkbox*/}
            {/*begin::Name=*/}
            <td>
            <a href="../../demo39/dist/apps/customers/view.html" className="text-gray-800 text-hover-primary mb-1">Melody Macy</a>
            </td>
            {/*end::Name=*/}
            {/*begin::Email=*/}
            <td>
            <a href="#" className="text-gray-600 text-hover-primary mb-1">melody@altbox.com</a>
            </td>
            {/*end::Email=*/}
            {/*begin::Company=*/}
            <td>Google</td>
            {/*end::Company=*/}
            {/*begin::Payment method=*/}
            <td data-filter="visa">
            <img src="assets/media/svg/card-logos/visa.svg" className="w-35px me-3" alt="" />**** 9500</td>
            {/*end::Payment method=*/}
            {/*begin::Date=*/}
            <td>01 Dec 2020, 10:12 am</td>
            {/*end::Date=*/}
            {/*begin::Action=*/}
            <td className="text-end">
            <a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
               {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
               <span className="svg-icon svg-icon-5 m-0">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                  </svg>
               </span>
               {/*end::Svg Icon*/}</a>
            {/*begin::Menu*/}
            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="../../demo39/dist/apps/customers/view.html" className="menu-link px-3">View</a>
               </div>
               {/*end::Menu item*/}
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
               </div>
               {/*end::Menu item*/}
            </div>
            {/*end::Menu*/}
            </td>
            {/*end::Action=*/}
         </tr>
         <tr>
            {/*begin::Checkbox*/}
            <td>
            <div className="form-check form-check-sm form-check-custom form-check-solid">
               <input className="form-check-input" type="checkbox" defaultValue={1} />
            </div>
            </td>
            {/*end::Checkbox*/}
            {/*begin::Name=*/}
            <td>
            <a href="../../demo39/dist/apps/customers/view.html" className="text-gray-800 text-hover-primary mb-1">Max Smith</a>
            </td>
            {/*end::Name=*/}
            {/*begin::Email=*/}
            <td>
            <a href="#" className="text-gray-600 text-hover-primary mb-1">max@kt.com</a>
            </td>
            {/*end::Email=*/}
            {/*begin::Company=*/}
            <td>Bistro Union</td>
            {/*end::Company=*/}
            {/*begin::Payment method=*/}
            <td data-filter="mastercard">
            <img src="assets/media/svg/card-logos/mastercard.svg" className="w-35px me-3" alt="" />**** 5073</td>
            {/*end::Payment method=*/}
            {/*begin::Date=*/}
            <td>12 Nov 2020, 2:01 pm</td>
            {/*end::Date=*/}
            {/*begin::Action=*/}
            <td className="text-end">
            <a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
               {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
               <span className="svg-icon svg-icon-5 m-0">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                  </svg>
               </span>
               {/*end::Svg Icon*/}</a>
            {/*begin::Menu*/}
            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="../../demo39/dist/apps/customers/view.html" className="menu-link px-3">View</a>
               </div>
               {/*end::Menu item*/}
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
               </div>
               {/*end::Menu item*/}
            </div>
            {/*end::Menu*/}
            </td>
            {/*end::Action=*/}
         </tr>
         <tr>
            {/*begin::Checkbox*/}
            <td>
            <div className="form-check form-check-sm form-check-custom form-check-solid">
               <input className="form-check-input" type="checkbox" defaultValue={1} />
            </div>
            </td>
            {/*end::Checkbox*/}
            {/*begin::Name=*/}
            <td>
            <a href="../../demo39/dist/apps/customers/view.html" className="text-gray-800 text-hover-primary mb-1">Sean Bean</a>
            </td>
            {/*end::Name=*/}
            {/*begin::Email=*/}
            <td>
            <a href="#" className="text-gray-600 text-hover-primary mb-1">sean@dellito.com</a>
            </td>
            {/*end::Email=*/}
            {/*begin::Company=*/}
            <td>Astro Limited</td>
            {/*end::Company=*/}
            {/*begin::Payment method=*/}
            <td data-filter="american_express">
            <img src="assets/media/svg/card-logos/american-express.svg" className="w-35px me-3" alt="" />**** 3866</td>
            {/*end::Payment method=*/}
            {/*begin::Date=*/}
            <td>21 Oct 2020, 5:54 pm</td>
            {/*end::Date=*/}
            {/*begin::Action=*/}
            <td className="text-end">
            <a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
               {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
               <span className="svg-icon svg-icon-5 m-0">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                  </svg>
               </span>
               {/*end::Svg Icon*/}</a>
            {/*begin::Menu*/}
            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="../../demo39/dist/apps/customers/view.html" className="menu-link px-3">View</a>
               </div>
               {/*end::Menu item*/}
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
               </div>
               {/*end::Menu item*/}
            </div>
            {/*end::Menu*/}
            </td>
            {/*end::Action=*/}
         </tr>
         <tr>
            {/*begin::Checkbox*/}
            <td>
            <div className="form-check form-check-sm form-check-custom form-check-solid">
               <input className="form-check-input" type="checkbox" defaultValue={1} />
            </div>
            </td>
            {/*end::Checkbox*/}
            {/*begin::Name=*/}
            <td>
            <a href="../../demo39/dist/apps/customers/view.html" className="text-gray-800 text-hover-primary mb-1">Brian Cox</a>
            </td>
            {/*end::Name=*/}
            {/*begin::Email=*/}
            <td>
            <a href="#" className="text-gray-600 text-hover-primary mb-1">brian@exchange.com</a>
            </td>
            {/*end::Email=*/}
            {/*begin::Company=*/}
            <td>-</td>
            {/*end::Company=*/}
            {/*begin::Payment method=*/}
            <td data-filter="visa">
            <img src="assets/media/svg/card-logos/visa.svg" className="w-35px me-3" alt="" />**** 8408</td>
            {/*end::Payment method=*/}
            {/*begin::Date=*/}
            <td>19 Oct 2020, 7:32 am</td>
            {/*end::Date=*/}
            {/*begin::Action=*/}
            <td className="text-end">
            <a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
               {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
               <span className="svg-icon svg-icon-5 m-0">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                  </svg>
               </span>
               {/*end::Svg Icon*/}</a>
            {/*begin::Menu*/}
            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="../../demo39/dist/apps/customers/view.html" className="menu-link px-3">View</a>
               </div>
               {/*end::Menu item*/}
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
               </div>
               {/*end::Menu item*/}
            </div>
            {/*end::Menu*/}
            </td>
            {/*end::Action=*/}
         </tr>
         <tr>
            {/*begin::Checkbox*/}
            <td>
            <div className="form-check form-check-sm form-check-custom form-check-solid">
               <input className="form-check-input" type="checkbox" defaultValue={1} />
            </div>
            </td>
            {/*end::Checkbox*/}
            {/*begin::Name=*/}
            <td>
            <a href="../../demo39/dist/apps/customers/view.html" className="text-gray-800 text-hover-primary mb-1">Mikaela Collins</a>
            </td>
            {/*end::Name=*/}
            {/*begin::Email=*/}
            <td>
            <a href="#" className="text-gray-600 text-hover-primary mb-1">mik@pex.com</a>
            </td>
            {/*end::Email=*/}
            {/*begin::Company=*/}
            <td>Keenthemes</td>
            {/*end::Company=*/}
            {/*begin::Payment method=*/}
            <td data-filter="american_express">
            <img src="assets/media/svg/card-logos/american-express.svg" className="w-35px me-3" alt="" />**** 7907</td>
            {/*end::Payment method=*/}
            {/*begin::Date=*/}
            <td>23 Sep 2020, 12:37 am</td>
            {/*end::Date=*/}
            {/*begin::Action=*/}
            <td className="text-end">
            <a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
               {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
               <span className="svg-icon svg-icon-5 m-0">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                  </svg>
               </span>
               {/*end::Svg Icon*/}</a>
            {/*begin::Menu*/}
            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="../../demo39/dist/apps/customers/view.html" className="menu-link px-3">View</a>
               </div>
               {/*end::Menu item*/}
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
               </div>
               {/*end::Menu item*/}
            </div>
            {/*end::Menu*/}
            </td>
            {/*end::Action=*/}
         </tr>
         <tr>
            {/*begin::Checkbox*/}
            <td>
            <div className="form-check form-check-sm form-check-custom form-check-solid">
               <input className="form-check-input" type="checkbox" defaultValue={1} />
            </div>
            </td>
            {/*end::Checkbox*/}
            {/*begin::Name=*/}
            <td>
            <a href="../../demo39/dist/apps/customers/view.html" className="text-gray-800 text-hover-primary mb-1">Francis Mitcham</a>
            </td>
            {/*end::Name=*/}
            {/*begin::Email=*/}
            <td>
            <a href="#" className="text-gray-600 text-hover-primary mb-1">f.mit@kpmg.com</a>
            </td>
            {/*end::Email=*/}
            {/*begin::Company=*/}
            <td>Paypal</td>
            {/*end::Company=*/}
            {/*begin::Payment method=*/}
            <td data-filter="mastercard">
            <img src="assets/media/svg/card-logos/mastercard.svg" className="w-35px me-3" alt="" />**** 2183</td>
            {/*end::Payment method=*/}
            {/*begin::Date=*/}
            <td>11 Sep 2020, 3:15 pm</td>
            {/*end::Date=*/}
            {/*begin::Action=*/}
            <td className="text-end">
            <a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
               {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
               <span className="svg-icon svg-icon-5 m-0">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                  </svg>
               </span>
               {/*end::Svg Icon*/}</a>
            {/*begin::Menu*/}
            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="../../demo39/dist/apps/customers/view.html" className="menu-link px-3">View</a>
               </div>
               {/*end::Menu item*/}
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
               </div>
               {/*end::Menu item*/}
            </div>
            {/*end::Menu*/}
            </td>
            {/*end::Action=*/}
         </tr>
         <tr>
            {/*begin::Checkbox*/}
            <td>
            <div className="form-check form-check-sm form-check-custom form-check-solid">
               <input className="form-check-input" type="checkbox" defaultValue={1} />
            </div>
            </td>
            {/*end::Checkbox*/}
            {/*begin::Name=*/}
            <td>
            <a href="../../demo39/dist/apps/customers/view.html" className="text-gray-800 text-hover-primary mb-1">Olivia Wild</a>
            </td>
            {/*end::Name=*/}
            {/*begin::Email=*/}
            <td>
            <a href="#" className="text-gray-600 text-hover-primary mb-1">olivia@corpmail.com</a>
            </td>
            {/*end::Email=*/}
            {/*begin::Company=*/}
            <td>-</td>
            {/*end::Company=*/}
            {/*begin::Payment method=*/}
            <td data-filter="american_express">
            <img src="assets/media/svg/card-logos/american-express.svg" className="w-35px me-3" alt="" />**** 2541</td>
            {/*end::Payment method=*/}
            {/*begin::Date=*/}
            <td>03 Sep 2020, 1:08 am</td>
            {/*end::Date=*/}
            {/*begin::Action=*/}
            <td className="text-end">
            <a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
               {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
               <span className="svg-icon svg-icon-5 m-0">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                  </svg>
               </span>
               {/*end::Svg Icon*/}</a>
            {/*begin::Menu*/}
            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="../../demo39/dist/apps/customers/view.html" className="menu-link px-3">View</a>
               </div>
               {/*end::Menu item*/}
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
               </div>
               {/*end::Menu item*/}
            </div>
            {/*end::Menu*/}
            </td>
            {/*end::Action=*/}
         </tr>
         <tr>
            {/*begin::Checkbox*/}
            <td>
            <div className="form-check form-check-sm form-check-custom form-check-solid">
               <input className="form-check-input" type="checkbox" defaultValue={1} />
            </div>
            </td>
            {/*end::Checkbox*/}
            {/*begin::Name=*/}
            <td>
            <a href="../../demo39/dist/apps/customers/view.html" className="text-gray-800 text-hover-primary mb-1">Neil Owen</a>
            </td>
            {/*end::Name=*/}
            {/*begin::Email=*/}
            <td>
            <a href="#" className="text-gray-600 text-hover-primary mb-1">owen.neil@gmail.com</a>
            </td>
            {/*end::Email=*/}
            {/*begin::Company=*/}
            <td>Paramount</td>
            {/*end::Company=*/}
            {/*begin::Payment method=*/}
            <td data-filter="visa">
            <img src="assets/media/svg/card-logos/visa.svg" className="w-35px me-3" alt="" />**** 8965</td>
            {/*end::Payment method=*/}
            {/*begin::Date=*/}
            <td>01 Sep 2020, 4:58 pm</td>
            {/*end::Date=*/}
            {/*begin::Action=*/}
            <td className="text-end">
            <a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
               {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
               <span className="svg-icon svg-icon-5 m-0">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                  </svg>
               </span>
               {/*end::Svg Icon*/}</a>
            {/*begin::Menu*/}
            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="../../demo39/dist/apps/customers/view.html" className="menu-link px-3">View</a>
               </div>
               {/*end::Menu item*/}
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
               </div>
               {/*end::Menu item*/}
            </div>
            {/*end::Menu*/}
            </td>
            {/*end::Action=*/}
         </tr>
         <tr>
            {/*begin::Checkbox*/}
            <td>
            <div className="form-check form-check-sm form-check-custom form-check-solid">
               <input className="form-check-input" type="checkbox" defaultValue={1} />
            </div>
            </td>
            {/*end::Checkbox*/}
            {/*begin::Name=*/}
            <td>
            <a href="../../demo39/dist/apps/customers/view.html" className="text-gray-800 text-hover-primary mb-1">Dan Wilson</a>
            </td>
            {/*end::Name=*/}
            {/*begin::Email=*/}
            <td>
            <a href="#" className="text-gray-600 text-hover-primary mb-1">dam@consilting.com</a>
            </td>
            {/*end::Email=*/}
            {/*begin::Company=*/}
            <td>Trinity Studio</td>
            {/*end::Company=*/}
            {/*begin::Payment method=*/}
            <td data-filter="visa">
            <img src="assets/media/svg/card-logos/visa.svg" className="w-35px me-3" alt="" />**** 5158</td>
            {/*end::Payment method=*/}
            {/*begin::Date=*/}
            <td>18 Aug 2020, 3:34 pm</td>
            {/*end::Date=*/}
            {/*begin::Action=*/}
            <td className="text-end">
            <a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
               {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
               <span className="svg-icon svg-icon-5 m-0">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                  </svg>
               </span>
               {/*end::Svg Icon*/}</a>
            {/*begin::Menu*/}
            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="../../demo39/dist/apps/customers/view.html" className="menu-link px-3">View</a>
               </div>
               {/*end::Menu item*/}
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
               </div>
               {/*end::Menu item*/}
            </div>
            {/*end::Menu*/}
            </td>
            {/*end::Action=*/}
         </tr>
         <tr>
            {/*begin::Checkbox*/}
            <td>
            <div className="form-check form-check-sm form-check-custom form-check-solid">
               <input className="form-check-input" type="checkbox" defaultValue={1} />
            </div>
            </td>
            {/*end::Checkbox*/}
            {/*begin::Name=*/}
            <td>
            <a href="../../demo39/dist/apps/customers/view.html" className="text-gray-800 text-hover-primary mb-1">Emma Bold</a>
            </td>
            {/*end::Name=*/}
            {/*begin::Email=*/}
            <td>
            <a href="#" className="text-gray-600 text-hover-primary mb-1">emma@intenso.com</a>
            </td>
            {/*end::Email=*/}
            {/*begin::Company=*/}
            <td>B&amp;T Legal Services</td>
            {/*end::Company=*/}
            {/*begin::Payment method=*/}
            <td data-filter="mastercard">
            <img src="assets/media/svg/card-logos/mastercard.svg" className="w-35px me-3" alt="" />**** 7390</td>
            {/*end::Payment method=*/}
            {/*begin::Date=*/}
            <td>14 Aug 2020, 1:21 pm</td>
            {/*end::Date=*/}
            {/*begin::Action=*/}
            <td className="text-end">
            <a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
               {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
               <span className="svg-icon svg-icon-5 m-0">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                  </svg>
               </span>
               {/*end::Svg Icon*/}</a>
            {/*begin::Menu*/}
            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="../../demo39/dist/apps/customers/view.html" className="menu-link px-3">View</a>
               </div>
               {/*end::Menu item*/}
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
               </div>
               {/*end::Menu item*/}
            </div>
            {/*end::Menu*/}
            </td>
            {/*end::Action=*/}
         </tr>
         <tr>
            {/*begin::Checkbox*/}
            <td>
            <div className="form-check form-check-sm form-check-custom form-check-solid">
               <input className="form-check-input" type="checkbox" defaultValue={1} />
            </div>
            </td>
            {/*end::Checkbox*/}
            {/*begin::Name=*/}
            <td>
            <a href="../../demo39/dist/apps/customers/view.html" className="text-gray-800 text-hover-primary mb-1">Ana Crown</a>
            </td>
            {/*end::Name=*/}
            {/*begin::Email=*/}
            <td>
            <a href="#" className="text-gray-600 text-hover-primary mb-1">ana.cf@limtel.com</a>
            </td>
            {/*end::Email=*/}
            {/*begin::Company=*/}
            <td>Paysafe Security</td>
            {/*end::Company=*/}
            {/*begin::Payment method=*/}
            <td data-filter="american_express">
            <img src="assets/media/svg/card-logos/american-express.svg" className="w-35px me-3" alt="" />**** 2621</td>
            {/*end::Payment method=*/}
            {/*begin::Date=*/}
            <td>11 Aug 2020, 5:13 pm</td>
            {/*end::Date=*/}
            {/*begin::Action=*/}
            <td className="text-end">
            <a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
               {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
               <span className="svg-icon svg-icon-5 m-0">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                  </svg>
               </span>
               {/*end::Svg Icon*/}</a>
            {/*begin::Menu*/}
            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="../../demo39/dist/apps/customers/view.html" className="menu-link px-3">View</a>
               </div>
               {/*end::Menu item*/}
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
               </div>
               {/*end::Menu item*/}
            </div>
            {/*end::Menu*/}
            </td>
            {/*end::Action=*/}
         </tr>
         <tr>
            {/*begin::Checkbox*/}
            <td>
            <div className="form-check form-check-sm form-check-custom form-check-solid">
               <input className="form-check-input" type="checkbox" defaultValue={1} />
            </div>
            </td>
            {/*end::Checkbox*/}
            {/*begin::Name=*/}
            <td>
            <a href="../../demo39/dist/apps/customers/view.html" className="text-gray-800 text-hover-primary mb-1">Emma Smith</a>
            </td>
            {/*end::Name=*/}
            {/*begin::Email=*/}
            <td>
            <a href="#" className="text-gray-600 text-hover-primary mb-1">smith@kpmg.com</a>
            </td>
            {/*end::Email=*/}
            {/*begin::Company=*/}
            <td>-</td>
            {/*end::Company=*/}
            {/*begin::Payment method=*/}
            <td data-filter="mastercard">
            <img src="assets/media/svg/card-logos/mastercard.svg" className="w-35px me-3" alt="" />**** 1074</td>
            {/*end::Payment method=*/}
            {/*begin::Date=*/}
            <td>14 Dec 2020, 8:43 pm</td>
            {/*end::Date=*/}
            {/*begin::Action=*/}
            <td className="text-end">
            <a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
               {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
               <span className="svg-icon svg-icon-5 m-0">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                  </svg>
               </span>
               {/*end::Svg Icon*/}</a>
            {/*begin::Menu*/}
            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="../../demo39/dist/apps/customers/view.html" className="menu-link px-3">View</a>
               </div>
               {/*end::Menu item*/}
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
               </div>
               {/*end::Menu item*/}
            </div>
            {/*end::Menu*/}
            </td>
            {/*end::Action=*/}
         </tr>
         <tr>
            {/*begin::Checkbox*/}
            <td>
            <div className="form-check form-check-sm form-check-custom form-check-solid">
               <input className="form-check-input" type="checkbox" defaultValue={1} />
            </div>
            </td>
            {/*end::Checkbox*/}
            {/*begin::Name=*/}
            <td>
            <a href="../../demo39/dist/apps/customers/view.html" className="text-gray-800 text-hover-primary mb-1">Melody Macy</a>
            </td>
            {/*end::Name=*/}
            {/*begin::Email=*/}
            <td>
            <a href="#" className="text-gray-600 text-hover-primary mb-1">melody@altbox.com</a>
            </td>
            {/*end::Email=*/}
            {/*begin::Company=*/}
            <td>Google</td>
            {/*end::Company=*/}
            {/*begin::Payment method=*/}
            <td data-filter="visa">
            <img src="assets/media/svg/card-logos/visa.svg" className="w-35px me-3" alt="" />**** 9500</td>
            {/*end::Payment method=*/}
            {/*begin::Date=*/}
            <td>01 Dec 2020, 10:12 am</td>
            {/*end::Date=*/}
            {/*begin::Action=*/}
            <td className="text-end">
            <a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
               {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
               <span className="svg-icon svg-icon-5 m-0">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                  </svg>
               </span>
               {/*end::Svg Icon*/}</a>
            {/*begin::Menu*/}
            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="../../demo39/dist/apps/customers/view.html" className="menu-link px-3">View</a>
               </div>
               {/*end::Menu item*/}
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
               </div>
               {/*end::Menu item*/}
            </div>
            {/*end::Menu*/}
            </td>
            {/*end::Action=*/}
         </tr>
         <tr>
            {/*begin::Checkbox*/}
            <td>
            <div className="form-check form-check-sm form-check-custom form-check-solid">
               <input className="form-check-input" type="checkbox" defaultValue={1} />
            </div>
            </td>
            {/*end::Checkbox*/}
            {/*begin::Name=*/}
            <td>
            <a href="../../demo39/dist/apps/customers/view.html" className="text-gray-800 text-hover-primary mb-1">Max Smith</a>
            </td>
            {/*end::Name=*/}
            {/*begin::Email=*/}
            <td>
            <a href="#" className="text-gray-600 text-hover-primary mb-1">max@kt.com</a>
            </td>
            {/*end::Email=*/}
            {/*begin::Company=*/}
            <td>Bistro Union</td>
            {/*end::Company=*/}
            {/*begin::Payment method=*/}
            <td data-filter="mastercard">
            <img src="assets/media/svg/card-logos/mastercard.svg" className="w-35px me-3" alt="" />**** 5073</td>
            {/*end::Payment method=*/}
            {/*begin::Date=*/}
            <td>12 Nov 2020, 2:01 pm</td>
            {/*end::Date=*/}
            {/*begin::Action=*/}
            <td className="text-end">
            <a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
               {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
               <span className="svg-icon svg-icon-5 m-0">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                  </svg>
               </span>
               {/*end::Svg Icon*/}</a>
            {/*begin::Menu*/}
            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="../../demo39/dist/apps/customers/view.html" className="menu-link px-3">View</a>
               </div>
               {/*end::Menu item*/}
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
               </div>
               {/*end::Menu item*/}
            </div>
            {/*end::Menu*/}
            </td>
            {/*end::Action=*/}
         </tr>
         <tr>
            {/*begin::Checkbox*/}
            <td>
            <div className="form-check form-check-sm form-check-custom form-check-solid">
               <input className="form-check-input" type="checkbox" defaultValue={1} />
            </div>
            </td>
            {/*end::Checkbox*/}
            {/*begin::Name=*/}
            <td>
            <a href="../../demo39/dist/apps/customers/view.html" className="text-gray-800 text-hover-primary mb-1">Sean Bean</a>
            </td>
            {/*end::Name=*/}
            {/*begin::Email=*/}
            <td>
            <a href="#" className="text-gray-600 text-hover-primary mb-1">sean@dellito.com</a>
            </td>
            {/*end::Email=*/}
            {/*begin::Company=*/}
            <td>Astro Limited</td>
            {/*end::Company=*/}
            {/*begin::Payment method=*/}
            <td data-filter="american_express">
            <img src="assets/media/svg/card-logos/american-express.svg" className="w-35px me-3" alt="" />**** 3866</td>
            {/*end::Payment method=*/}
            {/*begin::Date=*/}
            <td>21 Oct 2020, 5:54 pm</td>
            {/*end::Date=*/}
            {/*begin::Action=*/}
            <td className="text-end">
            <a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
               {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
               <span className="svg-icon svg-icon-5 m-0">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                  </svg>
               </span>
               {/*end::Svg Icon*/}</a>
            {/*begin::Menu*/}
            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="../../demo39/dist/apps/customers/view.html" className="menu-link px-3">View</a>
               </div>
               {/*end::Menu item*/}
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
               </div>
               {/*end::Menu item*/}
            </div>
            {/*end::Menu*/}
            </td>
            {/*end::Action=*/}
         </tr>
         <tr>
            {/*begin::Checkbox*/}
            <td>
            <div className="form-check form-check-sm form-check-custom form-check-solid">
               <input className="form-check-input" type="checkbox" defaultValue={1} />
            </div>
            </td>
            {/*end::Checkbox*/}
            {/*begin::Name=*/}
            <td>
            <a href="../../demo39/dist/apps/customers/view.html" className="text-gray-800 text-hover-primary mb-1">Brian Cox</a>
            </td>
            {/*end::Name=*/}
            {/*begin::Email=*/}
            <td>
            <a href="#" className="text-gray-600 text-hover-primary mb-1">brian@exchange.com</a>
            </td>
            {/*end::Email=*/}
            {/*begin::Company=*/}
            <td>-</td>
            {/*end::Company=*/}
            {/*begin::Payment method=*/}
            <td data-filter="visa">
            <img src="assets/media/svg/card-logos/visa.svg" className="w-35px me-3" alt="" />**** 8408</td>
            {/*end::Payment method=*/}
            {/*begin::Date=*/}
            <td>19 Oct 2020, 7:32 am</td>
            {/*end::Date=*/}
            {/*begin::Action=*/}
            <td className="text-end">
            <a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
               {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
               <span className="svg-icon svg-icon-5 m-0">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                  </svg>
               </span>
               {/*end::Svg Icon*/}</a>
            {/*begin::Menu*/}
            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="../../demo39/dist/apps/customers/view.html" className="menu-link px-3">View</a>
               </div>
               {/*end::Menu item*/}
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
               </div>
               {/*end::Menu item*/}
            </div>
            {/*end::Menu*/}
            </td>
            {/*end::Action=*/}
         </tr>
         <tr>
            {/*begin::Checkbox*/}
            <td>
            <div className="form-check form-check-sm form-check-custom form-check-solid">
               <input className="form-check-input" type="checkbox" defaultValue={1} />
            </div>
            </td>
            {/*end::Checkbox*/}
            {/*begin::Name=*/}
            <td>
            <a href="../../demo39/dist/apps/customers/view.html" className="text-gray-800 text-hover-primary mb-1">Mikaela Collins</a>
            </td>
            {/*end::Name=*/}
            {/*begin::Email=*/}
            <td>
            <a href="#" className="text-gray-600 text-hover-primary mb-1">mik@pex.com</a>
            </td>
            {/*end::Email=*/}
            {/*begin::Company=*/}
            <td>Keenthemes</td>
            {/*end::Company=*/}
            {/*begin::Payment method=*/}
            <td data-filter="american_express">
            <img src="assets/media/svg/card-logos/american-express.svg" className="w-35px me-3" alt="" />**** 7907</td>
            {/*end::Payment method=*/}
            {/*begin::Date=*/}
            <td>23 Sep 2020, 12:37 am</td>
            {/*end::Date=*/}
            {/*begin::Action=*/}
            <td className="text-end">
            <a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
               {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
               <span className="svg-icon svg-icon-5 m-0">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                  </svg>
               </span>
               {/*end::Svg Icon*/}</a>
            {/*begin::Menu*/}
            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="../../demo39/dist/apps/customers/view.html" className="menu-link px-3">View</a>
               </div>
               {/*end::Menu item*/}
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
               </div>
               {/*end::Menu item*/}
            </div>
            {/*end::Menu*/}
            </td>
            {/*end::Action=*/}
         </tr>
         <tr>
            {/*begin::Checkbox*/}
            <td>
            <div className="form-check form-check-sm form-check-custom form-check-solid">
               <input className="form-check-input" type="checkbox" defaultValue={1} />
            </div>
            </td>
            {/*end::Checkbox*/}
            {/*begin::Name=*/}
            <td>
            <a href="../../demo39/dist/apps/customers/view.html" className="text-gray-800 text-hover-primary mb-1">Francis Mitcham</a>
            </td>
            {/*end::Name=*/}
            {/*begin::Email=*/}
            <td>
            <a href="#" className="text-gray-600 text-hover-primary mb-1">f.mit@kpmg.com</a>
            </td>
            {/*end::Email=*/}
            {/*begin::Company=*/}
            <td>Paypal</td>
            {/*end::Company=*/}
            {/*begin::Payment method=*/}
            <td data-filter="mastercard">
            <img src="assets/media/svg/card-logos/mastercard.svg" className="w-35px me-3" alt="" />**** 2183</td>
            {/*end::Payment method=*/}
            {/*begin::Date=*/}
            <td>11 Sep 2020, 3:15 pm</td>
            {/*end::Date=*/}
            {/*begin::Action=*/}
            <td className="text-end">
            <a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
               {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
               <span className="svg-icon svg-icon-5 m-0">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                  </svg>
               </span>
               {/*end::Svg Icon*/}</a>
            {/*begin::Menu*/}
            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="../../demo39/dist/apps/customers/view.html" className="menu-link px-3">View</a>
               </div>
               {/*end::Menu item*/}
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
               </div>
               {/*end::Menu item*/}
            </div>
            {/*end::Menu*/}
            </td>
            {/*end::Action=*/}
         </tr>
         <tr>
            {/*begin::Checkbox*/}
            <td>
            <div className="form-check form-check-sm form-check-custom form-check-solid">
               <input className="form-check-input" type="checkbox" defaultValue={1} />
            </div>
            </td>
            {/*end::Checkbox*/}
            {/*begin::Name=*/}
            <td>
            <a href="../../demo39/dist/apps/customers/view.html" className="text-gray-800 text-hover-primary mb-1">Olivia Wild</a>
            </td>
            {/*end::Name=*/}
            {/*begin::Email=*/}
            <td>
            <a href="#" className="text-gray-600 text-hover-primary mb-1">olivia@corpmail.com</a>
            </td>
            {/*end::Email=*/}
            {/*begin::Company=*/}
            <td>-</td>
            {/*end::Company=*/}
            {/*begin::Payment method=*/}
            <td data-filter="american_express">
            <img src="assets/media/svg/card-logos/american-express.svg" className="w-35px me-3" alt="" />**** 2541</td>
            {/*end::Payment method=*/}
            {/*begin::Date=*/}
            <td>03 Sep 2020, 1:08 am</td>
            {/*end::Date=*/}
            {/*begin::Action=*/}
            <td className="text-end">
            <a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
               {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
               <span className="svg-icon svg-icon-5 m-0">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                  </svg>
               </span>
               {/*end::Svg Icon*/}</a>
            {/*begin::Menu*/}
            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="../../demo39/dist/apps/customers/view.html" className="menu-link px-3">View</a>
               </div>
               {/*end::Menu item*/}
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
               </div>
               {/*end::Menu item*/}
            </div>
            {/*end::Menu*/}
            </td>
            {/*end::Action=*/}
         </tr>
         <tr>
            {/*begin::Checkbox*/}
            <td>
            <div className="form-check form-check-sm form-check-custom form-check-solid">
               <input className="form-check-input" type="checkbox" defaultValue={1} />
            </div>
            </td>
            {/*end::Checkbox*/}
            {/*begin::Name=*/}
            <td>
            <a href="../../demo39/dist/apps/customers/view.html" className="text-gray-800 text-hover-primary mb-1">Neil Owen</a>
            </td>
            {/*end::Name=*/}
            {/*begin::Email=*/}
            <td>
            <a href="#" className="text-gray-600 text-hover-primary mb-1">owen.neil@gmail.com</a>
            </td>
            {/*end::Email=*/}
            {/*begin::Company=*/}
            <td>Paramount</td>
            {/*end::Company=*/}
            {/*begin::Payment method=*/}
            <td data-filter="visa">
            <img src="assets/media/svg/card-logos/visa.svg" className="w-35px me-3" alt="" />**** 8965</td>
            {/*end::Payment method=*/}
            {/*begin::Date=*/}
            <td>01 Sep 2020, 4:58 pm</td>
            {/*end::Date=*/}
            {/*begin::Action=*/}
            <td className="text-end">
            <a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
               {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
               <span className="svg-icon svg-icon-5 m-0">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                  </svg>
               </span>
               {/*end::Svg Icon*/}</a>
            {/*begin::Menu*/}
            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="../../demo39/dist/apps/customers/view.html" className="menu-link px-3">View</a>
               </div>
               {/*end::Menu item*/}
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
               </div>
               {/*end::Menu item*/}
            </div>
            {/*end::Menu*/}
            </td>
            {/*end::Action=*/}
         </tr>
         <tr>
            {/*begin::Checkbox*/}
            <td>
            <div className="form-check form-check-sm form-check-custom form-check-solid">
               <input className="form-check-input" type="checkbox" defaultValue={1} />
            </div>
            </td>
            {/*end::Checkbox*/}
            {/*begin::Name=*/}
            <td>
            <a href="../../demo39/dist/apps/customers/view.html" className="text-gray-800 text-hover-primary mb-1">Dan Wilson</a>
            </td>
            {/*end::Name=*/}
            {/*begin::Email=*/}
            <td>
            <a href="#" className="text-gray-600 text-hover-primary mb-1">dam@consilting.com</a>
            </td>
            {/*end::Email=*/}
            {/*begin::Company=*/}
            <td>Trinity Studio</td>
            {/*end::Company=*/}
            {/*begin::Payment method=*/}
            <td data-filter="visa">
            <img src="assets/media/svg/card-logos/visa.svg" className="w-35px me-3" alt="" />**** 5158</td>
            {/*end::Payment method=*/}
            {/*begin::Date=*/}
            <td>18 Aug 2020, 3:34 pm</td>
            {/*end::Date=*/}
            {/*begin::Action=*/}
            <td className="text-end">
            <a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
               {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
               <span className="svg-icon svg-icon-5 m-0">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                  </svg>
               </span>
               {/*end::Svg Icon*/}</a>
            {/*begin::Menu*/}
            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="../../demo39/dist/apps/customers/view.html" className="menu-link px-3">View</a>
               </div>
               {/*end::Menu item*/}
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
               </div>
               {/*end::Menu item*/}
            </div>
            {/*end::Menu*/}
            </td>
            {/*end::Action=*/}
         </tr>
         <tr>
            {/*begin::Checkbox*/}
            <td>
            <div className="form-check form-check-sm form-check-custom form-check-solid">
               <input className="form-check-input" type="checkbox" defaultValue={1} />
            </div>
            </td>
            {/*end::Checkbox*/}
            {/*begin::Name=*/}
            <td>
            <a href="../../demo39/dist/apps/customers/view.html" className="text-gray-800 text-hover-primary mb-1">Emma Bold</a>
            </td>
            {/*end::Name=*/}
            {/*begin::Email=*/}
            <td>
            <a href="#" className="text-gray-600 text-hover-primary mb-1">emma@intenso.com</a>
            </td>
            {/*end::Email=*/}
            {/*begin::Company=*/}
            <td>B&amp;T Legal Services</td>
            {/*end::Company=*/}
            {/*begin::Payment method=*/}
            <td data-filter="mastercard">
            <img src="assets/media/svg/card-logos/mastercard.svg" className="w-35px me-3" alt="" />**** 7390</td>
            {/*end::Payment method=*/}
            {/*begin::Date=*/}
            <td>14 Aug 2020, 1:21 pm</td>
            {/*end::Date=*/}
            {/*begin::Action=*/}
            <td className="text-end">
            <a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
               {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
               <span className="svg-icon svg-icon-5 m-0">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                  </svg>
               </span>
               {/*end::Svg Icon*/}</a>
            {/*begin::Menu*/}
            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="../../demo39/dist/apps/customers/view.html" className="menu-link px-3">View</a>
               </div>
               {/*end::Menu item*/}
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
               </div>
               {/*end::Menu item*/}
            </div>
            {/*end::Menu*/}
            </td>
            {/*end::Action=*/}
         </tr>
         <tr>
            {/*begin::Checkbox*/}
            <td>
            <div className="form-check form-check-sm form-check-custom form-check-solid">
               <input className="form-check-input" type="checkbox" defaultValue={1} />
            </div>
            </td>
            {/*end::Checkbox*/}
            {/*begin::Name=*/}
            <td>
            <a href="../../demo39/dist/apps/customers/view.html" className="text-gray-800 text-hover-primary mb-1">Ana Crown</a>
            </td>
            {/*end::Name=*/}
            {/*begin::Email=*/}
            <td>
            <a href="#" className="text-gray-600 text-hover-primary mb-1">ana.cf@limtel.com</a>
            </td>
            {/*end::Email=*/}
            {/*begin::Company=*/}
            <td>Paysafe Security</td>
            {/*end::Company=*/}
            {/*begin::Payment method=*/}
            <td data-filter="american_express">
            <img src="assets/media/svg/card-logos/american-express.svg" className="w-35px me-3" alt="" />**** 2621</td>
            {/*end::Payment method=*/}
            {/*begin::Date=*/}
            <td>11 Aug 2020, 5:13 pm</td>
            {/*end::Date=*/}
            {/*begin::Action=*/}
            <td className="text-end">
            <a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
               {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
               <span className="svg-icon svg-icon-5 m-0">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                  </svg>
               </span>
               {/*end::Svg Icon*/}</a>
            {/*begin::Menu*/}
            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="../../demo39/dist/apps/customers/view.html" className="menu-link px-3">View</a>
               </div>
               {/*end::Menu item*/}
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
               </div>
               {/*end::Menu item*/}
            </div>
            {/*end::Menu*/}
            </td>
            {/*end::Action=*/}
         </tr>
         <tr>
            {/*begin::Checkbox*/}
            <td>
            <div className="form-check form-check-sm form-check-custom form-check-solid">
               <input className="form-check-input" type="checkbox" defaultValue={1} />
            </div>
            </td>
            {/*end::Checkbox*/}
            {/*begin::Name=*/}
            <td>
            <a href="../../demo39/dist/apps/customers/view.html" className="text-gray-800 text-hover-primary mb-1">Emma Smith</a>
            </td>
            {/*end::Name=*/}
            {/*begin::Email=*/}
            <td>
            <a href="#" className="text-gray-600 text-hover-primary mb-1">smith@kpmg.com</a>
            </td>
            {/*end::Email=*/}
            {/*begin::Company=*/}
            <td>-</td>
            {/*end::Company=*/}
            {/*begin::Payment method=*/}
            <td data-filter="mastercard">
            <img src="assets/media/svg/card-logos/mastercard.svg" className="w-35px me-3" alt="" />**** 1074</td>
            {/*end::Payment method=*/}
            {/*begin::Date=*/}
            <td>14 Dec 2020, 8:43 pm</td>
            {/*end::Date=*/}
            {/*begin::Action=*/}
            <td className="text-end">
            <a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
               {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
               <span className="svg-icon svg-icon-5 m-0">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                  </svg>
               </span>
               {/*end::Svg Icon*/}</a>
            {/*begin::Menu*/}
            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="../../demo39/dist/apps/customers/view.html" className="menu-link px-3">View</a>
               </div>
               {/*end::Menu item*/}
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
               </div>
               {/*end::Menu item*/}
            </div>
            {/*end::Menu*/}
            </td>
            {/*end::Action=*/}
         </tr>
         <tr>
            {/*begin::Checkbox*/}
            <td>
            <div className="form-check form-check-sm form-check-custom form-check-solid">
               <input className="form-check-input" type="checkbox" defaultValue={1} />
            </div>
            </td>
            {/*end::Checkbox*/}
            {/*begin::Name=*/}
            <td>
            <a href="../../demo39/dist/apps/customers/view.html" className="text-gray-800 text-hover-primary mb-1">Melody Macy</a>
            </td>
            {/*end::Name=*/}
            {/*begin::Email=*/}
            <td>
            <a href="#" className="text-gray-600 text-hover-primary mb-1">melody@altbox.com</a>
            </td>
            {/*end::Email=*/}
            {/*begin::Company=*/}
            <td>Google</td>
            {/*end::Company=*/}
            {/*begin::Payment method=*/}
            <td data-filter="visa">
            <img src="assets/media/svg/card-logos/visa.svg" className="w-35px me-3" alt="" />**** 9500</td>
            {/*end::Payment method=*/}
            {/*begin::Date=*/}
            <td>01 Dec 2020, 10:12 am</td>
            {/*end::Date=*/}
            {/*begin::Action=*/}
            <td className="text-end">
            <a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
               {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
               <span className="svg-icon svg-icon-5 m-0">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                  </svg>
               </span>
               {/*end::Svg Icon*/}</a>
            {/*begin::Menu*/}
            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="../../demo39/dist/apps/customers/view.html" className="menu-link px-3">View</a>
               </div>
               {/*end::Menu item*/}
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
               </div>
               {/*end::Menu item*/}
            </div>
            {/*end::Menu*/}
            </td>
            {/*end::Action=*/}
         </tr>
         <tr>
            {/*begin::Checkbox*/}
            <td>
            <div className="form-check form-check-sm form-check-custom form-check-solid">
               <input className="form-check-input" type="checkbox" defaultValue={1} />
            </div>
            </td>
            {/*end::Checkbox*/}
            {/*begin::Name=*/}
            <td>
            <a href="../../demo39/dist/apps/customers/view.html" className="text-gray-800 text-hover-primary mb-1">Max Smith</a>
            </td>
            {/*end::Name=*/}
            {/*begin::Email=*/}
            <td>
            <a href="#" className="text-gray-600 text-hover-primary mb-1">max@kt.com</a>
            </td>
            {/*end::Email=*/}
            {/*begin::Company=*/}
            <td>Bistro Union</td>
            {/*end::Company=*/}
            {/*begin::Payment method=*/}
            <td data-filter="mastercard">
            <img src="assets/media/svg/card-logos/mastercard.svg" className="w-35px me-3" alt="" />**** 5073</td>
            {/*end::Payment method=*/}
            {/*begin::Date=*/}
            <td>12 Nov 2020, 2:01 pm</td>
            {/*end::Date=*/}
            {/*begin::Action=*/}
            <td className="text-end">
            <a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
               {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
               <span className="svg-icon svg-icon-5 m-0">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                  </svg>
               </span>
               {/*end::Svg Icon*/}</a>
            {/*begin::Menu*/}
            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="../../demo39/dist/apps/customers/view.html" className="menu-link px-3">View</a>
               </div>
               {/*end::Menu item*/}
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
               </div>
               {/*end::Menu item*/}
            </div>
            {/*end::Menu*/}
            </td>
            {/*end::Action=*/}
         </tr>
         <tr>
            {/*begin::Checkbox*/}
            <td>
            <div className="form-check form-check-sm form-check-custom form-check-solid">
               <input className="form-check-input" type="checkbox" defaultValue={1} />
            </div>
            </td>
            {/*end::Checkbox*/}
            {/*begin::Name=*/}
            <td>
            <a href="../../demo39/dist/apps/customers/view.html" className="text-gray-800 text-hover-primary mb-1">Sean Bean</a>
            </td>
            {/*end::Name=*/}
            {/*begin::Email=*/}
            <td>
            <a href="#" className="text-gray-600 text-hover-primary mb-1">sean@dellito.com</a>
            </td>
            {/*end::Email=*/}
            {/*begin::Company=*/}
            <td>Astro Limited</td>
            {/*end::Company=*/}
            {/*begin::Payment method=*/}
            <td data-filter="american_express">
            <img src="assets/media/svg/card-logos/american-express.svg" className="w-35px me-3" alt="" />**** 3866</td>
            {/*end::Payment method=*/}
            {/*begin::Date=*/}
            <td>21 Oct 2020, 5:54 pm</td>
            {/*end::Date=*/}
            {/*begin::Action=*/}
            <td className="text-end">
            <a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
               {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
               <span className="svg-icon svg-icon-5 m-0">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                  </svg>
               </span>
               {/*end::Svg Icon*/}</a>
            {/*begin::Menu*/}
            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="../../demo39/dist/apps/customers/view.html" className="menu-link px-3">View</a>
               </div>
               {/*end::Menu item*/}
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
               </div>
               {/*end::Menu item*/}
            </div>
            {/*end::Menu*/}
            </td>
            {/*end::Action=*/}
         </tr>
         <tr>
            {/*begin::Checkbox*/}
            <td>
            <div className="form-check form-check-sm form-check-custom form-check-solid">
               <input className="form-check-input" type="checkbox" defaultValue={1} />
            </div>
            </td>
            {/*end::Checkbox*/}
            {/*begin::Name=*/}
            <td>
            <a href="../../demo39/dist/apps/customers/view.html" className="text-gray-800 text-hover-primary mb-1">Brian Cox</a>
            </td>
            {/*end::Name=*/}
            {/*begin::Email=*/}
            <td>
            <a href="#" className="text-gray-600 text-hover-primary mb-1">brian@exchange.com</a>
            </td>
            {/*end::Email=*/}
            {/*begin::Company=*/}
            <td>-</td>
            {/*end::Company=*/}
            {/*begin::Payment method=*/}
            <td data-filter="visa">
            <img src="assets/media/svg/card-logos/visa.svg" className="w-35px me-3" alt="" />**** 8408</td>
            {/*end::Payment method=*/}
            {/*begin::Date=*/}
            <td>19 Oct 2020, 7:32 am</td>
            {/*end::Date=*/}
            {/*begin::Action=*/}
            <td className="text-end">
            <a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
               {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
               <span className="svg-icon svg-icon-5 m-0">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                  </svg>
               </span>
               {/*end::Svg Icon*/}</a>
            {/*begin::Menu*/}
            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="../../demo39/dist/apps/customers/view.html" className="menu-link px-3">View</a>
               </div>
               {/*end::Menu item*/}
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
               </div>
               {/*end::Menu item*/}
            </div>
            {/*end::Menu*/}
            </td>
            {/*end::Action=*/}
         </tr>
         <tr>
            {/*begin::Checkbox*/}
            <td>
            <div className="form-check form-check-sm form-check-custom form-check-solid">
               <input className="form-check-input" type="checkbox" defaultValue={1} />
            </div>
            </td>
            {/*end::Checkbox*/}
            {/*begin::Name=*/}
            <td>
            <a href="../../demo39/dist/apps/customers/view.html" className="text-gray-800 text-hover-primary mb-1">Mikaela Collins</a>
            </td>
            {/*end::Name=*/}
            {/*begin::Email=*/}
            <td>
            <a href="#" className="text-gray-600 text-hover-primary mb-1">mik@pex.com</a>
            </td>
            {/*end::Email=*/}
            {/*begin::Company=*/}
            <td>Keenthemes</td>
            {/*end::Company=*/}
            {/*begin::Payment method=*/}
            <td data-filter="american_express">
            <img src="assets/media/svg/card-logos/american-express.svg" className="w-35px me-3" alt="" />**** 7907</td>
            {/*end::Payment method=*/}
            {/*begin::Date=*/}
            <td>23 Sep 2020, 12:37 am</td>
            {/*end::Date=*/}
            {/*begin::Action=*/}
            <td className="text-end">
            <a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
               {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
               <span className="svg-icon svg-icon-5 m-0">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                  </svg>
               </span>
               {/*end::Svg Icon*/}</a>
            {/*begin::Menu*/}
            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="../../demo39/dist/apps/customers/view.html" className="menu-link px-3">View</a>
               </div>
               {/*end::Menu item*/}
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
               </div>
               {/*end::Menu item*/}
            </div>
            {/*end::Menu*/}
            </td>
            {/*end::Action=*/}
         </tr>
         <tr>
            {/*begin::Checkbox*/}
            <td>
            <div className="form-check form-check-sm form-check-custom form-check-solid">
               <input className="form-check-input" type="checkbox" defaultValue={1} />
            </div>
            </td>
            {/*end::Checkbox*/}
            {/*begin::Name=*/}
            <td>
            <a href="../../demo39/dist/apps/customers/view.html" className="text-gray-800 text-hover-primary mb-1">Francis Mitcham</a>
            </td>
            {/*end::Name=*/}
            {/*begin::Email=*/}
            <td>
            <a href="#" className="text-gray-600 text-hover-primary mb-1">f.mit@kpmg.com</a>
            </td>
            {/*end::Email=*/}
            {/*begin::Company=*/}
            <td>Paypal</td>
            {/*end::Company=*/}
            {/*begin::Payment method=*/}
            <td data-filter="mastercard">
            <img src="assets/media/svg/card-logos/mastercard.svg" className="w-35px me-3" alt="" />**** 2183</td>
            {/*end::Payment method=*/}
            {/*begin::Date=*/}
            <td>11 Sep 2020, 3:15 pm</td>
            {/*end::Date=*/}
            {/*begin::Action=*/}
            <td className="text-end">
            <a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
               {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
               <span className="svg-icon svg-icon-5 m-0">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                  </svg>
               </span>
               {/*end::Svg Icon*/}</a>
            {/*begin::Menu*/}
            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="../../demo39/dist/apps/customers/view.html" className="menu-link px-3">View</a>
               </div>
               {/*end::Menu item*/}
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
               </div>
               {/*end::Menu item*/}
            </div>
            {/*end::Menu*/}
            </td>
            {/*end::Action=*/}
         </tr>
         <tr>
            {/*begin::Checkbox*/}
            <td>
            <div className="form-check form-check-sm form-check-custom form-check-solid">
               <input className="form-check-input" type="checkbox" defaultValue={1} />
            </div>
            </td>
            {/*end::Checkbox*/}
            {/*begin::Name=*/}
            <td>
            <a href="../../demo39/dist/apps/customers/view.html" className="text-gray-800 text-hover-primary mb-1">Olivia Wild</a>
            </td>
            {/*end::Name=*/}
            {/*begin::Email=*/}
            <td>
            <a href="#" className="text-gray-600 text-hover-primary mb-1">olivia@corpmail.com</a>
            </td>
            {/*end::Email=*/}
            {/*begin::Company=*/}
            <td>-</td>
            {/*end::Company=*/}
            {/*begin::Payment method=*/}
            <td data-filter="american_express">
            <img src="assets/media/svg/card-logos/american-express.svg" className="w-35px me-3" alt="" />**** 2541</td>
            {/*end::Payment method=*/}
            {/*begin::Date=*/}
            <td>03 Sep 2020, 1:08 am</td>
            {/*end::Date=*/}
            {/*begin::Action=*/}
            <td className="text-end">
            <a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
               {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
               <span className="svg-icon svg-icon-5 m-0">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                  </svg>
               </span>
               {/*end::Svg Icon*/}</a>
            {/*begin::Menu*/}
            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="../../demo39/dist/apps/customers/view.html" className="menu-link px-3">View</a>
               </div>
               {/*end::Menu item*/}
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
               </div>
               {/*end::Menu item*/}
            </div>
            {/*end::Menu*/}
            </td>
            {/*end::Action=*/}
         </tr>
         <tr>
            {/*begin::Checkbox*/}
            <td>
            <div className="form-check form-check-sm form-check-custom form-check-solid">
               <input className="form-check-input" type="checkbox" defaultValue={1} />
            </div>
            </td>
            {/*end::Checkbox*/}
            {/*begin::Name=*/}
            <td>
            <a href="../../demo39/dist/apps/customers/view.html" className="text-gray-800 text-hover-primary mb-1">Neil Owen</a>
            </td>
            {/*end::Name=*/}
            {/*begin::Email=*/}
            <td>
            <a href="#" className="text-gray-600 text-hover-primary mb-1">owen.neil@gmail.com</a>
            </td>
            {/*end::Email=*/}
            {/*begin::Company=*/}
            <td>Paramount</td>
            {/*end::Company=*/}
            {/*begin::Payment method=*/}
            <td data-filter="visa">
            <img src="assets/media/svg/card-logos/visa.svg" className="w-35px me-3" alt="" />**** 8965</td>
            {/*end::Payment method=*/}
            {/*begin::Date=*/}
            <td>01 Sep 2020, 4:58 pm</td>
            {/*end::Date=*/}
            {/*begin::Action=*/}
            <td className="text-end">
            <a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
               {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
               <span className="svg-icon svg-icon-5 m-0">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                  </svg>
               </span>
               {/*end::Svg Icon*/}</a>
            {/*begin::Menu*/}
            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="../../demo39/dist/apps/customers/view.html" className="menu-link px-3">View</a>
               </div>
               {/*end::Menu item*/}
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
               </div>
               {/*end::Menu item*/}
            </div>
            {/*end::Menu*/}
            </td>
            {/*end::Action=*/}
         </tr>
         <tr>
            {/*begin::Checkbox*/}
            <td>
            <div className="form-check form-check-sm form-check-custom form-check-solid">
               <input className="form-check-input" type="checkbox" defaultValue={1} />
            </div>
            </td>
            {/*end::Checkbox*/}
            {/*begin::Name=*/}
            <td>
            <a href="../../demo39/dist/apps/customers/view.html" className="text-gray-800 text-hover-primary mb-1">Dan Wilson</a>
            </td>
            {/*end::Name=*/}
            {/*begin::Email=*/}
            <td>
            <a href="#" className="text-gray-600 text-hover-primary mb-1">dam@consilting.com</a>
            </td>
            {/*end::Email=*/}
            {/*begin::Company=*/}
            <td>Trinity Studio</td>
            {/*end::Company=*/}
            {/*begin::Payment method=*/}
            <td data-filter="visa">
            <img src="assets/media/svg/card-logos/visa.svg" className="w-35px me-3" alt="" />**** 5158</td>
            {/*end::Payment method=*/}
            {/*begin::Date=*/}
            <td>18 Aug 2020, 3:34 pm</td>
            {/*end::Date=*/}
            {/*begin::Action=*/}
            <td className="text-end">
            <a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
               {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
               <span className="svg-icon svg-icon-5 m-0">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                  </svg>
               </span>
               {/*end::Svg Icon*/}</a>
            {/*begin::Menu*/}
            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="../../demo39/dist/apps/customers/view.html" className="menu-link px-3">View</a>
               </div>
               {/*end::Menu item*/}
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
               </div>
               {/*end::Menu item*/}
            </div>
            {/*end::Menu*/}
            </td>
            {/*end::Action=*/}
         </tr>
         <tr>
            {/*begin::Checkbox*/}
            <td>
            <div className="form-check form-check-sm form-check-custom form-check-solid">
               <input className="form-check-input" type="checkbox" defaultValue={1} />
            </div>
            </td>
            {/*end::Checkbox*/}
            {/*begin::Name=*/}
            <td>
            <a href="../../demo39/dist/apps/customers/view.html" className="text-gray-800 text-hover-primary mb-1">Emma Bold</a>
            </td>
            {/*end::Name=*/}
            {/*begin::Email=*/}
            <td>
            <a href="#" className="text-gray-600 text-hover-primary mb-1">emma@intenso.com</a>
            </td>
            {/*end::Email=*/}
            {/*begin::Company=*/}
            <td>B&amp;T Legal Services</td>
            {/*end::Company=*/}
            {/*begin::Payment method=*/}
            <td data-filter="mastercard">
            <img src="assets/media/svg/card-logos/mastercard.svg" className="w-35px me-3" alt="" />**** 7390</td>
            {/*end::Payment method=*/}
            {/*begin::Date=*/}
            <td>14 Aug 2020, 1:21 pm</td>
            {/*end::Date=*/}
            {/*begin::Action=*/}
            <td className="text-end">
            <a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
               {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
               <span className="svg-icon svg-icon-5 m-0">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                  </svg>
               </span>
               {/*end::Svg Icon*/}</a>
            {/*begin::Menu*/}
            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="../../demo39/dist/apps/customers/view.html" className="menu-link px-3">View</a>
               </div>
               {/*end::Menu item*/}
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
               </div>
               {/*end::Menu item*/}
            </div>
            {/*end::Menu*/}
            </td>
            {/*end::Action=*/}
         </tr>
         <tr>
            {/*begin::Checkbox*/}
            <td>
            <div className="form-check form-check-sm form-check-custom form-check-solid">
               <input className="form-check-input" type="checkbox" defaultValue={1} />
            </div>
            </td>
            {/*end::Checkbox*/}
            {/*begin::Name=*/}
            <td>
            <a href="../../demo39/dist/apps/customers/view.html" className="text-gray-800 text-hover-primary mb-1">Ana Crown</a>
            </td>
            {/*end::Name=*/}
            {/*begin::Email=*/}
            <td>
            <a href="#" className="text-gray-600 text-hover-primary mb-1">ana.cf@limtel.com</a>
            </td>
            {/*end::Email=*/}
            {/*begin::Company=*/}
            <td>Paysafe Security</td>
            {/*end::Company=*/}
            {/*begin::Payment method=*/}
            <td data-filter="american_express">
            <img src="assets/media/svg/card-logos/american-express.svg" className="w-35px me-3" alt="" />**** 2621</td>
            {/*end::Payment method=*/}
            {/*begin::Date=*/}
            <td>11 Aug 2020, 5:13 pm</td>
            {/*end::Date=*/}
            {/*begin::Action=*/}
            <td className="text-end">
            <a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
               {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
               <span className="svg-icon svg-icon-5 m-0">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                  </svg>
               </span>
               {/*end::Svg Icon*/}</a>
            {/*begin::Menu*/}
            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="../../demo39/dist/apps/customers/view.html" className="menu-link px-3">View</a>
               </div>
               {/*end::Menu item*/}
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
               </div>
               {/*end::Menu item*/}
            </div>
            {/*end::Menu*/}
            </td>
            {/*end::Action=*/}
         </tr>
         <tr>
            {/*begin::Checkbox*/}
            <td>
            <div className="form-check form-check-sm form-check-custom form-check-solid">
               <input className="form-check-input" type="checkbox" defaultValue={1} />
            </div>
            </td>
            {/*end::Checkbox*/}
            {/*begin::Name=*/}
            <td>
            <a href="../../demo39/dist/apps/customers/view.html" className="text-gray-800 text-hover-primary mb-1">Emma Smith</a>
            </td>
            {/*end::Name=*/}
            {/*begin::Email=*/}
            <td>
            <a href="#" className="text-gray-600 text-hover-primary mb-1">smith@kpmg.com</a>
            </td>
            {/*end::Email=*/}
            {/*begin::Company=*/}
            <td>-</td>
            {/*end::Company=*/}
            {/*begin::Payment method=*/}
            <td data-filter="mastercard">
            <img src="assets/media/svg/card-logos/mastercard.svg" className="w-35px me-3" alt="" />**** 1074</td>
            {/*end::Payment method=*/}
            {/*begin::Date=*/}
            <td>14 Dec 2020, 8:43 pm</td>
            {/*end::Date=*/}
            {/*begin::Action=*/}
            <td className="text-end">
            <a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
               {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
               <span className="svg-icon svg-icon-5 m-0">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                  </svg>
               </span>
               {/*end::Svg Icon*/}</a>
            {/*begin::Menu*/}
            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="../../demo39/dist/apps/customers/view.html" className="menu-link px-3">View</a>
               </div>
               {/*end::Menu item*/}
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
               </div>
               {/*end::Menu item*/}
            </div>
            {/*end::Menu*/}
            </td>
            {/*end::Action=*/}
         </tr>
         <tr>
            {/*begin::Checkbox*/}
            <td>
            <div className="form-check form-check-sm form-check-custom form-check-solid">
               <input className="form-check-input" type="checkbox" defaultValue={1} />
            </div>
            </td>
            {/*end::Checkbox*/}
            {/*begin::Name=*/}
            <td>
            <a href="../../demo39/dist/apps/customers/view.html" className="text-gray-800 text-hover-primary mb-1">Melody Macy</a>
            </td>
            {/*end::Name=*/}
            {/*begin::Email=*/}
            <td>
            <a href="#" className="text-gray-600 text-hover-primary mb-1">melody@altbox.com</a>
            </td>
            {/*end::Email=*/}
            {/*begin::Company=*/}
            <td>Google</td>
            {/*end::Company=*/}
            {/*begin::Payment method=*/}
            <td data-filter="visa">
            <img src="assets/media/svg/card-logos/visa.svg" className="w-35px me-3" alt="" />**** 9500</td>
            {/*end::Payment method=*/}
            {/*begin::Date=*/}
            <td>01 Dec 2020, 10:12 am</td>
            {/*end::Date=*/}
            {/*begin::Action=*/}
            <td className="text-end">
            <a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
               {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
               <span className="svg-icon svg-icon-5 m-0">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                  </svg>
               </span>
               {/*end::Svg Icon*/}</a>
            {/*begin::Menu*/}
            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="../../demo39/dist/apps/customers/view.html" className="menu-link px-3">View</a>
               </div>
               {/*end::Menu item*/}
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
               </div>
               {/*end::Menu item*/}
            </div>
            {/*end::Menu*/}
            </td>
            {/*end::Action=*/}
         </tr>
         <tr>
            {/*begin::Checkbox*/}
            <td>
            <div className="form-check form-check-sm form-check-custom form-check-solid">
               <input className="form-check-input" type="checkbox" defaultValue={1} />
            </div>
            </td>
            {/*end::Checkbox*/}
            {/*begin::Name=*/}
            <td>
            <a href="../../demo39/dist/apps/customers/view.html" className="text-gray-800 text-hover-primary mb-1">Max Smith</a>
            </td>
            {/*end::Name=*/}
            {/*begin::Email=*/}
            <td>
            <a href="#" className="text-gray-600 text-hover-primary mb-1">max@kt.com</a>
            </td>
            {/*end::Email=*/}
            {/*begin::Company=*/}
            <td>Bistro Union</td>
            {/*end::Company=*/}
            {/*begin::Payment method=*/}
            <td data-filter="mastercard">
            <img src="assets/media/svg/card-logos/mastercard.svg" className="w-35px me-3" alt="" />**** 5073</td>
            {/*end::Payment method=*/}
            {/*begin::Date=*/}
            <td>12 Nov 2020, 2:01 pm</td>
            {/*end::Date=*/}
            {/*begin::Action=*/}
            <td className="text-end">
            <a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
               {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
               <span className="svg-icon svg-icon-5 m-0">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                  </svg>
               </span>
               {/*end::Svg Icon*/}</a>
            {/*begin::Menu*/}
            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="../../demo39/dist/apps/customers/view.html" className="menu-link px-3">View</a>
               </div>
               {/*end::Menu item*/}
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
               </div>
               {/*end::Menu item*/}
            </div>
            {/*end::Menu*/}
            </td>
            {/*end::Action=*/}
         </tr>
         <tr>
            {/*begin::Checkbox*/}
            <td>
            <div className="form-check form-check-sm form-check-custom form-check-solid">
               <input className="form-check-input" type="checkbox" defaultValue={1} />
            </div>
            </td>
            {/*end::Checkbox*/}
            {/*begin::Name=*/}
            <td>
            <a href="../../demo39/dist/apps/customers/view.html" className="text-gray-800 text-hover-primary mb-1">Sean Bean</a>
            </td>
            {/*end::Name=*/}
            {/*begin::Email=*/}
            <td>
            <a href="#" className="text-gray-600 text-hover-primary mb-1">sean@dellito.com</a>
            </td>
            {/*end::Email=*/}
            {/*begin::Company=*/}
            <td>Astro Limited</td>
            {/*end::Company=*/}
            {/*begin::Payment method=*/}
            <td data-filter="american_express">
            <img src="assets/media/svg/card-logos/american-express.svg" className="w-35px me-3" alt="" />**** 3866</td>
            {/*end::Payment method=*/}
            {/*begin::Date=*/}
            <td>21 Oct 2020, 5:54 pm</td>
            {/*end::Date=*/}
            {/*begin::Action=*/}
            <td className="text-end">
            <a href="#" className="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
               {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
               <span className="svg-icon svg-icon-5 m-0">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                  </svg>
               </span>
               {/*end::Svg Icon*/}</a>
            {/*begin::Menu*/}
            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="../../demo39/dist/apps/customers/view.html" className="menu-link px-3">View</a>
               </div>
               {/*end::Menu item*/}
               {/*begin::Menu item*/}
               <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3" data-kt-customer-table-filter="delete_row">Delete</a>
               </div>
               {/*end::Menu item*/}
            </div>
            {/*end::Menu*/}
            </td>
            {/*end::Action=*/}
         </tr>
      </tbody>
      {/*end::Table body*/}
               </table>
               </Card.Body>
            </Card>
         </div>
      </div>
   </>
  )
}

export default Customer