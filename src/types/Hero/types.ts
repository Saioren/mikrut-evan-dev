import { LinkGroup } from "../Link/types";
import { RichText as RichTextType } from "../RichText/types";

type HeroTypes = 'standard'

export type HeroType = {
    type?: HeroTypes;
    standard?: StandardHero;
  }

  export type HeroImage = {
    id: string;
    alt: string;
    filename: string;
    mimeType: string;
    filesize: number;
    width: number;
    height: number;
    createdAt: string;
    updatedAt: string;
    url: string;
    thumbnailURL: string | null;
  }
  
  export type StandardHero = {
    padding: string;
    heading: string;
    content: {
      richText: RichTextType;
      links?: LinkGroup; 
    };
    heroImage: HeroImage;
  }