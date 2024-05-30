import React from 'react'
import { RichText } from '../RichText'
import LinkGroup from '../LinkGroup'
import { RichText as RichTextType } from '@/types/Fields/RichText/types'
import { Link } from '@/types/Fields/Link/types'
import { Cell, Grid } from '@faceless-ui/css-grid'
import classes from './index.module.scss'

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
      <Cell cols={7} colsM={5}>
        {' '}
        <div className={classes.headingWrap}>
          <h1 className={classes.heading}>{heading}</h1>
        </div>
        <RichText content={content.richText} />
        <LinkGroup links={content?.links} />
      </Cell>
    </Grid>
  )
}

export default Content
