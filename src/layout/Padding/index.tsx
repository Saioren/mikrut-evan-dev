import React from 'react'
import classes from './index.module.scss'
import { PaddingOption, Padding as PaddingType } from '@/types/Layout/Padding/types'

type PaddingProps = {
  children?: React.ReactNode
  padding: PaddingOption
}

const Padding: React.FC<PaddingProps> = (props) => {
  const { padding, children } = props
  const { paddingTop, paddingBottom } = padding

  const paddingTopClass = `padding-top-${paddingTop}`
  const paddingBottomClass = `padding-bottom-${paddingBottom}`

  const paddingClasses = `${classes.padding} ${paddingTop && classes[paddingTopClass]} ${
    paddingBottom && classes[paddingBottomClass]
  }`

  return <div className={paddingClasses}>{children}</div>
}

export default Padding
