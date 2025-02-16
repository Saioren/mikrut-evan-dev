import NextHead from 'next/head'
import React, { Fragment } from 'react'
import { Meta as MetaType } from '@/types/Fields/Meta/types'

const Meta: React.FC<MetaType> = (props) => {
  const {
    title, // Title for the page and browser tab
    description,
    image, // may be 'null' so do not destructure
    keywords = "evan mikrut mikrutevan.dev mikrut evan next js payload cms wordpress typescript javascript",
    seoTitle, // This will be used for search result title
  } = props

  let imageToUse

  if (image && image !== null && typeof image !== 'string') {
    if (image?.mimeType !== 'video/mp4') {
      imageToUse = image
    } else {
      const { fallback } = image
      if (fallback && fallback !== null && typeof fallback !== 'string') {
        if (fallback?.mimeType !== 'video/mp4') imageToUse = fallback
      }
    }
  }

  return (
    <NextHead>
      {/* Title for the browser tab */}
      {title && (
        <Fragment>
          <title>{title}</title>
        </Fragment>
      )}

      {/* SEO Title for search engines (Google) */}
      {seoTitle && (
        <Fragment>
          <meta property="og:title" content={seoTitle} />
          <meta name="twitter:title" content={seoTitle} />
        </Fragment>
      )}

      {/* OG Description */}
      {description && (
        <Fragment>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
        </Fragment>
      )}

      {/* OG Image */}
      {imageToUse && typeof imageToUse !== 'string' && (
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_API_URL}/media/${imageToUse?.filename}`}
        />
      )}

      {/* Keywords */}
      {keywords && <meta name="keywords" content={keywords} />}
    </NextHead>
  )
}

export default Meta
