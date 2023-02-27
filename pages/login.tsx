import React, { useEffect, useRef, useState } from 'react'
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '../pages/_app'
import GuestLayout from '@/layouts/guest/guest'
import Input from '@/components/form/Input'
import Alert from '@/components/Alert'
import { AnimatePresence } from 'framer-motion'


const login: NextPageWithLayout = () => {

    const formRef = useRef<HTMLFormElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
  
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loginFailed, setLoginFailed] = useState<boolean>(false);
    const [fv, setFv] = useState<any>();
    const [showAlert, setShowAlert] = useState<boolean>(false);

    console.log('render login');
    console.log(showAlert);

      
    useEffect(() => {
      setFv(initFormValidation());
    },[]);

    const initFormValidation = () => {
      // @ts-ignore
      return FormValidation.formValidation(
        formRef.current,
        {
            fields: {
                'username': {
                    validators: {
                        notEmpty: {
                            message: 'Wajib diisi'
                        },
                        stringLength: {
                          min: 3,
                          message: 'Minimal diisi 3 karakter'
                        }
                    }
                },
                'password': {
                  validators: {
                    notEmpty: {
                      message: 'Wajib diisi'
                    },
                    stringLength: {
                      min: 6,
                      message: 'Minimal diisi 6 karakter'
                    }
                  }
                }
            },

            plugins: {
                 // @ts-ignore
                trigger: new FormValidation.plugins.Trigger(),
                 // @ts-ignore
                bootstrap: new FormValidation.plugins.Bootstrap5({
                    rowSelector: '.fv-row',
                    eleInvalidClass: '',
                    eleValidClass: ''
                })
            }
        }
      );
    }

    const showLoading = (setLoading: boolean) => {
      if ( buttonRef.current ) 
        if ( setLoading ) {
          buttonRef.current.setAttribute('data-kt-indicator', 'on');
          buttonRef.current.disabled = true;
        } else {
          buttonRef.current.removeAttribute('data-kt-indicator');
          buttonRef.current.disabled = false;
        } 
    }


    const login = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if ( fv ) {
        fv.validate().then((status: string) => {
          if ( status == 'Valid' ) {
              showLoading(true);

             setTimeout(function () {
                showLoading(false);
                setShowAlert(true);
                 // @ts-ignore
                // Swal.fire({
                //     text: "Form has been successfully submitted!",
                //     icon: "success",
                //     buttonsStyling: false,
                //     confirmButtonText: "Ok, got it!",
                //     customClass: {
                //         confirmButton: "btn btn-primary"
                //     }
                // });

                //form.submit(); // Submit form
            }, 1000);
          } else {
            showLoading(false);
            setLoginFailed(true);  
          }
        })
      }
    } 



    return (
      <div className="d-flex flex-center flex-column flex-lg-row-fluid">

        
        <div className={`w-lg-500px p-10`}>
          <form ref={formRef} onSubmit={login} className="form w-100" id="kt_sign_in_form">
              <div className="text-center mb-11">
                <h1 className="text-dark fw-bolder mb-3">Login</h1>
                <div className="text-gray-500 fw-semibold fs-6">Masukan data login</div>
              </div>


              <AnimatePresence>
                { showAlert && <Alert onCloseAlert={() => setShowAlert(false)} type="error" title="Login gagal" message="Username atau password salah"/>}
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
                <div className="fv-row mb-8">
                  <Input.Text name="username" maxLength="30" className="bg-transparent" value={username} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}/>
                </div>
                
                <div className="fv-row mb-3">
                  <Input.Password autoComplete="off" name="password" maxLength="30" className="bg-transparent" value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>
                </div>

                <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
                <div />
                  <a href="../../demo39/dist/authentication/layouts/corporate/reset-password.html" className="link-primary">Lupa Password ?</a>
                </div>
                

                <div className="d-grid mb-10">
                  <button type="submit" id="kt_sign_in_submit" className="btn btn-primary" ref={buttonRef}>
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