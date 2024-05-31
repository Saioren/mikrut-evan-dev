import React from 'react'
import classes from './index.module.scss'
import Link from 'next/link'
import ThemeSlider from '@/components/ThemeSlider'
import { BsGithub, BsTwitterX } from 'react-icons/bs'
import { HiOutlineQrcode } from 'react-icons/hi'
import PopOut from '@/components/PopOut'

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.leftSide}>
        <Link href="/">
          <HiOutlineQrcode className={classes.logo} />
        </Link>
      </div>
      <div className={classes.rightSide}>
        <div className={classes.links}>
          <PopOut hover>
            <Link className={classes.contactButton} href={'#contact'}>
              contact
            </Link>
          </PopOut>
          <PopOut icon hover>
            <a className={classes.anchorButton} href="https://github.com/Saioren" target="__blank">
              <BsGithub className={classes.icon} />
            </a>
          </PopOut>
          <PopOut icon hover>
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
