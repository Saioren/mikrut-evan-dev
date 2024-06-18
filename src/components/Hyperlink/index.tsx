import { formatPermalink } from '@/utilities/formatPermalink' // Make sure this utility exists and works as expected
import { Link as LinkType } from '@/types/Fields/Link/types'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { CSSProperties } from 'react'
import classes from './index.module.scss'

export type HyperlinkProps = {
  href?: string
  className?: string
  linkFromCMS?: LinkType
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  onClick?: () => void
  underline?: boolean
  underlineOnHover?: boolean
  dimOnHover?: boolean
  htmlAttributes?: {
    [key: string]: unknown
  }
  display?: 'block'
  style?: CSSProperties
  newTab?: boolean
  children?: React.ReactNode
  customUrl?: string
}

export const Hyperlink: React.FC<HyperlinkProps> = (props) => {
  const {
    className,
    href: hrefFromProps,
    children,
    linkFromCMS,
    onMouseEnter,
    onMouseLeave,
    onClick,
    underline,
    underlineOnHover,
    dimOnHover,
    htmlAttributes,
    display,
    style,
    newTab: newTabFromProps,
    customUrl,
  } = props

  const { asPath } = useRouter()

  let href = hrefFromProps
  let openInNewTab = newTabFromProps

  if (linkFromCMS) {
    const { type, url, reference, newTab: newTabFromLink } = linkFromCMS.link
    if (customUrl) {
      href = customUrl
    } else if (type === 'reference' && reference) {
      href = formatPermalink(reference) // Assume formatPermalink handles the formatting correctly
    }

    if (type === 'custom' && url) {
      // Ensure the URL includes a protocol
      href = url.match(/^https?:\/\//) ? url : `http://${url}`
    }

    if (newTabFromLink) {
      openInNewTab = true
    }
  }

  const isOnPage = asPath === href

  const sharedProps = {
    ...htmlAttributes,
    className: [
      className,
      classes.hyperlink,
      underline && classes.underline,
      underline !== true && underlineOnHover && classes.underlineOnHover,
      dimOnHover && href && classes.dimOnHover,
      display && classes[`display-${display}`],
      !href || (isOnPage && classes.disableCursor),
    ]
      .filter(Boolean)
      .join(' '),
    onMouseEnter,
    onMouseLeave,
    onClick,
    style,
    target: openInNewTab ? '_blank' : '',
    rel: openInNewTab ? 'noopener noreferrer' : '',
  }

  if (!href) {
    return <span {...sharedProps}>{children}</span>
  }

  const sanitizedHref = href

  let isLocal = true
  if (
    sanitizedHref.startsWith('tel:') ||
    sanitizedHref.startsWith('mailto:') ||
    sanitizedHref.match(/^https?:\/\//)
  ) {
    isLocal = false
  }

  if (isLocal) {
    return (
      <Link href={sanitizedHref} prefetch={false} legacyBehavior>
        <a {...sharedProps}>{children}</a>
      </Link>
    )
  }

  return (
    <a href={sanitizedHref} {...sharedProps}>
      {children}
    </a>
  )
}
