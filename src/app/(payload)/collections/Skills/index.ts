import { CollectionConfig } from "payload/types";


const SkillsCollection: CollectionConfig = {
    slug: 'skillsCollection',
    labels: {
        plural: 'Skills',
        singular: 'Skills',
    },
    fields: [
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
    ]
}

export default SkillsCollection;