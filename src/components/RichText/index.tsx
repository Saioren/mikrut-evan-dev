import React from 'react'
import classes from './index.module.scss'
import Serialize, { RichTextOverrides, RichTextRenderers } from './Serialize'
import { RichText as RichTextType } from '@/types/Fields/RichText/types'

export const RichText: React.FC<{
  className?: string
  content?: RichTextType
  overrides?: RichTextOverrides
  customRenderers?: RichTextRenderers
}> = (props) => {
  const { className, content, overrides, customRenderers: customRenderersFromProps } = props

  if (content) {
    return (
      <div className={[classes.richText, className].filter(Boolean).join(' ')} tabIndex={0}>
        <Serialize
          //customRenderers={customRenderers}
          overrides={overrides}
          content={content.root.children}
        />
      </div>
    )
  }

  return null
}
