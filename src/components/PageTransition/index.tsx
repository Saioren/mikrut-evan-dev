import React from 'react'
import { motion as m } from 'framer-motion'
import classes from './index.module.scss'

type Props = {
  children: React.ReactNode
}

const PageTransition: React.FC<Props> = (props) => {
  const { children } = props
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      {children}
    </m.div>
  )
}

export default PageTransition
