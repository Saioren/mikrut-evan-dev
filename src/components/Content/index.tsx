import React from 'react'
import { RichText } from '../RichText'
import LinkGroup from '../LinkGroup'
import { RichText as RichTextType } from '@/types/Fields/RichText/types'
import { Link } from '@/types/Fields/Link/types'
import { Cell, Grid } from '@faceless-ui/css-grid'
import classes from './index.module.scss'
import Heading from './Heading'
import { motion } from 'framer-motion'
import { BsGithub, BsTwitterX } from 'react-icons/bs'
import PopOut from '../PopOut'

type ContentType = {
  content: {
    richText?: RichTextType
    links?: Link[]
  }
  heading?: string
}

const Content: React.FC<ContentType> = ({ content, heading }) => {
  return (
    <Grid>
      {' '}
      <Cell cols={6} colsM={4} start={2} startL={1}>
        <div className={classes.headingDiv}>
          <Heading heading={heading} />
        </div>
        <div className={classes.richTextDiv}>
          <RichText content={content.richText} />
        </div>
        <div className={classes.linksDiv}>
          <LinkGroup links={content?.links} />
          <PopOut hover={true}>
            <a className={classes.anchorButton} href="https://github.com/Saioren" target="__blank">
              <BsGithub className={classes.icon} />
            </a>
          </PopOut>
          <PopOut hover={true}>
            <a className={classes.anchorButton} href="https://x.com/mikrutevan1" target="__blank">
              <BsTwitterX className={classes.icon} />
            </a>
          </PopOut>
        </div>
      </Cell>
    </Grid>
  )
}

export default Content
