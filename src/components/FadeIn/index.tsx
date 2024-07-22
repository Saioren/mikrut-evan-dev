import React from 'react'
import { motion } from 'framer-motion'
import classes from './index.module.scss'

type Props = {
  children?: React.ReactNode
  order: number
  className?: string
}

const FadeIn: React.FC<Props> = (props) => {
  const { children, order } = props
  const delayTime = order * 0.15 // Ensure delay is in seconds for framer-motion

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: delayTime, duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true, amount: 'some' }}
      className={`${props.className} ${classes.fadeIn}`}
    >
      {children}
    </motion.div>
  )
}

export default FadeIn
