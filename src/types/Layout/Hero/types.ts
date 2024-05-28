import { RichText } from "@/types/Fields/RichText/types";
import { LinkGroup } from "@/types/Fields/Link/types";
import { Media } from "@/types/Fields/Media/types";

type HeroTypes = 'standard'

export type Hero = {
    type?: HeroTypes;
    standard?: StandardHero;
  }
  
  export type StandardHero = {
    type?: 'standard';
    padding: string;
    heading: string;
    richText?: RichText;
    links?: LinkGroup;
    heroImage: Media;
  }