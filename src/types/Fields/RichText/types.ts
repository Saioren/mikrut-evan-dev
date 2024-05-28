  export type RichTextNode = {
    text?: string
    type?: string
    bold?: boolean
    code?: boolean
    italic?: boolean
    underline?: boolean
    strikethrough?: boolean
    small?: boolean
    indent?: boolean
    url?: string
    newTab?: boolean
    children?: RichTextNode[]
    relationTo?: 'locations' | string
    value?: Location | unknown
    source?: 'vimeo' | 'youtube' | string
    id?: string
  }
  
  export type RichText = RichTextNode[];