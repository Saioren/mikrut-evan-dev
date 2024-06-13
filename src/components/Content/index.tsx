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
  content?: {
    richText?: RichTextType
    links?: Link[]
  }
  heading?: string
  headingLowImpact?: boolean
  hero?: boolean
  position?: Position
  gradient?: boolean
  url?: string
  centered?: boolean
}

const Content: React.FC<ContentType> = ({
  content,
  heading,
  hero = false,
  position,
  headingLowImpact = false,
  url,
  gradient,
  centered,
}) => {
  return (
    <Grid>
      {' '}
      <Cell
        className={classes.cell}
        style={{ textAlign: centered ? 'center' : undefined }}
        cols={centered ? 14 : 6}
        colsM={centered ? 9 : 5}
        start={centered ? 1 : position === 'right' ? 1 : 2}
        startL={centered ? 1 : position === 'right' ? 1 : 2}
      >
        <FadeIn order={1}>
          <div className={classes.headingDiv}>
            <Heading headingLowImpact={headingLowImpact} heading={heading} />
          </div>
        </FadeIn>
        <FadeIn order={2}>
          <div className={classes.richTextDiv}>
            <RichText content={content?.richText} />
          </div>
        </FadeIn>
        {content?.links && (
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
              <LinkGroup url={url} gradient={gradient} links={content?.links} />
            </div>
          </FadeIn>
        )}
      </Cell>
    </Grid>
  )
}

export default Content
