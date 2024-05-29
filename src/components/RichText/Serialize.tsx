import React, { Fragment } from 'react'
import escapeHTML from 'escape-html'
import { RichTextNode } from '@/types/Fields/RichText/types'
import classes from './index.module.scss'
import { Hyperlink } from '../Hyperlink'
import { RichTextUpload, RichTextUploadNodeType } from './RichTextUpload'

export type RichTextRenderers = {
  [node: string]: (text?: string) => JSX.Element
}

export type RichTextOverrides = {
  [node: string]: RichTextNode
}

export type Props = {
  customRenderers?: RichTextRenderers
  overrides?: RichTextOverrides
  content?: RichTextNode[]
}

const Serialize: React.FC<Props> = (props) => {
  const { content, overrides, customRenderers } = props

  if (!content) return null

  return (
    <Fragment>
      {content.map((incomingNode, i) => {
        const node = {
          ...incomingNode,
          ...(overrides?.[incomingNode.type] || {}),
        }

        if (node.type === 'text') {
          const { text, bold, code, italic, underline, strikethrough, small } = node
          let sanitizedText = text?.replace(/'/g, '\u2019') // single quotes

          if (!sanitizedText?.trim()) return null

          let TextElement = (
            <span
              key={i}
              dangerouslySetInnerHTML={{ __html: escapeHTML(sanitizedText) }}
              className={classes.text}
            />
          )

          if (bold)
            TextElement = (
              <strong key={i} className={classes.text}>
                {sanitizedText}
              </strong>
            )
          if (code)
            TextElement = (
              <code key={i} className={classes.text}>
                {sanitizedText}
              </code>
            )
          if (italic)
            TextElement = (
              <em key={i} className={classes.text}>
                {sanitizedText}
              </em>
            )
          if (underline)
            TextElement = (
              <span
                className={`${classes.text} underline`}
                style={{ textDecoration: 'underline' }}
                key={i}
              >
                {sanitizedText}
              </span>
            )
          if (strikethrough)
            TextElement = (
              <span style={{ textDecoration: 'line-through' }} className={classes.text} key={i}>
                {sanitizedText}
              </span>
            )
          if (small)
            TextElement = (
              <small className={classes.text} key={i}>
                {sanitizedText}
              </small>
            )

          return TextElement
        }

        if (!node) return null

        const contentElement = (
          <Serialize
            customRenderers={customRenderers}
            overrides={overrides}
            content={node.children}
          />
        )

        switch (node.type) {
          case 'heading-1':
            return <h1 key={i}>{contentElement}</h1>
          case 'heading-2':
            return <h2 key={i}>{contentElement}</h2>
          case 'heading-3':
            return <h3 key={i}>{contentElement}</h3>
          case 'heading-4':
            return <h4 key={i}>{contentElement}</h4>
          case 'heading-5':
            return <h5 key={i}>{contentElement}</h5>
          case 'heading-6':
            return <h6 key={i}>{contentElement}</h6>
          case 'quote':
            return <blockquote key={i}>{contentElement}</blockquote>
          case 'ul':
            return <ul key={i}>{contentElement}</ul>
          case 'ol':
            return <ol key={i}>{contentElement}</ol>
          case 'li':
            const hasListChildren = node.children?.some((child) =>
              ['ul', 'ol'].includes(child.type),
            )
            return (
              <li key={i} style={{ listStyle: hasListChildren ? 'none' : undefined }}>
                {contentElement}
              </li>
            )
          case 'indent':
            return (
              <div key={i} className={classes.indent}>
                {contentElement}
              </div>
            )
          case 'hr':
            return <hr className={classes.hr} key={i} />
          case 'link':
            return (
              <Hyperlink
                className={classes.anchor}
                dimOnHover
                underline
                newTab={node.newTab}
                href={escapeHTML(node.url)}
                key={i}
              >
                {contentElement}
              </Hyperlink>
            )
          case 'upload':
            if (node.relationTo === 'media') {
              return <RichTextUpload key={i} node={node as RichTextUploadNodeType} />
            }
            break
          default:
            return (
              <div key={i} className={classes.paragraph}>
                {contentElement}
              </div>
            )
        }

        return null
      })}
    </Fragment>
  )
}

export default Serialize
