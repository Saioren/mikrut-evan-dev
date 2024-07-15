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
import { useWindowInfo } from '@faceless-ui/window-info'
import BackgroundColors from '@/components/BackgroundColors'

const TimelineBlock: React.FC<TimelineBlockType> = (props) => {
  const { timelineElements, heading, padding, content } = props
  const { width } = useWindowInfo()

  return (
    <Padding padding={padding}>
      <Grid>
        {timelineElements ? (
          <React.Fragment>
            <Cell cols={14}>
              <div className={classes.timeline}>
                <FadeIn order={1}>
                  <div className={classes.content}>
                    <Content centered headingLowImpact heading={heading} content={content} />
                  </div>
                </FadeIn>
                <FadeIn order={2}>
                  <Cell colsL={9}>
                    <div className={classes.timelineSection}>
                      <div className={classes.timelineElements}>
                        <div className={classes.timelineLine} />
                        {timelineElements.map((element, index) => {
                          return (
                            <div key={index} className={classes.timelineElement}>
                              <div className={classes.relative}>
                                <div className={classes.timelineIcon}>
                                  <div className={classes.iconWrap}>
                                    <Image
                                      className={classes.icon}
                                      src={element.icon.url}
                                      alt={element.icon.alt}
                                      width={element.icon.width}
                                      height={element.icon.height}
                                    />
                                  </div>
                                </div>
                                <div className={classes.widthConstraint}>
                                  <FadeIn order={index + 2}>
                                    <PopOut animate wait={3 + index / 2}>
                                      <TimelineElement element={element} />
                                    </PopOut>
                                  </FadeIn>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </Cell>
                </FadeIn>
              </div>
            </Cell>
          </React.Fragment>
        ) : (
          <div>Nothing to show...</div>
        )}
      </Grid>
    </Padding>
  )
}

export default TimelineBlock
