import Link from 'next/link'
import React from 'react'
import { BsArrowUp } from 'react-icons/bs'
import classes from './index.module.scss'

const ToTop = () => {
  return (
    <a href="#">
      <div className={classes.toTop}>
        <div className={classes.shadow} />
        <div className={classes.link}>
          <BsArrowUp className={classes.arrow} />
        </div>
      </div>
    </a>
  )
}

export default ToTop
