import React from 'react'
import { RichText } from '../RichText'
import LinkGroup from '../LinkGroup'
import { RichText as RichTextType } from '@/types/Fields/RichText/types'
import { Link } from '@/types/Fields/Link/types'

type ContentType = {
  content: {
    richText?: RichTextType
    links?: Link[]
  }
}

const Content: React.FC<ContentType> = ({ content }) => {
  return (
    <div>
      <RichText content={content.richText} />
      <LinkGroup links={content?.links} />
    </div>
  )
}

export default Content
