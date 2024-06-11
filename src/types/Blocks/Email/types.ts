import { Link } from "@/types/Fields/Link/types";
import { RichText } from "@/types/Fields/RichText/types";
import { PaddingOption } from "@/types/Layout/Padding/types";
import { Position } from "@/types/Layout/Position/types";

export type Email = {
    blockType?: 'emailBlock';
    blockName?: string;
    heading: string;
    padding: PaddingOption;
    content?: {
        richText?: RichText;
        links?: Link[];
    }
}