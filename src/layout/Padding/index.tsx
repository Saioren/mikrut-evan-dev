import React from 'react'
import classes from './index.module.scss'
import { PaddingOption, Padding as PaddingType } from '@/types/Layout/Padding/types'

type Props = {
  children?: React.ReactNode
  padding: PaddingOption | PaddingType
}

const Padding: React.FC<Props> = (props) => {
  const { padding, children } = props

  if (typeof padding === 'string') {
    if (padding === 'small') {
      return <div className={classes.small}>{children}</div>
    } else if (padding === 'medium') {
      return <div className={classes.medium}>{children}</div>
    } else if (padding === 'large') {
      return <div className={classes.large}>{children}</div>
    }
  } else {
    const { paddingTop, paddingBottom } = padding
    const paddingClasses = `${classes[paddingTop]} ${classes[paddingBottom]}`
    return <div className={paddingClasses}>{children}</div>
  }

  return null
}

export default Padding
