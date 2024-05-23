import { Page } from "../Page/types";

export type LinkAppearances = 'primary' | 'secondary' | 'tertiary'

export type Link = {
  appearance?: LinkAppearances
  type: 'reference' | 'custom'
  label?: string
  reference?: {
    relationTo: 'pages'
    value: Page| 'null'
  }
  url?: string
  newTab?: boolean
}
