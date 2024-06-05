import React from 'react'
import { RichText } from '../RichText'
import LinkGroup from '../LinkGroup'
import { RichText as RichTextType } from '@/types/Fields/RichText/types'
import { Link, LinkAppearances } from '@/types/Fields/Link/types'
import { Cell, Grid } from '@faceless-ui/css-grid'
import classes from './index.module.scss'
import Heading from './Heading'
import { motion } from 'framer-motion'
import { BsGithub, BsTwitterX } from 'react-icons/bs'
import PopOut from '../PopOut'
import FadeIn from '../FadeIn'
import { Position } from '@/types/Layout/Position/types'

type ContentType = {
  content: {
    richText?: RichTextType
    links?: Link[]
  }
  heading?: string
  headingLowImpact?: string
  hero?: boolean
  position?: Position
  gradient?: boolean
}

const Content: React.FC<ContentType> = ({
  content,
  heading,
  hero,
  position,
  headingLowImpact,
  gradient,
}) => {
  return (
    <Grid>
      {' '}
      <Cell cols={7} colsM={5} start={position === 'right' ? 1 : 2} startL={1}>
        <FadeIn order={1}>
          <div className={classes.headingDiv}>
            <Heading heading={heading} />
          </div>
        </FadeIn>
        <FadeIn order={2}>
          <div className={classes.richTextDiv}>
            <RichText content={content.richText} />
          </div>
        </FadeIn>
        <FadeIn order={3}>
          <div className={classes.linksDiv}>
            {hero && (
              <React.Fragment>
                <PopOut gradient margin icon hover>
                  <a
                    className={classes.anchorButton}
                    href="https://github.com/Saioren"
                    target="__blank"
                  >
                    <BsGithub className={classes.icon} />
                  </a>
                </PopOut>
                <PopOut gradient margin icon hover={true}>
                  <a
                    className={classes.anchorButton}
                    href="https://x.com/mikrutevan1"
                    target="__blank"
                  >
                    <BsTwitterX className={classes.icon} />
                  </a>
                </PopOut>
              </React.Fragment>
            )}
            <LinkGroup gradient={gradient} links={content?.links} />
          </div>
        </FadeIn>
      </Cell>
    </Grid>
  )
}

export default Content
