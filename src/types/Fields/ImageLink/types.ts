import { PageType } from "../../Layout/Page/types"
import { Image } from "../Image/types"

export type ImageLink = {
  type: 'reference' | 'custom';
  reference?: {
    relationTo: 'pages';
    value: PageType| 'null';
  }
  url?: string;
  newTab?: boolean;
  image: Image;
}

export type ImageLinkGroup = {
    imageLink: ImageLink;
}[]