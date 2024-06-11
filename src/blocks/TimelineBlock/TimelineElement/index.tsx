import { TimelineElement as TimelineElementProps } from '@/types/Blocks/Timeline/types'
import React from 'react'
import classes from './index.module.scss'
import PopOut from '@/components/PopOut'

type Props = {
  element: TimelineElementProps
}

const TimelineElement: React.FC<Props> = (props) => {
  const { element } = props
  const { description, title, date, icon } = element
  const formattedDate = new Date(date)
  const monthYear = formattedDate.toLocaleString('en-US', {
    month: 'long',
    year: 'numeric',
  })
  return (
    <div className={classes.timelineElementWrap} key={title}>
      <div className={classes.timelineElement}>
        <div className={classes.title}>{title}</div>
        <div className={classes.date}>{monthYear}</div>
        <div className={classes.description}>{description}</div>
      </div>
    </div>
  )
}

export default TimelineElement
