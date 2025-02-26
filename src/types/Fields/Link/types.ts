import { PageType } from "../../Layout/Page/types"

export type LinkAppearances = 'default' | 'gradient'

export type Link = {
  link: {
    id: number;
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
}

export type LinkGroup = {
  links?: Link[]
}
