import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

export const hasRichTextContent = (rt: unknown): rt is DefaultTypedEditorState => {
  if (!rt || typeof rt !== 'object' || !('root' in rt)) return false

  const children = (rt as any).root?.children
  if (!Array.isArray(children) || children.length === 0) return false

  const checkNode = (node: any): boolean => {
    // Block node with contentArray
    if (node.type === 'block' && node.fields) {
      const f = node.fields
      if (Array.isArray(f.contentArray) && f.contentArray.length > 0) {
        return true
      }
    }

    // Paragraph node with children
    if (Array.isArray(node.children) && node.children.length > 0) {
      return node.children.some(checkNode)
    }

    // Leaf text node
    return typeof node.text === 'string' && node.text.trim().length > 0
  }

  return children.some(checkNode)
}
