import React from 'react'
import { RichText } from '../RichText'
import LinkGroup from '../LinkGroup'
import { RichText as RichTextType } from '@/types/Fields/RichText/types'
import { Link as LinkType, LinkAppearances } from '@/types/Fields/Link/types'
import { Cell, Grid } from '@faceless-ui/css-grid'
import classes from './index.module.scss'
import Heading from './Heading'
import { motion } from 'framer-motion'
import { BsGithub, BsTwitterX } from 'react-icons/bs'
import PopOut from '../PopOut'
import FadeIn from '../FadeIn'
import { Position } from '@/types/Layout/Position/types'
import Link from 'next/link'

type ContentType = {
  content?: {
    richText?: RichTextType
    links?: LinkType[]
  }
  heading?: string
  headingLowImpact?: boolean
  hero?: boolean
  position?: Position
  gradient?: boolean
  url?: string
  centered?: boolean
  start?: number
  projectHero?: boolean
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
  start,
  projectHero = false,
}) => {
  return (
    <Grid>
      {' '}
      <Cell
        className={classes.cell}
        style={{ textAlign: centered ? 'center' : undefined }}
        cols={centered ? 14 : 6}
        colsM={centered ? 9 : 5}
        colsS={9}
        start={centered ? 1 : start ? start : position === 'right' ? 1 : 2}
        startL={centered ? 1 : start ? start : position === 'right' ? 1 : 2}
        startS={1}
      >
        <FadeIn order={1}>
          <div className={classes.headingDiv}>
            <Heading
              headingLowImpact={headingLowImpact}
              projectHero={projectHero}
              heading={heading}
            />
          </div>
        </FadeIn>
        {centered && projectHero ? (
          <Grid>
            <Cell cols={8} start={4} colsM={7} startM={2}>
              <FadeIn order={2}>
                <div className={classes.richTextDiv}>
                  <RichText content={content?.richText} />
                </div>
              </FadeIn>
            </Cell>
          </Grid>
        ) : (
          <FadeIn order={2}>
            <div
              className={classes.richTextDiv}
              style={{ paddingBottom: content && content.links?.length === 0 ? '24px' : undefined }}
            >
              <RichText content={content?.richText} />
            </div>
          </FadeIn>
        )}
        {content?.links && content.links.length > 0 && (
          <FadeIn order={3}>
            <div
              className={classes.linksDiv}
              style={{ justifyContent: centered ? 'center' : undefined }}
            >
              {hero && (
                <React.Fragment>
                  <a
                    className={classes.anchorButton}
                    href="https://github.com/Saioren"
                    target="__blank"
                  >
                    <PopOut gradient margin icon hover>
                      <BsGithub className={classes.icon} />
                    </PopOut>
                  </a>
                  <a
                    className={classes.anchorButton}
                    href="https://x.com/mikrutevan1"
                    target="__blank"
                  >
                    <PopOut gradient margin icon hover={true}>
                      <BsTwitterX className={classes.icon} />
                    </PopOut>
                  </a>
                  <Link className={classes.anchorButton} href="#contact">
                    <PopOut gradient margin hover={true}>
                      <p>contact me</p>
                    </PopOut>
                  </Link>
                </React.Fragment>
              )}
              {!hero && <LinkGroup url={url} gradient={gradient} links={content?.links} />}
            </div>
          </FadeIn>
        )}
      </Cell>
    </Grid>
  )
}

export default Content
