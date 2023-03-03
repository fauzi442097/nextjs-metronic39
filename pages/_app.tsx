import Layout from '@/layouts/admin'
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import NextNProgress from 'nextjs-progressbar';



export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

// Create a client
const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppPropsWithLayout) { 

  if ( Component.getLayout ) {
    // Auth Layout
    return Component.getLayout(<Component {...pageProps} />)
  } 

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <Layout>
        {/* <NextNProgress /> */}
        <NextNProgress color="#3E97FF" height={2} showOnShallow={true} />
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
    </>
  )
}
