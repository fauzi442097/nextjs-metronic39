import React from 'react'
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '../pages/_app'
import GuestLayout from '@/layouts/guest/guest'

import styles from '@/public/css/guest.module.css'

const login: NextPageWithLayout = () => {
    return (
      <div className="d-flex flex-center flex-column flex-lg-row-fluid">
        <div className={`w-lg-500px p-10`}>
          <form className="form w-100" noValidate={true} id="kt_sign_in_form" data-kt-redirect-url="../../demo39/dist/index.html" action="#">
              <div className="text-center mb-11">
                <h1 className="text-dark fw-bolder mb-3">Login</h1>
                <div className="text-gray-500 fw-semibold fs-6">Masukan data login</div>
              </div>


              {/* <div className="row g-3 mb-9">
                <div className="col-md-6">
                    <a href="#" className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
                    <img alt="Logo" src="/img/svg/brand-logos/google-icon.svg" className="h-15px me-3" />Sign in with Google</a>    
                </div>
              
                <div className="col-md-6">
                    <a href="#" className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
                    <img alt="Logo" src="/img/svg/brand-logos/apple-black.svg" className="theme-light-show h-15px me-3" />
                    <img alt="Logo" src="/img/svg/brand-logos/apple-black-dark.svg" className="theme-dark-show h-15px me-3" />Sign in with Apple</a>
                </div>
              </div> */}

              {/* <div className="separator separator-content my-14">
                <span className="w-125px text-gray-500 fw-semibold fs-7">Or with email</span>
              </div> */}

              <div className='row'>
                <div className="fv-row mb-8">
                  <input type="text" placeholder="Email" name="email" autoComplete="off" className="form-control bg-transparent" />
                </div>
                
                <div className="fv-row mb-3">
                  <input type="password" placeholder="Password" name="password" autoComplete="off" className="form-control bg-transparent" />
                </div>

                <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
                <div />
                  <a href="../../demo39/dist/authentication/layouts/corporate/reset-password.html" className="link-primary">Lupa Password ?</a>
                </div>
                

                <div className="d-grid mb-10">
                  <button type="submit" id="kt_sign_in_submit" className="btn btn-primary">
                      <span className="indicator-label">Login</span>
                      <span className="indicator-progress">Please wait...
                      <span className="spinner-border spinner-border-sm align-middle ms-2" /></span>
                  </button>
                </div>

                {/* <div className="text-gray-500 text-center fw-semibold fs-6">Not a Member yet?
                  <a href="../../demo39/dist/authentication/layouts/corporate/sign-up.html" className="link-primary">Sign up</a>
                </div> */}
              </div>
          </form>
        </div>
      </div>
    )
  }
  
login.getLayout = function getLayout(page: ReactElement) {
    return (
      <GuestLayout>
        {page}
      </GuestLayout>
    )
}
  
  export default login