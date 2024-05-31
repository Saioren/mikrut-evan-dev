import React from 'react'
import { useTheme } from '@/providers/ThemeContext'
import { FaMoon } from 'react-icons/fa'
import { BsSunFill } from 'react-icons/bs'
import classes from './index.module.scss'

const ThemeSlider = () => {
  const { theme, toggleTheme } = useTheme()

  const dark = theme === 'dark'

  const handleToggleTheme = () => {
    toggleTheme()
  }

  return (
    <button onClick={handleToggleTheme} className={classes.themeSlider}>
      <div className={classes.themeContainer}>
        <BsSunFill
          style={{
            transform: dark ? 'translateX(27px)' : 'translateX(0)',
            transition: '0.1s linear all',
          }}
          className={`${classes.sun} ${classes.icon} ${dark ? classes.hidden : classes.visible}`}
        />
        <FaMoon
          style={{
            transform: dark ? 'translateX(27px)' : 'translateX(0)',
            transition: '0.1s linear all',
          }}
          className={`${classes.moon} ${classes.icon} ${!dark ? classes.hidden : classes.visible}`}
        />
      </div>
    </button>
  )
}

export default ThemeSlider
