import React from 'react'
import classes from './index.module.scss'

type Props = {
  children?: React.ReactNode
}

const FadeIn: React.FC<Props> = (props) => {
  const { children } = props
  return <div className={classes.fadeIn}>{children}</div>
}

export default FadeIn
