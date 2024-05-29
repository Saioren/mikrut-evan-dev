import { ImageLinkGroup } from "@/types/Fields/ImageLink/types";

export type Footer = {
  linkBlock: LinkBlock;
  copyrightBlock: CopyrightBlock;
}

type LinkBlock = {
  linkBlockLabel: string;
  links?: ImageLinkGroup;
}

type CopyrightBlock = {
  copyrightLabel: string;
  copyrightBody: string;
  linkText: string;
  copyrightLinks?: ImageLinkGroup;
}