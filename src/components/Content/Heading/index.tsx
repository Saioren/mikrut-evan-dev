import React from 'react'
import classes from './index.module.scss'
import PopOut from '@/components/PopOut'

type Props = {
  heading?: string
  headingLowImpact?: string
}

const Heading: React.FC<Props> = (props) => {
  const { heading, headingLowImpact } = props
  return (
    <div className={classes.container}>
      <PopOut wait={3}>
        {headingLowImpact ? (
          <div className={classes.headinglowImpactWrap}>
            <h1 className={classes.headingLowImpact}>{headingLowImpact}</h1>
          </div>
        ) : (
          <div className={classes.headingWrap}>
            <h1 className={classes.heading}>{heading}</h1>
          </div>
        )}
      </PopOut>
    </div>
  )
}

export default Heading
