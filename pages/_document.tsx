import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>PMO - BASYS</title>
        <meta charSet="utf-8" />
        <meta name="description" content="PMO Basys" />
        <meta name="keywords" content="PMO Basys" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/img/logos/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700" />
        <link rel="stylesheet" href="/css/datatables.bundle.css" />
        <link rel="stylesheet" href="/css/plugins.bundle.css" />
        <link rel="stylesheet" href="/css/style.bundle.css" />
      </Head>
      
      <body id="kt_app_body" data-kt-app-header-fixed="true" data-kt-app-header-fixed-mobile="true" data-kt-app-sidebar-enabled="true" data-kt-app-sidebar-fixed="true" data-kt-app-sidebar-hoverable="true" data-kt-app-sidebar-push-toolbar="true" data-kt-app-sidebar-push-footer="true" data-kt-app-aside-enabled="true" data-kt-app-aside-fixed="true" data-kt-app-aside-push-toolbar="true" data-kt-app-aside-push-footer="true" className="app-default">
        <Main />
        <script src="/js/plugins.bundle.js"></script>
        <script src="/js/scripts.bundle.js"></script>
        <NextScript />
      </body>
    </Html>
  )
}
