import { Media as MediaType } from '@/types/Fields/Media/types'
import { ImageComponent } from './Image'
import React, { ElementType, Fragment } from 'react'

export type Props = {
  className?: string
  htmlElement?: ElementType | null
  onClick?: () => void
  onLoad?: () => void
  quality?: number
  mediaFromCMS?: MediaType
  useNextImage?: boolean
}

export const Media: React.FC<Props> = (props) => {
  const { className, mediaFromCMS, htmlElement = 'div' } = props

  console.log(mediaFromCMS)

  const Tag = (htmlElement as ElementType) || Fragment
  return (
    <Tag
      {...(htmlElement !== null
        ? {
            className,
          }
        : {})}
    >
      <ImageComponent {...props} />
    </Tag>
  )
}

export default Media
