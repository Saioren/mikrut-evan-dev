import React from 'react'
import { Timeline as TimelineBlockType } from '@/types/Blocks/Timeline/types'
import classes from './index.module.scss'
import Padding from '@/layout/Padding'

const TimelineBlock: React.FC<TimelineBlockType> = (props) => {
  const { timelineElements, heading, padding } = props

  return (
    <Padding padding={padding}>
      <div className={classes.timeline}>
        Timeline block!
        {heading}
        {timelineElements.map((element) => {
          const { description, title, date, icon } = element
          return (
            <div key={title}>
              {title} {date} {description}
            </div>
          )
        })}
      </div>
    </Padding>
  )
}

export default TimelineBlock
