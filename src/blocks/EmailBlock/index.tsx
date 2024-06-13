import Content from '@/components/Content'
import EmailComponent from '@/components/Email'
import Padding from '@/layout/Padding'
import { Email as EmailBlockType } from '@/types/Blocks/Email/types'
import { Cell, Grid } from '@faceless-ui/css-grid'
import React from 'react'
import classes from './index.module.scss'
import PopOut from '@/components/PopOut'
import FadeIn from '@/components/FadeIn'
import { Toaster } from 'react-hot-toast'
import BackgroundColors from '@/components/BackgroundColors'

const EmailBlock: React.FC<EmailBlockType> = (props) => {
  const { heading, padding, content, position = 'left' } = props
  return (
    <Padding id="contact" padding={padding}>
      <Toaster
        toastOptions={{
          className: '',
          style: {
            backgroundColor: 'var(--background-primary-element)',
            color: 'var(--font-color)',
            fontSize: 'medium',
            display: 'flex',
            alignItems: 'center',
          },
        }}
        position="bottom-right"
      />
      <FadeIn order={0}>
        <Grid className={classes.grid}>
          {position == 'left' ? (
            <React.Fragment>
              <Cell cols={7} colsM={4}>
                <Content heading={heading} headingLowImpact content={content} />
              </Cell>
              <Cell cols={7} colsM={5}>
                <PopOut animate wait={3}>
                  <EmailComponent />
                </PopOut>
              </Cell>
              <BackgroundColors positions={['bottomLeft']} />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Cell cols={7} colsM={5}>
                <PopOut animate wait={3}>
                  <EmailComponent />
                </PopOut>
              </Cell>
              <Cell cols={7} colsM={4}>
                <Content heading={heading} headingLowImpact content={content} />
              </Cell>
              <BackgroundColors positions={['bottomLeft']} />
            </React.Fragment>
          )}
        </Grid>
      </FadeIn>
    </Padding>
  )
}

export default EmailBlock
