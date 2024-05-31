import React from 'react'
import classes from './index.module.scss'

type Props = {
  children?: React.ReactNode
  text?: boolean
}

const BlockButton: React.FC<Props> = (props) => {
  const { children, text } = props
  return (
    <div className={`${classes.button} ${text ? classes.text : classes.image}`}>{children}</div>
  )
}

export default BlockButton
