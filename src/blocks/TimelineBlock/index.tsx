import React from 'react'
import { Timeline as TimelineBlockType } from '@/types/Blocks/Timeline/types'

const TimelineBlock: React.FC<TimelineBlockType> = (props) => {
  const { timelineElements } = props

  return (
    <div>
      {timelineElements.map((element) => {
        const { header, description, padding, title, date, icon } = element
        return <div key={title}>{header}</div>
      })}
    </div>
  )
}

export default TimelineBlock
