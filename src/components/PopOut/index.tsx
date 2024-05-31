import React, { useEffect, useState } from 'react'
import classes from './index.module.scss'
import { useWindowInfo } from '@faceless-ui/window-info'

type Props = {
  children: React.ReactNode
  wait?: number
  animate?: boolean
  hover?: boolean
  gradient?: boolean
  icon?: boolean
}

const PopOut: React.FC<Props> = (props) => {
  const [hasAnimated, setHasAnimated] = useState(false)

  const windowInfo = useWindowInfo()
  const height = windowInfo.height
  const width = windowInfo.width

  const { children, wait, animate, hover, gradient, icon } = props

  const delayTime = wait && wait * 300

  useEffect(() => {
    setTimeout(() => {
      setHasAnimated(true)
    }, delayTime)
  }, [])

  return animate ? (
    <div style={{ width: '100%' }} className={`${classes.popOut} ${classes.animate}`}>
      <div
        className={`${classes.children} ${classes.animateMargin} ${
          hasAnimated ? classes.animateChildren : classes.initialChildren
        }`}
      >
        {children}
      </div>
      <div className={classes.headingBackground} />
      <div className={classes.headingShadow} />
    </div>
  ) : hover ? (
    <div style={{ width: 'max-content' }} className={`${classes.popOut} ${classes.hover}`}>
      <div
        className={`${classes.children} ${
          gradient ? classes.hoverChildrenGradient : classes.hoverChildren
        } ${icon ? classes.icon : classes.label}`}
      >
        {children}
      </div>
      <div className={`${classes.hoverHeadingBackground}`} />
      <div className={`${classes.hoverHeadingShadow}`} />
    </div>
  ) : (
    <div className={`${classes.popOut} ${classes.default}`}>
      <div className={classes.children}>{children}</div>
      <div className={classes.headingBackground} />
      <div className={classes.headingShadow} />
    </div>
  )
}

export default PopOut
