
// theme styles
import '../styles/theme.min.css';

// plugin styles
import '../styles/vendor/open-iconic/font/css/open-iconic-bootstrap.min.css' // open-iconic
import '../styles/vendor/@fortawesome/fontawesome-free/css/all.min.css' // font awesome
import '../styles/vendor/flatpickr/flatpickr.min.css' // flatpickr

import type { AppProps } from 'next/app'
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (<>
    { /* base javascript */ }
    <Script src="/assets/vendor/jquery/jquery.min.js" strategy="beforeInteractive"/>
    <Script src="/assets/vendor/popper.js/umd/popper.min.js" strategy="beforeInteractive"/>
    <Script src="/assets/vendor/bootstrap/js/bootstrap.min.js"/>

    { /* theme javascript */ }
    <Script src="/assets/javascript/theme.min.js"/>
    <Component {...pageProps} />
  </>)
}

export default MyApp
