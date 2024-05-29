import React from 'react'
import classes from './index.module.scss'
import { GutterProps } from '@/types/Fields/Gutter/types'

const Gutter: React.FC<GutterProps> = (props) => {
  const { children } = props
  return <div className={classes.gutter}>{children}</div>
}

export default Gutter
