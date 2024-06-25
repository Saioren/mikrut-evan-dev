import { Field } from "payload/types";

export const ProjectsField: Field = {
    name: 'projectsField',
    type: 'array',
    fields: [
        {
            name: 'projectImage',
            type: 'upload',
            relationTo: 'media',
            required: false,
            admin: {
                condition: (_, siblingData) => siblingData.imageType === false
            }
        },
        {
            name: 'projectImageDark',
            type: 'upload',
            relationTo: 'media',
            required: false,
            admin: {
                condition: (_, siblingData) => siblingData.imageType === true
            }
        },
        {
            name: 'projectImageLight',
            type: 'upload',
            relationTo: 'media',
            required: false,
            admin: {
                condition: (_, siblingData) => siblingData.imageType === true
            }
        },
        {
            name: 'imageType',
            type: 'checkbox',
            label: 'Dynamic Image',
            defaultValue: false,
        },
        {
            name: 'projectName',
            type: 'text',
        },
        {
            name: 'projectTeaser',
            type: 'text',
        },
        {
            name: 'projectDescription',
            type: 'textarea',
        },   
        {
            name: 'projectUrl',
            type: 'text',
            admin: {
                description: 'Keep identical to [Slide Url] in any given carousel slide.'
            }
        },  
    ]
}
