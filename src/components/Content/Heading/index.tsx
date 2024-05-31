import React from 'react'
import classes from './index.module.scss'
import PopOut from '@/components/PopOut'

type Props = {
  heading?: string
}

const Heading: React.FC<Props> = (props) => {
  const { heading } = props
  return (
    <div className={classes.container}>
      <PopOut wait={3}>
        <div className={classes.headingWrap}>
          <h1 className={classes.heading}>{heading}</h1>
        </div>
      </PopOut>
    </div>
  )
}

export default Heading
