import { PageType } from "../../Layout/Page/types"

export type LinkAppearances = 'primary' | 'secondary' | 'tertiary'

export type Link = {
  appearance?: LinkAppearances
  type: 'reference' | 'custom'
  label?: string
  reference?: {
    relationTo: 'pages'
    value: PageType| 'null'
  }
  url?: string
  newTab?: boolean
}

export type LinkGroup = {
  link: Link
}[]
