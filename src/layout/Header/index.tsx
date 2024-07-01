'use client'

import React, { useEffect, useRef, useState } from 'react'
import classes from './index.module.scss'
import Link from 'next/link'
import ThemeSlider from '@/components/ThemeSlider'
import { BsEggFill, BsGithub, BsTwitterX } from 'react-icons/bs'
import PopOut from '@/components/PopOut'
import MikrutEvanLogo from '@/components/MikrutEvanLogo'
import { useEasterEgg } from '@/eggs/EasterEggProvider'
import { useTheme } from '@/providers/ThemeContext'
import { AnimatePresence, motion as m } from 'framer-motion'
import EggModal from '@/eggs/EggModal'

const Header: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [eggModal, setEggModal] = useState(false)
  const { eggCount } = useEasterEgg()
  const { theme } = useTheme()
  const eggRef = useRef<HTMLDivElement>(null)
  const eggIconRef = useRef<HTMLDivElement>(null)
  const themeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // This will set `isClient` to true only after the component mounts on the client side
    setIsClient(true)

    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsScrolled(false)
      } else {
        setIsScrolled(true)
      }
    }

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll)

    // Initial check in case the page is not at the top when it first loads
    handleScroll()

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleClickOutside = (event: MouseEvent) => {
    if (
      eggRef.current &&
      !eggRef.current.contains(event.target as Node) &&
      themeRef.current &&
      !themeRef.current.contains(event.target as Node) &&
      eggIconRef.current &&
      !eggIconRef.current.contains(event.target as Node)
    ) {
      eggModalToggle()
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  function eggModalToggle() {
    setEggModal((prevState) => !prevState)
  }

  return (
    <div
      ref={headerRef}
      className={`${classes.header} ${isScrolled ? classes.scrolled : classes.notScrolled}`}
    >
      <div className={classes.leftSide}>
        <MikrutEvanLogo />
      </div>
      <div className={classes.rightSide}>
        <AnimatePresence>
          {isClient && eggCount > 0 && eggModal && (
            <m.div
              key="eggModal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={classes.motionDiv}
            >
              {' '}
              <EggModal ref={eggRef} />{' '}
            </m.div>
          )}
        </AnimatePresence>
        <div className={classes.links}>
          {isClient && eggCount > 0 && (
            <div ref={eggIconRef}>
              <button
                className={`${classes.easterEgg} ${theme === 'dark' ? classes.lightEgg : ''}`}
              >
                <BsEggFill onClick={() => eggModalToggle()} className={classes.egg} />
              </button>
            </div>
          )}
          <Link className={classes.contactButton} href={'#contact'}>
            <PopOut header hover>
              contact
            </PopOut>
          </Link>
          <a className={classes.anchorButton} href="https://github.com/Saioren" target="__blank">
            <PopOut icon hover header>
              <BsGithub className={classes.icon} />
            </PopOut>
          </a>
          <a className={classes.anchorButton} href="https://x.com/mikrutevan1" target="__blank">
            <PopOut icon hover header>
              <BsTwitterX className={classes.icon} />
            </PopOut>
          </a>
          <div ref={themeRef}>
            <ThemeSlider />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
