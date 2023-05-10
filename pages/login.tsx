import React, { useEffect, useRef, useState } from 'react'
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '../pages/_app'
import GuestLayout from '@/layouts/guest/guest'
import Alert from '@/components/Alert'
import { AnimatePresence } from 'framer-motion'
import { useForm, SubmitHandler  } from 'react-hook-form'
import { hideLoadingForm, showLoadingForm } from '@/utils/globalHelper'
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '@/components/form/Input'
import API from '@/lib/axios'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { defaultConfigCookie } from '@/lib/cookie'


const loginSchema = yup.object({
  email: yup.string().required('Wajib diisi').email('Format email tidak valid'),
  password: yup.string().required('Wajib diisi').min(6, 'Minimal disii 6 karakter'),
});

type Credential = yup.InferType<typeof loginSchema>;

const login: NextPageWithLayout = () => {

   

    const { 
      register, 
      handleSubmit,
      formState: {
        errors
      }
    } = useForm<Credential>({
      resolver: yupResolver(loginSchema)
    });


    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const router = useRouter();

    useEffect(() => {
      if(Cookies.get('token')) router.push('/');
    }, []);

      
    const login: SubmitHandler<Credential> = async (formValues) => {

        showLoadingForm('kt_sign_in_submit');

        try {
            const { data : response } = await API.post('login', formValues);
            Cookies.set('token', response.data.access_token);
            router.push('/');
        } catch ( error ) {
            console.error(error)
            const { status, data } = error.response;
            if ( status == 401 ) {
              setShowAlert(true);
              setErrorMessage(data.message);
            }
        } finally {
          hideLoadingForm('kt_sign_in_submit');            
        }
    } 

    return (
      <div className="d-flex flex-center flex-column flex-lg-row-fluid">

        
        <div className={`w-lg-500px p-10`}>
          <form onSubmit={handleSubmit(login)} className="form w-100" id="kt_sign_in_form">
              <div className="text-center mb-11">
                <h1 className="text-dark fw-bolder mb-3">Login</h1>
                <div className="text-gray-500 fw-semibold fs-6">Masukan data login</div>
              </div>


              <AnimatePresence>
                { showAlert && <Alert onCloseAlert={() => setShowAlert(false)} type="error" title="Login gagal" message={errorMessage}/>}
              </AnimatePresence>
              
              
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

                <Input 
                    formGroupClass='mb-10'
                    label="Email"
                    name="email" 
                    placeholder='example@gmail.com'
                    register={register}
                    errors={errors.email}
                  />

                <Input 
                    formGroupClass='mb-10'
                    label="Password"
                    type='password'
                    name="password" 
                    register={register}
                    errors={errors.password}
                    placeholder='*********'
                    autoComplete="on"
                  />

                
                <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
                <div />
                  <a href="../../demo39/dist/authentication/layouts/corporate/reset-password.html" className="link-primary">Lupa Password ?</a>
                </div>
                

                <div className="d-grid mb-10">
                  <button type="submit" id="kt_sign_in_submit" className="btn btn-primary">
                      <span className="indicator-label">Login</span>
                      <span className="indicator-progress">Processing...
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