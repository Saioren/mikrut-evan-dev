import { Media } from "@/types/Fields/Media/types";
import { Link } from "../../Fields/Link/types";
import { PaddingOption } from "../../Layout/Padding/types";
import { Position } from "../../Layout/Position/types";
import { RichText } from "@/types/Fields/RichText/types";

export type SkillCollection = {
    id: string
    skills: Skill[]
}

export type Skill = {
  id: string;
  skillName: string;
  skillDescription: string;
  skillImage: Media;
  skillId: string;
  skillLink: string;
  createdAt: string;
  updatedAt: string;
};

export type Skills = {
  blockType?: 'skillsBlock';
  blockName?: string;
  heading: string;
  padding: PaddingOption;
  position: Position;
  content: {
    richText?: RichText;
    links?: Link[];
  };
};
