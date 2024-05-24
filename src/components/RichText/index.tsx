import React, { useEffect, useState } from 'react'
import classes from './index.module.scss'
import Serialize, { RichTextOverrides, RichTextRenderers } from './Serialize'
import { RichText as RichTextType } from '@/types/RichText/types'

export const RichText: React.FC<{
  className?: string
  content?: RichTextType
  overrides?: RichTextOverrides
  customRenderers?: RichTextRenderers
}> = (props) => {
  const { className, content, overrides, customRenderers: customRenderersFromProps } = props

  /*const customRenderers = {
    ...customRenderersFromProps,
    underline: (incomingText) => {
      return (
        <Highlight
          text={incomingText}
          bold
        />
      )
    }
  } as RichTextRenderers;*/

  if (content) {
    return (
      <div className={[classes.richText, className].filter(Boolean).join(' ')} tabIndex={0}>
        <Serialize
          //customRenderers={customRenderers}
          overrides={overrides}
          content={content}
        />
      </div>
    )
  }
  return null
}
