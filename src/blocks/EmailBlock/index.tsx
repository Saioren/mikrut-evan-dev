import Content from '@/components/Content'
import EmailComponent from '@/components/Email'
import Padding from '@/layout/Padding'
import { Email as EmailBlockType } from '@/types/Blocks/Email/types'
import { Cell, Grid } from '@faceless-ui/css-grid'
import React from 'react'
import classes from './index.module.scss'
import PopOut from '@/components/PopOut'
import FadeIn from '@/components/FadeIn'

const EmailBlock: React.FC<EmailBlockType> = (props) => {
  const { heading, padding, content } = props
  return (
    <Padding padding={padding}>
      <FadeIn order={0}>
        <Grid className={classes.grid}>
          <Cell cols={7} colsM={4}>
            <Content heading={heading} headingLowImpact content={content} />
          </Cell>
          <Cell cols={7} colsM={5}>
            <PopOut animate wait={3}>
              <EmailComponent />
            </PopOut>
          </Cell>
        </Grid>
      </FadeIn>
    </Padding>
  )
}

export default EmailBlock
