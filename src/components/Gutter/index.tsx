import React from 'react'
import classes from './index.module.scss'

type GutterProps = {
  children?: React.ReactNode
}

const Gutter: React.FC<GutterProps> = (props) => {
  const { children } = props
  return <div className={classes.gutter}>{children}</div>
}

export default Gutter
