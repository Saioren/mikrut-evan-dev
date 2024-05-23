import React from 'react'
import classes from './index.module.scss'
import Link from 'next/link'

const Header = () => {
  return (
    <div className={classes.header}>
      <div>
        <Link href="/">Home</Link>
      </div>
      <div>Right</div>
    </div>
  )
}

export default Header
