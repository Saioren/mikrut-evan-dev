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
import { useWindowInfo } from '@faceless-ui/window-info'

const EmailBlock: React.FC<EmailBlockType> = (props) => {
  const { heading, padding, content, position = 'left' } = props
  const { width } = useWindowInfo()
  return (
    <Padding id="contact" padding={padding}>
      <Toaster
        toastOptions={{
          className: '',
          style: {
            backgroundColor: 'var(--background-primary-element)',
            color: 'var(--font-color)',
            fontSize: 'large',
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
              <Cell cols={7} colsM={4} colsS={9}>
                <Content heading={heading} headingLowImpact content={content} />
              </Cell>
              <Cell cols={7} colsM={5} colsS={9}>
                <PopOut animate wait={3}>
                  <EmailComponent />
                </PopOut>
              </Cell>
              <BackgroundColors positions={['bottomLeft']} />
            </React.Fragment>
          ) : position == 'right' ? (
            <React.Fragment>
              <Cell
                className={width && width < 768 ? classes.shown : classes.hidden}
                cols={7}
                colsM={4}
                colsS={9}
              >
                <Content heading={heading} headingLowImpact content={content} />
              </Cell>
              <Cell cols={7} colsM={5} colsS={9}>
                <PopOut animate wait={3}>
                  <EmailComponent />
                </PopOut>
              </Cell>
              <Cell
                className={width && width > 768 ? classes.shown : classes.hidden}
                cols={7}
                colsM={4}
                colsS={9}
              >
                <Content heading={heading} headingLowImpact content={content} />
              </Cell>
              <BackgroundColors positions={['bottomLeft']} />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Cell cols={7} colsM={4} colsS={9}>
                <Content heading={heading} headingLowImpact content={content} />
              </Cell>
              <Cell cols={7} colsM={5} colsS={9}>
                <PopOut animate wait={3}>
                  <EmailComponent />
                </PopOut>
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
