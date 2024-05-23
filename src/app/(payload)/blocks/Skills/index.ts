import { Block } from "payload/types";
import Padding from "../../fields/Padding";
import Position from "../../fields/Position";
import Content from "../../fields/Content";

const SkillsBlock: Block = {
    slug: 'skillsBlock',
    labels: {
        plural: 'Skill Blocks',
        singular: 'Skill Block',
    },
    fields: [
        Padding,
        Position,
        Content,
    ]
}

export default SkillsBlock;