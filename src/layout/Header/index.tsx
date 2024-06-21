import React, { useEffect, useRef, useState } from 'react'
import classes from './index.module.scss'
import Link from 'next/link'
import ThemeSlider from '@/components/ThemeSlider'
import { BsGithub, BsTwitterX } from 'react-icons/bs'
import { HiOutlineQrcode } from 'react-icons/hi'
import PopOut from '@/components/PopOut'
import { motion } from 'framer-motion'
import MikrutEvanLogo from '@/components/MikrutEvanLogo'

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
        <MikrutEvanLogo />
      </div>
      <div className={classes.rightSide}>
        <div className={classes.links}>
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
