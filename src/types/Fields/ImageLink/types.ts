import { PageType } from "../../Layout/Page/types"
import { Media } from "../Media/types";

export type ImageLink = {
  imageLink: {
    type: 'reference' | 'custom';
    reference?: {
      relationTo: 'pages';
      value: PageType| 'null';
    }
    url?: string;
    newTab?: boolean;
    image: Media;
  }
}