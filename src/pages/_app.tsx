import { AppProps } from 'next/app'
import React, { useEffect } from 'react'

const MikrutEvanApp = (appProps: AppProps): React.ReactElement => {
  const { Component, pageProps } = appProps
  const { globals, collection, id } = pageProps

  useEffect(() => {
    console.log(
      '%cDesigned and built by %cEvan Mikrut %c(https://github.com/Saioren)',
      'font-weight: bolder;',
      'font-weight: bolder; color: #34eb95;',
      'font-weight: bolder;',
    ) // eslint-disable-line no-console
  }, [])

  return (
    <React.Fragment>
      {/*<Header />*/}
      <Component {...pageProps} />
      {/*<Footer />*/}
    </React.Fragment>
  )
}

export default MikrutEvanApp
