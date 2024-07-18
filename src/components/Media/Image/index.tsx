import React, { Fragment } from 'react'
import { Props } from '../index'
import Image from 'next/image'
import classes from './index.module.scss'

export const ImageComponent: React.FC<Props> = (props) => {
  const { onClick, onLoad: onLoadFromProps, quality, mediaFromCMS, useNextImage = true } = props

  const [isLoading, setIsLoading] = React.useState(true)

  if (mediaFromCMS) {
    const { width, height, url, alt } = mediaFromCMS

    const baseProps = {
      className: [classes.image].filter(Boolean).join(' '),
      src: `${process.env.NEXT_PUBLIC_API_URL}${url}`, // Assuming `url` from API is a relative path
      alt,
      onClick,
      onLoad: () => {
        setIsLoading(false)
        if (typeof onLoadFromProps === 'function') {
          onLoadFromProps()
        }
      },
    }

    {
      <Image
        src={`${process.env.NEXT_PUBLIC_API_URL}${url}`}
        width={width}
        height={height}
        quality={quality}
        alt={alt}
        onLoadingComplete={() => setIsLoading(false)}
      />
    }

    return (
      <Fragment>
        {!useNextImage && <img src={`${process.env.NEXT_PUBLIC_API_URL}${url}`} alt={alt} />}
        {useNextImage && <></>}
      </Fragment>
    )
  }

  return null
}

ImageComponent.displayName = 'ImageComponent'
