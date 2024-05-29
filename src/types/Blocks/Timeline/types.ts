import { Media } from "@/types/Fields/Media/types";
import { Padding } from "@/types/Layout/Padding/types";

export type Timeline = {    
    header: string;
    padding: Padding;
    timelineElements: TimelineElement[];
}

export type TimelineElement = {
    blockType?: 'timelineBlock';
    blockName?: string;
    header: string;
    padding: Padding;
    title: string;
    description: string;
    date: string;
    icon: Media;
}