import Layout from '@/layouts'
import type { AppProps } from 'next/app'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) { 
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      
    </>
  )
}
