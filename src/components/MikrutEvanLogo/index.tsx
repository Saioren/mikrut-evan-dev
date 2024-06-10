import Link from 'next/link'
import React from 'react'
import classes from './index.module.scss'

const MikrutEvanLogo = () => {
  return (
    <Link className={classes.logoLink} href="/">
      <div className={classes.logo}>
        <span className={classes.mikrut}>mikrut</span>
        <span className={classes.evan}>evan</span>
        <span className={classes.dev}>.dev </span>
      </div>
    </Link>
  )
}

export default MikrutEvanLogo
