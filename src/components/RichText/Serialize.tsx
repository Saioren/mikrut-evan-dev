import React, { Fragment } from 'react'
import escapeHTML from 'escape-html'
import { Text } from 'slate'
import { RichTextNode } from '@/types/Fields/RichText/types'
import classes from './index.module.scss'
import { Hyperlink, HyperlinkProps } from '../Hyperlink'
import { Media as MediaType } from '@/types/Fields/Media/types'
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
        const isTextNode = Text.isText(incomingNode)
        const node = {
          ...incomingNode,
          ...(overrides?.[incomingNode.type] || {}),
        }

        const { text, bold, code, italic, underline, strikethrough, small, newTab } = node

        if (isTextNode) {
          let sanitizedText = text?.replace(/'/g, '\u2019') // single quotes
          if (!sanitizedText?.trim()) return null

          let Text = (
            <span
              key={i}
              dangerouslySetInnerHTML={{ __html: escapeHTML(sanitizedText) }}
              className={classes.text}
            />
          )

          if (bold)
            Text = (
              <strong key={i} className={classes.text}>
                {sanitizedText}
              </strong>
            )
          if (code)
            Text = (
              <code key={i} className={classes.text}>
                {sanitizedText}
              </code>
            )
          if (italic)
            Text = (
              <em key={i} className={classes.text}>
                {sanitizedText}
              </em>
            )
          if (underline)
            Text = (
              <span
                className={`${classes.text} underline`}
                style={{ textDecoration: 'underline' }}
                key={i}
              >
                {sanitizedText}
              </span>
            )
          if (strikethrough)
            Text = (
              <span style={{ textDecoration: 'line-through' }} className={classes.text} key={i}>
                {sanitizedText}
              </span>
            )
          if (small)
            Text = (
              <small className={classes.text} key={i}>
                {sanitizedText}
              </small>
            )

          if (underline && customRenderers?.underline) {
            Text = <Fragment key={i}>{customRenderers.underline(sanitizedText)}</Fragment>
          }

          return Text
        }

        if (!node) return null

        switch (node.type) {
          case 'h1':
            return (
              <h1 key={i}>
                <Serialize
                  customRenderers={customRenderers}
                  overrides={overrides}
                  content={node.children}
                />
              </h1>
            )
          case 'h2':
            return (
              <h2 key={i}>
                <Serialize
                  customRenderers={customRenderers}
                  overrides={overrides}
                  content={node.children}
                />
              </h2>
            )
          case 'h3':
            return (
              <h3 key={i}>
                <Serialize
                  customRenderers={customRenderers}
                  overrides={overrides}
                  content={node.children}
                />
              </h3>
            )
          case 'h4':
            return (
              <h4 key={i}>
                <Serialize
                  customRenderers={customRenderers}
                  overrides={overrides}
                  content={node.children}
                />
              </h4>
            )
          case 'h5':
            return (
              <h5 key={i}>
                <Serialize
                  customRenderers={customRenderers}
                  overrides={overrides}
                  content={node.children}
                />
              </h5>
            )
          case 'h6':
            return (
              <h6 key={i}>
                <Serialize
                  customRenderers={customRenderers}
                  overrides={overrides}
                  content={node.children}
                />
              </h6>
            )
          case 'quote':
            return (
              <blockquote key={i}>
                <Serialize
                  customRenderers={customRenderers}
                  overrides={overrides}
                  content={node.children}
                />
              </blockquote>
            )
          case 'ul':
            return (
              <ul key={i}>
                <Serialize
                  customRenderers={customRenderers}
                  overrides={overrides}
                  content={node.children}
                />
              </ul>
            )
          case 'ol':
            return (
              <ol key={i}>
                <Serialize
                  customRenderers={customRenderers}
                  overrides={overrides}
                  content={node.children}
                />
              </ol>
            )
          case 'li':
            const hasListChildren = node.children?.some((child) =>
              ['ul', 'ol'].includes(child.type),
            )
            return (
              <li key={i} style={{ listStyle: hasListChildren ? 'none' : undefined }}>
                <Serialize
                  customRenderers={customRenderers}
                  overrides={overrides}
                  content={node.children}
                />
              </li>
            )
          case 'indent':
            return (
              <div key={i} className={classes.indent}>
                <Serialize
                  customRenderers={customRenderers}
                  overrides={overrides}
                  content={node.children}
                />
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
                newTab={newTab}
                href={escapeHTML(node.url)}
                key={i}
              >
                <Serialize
                  customRenderers={customRenderers}
                  overrides={overrides}
                  content={node.children}
                />
              </Hyperlink>
            )
          case 'upload':
            if (node.relationTo === 'media') {
              return <RichTextUpload key={i} node={node as RichTextUploadNodeType} />
            }
            break
          default:
            return (
              <p key={i} className={classes.paragraph}>
                <Serialize
                  customRenderers={customRenderers}
                  overrides={overrides}
                  content={node.children}
                />
              </p>
            )
        }

        return null
      })}
    </Fragment>
  )
}

export default Serialize
