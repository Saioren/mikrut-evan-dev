import React from 'react'
import classes from './index.module.scss'
import Link from 'next/link'
import ThemeSlider from '@/components/ThemeSlider'

const Header = () => {
  return (
    <div className={classes.header}>
      <div>
        <Link href="/">Home</Link>
      </div>
      <div>
        <ThemeSlider />
      </div>
    </div>
  )
}

export default Header
