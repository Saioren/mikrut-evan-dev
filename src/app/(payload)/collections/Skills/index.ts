import { CollectionConfig } from "payload";


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
        }
    ]
}

export default SkillsCollection;