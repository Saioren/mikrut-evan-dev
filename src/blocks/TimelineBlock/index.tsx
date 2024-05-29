import React from 'react'
import { Timeline as TimelineBlockType } from '@/types/Blocks/Timeline/types'
import classes from './index.module.scss'

const TimelineBlock: React.FC<TimelineBlockType> = (props) => {
  const { timelineElements, header, padding } = props

  return (
    <div className={classes.timeline}>
      Timeline block!
      {padding} {header}
      {timelineElements.map((element) => {
        const { description, title, date, icon } = element
        return (
          <div key={title}>
            {title} {date} {description}
          </div>
        )
      })}
    </div>
  )
}

export default TimelineBlock
