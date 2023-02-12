import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="/css/plugins.bundle.css" />
        <link rel="stylesheet" href="/css/style.bundle.css" />
      </Head>
      <body id="kt_app_body" data-kt-app-header-fixed="true" data-kt-app-header-fixed-mobile="true" data-kt-app-sidebar-enabled="true" data-kt-app-sidebar-fixed="true" data-kt-app-sidebar-hoverable="true" data-kt-app-sidebar-push-toolbar="true" data-kt-app-sidebar-push-footer="true" data-kt-app-aside-enabled="true" data-kt-app-aside-fixed="true" data-kt-app-aside-push-toolbar="true" data-kt-app-aside-push-footer="true" className="app-default">
        <Main />
        <NextScript />
        <Script src='/js/plugins.bundle.js' strategy='beforeInteractive'/>
        <Script src='/js/scripts.bundle.js' strategy='beforeInteractive'/>
      </body>
    </Html>
  )
}
