import React from 'react'
import classes from './index.module.scss'
import PopOut from '@/components/PopOut'

type Props = {
  heading?: string
  headingLowImpact?: boolean
}

const Heading: React.FC<Props> = (props) => {
  const { heading, headingLowImpact } = props
  return headingLowImpact ? (
    <div className={classes.headingLowImpactContainer}>
      <div className={classes.headinglowImpactWrap}>
        <h1 className={classes.headingLowImpact}>{heading}</h1>
      </div>
    </div>
  ) : (
    <div className={classes.container}>
      <PopOut wait={3}>
        <div className={classes.headingWrap}>
          <h2 className={classes.heading}>{heading}</h2>
        </div>
      </PopOut>
    </div>
  )
}

export default Heading
