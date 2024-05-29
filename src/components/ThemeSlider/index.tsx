import React from 'react'
import { useTheme } from '@/providers/ThemeContext'

const ThemeSlider = () => {
  const { theme, toggleTheme } = useTheme()

  const handleToggleTheme = () => {
    toggleTheme()
  }

  return (
    <div>
      <label htmlFor="theme-slider">Toggle Theme</label>
      <input
        id="theme-slider"
        type="checkbox"
        checked={theme === 'dark'}
        onChange={handleToggleTheme}
      />
    </div>
  )
}

export default ThemeSlider
