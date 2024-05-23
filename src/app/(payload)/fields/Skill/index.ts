import { Field } from "payload/types";

export const SkillField: Field = {
    name: 'skill',
    label: 'Skills',
    type: 'array',
    fields: [
        {
            name: 'skillName',
            type: 'text',
        },
        {
            name: 'skillDescription',
            type: 'richText',
        },
        {
            name: 'skillImage',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
    ]
}