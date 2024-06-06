import React, { useEffect, useRef, useState } from 'react'
import classes from './index.module.scss'
import { useWindowInfo } from '@faceless-ui/window-info'
import { LinkAppearances } from '@/types/Fields/Link/types'

type Props = {
  children: React.ReactNode
  wait?: number
  animate?: boolean
  hover?: boolean
  appearance?: LinkAppearances
  icon?: boolean
  header?: boolean
  margin?: boolean
  gradient?: boolean
  small?: boolean
}

const PopOut: React.FC<Props> = (props) => {
  const [hasAnimated, setHasAnimated] = useState(false)

  const windowInfo = useWindowInfo()
  const height = windowInfo.height
  const width = windowInfo.width

  const {
    children,
    wait,
    animate,
    hover,
    appearance,
    icon,
    header,
    margin = false,
    gradient,
    small,
  } = props

  const ref = useRef<HTMLDivElement>(null)

  const delayTime = wait ? wait * 300 : 0

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setHasAnimated(true)
            }, delayTime)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 }, // Adjust threshold as needed
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delayTime])

  return animate ? (
    <div ref={ref} style={{ width: '100%' }} className={`${classes.popOut} ${classes.animate}`}>
      <div
        className={`${classes.children} ${margin ? classes.animateMargin : ''} ${
          hasAnimated ? classes.animateChildren : classes.initialChildren
        }`}
      >
        {children}
      </div>
      <div className={classes.headingBackground} />
      <div className={classes.headingShadow} />
    </div>
  ) : hover ? (
    <div
      ref={ref}
      style={{ width: 'max-content' }}
      className={`${classes.popOut} ${classes.hover}`}
    >
      <div
        className={`${classes.children} ${
          appearance === 'gradient' || gradient
            ? classes.hoverChildrenGradient
            : header
            ? classes.header
            : classes.hoverChildren
        } ${
          icon && header
            ? classes.headerIcon
            : icon
            ? classes.icon
            : header
            ? classes.headerLabel
            : classes.label
        }`}
      >
        {children}
      </div>
      <div className={`${classes.hoverHeadingBackground}`} />
      <div className={`${classes.hoverHeadingShadow}`} />
    </div>
  ) : (
    <div ref={ref} className={`${classes.popOut} ${classes.default}`}>
      <div className={classes.children}>{children}</div>
      <div className={classes.headingBackground} />
      <div className={small ? classes.small : classes.headingShadow} />
    </div>
  )
}

export default PopOut
