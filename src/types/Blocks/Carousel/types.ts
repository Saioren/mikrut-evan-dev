import { Link } from "@/types/Fields/Link/types";
import { Media } from "@/types/Fields/Media/types";
import { RichText } from "@/types/Fields/RichText/types";
import { PaddingOption } from "@/types/Layout/Padding/types"
import { Position } from "@/types/Layout/Position/types";

export type Slide = {
  projectImageDark: Media;
  projectImageLight: Media;
  projectImage: Media;
  slideTitle: string;
  slideDescription: string;
  slideUrl: string;
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
  };
  slides: Slide[];
};