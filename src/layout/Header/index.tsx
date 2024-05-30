import React from 'react'
import classes from './index.module.scss'
import Link from 'next/link'
import ThemeSlider from '@/components/ThemeSlider'
import { BsGithub, BsTwitterX } from 'react-icons/bs'

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.leftSide}>
        <Link href="/">Logo</Link>
      </div>
      <div className={classes.rightSide}>
        <div className={classes.links}>
          <Link className={classes.contactButton} href={'#contact'}>
            Contact
          </Link>
          <a className={classes.anchorButton} href="https://github.com/Saioren" target="__blank">
            <BsGithub />
          </a>
          <a className={classes.anchorButton} href="https://x.com/mikrutevan1" target="__blank">
            <BsTwitterX />
          </a>
        </div>
        <ThemeSlider />
      </div>
    </div>
  )
}

export default Header
