import { GridProvider } from '@faceless-ui/css-grid'
import { AppProps } from 'next/app'
import cssVariables from '../../cssVariables'
import React, { useEffect } from 'react'
import ThemeContextProvider from '@/providers/ThemeContext'

import '../scss/app.scss'
import Header from '@/layout/Header'

const MikrutEvanApp = (appProps: AppProps): React.ReactElement => {
  const { Component, pageProps } = appProps
  const { globals, collection, id } = pageProps

  useEffect(() => {
    console.log(
      '%cCreated by %cEvan Mikrut %c(https://github.com/Saioren)',
      'font-weight: bolder;',
      'font-weight: bolder; color: #34eb95;',
      'font-weight: bolder;',
    ) // eslint-disable-line no-console
  }, [])

  return (
    <React.Fragment>
      <ThemeContextProvider>
        <GridProvider
          breakpoints={{
            s: cssVariables.breakpoints.s,
            m: cssVariables.breakpoints.m,
            l: cssVariables.breakpoints.l,
          }}
          rowGap={{
            s: '1rem',
            m: '1rem',
            l: '4rem',
            xl: '4rem',
          }}
          colGap={{
            s: '10px',
            m: '10px',
            l: '4rem',
            xl: '4rem',
          }}
          cols={{
            s: 8,
            m: 8,
            l: 14,
            xl: 14,
          }}
        >
          <Header />
          <Component {...pageProps} />
          {/*<Footer />*/}
        </GridProvider>
      </ThemeContextProvider>
    </React.Fragment>
  )
}

export default MikrutEvanApp
