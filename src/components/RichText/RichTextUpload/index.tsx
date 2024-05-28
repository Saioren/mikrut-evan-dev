import React from 'react'
//import { Media } from '@components/Media';
import { Media as MediaType } from '@/types/Fields/Media/types'
import classes from './index.module.scss'
import { Link as LinkType } from '@/types/Fields/Link/types'
import { RichTextNode } from '@/types/Fields/RichText/types'
import { RichText as RichTextType } from '@/types/Fields/RichText/types'
import { RichText } from '..'
import { Hyperlink, HyperlinkProps } from '@/components/Hyperlink'

export type RichTextUploadNodeType = {
  fields: {
    caption?: RichTextType
    alignment?: 'left' | 'center' | 'right'
    link?: LinkType
    enableLink?: boolean
  }
  value?: MediaType
  relationTo: string
} & RichTextNode

export type Props = {
  node: RichTextUploadNodeType
  className?: string
}

export const RichTextUpload: React.FC<Props> = (props) => {
  const {
    node: { fields, value },
    className,
  } = props

  let Wrap: React.ComponentType<HyperlinkProps> | string = 'div'

  const styles: React.CSSProperties = {}

  switch (fields?.alignment) {
    case 'left':
      styles.float = 'left'
      break

    case 'right':
      styles.float = 'right'
      break

    case 'center':
      styles.margin = 'auto'
      break
  }

  const wrapProps: HyperlinkProps = {}

  if (fields?.enableLink) {
    Wrap = Hyperlink
    wrapProps.linkFromCMS = fields?.link
  }

  return (
    <div
      style={styles}
      className={[className, classes[`alignment-${fields?.alignment}`]].filter(Boolean).join(' ')}
    >
      <Wrap {...wrapProps}>
        <Media layout="intrinsic" quality={75} mediaFromCMS={value as MediaType} />
        {fields?.caption && <RichText content={fields?.caption} className={classes.caption} />}
      </Wrap>
    </div>
  )
}

export default RichTextUpload
