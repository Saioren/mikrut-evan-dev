import { LinkGroup } from "../../Fields/Link/types";
import { Padding } from "../../Layout/Padding/types"
import { Position } from "../../Layout/Position/types";
import { RichText } from "../../Fields/RichText/types";

export type Skills = {
    blockType?: 'skillsBlock';
    blockName?: string;
    padding: Padding;
    position: Position;
    richText?: RichText;
    links?: LinkGroup;
}