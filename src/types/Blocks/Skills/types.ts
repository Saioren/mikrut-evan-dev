import { Link } from "../../Fields/Link/types";
import { Padding } from "../../Layout/Padding/types"
import { Position } from "../../Layout/Position/types";
import { RichText } from "@/types/Fields/RichText/types";

export type Skills = {
    blockType?: 'skillsBlock';
    blockName?: string;
    header: string;
    padding: Padding;
    position: Position;
    content: {
        richText?: RichText;
        links?: Link[];
      }
}