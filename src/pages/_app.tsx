import { GridProvider } from '@faceless-ui/css-grid'
import { AppProps } from 'next/app'
import cssVariables from '../../cssVariables'
import React, { useEffect } from 'react'
import ThemeContextProvider from '@/providers/ThemeContext'
import '../scss/app.scss'
import Header from '@/layout/Header'
import Gutter from '@/layout/Gutter'
import { WindowInfoProvider } from '@faceless-ui/window-info'
import Footer from '@/layout/Footer'
import { GlobalsProvider } from '@/providers/GlobalsProvider'
import { IGlobals } from '@/providers/GlobalsProvider'

const MikrutEvanApp = ({ Component, pageProps }: AppProps): React.ReactElement => {
  const { globals, /*skillsCollection,*/ ...otherProps } = pageProps

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
      <GlobalsProvider footer={globals.footer} /*skillsCollection={skillsCollection}*/>
        <WindowInfoProvider
          breakpoints={{
            s: '(max-width: 768px)',
            m: '(max-width: 1024px)',
            l: '(max-width: 1279px)',
            xl: '(max-width: 1679px)',
            xxl: '(max-width: 1920px)',
          }}
        >
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
                s: 9,
                m: 9,
                l: 14,
                xl: 14,
              }}
            >
              <Header />
              <Gutter>
                <Component {...otherProps} />
              </Gutter>
              <Footer />
            </GridProvider>
          </ThemeContextProvider>
        </WindowInfoProvider>
      </GlobalsProvider>
    </React.Fragment>
  )
}

export default MikrutEvanApp
