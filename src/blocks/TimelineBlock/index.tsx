import React from 'react'
import { Timeline as TimelineBlockType } from '@/types/Blocks/Timeline/types'
import classes from './index.module.scss'
import Padding from '@/layout/Padding'
import TimelineElement from './TimelineElement'
import { Cell, Grid } from '@faceless-ui/css-grid'
import PopOut from '@/components/PopOut'
import FadeIn from '@/components/FadeIn'
import Content from '@/components/Content'
import Image from 'next/image'

const TimelineBlock: React.FC<TimelineBlockType> = (props) => {
  const { timelineElements, heading, padding, content } = props

  return (
    <Padding padding={padding}>
      <Grid>
        <Cell>
          <div className={classes.timeline}>
            <FadeIn order={1}>
              <div className={classes.content}>
                <Content centered headingLowImpact heading={heading} content={content} />
              </div>
            </FadeIn>
            <FadeIn order={2}>
              <div className={classes.timelineSection}>
                <div className={classes.timelineLine} />
                {timelineElements.map((element, index) => {
                  return (
                    <Cell className={classes.cell}>
                      <div className={classes.timelineIcon}>
                        <Image
                          className={classes.icon}
                          src="/html.svg"
                          alt="html"
                          width="300"
                          height="300"
                        />
                      </div>
                      <FadeIn order={index + 2}>
                        <PopOut animate wait={3 + index / 2}>
                          <TimelineElement element={element} />
                        </PopOut>
                      </FadeIn>
                    </Cell>
                  )
                })}
              </div>
            </FadeIn>
          </div>
        </Cell>
      </Grid>
    </Padding>
  )
}

export default TimelineBlock
