import { Link } from "@/types/Fields/Link/types";
import { Media } from "@/types/Fields/Media/types";
import { RichText } from "@/types/Fields/RichText/types";
import { PaddingOption } from "@/types/Layout/Padding/types";

export type Timeline = {    
    heading: string;
    content: {
        richText?: RichText
        links?: Link[]
      }
    padding: PaddingOption;
    timelineElements: TimelineElement[];
    blockType?: 'timelineBlock';
    blockName?: string;
}

export type TimelineElement = {
    title: string;
    description: string;
    date: string;
    icon: Media;
}