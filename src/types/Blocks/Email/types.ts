import { PaddingOption } from "@/types/Layout/Padding/types";
import { Position } from "@/types/Layout/Position/types";

export type Email = {
    blockType?: 'emailBlock';
    blockName?: string;
    heading: string;
    padding: PaddingOption;
    position: Position;
}