import React from 'react'
import classes from './index.module.scss'

type BackgroundColorsProps = {
  positions?: (
    | 'left'
    | 'right'
    | 'topLeft'
    | 'topRight'
    | 'center'
    | 'centerLeft'
    | 'centerRight'
    | 'bottomLeft'
    | 'bottomRight'
  )[]
}

const BackgroundColors: React.FC<BackgroundColorsProps> = (props) => {
  const { positions = ['left'] } = props // Default to ['left'] if no positions are provided

  return (
    <>
      {positions.map((position, index) => (
        <div key={index} className={classes[position]} />
      ))}
    </>
  )
}

export default BackgroundColors
