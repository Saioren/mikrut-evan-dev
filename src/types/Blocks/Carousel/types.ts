import { LinkGroup } from "@/types/Fields/Link/types";
import { Media } from "@/types/Fields/Media/types";
import { RichText } from "@/types/Fields/RichText/types";
import { Padding } from "@/types/Layout/Padding/types"
import { Position } from "@/types/Layout/Position/types";

export type SlideGroup = {
    slide: Media;
  }[]

export type Carousel = {
    blockType?: 'carouselBlock';
    blockName: string;
    padding: Padding;
    position: Position;
    richText?: RichText;
    links?: LinkGroup;
    slides: SlideGroup;
}