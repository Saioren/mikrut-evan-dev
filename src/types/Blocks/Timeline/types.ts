import { Media } from "@/types/Fields/Media/types";
import { PaddingOption } from "@/types/Layout/Padding/types";

export type Timeline = {    
    heading: string;
    padding: PaddingOption;
    timelineElements: TimelineElement[];
}

export type TimelineElement = {
    blockType?: 'timelineBlock';
    blockName?: string;
    title: string;
    description: string;
    date: string;
    icon: Media;
}