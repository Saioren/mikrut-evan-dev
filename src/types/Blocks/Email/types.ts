import { Padding } from "@/types/Layout/Padding/types";
import { Position } from "@/types/Layout/Position/types";

export type Email = {
    blockType?: 'emailBlock';
    blockName?: string;
    header: string;
    padding: Padding;
    position: Position;
}