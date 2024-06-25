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
        Padding,
        Position,
        Content,
        {
            name: 'skills',
            type: 'array',
            fields: [
                {
                    name: 'skillName',
                    type: 'text',
                },
                {
                    name: 'skillDescription',
                    type: 'textarea',
                },
                {
                    name: 'skillImage',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                },
                {
                    name: 'skillId',
                    type: 'text',
                },
                {
                    name: 'skillLink',
                    type: 'text',
                },
            ]
        },
    ]
}

export default SkillsBlock;