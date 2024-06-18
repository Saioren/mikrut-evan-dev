import { Field } from "payload/types";

export const ProjectsField: Field = {
    name: 'projectsField',
    type: 'group',
    fields: [
        {
            name: 'projectImage',
            type: 'upload',
            relationTo: 'media',
            required: true,
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