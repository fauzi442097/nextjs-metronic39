import React, {ReactNode} from 'react'
import Image from 'next/image'
import Script from 'next/script'

import styles from '@/public/css/guest.module.css'

interface Props {
    children: ReactNode
}

const GuestLayout = ({children} : Props) => {
  return (
    <>
    <div className="d-flex flex-column flex-root" id="kt_app_root" style={{ height: '100vh' }}>
        <div className="d-flex flex-column flex-lg-row flex-column-fluid">
            <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
                {children}
            </div>            
            <div className="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2" style={{backgroundImage: 'url(/img/misc/auth-bg.png)'}}>
                <div className="d-flex flex-column flex-center py-7 py-lg-15 px-5 px-md-15 w-100">
                    <a href="/" className="mb-0 mb-lg-12">
                        <img alt="Logo" src="/img/logos/custom-1.png" className="h-60px h-lg-75px" />
                    </a>
                    <img className="d-none d-lg-block mx-auto w-275px w-md-50 w-xl-500px mb-10 mb-lg-20" src="/img/misc/auth-screens.png" alt="auth screen" />
                    <h1 className={`d-none d-lg-block ${styles.textwhite} fs-2qx fw-bolder text-center mb-7`}>Fast, Efficient and Productive</h1>
                    <div className={`${styles.textwhite} d-none d-lg-block text-white fs-base text-center`}>In this kind of post,
                    <a href="#" className="opacity-75-hover text-warning fw-bold me-1">the blogger</a>introduces a person they’ve interviewed
                    <br />and provides some background information about
                    <a href="#" className="opacity-75-hover text-warning fw-bold me-1">the interviewee</a>and their
                    <br />work following this is a transcript of the interview.</div>
                </div>
            </div>
        </div>
    </div>
    {/* <Script type='text/javascript' src='/js/login.js'/> */}
    </>
  )
}

export default GuestLayout