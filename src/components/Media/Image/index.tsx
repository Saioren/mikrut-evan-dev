import React, { Fragment } from 'react'
import { Props } from '../index'
import Image from 'next/image'
import classes from './index.module.scss'

export const ImageComponent: React.FC<Props> = (props) => {
  const { onClick, onLoad: onLoadFromProps, quality, mediaFromCMS, useNextImage = true } = props

  const [isLoading, setIsLoading] = React.useState(true)

  console.log(mediaFromCMS)

  if (mediaFromCMS) {
    const { width, height, absolutePath, filename, alt } = mediaFromCMS

    let imageWidth = width
    let imageHeight = height
    let imageToUse = filename

    const baseProps = {
      className: [classes.image].filter(Boolean).join(' '),
      src:
        absolutePath && imageToUse
          ? imageToUse
          : `${process.env.NEXT_PUBLIC_API_URL}/media/${imageToUse}`,
      alt,
      onClick,
      onLoad: () => {
        setIsLoading(false)
        if (typeof onLoadFromProps === 'function') {
          onLoadFromProps()
        }
      },
    }

    return (
      <Fragment>
        {!useNextImage && <img {...baseProps} alt={alt} />}
        {useNextImage && (
          <Fragment>
            {/*<Image
              src={`${process.env.NEXT_PUBLIC_API_URL}${mediaFromCMS.url}`}
              width={imageWidth}
              height={imageHeight}
              quality={quality}
              alt={mediaFromCMS.alt}
        />*/}
          </Fragment>
        )}
      </Fragment>
    )
  }

  return null
}

Image.displayName = 'Image'
