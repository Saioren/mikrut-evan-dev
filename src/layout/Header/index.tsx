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

const Header: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const { eggCount } = useEasterEgg()
  const { theme } = useTheme()

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

  return (
    <div
      ref={headerRef}
      className={`${classes.header} ${isScrolled ? classes.scrolled : classes.notScrolled}`}
    >
      <div className={classes.leftSide}>
        <MikrutEvanLogo />
      </div>
      <div className={classes.rightSide}>
        <div className={classes.links}>
          {isClient && eggCount > 0 && (
            <button className={`${classes.easterEgg} ${theme === 'dark' ? classes.lightEgg : ''}`}>
              <BsEggFill className={classes.egg} />
            </button>
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
        </div>
        <ThemeSlider />
      </div>
    </div>
  )
}

export default Header
