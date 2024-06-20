import React, { useCallback, useEffect, useRef } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import classes from './index.module.scss'
import { usePageTransition, sanitizePath } from './usePageTransition'
import { useRouter } from 'next/router'

export const pageTransTime = 400 // IMPORTANT: must match scss variables, i.e. var(--page-trans-time)

const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const hasInitialized = useRef(false)
  const { asPath } = useRouter()
  const nodeRef = useRef(null)

  const { transitionPath } = usePageTransition()

  const handleTransition = useCallback(() => {
    document.documentElement.style.scrollBehavior = 'auto' // instantly scroll

    const scrollToTopTimer = setTimeout(() => {
      window.scrollTo(0, 0)
      document.documentElement.style.removeProperty('scroll-behavior')
    }, pageTransTime)

    const { hash } = window.location
    let scrollToHashTimer: NodeJS.Timeout

    if (hash) {
      scrollToHashTimer = setTimeout(() => {
        const hashWithoutMark = hash.substring(1)
        const element = document.getElementById(hashWithoutMark)
        element?.scrollIntoView()
      }, pageTransTime * 2)

      return () => {
        clearTimeout(scrollToTopTimer)
        clearTimeout(scrollToHashTimer)
      }
    }
  }, [])

  useEffect(() => {
    if (hasInitialized.current) {
      handleTransition() // on every route change
    } else {
      hasInitialized.current = true
    }
  }, [transitionPath, handleTransition])

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        nodeRef={nodeRef}
        key={transitionPath}
        timeout={pageTransTime}
        classNames={{
          enter: classes.enter,
          enterActive: classes.enterActive,
          enterDone: classes.enterDone,
          exit: classes.exit,
          exitActive: classes.exitActive,
          exitDone: classes.exitDone,
        }}
      >
        <div className={classes.pageTransition} ref={nodeRef}>
          <div className={classes.page}>{children}</div>
          <div className={classes.wipe} />
        </div>
      </CSSTransition>
    </SwitchTransition>
  )
}

export default PageTransition
