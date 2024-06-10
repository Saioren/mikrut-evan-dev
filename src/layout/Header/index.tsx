import React, { useEffect, useRef, useState } from 'react'
import classes from './index.module.scss'
import Link from 'next/link'
import ThemeSlider from '@/components/ThemeSlider'
import { BsGithub, BsTwitterX } from 'react-icons/bs'
import { HiOutlineQrcode } from 'react-icons/hi'
import PopOut from '@/components/PopOut'
import { motion } from 'framer-motion'

const Header: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
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
        <Link className={classes.logoLink} href="/">
          <div className={classes.logo}>
            <span className={classes.mikrut}>mikrut</span>
            <span className={classes.evan}>evan</span>
            <span className={classes.dev}>.dev </span>
          </div>
        </Link>
      </div>
      <div className={classes.rightSide}>
        <div className={classes.links}>
          <PopOut header hover>
            <Link className={classes.contactButton} href={'#contact'}>
              contact
            </Link>
          </PopOut>
          <PopOut icon hover header>
            <a className={classes.anchorButton} href="https://github.com/Saioren" target="__blank">
              <BsGithub className={classes.icon} />
            </a>
          </PopOut>
          <PopOut icon hover header>
            <a className={classes.anchorButton} href="https://x.com/mikrutevan1" target="__blank">
              <BsTwitterX className={classes.icon} />
            </a>
          </PopOut>
        </div>
        <ThemeSlider />
      </div>
    </div>
  )
}

export default Header
