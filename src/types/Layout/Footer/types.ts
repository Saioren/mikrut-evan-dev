import { ImageLink } from "@/types/Fields/ImageLink/types";

export type Footer = {
  linkBlock: {
    linkBlockLabel: string;
    links?: ImageLink[];
  }
  copyrightBlock: {
    copyrightLabel: string;
    copyrightBody: string;
    linkText: string;
    copyrightLinks?: ImageLink[];
  }
  globalType?: 'footer';
  globalName?: string;
  id: string;
}