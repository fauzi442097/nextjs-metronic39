import Layout from '@/layouts'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import { useEffect, useState } from 'react'

import '@/public/css/plugins.bundle.css'
import '@/public/css/style.bundle.css'


export default function App({ Component, pageProps }: AppProps) { 
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
