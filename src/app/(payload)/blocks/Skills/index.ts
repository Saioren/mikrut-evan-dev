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
        {
            name: 'heading',
            type: 'text',
        },
        {
            name: 'skills',
            label: 'Skills',
            type: 'relationship',
            relationTo: 'skillsCollection',
            hasMany: true,
        },
        Padding,
        Position,
        Content,
    ]
}

export default SkillsBlock;