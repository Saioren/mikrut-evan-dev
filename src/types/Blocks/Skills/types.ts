import { Media } from "@/types/Fields/Media/types";
import { Link } from "../../Fields/Link/types";
import { PaddingOption } from "../../Layout/Padding/types";
import { Position } from "../../Layout/Position/types";
import { RichText } from "@/types/Fields/RichText/types";

export type SkillItem = {
  id: string;
  skill: {
    skillName: string;
    skillDescription: RichText;
    skillImage?: Media;
  };
  createdAt: string;
  updatedAt: string;
};

export type SkillsArray = {
  skills?: SkillItem[];
}

export type Skills = {
  blockType?: 'skillsBlock';
  blockName?: string;
  heading: string;
  skills?: SkillItem[];
  padding: PaddingOption;
  position: Position;
  content: {
    richText?: RichText;
    links?: Link[];
  };
};
