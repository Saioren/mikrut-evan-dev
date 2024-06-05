import { Link } from "@/types/Fields/Link/types";
import { Media } from "@/types/Fields/Media/types";
import { RichText } from "@/types/Fields/RichText/types";
import { PaddingOption } from "@/types/Layout/Padding/types"
import { Position } from "@/types/Layout/Position/types";

export type Slide = {
  slide: Media;
  alt: string;
  id: string;
}

export type Carousel = {
    blockType?: 'carouselBlock';
    blockName: string;
    heading: string;
    padding: PaddingOption;
    position: Position;
    content: {
      richText?: RichText;
      links?: Link[];
    }
    slides: Slide[];
}